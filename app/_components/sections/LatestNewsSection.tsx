export function LatestNewsSection() {
  const posts = [
    { title: "The art of restraint in modern branding", date: "Apr 2026" },
    { title: "Why typography is your brand's voice", date: "Mar 2026" },
    { title: "Designing for emerging audio markets", date: "Feb 2026" },
  ];

  return (
    <section
      id="news"
      aria-label="Latest news"
      className="w-full bg-background py-24"
    >
      <div className="w-full px-6 md:px-10 mb-12">
        <h2 className="font-serif italic text-4xl md:text-6xl">Latest News</h2>
      </div>

      <div className="w-full px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article key={post.title} className="flex flex-col gap-4">
            <div className="rounded-2xl bg-foreground/5 aspect-[4/3] flex items-center justify-center">
              <p className="text-sm opacity-40 italic">[ article cover ]</p>
            </div>
            <p className="text-xs uppercase tracking-widest opacity-60">
              {post.date}
            </p>
            <h3 className="text-lg md:text-xl leading-snug">{post.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
