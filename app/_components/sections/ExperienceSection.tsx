import Image from "next/image";
import Link from "next/link";

import { ExperienceAnimatedStatValue } from "./ExperienceAnimatedStatValue";

type StatCardItem = {
  label: string;
  value: string;
  description: string;
};

const statCards: StatCardItem[] = [
  {
    label: "Clients",
    value: "200+",
    description:
      "We’ve partnered with over 200 visionary clients, crafting unique brand identities and digital experiences that drive growth and lasting impact.",
  },
  {
    label: "Projects",
    value: "300+",
    description:
      "From branding to product design, we’ve successfully delivered 300+ creative projects, transforming ideas into powerful, results-driven solutions.",
  },
  {
    label: "Happy Clients",
    value: "100%",
    description:
      "Client satisfaction is our priority—every project is executed with precision, creativity, and a commitment to delivering outstanding results.",
  },
  {
    label: "Creativity",
    value: "110%",
    description:
      "We go beyond expectations, bringing 110% creativity to every project, ensuring bold, innovative, and standout designs for our clients.",
  },
];

function ArrowRightIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
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

function StatCard({ item }: { item: StatCardItem }) {
  return (
    <article className="flex flex-col rounded-2xl bg-[rgba(255,255,255,1)] p-4 md:p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="inline-flex w-fit min-w-0 shrink items-center gap-1.5 rounded-[500px] bg-[rgba(246,246,246,1)] py-1 pl-1 pr-3">
          <span className="inline-flex h-6 w-7 shrink-0 items-center justify-center rounded-[500px] bg-[rgba(32,37,39,1)]">
            <ArrowRightIcon />
          </span>
          <span className="truncate font-display text-xs font-medium text-[rgba(32,37,39,1)] md:text-sm">
            {item.label}
          </span>
        </div>
        <ExperienceAnimatedStatValue
          value={item.value}
          className="shrink-0 font-serif text-[clamp(2rem,6vw,3.5rem)] font-normal italic leading-none tracking-tight text-[rgba(32,37,39,1)] md:text-[56px]"
        />
      </div>
      <p className="mt-3 font-display text-[13px] text-[rgba(32,37,39,0.6)] md:text-sm">
        {item.description}
      </p>
    </article>
  );
}

function ExperienceStatsGrid() {
  return (
    <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
      {statCards.map((item) => (
        <StatCard key={item.label} item={item} />
      ))}
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" aria-label="Nabulé experience" className="relative w-full bg-background">
      <div className="w-full p-3 md:p-4">
        <div className="relative h-[min(662px,80dvh)] w-full overflow-hidden rounded-[20px] md:h-[100vh] md:min-h-[640px] md:max-h-none">
          <Image
            src="/images/experience.png"
            alt="Nabulé team collaborating in the studio"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Readability on mobile (Figma-style hero); desktop keeps left overlay */}
          <div
            className="pointer-events-none absolute inset-0 z-[1] bg-linear-to-b from-black/50 via-black/15 to-black/70 md:hidden"
            aria-hidden
          />

          {/* `Overlay.png` hanya desktop/tablet — di mobile disembunyikan (pakai gradient di atas). */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-[1] max-md:hidden w-[55%] max-w-[min(100%,42rem)] md:block"
            aria-hidden
          >
            <Image
              src="/images/Overlay.png"
              alt=""
              fill
              className="object-cover object-left"
              sizes="(min-width: 768px) min(55vw, 42rem), 1px"
            />
          </div>

          <div className="absolute inset-0 z-10 flex flex-col p-5 pb-6 pt-8 text-white md:p-8 md:pb-8 md:pt-10 lg:p-10">
            <div className="flex min-h-0 flex-1 flex-col justify-between md:hidden">
              <div className="shrink-0 text-left">
                <p className="font-headline text-5xl md:text-2xl tracking-tight text-white">Nabulé</p>
                <p className="mt-0.5 font-serif text-5xl md:text-[1.85rem] font-normal italic leading-none text-white">
                  Experience
                </p>
              </div>

              <div className="flex max-w-[min(100%,20rem)] flex-col items-start gap-5 text-left">
                <p className="font-display text-sm leading-relaxed text-white/95">
                  Elevating brands with strategic design, innovation, and impactful digital experiences.
                </p>
                <Link
                  href="#about"
                  className="inline-flex w-fit items-center gap-2 rounded-[500px] bg-[rgba(246,246,246,1)] py-1.5 pl-4 pr-1.5 font-display text-sm font-medium text-[rgba(32,37,39,1)] transition-opacity hover:opacity-90"
                >
                  <span>More About Us</span>
                  <span className="inline-flex h-6 w-8 shrink-0 items-center justify-center rounded-[500px] bg-[rgba(32,37,39,1)]">
                    <ArrowRightIcon />
                  </span>
                </Link>
              </div>
            </div>

            <div className="hidden min-h-0 flex-1 flex-col justify-between md:flex">
              <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-8 lg:gap-12">
                <div className="max-w-xl shrink-0 pl-2 md:pl-6 lg:pl-10">
                  <p className="font-headline text-2xl tracking-tight text-white md:text-8xl">Nabulé</p>
                  <p className="mt-1 font-serif text-2xl font-normal italic leading-[0.95] text-[rgba(255,255,255,1)] md:text-8xl">
                    Experience
                  </p>
                </div>

                <div className="flex max-w-md flex-col gap-5 text-left md:-translate-x-4 md:items-start lg:-translate-x-8">
                  <p className="font-display text-sm leading-relaxed text-white/95 md:text-base">
                    Elevating brands with strategic design, innovation, and impactful digital experiences.
                  </p>
                  <Link
                    href="#about"
                    className="inline-flex w-fit items-center gap-2 self-start rounded-[500px] bg-[rgba(246,246,246,1)] py-1 pl-4 pr-1.5 font-display text-sm font-medium text-[rgba(32,37,39,1)] transition-opacity hover:opacity-90"
                  >
                    <span>More About Us</span>
                    <span className="inline-flex h-8 w-10 shrink-0 items-center justify-center rounded-[500px] bg-[rgba(32,37,39,1)]">
                      <ArrowRightIcon />
                    </span>
                  </Link>
                </div>
              </div>

              <div className="mt-10 lg:mt-14">
                <ExperienceStatsGrid />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
