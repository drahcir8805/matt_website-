"use client";

/**
 * VIEW (root) — composes the chat screen and binds it to the viewmodel.
 * Pure presentation: every behavior comes from useChatbot().
 */
import { useEffect, useRef } from "react";
import { useChatbot } from "../viewmodel/useChatbot";
import { C, F } from "./tokens";
import { fontVars } from "./fonts";
import { ChatHeader } from "./components/ChatHeader";
import { MessageBubble, TypingBubble } from "./components/MessageBubble";
import { QuoteCard } from "./components/QuoteCard";
import { ChatComposer } from "./components/ChatComposer";

export function ChatbotView() {
  const vm = useChatbot();
  const threadRef = useRef<HTMLDivElement>(null);

  const lastMessage = vm.messages[vm.messages.length - 1];
  useEffect(() => {
    threadRef.current?.scrollTo({ top: threadRef.current.scrollHeight, behavior: "smooth" });
  }, [vm.messages, vm.isStreaming]);

  return (
    <div
      className={fontVars}
      style={{
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        background: C.cream,
        color: C.ink,
        fontFamily: F.sans,
      }}
    >
      <style>{KEYFRAMES}</style>

      <ChatHeader />

      {/* thread */}
      <div ref={threadRef} style={{ flex: 1, overflowY: "auto", padding: "34px 0" }}>
        <div
          style={{
            width: 720,
            maxWidth: "calc(100% - 36px)",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div
            style={{
              textAlign: "center",
              fontSize: 11,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: C.taupeLight,
              marginBottom: 4,
            }}
          >
            Today · 2:14 pm
          </div>

          {vm.messages.map((m) =>
            m.quote ? (
              <QuoteCard
                key={m.id}
                quote={m.quote}
                onApprove={(q) => vm.approveQuote(m.id, q)}
                onDecline={() => vm.declineQuote(m.id)}
              />
            ) : (
              <MessageBubble key={m.id} message={m} />
            ),
          )}

          {vm.isStreaming && !lastMessage?.text && <TypingBubble />}
        </div>
      </div>

      <ChatComposer
        value={vm.input}
        onChange={vm.setInput}
        onSend={() => vm.send()}
        disabled={vm.isStreaming}
      />
    </div>
  );
}

const KEYFRAMES = `
@keyframes mrRise { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
@keyframes mrBlink { 0%, 100% { opacity:0.25; } 50% { opacity:1; } }
::selection { background:#E3C9BE; color:#2A2420; }
`;
