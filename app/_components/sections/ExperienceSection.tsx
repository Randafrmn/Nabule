export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-label="Nabulé experience"
      className="w-full bg-background py-24"
    >
      <div className="w-full px-6 md:px-10 mb-12 text-center">
        <h2 className="font-serif text-4xl md:text-6xl">
          Nabulé <span className="italic">Experience</span>
        </h2>
      </div>

      <div className="w-full px-6 md:px-10 mb-16">
        <div className="w-full rounded-2xl bg-foreground/5 aspect-[21/9] flex items-center justify-center">
          <p className="text-sm opacity-40 italic">
            [ team / meeting photo ]
          </p>
        </div>
      </div>

      <div className="w-full px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          "Strategy",
          "Design",
          "Development",
          "Delivery",
        ].map((label, i) => (
          <article
            key={label}
            className="rounded-2xl bg-foreground/5 p-6 min-h-[120px] flex flex-col justify-between"
          >
            <p className="text-xs opacity-60">
              0{i + 1}
            </p>
            <h3 className="text-lg font-medium">{label}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
