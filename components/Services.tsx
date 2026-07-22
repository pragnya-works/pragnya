import { ScrollReveal } from "@/components/ScrollReveal";

const services = [
  {
    number: "01",
    title: "AI Product Development",
    description:
      "We build agentic tools, AI workflows, and intelligent interfaces designed for production, not demos.",
  },
  {
    number: "02",
    title: "Web Applications",
    description:
      "High-performance Next.js and React applications with clean architecture, fast loading, and SEO built in.",
  },
  {
    number: "03",
    title: "System Architecture",
    description:
      "Resilient, scalable foundations that eliminate technical debt before it starts.",
  },
  {
    number: "04",
    title: "Technical Strategy",
    description:
      "First-principles product engineering: architecture reviews, stack decisions, and build-or-buy guidance.",
  },
] as const;

export function Services() {
  return (
    <section
      id="services"
      className="border-t border-paper/5 px-6 py-24 md:px-12 md:py-32"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mb-16 md:mb-24">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              What we do
            </p>
            <h2
              id="services-heading"
              className="balanced-text max-w-3xl font-display text-4xl font-medium leading-[1.15] tracking-tight text-paper md:text-5xl lg:text-6xl"
            >
              Engineering wisdom for products that last.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-12 md:grid-cols-2 md:gap-x-16 md:gap-y-16">
          {services.map((service, index) => (
            <ScrollReveal
              key={service.title}
              className="border-t border-paper/10 pt-6"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="mb-6 flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-paper">
                  {service.title}
                </h3>
                <span className="font-sans text-xs text-accent/60">
                  {service.number}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-paper-muted md:text-base">
                {service.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
