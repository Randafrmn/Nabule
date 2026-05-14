import Image from "next/image";
import { SelectedWorkLogoMarquee } from "./SelectedWorkLogoMarquee";

type SelectedWorkProject = {
  id: string;
  slug: string;
  image: string;
  imageAlt: string;
  logo: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  year: string;
  description: string;
  tags: string[];
};

const projects: SelectedWorkProject[] = [
  {
    id: "vela",
    slug: "véla",
    image: "/images/vela.png",
    imageAlt: "Véla — branding and product photography",
    logo: "/logos/asgardia.svg",
    logoAlt: "Asgardia",
    logoWidth: 134,
    logoHeight: 30,
    year: "2025",
    description:
      "A refined branding project that embodies elegance, simplicity, and timeless design for a luxury lifestyle brand.",
    tags: ["Logo", "Branding", "Brand Identity"],
  },
  {
    id: "lume",
    slug: "lume",
    image: "/images/lume.png",
    imageAlt: "Lume — marketing campaign photography",
    logo: "/logos/acme.svg",
    logoAlt: "Acme",
    logoWidth: 120,
    logoHeight: 31,
    year: "2025",
    description:
      "A marketing campaign that amplifies brand presence through strategic storytelling and visually compelling content.",
    tags: ["Logo", "Branding", "Brand Identity"],
  },
  {
    id: "nexa",
    slug: "nexa",
    image: "/images/nexa.png",
    imageAlt: "Nexa — product photography",
    logo: "/logos/canba.svg",
    logoAlt: "Kanba",
    logoWidth: 111,
    logoHeight: 30,
    year: "2025",
    description:
      "A social media strategy that builds engagement, strengthens community, and drives brand growth through creative content.",
    tags: ["Logo", "Branding", "Brand Identity"],
  },
];

function ArrowRightIcon() {
  return (
    <svg
      width="16"
      height="16"
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

function SelectedWorkProjectCard({ project }: { project: SelectedWorkProject }) {
  return (
    <div
      className="relative aspect-square w-full overflow-hidden rounded-bl-[20px] rounded-br-[20px] rounded-tl-[20px] rounded-tr-none md:aspect-auto md:h-[88vh] md:min-h-[640px] md:rounded-bl-[20px] md:rounded-br-none md:rounded-tl-none md:rounded-tr-[20px]"
    >
      <Image
        src={project.image}
        alt={project.imageAlt}
        fill
        className="object-cover object-center"
        sizes="100vw"
      />

      <Image
        src="/images/RoundedEdge.svg"
        alt=""
        aria-hidden="true"
        width={20}
        height={20}
        className="pointer-events-none absolute left-0 top-0 z-20 md:hidden"
      />
      <Image
        src="/images/RoundedEdge.svg"
        alt=""
        aria-hidden="true"
        width={20}
        height={20}
        className="pointer-events-none absolute bottom-0 right-0 z-20 rotate-180 md:hidden"
      />

      <div className="pointer-events-auto absolute left-6 top-12 z-[24] md:hidden">
        <SelectedWorkLogoMarquee
          logoSrc={project.logo}
          logoAlt={project.logoAlt}
          logoWidth={project.logoWidth}
          logoHeight={project.logoHeight}
        />
      </div>

      <div className="pointer-events-auto absolute right-0 top-0 z-30 md:hidden">
        <div className="relative rounded-bl-[18px] bg-[rgba(255,255,255,1)] pb-2 pl-2 pt-0 pr-0">
          <Image
            src="/images/RoundedEdge.svg"
            alt=""
            aria-hidden="true"
            width={20}
            height={20}
            className="pointer-events-none absolute right-0 top-full -mt-px rotate-90"
          />
          <a
            href="#work"
            aria-label={`Open ${project.slug} project`}
            className="relative z-10 inline-flex h-8 w-10 items-center justify-center rounded-[500px] bg-[rgba(32,37,39,1)] transition-opacity hover:opacity-90"
          >
            <ArrowRightIcon />
          </a>
        </div>
      </div>

      <p
        className="pointer-events-none absolute bottom-6 left-6 z-20 font-headline font-bold leading-none tracking-tight text-white md:hidden"
        style={{ fontSize: "clamp(2.25rem, 10vw, 3.5rem)" }}
      >
        {project.slug}
      </p>

      <div className="pointer-events-none absolute inset-0 z-10 hidden h-full w-full md:block">
        <div className="pointer-events-none absolute right-12 top-8 md:right-20 md:top-12">
          <Image
            src={project.logo}
            alt={project.logoAlt}
            width={project.logoWidth}
            height={project.logoHeight}
            className="h-5 w-auto brightness-0 invert md:h-7"
          />
        </div>

        <p
          className="pointer-events-none absolute bottom-4 right-3 max-w-[95vw] text-right font-headline font-bold leading-[100%] tracking-[-6px] text-white md:bottom-14 md:right-20"
          style={{ fontSize: "clamp(3.5rem, 12vw, 140px)" }}
        >
          {project.slug}
        </p>

        <div className="pointer-events-auto absolute bottom-0 right-0">
          <div className="relative rounded-tl-[20px] bg-[rgba(255,255,255,1)] p-2">
            <Image
              src="/images/RoundedEdge.svg"
              alt=""
              aria-hidden="true"
              width={20}
              height={20}
              className="pointer-events-none absolute bottom-0 right-full -mr-px block rotate-180"
            />
            <Image
              src="/images/RoundedEdge.svg"
              alt=""
              aria-hidden="true"
              width={20}
              height={20}
              className="pointer-events-none absolute bottom-full right-0 -mb-px block rotate-180"
            />
            <a
              href="#work"
              aria-label={`Open ${project.slug} project`}
              className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-[500px] bg-[rgba(32,37,39,1)] transition-opacity hover:opacity-90"
            >
              <svg
                width="16"
                height="16"
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
            </a>
          </div>
        </div>

        <div className="pointer-events-auto absolute bottom-6 left-4 max-w-[min(100%,20rem)] md:bottom-12 md:left-12 md:max-w-[22rem]">
          <div className="rounded-[16px] bg-[rgba(255,255,255,1)] p-4 md:p-5">
            <div className="inline-flex items-center gap-2 rounded-[500px] bg-[rgba(246,246,246,1)] p-1 pr-4">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-[500px] bg-[rgba(32,37,39,1)]">
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
              </span>
              <span className="font-display text-[13px] font-medium text-[rgba(32,37,39,1)]">
                {project.year}
              </span>
            </div>

            <p className="mt-3 font-display text-[13px] leading-relaxed text-[rgba(32,37,39,1)] md:text-[14px]">
              {project.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-[4px] bg-[rgba(246,246,246,1)] px-3 py-1.5 font-display text-[12px] text-[rgba(32,37,39,1)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-auto absolute left-0 top-0 z-30 hidden md:block">
        <a
          href="#work"
          className="relative z-10 inline-flex rounded-br-[20px] bg-[rgba(255,255,255,1)] px-5 py-3 font-display text-[15px] font-medium text-[rgba(32,37,39,1)] transition-opacity hover:opacity-90"
        >
          {project.slug}
        </a>
        <Image
          src="/images/RoundedEdge.svg"
          alt=""
          aria-hidden="true"
          width={20}
          height={20}
          className="pointer-events-none absolute left-0 top-full block"
        />
        <Image
          src="/images/RoundedEdge.svg"
          alt=""
          aria-hidden="true"
          width={20}
          height={20}
          className="pointer-events-none absolute left-full top-0 -ml-px block"
        />
      </div>
    </div>
  );
}

export function SelectedWorkSection() {
  return (
    <section
      id="work"
      aria-label="Selected work"
      className="relative w-full bg-background"
    >
      <div className="w-full">
        <div className="px-3 md:px-4">
          <div className="px-6 pb-6 md:px-22 md:pb-8">
            <div className="flex flex-col items-center gap-5 text-center md:flex-row md:items-end md:justify-between md:text-left">
              <h2 className="text-[clamp(2rem,6vw,4.5rem)] leading-none text-[rgba(32,37,39,1)]">
                <span className="font-serif italic font-normal">Selected</span>{" "}
                <span className="font-headline font-bold">Work</span>
              </h2>

              <a
                href="#work"
                className="inline-flex shrink-0 items-center gap-2 rounded-[500px] bg-[rgba(246,246,246,1)] py-1.5 pl-4 pr-1.5 font-display text-[14px] font-medium text-[rgba(32,37,39,1)] transition-opacity hover:opacity-90"
              >
                <span>See All Projects</span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-[500px] bg-[rgba(32,37,39,1)]">
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
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full p-3 md:p-4">
          <div className="flex flex-col gap-2">
            {projects.map((project) => (
              <SelectedWorkProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
