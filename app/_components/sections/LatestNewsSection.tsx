import Image from "next/image";
import Link from "next/link";

type NewsCardVariant = "read-more" | "arrow-out";

type NewsPost = {
  id: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  variant: NewsCardVariant;
};

const NEWS_POSTS: NewsPost[] = [
  {
    id: "1",
    imageSrc: "/images/handwithbottle.png",
    imageAlt: "Hands holding an elegant cosmetic bottle",
    title:
      "The Power of Branding: How to Build a Memorable and Impactful Brand Identity",
    variant: "read-more",
  },
  {
    id: "2",
    imageSrc: "/images/woman.png",
    imageAlt: "Editorial portrait with cosmetic bottle",
    title:
      "Top Design Trends for 2025: What's Shaping the Future of Digital and Product Design",
    variant: "arrow-out",
  },
  {
    id: "3",
    imageSrc: "/images/bottle.png",
    imageAlt: "Product bottle outdoors",
    title:
      "Why Every Business Needs a Strong Brand Strategy to Stand Out in a Crowded Market",
    variant: "arrow-out",
  },
];

function ArrowRightIcon() {
  return (
    <svg
      width="12"
      height="12"
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

function ArrowDiagonalIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 12L12 4M12 4H6M12 4V10"
        stroke="rgba(255,255,255,1)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Top-left white tab + pill date (Inverted corners via RoundedEdge.svg) */
function NewsImageDateCorner() {
  return (
    <div className="absolute top-0 left-0 z-10">
      <div className="relative z-10 inline-flex items-center rounded-br-[20px] bg-[rgba(255,255,255,1)] pb-2 pl-2 pr-3 pt-2">
        <span className="inline-flex rounded-[500px] bg-[rgba(246,246,246,1)] px-3 py-1 font-display text-xs font-medium text-[rgba(32,37,39,1)] md:text-[13px]">
          Mar 22, 2025
        </span>
      </div>
      <Image
        src="/images/RoundedEdge.svg"
        alt=""
        aria-hidden
        width={20}
        height={20}
        className="pointer-events-none absolute top-full left-0 hidden md:block"
      />
      <Image
        src="/images/RoundedEdge.svg"
        alt=""
        aria-hidden
        width={20}
        height={20}
        className="pointer-events-none absolute top-0 left-full -ml-px hidden md:block"
      />
    </div>
  );
}

/** Bottom-right white tab + CTA (matches OurProcessTab RoundedEdge rotation) */
function NewsImageFooterCorner({ variant }: { variant: NewsCardVariant }) {
  const mobileAria =
    variant === "read-more" ? "Read more" : "Open article";

  return (
    <div className="absolute bottom-0 right-0 z-10 rounded-tl-[20px] bg-[rgba(255,255,255,1)] p-2 md:p-2">
      <Image
        src="/images/RoundedEdge.svg"
        alt=""
        aria-hidden
        width={20}
        height={20}
        className="pointer-events-none absolute bottom-0 right-full -mr-px hidden rotate-180 md:block"
      />
      <Image
        src="/images/RoundedEdge.svg"
        alt=""
        aria-hidden
        width={20}
        height={20}
        className="pointer-events-none absolute bottom-full right-0 -mb-px hidden rotate-180 md:block"
      />

      {/* Mobile: icon-only right arrow for every card */}
      <Link
        href="#"
        aria-label={mobileAria}
        className="relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-[500px] bg-[rgba(32,37,39,1)] transition-opacity hover:opacity-90 md:hidden"
      >
        <ArrowRightIcon />
      </Link>

      {/* Desktop: original Read More vs diagonal arrow */}
      {variant === "read-more" ? (
        <Link
          href="#"
          className="relative z-10 hidden items-center gap-2 rounded-[500px] bg-[rgba(32,37,39,1)] py-2 pl-3 pr-3 font-display text-xs font-medium text-[rgba(255,255,255,1)] transition-opacity hover:opacity-90 md:inline-flex md:text-sm md:py-2 md:pl-4 md:pr-4"
        >
          Read More
          <ArrowRightIcon />
        </Link>
      ) : (
        <Link
          href="#"
          aria-label="Open article"
          className="relative z-10 hidden h-8 w-8 items-center justify-center rounded-[500px] bg-[rgba(32,37,39,1)] transition-opacity hover:opacity-90 md:inline-flex md:h-9 md:w-9"
        >
          <ArrowDiagonalIcon />
        </Link>
      )}
    </div>
  );
}

function LatestNewsCard({ post }: { post: NewsPost }) {
  return (
    <article className="flex flex-col gap-4">
      <div className="relative aspect-[260/348] w-full overflow-hidden rounded-tr-[20px] rounded-bl-[20px]">
        <Image
          src={post.imageSrc}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-center"
        />
        <NewsImageDateCorner />
        <NewsImageFooterCorner variant={post.variant} />
      </div>
      <div className="rounded-[16px] bg-[rgba(246,246,246,1)] p-4 md:p-5">
        <p className="font-display text-sm leading-snug text-[rgba(32,37,39,1)] md:text-base md:leading-relaxed">
          {post.title}
        </p>
      </div>
    </article>
  );
}

export function LatestNewsSection() {
  return (
    <section id="news" aria-label="Latest news" className="w-full bg-background">
      <div className="w-full px-3 md:px-4">
        <div className="w-full px-6 pb-16 pt-12 md:px-22 md:pb-16 md:pt-20 lg:pb-20">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-end md:justify-between md:gap-8 md:text-left">
            <h2 className="text-[clamp(2rem,5vw,4.5rem)] leading-[1.05] tracking-tight text-[rgba(32,37,39,1)]">
              <span className="font-serif font-normal italic">Latest</span>{" "}
              <span className="font-display font-medium">News</span>
            </h2>

            <Link
              href="#"
              aria-label="All news"
              className="inline-flex shrink-0 items-center gap-2 rounded-[500px] bg-[rgba(246,246,246,1)] py-1.5 pl-4 pr-1.5 font-display text-sm font-medium text-[rgba(32,37,39,1)] transition-opacity hover:opacity-90 md:pl-5 md:text-[15px]"
            >
              <span>All News</span>
              <span className="inline-flex h-6 w-8 shrink-0 items-center justify-center rounded-[500px] bg-[rgba(32,37,39,1)]">
                <ArrowRightIcon />
              </span>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-3 md:gap-5 lg:gap-6">
            {NEWS_POSTS.map((post) => (
              <LatestNewsCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}