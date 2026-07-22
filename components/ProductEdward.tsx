import { MessageSquare, Bot, GitBranch } from "lucide-react";
import { GitHub } from "@/components/GitHubIcon";
import { ProductEdwardVideo } from "@/components/ProductEdwardVideo";
import { ScrollReveal } from "@/components/ScrollReveal";

const features = [
  {
    icon: MessageSquare,
    title: "Start with a prompt",
    description:
      "Describe the product in chat and Edward turns the brief into a working app.",
  },
  {
    icon: Bot,
    title: "Agentic build runs",
    description:
      "Edward plans, generates, and updates the app inside a sandbox instead of stopping at a one-shot draft.",
  },
  {
    icon: GitBranch,
    title: "Preview, then sync",
    description:
      "Review the output, keep steering the run, and sync the final result back to GitHub when it is ready.",
  },
] as const;

export function ProductEdward() {
  return (
    <section
      id="product"
      className="overflow-hidden border-t border-paper/5 px-6 py-24 md:px-12 md:py-32"
      aria-labelledby="product-heading"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Our First Product
              </p>
              <div className="flex items-center gap-3">
                <h2
                  id="product-heading"
                  className="font-display text-4xl font-medium tracking-tight text-paper md:text-5xl"
                >
                  Meet Edward
                </h2>
                <a
                  href="https://github.com/pragnya-works/edward"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Edward GitHub repository"
                  className="text-paper/60 transition hover:text-accent"
                >
                  <GitHub className="h-6 w-6" aria-hidden="true" />
                </a>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-paper-muted md:text-base">
              Edward is an AI web app builder. You describe the product in chat,
              Edward plans and generates the app in a sandbox, and you review
              before syncing to GitHub.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mb-16">
            <ProductEdwardVideo />
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-3xl space-y-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal
                key={feature.title}
                className="flex gap-6 border-t border-paper/10 pt-8"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <Icon
                  className="mt-1 h-5 w-5 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-paper">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-paper-muted md:text-base">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
