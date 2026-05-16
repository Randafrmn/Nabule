"use client";

import { useEffect } from "react";
import gsap from "gsap";

/** Offset from viewport top so section title clears sticky UI (px). */
const SCROLL_OFFSET_Y = 20;

function scrollWindowToY(targetY: number, duration = 1.05) {
  const start = window.scrollY;
  const clampedTarget = Math.max(0, targetY);
  const state = { y: start };
  return gsap.to(state, {
    y: clampedTarget,
    duration,
    ease: "power2.inOut",
    overwrite: true,
    onUpdate: () => {
      window.scrollTo(0, state.y);
    },
  });
}

/**
 * Delegates same-page `#hash` clicks: smooth scroll via GSAP (nav, CTAs, footer).
 */
export function SmoothHashNavigation() {
  useEffect(() => {
    const onClickCapture = (e: MouseEvent) => {
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }
      if (e.button !== 0) return;

      const el = (e.target as Element | null)?.closest?.("a[href]");
      if (!el) return;
      const a = el as HTMLAnchorElement;
      if (a.target && a.target !== "" && a.target !== "_self") return;

      const href = a.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      if (href === "#") {
        e.preventDefault();
        scrollWindowToY(0, 0.9);
        if (typeof window !== "undefined") {
          window.history.pushState(null, "", window.location.pathname + window.location.search);
        }
        return;
      }

      const id = href.slice(1);
      if (!id || !/^[\w-]+$/.test(id)) return;

      const section = document.getElementById(id);
      if (!section) return;

      e.preventDefault();

      const rect = section.getBoundingClientRect();
      const targetY = rect.top + window.scrollY - SCROLL_OFFSET_Y;

      scrollWindowToY(targetY);
      window.history.pushState(null, "", href);
    };

    document.addEventListener("click", onClickCapture, true);
    return () => document.removeEventListener("click", onClickCapture, true);
  }, []);

  return null;
}
