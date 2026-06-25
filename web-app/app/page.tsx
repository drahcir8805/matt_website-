"use client";

import { useEffect, useRef, useState } from "react";
import { Camera, Send } from "lucide-react";
import { QuoteCard, type Quote } from "./components/QuoteCard";

/**
 * MOCK chat UI for Matt's booking assistant.
 * No AI wired up yet — messages are canned so we can see the layout + QuoteCard.
 * Later: swap `messages` for useChat() and parse the <QUOTE> block out of the
 * real streamed assistant text.
 */

type Message =
  | { id: string; role: "user" | "assistant"; text: string }
  | { id: string; role: "assistant"; quote: Quote };

const SAMPLE_QUOTE: Quote = {
  clientName: "Priya Sharma",
  clientEmail: "priya@example.com",
  eventSummary: "Wedding · 1 day · 8 hrs · Napa Valley",
  lineItems: [
    { label: "Full-day coverage (8 hrs)", amount: 3200 },
    { label: "Second photographer", amount: 800 },
    { label: "Engagement session add-on", amount: 450 },
  ],
  subtotal: 4450,
  total: 4450,
  deposit: 1335,
  currency: "USD",
  status: "pending",
};

const INITIAL: Message[] = [
  {
    id: "a1",
    role: "assistant",
    text: "Hi! I'm Matt's booking assistant 👋 I'll ask a few quick questions and put together a price quote. First — what kind of event are you planning?",
  },
  { id: "u1", role: "user", text: "A wedding in Napa, just one day." },
  {
    id: "a2",
    role: "assistant",
    text: "Lovely. Roughly how many hours of coverage do you need, and would you like a second photographer?",
  },
  {
    id: "u2",
    role: "user",
    text: "8 hours, and yes a second shooter. We'd also love an engagement session.",
  },
  {
    id: "a3",
    role: "assistant",
    text: "Perfect. Last thing — what name and email should I put on the quote?",
  },
  { id: "u3", role: "user", text: "Priya Sharma, priya@example.com" },
  {
    id: "a4",
    role: "assistant",
    text: "All set — here's your quote. Take a look and approve when you're ready:",
  },
  { id: "q1", role: "assistant", quote: SAMPLE_QUOTE },
];

function MessageBubble({ message }: { message: Message }) {
  if ("quote" in message) return null; // rendered separately below

  if (message.role === "user") {
    return (
      <div className="flex justify-end">
        <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-[15px] leading-relaxed text-primary-foreground">
          {message.text}
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Camera className="h-4 w-4" />
      </div>
      <div className="max-w-[80%] whitespace-pre-wrap pt-1 text-[15px] leading-relaxed text-foreground">
        {message.text}
      </div>
    </div>
  );
}

export default function Page() {
  const [messages, setMessages] = useState<Message[]>(INITIAL);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  function send() {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [
      ...m,
      { id: crypto.randomUUID(), role: "user", text },
      {
        id: crypto.randomUUID(),
        role: "assistant",
        text: "(mock) Thanks! Once the AI is wired up, I'll answer here and stream a fresh quote.",
      },
    ]);
    setInput("");
  }

  function updateQuoteStatus(status: Quote["status"]) {
    setMessages((m) =>
      m.map((msg) => ("quote" in msg ? { ...msg, quote: { ...msg.quote, status } } : msg)),
    );
  }

  function handleApprove(quote: Quote) {
    // Stub — a teammate wires this to Stripe + email (or a Supabase insert) later.
    onQuoteApproved(quote);
    updateQuoteStatus("approved");
  }

  function handleDecline() {
    // Revert to chat so they can adjust.
    setMessages((m) => [
      ...m.filter((msg) => !("quote" in msg)),
      {
        id: crypto.randomUUID(),
        role: "assistant",
        text: "No problem — what would you like to change? I can adjust the hours, add-ons, or coverage.",
      },
    ]);
  }

  return (
    <div className="page-texture flex h-screen flex-col">
      {/* Header */}
      <header className="flex items-center gap-3 border-b border-border/50 bg-card/70 px-5 py-3 backdrop-blur-sm">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Camera className="h-5 w-5" />
        </div>
        <div>
          <p className="text-[15px] font-semibold leading-tight">Matt Photography</p>
          <p className="text-xs text-muted-foreground">
            Booking assistant · usually replies instantly
          </p>
        </div>
      </header>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto">
        <div className="mx-auto w-full max-w-2xl space-y-6 px-4 py-8">
          {messages.map((m) =>
            "quote" in m ? (
              <div key={m.id} className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Camera className="h-4 w-4" />
                </div>
                <div className="w-full max-w-md">
                  <QuoteCard quote={m.quote} onApprove={handleApprove} onDecline={handleDecline} />
                </div>
              </div>
            ) : (
              <MessageBubble key={m.id} message={m} />
            ),
          )}
        </div>
      </div>

      {/* Composer */}
      <div className="border-t border-border/50 bg-card/70 px-4 py-4 backdrop-blur-sm">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send();
          }}
          className="mx-auto flex w-full max-w-2xl items-end gap-2 rounded-2xl border-2 border-border/60 bg-card px-3 py-2 shadow-sm transition-colors focus-within:border-primary/40"
        >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send();
              }
            }}
            rows={1}
            placeholder="Message Matt's assistant…"
            className="max-h-32 flex-1 resize-none bg-transparent px-2 py-2 text-[15px] placeholder:text-muted-foreground/60 focus:outline-none"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-40"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
        <p className="mx-auto mt-2 max-w-2xl text-center text-[11px] text-muted-foreground/60">
          Mock UI — AI responses and live quotes get wired in next.
        </p>
      </div>
    </div>
  );
}

/** Stub the payments/email teammate will replace (or swap for a Supabase insert). */
function onQuoteApproved(quote: Quote) {
  console.log("Quote approved:", quote);
}
