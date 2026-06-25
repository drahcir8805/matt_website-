"use client";

import { useState } from "react";
import type { Quote } from "../../model/types";
import { formatMoney } from "../../model/quote";
import { AVATAR_BG, C, F, SHADOW } from "../tokens";

const LABEL: React.CSSProperties = {
  fontFamily: F.sans,
  fontSize: 11,
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  color: C.taupe,
};

export function QuoteCard({
  quote,
  onApprove,
  onDecline,
}: {
  quote: Quote;
  onApprove: (quote: Quote) => void;
  onDecline: (quote: Quote) => void;
}) {
  const approved = quote.status === "approved";

  return (
    <div style={{ display: "flex", gap: 14, alignItems: "flex-end" }}>
      <div style={{ width: 34, height: 34, borderRadius: "50%", flexShrink: 0, background: AVATAR_BG }} />

      {/* estimate paper */}
      <div
        style={{
          background: C.paper,
          boxShadow: SHADOW.paper,
          padding: 10,
          maxWidth: 520,
          width: "100%",
          animation: "mrRise 0.5s ease both",
        }}
      >
        <div style={{ border: `1px solid ${C.goldBorder}`, padding: "34px 38px 30px" }}>
          {/* masthead */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              borderBottom: `1px solid ${C.line}`,
              paddingBottom: 22,
              marginBottom: 24,
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 42,
                  height: 42,
                  border: `1px solid rgba(176,141,87,0.6)`,
                  borderRadius: "50%",
                  fontFamily: F.serif,
                  fontSize: 16,
                  color: C.gold,
                  marginBottom: 14,
                }}
              >
                MR
              </div>
              <div style={{ fontFamily: F.serif, fontSize: 23, fontWeight: 600, lineHeight: 1, color: C.ink }}>
                Matt Photography
              </div>
              <div style={{ ...LABEL, letterSpacing: "0.16em", marginTop: 7 }}>
                Fine-art wedding photography
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontFamily: F.serif, fontStyle: "italic", fontSize: 28, color: C.gold, lineHeight: 1 }}>
                {approved ? "Confirmed" : "Estimate"}
              </div>
              <div style={{ fontFamily: F.sans, fontSize: 12, color: C.taupe, marginTop: 10 }}>
                {quote.eventSummary}
              </div>
            </div>
          </div>

          {/* prepared for */}
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 26, gap: 24 }}>
            <div>
              <div style={{ ...LABEL, marginBottom: 7 }}>Prepared for</div>
              <div style={{ fontFamily: F.serif, fontSize: 20, color: C.ink }}>{quote.clientName}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ ...LABEL, marginBottom: 7 }}>Sent to</div>
              <div style={{ fontFamily: F.serif, fontSize: 20, color: C.ink }}>{quote.clientEmail}</div>
            </div>
          </div>

          {/* line items */}
          <div style={{ fontFamily: F.sans, fontSize: 16, borderTop: `1px solid ${C.line}` }}>
            {quote.lineItems.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 120px",
                  alignItems: "baseline",
                  padding: "16px 0",
                  borderBottom: `1px dotted ${C.dot}`,
                }}
              >
                <span>
                  <span style={{ fontFamily: F.serif, fontSize: 20 }}>{item.label}</span>
                  {item.detail && (
                    <>
                      <br />
                      <span style={{ fontSize: 13, color: C.taupe }}>{item.detail}</span>
                    </>
                  )}
                </span>
                <span style={{ textAlign: "right", fontFamily: F.serif, fontSize: 20 }}>
                  {formatMoney(item.amount, quote.currency)}
                </span>
              </div>
            ))}
          </div>

          {/* totals */}
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 8 }}>
            <div style={{ width: 300 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "12px 0",
                  fontFamily: F.sans,
                  fontSize: 14,
                  color: C.inkSoft,
                }}
              >
                <span>Subtotal</span>
                <span>{formatMoney(quote.subtotal, quote.currency)}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "12px 0",
                  fontFamily: F.sans,
                  fontSize: 14,
                  color: C.inkSoft,
                  borderBottom: `1px solid ${C.line}`,
                }}
              >
                <span>Deposit to reserve</span>
                <span>{formatMoney(quote.deposit, quote.currency)}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  padding: "16px 0 0",
                }}
              >
                <span style={{ ...LABEL, letterSpacing: "0.2em" }}>Total</span>
                <span style={{ fontFamily: F.serif, fontSize: 34, color: C.ink }}>
                  {formatMoney(quote.total, quote.currency)}
                </span>
              </div>
            </div>
          </div>

          {/* note + actions */}
          <div style={{ marginTop: 28, paddingTop: 24, borderTop: `1px solid ${C.line}` }}>
            <p
              style={{
                fontFamily: F.serif,
                fontStyle: "italic",
                fontSize: 18,
                lineHeight: 1.5,
                color: C.inkSoft,
                margin: "0 0 22px",
              }}
            >
              Everything here is flexible — we&apos;ll shape it around your day. Nothing is locked until
              you are. — Matt
            </p>

            {approved ? (
              <div
                style={{
                  fontFamily: F.sans,
                  fontSize: 13,
                  color: C.inkSoft,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: C.green }} />
                Approved — your deposit invoice is on its way to {quote.clientEmail}.
              </div>
            ) : (
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <GoldButton onClick={() => onApprove(quote)}>Approve &amp; reserve →</GoldButton>
                <GhostButton onClick={() => onDecline(quote)}>Adjust details</GhostButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function GoldButton({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 11,
        padding: "15px 32px",
        background: hover ? "#a8814d" : C.gold,
        color: C.cream,
        fontFamily: F.sans,
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        border: `1px solid ${C.goldDeep}`,
        borderRadius: 3,
        boxShadow: SHADOW.goldBtn,
        cursor: "pointer",
        transform: hover ? "translateY(-2px)" : "none",
        transition: "transform 0.2s ease, background 0.2s ease",
      }}
    >
      {children}
    </button>
  );
}

function GhostButton({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "15px 28px",
        background: "transparent",
        color: C.inkSoft,
        fontFamily: F.sans,
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        border: `1px solid rgba(42,36,32,0.28)`,
        borderRadius: 3,
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}
