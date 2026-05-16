"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

function clampPct(n: number) {
  return Math.min(100, Math.max(0, Math.round(n)));
}

export function InitialLoader() {
  const [visible, setVisible] = useState(true);
  const [pct, setPct] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef({ value: 0 });
  const creepRef = useRef<gsap.core.Tween | null>(null);
  const exitedRef = useRef(false);

  useLayoutEffect(() => {
    if (!visible) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const title = titleRef.current;
    const barInner = barRef.current;
    const p = progressRef.current;
    if (!root || !title || !barInner || exitedRef.current) return;

    const syncBar = () => {
      gsap.set(barInner, {
        scaleX: p.value / 100,
        transformOrigin: "left center",
      });
      setPct(clampPct(p.value));
    };

    const exit = () => {
      if (exitedRef.current) return;
      exitedRef.current = true;
      creepRef.current?.kill();
      gsap.to(root, {
        autoAlpha: 0,
        duration: 0.48,
        ease: "power2.inOut",
        onComplete: () => {
          setVisible(false);
          document.body.style.overflow = "";
        },
      });
    };

    gsap.set(root, { autoAlpha: 1 });
    gsap.fromTo(
      title,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" },
    );

    p.value = 0;
    syncBar();

    const t0 = Date.now();
    /** Minimum time on screen before the final 100% sweep (avoids a “flash” on fast loads). */
    const MIN_MS_BEFORE_FINISH = 2800;

    creepRef.current = gsap.to(p, {
      value: 85,
      duration: 3.6,
      ease: "power1.out",
      onUpdate: syncBar,
    });

    const runFinishSweep = () => {
      creepRef.current?.kill();
      gsap.to(p, {
        value: 100,
        duration: 0.88,
        ease: "power2.out",
        onUpdate: syncBar,
        onComplete: () => {
          syncBar();
          gsap.delayedCall(0.28, exit);
        },
      });
    };

    const finish = () => {
      const elapsed = Date.now() - t0;
      const waitSec = Math.max(0, (MIN_MS_BEFORE_FINISH - elapsed) / 1000);
      gsap.delayedCall(waitSec, runFinishSweep);
    };

    if (document.readyState === "complete") {
      gsap.delayedCall(0.08, finish);
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    const failsafe = window.setTimeout(() => {
      if (p.value < 100 && !exitedRef.current) finish();
    }, 16000);

    return () => {
      window.clearTimeout(failsafe);
      window.removeEventListener("load", finish);
      creepRef.current?.kill();
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[rgba(255,255,255,1)] px-6"
      aria-busy="true"
      aria-label="Loading"
      aria-live="polite"
    >
      <p
        ref={titleRef}
        className="font-headline text-[clamp(3rem,18vw,7rem)] font-normal leading-none tracking-tight text-[rgba(32,37,39,1)]"
      >
        nabulé
      </p>
      <div className="mt-10 flex w-full max-w-[min(100%,20rem)] flex-col items-center gap-4">
        <span className="font-display text-[clamp(2rem,10vw,3.5rem)] font-light tracking-tight text-[rgba(32,37,39,0.2)] tabular-nums">
          {pct}
          <span className="text-[0.55em] font-medium text-[rgba(32,37,39,0.38)]">
            %
          </span>
        </span>
        <div className="h-px w-full overflow-hidden rounded-full bg-[rgba(32,37,39,0.06)]">
          <div
            ref={barRef}
            className="h-full w-full scale-x-0 rounded-full bg-[rgba(32,37,39,0.22)] will-change-transform"
          />
        </div>
      </div>
    </div>
  );
}
