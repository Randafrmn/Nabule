import Image from "next/image";

const logos = [
  { src: "/logos/acme.svg", alt: "Acme", width: 120, height: 31 },
  { src: "/logos/donut.svg", alt: "Donut", width: 45, height: 30 },
  { src: "/logos/canba.svg", alt: "Kanba", width: 111, height: 30 },
  { src: "/logos/goldline.svg", alt: "Goldline", width: 127, height: 30 },
  { src: "/logos/asgardia.svg", alt: "Asgardia", width: 134, height: 30 },
  { src: "/logos/utosia.svg", alt: "Utosia", width: 120, height: 30 },
  { src: "/logos/circle.svg", alt: "Circle", width: 107, height: 30 },
];

export function ClientsSection() {
  return (
    <section
      id="clients"
      aria-label="Trusted by"
      className="w-full bg-background"
    >
      <div className="w-full px-3 md:px-4">
        <div className="w-full rounded-[20px] bg-[rgba(246,246,246,1)] px-6 py-8 md:px-22 md:py-10">
          <div className="flex w-full flex-wrap items-center justify-between gap-x-8 gap-y-6">
            {logos.map((logo) => (
              <Image
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-7 w-auto md:h-5"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
