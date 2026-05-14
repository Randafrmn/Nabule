export function CtaSection() {
  return (
    <section
      id="contact"
      aria-label="Start a project"
      className="w-full bg-background py-12"
    >
      <div className="w-full px-6 md:px-10">
        <div className="w-full rounded-2xl bg-foreground text-background grid grid-cols-1 md:grid-cols-2 gap-10 p-10 md:p-16">
          <div className="flex flex-col justify-between gap-10 min-h-[320px]">
            <h2 className="font-serif text-5xl md:text-7xl leading-[0.95]">
              Creative <span className="italic">journey</span>
            </h2>

            <button className="self-start rounded-full bg-background text-foreground px-6 py-3 text-sm hover:opacity-90 transition-opacity">
              Start your project
            </button>
          </div>

          <ul className="flex flex-col gap-4 text-sm opacity-80">
            {[
              "Discovery & strategy",
              "Concept exploration",
              "Visual identity",
              "Brand guidelines",
              "Launch & support",
            ].map((step, i) => (
              <li
                key={step}
                className="flex items-center justify-between border-b border-background/20 pb-3"
              >
                <span>0{i + 1} — {step}</span>
                <span>→</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
