"use client";

import { useState } from "react";
import { C, F, SHADOW } from "../tokens";

/** Rounded-pill composer with a gold circular send button (chat comp). */
export function ChatComposer({
  value,
  onChange,
  onSend,
  disabled,
}: {
  value: string;
  onChange: (v: string) => void;
  onSend: () => void;
  disabled?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const canSend = value.trim().length > 0 && !disabled;

  return (
    <div style={{ padding: "20px 0 26px", borderTop: `1px solid ${C.hair}`, background: C.cream }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (canSend) onSend();
        }}
        style={{
          width: 720,
          maxWidth: "calc(100% - 36px)",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: 14,
          background: C.white,
          border: `1px solid ${focused ? C.goldBorder : "rgba(42,36,32,0.12)"}`,
          borderRadius: 30,
          padding: "8px 8px 8px 26px",
          boxShadow: SHADOW.composer,
          transition: "border-color 0.2s ease",
        }}
      >
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Write to Matt…"
          disabled={disabled}
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            background: "transparent",
            fontFamily: F.sans,
            fontSize: 16,
            color: C.ink,
          }}
        />
        <button
          type="submit"
          disabled={!canSend}
          aria-label="Send"
          style={{
            width: 46,
            height: 46,
            borderRadius: "50%",
            background: C.gold,
            border: `1px solid ${C.goldDeep}`,
            color: C.cream,
            fontSize: 18,
            cursor: canSend ? "pointer" : "default",
            opacity: canSend ? 1 : 0.5,
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)",
            transition: "opacity 0.2s ease",
          }}
        >
          →
        </button>
      </form>
    </div>
  );
}
