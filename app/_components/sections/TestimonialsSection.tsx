"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

const STAR_COUNT = 5;

function FiveStars() {
  return (
    <>
      {Array.from({ length: STAR_COUNT }).map((_, i) => (
        <Image
          key={i}
          src="/images/star.svg"
          alt=""
          width={14}
          height={14}
          className="h-3 w-3 shrink-0 md:h-3.5 md:w-3.5"
          aria-hidden
        />
      ))}
    </>
  );
}

const starStripClass =
  "inline-flex items-center gap-1 rounded-[500px] bg-[rgba(246,246,246,1)] px-2.5 py-1.5";

function FeaturedStarButton() {
  return (
    <button type="button" tabIndex={-1} className={starStripClass}>
      <FiveStars />
    </button>
  );
}

function GridStarStrip() {
  return (
    <div className={starStripClass} aria-hidden>
      <FiveStars />
    </div>
  );
}

function FeaturedImageCard() {
  return (
    <div className="relative mx-auto w-full md:mx-0 md:max-w-[360px] md:shrink-0">
      <div className="relative aspect-square w-full min-h-0 md:aspect-[3/4] md:max-w-[360px] md:min-h-[300px]">
        <div className="absolute inset-0 overflow-hidden rounded-[20px] md:rounded-bl-[20px] md:rounded-tr-[20px] md:rounded-br-none md:rounded-tl-none">
          <Image
            src="/images/manworking.png"
            alt="John Deo at work"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 360px"
            priority
          />
        </div>

        {/* RoundedEdge hanya dari md+, bukan pada mobile */}
        <div className="pointer-events-none absolute left-0 top-0 z-10">
          <div className="pointer-events-auto relative rounded-br-[20px] bg-[rgba(255,255,255,1)] p-2 pb-3 pr-3">
            <Image
              src="/images/RoundedEdge.svg"
              alt=""
              aria-hidden
              width={20}
              height={20}
              className="pointer-events-none absolute left-full top-0 -ml-px hidden md:block"
            />
            <Image
              src="/images/RoundedEdge.svg"
              alt=""
              aria-hidden
              width={20}
              height={20}
              className="pointer-events-none absolute left-0 top-full -mt-px hidden md:block"
            />
            <FeaturedStarButton />
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 right-0 z-10 max-w-[min(100%,20rem)]">
          <div className="pointer-events-auto relative rounded-tl-[20px] bg-[rgba(255,255,255,1)] px-3 py-2">
            <Image
              src="/images/RoundedEdge.svg"
              alt=""
              aria-hidden
              width={20}
              height={20}
              className="pointer-events-none absolute bottom-full right-0 -mb-px hidden rotate-180 md:block"
            />
            <Image
              src="/images/RoundedEdge.svg"
              alt=""
              aria-hidden
              width={20}
              height={20}
              className="pointer-events-none absolute bottom-0 right-full -mr-px hidden rotate-180 md:block"
            />
            <p className="relative z-10 text-right font-display text-[16px] leading-snug text-[rgba(32,37,39,1)]">
              John Deo, CEO Nexa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturedQuoteDesktop() {
  return (
    <div className="hidden min-w-0 flex-1 flex-col gap-6 md:flex md:max-w-[min(100%,36rem)] lg:max-w-[42rem]">
      <div className="shrink-0">
        <Image
          src="/images/kutip.svg"
          alt=""
          width={39}
          height={31}
          className="h-8 w-auto text-[rgba(32,37,39,1)]"
          style={{ filter: "brightness(0) saturate(100%)" }}
          aria-hidden
        />
      </div>
      <p className="font-display text-[clamp(1.75rem,4.5vw,3.5rem)] font-medium leading-[1.15] tracking-tight text-[rgba(32,37,39,1)] md:text-[56px]">
        From concept to execution, Nabulé{" "}
        <span className="font-serif font-normal italic">
          exceeded expectations
        </span>{" "}
        - innovative, professional, and truly{" "}
        <span className="font-serif font-normal italic">
          brand-defining work!
        </span>
      </p>
    </div>
  );
}

/** Typography selaras Selected Work judul mobile */
function FeaturedQuoteMobile() {
  return (
    <p className="text-center font-display text-[clamp(2rem,6vw,4.5rem)] font-medium leading-none tracking-tight text-[rgba(32,37,39,1)]">
      From concept to execution, Nabulé{" "}
      <span className="font-serif font-normal italic">
        exceeded expectations
      </span>{" "}
      — innovative, professional, and truly{" "}
      <span className="font-serif font-normal italic">
        brand-defining work!
      </span>
    </p>
  );
}

type GridTestimonial = {
  title: string;
  quote: string;
  name: string;
  company: string;
  avatar: string;
  avatarAlt: string;
};

const gridTestimonials: GridTestimonial[] = [
  {
    title: "Transformed Our Brand Beyond Expectations",
    quote:
      "Nabulé took our brand to the next level with their strategic approach and stunning design. Their expertise and creativity made all the difference. We couldn't be happier!",
    name: "John Novak",
    company: "Aura",
    avatar: "/images/john.png",
    avatarAlt: "John Novak",
  },
  {
    title: "Exceptional Creativity and Professionalism",
    quote:
      "From start to finish, Nabulé delivered a flawless branding experience. Their attention to detail and innovative ideas helped us create a brand identity that truly resonates with our audience.",
    name: "Marco Jensen",
    company: "Lumos",
    avatar: "/images/marco.png",
    avatarAlt: "Marco Jensen",
  },
  {
    title: "Game-Changer for Our Business",
    quote:
      "Nabulé's expertise in branding and product design helped us redefine our identity. Their team's dedication and creative approach resulted in a powerful, timeless brand that stands out.",
    name: "Sophia Laurent",
    company: "Verde",
    avatar: "/images/sophia.png",
    avatarAlt: "Sophia Laurent",
  },
  {
    title: "Outstanding Design and Strategy",
    quote:
      "The Nabulé team provided us with a brand that feels fresh, unique, and authentic. Their strategic insights and design expertise helped us connect with our audience in a meaningful way.",
    name: "Daniel Fischer",
    company: "Elevate",
    avatar: "/images/daniel.png",
    avatarAlt: "Daniel Fischer",
  },
];

function TestimonialGridCard({ item }: { item: GridTestimonial }) {
  return (
    <article className="flex h-full flex-col rounded-lg bg-[rgba(255,255,255,1)] p-4 md:p-4">
      <div className="mb-4 shrink-0">
        <GridStarStrip />
      </div>
      <h3 className="font-headline text-lg font-bold leading-snug text-[rgba(32,37,39,1)] md:text-xl">
        {item.title}
      </h3>
      <p className="mt-3 flex-1 font-display text-[13px] leading-relaxed text-[rgba(32,37,39,0.6)] md:text-[14px]">
        &ldquo;{item.quote}&rdquo;
      </p>
      <div className="mt-6 flex w-fit max-w-full shrink-0 items-center gap-3 self-start rounded-[500px] bg-[rgba(246,246,246,1)] py-2 pl-2 pr-4">
        <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-[500px]">
          <Image
            src={item.avatar}
            alt={item.avatarAlt}
            fill
            className="object-cover"
            sizes="36px"
          />
        </div>
        <p className="min-w-0 font-display text-[13px] font-medium leading-tight text-[rgba(32,37,39,1)] md:text-[14px]">
          {item.name}, {item.company}
        </p>
      </div>
    </article>
  );
}

function TestimonialCarouselCard({
  item,
  eagerAvatar,
}: {
  item: GridTestimonial;
  /** Carousel: load all avatars up front so loop clones never pop in late. */
  eagerAvatar?: boolean;
}) {
  return (
    <article className="flex min-h-[220px] flex-col rounded-[20px] bg-[rgba(255,255,255,1)] p-4 pb-5">
      <div className="mb-4 shrink-0">
        <GridStarStrip />
      </div>
      <h3 className="font-headline text-[17px] font-bold leading-snug text-[rgba(32,37,39,1)]">
        {item.title}
      </h3>
      <p className="mt-3 flex-1 font-display text-[13px] leading-relaxed text-[rgba(32,37,39,0.6)]">
        &ldquo;{item.quote}&rdquo;
      </p>
      <div className="mt-5 flex w-fit max-w-full shrink-0 items-center gap-3 self-start rounded-[500px] bg-[rgba(246,246,246,1)] py-2 pl-2 pr-4">
        <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-[500px]">
          <Image
            src={item.avatar}
            alt={item.avatarAlt}
            fill
            className="object-cover"
            sizes="36px"
            loading={eagerAvatar ? "eager" : undefined}
          />
        </div>
        <p className="min-w-0 font-display text-[13px] font-medium leading-tight text-[rgba(32,37,39,1)]">
          {item.name}, {item.company}
        </p>
      </div>
    </article>
  );
}

function TestimonialsMobileCarousel() {
  const slideCount = gridTestimonials.length;

  const emblaOptions = useMemo(
    () =>
      ({
        axis: "x" as const,
        loop: slideCount > 1,
        align: "start" as const,
        dragFree: false,
        containScroll: "trimSnaps" as const,
      }) satisfies NonNullable<Parameters<typeof useEmblaCarousel>[0]>,
    [slideCount],
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (i: number) => {
      emblaApi?.scrollTo(i);
    },
    [emblaApi],
  );

  if (slideCount === 0) return null;

  return (
    <div className="rounded-[20px] bg-[rgba(246,246,246,1)] pb-8 pt-6">
      <div
        className="overflow-hidden"
        ref={emblaRef}
        style={{ touchAction: "pan-y pinch-zoom" }}
      >
        <div className="flex">
          {gridTestimonials.map((item) => (
            <div
              key={item.title}
              className="min-w-0 shrink-0 grow-0 basis-full"
            >
              <div className="px-6 md:px-1">
                <TestimonialCarouselCard item={item} eagerAvatar />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <div
          className="flex items-center gap-2 rounded-[50px] bg-[rgba(0,0,0,0.2)] px-3 py-2 backdrop-blur-[4px]"
          role="tablist"
          aria-label="Testimonial carousel"
        >
          {gridTestimonials.map((item, i) => (
            <button
              key={item.title}
              type="button"
              role="tab"
              aria-selected={i === selectedIndex}
              aria-label={`Testimonial ${i + 1} of ${gridTestimonials.length}`}
              onClick={() => scrollTo(i)}
              className={`h-2 w-2 shrink-0 rounded-[50px] bg-[rgba(255,255,255,1)] transition-opacity ${
                i === selectedIndex ? "opacity-100" : "opacity-[0.4]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" aria-label="Testimonials" className="w-full bg-background">
      <div className="w-full">
        <div className="px-3 md:px-4">
          <div className="w-full bg-[rgba(255,255,255,1)] px-6 py-12 md:px-22 md:py-24">
            <div className="hidden flex-row items-center justify-between gap-10 md:flex lg:gap-16">
              <FeaturedImageCard />
              <FeaturedQuoteDesktop />
            </div>

            <div className="flex flex-col items-stretch gap-8 md:hidden">
              <FeaturedQuoteMobile />
              <FeaturedImageCard />
            </div>
          </div>
        </div>

        {/* Lateral gutter identical to Selected Work project cards (`w-full p-3`) */}
        <div className="w-full p-3 pb-12 md:hidden">
          <TestimonialsMobileCarousel />
        </div>

        <div className="hidden w-full md:block md:p-4">
          <div className="w-full rounded-[20px] bg-[rgba(246,246,246,1)] px-6 py-8 md:px-10 md:py-10">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {gridTestimonials.map((item) => (
                <TestimonialGridCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
