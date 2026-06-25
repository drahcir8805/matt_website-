import type { ChatMessage } from "../../model/types";
import { AVATAR_BG, C, F, SHADOW } from "../tokens";

/** One chat turn. Matt = white bubble with avatar (left); couple = rose bubble (right). */
export function MessageBubble({ message }: { message: ChatMessage }) {
  if (!message.text) return null;

  if (message.role === "user") {
    return (
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div
          style={{
            background: C.rose,
            borderRadius: "20px 20px 5px 20px",
            padding: "16px 22px",
            maxWidth: 460,
            fontFamily: F.sans,
            fontSize: 16,
            lineHeight: 1.55,
            color: C.ink,
            whiteSpace: "pre-wrap",
          }}
        >
          {message.text}
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", gap: 14, alignItems: "flex-end" }}>
      <div
        style={{
          width: 34,
          height: 34,
          borderRadius: "50%",
          flexShrink: 0,
          background: AVATAR_BG,
        }}
      />
      <div
        style={{
          background: C.white,
          border: `1px solid ${C.bubbleBorder}`,
          borderRadius: "20px 20px 20px 5px",
          padding: "16px 22px",
          maxWidth: 480,
          boxShadow: SHADOW.bubble,
          fontFamily: F.sans,
          fontSize: 16,
          lineHeight: 1.55,
          color: C.ink,
          whiteSpace: "pre-wrap",
        }}
      >
        {message.text}
      </div>
    </div>
  );
}

/** Three-dot "Matt is writing" bubble shown while the assistant streams. */
export function TypingBubble() {
  return (
    <div style={{ display: "flex", gap: 14, alignItems: "flex-end" }}>
      <div style={{ width: 34, height: 34, borderRadius: "50%", flexShrink: 0, background: AVATAR_BG }} />
      <div
        style={{
          background: C.white,
          border: `1px solid ${C.bubbleBorder}`,
          borderRadius: "20px 20px 20px 5px",
          padding: "18px 22px",
          boxShadow: SHADOW.bubble,
          display: "flex",
          gap: 6,
        }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: C.taupeLight,
              animation: "mrBlink 1.2s ease-in-out infinite",
              animationDelay: `${i * 0.18}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
