"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type ServiceTagsMarqueeProps = {
  tags: string[];
  speed?: number;
};

export function ServiceTagsMarquee({
  tags,
  speed = 30,
}: ServiceTagsMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const setRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      const set = setRef.current;
      if (!track || !set) return;

      const setWidth = set.offsetWidth;
      if (setWidth === 0) return;

      const tween = gsap.to(track, {
        x: -setWidth,
        duration: setWidth / speed,
        ease: "none",
        repeat: -1,
      });

      return () => {
        tween.kill();
      };
    },
    { scope: trackRef, dependencies: [tags.join("|"), speed] },
  );

  return (
    <div className="overflow-hidden">
      <div
        ref={trackRef}
        className="flex w-max flex-row flex-nowrap items-center"
      >
        <div
          ref={setRef}
          className="flex flex-row flex-nowrap items-center gap-2 pr-2"
          aria-hidden="false"
        >
          {tags.map((tag) => (
            <span
              key={`a-${tag}`}
              className="whitespace-nowrap rounded-[4px] bg-[rgba(246,246,246,1)] px-3 py-1.5 font-display text-[13px] text-[rgba(32,37,39,1)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          className="flex flex-row flex-nowrap items-center gap-2 pr-2"
          aria-hidden="true"
        >
          {tags.map((tag) => (
            <span
              key={`b-${tag}`}
              className="whitespace-nowrap rounded-[4px] bg-[rgba(246,246,246,1)] px-3 py-1.5 font-display text-[13px] text-[rgba(32,37,39,1)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
