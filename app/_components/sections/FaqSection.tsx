export function FaqSection() {
  const items = [
    "What does a typical project timeline look like?",
    "How do we get started working together?",
    "Do you handle development as well as design?",
    "What industries do you specialize in?",
    "Can we adjust the scope mid-project?",
  ];

  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="w-full bg-background py-24"
    >
      <div className="w-full px-6 md:px-10 mb-12">
        <h2 className="font-serif text-4xl md:text-6xl">
          Nabulé <span className="italic">Questions</span>
        </h2>
      </div>

      <div className="w-full px-6 md:px-10">
        <ul className="w-full divide-y divide-foreground/10 border-y border-foreground/10">
          {items.map((q) => (
            <li
              key={q}
              className="flex items-center justify-between py-6 hover:opacity-70 transition-opacity cursor-pointer"
            >
              <span className="text-base md:text-lg">{q}</span>
              <span className="text-2xl">+</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
