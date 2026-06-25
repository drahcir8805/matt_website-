/**
 * VIEW — design tokens lifted from the design comps (03-chat / 04-quote).
 * Kept as a JS object so the feature styles itself with inline styles and stays
 * fully self-contained (no globals.css or Tailwind config changes required).
 */
export const C = {
  cream: "#F6F1EA",
  creamDeep: "#EFE8DE",
  paper: "#FBF8F3",
  paperWarm: "#F3E4DB",
  white: "#FFFFFF",

  ink: "#2A2420",
  inkSoft: "#6B5F54",
  taupe: "#9a8b7d",
  taupeLight: "#b3a596",
  taupeFaint: "#8a8178",

  gold: "#B08D57",
  goldDeep: "#9c794a",
  goldBorder: "rgba(176,141,87,0.5)",
  goldBorderSoft: "rgba(176,141,87,0.45)",

  rose: "#E3C9BE",
  green: "#7da06f",

  hair: "rgba(42,36,32,0.08)",
  line: "rgba(42,36,32,0.16)",
  dot: "rgba(42,36,32,0.2)",
  bubbleBorder: "rgba(42,36,32,0.07)",
} as const;

export const SHADOW = {
  bubble: "0 8px 22px -18px rgba(42,36,32,0.4)",
  paper: "0 40px 90px -50px rgba(42,36,32,0.55)",
  composer: "0 10px 26px -20px rgba(42,36,32,0.4)",
  goldBtn: "inset 0 1px 0 rgba(255,255,255,0.3), 0 12px 24px -16px rgba(42,36,32,0.6)",
} as const;

export const AVATAR_BG = "radial-gradient(120% 120% at 35% 25%, #D8B6A8, #7E5F4E)";

export const F = {
  serif: "var(--font-mr-serif), 'Cormorant Garamond', Georgia, serif",
  sans: "var(--font-mr-sans), 'Mulish', system-ui, sans-serif",
} as const;
