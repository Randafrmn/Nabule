"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type ServiceTagsMarqueeProps = {
  tags: string[];
  /** Effective horizontal speed: higher = faster (pixels per second). */
  speed?: number;
};

function measureTagSegment(track: HTMLElement, tagCount: number): number {
  if (track.children.length < tagCount * 2) return 0;
  const start = track.children[0] as HTMLElement;
  const afterFirstSet = track.children[tagCount] as HTMLElement;
  return afterFirstSet.offsetLeft - start.offsetLeft;
}

export function ServiceTagsMarquee({
  tags,
  speed = 32,
}: ServiceTagsMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const tagKey = tags.join("|");

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track || tags.length === 0) return;

      let tween: gsap.core.Tween | null = null;
      let raf1 = 0;
      let raf2 = 0;

      const run = () => {
        tween?.kill();
        gsap.set(track, { x: 0 });
        const segment = measureTagSegment(track, tags.length);
        if (segment < 8) return;
        const duration = Math.max(6, segment / speed);
        tween = gsap.fromTo(
          track,
          { x: 0 },
          {
            x: -segment,
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
        roTimer = setTimeout(scheduleRun, 40);
      });
      ro.observe(track);

      return () => {
        if (roTimer) clearTimeout(roTimer);
        cancelAnimationFrame(raf1);
        cancelAnimationFrame(raf2);
        ro.disconnect();
        tween?.kill();
        gsap.set(track, { clearProps: "x" });
      };
    },
    { scope: trackRef, dependencies: [tagKey, speed, tags.length] },
  );

  return (
    <div className="pointer-events-none overflow-hidden">
      <div
        ref={trackRef}
        className="relative flex w-max flex-nowrap items-center gap-2 will-change-transform"
      >
        {tags.map((tag) => (
          <span
            key={`a-${tag}`}
            className="shrink-0 whitespace-nowrap rounded-sm bg-[rgba(246,246,246,1)] px-3 py-1.5 font-display text-[13px] text-[rgba(32,37,39,1)]"
          >
            {tag}
          </span>
        ))}
        {tags.map((tag) => (
          <span
            key={`b-${tag}`}
            className="shrink-0 whitespace-nowrap rounded-sm bg-[rgba(246,246,246,1)] px-3 py-1.5 font-display text-[13px] text-[rgba(32,37,39,1)]"
            aria-hidden="true"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
