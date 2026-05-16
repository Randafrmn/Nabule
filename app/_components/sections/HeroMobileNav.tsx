"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#news", label: "Blog" },
  { href: "#faq", label: "Contact" },
];

export function HeroMobileNav() {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  const animateClose = useCallback(() => {
    const overlay = overlayRef.current;
    const root = itemsRef.current;
    if (!overlay || !root) {
      setOpen(false);
      return;
    }
    const items = root.querySelectorAll(".mobile-nav-item");
    gsap
      .timeline({
        onComplete: () => setOpen(false),
      })
      .to(items, {
        y: -12,
        opacity: 0,
        duration: 0.22,
        stagger: 0.035,
        ease: "power2.in",
      })
      .to(
        overlay,
        { autoAlpha: 0, duration: 0.28, ease: "power2.inOut" },
        0.05,
      );
  }, []);

  const openMenu = () => setOpen(true);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useGSAP(
    () => {
      if (!open) return;
      const overlay = overlayRef.current;
      const root = itemsRef.current;
      if (!overlay || !root) return;
      const items = root.querySelectorAll(".mobile-nav-item");
      gsap.killTweensOf(overlay);
      gsap.killTweensOf(items);
      gsap.set(overlay, { autoAlpha: 0 });
      gsap.set(items, { y: 28, opacity: 0 });
      gsap.to(overlay, {
        autoAlpha: 1,
        duration: 0.38,
        ease: "power2.out",
      });
      gsap.to(items, {
        y: 0,
        opacity: 1,
        duration: 0.48,
        stagger: 0.07,
        ease: "power3.out",
        delay: 0.12,
      });
    },
    { dependencies: [open], scope: overlayRef },
  );

  return (
    <>
      <div
        className={`absolute top-0 right-0 z-30 md:hidden ${open ? "pointer-events-none invisible" : ""}`}
      >
        <div className="relative rounded-bl-[18px] bg-white pl-0 pb-0 pt-0 pr-0">
          <Image
            src="/images/RoundedEdge.svg"
            alt=""
            aria-hidden="true"
            width={20}
            height={20}
            className="pointer-events-none absolute top-full right-0 -mt-px rotate-90"
          />
          <button
            type="button"
            onClick={openMenu}
            className="relative z-10 rounded-bl-[14px] px-3 py-2 font-display text-[14px] font-medium leading-none hover:opacity-90"
            style={{ color: "rgba(32, 37, 39, 1)" }}
            aria-expanded={open}
            aria-controls="mobile-primary-nav"
          >
            Menu
          </button>
        </div>
      </div>

      {open ? (
        <div
          ref={overlayRef}
          id="mobile-primary-nav"
          className="fixed inset-0 z-[100] flex flex-col bg-[rgba(255,255,255,0.98)] backdrop-blur-sm md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div
            ref={itemsRef}
            className="flex flex-1 flex-col px-6 pb-10 pt-6"
          >
            <div className="mobile-nav-item mb-8 flex justify-end">
              <button
                type="button"
                onClick={animateClose}
                className="rounded-bl-[18px] px-5 py-3 font-display text-[14px] font-medium leading-none text-[rgba(32,37,39,1)]"
              >
                Close
              </button>
            </div>
            <div className="mobile-nav-item mb-12">
              <p className="font-display text-sm font-medium text-[rgba(32,37,39,0.45)]">
                Studio
              </p>
              <p className="mt-1 font-headline text-3xl tracking-tight text-[rgba(32,37,39,1)]">
                nabulé
              </p>
              <p className="font-serif text-lg italic text-[rgba(32,37,39,0.75)]">
                design
              </p>
            </div>

            <nav className="flex flex-col gap-1" aria-label="Primary">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="mobile-nav-item font-display text-2xl font-medium text-[rgba(32,37,39,1)] py-2 transition-opacity hover:opacity-70"
                  onClick={() => animateClose()}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mobile-nav-item mt-auto pt-10">
              <a
                href="#pricing"
                className="inline-flex w-full items-center justify-center rounded-[500px] bg-[rgba(32,37,39,1)] px-6 py-3.5 font-display text-sm font-medium text-white transition-opacity hover:opacity-90"
                onClick={() => animateClose()}
              >
                Start Project
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
