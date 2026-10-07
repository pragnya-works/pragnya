import type { Metadata } from "next";
import Link from "next/link";
import { FactList, type Fact } from "@/components/FactList";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { TextLink, textLinkClass } from "@/components/TextLink";
import { buildPageMetadata, edward, founder, siteConfig } from "@/lib/site";
import { buildPageJsonLd, ref, schemaIds } from "@/lib/structured-data";

const title = "About Pragnya Works | Independent Software Company";
const description =
  "About Pragnya Works, an independent software company founded in 2026 by Shubhojeet Bera. Company details, founder, products, and contact.";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/about",
});

const pageGraph = [
  {
    ...buildPageJsonLd({
      id: schemaIds.aboutPage,
      type: "AboutPage",
      name: title,
      description,
      path: "/about",
      about: schemaIds.organization,
    }),
    mainEntity: ref(schemaIds.organization),
  },
];

const facts: readonly Fact[] = [
  { label: "Company", value: siteConfig.name },
  {
    label: "Founder",
    value: <TextLink href={founder.linkedinUrl}>{founder.name}</TextLink>,
  },
  { label: "Founded", value: siteConfig.foundedYear },
  { label: "Location", value: "India" },
  {
    label: "Website",
    value: <TextLink href={siteConfig.url}>{siteConfig.url}</TextLink>,
  },
  {
    label: "Email",
    value: (
      <TextLink href={`mailto:${siteConfig.email}`}>
        {siteConfig.email}
      </TextLink>
    ),
  },
  {
    label: "GitHub",
    value: (
      <TextLink href={siteConfig.githubUrl}>{siteConfig.githubUrl}</TextLink>
    ),
  },
  {
    label: "Product",
    value: (
      <>
        {edward.name}, <TextLink href={edward.url}>{edward.url}</TextLink>
      </>
    ),
  },
];

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="About Pragnya Works"
      titleId="about-heading"
    >
      <JsonLd graph={pageGraph} />

      <div className="space-y-6 leading-relaxed text-paper-muted md:text-lg">
        <p>
          We do two kinds of work. We build and operate our own AI products. We
          also work with founders and teams on production-grade software, AI
          systems, and infrastructure, described under{" "}
          <Link href="/#services" className={textLinkClass}>
            services
          </Link>
          .
        </p>
        <p>
          <Link href="/edward" className={textLinkClass}>
            Edward
          </Link>{" "}
          is our first product. It is an AI software development platform that
          turns natural-language requirements into runnable web applications. It
          launched publicly in {edward.launched} at{" "}
          <TextLink href={edward.url}>edwardd.app</TextLink>, and its source
          code is on <TextLink href={edward.repoUrl}>GitHub</TextLink>.
        </p>
        <p>
          Our official website is{" "}
          <TextLink href={siteConfig.url}>www.pragnyaa.in</TextLink>, and our
          code is published in the{" "}
          <TextLink href={siteConfig.githubUrl}>pragnya-works</TextLink> GitHub
          organization. To reach {founder.name}, email{" "}
          <TextLink href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </TextLink>{" "}
          or find him on{" "}
          <TextLink href={founder.linkedinUrl}>LinkedIn</TextLink>.
        </p>
      </div>

      <FactList
        heading="Company details"
        headingId="company-details-heading"
        facts={facts}
      />
    </PageShell>
  );
}
