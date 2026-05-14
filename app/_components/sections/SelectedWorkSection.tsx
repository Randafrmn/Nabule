import Image from "next/image";

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
            <div className="flex items-end justify-between gap-6">
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
          <div className="relative w-full h-[88vh] min-h-[640px] overflow-hidden">
            <Image
              src="/images/vela.png"
              alt="Véla — branding and product photography"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />

            <div className="absolute inset-0 z-10 h-full w-full">
              <div className="pointer-events-none absolute top-8 right-10 md:top-12 md:right-16">
                <Image
                  src="/logos/asgardia.svg"
                  alt="Asgardia"
                  width={134}
                  height={30}
                  className="h-5 w-auto brightness-0 invert md:h-7"
                />
              </div>

              <p
                className="pointer-events-none absolute bottom-4 right-3 max-w-[95vw] text-right font-headline font-bold leading-[100%] tracking-[-6px] text-white md:bottom-14 md:right-16"
                style={{ fontSize: "clamp(3.5rem, 12vw, 140px)" }}
              >
                véla
              </p>

              <div className="pointer-events-auto absolute bottom-0 right-0">
                <div className="relative rounded-tl-[20px] bg-[rgba(255,255,255,1)] p-2">
                  <Image
                    src="/images/RoundedEdge.svg"
                    alt=""
                    aria-hidden="true"
                    width={20}
                    height={20}
                    className="absolute bottom-0 right-full -mr-px rotate-180 pointer-events-none"
                  />
                  <Image
                    src="/images/RoundedEdge.svg"
                    alt=""
                    aria-hidden="true"
                    width={20}
                    height={20}
                    className="absolute bottom-full right-0 -mb-px rotate-180 pointer-events-none"
                  />
                  <a
                    href="#work"
                    aria-label="Open project"
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

              <div className="pointer-events-auto absolute bottom-6 left-4 max-w-[min(100%,20rem)] md:bottom-8 md:left-6 md:max-w-[22rem]">
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
                      2025
                    </span>
                  </div>

                  <p className="mt-3 font-display text-[13px] leading-relaxed text-[rgba(32,37,39,1)] md:text-[14px]">
                    A refined branding project that embodies elegance,
                    simplicity, and timeless design for a luxury lifestyle
                    brand.
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {["Logo", "Branding", "Brand Identity"].map((tag) => (
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

            <div className="pointer-events-auto absolute left-0 top-0 z-30">
              <a
                href="#work"
                className="relative z-10 inline-flex bg-[rgba(255,255,255,1)] px-5 py-3 font-display text-[15px] font-medium text-[rgba(32,37,39,1)] rounded-br-[20px] transition-opacity"
              >
                véla
              </a>
              <Image
                src="/images/RoundedEdge.svg"
                alt=""
                aria-hidden="true"
                width={20}
                height={20}
                className="pointer-events-none absolute top-full left-0 block"
              />
              <Image
                src="/images/RoundedEdge.svg"
                alt=""
                aria-hidden="true"
                width={20}
                height={20}
                className="pointer-events-none absolute top-0 left-full -ml-px block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
