import Image from "next/image";

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
    <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[340px] md:mx-0 md:max-w-[360px] md:shrink-0">
      <div className="relative aspect-[3/4] min-h-[220px] w-full md:min-h-[300px]">
        <div className="absolute inset-0 overflow-hidden rounded-bl-[20px] rounded-tr-[20px]">
          <Image
            src="/images/manworking.png"
            alt="John Deo at work"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 340px, 360px"
            priority
          />
        </div>

        <div className="pointer-events-none absolute left-0 top-0 z-10">
          <div className="pointer-events-auto relative rounded-br-[20px] bg-[rgba(255,255,255,1)] p-2 pr-3 pb-3">
            <Image
              src="/images/RoundedEdge.svg"
              alt=""
              aria-hidden
              width={20}
              height={20}
              className="pointer-events-none absolute top-0 left-full -ml-px"
            />
            <Image
              src="/images/RoundedEdge.svg"
              alt=""
              aria-hidden
              width={20}
              height={20}
              className="pointer-events-none absolute top-full left-0 -mt-px"
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
              className="pointer-events-none absolute bottom-0 right-full -mr-px rotate-180"
            />
            <Image
              src="/images/RoundedEdge.svg"
              alt=""
              aria-hidden
              width={20}
              height={20}
              className="pointer-events-none absolute bottom-full right-0 -mb-px rotate-180"
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

function FeaturedQuote() {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-6 md:max-w-[min(100%,36rem)] lg:max-w-[42rem]">
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
      "Nabulé took our brand to the next level with their strategic approach and stunning design. Their expertise and creativity made all the difference. We couldn’t be happier!",
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
      "Nabulé’s expertise in branding and product design helped us redefine our identity. Their team’s dedication and creative approach resulted in a powerful, timeless brand that stands out.",
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

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-label="Testimonials"
      className="w-full bg-background"
    >
      <div className="w-full px-3 md:px-4">
        <div className="w-full bg-[rgba(255,255,255,1)] px-6 py-16 md:px-22 md:py-24">
          <div className="flex flex-col items-stretch gap-10 md:flex-row md:items-center md:justify-between md:gap-12 lg:gap-16">
            <FeaturedImageCard />
            <FeaturedQuote />
          </div>
        </div>

        <div className="w-full p-3 md:p-4">
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
