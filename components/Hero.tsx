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
          <span>Wisdom-driven Software Agency</span>
        </div>

        <h1
          id="hero-heading"
          className="balanced-text mb-8 font-display text-4xl font-medium leading-[1.05] tracking-tight text-paper md:text-6xl lg:text-7xl"
        >
          Conscious intelligence,
          <br />
          <span className="text-gradient-accent">exceptional products.</span>
        </h1>

        <p className="balanced-text mb-10 max-w-2xl text-lg leading-relaxed text-paper-muted md:text-xl">
          Pragnya is a software agency for founders and teams building AI
          products, modern web apps, and resilient systems from first
          principles.
        </p>

        <a
          href="#work"
          className="inline-flex items-center rounded-sm border border-paper/10 bg-paper/5 px-6 py-3 text-sm font-semibold text-paper transition hover:border-accent/30 hover:text-accent"
        >
          View our work
        </a>
      </div>
    </section>
  );
}
