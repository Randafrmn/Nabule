  "use client";

  import Image from "next/image";
  import Link from "next/link";
  import { useLayoutEffect, useRef, type RefObject } from "react";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { useGSAP } from "@gsap/react";
  import {
    motion,
    useMotionValue,
    useScroll,
    useTransform,
    type MotionValue,
  } from "framer-motion";

  gsap.registerPlugin(ScrollTrigger, useGSAP);

  type JourneyStep = {
    id: string;
    number: string;
    label: string;
    titleLines: string[];
    description: string;
    milestonesTitle: string;
    tags: string[];
  };

  const journeySteps: JourneyStep[] = [
    {
      id: "01",
      number: "01",
      label: "Discovery",
      titleLines: ["Exploring Your", "Brand & Vision"],
      description:
        "We start by understanding your brand’s goals, target audience, and industry landscape. Through research and discussions, we lay a strategic foundation that ensures every decision aligns with your vision and business objectives.",
      milestonesTitle: "Discovery Milestones",
      tags: ["Brand & Market Research", "Project Goals & Direction"],
    },
    {
      id: "02",
      number: "02",
      label: "Strategy",
      titleLines: ["Defining", " a Clear Roadmap"],
      description:
        "We develop a strategic plan that includes brand positioning, messaging, and design direction. This ensures consistency across all touchpoints, creating a strong and recognizable brand identity that resonates with your audience.",
      milestonesTitle: "Strategy Milestones",
      tags: ["Brand Strategy & Positioning", "Messaging & Visual Direction"],
    },
    {
      id: "03",
      number: "03",
      label: "Design",
      titleLines: ["Bringing Your", "Brand to Life"],
      description:
        "Our creative team crafts compelling visuals, branding elements, and digital experiences. Every design decision is intentional, ensuring your brand stands out while maintaining a seamless and engaging user experience.",
      milestonesTitle: "Design Milestones",
      tags: ["Initial Design Concepts", "Branding & Visual Assets"],
    },
    {
      id: "04",
      number: "04",
      label: "Refinement",
      titleLines: ["Perfecting", "Every Detail"],
      description:
        "Based on feedback, we refine and enhance the designs to ensure clarity, impact, and consistency. We fine-tune every aspect, from typography to color palettes, ensuring a cohesive and visually stunning brand presence.",
      milestonesTitle: "Refinement Milestones",
      tags: ["Design Revisions & Final", "Brand Guidelines & Assets"],
    },
    {
      id: "05",
      number: "05",
      label: "Launch",
      titleLines: ["Bringing Your", "Brand to the World"],
      description:
        "With everything finalized, we execute the launch across all platforms. Whether it’s a brand identity, website, or campaign, we ensure a smooth rollout, providing support to help you make a lasting impact.",
      milestonesTitle: "Launch Milestones",
      tags: ["Brand Assets & Website", "Marketing & Social Media"],
    },
  ];

  const VISIBLE_CARDS = 2;
  /** gap-3 between cards — must match scroll offset math */
  const CARD_GAP_REM = 0.75;

  function ArrowRightIcon() {
    return (
      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path
          d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
          stroke="rgba(255,255,255,1)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  function OurProcessTab() {
    return (
      <div className="absolute bottom-0 right-0 z-10 rounded-tl-[20px] bg-[rgba(255,255,255,1)] px-4 py-2.5">
        <Image
          src="/images/RoundedEdge.svg"
          alt=""
          aria-hidden
          width={20}
          height={20}
          className="pointer-events-none absolute bottom-0 right-full -mr-px rotate-180"
        />
        <Image
          src="/images/RoundedEdge.svg"
          alt=""
          aria-hidden
          width={20}
          height={20}
          className="pointer-events-none absolute bottom-full right-0 rotate-180 -mb-px"
        />
        <span className="relative z-10 font-display text-sm font-medium text-[rgba(32,37,39,1)]">
          Our Process
        </span>
      </div>
    );
  }

  function JourneyHeroPanel() {
    return (
      <div className="relative h-full min-h-[280px] w-full overflow-hidden rounded-[20px] rounded-br-none md:min-h-0">
        <Image
          src="/images/journey.png"
          alt="Metallic creative journey visual"
          fill
          sizes="(max-width: 1024px) 100vw, 68vw"
          className="object-cover object-center"
        />

        <OurProcessTab />

        <div className="absolute inset-0 z-10 flex flex-col justify-end p-5 pb-8 md:p-8 md:pb-10 lg:p-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-md"
          >
            <h2 className="text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.02] tracking-tight text-[rgba(255,255,255,1)]">
              <span className="block font-headline font-bold">Creative</span>
              <span className="block font-serif font-normal italic">Journey</span>
            </h2>
            <p className="mt-4 font-display text-sm leading-relaxed text-[rgba(255,255,255,0.6)] md:text-base">
              Our structured process ensures clarity, creativity, and strategic
              execution, guiding your brand from concept to launch.
            </p>
            <Link
              href="#contact"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-[500px] bg-[rgba(255,255,255,1)] py-1.5 pl-1.5 pr-4 font-display text-sm font-medium text-[rgba(32,37,39,1)] transition-opacity hover:opacity-90"
            >
              <span className="inline-flex h-6 w-8 shrink-0 items-center justify-center rounded-[500px] bg-[rgba(32,37,39,1)]">
                <ArrowRightIcon />
              </span>
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  function StepTab({ number, label }: { number: string; label: string }) {
    return (
      <div className="absolute top-0 left-0 z-10">
        <div className="relative z-10 inline-flex items-center gap-1.5 rounded-br-[20px] bg-[rgba(255,255,255,1)] pb-2 pl-2 pr-3 pt-2">
          <span className="inline-flex h-4 w-5 shrink-0 items-center justify-center rounded-[500px] bg-[rgba(32,37,39,1)] font-display text-[10px] font-medium text-[rgba(255,255,255,1)]">
            {number}
          </span>
          <span className="font-display text-xs font-medium text-[rgba(32,37,39,1)] md:text-sm">
            {label}
          </span>
        </div>
        <Image
          src="/images/RoundedEdge.svg"
          alt=""
          aria-hidden
          width={20}
          height={20}
          className="pointer-events-none absolute top-full left-0"
        />
        <Image
          src="/images/RoundedEdge.svg"
          alt=""
          aria-hidden
          width={20}
          height={20}
          className="pointer-events-none absolute top-0 left-full -ml-px"
        />
      </div>
    );
  }

  function JourneyCardContent({ step }: { step: JourneyStep }) {
    return (
      <>
        <h3 className="font-headline text-[17px] font-bold leading-[1.15] tracking-tight text-[rgba(32,37,39,1)] md:text-lg">
          {step.titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h3>

        <p className="mt-2.5 flex-1 font-display text-[13px] leading-snug text-[rgba(32,37,39,0.6)] md:text-[13px]">
          {step.description}
        </p>

        <div className="mt-3 w-full rounded-[12px] bg-[rgba(255,255,255,1)] p-3">
          <p className="font-headline text-xs font-bold text-[rgba(32,37,39,1)] md:text-[13px]">
            {step.milestonesTitle}
          </p>
          <div className="mt-2 flex flex-col gap-1.5">
            {step.tags.map((tag) => (
              <span
                key={tag}
                className="journey-card-tag inline-flex w-fit rounded-[4px] bg-[rgba(246,246,246,1)] px-2 py-1 font-display text-[11px] leading-tight text-[rgba(32,37,39,1)] md:text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </>
    );
  }

  const journeyCardClassName =
    "relative box-border flex h-[calc((100%-0.75rem)/2)] min-h-0 shrink-0 flex-col overflow-hidden rounded-[20px] rounded-tl-none bg-[rgba(246,246,246,1)] p-3.5 pt-10 md:p-6 md:pt-12";

  const journeyCardMobileClassName =
    "relative flex flex-col overflow-hidden rounded-[20px] rounded-tl-none bg-[rgba(246,246,246,1)] p-3.5 pt-10 md:p-4 md:pt-11";

  function JourneyCard({
    step,
    mobile = false,
  }: {
    step: JourneyStep;
    mobile?: boolean;
  }) {
    return (
      <article
        className={`${mobile ? journeyCardMobileClassName : journeyCardClassName} journey-card${mobile ? " journey-card--mobile" : ""}`}
      >
        <StepTab number={step.number} label={step.label} />
        <div className="journey-card-inner flex flex-1 flex-col">
          <JourneyCardContent step={step} />
        </div>
      </article>
    );
  }

  function useJourneyDesktopCardAnimations(
    containerRef: RefObject<HTMLDivElement | null>,
    scrollSteps: number,
  ) {
    useGSAP(
      () => {
        const container = containerRef.current;
        if (!container) return;

        const cards = gsap.utils.toArray<HTMLElement>(".journey-card", container);
        if (!cards.length) return;

        const ctx = gsap.context(() => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.65,
            },
          });

          cards.forEach((card, i) => {
            const inner = card.querySelector<HTMLElement>(".journey-card-inner");
            const tags = card.querySelectorAll<HTMLElement>(".journey-card-tag");

            gsap.set(card, { transformOrigin: "center top", force3D: true });

            if (i <= 1) {
              gsap.set(card, { opacity: 1, scale: 1 });
              if (inner) gsap.set(inner, { opacity: 1, y: 0 });
              if (tags.length) gsap.set(tags, { opacity: 1, y: 0 });
              return;
            }

            gsap.set(card, { opacity: 0.5, scale: 0.98 });
            if (inner) gsap.set(inner, { opacity: 0, y: 24 });
            if (tags.length) gsap.set(tags, { opacity: 0, y: 12 });

            const at = Math.max(0, (i - 1) / scrollSteps - 0.02);

            tl.to(
              card,
              { opacity: 1, scale: 1, duration: 0.35, ease: "power2.out" },
              at,
            );

            if (inner) {
              tl.to(
                inner,
                { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
                at,
              );
            }

            if (tags.length) {
              tl.to(
                tags,
                {
                  opacity: 1,
                  y: 0,
                  stagger: 0.05,
                  duration: 0.25,
                  ease: "power2.out",
                },
                at + 0.06,
              );
            }
          });
        }, container);

        return () => ctx.revert();
      },
      { scope: containerRef, dependencies: [scrollSteps], revertOnUpdate: true },
    );
  }

  function JourneyCardsColumn({
    y,
    columnRef,
  }: {
    y?: MotionValue<number>;
    columnRef?: RefObject<HTMLDivElement | null>;
  }) {
    return (
      <motion.div
        ref={columnRef}
        style={y !== undefined ? { y } : undefined}
        className="flex h-full flex-col gap-3 will-change-transform [backface-visibility:hidden] [transform:translateZ(0)]"
      >
        {journeySteps.map((step) => (
          <JourneyCard key={step.id} step={step} />
        ))}
      </motion.div>
    );
  }

  function JourneyStickyDesktop() {
    const containerRef = useRef<HTMLDivElement>(null);
    const columnRef = useRef<HTMLDivElement>(null);
    const scrollDistance = useMotionValue(0);
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end end"],
    });

    const scrollSteps = journeySteps.length - VISIBLE_CARDS;

    useJourneyDesktopCardAnimations(containerRef, scrollSteps);

    useLayoutEffect(() => {
      const column = columnRef.current;
      if (!column) return;

      const measure = () => {
        const height = column.offsetHeight;
        const gapPx =
          Number.parseFloat(getComputedStyle(column).rowGap || "0") ||
          CARD_GAP_REM * 16;
        const cardSlot = (height - gapPx) / VISIBLE_CARDS;
        scrollDistance.set(scrollSteps * (cardSlot + gapPx));
        ScrollTrigger.refresh();
      };

      measure();
      const observer = new ResizeObserver(measure);
      observer.observe(column);
      return () => observer.disconnect();
    }, [scrollDistance, scrollSteps]);

    const y = useTransform(
      [scrollYProgress, scrollDistance],
      ([progress, distance]) =>
        -Math.round((progress as number) * (distance as number)),
    );

    return (
      <div
        ref={containerRef}
        className="relative hidden lg:block"
        style={{ height: `calc(${scrollSteps * 55 + 88}vh)` }}
      >
        <div className="sticky top-4 flex h-[88vh] min-h-[640px] gap-4 overflow-hidden">
          <div className="h-full w-[67%] shrink-0">
            <JourneyHeroPanel />
          </div>
          <div className="relative h-full w-[32%] shrink-0 overflow-hidden">
            <JourneyCardsColumn y={y} columnRef={columnRef} />
          </div>
        </div>
      </div>
    );
  }

  function JourneyMobileLayout() {
    const listRef = useRef<HTMLDivElement>(null);

    useGSAP(
      () => {
        const list = listRef.current;
        if (!list) return;

        const cards = gsap.utils.toArray<HTMLElement>(
          ".journey-card--mobile",
          list,
        );

        const ctx = gsap.context(() => {
          cards.forEach((card) => {
            const inner = card.querySelector<HTMLElement>(".journey-card-inner");
            const tags = card.querySelectorAll<HTMLElement>(".journey-card-tag");

            gsap.set(card, { opacity: 0, y: 40 });
            if (inner) gsap.set(inner, { opacity: 0, y: 20 });
            if (tags.length) gsap.set(tags, { opacity: 0, y: 10 });

            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                once: true,
              },
            });

            tl.to(card, {
              opacity: 1,
              y: 0,
              duration: 0.65,
              ease: "power3.out",
            });

            if (inner) {
              tl.to(
                inner,
                { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
                0.1,
              );
            }

            if (tags.length) {
              tl.to(
                tags,
                {
                  opacity: 1,
                  y: 0,
                  stagger: 0.06,
                  duration: 0.35,
                  ease: "power2.out",
                },
                0.18,
              );
            }
          });
        }, list);

        return () => ctx.revert();
      },
      { scope: listRef, revertOnUpdate: true },
    );

    return (
      <div className="flex flex-col gap-4 lg:hidden">
        <div className="relative aspect-[4/5] w-full md:aspect-auto md:h-[70vh] md:min-h-[480px]">
          <JourneyHeroPanel />
        </div>
        <div ref={listRef} className="flex flex-col gap-3">
          {journeySteps.map((step) => (
            <JourneyCard key={step.id} step={step} mobile />
          ))}
        </div>
      </div>
    );
  }

  export function JourneySection() {
    return (
      <section
        id="journey"
        aria-label="Creative journey process"
        className="relative w-full bg-background"
      >
        <div className="w-full p-3 md:p-4">
          <JourneyStickyDesktop />
          <JourneyMobileLayout />
        </div>
      </section>
    );
  }
