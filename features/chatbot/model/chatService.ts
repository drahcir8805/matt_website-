/**
 * MODEL (server) — the brains behind /api/chat. The route handler is a one-line
 * delegate to handleChat(); all logic lives here in the feature.
 *
 * respond() runs the real model when ANTHROPIC_API_KEY is set, and falls back to
 * a scripted mock otherwise so the UI always works (e.g. before keys are wired).
 */
import { anthropic } from "@ai-sdk/anthropic";
import { streamText } from "ai";
import type { WireMessage } from "./types";
import { RATE_CARD_PROMPT, SAMPLE_QUOTE } from "./rateCard";

const MODEL = "claude-sonnet-4-6";

export async function handleChat(req: Request): Promise<Response> {
  const { messages = [] } = (await req.json()) as { messages?: WireMessage[] };
  return respond(messages);
}

/** Produce Matt's next reply as a streamed text Response. */
function respond(messages: WireMessage[]): Response {
  // No key → scripted intake so the chat still demos end-to-end.
  if (!process.env.ANTHROPIC_API_KEY) {
    return streamMock(mockReply(messages));
  }

  // Real model. It reads RATE_CARD_PROMPT as its system prompt, prices from it,
  // and emits the <QUOTE>{...}</QUOTE> block itself once it has name + email.
  const result = streamText({
    model: anthropic(MODEL),
    system: RATE_CARD_PROMPT,
    messages: messages.map((m) => ({ role: m.role, content: m.text })),
  });

  // Plain text stream of just the deltas — matches the client's reader.
  return result.toTextStreamResponse();
}

// ─── Mock fallback ───────────────────────────────────────────────────────────

/** Scripted intake keyed off how many turns the client has taken. */
function mockReply(messages: WireMessage[]): string {
  const userTurns = messages.filter((m) => m.role === "user").length;
  switch (userTurns) {
    case 0:
    case 1:
      return "Eleanor & James — congratulations, truly. I've quietly held 14 June for you while we talk. How many guests are you imagining?";
    case 2:
      return "I know that light well — lovely just before dusk. And whereabouts is the day taking place?";
    case 3:
      return "Wonderful. Before I put numbers to it — what name and email should I prepare the estimate under?";
    default:
      return (
        "All set — here's your estimate. Nothing is locked until you are; approve when it feels right.\n" +
        `<QUOTE>${JSON.stringify(SAMPLE_QUOTE)}</QUOTE>`
      );
  }
}

/** Stream a string back a few characters at a time, like a live response. */
function streamMock(text: string): Response {
  const encoder = new TextEncoder();
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const tokens = text.match(/\S+\s*/g) ?? [text];
      for (const token of tokens) {
        controller.enqueue(encoder.encode(token));
        await new Promise((r) => setTimeout(r, 22));
      }
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
    },
  });
}
