"use client";

import { useRef, useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ServiceTagsMarquee } from "./ServiceTagsMarquee";

gsap.registerPlugin(useGSAP);

type Service = {
  id: string;
  title: string;
  description: string;
  tags: string[];
};

const services: Service[] = [
  {
    id: "01",
    title: "Branding",
    description:
      "We craft distinctive brand identities that resonate, inspire trust, and create lasting emotional connections with your audience. Elevate your brand's presence.",
    tags: ["Brand Strategy", "Visual Identity Design", "Brand Guidelines"],
  },
  {
    id: "02",
    title: "Product Design",
    description:
      "We design products that delight users and drive business growth, combining strategic thinking with intuitive interfaces and elegant interactions.",
    tags: ["UX Research", "UI Design", "Prototyping"],
  },
  {
    id: "03",
    title: "Marketing",
    description:
      "We craft marketing strategies that amplify your brand's reach, engage the right audience, and turn attention into measurable growth.",
    tags: ["Campaign Strategy", "Content Creation", "Performance Ads"],
  },
  {
    id: "04",
    title: "Social Media",
    description:
      "We build engaged communities and craft scroll-stopping content that translates social presence into real connections with your customers.",
    tags: ["Community Management", "Content Planning", "Creative Direction"],
  },
];

function PlusIcon({ ref }: { ref?: React.Ref<SVGSVGElement> }) {
  return (
    <svg
      ref={ref}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      style={{ transformOrigin: "center" }}
    >
      <rect x="9" y="2" width="2" height="16" rx="2" fill="rgba(0,0,0,1)" />
      <rect x="2" y="9" width="16" height="2" rx="2" fill="rgba(0,0,0,1)" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <rect x="2" y="9" width="16" height="2" rx="2" fill="rgba(0,0,0,1)" />
    </svg>
  );
}

function ServiceCard({
  service,
  isOpen,
}: {
  service: Service;
  isOpen: boolean;
}) {
  const plusIconRef = useRef<SVGSVGElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const handleMouseEnter = () => {
    const icon = plusIconRef.current;
    if (!icon) return;
    gsap.to(icon, {
      rotate: 90,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    const icon = plusIconRef.current;
    if (!icon) return;
    gsap.to(icon, {
      rotate: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  useGSAP(
    () => {
      const el = innerRef.current;
      if (!el) return;

      if (isFirstRender.current) {
        isFirstRender.current = false;
        gsap.set(el, {
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        });
        return;
      }

      if (isOpen) {
        gsap.set(el, { height: "auto" });
        const target = el.offsetHeight;
        gsap.fromTo(
          el,
          { height: 0, opacity: 0 },
          {
            height: target,
            opacity: 1,
            duration: 0.45,
            ease: "power2.out",
            onComplete: () => {
              gsap.set(el, { height: "auto" });
            },
          },
        );
      } else {
        const current = el.offsetHeight;
        gsap.fromTo(
          el,
          { height: current, opacity: 1 },
          {
            height: 0,
            opacity: 0,
            duration: 0.35,
            ease: "power2.inOut",
          },
        );
      }
    },
    { scope: innerRef, dependencies: [isOpen] },
  );

  return (
    <Accordion.Item
      value={service.id}
      className="group rounded-[16px] bg-white p-4 shadow-sm"
    >
      <Accordion.Header className="m-0">
        <Accordion.Trigger
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="flex w-full items-center justify-between gap-3 text-left"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-[500px] bg-[rgba(32,37,39,1)] px-2 font-display text-[11px] font-medium text-white">
              {service.id}
            </span>
            <span className="font-display text-[16px] font-medium text-[rgba(32,37,39,1)]">
              {service.title}
            </span>
          </div>

          <span className="shrink-0 group-data-[state=open]:hidden">
            <PlusIcon ref={plusIconRef} />
          </span>
          <span className="hidden shrink-0 group-data-[state=open]:inline-flex">
            <MinusIcon />
          </span>
        </Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content forceMount className="accordion-content-gsap">
        <div ref={innerRef} className="overflow-hidden">
          <div className="pt-4">
            <p className="font-display text-[14px] leading-relaxed text-[rgba(32,37,39,0.6)]">
              {service.description}
            </p>

            <div className="mt-4">
              <ServiceTagsMarquee tags={service.tags} speed={36} />
            </div>
          </div>
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
}

export function ServiceAccordion() {
  const [openValues, setOpenValues] = useState<string[]>(["01"]);

  return (
    <Accordion.Root
      type="multiple"
      value={openValues}
      onValueChange={setOpenValues}
      className="grid w-full grid-cols-1 items-end gap-4 md:grid-cols-4"
    >
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
          isOpen={openValues.includes(service.id)}
        />
      ))}
    </Accordion.Root>
  );
}
