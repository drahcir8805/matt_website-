/**
 * MODEL — rate card + sample data.
 *
 * The real AI implementation reads RATE_CARD_PROMPT as its system prompt and
 * computes quotes from it (never inventing prices). For now it's a placeholder
 * you fill in, and the mock chatService below uses SAMPLE_QUOTE to drive the UI.
 */
import type { Quote } from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// TODO(rate-card): paste Matt's real rate-card system prompt here.
// Keep it the single source of truth the assistant prices from. It should also
// instruct the model to (a) ask one question at a time, (b) collect name + email
// before finalizing, and (c) end the final message with a <QUOTE>{...json...}</QUOTE>
// block matching the Quote type in ./types.ts.
// ─────────────────────────────────────────────────────────────────────────────
export const RATE_CARD_PROMPT = `You are Matt's wedding-photography booking assistant. [RATE CARD GOES HERE]`;

/** Demo quote mirroring the design comp (Eleanor & James / Sonoma). */
export const SAMPLE_QUOTE: Quote = {
  clientName: "Eleanor & James",
  clientEmail: "eleanor@example.com",
  eventSummary: "Wedding · Saturday, 14 June 2025 · Sonoma vineyard",
  lineItems: [
    { label: "Full-day coverage", detail: "Up to ten hours, from prep to last dance", amount: 4800 },
    { label: "Second photographer", detail: "A quiet second eye for the whole day", amount: 1200 },
    { label: "Fine-art album", detail: "12×12, hand-bound, forty pages", amount: 950 },
    { label: "Engagement session", detail: "An afternoon together before the day", amount: 700 },
    { label: "Travel — Sonoma", detail: "Mileage & one night's stay", amount: 250 },
  ],
  subtotal: 7900,
  total: 7900,
  deposit: 2370,
  currency: "USD",
  status: "pending",
};
