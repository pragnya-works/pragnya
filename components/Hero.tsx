import { CircuitBoard } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { TextLink } from "@/components/TextLink";
import { founder, siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section
      className="relative flex min-h-[100dvh] flex-col justify-center px-6 pt-24 pb-12 md:px-12"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-5xl motion-safe:animate-fade-up">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-accent">
          <CircuitBoard className="size-3" aria-hidden="true" />
          <span className="sm:hidden">AI Product &amp; Engineering</span>
          <span className="hidden sm:inline">
            AI Product &amp; Engineering Company
          </span>
        </div>

        <h1
          id="hero-heading"
          className="balanced-text mb-8 font-display text-4xl font-medium leading-[1.05] tracking-tight text-paper md:text-6xl lg:text-7xl"
        >
          Build AI products and web apps{" "}
          <span className="text-gradient-accent">that ship and scale.</span>
        </h1>

        <p className="balanced-text mb-6 max-w-2xl text-lg leading-relaxed text-paper-muted md:text-xl">
          Pragnya Works builds and operates AI products while partnering with
          founders and teams on production-grade software, AI systems, and
          resilient infrastructure.
        </p>

        <p className="mb-10 max-w-2xl text-sm leading-relaxed text-paper-muted md:text-base">
          {`${siteConfig.name} is an independent software company founded in ${siteConfig.foundedYear} by `}
          <TextLink href={founder.linkedinUrl}>{founder.name}</TextLink>.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <ButtonLink href="#work">Meet Edward</ButtonLink>
          <ButtonLink href="#contact" variant="secondary">
            Start a project
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
