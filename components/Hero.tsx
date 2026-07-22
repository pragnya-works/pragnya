import { CircuitBoard } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative flex min-h-[100dvh] flex-col justify-center px-6 pt-24 pb-12 md:px-12"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-5xl motion-safe:animate-fade-up">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-accent">
          <CircuitBoard className="h-3 w-3" aria-hidden="true" />
          <span>AI Product Development &amp; Software Agency</span>
        </div>

        <h1
          id="hero-heading"
          className="balanced-text mb-8 font-display text-4xl font-medium leading-[1.05] tracking-tight text-paper md:text-6xl lg:text-7xl"
        >
          Build AI products and web apps
          <br />
          <span className="text-gradient-accent">that ship and scale.</span>
        </h1>

        <p className="balanced-text mb-10 max-w-2xl text-lg leading-relaxed text-paper-muted md:text-xl">
          Pragnya partners with founders and teams to design, build, and deploy
          production-grade AI systems, modern web applications, and resilient
          architecture — without the technical debt that slows you down.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-sm border border-accent/20 bg-accent/10 px-6 py-3 text-sm font-semibold text-accent transition hover:bg-accent/20"
          >
            Start a project
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-sm border border-paper/10 bg-paper/5 px-6 py-3 text-sm font-semibold text-paper transition hover:border-accent/30 hover:text-accent"
          >
            See our work
          </a>
        </div>
      </div>
    </section>
  );
}
