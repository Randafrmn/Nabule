import Image from "next/image";
import { ServiceAccordion } from "./ServiceAccordion";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative w-full bg-background"
    >
      <div className="w-full p-3 md:p-4">
        <div className="relative w-full h-[88vh] min-h-[640px] rounded-[20px] overflow-hidden">
          <Image
            src="/images/HeroPhotos.png"
            alt="Nabulé — minimalist speaker product photography"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 z-10 w-full h-full flex flex-col text-white">
            <div className="h-24 md:h-24 shrink-0" aria-hidden="true" />

            <div className="flex-1 w-full flex justify-end px-6 md:px-12 lg:px-16">
              <p className="font-sans text-base md:text-[24px] lg:text-xl leading-snug text-right max-w-sm mr-6 md:mr-20 mb-6 md:mb-2">
                Your brand deserves to be
                <br />
                unforgettable. We create identities
                <br />
                that connect, inspire, and grow.
              </p>
            </div>          

            <div className="w-full px-6 md:px-12 lg:px-16 pb-32 md:pb-40 flex justify-end">
              <div className="flex flex-col items-end leading-none">
                <h1 className="font-headline tracking-tight text-[20vw] md:text-[10vw] lg:text-[14vw] mr-6 md:mr-20">
                  nabulé
                </h1>
                <span className="font-serif italic font-normal text-[12vw] md:text-[10vw] lg:text-[100px] leading-[0.9] -mt-2 md:-mt-4 mr-4 md:mr-20">
                  design
                </span>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 px-3 pb-3 md:px-6 md:pb-6">
            <div className="pointer-events-auto">
              <ServiceAccordion />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
