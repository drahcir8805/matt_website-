import { AVATAR_BG, C, F } from "../tokens";

/** Intimate centered header from the chat comp: avatar, "Matt", presence line. */
export function ChatHeader() {
  return (
    <div
      style={{
        padding: "30px 0 24px",
        textAlign: "center",
        borderBottom: `1px solid ${C.hair}`,
        background: C.cream,
      }}
    >
      <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: AVATAR_BG,
            boxShadow: "0 6px 16px -8px rgba(42,36,32,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "ui-monospace, monospace",
            fontSize: 8,
            color: "rgba(246,241,234,0.6)",
          }}
        >
          matt
        </div>
        <div>
          <div style={{ fontFamily: F.serif, fontSize: 24, fontWeight: 600, color: C.ink, lineHeight: 1 }}>
            Matt
          </div>
          <div
            style={{
              fontFamily: F.sans,
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: C.taupe,
              marginTop: 7,
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: C.green,
                marginRight: 7,
                verticalAlign: "middle",
              }}
            />
            Usually replies within the hour
          </div>
        </div>
      </div>
    </div>
  );
}
