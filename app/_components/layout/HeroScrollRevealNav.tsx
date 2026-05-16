"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#news", label: "Blog" },
  { href: "#faq", label: "Contact" },
] as const;

function getHeroScrollThreshold(): number {
  const hero = document.getElementById("hero");
  if (!hero) return Number.POSITIVE_INFINITY;
  const top = hero.getBoundingClientRect().top + window.scrollY;
  return top + hero.offsetHeight * 0.2;
}

export function HeroScrollRevealNav() {
  const barRef = useRef<HTMLDivElement>(null);
  const [activeHash, setActiveHash] = useState("");
  const [interactive, setInteractive] = useState(false);
  const revealedRef = useRef(false);

  useEffect(() => {
    const syncHash = () => {
      setActiveHash(typeof window !== "undefined" ? window.location.hash : "");
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  const applyVisibility = useCallback((shouldShow: boolean) => {
    const bar = barRef.current;
    if (!bar) return;

    if (shouldShow === revealedRef.current) return;
    revealedRef.current = shouldShow;

    gsap.killTweensOf(bar);

    if (shouldShow) {
      gsap.fromTo(
        bar,
        { y: -18, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.5,
          ease: "power3.out",
          onComplete: () => setInteractive(true),
        },
      );
    } else {
      setInteractive(false);
      gsap.to(bar, {
        y: -18,
        autoAlpha: 0,
        duration: 0.35,
        ease: "power2.inOut",
      });
    }
  }, []);

  useEffect(() => {
    const bar = barRef.current;
    if (bar) {
      gsap.set(bar, { y: -18, autoAlpha: 0 });
    }
    revealedRef.current = false;

    const lastScrollYRef = { current: typeof window !== "undefined" ? window.scrollY : 0 };
    const SCROLL_DELTA = 6;

    const onScroll = () => {
      const y = window.scrollY;
      const threshold = getHeroScrollThreshold();
      const pastHero = y >= threshold - 0.5;

      if (!pastHero) {
        applyVisibility(false);
        lastScrollYRef.current = y;
        return;
      }

      const delta = y - lastScrollYRef.current;
      lastScrollYRef.current = y;

      if (delta > SCROLL_DELTA) {
        applyVisibility(false);
      } else if (delta < -SCROLL_DELTA) {
        applyVisibility(true);
      }
    };

    const onResize = () => {
      lastScrollYRef.current = window.scrollY;
      const threshold = getHeroScrollThreshold();
      if (window.scrollY < threshold - 0.5) {
        applyVisibility(false);
      }
    };

    lastScrollYRef.current = window.scrollY;
    onResize();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [applyVisibility]);

  const isActive = (href: string) => {
    const h = href.slice(1);
    if (!activeHash) return h === "work";
    return activeHash === href || activeHash === `#${h}`;
  };

  return (
    <div
      className={`fixed inset-x-0 top-0 z-[60] flex items-start justify-center px-3 pt-0 md:px-4 ${
        interactive ? "" : "pointer-events-none"
      }`}
      aria-hidden={!interactive}
    >
      <div
        ref={barRef}
        className="flex w-fit max-w-[calc(100vw-0.75rem)] flex-wrap items-center justify-center gap-x-1 gap-y-1 rounded-b-[14px] bg-[rgba(255,255,255,1)] px-2 py-1.5 shadow-[0_4px_20px_rgba(32,37,39,0.06)] sm:flex-nowrap sm:gap-x-1.5 sm:rounded-b-2xl sm:px-2.5 sm:py-2 md:gap-x-2 md:px-3"
      >
        <a
          href="#"
          className="shrink-0 font-display text-[11px] font-semibold tracking-tight text-[rgba(32,37,39,1)] sm:text-xs md:text-[13px]"
        >
          nabulé
        </a>

        <nav
          className="flex min-w-0 shrink items-center justify-center gap-0.5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-1 [&::-webkit-scrollbar]:hidden"
          aria-label="Primary"
        >
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`shrink-0 whitespace-nowrap rounded-[500px] px-2 py-0.5 font-display text-[11px] font-medium transition-colors sm:px-2.5 sm:py-1 sm:text-xs md:text-[13px] ${
                  active
                    ? "bg-[rgba(246,246,246,1)] text-[rgba(32,37,39,1)]"
                    : "text-[rgba(32,37,39,0.85)] hover:bg-[rgba(246,246,246,0.65)]"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <a
          href="#pricing"
          className="inline-flex shrink-0 items-center justify-center rounded-[500px] bg-[rgba(32,37,39,1)] px-2.5 py-1 font-display text-[11px] font-medium text-[rgba(255,255,255,1)] transition-opacity hover:opacity-90 sm:px-3 sm:py-1 sm:text-xs md:text-[13px]"
        >
          Start Project
        </a>
      </div>
    </div>
  );
}
