import Image from "next/image";

export function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full pointer-events-none">
      <div className="pointer-events-auto absolute top-5 md:top-4 left-5 md:left-4">
        <a
          href="#"
          aria-label="Nabulé home"
          className="relative z-10 bg-background text-foreground inline-flex items-baseline gap-1 font-display text-sm font-medium px-3 pt-1 pb-2.5 rounded-br-[22px] transition-opacity"
        >
          <span>nabulé</span>
          <sup className="text-[10px] opacity-70 leading-none">®</sup>
        </a>

        <Image
          src="/images/RoundedEdge.svg"
          alt=""
          aria-hidden="true"
          width={20}
          height={20}
          className="absolute top-full left-0 pointer-events-none"
        />

        <Image
          src="/images/RoundedEdge.svg"
          alt=""
          aria-hidden="true"
          width={20}
          height={20}
          className="absolute top-0 left-full -ml-px pointer-events-none"
        />
      </div>

      <div className="pointer-events-auto absolute top-5 md:top-4 left-1/2 z-0 hidden -translate-x-1/2 md:flex items-center gap-1 bg-background rounded-bl-[20px] rounded-br-[20px] p-[0px_6px_6px_6px]">
        <Image
          src="/images/RoundedEdge.svg"
          alt=""
          aria-hidden="true"
          width={20}
          height={20}
          className="absolute top-0 left-full -ml-px pointer-events-none"
        />

        <Image
          src="/images/RoundedEdge.svg"
          alt=""
          aria-hidden="true"
          width={20}
          height={20}
          className="absolute top-0 right-full -mr-px rotate-90 pointer-events-none"
        />

        <div className="relative z-10">
          <a
            href="#work"
            aria-current="page"
            className="font-sans text-foreground rounded-full bg-foreground/[0.07] px-3 py-1 text-sm font-medium inline-block"
          >
            Work
          </a>
        </div>
        <div className="relative z-10">
          <a
            href="#about"
            className="font-sans text-foreground rounded-full px-3 py-1 text-sm font-medium inline-block hover:bg-foreground/5 transition-colors"
          >
            About
          </a>
        </div>
        <div className="relative z-10">
          <a
            href="#news"
            className="font-sans text-foreground rounded-full px-3 py-1 text-sm font-medium inline-block hover:bg-foreground/5 transition-colors"
          >
            Blog
          </a>
        </div>
        <div className="relative z-10">
          <a
            href="#contact"
            className="font-sans text-foreground rounded-full px-3 py-1 text-sm font-medium inline-block hover:bg-foreground/5 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>

      <div className="pointer-events-auto absolute top-5 md:top-4 right-5 md:right-4 rounded-bl-[22px] bg-background p-[0px_6px_6px_6px]">
        <Image
          src="/images/RoundedEdge.svg"
          alt=""
          aria-hidden="true"
          width={20}
          height={20}
          className="absolute top-0 right-full -mr-px rotate-90 pointer-events-none"
        />

        <Image
          src="/images/RoundedEdge.svg"
          alt=""
          aria-hidden="true"
          width={20}
          height={20}
          className="absolute top-full right-0 rotate-90 pointer-events-none"
        />

        <a
          href="#contact"
          className="relative z-10 font-sans text-background inline-flex items-center justify-center rounded-[500px] bg-[rgba(32,37,39,1)] px-3 py-1 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Start Project
        </a>
      </div>
    </header>
  );
}
