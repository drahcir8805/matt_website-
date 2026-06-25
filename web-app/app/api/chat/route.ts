import { anthropic } from "@ai-sdk/anthropic";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

// Allow streaming responses up to 30s.
export const maxDuration = 30;

// ---------------------------------------------------------------------------
// RATE_CARD_PROMPT — placeholder.
// This is where Matt's real rate card + the <QUOTE>{...}</QUOTE> contract will
// live in a later step. For now it's just a friendly intake assistant so we can
// prove the streaming spine end-to-end with a real model.
// ---------------------------------------------------------------------------
const SYSTEM_PROMPT = `You are the booking assistant for Matt, a wedding photographer.
A client just clicked "Book Now". Greet them warmly and ask short, friendly
questions about their event — one question at a time — to understand what they
need (event type, dates, hours, location, add-ons). Keep replies concise.

Do NOT quote any prices yet — pricing is added in a later step.`;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: anthropic("claude-sonnet-4-6"),
    system: SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
