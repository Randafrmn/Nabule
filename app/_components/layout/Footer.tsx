export function Footer() {
  return (
    <footer id="footer" className="w-full bg-background pt-24 pb-10">
      <div className="w-full px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-widest opacity-60">
              Newsletter
            </p>
            <h3 className="text-2xl md:text-3xl font-serif">
              Stay in the loop with our latest work.
            </h3>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md pt-4">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-full border border-foreground/20 px-5 py-3 bg-transparent outline-none focus:border-foreground transition-colors"
              />
              <button
                type="submit"
                className="rounded-full bg-foreground text-background px-6 py-3 text-sm hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm">
            <div className="space-y-3">
              <p className="uppercase tracking-widest opacity-60">Studio</p>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:opacity-70">About</a></li>
                <li><a href="#work" className="hover:opacity-70">Work</a></li>
                <li><a href="#contact" className="hover:opacity-70">Contact</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="uppercase tracking-widest opacity-60">Social</p>
              <ul className="space-y-2">
                <li><a href="#" className="hover:opacity-70">Instagram</a></li>
                <li><a href="#" className="hover:opacity-70">LinkedIn</a></li>
                <li><a href="#" className="hover:opacity-70">Behance</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full">
          <h2 className="font-serif leading-none tracking-tight text-[20vw] md:text-[18vw] text-center select-none">
            nabulé <span className="italic">design</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4 pt-10 border-t border-foreground/10 mt-10 text-xs opacity-60">
          <p>© {new Date().getFullYear()} Nabulé Studio. All rights reserved.</p>
          <p>Made with care in Italy</p>
        </div>
      </div>
    </footer>
  );
}
