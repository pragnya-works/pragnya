import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { FactList, type Fact } from "@/components/FactList";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { TextLink, textLinkClass } from "@/components/TextLink";
import { buildPageMetadata, edward, founder, siteConfig } from "@/lib/site";
import { buildPageJsonLd, ref, schemaIds } from "@/lib/structured-data";

const title = "Edward | AI Software Development Platform by Pragnya Works";
const description =
  "Edward is an AI software development platform built and operated by Pragnya Works. Public launch January 2026. Supports Claude, OpenAI, and Gemini.";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/edward",
});

const pageGraph = [
  {
    ...buildPageJsonLd({
      id: schemaIds.edwardPage,
      type: "WebPage",
      name: title,
      description,
      path: "/edward",
      about: schemaIds.edward,
    }),
    mainEntity: ref(schemaIds.edward),
  },
];

const steps = [
  {
    title: "Describe",
    description: "You describe the app you want in natural language.",
  },
  {
    title: "Plan",
    description: "Edward plans the change before it writes any code.",
  },
  {
    title: "Code",
    description: "It generates and edits code across multiple files.",
  },
  {
    title: "Sandbox",
    description: "The code runs in an isolated sandbox.",
  },
  {
    title: "Build validation",
    description:
      "Edward builds the project to validate it and debugs failures.",
  },
  {
    title: "Preview",
    description: "You get a live preview of the running app.",
  },
  {
    title: "Iterate",
    description: "You keep refining the app with follow-up instructions.",
  },
  {
    title: "GitHub sync",
    description: "When the code is ready, you sync it to a GitHub repository.",
  },
] as const;

const facts: readonly Fact[] = [
  { label: "Product", value: edward.name },
  {
    label: "Built and operated by",
    value: (
      <Link href="/about" className={textLinkClass}>
        {siteConfig.name}
      </Link>
    ),
  },
  {
    label: "Founder",
    value: <TextLink href={founder.linkedinUrl}>{founder.name}</TextLink>,
  },
  { label: "Public launch", value: edward.launched },
  {
    label: "Website",
    value: <TextLink href={edward.url}>{edward.url}</TextLink>,
  },
  {
    label: "Source code",
    value: <TextLink href={edward.repoUrl}>{edward.repoUrl}</TextLink>,
  },
  {
    label: "Model providers",
    value: "Anthropic Claude, OpenAI, and Gemini, using your own API key",
  },
];

export default function EdwardPage() {
  return (
    <PageShell
      eyebrow="Our product"
      title="Edward, an AI software development platform"
      titleId="edward-heading"
    >
      <JsonLd graph={pageGraph} />

      <div className="space-y-6 leading-relaxed text-paper-muted md:text-lg">
        <p className="text-xl text-paper md:text-2xl">{edward.description}</p>
        <p>{edward.modelSupport}</p>
        <p>
          Edward uses a bring-your-own-key model. You sign in with GitHub and
          connect a model provider with your own API key.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <ButtonLink href={edward.url}>Visit Edward &rarr;</ButtonLink>
        <ButtonLink href={edward.repoUrl} variant="secondary">
          View source &rarr;
        </ButtonLink>
      </div>

      <section
        className="mt-16 border-t border-paper/10 pt-10"
        aria-labelledby="edward-flow-heading"
      >
        <h2
          id="edward-flow-heading"
          className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-accent"
        >
          From prompt to GitHub
        </h2>
        <ol className="divide-y divide-paper/5">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="grid gap-1 py-4 sm:grid-cols-[14rem_1fr] sm:gap-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-paper">
                <span className="mr-3 text-accent/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {step.title}
              </h3>
              <p className="text-paper-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <FactList
        heading="Product details"
        headingId="edward-details-heading"
        facts={facts}
      />
    </PageShell>
  );
}
