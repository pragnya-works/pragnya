import { ScrollReveal } from "@/components/ScrollReveal";

const values = [
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

export function About() {
  return (
    <section
      id="about"
      className="border-t border-paper/5 bg-surface px-6 py-24 md:px-12 md:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <ScrollReveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Our Philosophy
            </p>
            <h2
              id="about-heading"
              className="balanced-text font-display text-4xl font-medium leading-[1.15] tracking-tight text-paper md:text-5xl"
            >
              Pragnya is not just about building software. It is about deeply
              understanding the problem to build the right system.
            </h2>
          </ScrollReveal>

          <div className="space-y-12 lg:pt-2">
            {values.map((value, index) => (
              <ScrollReveal
                key={value.title}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="border-l border-accent/30 pl-6">
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-paper">
                    {value.title}
                  </h3>
                  <p className="leading-relaxed text-paper-muted">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
