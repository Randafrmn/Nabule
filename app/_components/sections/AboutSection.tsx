import Image from "next/image";

type ServiceDetail = {
  id: string;
  label: string;
  titleStart: string;
  titleEnd: string;
  italicWord: "start" | "end";
  description: string;
  tags: string[];
  image: string;
};

const serviceDetails: ServiceDetail[] = [
  {
    id: "01",
    label: "Branding",
    titleStart: "Brand",
    titleEnd: "Identity",
    italicWord: "end",
    description:
      "We craft distinctive brand identities that resonate, inspire trust, and create lasting emotional connections with your audience. Elevate your brand's presence.",
    tags: ["Brand Strategy", "Visual Identity Design", "Brand Guidelines"],
    image: "/images/brandidentity.png",
  },
  {
    id: "02",
    label: "Design",
    titleStart: "Product",
    titleEnd: "Design",
    italicWord: "start",
    description:
      "Transforming ideas into functional, aesthetically striking products that enhance user experiences, drive engagement, and deliver seamless interactions for your customers.",
    tags: ["UX/UI Design", "Prototyping & Wireframing", "Design Systems"],
    image: "/images/design.png",
  },
  {
    id: "03",
    label: "Marketing",
    titleStart: "Product",
    titleEnd: "Marketing",
    italicWord: "end",
    description:
      "We develop targeted marketing strategies that attract, convert, and retain customers through compelling storytelling, data-driven campaigns, and innovative brand experiences.",
    tags: ["Content Marketing", "Digital Advertising", "Email Campaigns"],
    image: "/images/marketing.png",
  },
  {
    id: "04",
    label: "Socials",
    titleStart: "Social",
    titleEnd: "Media",
    italicWord: "start",
    description:
      "Creating impactful social media strategies that boost engagement, grow audiences, and build meaningful brand-consumer relationships through authentic, creative content.",
    tags: [
      "Social Media Strategy",
      "Content Creation",
      "Influencer Engagement",
    ],
    image: "/images/social.png",
  },
];

function ServiceDetailCard({ item }: { item: ServiceDetail }) {
  const startClass =
    item.italicWord === "start"
      ? "font-serif italic font-normal"
      : "font-headline";
  const endClass =
    item.italicWord === "end"
      ? "font-serif italic font-normal"
      : "font-headline";

  return (
    <article className="relative overflow-hidden rounded-b-[20px] bg-[rgba(246,246,246,1)] pt-0 md:rounded-[20px] md:p-4">
      <div className="absolute top-0 right-0 z-10 hidden items-center gap-1.5 rounded-bl-[18px] bg-[rgba(255,255,255,1)] pb-2 pl-3 pr-3 md:inline-flex">
        <Image
          src="/images/RoundedEdge.svg"
          alt=""
          aria-hidden="true"
          width={20}
          height={20}
          className="pointer-events-none absolute top-0 right-full -mr-px rotate-90"
        />
        <Image
          src="/images/RoundedEdge.svg"
          alt=""
          aria-hidden="true"
          width={20}
          height={20}
          className="pointer-events-none absolute top-full right-0 -mt-px rotate-90"
        />
        <span className="inline-flex h-5 w-6 items-center justify-center rounded-[500px] bg-[rgba(32,37,39,1)] font-display text-[9px] font-medium text-white">
          {item.id}
        </span>
        <span className="font-display text-[11px] font-medium text-[rgba(32,37,39,1)]">
          {item.label}
        </span>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:gap-4">
        <div className="relative w-full shrink-0 overflow-hidden rounded-none md:h-[170px] md:w-[140px] md:rounded-[12px]">
          <Image
            src={item.image}
            alt={`${item.titleStart} ${item.titleEnd}`}
            width={365}
            height={417}
            className="h-auto w-full md:hidden"
            sizes="(max-width: 767px) 100vw, 140px"
          />
          <Image
            src={item.image}
            alt={`${item.titleStart} ${item.titleEnd}`}
            fill
            className="hidden object-cover md:block"
            sizes="140px"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between gap-4 px-3 pb-3 pt-0 md:px-0 md:pb-0 md:pt-6 md:pr-1">
          <div>
            <h3 className="text-[20px] leading-tight text-[rgba(32,37,39,1)] md:text-[22px]">
              <span className={startClass}>{item.titleStart}</span>{" "}
              <span className={endClass}>{item.titleEnd}</span>
            </h3>
            <p className="mt-2 font-display text-[12px] leading-snug text-[rgba(32,37,39,0.6)]">
              {item.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-[4px] bg-[rgba(255,255,255,1)] px-2.5 py-1 font-display text-[11px] text-[rgba(32,37,39,1)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About the studio"
      className="w-full bg-background"
    >
      <div className="w-full px-3 md:px-4">
        <div className="w-full bg-[rgba(255,255,255,1)] py-16 md:py-24 px-6 md:px-22">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-start md:justify-between md:gap-8">
            <div className="shrink-0">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-[500px] bg-[rgba(246,246,246,1)] p-1.5 pr-5 font-display text-[15px] font-medium text-[rgba(32,37,39,1)] transition-opacity hover:opacity-90"
              >
                <span className="inline-flex h-6 w-7 items-center justify-center rounded-[500px] bg-[rgba(32,37,39,1)]">
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
                </span>
                <span>About Us</span>
              </button>
            </div>

            <div>
              <p className="font-display text-[32px] leading-[1.4] text-[rgba(32,37,39,1)] md:text-[32px] lg:text-[35px]">
                Nabulé is a creative agency specializing in{" "}
                <span className="font-serif italic font-normal">branding</span>
                <br className="hidden md:inline" /> and{" "}
                <span className="font-serif italic font-normal">
                  product design
                </span>
                , crafting impactful identities,
                <br className="hidden md:inline" /> innovative experiences, and
                strategic{" "}
                <span className="font-serif italic font-normal">marketing</span>
                <br className="hidden md:inline" />
                <span className="font-serif italic font-normal">
                  solutions
                </span>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="w-full px-6 pb-12 md:px-22 md:pb-16">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {serviceDetails.map((item) => (
              <ServiceDetailCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
