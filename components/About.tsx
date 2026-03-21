const philosophyItems = [
  {
    title: "Architectural Sovereignty",
    description:
      "We do not just ship features; we engineer systems. By protecting architectural integrity early, every product stays easier to evolve, scale, and maintain.",
  },
  {
    title: "First-Principles Engineering",
    description:
      "We return to first principles to remove accidental complexity at the design stage, building lean foundations for AI products, SaaS platforms, and long-lived web applications.",
  },
] as const;

export const About = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-32 px-6 md:px-12 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div
        className="absolute top-0 left-1/2 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-4xl text-center motion-safe:animate-fade-up">
        <div className="font-display text-accent-gold text-xs uppercase tracking-[0.3em] font-bold mb-8">
          Our Philosophy
        </div>

        <h2
          id="about-heading"
          className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-12 leading-[1.2] tracking-tight"
        >
          Pragnya isn&apos;t just about building software, it&apos;s about
          deeply <em className="text-white not-italic">understanding</em> the
          problem to build the right system.
        </h2>

        <p className="balanced-text mx-auto max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
          We partner on product strategy, application architecture, performance,
          and implementation so the final system is indexable, fast, and stable
          from day one.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mt-20">
          {philosophyItems.map((item) => (
            <article key={item.title} className="space-y-4">
              <div
                className="h-px w-12 bg-accent-gold/40"
                aria-hidden="true"
              />
              <h3 className="text-white font-bold text-sm uppercase tracking-widest">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/60">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
