"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    id: "01",
    question: "What services does Nabulé offer?",
    answer:
      "Nabulé specializes in branding, product design, marketing, and social media, helping businesses build strong, impactful identities and digital experiences.",
  },
  {
    id: "02",
    question: "Which pricing package is right for my business?",
    answer:
      "Starter suits new brands establishing a foundation. Premium fits growing businesses ready for comprehensive branding. Gold is ideal for established brands seeking high-end, tailored strategy and design.",
  },
  {
    id: "03",
    question: "How long does a project take?",
    answer:
      "Timelines vary by scope—branding projects typically run 4–8 weeks, while full website and marketing packages may take 8–12 weeks. We provide a clear timeline at kickoff.",
  },
  {
    id: "04",
    question: "Do you offer custom packages?",
    answer:
      "Yes. If our standard packages do not fit your needs, we can build a custom scope tailored to your goals, timeline, and budget.",
  },
  {
    id: "05",
    question: "How do we get started?",
    answer:
      "Reach out via our contact form or email. We will schedule a discovery call, align on goals, and send a proposal with scope, timeline, and investment.",
  },
];

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

function PlusIcon({ ref }: { ref?: React.Ref<SVGSVGElement> }) {
  return (
    <svg
      ref={ref}
      width="14"
      height="14"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
      style={{ transformOrigin: "center" }}
    >
      <rect x="9" y="2" width="2" height="16" rx="2" fill="rgba(255,255,255,1)" />
      <rect x="2" y="9" width="16" height="2" rx="2" fill="rgba(255,255,255,1)" />
    </svg>
  );
}

function MinusIcon({ ref }: { ref?: React.Ref<SVGSVGElement> }) {
  return (
    <svg
      ref={ref}
      width="14"
      height="14"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
      style={{ transformOrigin: "center" }}
    >
      <rect x="2" y="9" width="16" height="2" rx="2" fill="rgba(255,255,255,1)" />
    </svg>
  );
}

function AnimatedToggleIcon({ isOpen }: { isOpen: boolean }) {
  const plusRef = useRef<SVGSVGElement>(null);
  const minusRef = useRef<SVGSVGElement>(null);
  const isFirstRender = useRef(true);

  useGSAP(
    () => {
      const plus = plusRef.current;
      const minus = minusRef.current;
      if (!plus || !minus) return;

      if (isFirstRender.current) {
        isFirstRender.current = false;
        gsap.set(plus, { rotation: 0, opacity: isOpen ? 0 : 1, scale: 1 });
        gsap.set(minus, { rotation: 0, opacity: isOpen ? 1 : 0, scale: 1 });
        return;
      }

      if (isOpen) {
        gsap.to(plus, {
          rotation: 90,
          opacity: 0,
          scale: 0.85,
          duration: 0.4,
          ease: "power2.inOut",
        });
        gsap.fromTo(
          minus,
          { rotation: -90, opacity: 0, scale: 0.85 },
          {
            rotation: 0,
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
            delay: 0.08,
          },
        );
      } else {
        gsap.to(minus, {
          rotation: 90,
          opacity: 0,
          scale: 0.85,
          duration: 0.35,
          ease: "power2.inOut",
        });
        gsap.fromTo(
          plus,
          { rotation: -90, opacity: 0, scale: 0.85 },
          {
            rotation: 0,
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
            delay: 0.08,
          },
        );
      }
    },
    { dependencies: [isOpen] },
  );

  return (
    <span className="relative inline-flex h-6 w-8 shrink-0 items-center justify-center">
      <span className="absolute inset-0 flex items-center justify-center">
        <PlusIcon ref={plusRef} />
      </span>
      <span className="absolute inset-0 flex items-center justify-center">
        <MinusIcon ref={minusRef} />
      </span>
    </span>
  );
}

function FaqAccordionItem({
  item,
  isOpen,
}: {
  item: FaqItem;
  isOpen: boolean;
}) {
  const innerRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useGSAP(
    () => {
      const el = innerRef.current;
      if (!el) return;

      if (isFirstRender.current) {
        isFirstRender.current = false;
        gsap.set(el, {
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        });
        return;
      }

      if (isOpen) {
        gsap.set(el, { height: "auto" });
        const target = el.offsetHeight;
        gsap.fromTo(
          el,
          { height: 0, opacity: 0 },
          {
            height: target,
            opacity: 1,
            duration: 0.45,
            ease: "power2.out",
            onComplete: () => {
              gsap.set(el, { height: "auto" });
            },
          },
        );
      } else {
        const current = el.offsetHeight;
        gsap.fromTo(
          el,
          { height: current, opacity: 1 },
          {
            height: 0,
            opacity: 0,
            duration: 0.35,
            ease: "power2.inOut",
          },
        );
      }
    },
    { scope: innerRef, dependencies: [isOpen] },
  );

  return (
    <Accordion.Item
      value={item.id}
      className="overflow-hidden rounded-[16px] bg-[rgba(246,246,246,1)]"
    >
      <Accordion.Header className="m-0">
        <Accordion.Trigger className="flex w-full cursor-pointer flex-col px-4 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgba(32,37,39,0.4)] md:px-5 md:py-5">
          <span className="flex w-full items-center justify-between gap-4">
            <span className="font-headline text-base leading-snug text-[rgba(32,37,39,1)] md:text-lg">
              {item.question}
            </span>
            <span className="inline-flex h-6 w-8 shrink-0 items-center justify-center rounded-[500px] bg-[rgba(32,37,39,1)]">
              <AnimatedToggleIcon isOpen={isOpen} />
            </span>
          </span>

          <div ref={innerRef} className="overflow-hidden">
            <p className="pt-4 font-display text-sm leading-relaxed text-[rgba(32,37,39,0.6)] md:text-[15px]">
              {item.answer}
            </p>
          </div>
        </Accordion.Trigger>
      </Accordion.Header>
    </Accordion.Item>
  );
}

export function FaqSection() {
  const [openValues, setOpenValues] = useState<string[]>(["01"]);

  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="w-full bg-background py-16 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-3 md:px-4">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between md:gap-8 lg:gap-12">
          <div className="flex w-full shrink-0 flex-col items-center gap-6 text-center md:max-w-[min(100%,20rem)] md:items-start md:text-left">
            <h2 className="text-[clamp(2.5rem,7vw,4.5rem)] leading-[1.05] tracking-tight text-[rgba(32,37,39,1)]">
              <span className="block font-display font-medium">Have</span>
              <span className="block font-serif font-normal italic">
                Questions?
              </span>
            </h2>

            <Link
              href="#contact"
              className="inline-flex w-fit items-center gap-2 rounded-[500px] bg-[rgba(246,246,246,1)] py-1.5 pl-1.5 pr-4 font-display text-sm font-medium text-[rgba(32,37,39,1)] transition-opacity hover:opacity-90"
            >
              <span className="inline-flex h-6 w-8 shrink-0 items-center justify-center rounded-[500px] bg-[rgba(32,37,39,1)]">
                <ArrowRightIcon />
              </span>
              Contact Us
            </Link>
          </div>

          <div className="w-full min-w-0 md:flex-1 md:max-w-[min(100%,40rem)] lg:max-w-[42rem]">
            <Accordion.Root
              type="multiple"
              value={openValues}
              onValueChange={setOpenValues}
              className="flex flex-col gap-2"
            >
              {faqItems.map((item) => (
                <FaqAccordionItem
                  key={item.id}
                  item={item}
                  isOpen={openValues.includes(item.id)}
                />
              ))}
            </Accordion.Root>
          </div>
        </div>
      </div>
    </section>
  );
}
