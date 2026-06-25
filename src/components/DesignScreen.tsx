"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export type Screen = {
  desktop: string;
  mobile?: string;
  pending?: string;
  css: string;
};

type Props = {
  /** Generated screen markup from src/screens/* */
  screen: Screen;
  /** Route the primary (gold) call-to-action advances to */
  next?: string;
  /** Route that "back to portfolio" style links return to */
  back?: string;
};

const DESKTOP_WIDTH = 1440;
const MOBILE_BREAKPOINT = 820;

/**
 * Renders a converted design-canvas frame as a real page.
 * Picks the desktop or mobile frame by viewport width, scales the
 * fixed-width desktop design to fit, and wires the design's `href="#"`
 * call-to-action buttons into the booking flow.
 */
export default function DesignScreen({ screen, next, back }: Props) {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      const mobile = w < MOBILE_BREAKPOINT && !!screen.mobile;
      setIsMobile(mobile);
      setZoom(mobile ? 1 : Math.min(1, w / DESKTOP_WIDTH));
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [screen.mobile]);

  const html = isMobile && screen.mobile ? screen.mobile : screen.desktop;
  const frameWidth = isMobile && screen.mobile ? 390 : DESKTOP_WIDTH;

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    const anchor = (e.target as HTMLElement).closest("a");
    if (!anchor) return;
    const href = anchor.getAttribute("href");
    if (href && href !== "#") return; // let real links behave normally

    e.preventDefault();
    const text = (anchor.textContent || "").toLowerCase();
    const style = anchor.getAttribute("style") || "";

    if (back && text.includes("portfolio")) {
      router.push(back);
    } else if (next && style.includes("#B08D57")) {
      // gold buttons are the primary forward action
      router.push(next);
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        background: "#EFE8DE",
      }}
    >
      <style>{screen.css}</style>
      <div
        onClick={handleClick}
        style={{ width: frameWidth, zoom } as React.CSSProperties}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
