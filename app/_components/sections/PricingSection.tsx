export function PricingSection() {
  return (
    <section
      id="pricing"
      aria-label="Tailored pricing"
      className="w-full bg-background py-24"
    >
      <div className="w-full px-6 md:px-10 mb-12 text-center">
        <h2 className="font-serif italic text-4xl md:text-6xl">
          Tailored Pricing
        </h2>
      </div>

      <div className="w-full px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        <article className="rounded-2xl bg-foreground/5 p-8 min-h-[440px] flex flex-col">
          <p className="text-xs uppercase tracking-widest opacity-60 mb-4">
            Starter
          </p>
          <p className="text-4xl font-serif mb-6">€1.5k</p>
          <ul className="space-y-2 text-sm opacity-70 flex-1">
            <li>Brand audit</li>
            <li>Logo concept</li>
            <li>1 round of revisions</li>
          </ul>
          <button className="mt-6 rounded-full border border-foreground/20 px-5 py-3 text-sm hover:bg-foreground hover:text-background transition-colors">
            Get started
          </button>
        </article>

        <article className="rounded-2xl bg-foreground text-background p-8 min-h-[440px] flex flex-col">
          <p className="text-xs uppercase tracking-widest opacity-60 mb-4">
            Studio
          </p>
          <p className="text-4xl font-serif mb-6">€4.5k</p>
          <ul className="space-y-2 text-sm opacity-80 flex-1">
            <li>Full visual identity</li>
            <li>Brand guidelines</li>
            <li>3 rounds of revisions</li>
            <li>Launch assets</li>
          </ul>
          <button className="mt-6 rounded-full bg-background text-foreground px-5 py-3 text-sm hover:opacity-90 transition-opacity">
            Most popular
          </button>
        </article>

        <article className="rounded-2xl bg-foreground/5 p-8 min-h-[440px] flex flex-col">
          <p className="text-xs uppercase tracking-widest opacity-60 mb-4">
            Bespoke
          </p>
          <p className="text-4xl font-serif mb-6">Custom</p>
          <ul className="space-y-2 text-sm opacity-70 flex-1">
            <li>End-to-end branding</li>
            <li>Product & web design</li>
            <li>Ongoing partnership</li>
          </ul>
          <button className="mt-6 rounded-full border border-foreground/20 px-5 py-3 text-sm hover:bg-foreground hover:text-background transition-colors">
            Let&apos;s talk
          </button>
        </article>
      </div>
    </section>
  );
}
