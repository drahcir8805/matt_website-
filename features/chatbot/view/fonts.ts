/**
 * VIEW — feature-scoped fonts. next/font must be module scope; applying these
 * `.variable` classes only on the feature root keeps the fonts isolated to the
 * chatbot rather than leaking into the app's root layout.
 */
import { Cormorant_Garamond, Mulish } from "next/font/google";

export const mrSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-mr-serif",
  display: "swap",
});

export const mrSans = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mr-sans",
  display: "swap",
});

export const fontVars = `${mrSerif.variable} ${mrSans.variable}`;
