"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function parseStatValue(raw: string): { target: number; suffix: string } {
  const match = /^(\d+)/.exec(raw);
  if (!match) {
    return { target: 0, suffix: raw };
  }
  return {
    target: Number.parseInt(match[1], 10),
    suffix: raw.slice(match[1].length),
  };
}

type ExperienceAnimatedStatValueProps = {
  value: string;
  className?: string;
};

export function ExperienceAnimatedStatValue({
  value,
  className,
}: ExperienceAnimatedStatValueProps) {
  const ref = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const { target, suffix } = parseStatValue(value);
    const state = { n: 0 };
    el.textContent = `0${suffix}`;

    const trigger = el.closest("article") ?? el;

    const tween = gsap.to(state, {
      n: target,
      duration: 3,
      ease: "power2.out",
      scrollTrigger: {
        trigger,
        start: "top 88%",
        once: true,
      },
      onUpdate: () => {
        el.textContent = `${Math.round(state.n)}${suffix}`;
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [value]);

  return <p ref={ref} className={className} />;
}
