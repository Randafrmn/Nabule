"use client";

/**
 * Clients marquee — seamless infinite scroll (GreenSock-style pattern:
 * duplicate *groups* with matching flex gaps, translate by exactly one group step).
 * @see https://codepen.io/GreenSock/pen/GRweYYJ (horizontalLoop / marquee parts)
 */

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const logos = [
  { src: "/logos/acme.svg", alt: "Acme", width: 120, height: 31 },
  { src: "/logos/donut.svg", alt: "Donut", width: 45, height: 30 },
  { src: "/logos/canba.svg", alt: "Kanba", width: 111, height: 30 },
  { src: "/logos/goldline.svg", alt: "Goldline", width: 127, height: 30 },
  { src: "/logos/asgardia.svg", alt: "Asgardia", width: 134, height: 30 },
  { src: "/logos/utosia.svg", alt: "Utosia", width: 120, height: 30 },
  { src: "/logos/circle.svg", alt: "Circle", width: 107, height: 30 },
] as const;

/** Extra sets so the strip stays longer than the viewport while looping. */
const VISIBLE_SETS = 4;

function measureOneStep(loop: HTMLElement): number {
  if (loop.children.length < 2) return 0;
  const a = loop.children[0] as HTMLElement;
  const b = loop.children[1] as HTMLElement;
  return b.offsetLeft - a.offsetLeft;
}

export function ClientsSection() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const loop = rootRef.current?.querySelector<HTMLElement>(
        "[data-marquee-loop]",
      );
      if (!loop) return;

      let tween: gsap.core.Tween | null = null;
      let raf1 = 0;
      let raf2 = 0;

      const run = () => {
        tween?.kill();
        gsap.set(loop, { x: 0 });
        const step = measureOneStep(loop);
        if (step < 32) return;

        /** ~24px/s — satu siklus lebih cepat; minimum ~18s agar tidak terlalu buru-buru. */
        const pixelsPerSecond = 24;
        const duration = Math.max(18, step / pixelsPerSecond);

        tween = gsap.fromTo(
          loop,
          { x: 0 },
          {
            x: -step,
            duration,
            ease: "none",
            repeat: -1,
          },
        );
      };

      const scheduleRun = () => {
        raf1 = requestAnimationFrame(() => {
          raf2 = requestAnimationFrame(run);
        });
      };

      scheduleRun();

      let roTimer: ReturnType<typeof setTimeout> | undefined;
      const ro = new ResizeObserver(() => {
        if (roTimer) clearTimeout(roTimer);
        roTimer = setTimeout(scheduleRun, 60);
      });
      ro.observe(loop);

      return () => {
        if (roTimer) clearTimeout(roTimer);
        cancelAnimationFrame(raf1);
        cancelAnimationFrame(raf2);
        ro.disconnect();
        tween?.kill();
        gsap.set(loop, { clearProps: "x" });
      };
    },
    { scope: rootRef },
  );

  return (
    <section
      id="clients"
      aria-label="Trusted by"
      className="w-full bg-background"
    >
      <div className="w-full px-3 md:px-4">
        <div
          ref={rootRef}
          className="w-full overflow-hidden rounded-[20px] bg-[rgba(246,246,246,1)] py-7 md:py-10"
        >
          <div className="overflow-hidden px-6 md:px-22">
            <div
              data-marquee-loop
              className="relative flex w-max flex-nowrap will-change-transform gap-6 md:gap-16"
            >
              {Array.from({ length: VISIBLE_SETS }, (_, setIndex) => (
                <div
                  key={setIndex}
                  className="flex shrink-0 flex-nowrap items-center gap-6 md:gap-16"
                  aria-hidden={setIndex > 0 ? true : undefined}
                >
                  {logos.map((logo) => (
                    <Image
                      key={`${setIndex}-${logo.src}`}
                      src={logo.src}
                      alt={setIndex === 0 ? logo.alt : ""}
                      width={logo.width}
                      height={logo.height}
                      className="h-4 w-auto shrink-0 opacity-90 md:h-5"
                      draggable={false}
                      sizes="120px"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
