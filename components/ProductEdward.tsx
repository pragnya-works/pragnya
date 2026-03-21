import {
  BotMessageSquare,
  GitBranch,
  MessageSquare,
} from "lucide-react";
import { GitHub } from "@/components/GitHubIcon";
import { ProductEdwardVideo } from "@/components/ProductEdwardVideo";

const features = [
  {
    icon: MessageSquare,
    title: "Start with a Prompt",
    description: "Describe the product in chat and Edward turns the brief into a working app.",
  },
  {
    icon: BotMessageSquare,
    title: "Agentic Build Runs",
    description: "Edward plans, generates, and updates the app inside a sandbox instead of stopping at a one-shot draft.",
  },
  {
    icon: GitBranch,
    title: "Preview, Then Sync",
    description: "Review the output, keep steering the run, and sync the final result back to GitHub when it is ready.",
  },
] as const;

export const ProductEdward = () => {
  return (
    <section
      id="product"
      className="relative overflow-hidden bg-[#050505] px-6 py-24 md:px-12"
      aria-labelledby="product-heading"
    >
      <div
        className="absolute top-0 left-1/2 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent md:hidden"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_28%,transparent_72%,rgba(212,175,55,0.05))]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-16 lg:flex-row">
        <div className="lg:w-1/2 motion-safe:animate-fade-up">
          <div className="font-display text-accent-gold text-sm uppercase tracking-[0.2em] font-bold mb-4">
            Our First Product
          </div>
          <div className="mb-6 flex items-center gap-2.5 sm:gap-3">
            <h2
              id="product-heading"
              className="font-display text-4xl md:text-5xl font-bold leading-none text-white tracking-tight"
            >
              Meet Edward
            </h2>
            <a
              href="https://github.com/pragnya-works/edward"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Edward GitHub repository"
              className="inline-flex h-9 w-9 shrink-0 translate-y-[2px] items-center justify-center self-center text-white/80 transition-colors hover:text-white focus:outline-none"
            >
              <GitHub className="size-7" aria-hidden="true" />
            </a>
          </div>
          <p className="mb-8 text-lg leading-relaxed text-white/60">
            Edward is an AI web app builder. You describe the product in chat,
            Edward plans and generates the app in a sandbox, and you can review
            the result before syncing it back to GitHub.
          </p>

          <p className="mb-8 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
            The workflow is designed for speed without sacrificing structure:
            deterministic builds, reviewable changes, and a clear path from
            prototype to production-ready repository.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  className="rounded-[18px] border border-white/[0.05] bg-white/[0.015] px-5 py-4 transition-colors duration-300 hover:border-white/[0.08] hover:bg-white/[0.025]"
                >
                  <div className="mb-3 flex items-center gap-2.5">
                    <Icon
                      className="h-[15px] w-[15px] shrink-0 text-accent-gold/80"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    <div className="h-px flex-1 bg-gradient-to-r from-accent-gold/20 to-transparent" />
                  </div>
                  <h3 className="max-w-[18ch] text-[1.02rem] font-semibold tracking-[-0.02em] text-white sm:text-[1.1rem]">
                    {feature.title}
                  </h3>
                  <p className="mt-2.5 max-w-[34ch] text-[13px] leading-6 text-white/60 sm:text-[13px]">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="relative w-full motion-safe:animate-fade-up lg:w-1/2">
          <ProductEdwardVideo />
        </div>
      </div>
    </section>
  );
};
