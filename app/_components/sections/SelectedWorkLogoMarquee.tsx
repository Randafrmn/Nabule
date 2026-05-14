"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type Props = {
  logoSrc: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
};

export function SelectedWorkLogoMarquee({
  logoSrc,
  logoAlt,
  logoWidth,
  logoHeight,
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const loop = rootRef.current?.querySelector<HTMLElement>(
        "[data-selected-work-marquee]",
      );
      if (!loop) return;
      const half = loop.scrollWidth / 2;
      if (half <= 0) return;
      const tween = gsap.fromTo(
        loop,
        { x: 0 },
        { x: -half, duration: 18, ease: "none", repeat: -1 },
      );
      return () => tween.kill();
    },
    { scope: rootRef },
  );

  const copies = [0, 1, 2, 3, 4, 5];
  const loopLogos = [...copies, ...copies];

  return (
    <div
      ref={rootRef}
      className="w-[118px] overflow-hidden bg-transparent px-2 py-1.5"
    >
      <div
        data-selected-work-marquee
        className="flex w-max items-center gap-5"
      >
        {loopLogos.map((_, index) => (
          <Image
            key={index}
            src={logoSrc}
            alt={index === 0 ? logoAlt : ""}
            width={logoWidth}
            height={logoHeight}
            className="h-3.5 w-auto shrink-0 brightness-0 invert"
            aria-hidden={index > 0}
          />
        ))}
      </div>
    </div>
  );
}
