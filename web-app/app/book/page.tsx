"use client";

import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";

export default function BookPage() {
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const isBusy = status === "submitted" || status === "streaming";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || isBusy) return;
    sendMessage({ text });
    setInput("");
  }

  return (
    <div className="mx-auto flex h-full w-full max-w-2xl flex-1 flex-col px-4">
      <header className="border-b border-border/50 py-5">
        <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          Book Matt
        </p>
        <h1 className="text-lg font-semibold text-foreground">
          Let&apos;s plan your shoot
        </h1>
      </header>

      {/* Messages */}
      <div className="flex flex-1 flex-col gap-4 overflow-y-auto py-6">
        {messages.length === 0 && (
          <p className="text-sm text-muted-foreground">
            Say hi to get started — Matt&apos;s assistant will ask a few quick
            questions about your event.
          </p>
        )}

        {messages.map((message) => {
          const text = message.parts
            .filter((part) => part.type === "text")
            .map((part) => part.text)
            .join("");

          const isUser = message.role === "user";

          return (
            <div
              key={message.id}
              className={isUser ? "flex justify-end" : "flex justify-start"}
            >
              <div
                className={[
                  "max-w-[80%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm",
                  isUser
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-foreground border border-border/60",
                ].join(" ")}
              >
                {text}
              </div>
            </div>
          );
        })}

        {status === "submitted" && (
          <div className="flex justify-start">
            <div className="rounded-2xl border border-border/60 bg-card px-4 py-2.5 text-sm text-muted-foreground">
              …
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="flex gap-2 border-t border-border/50 py-4"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message…"
          className="flex-1 rounded-xl border border-border bg-input px-4 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring/40"
        />
        <button
          type="submit"
          disabled={isBusy || input.trim() === ""}
          className="rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-40"
        >
          Send
        </button>
      </form>
    </div>
  );
}
