/**
 * MODEL — quote parsing & formatting. Pure / isomorphic (client + server).
 */
import type { Quote } from "./types";

export const QUOTE_OPEN = "<QUOTE>";
export const QUOTE_CLOSE = "</QUOTE>";

const QUOTE_RE = /<QUOTE>([\s\S]*?)<\/QUOTE>/;

/**
 * Pull the <QUOTE>{...}</QUOTE> block out of an assistant message.
 * Returns the visible text (block removed) and the parsed Quote if present + valid.
 */
export function parseQuote(text: string): { visibleText: string; quote?: Quote } {
  const match = text.match(QUOTE_RE);
  if (!match) return { visibleText: text };

  try {
    const quote = JSON.parse(match[1].trim()) as Quote;
    return { visibleText: text.replace(QUOTE_RE, "").trim(), quote };
  } catch {
    // Malformed JSON — never invent a quote; just show the text without the raw block.
    return { visibleText: stripQuoteForDisplay(text) };
  }
}

/**
 * While a message is still streaming, hide everything from the first <QUOTE>
 * onward so the user never sees raw JSON mid-stream.
 */
export function stripQuoteForDisplay(text: string): string {
  const idx = text.indexOf(QUOTE_OPEN);
  return idx === -1 ? text : text.slice(0, idx).trimEnd();
}

export function formatMoney(amount: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}
