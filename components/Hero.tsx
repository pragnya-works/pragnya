import { CircuitBoard } from "lucide-react";

const badge = (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-gold/20 bg-accent-gold/5 text-accent-gold text-[10px] uppercase tracking-widest font-bold mb-8">
    <CircuitBoard className="w-3 h-3" aria-hidden="true" />
    <span>Wisdom-driven Software Agency</span>
  </div>
);

const scrollIndicator = (
  <div className="hidden lg:flex flex-col items-center gap-4 mt-auto pt-12">
    <span className="text-[10px] uppercase tracking-[0.4em] text-white/55 font-bold">
      Scroll to explore
    </span>
    <div 
      className="w-[1px] h-12 bg-gradient-to-b from-accent-gold/40 via-accent-gold/10 to-transparent" 
      aria-hidden="true"
    />
  </div>
);

export const Hero = () => {
  return (
    <section
      className="relative flex min-h-[100dvh] flex-col items-center justify-between overflow-hidden py-12 md:py-24"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_34%),radial-gradient(circle_at_20%_28%,rgba(255,255,255,0.04),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.025),transparent_24%,transparent_72%,rgba(212,175,55,0.035))]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute top-[42%] left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-gold/9 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute top-24 left-[18%] -z-10 h-40 w-40 rounded-full bg-white/4 blur-[90px]"
        aria-hidden="true"
      />

      <div className="h-12 md:h-20" aria-hidden="true" />

      <div className="flex max-w-4xl flex-col items-center px-6 text-center motion-safe:animate-fade-up">
        {badge}

        <h1
          id="hero-heading"
          className="balanced-text mb-8 font-display text-5xl leading-[1.1] font-bold tracking-tighter md:text-7xl lg:text-8xl"
        >
          <span className="text-gradient">Conscious intelligence,</span>
          <br />
          <span className="text-gradient-gold">exceptional products.</span>
        </h1>

        <p className="balanced-text mb-12 max-w-2xl text-base leading-relaxed font-medium text-white/60 md:text-lg">
          Pragnya is a software agency for founders and teams who need AI
          products, modern web apps, and resilient systems built from first
          principles without inheriting long-term complexity.
        </p>

        <a
          href="#product"
          className="px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] text-white/80 font-bold text-xs uppercase tracking-[0.2em] hover:bg-accent-gold hover:text-black transition-all focus:outline-none focus:ring-2 focus:ring-accent-gold/50 active:scale-95"
        >
          View our work
        </a>
      </div>

      <div className="motion-safe:animate-fade-up">
        {scrollIndicator}
      </div>
    </section>
  );
};
