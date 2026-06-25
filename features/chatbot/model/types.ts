/**
 * MODEL — domain types for the booking chatbot feature.
 * Pure types, safe to import from both client (viewmodel/view) and server (chatService).
 */

export type QuoteStatus = "pending" | "approved";

export type QuoteLineItem = {
  label: string;
  amount: number;
  /** Optional one-line description shown under the label (design: small taupe text). */
  detail?: string;
};

/** The machine-readable block the assistant emits inside <QUOTE>{...}</QUOTE>. */
export type Quote = {
  clientName: string;
  clientEmail: string;
  eventSummary: string;
  lineItems: QuoteLineItem[];
  subtotal: number;
  total: number;
  deposit: number;
  currency: string;
  status: QuoteStatus;
};

export type ChatRole = "user" | "assistant";

/** A single rendered turn in the thread. Carries an optional inline Quote artifact. */
export type ChatMessage = {
  id: string;
  role: ChatRole;
  /** Visible text, with any <QUOTE> block already stripped out. */
  text: string;
  /** Present only on the assistant turn that produced a quote. */
  quote?: Quote;
};

/** Minimal shape sent to /api/chat (no client-only fields like quote/status). */
export type WireMessage = { role: ChatRole; text: string };
