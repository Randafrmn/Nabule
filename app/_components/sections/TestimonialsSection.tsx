export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-label="Testimonials"
      className="w-full bg-background py-24"
    >
      <div className="w-full px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
        <div className="rounded-2xl bg-foreground/5 aspect-square flex items-center justify-center">
          <p className="text-sm opacity-40 italic">[ founder photo ]</p>
        </div>

        <blockquote className="md:col-span-2 flex items-center">
          <p className="text-2xl md:text-3xl leading-snug">
            “From concept to execution, Nabulé is an exceptionally innovative
            professional, and truly knows what it&apos;s doing.”
          </p>
        </blockquote>
      </div>

      <div className="w-full px-6 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <article
            key={i}
            className="rounded-2xl bg-foreground/5 p-6 min-h-[160px]"
          >
            <p className="text-sm opacity-70 mb-4">
              Testimonial copy placeholder. Replace with real quote.
            </p>
            <p className="text-xs uppercase tracking-widest opacity-60">
              Client Name — Role
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
