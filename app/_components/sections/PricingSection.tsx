"use client";

import Image from "next/image";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

type BillingPeriod = "monthly" | "yearly";

type PricingPlan = {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  features: string[];
  cta: string;
  variant: "light" | "dark";
  popular?: boolean;
};

const plans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: 2499,
    yearlyPrice: 1999,
    description:
      "Essential design solutions to establish your brand with a strong foundation.",
    features: [
      "Logo & Visual Identity",
      "Basic Brand Guidelines",
      "Simple Website or Landing Page",
      "Social Media Starter Kit",
      "Email Support",
    ],
    cta: "Start with Starter",
    variant: "light",
  },
  {
    id: "premium",
    name: "Premium",
    monthlyPrice: 4999,
    yearlyPrice: 3999,
    description:
      "Comprehensive branding and design for businesses ready to stand out.",
    features: [
      "Full Brand Identity Package",
      "Comprehensive Brand Guidelines",
      "Custom Website Design",
      "Marketing & Collateral Design",
      "Priority Support",
    ],
    cta: "Start with Premium",
    variant: "dark",
    popular: true,
  },
  {
    id: "gold",
    name: "Gold",
    monthlyPrice: 8499,
    yearlyPrice: 6799,
    description:
      "High-end, tailored branding and marketing for industry-leading brands.",
    features: [
      "Complete Brand Identity & Positioning",
      "Advanced Website & Product Design",
      "Full Marketing Collateral Suite",
      "Dedicated Account Manager",
      "24/7 Premium Support",
    ],
    cta: "Start with Gold",
    variant: "light",
  },
];

function formatPrice(amount: number) {
  return `$${amount.toLocaleString("en-US")}`;
}

function ArrowRightIcon({ stroke = "rgba(255,255,255,1)" }: { stroke?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PackagesPill() {
  return (
    <div className="inline-flex items-center gap-2 rounded-[500px] bg-[rgba(246,246,246,1)] py-1.5 pl-1.5 pr-4">
      <span className="inline-flex h-[22px] w-[26px] shrink-0 items-center justify-center rounded-[500px] bg-[rgba(32,37,39,1)]">
        <ArrowRightIcon />
      </span>
      <span className="font-display text-sm font-medium text-[rgba(32,37,39,1)]">
        Packages
      </span>
    </div>
  );
}

function PlanTag({ name }: { name: string }) {
  return (
    <div className="inline-flex w-fit items-center gap-2 rounded-[500px] bg-[rgba(255,255,255,1)] py-1 pl-1 pr-3">
      <span className="inline-flex h-6 w-8 shrink-0 items-center justify-center rounded-[500px] bg-[rgba(32,37,39,1)]">
        <ArrowRightIcon />
      </span>
      <span className="font-display text-sm font-medium text-[rgba(32,37,39,1)]">
        {name}
      </span>
    </div>
  );
}

function PopularBadge() {
  return (
    <div className="absolute top-0 right-0 z-10 inline-flex items-center rounded-bl-[20px] bg-[rgba(255,255,255,1)] pb-2.5 pl-3 pr-3 pt-2.5">
      <span className="inline-flex rounded-[500px] bg-[rgba(32,37,39,1)] px-3 py-1 font-display text-xs font-medium text-[rgba(255,255,255,1)]">
        Popular
      </span>
    </div>
  );
}

type FeatureRowProps = {
  label: string;
  variant: "light" | "dark";
};

function FeatureRow({ label, variant }: FeatureRowProps) {
  const isDark = variant === "dark";

  return (
    <li
      className={`flex w-full items-center gap-2 rounded-[500px] py-1.5 pl-1.5 pr-3 ${
        isDark
          ? "bg-[rgba(45,47,48,1)]"
          : "bg-[rgba(255,255,255,1)]"
      }`}
    >
      <span
        className={`inline-flex h-6 w-8 shrink-0 items-center justify-center rounded-[500px] ${
          isDark
            ? "bg-[rgba(255,255,255,1)]"
            : "bg-[rgba(32,37,39,1)]"
        }`}
      >
        <Image
          src="/images/check.svg"
          alt=""
          width={10}
          height={7}
          aria-hidden
          className={isDark ? "brightness-0" : undefined}
        />
      </span>
      <span
        className={`min-w-0 truncate font-display text-sm font-medium ${
          isDark
            ? "text-[rgba(255,255,255,1)]"
            : "text-[rgba(32,37,39,1)]"
        }`}
      >
        {label}
      </span>
    </li>
  );
}

type PricingCardProps = {
  plan: PricingPlan;
  period: BillingPeriod;
  priceRef: (el: HTMLSpanElement | null) => void;
};

function PricingCard({ plan, period, priceRef }: PricingCardProps) {
  const isDark = plan.variant === "dark";
  const price =
    period === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
  const periodLabel = period === "monthly" ? "/ Month" : "/ Year";

  return (
    <article
      className={`relative flex flex-col rounded-[20px] p-5 md:p-6 ${
        isDark
          ? "bg-[rgba(32,37,39,1)] text-[rgba(255,255,255,1)]"
          : "bg-[rgba(246,246,246,1)] text-[rgba(32,37,39,1)]"
      }`}
    >
      {plan.popular ? <PopularBadge /> : null}

      <div className="flex flex-col gap-5">
        <PlanTag name={plan.name} />

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span
            ref={priceRef}
            className="font-serif text-[56px] font-normal leading-none tracking-tight"
          >
            {formatPrice(price)}
          </span>
          <span
            className={`font-display text-[30px] leading-none ${
              isDark
                ? "text-[rgba(255,255,255,0.6)]"
                : "text-[rgba(32,37,39,0.6)]"
            }`}
          >
            {periodLabel}
          </span>
        </div>

        <p
          className={`font-display text-sm leading-relaxed ${
            isDark
              ? "text-[rgba(255,255,255,0.85)]"
              : "text-[rgba(32,37,39,0.75)]"
          }`}
        >
          {plan.description}
        </p>

        <ul className="flex flex-col gap-2">
          {plan.features.map((feature) => (
            <FeatureRow key={feature} label={feature} variant={plan.variant} />
          ))}
        </ul>

        <button
          type="button"
          className={`mt-1 w-full rounded-[500px] px-5 py-3.5 font-display text-sm font-medium transition-opacity hover:opacity-90 ${
            isDark
              ? "bg-[rgba(255,255,255,1)] text-[rgba(32,37,39,1)]"
              : "bg-[rgba(32,37,39,1)] text-[rgba(255,255,255,1)]"
          }`}
        >
          {plan.cta}
        </button>
      </div>
    </article>
  );
}

type BillingToggleProps = {
  period: BillingPeriod;
  onChange: (period: BillingPeriod) => void;
};

function BillingToggle({ period, onChange }: BillingToggleProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const yearlyRef = useRef<HTMLButtonElement>(null);
  const monthlyRef = useRef<HTMLButtonElement>(null);

  const moveIndicator = useCallback((target: HTMLButtonElement | null) => {
    const track = trackRef.current;
    const indicator = indicatorRef.current;
    if (!track || !indicator || !target) return;

    const trackRect = track.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    gsap.to(indicator, {
      x: targetRect.left - trackRect.left,
      width: targetRect.width,
      duration: 0.4,
      ease: "power2.inOut",
    });
  }, []);

  useLayoutEffect(() => {
    const active =
      period === "yearly" ? yearlyRef.current : monthlyRef.current;
    moveIndicator(active);
  }, [period, moveIndicator]);

  useLayoutEffect(() => {
    const onResize = () => {
      const active =
        period === "yearly" ? yearlyRef.current : monthlyRef.current;
      moveIndicator(active);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [period, moveIndicator]);

  return (
    <div
      ref={trackRef}
      className="relative inline-flex items-center rounded-[500px] bg-[rgba(246,246,246,1)] p-1"
    >
      <div
        ref={indicatorRef}
        className="pointer-events-none absolute top-1 left-0 h-[calc(100%-8px)] rounded-[500px] bg-[rgba(32,37,39,1)]"
        aria-hidden
      />
      <button
        ref={yearlyRef}
        type="button"
        onClick={() => onChange("yearly")}
        className={`relative z-10 rounded-[500px] px-5 py-2 font-display text-sm font-medium transition-colors ${
          period === "yearly"
            ? "text-[rgba(255,255,255,1)]"
            : "text-[rgba(32,37,39,1)]"
        }`}
      >
        Yearly
      </button>
      <button
        ref={monthlyRef}
        type="button"
        onClick={() => onChange("monthly")}
        className={`relative z-10 rounded-[500px] px-5 py-2 font-display text-sm font-medium transition-colors ${
          period === "monthly"
            ? "text-[rgba(255,255,255,1)]"
            : "text-[rgba(32,37,39,1)]"
        }`}
      >
        Monthly
      </button>
    </div>
  );
}

export function PricingSection() {
  const [period, setPeriod] = useState<BillingPeriod>("monthly");
  const priceRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const setPriceRef = (index: number) => (el: HTMLSpanElement | null) => {
    priceRefs.current[index] = el;
  };

  const handlePeriodChange = (next: BillingPeriod) => {
    if (next === period) return;

    plans.forEach((plan, index) => {
      const el = priceRefs.current[index];
      if (!el) return;

      const from =
        period === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
      const to =
        next === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
      const state = { value: from };

      gsap.to(state, {
        value: to,
        duration: 0.45,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = formatPrice(Math.round(state.value));
        },
      });
    });

    setPeriod(next);
  };

  return (
    <section
      id="pricing"
      aria-label="Tailored pricing"
      className="w-full bg-background py-16 md:py-24"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-3 md:gap-16 md:px-4">
        <div className="flex flex-col items-center gap-6 text-center md:gap-8">
          <PackagesPill />

          <div className="flex flex-col gap-3">
            <h2 className="text-[clamp(2.25rem,6vw,3.75rem)] leading-[1.05] tracking-tight text-[rgba(32,37,39,1)]">
              <span className="font-serif font-normal italic">Tailored</span>{" "}
              <span className="font-display font-medium">Pricing</span>
            </h2>
            <p className="mx-auto max-w-xl font-display text-sm leading-relaxed text-[rgba(32,37,39,0.6)] md:text-base">
              Clear, tailored pricing for exceptional design and strategic brand
              growth.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 md:gap-10">
          <BillingToggle period={period} onChange={handlePeriodChange} />

          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {plans.map((plan, index) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                period={period}
                priceRef={setPriceRef(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
