"use client";

import Image from "next/image";
import gsap from "gsap";
import { useCallback } from "react";

const footerLinks = [
  {
    heading: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#faq" },
    ],
  },
  {
    heading: "CMS",
    links: [
      { label: "Work", href: "#" },
      { label: "Work Single", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Blog Single", href: "#" },
    ],
  },
  {
    heading: "Utility",
    links: [
      { label: "404", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Licensing", href: "#" },
    ],
  },
  {
    heading: "Socials",
    links: [
      { label: "Framer", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Behance", href: "#" },
    ],
  },
] as const;

function ArrowUpIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 14V3M8 3L3.5 7.5M8 3L12.5 7.5"
        stroke="rgba(255,255,255,1)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Bottom-left credits — RoundedEdge.svg hanya desktop */
function FooterCornerLeftCredits() {
  return (
    <div className="absolute bottom-0 left-0 z-10 rounded-tr-[20px] bg-[rgba(255,255,255,1)] px-4 py-2.5 md:px-3 md:py-3">
      <Image
        src="/images/RoundedEdge.svg"
        alt=""
        aria-hidden
        width={20}
        height={20}
        className="pointer-events-none absolute bottom-full left-0 hidden rotate-x-180 md:block"
      />
      <Image
        src="/images/RoundedEdge.svg"
        alt=""
        aria-hidden
        width={20}
        height={20}
        className="pointer-events-none absolute bottom-0 left-full -ml-px hidden rotate-x-180 md:block"
      />
      <p className="relative z-10 font-display text-xs font-normal text-[rgba(32,37,39,1)] md:text-sm">
        © Gola Templates
      </p>
    </div>
  );
}

/** Desktop only — Imprint, bottom-right; RoundedEdge.svg hanya desktop */
function FooterCornerRightImprint() {
  return (
    <div className="absolute bottom-0 right-0 z-10 hidden rounded-tl-[20px] bg-[rgba(255,255,255,1)] px-4 py-2.5 md:block md:px-3 md:py-3">
      <Image
        src="/images/RoundedEdge.svg"
        alt=""
        aria-hidden
        width={20}
        height={20}
        className="pointer-events-none absolute bottom-0 right-full -mr-px hidden rotate-180 md:block"
      />
      <Image
        src="/images/RoundedEdge.svg"
        alt=""
        aria-hidden
        width={20}
        height={20}
        className="pointer-events-none absolute bottom-full right-0 -mb-px hidden rotate-180 md:block"
      />
      <a
        href="#"
        className="relative z-10 inline-block font-display text-xs font-normal text-[rgba(32,37,39,1)] transition-opacity hover:opacity-75 md:text-sm"
      >
        Imprint
      </a>
    </div>
  );
}

/** Mobile only — scroll to top with GSAP */
function FooterCornerRightScrollTop() {
  const scrollToTop = useCallback(() => {
    const y = { value: typeof window !== "undefined" ? window.scrollY : 0 };
    gsap.to(y, {
      value: 0,
      duration: 0.85,
      ease: "power2.inOut",
      onUpdate: () => {
        window.scrollTo(0, y.value);
      },
    });
  }, []);

  return (
    <div className="absolute bottom-0 right-0 z-10 rounded-tl-[20px] bg-[rgba(255,255,255,1)] p-2 md:hidden">
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="inline-flex h-6 w-8 items-center justify-center rounded-[500px] bg-[rgba(32,37,39,1)] transition-opacity hover:opacity-90 active:opacity-80"
      >
        <ArrowUpIcon />
      </button>
    </div>
  );
}

export function Footer() {
  return (
    <footer
      id="footer"
      className="w-full bg-background pb-3 pt-4 md:pb-4 md:pt-6"
      aria-label="Site footer"
    >
      <div className="w-full p-3 md:p-4">
        <div className="relative overflow-hidden rounded-tl-[20px] rounded-tr-[20px] bg-[rgba(32,37,39,1)] px-6 pb-[5.25rem] pt-8 md:px-10 md:pb-20 md:pt-11 lg:px-18 lg:pb-[5.25rem] lg:pt-12">
          <div className="hidden w-full justify-center md:flex">
            <div className="w-full max-w-[min(100%,100rem)] text-left">
              <h2 className="text-[clamp(3.25rem,14.5vw,14rem)] font-normal leading-[0.93] tracking-tight text-[rgba(255,255,255,1)]">
                <span className="font-headline">nabulé</span>{" "}
                <span className="font-serif font-normal italic">design</span>
              </h2>
            </div>
          </div>

          <nav
            className="mx-auto mt-6 flex w-full max-w-[min(100%,70rem)] flex-col items-center gap-8 text-center md:mt-14 md:ml-16 md:grid md:grid-cols-4 md:items-start md:gap-x-2 md:gap-y-8 md:text-left"
            aria-label="Footer"
          >
            {footerLinks.map((col) => (
              <div key={col.heading} className="flex flex-col items-center md:items-start">
                <h3 className="font-headline text-sm font-semibold text-[rgba(255,255,255,1)] md:text-base">
                  {col.heading}
                </h3>
                <ul className="mt-3 flex flex-col items-center gap-2 md:mt-4 md:items-start md:gap-2.5">
                  {col.links.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="font-display text-sm text-[rgba(255,255,255,0.6)] transition-colors hover:text-[rgba(255,255,255,0.9)] md:text-[15px]"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <FooterCornerLeftCredits />
          <FooterCornerRightImprint />
          <FooterCornerRightScrollTop />
        </div>
      </div>
    </footer>
  );
}
