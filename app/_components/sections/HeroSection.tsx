import Image from "next/image";
import { ServiceAccordion } from "./ServiceAccordion";
import { HeroMobileNav } from "./HeroMobileNav";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative w-full bg-background"
    >
      <div className="w-full p-3 md:p-4">
        <div className="relative w-full aspect-square overflow-hidden rounded-[20px] rounded-tr-[0px] md:rounded-tr-[20px] md:aspect-auto md:h-[88vh] md:min-h-[640px] md:max-h-none">
          <Image
            src="/images/HeroPhotos.png"
            alt="Nabulé — minimalist speaker product photography"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <Image
            src="/images/RoundedEdge.svg"
            alt=""
            aria-hidden="true"
            width={20}
            height={20}
            className="pointer-events-none absolute top-0 left-0 z-20 md:hidden"
          />
          <Image
            src="/images/RoundedEdge.svg"
            alt=""
            aria-hidden="true"
            width={20}
            height={20}
            className="pointer-events-none absolute bottom-0 right-0 z-20 rotate-180 md:hidden"
          />

          <HeroMobileNav />

          <div className="absolute inset-0 z-10 flex h-full w-full flex-col text-white">
            <div className="relative flex flex-1 flex-col md:hidden">
              <div className="shrink-0 pr-5 pt-[4.5rem] text-right">
                <h1 className="font-headline text-[13vw] leading-none tracking-tight sm:text-5xl">
                  nabulé
                </h1>
                <span className="mt-1 block font-serif text-[8vw] font-normal italic leading-none sm:text-3xl">
                  design
                </span>
              </div>
              <div className="min-h-0 flex-1" aria-hidden="true" />
              <div className="shrink-0 px-5 pb-8">
                <p className="ml-auto max-w-[17rem] text-right font-sans text-sm leading-snug sm:text-base sm:leading-relaxed">
                  Your brand deserves to be unforgettable. We create identities
                  that connect, inspire, and grow.
                </p>
              </div>
            </div>

            <div className="hidden h-full w-full flex-col md:flex">
              <div className="h-24 shrink-0" aria-hidden="true" />

              <div className="flex w-full flex-1 justify-end px-6 md:px-12 lg:px-16">
                <p className="mb-6 mr-6 max-w-sm text-right font-sans text-base leading-snug md:mb-2 md:mr-20 md:text-[24px] lg:text-xl">
                  Your brand deserves to be
                  <br />
                  unforgettable. We create identities
                  <br />
                  that connect, inspire, and grow.
                </p>
              </div>

              <div className="flex w-full justify-end px-6 pb-32 md:px-12 md:pb-40 lg:px-16">
                <div className="mr-6 flex flex-col items-end leading-none md:mr-20">
                  <h1 className="font-headline text-[20vw] tracking-tight md:text-[10vw] lg:text-[14vw]">
                    nabulé
                  </h1>
                  <span className="-mt-2 mr-4 font-serif text-[12vw] font-normal italic leading-[0.9] md:-mt-4 md:mr-20 md:text-[10vw] lg:text-[100px]">
                    design
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 hidden px-3 pb-3 md:block md:px-6 md:pb-6">
            <div className="pointer-events-auto">
              <ServiceAccordion />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
