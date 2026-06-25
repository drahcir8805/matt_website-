"use client";

/**
 * VIEWMODEL — all chat state + behavior. The View renders what this returns and
 * calls these handlers; it holds no business logic of its own.
 */
import { useCallback, useRef, useState } from "react";
import type { ChatMessage, Quote, WireMessage } from "../model/types";
import { parseQuote, stripQuoteForDisplay } from "../model/quote";
import { onQuoteApproved } from "../model/quoteActions";

const GREETING: ChatMessage = {
  id: "greeting",
  role: "assistant",
  text: "Eleanor & James — congratulations, truly. I'm so glad you found your way here. Tell me a little about the day you're dreaming of.",
};

export type ChatStatus = "idle" | "streaming";

function uid() {
  return typeof crypto !== "undefined" && crypto.randomUUID
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2);
}

export function useChatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<ChatStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const isStreaming = status === "streaming";

  // Keep a ref so handlers can read the latest thread without stale closures.
  const messagesRef = useRef(messages);
  messagesRef.current = messages;

  const patch = useCallback((id: string, fields: Partial<ChatMessage>) => {
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, ...fields } : m)));
  }, []);

  const send = useCallback(
    async (raw?: string) => {
      const text = (raw ?? input).trim();
      if (!text || isStreaming) return;

      const userMsg: ChatMessage = { id: uid(), role: "user", text };
      const assistantId = uid();
      setMessages((prev) => [
        ...prev,
        userMsg,
        { id: assistantId, role: "assistant", text: "" },
      ]);
      setInput("");
      setStatus("streaming");
      setError(null);

      const wire: WireMessage[] = [...messagesRef.current, userMsg].map((m) => ({
        role: m.role,
        text: m.text,
      }));

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: wire }),
        });
        if (!res.ok || !res.body) throw new Error(`Chat failed (${res.status})`);

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let acc = "";

        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          acc += decoder.decode(value, { stream: true });
          // Hide any partial/complete <QUOTE> block while streaming.
          patch(assistantId, { text: stripQuoteForDisplay(acc) });
        }

        const { visibleText, quote } = parseQuote(acc);
        patch(assistantId, { text: visibleText, quote });
      } catch (e) {
        patch(assistantId, {
          text: "Apologies — I lost my footing there. Could you say that once more?",
        });
        setError(e instanceof Error ? e.message : "Unknown error");
      } finally {
        setStatus("idle");
      }
    },
    [input, isStreaming, patch],
  );

  const approveQuote = useCallback(
    async (messageId: string, quote: Quote) => {
      // Optimistically reflect approval; the stub handles the real side effect.
      patch(messageId, { quote: { ...quote, status: "approved" } });
      await onQuoteApproved({ ...quote, status: "approved" });
    },
    [patch],
  );

  const declineQuote = useCallback(
    (messageId: string) => {
      // Revert to chat so they can adjust: drop the quote, invite changes.
      patch(messageId, { quote: undefined });
      setMessages((prev) => [
        ...prev,
        {
          id: uid(),
          role: "assistant",
          text: "Of course — nothing's locked. What would you like to shape differently? The hours, the album, a second shooter — anything at all.",
        },
      ]);
    },
    [patch],
  );

  return {
    messages,
    input,
    setInput,
    status,
    isStreaming,
    error,
    send,
    approveQuote,
    declineQuote,
  };
}
