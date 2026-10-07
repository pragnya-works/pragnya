import type { Metadata } from "next";

export const siteConfig = {
  name: "Pragnya Works",
  url: "https://www.pragnyaa.in",
  title: "Pragnya Works | AI Products & Software Engineering",
  description:
    "Pragnya Works is an independent software company founded in 2026 by Shubhojeet Bera. We build AI products like Edward and engineer software for founders and teams.",
  ogImage: "/opengraph-image",
  email: "shubhojeet@pragnyaa.in",
  foundedYear: "2026",
  githubUrl: "https://github.com/pragnya-works",
  keywords: [
    "Pragnya Works",
    "Edward",
    "AI product development",
    "software engineering",
    "web app development",
    "Next.js development",
    "React development",
    "system architecture",
    "resilient systems",
    "first-principles engineering",
    "technical strategy",
    "developer tools",
  ],
} as const;

export const founder = {
  name: "Shubhojeet Bera",
  jobTitle: "Founder",
  websiteUrl: "https://www.shubhojeet.com",
  linkedinUrl: "https://www.linkedin.com/in/shubhobera",
  githubUrl: "https://github.com/shubho0908",
} as const;

export const edward = {
  name: "Edward",
  url: "https://edwardd.app",
  repoUrl: "https://github.com/pragnya-works/Edward",
  launched: "January 2026",
  datePublished: "2026-01",
  description:
    "Edward is an AI software development platform built and operated by Pragnya Works. It turns natural-language product requirements into runnable web applications through planning, multi-file code generation and editing, sandboxed execution, debugging, live previews, and GitHub sync.",
  modelSupport:
    "Edward supports Claude through Anthropic's API alongside OpenAI and Gemini. Claude can be used for planning, code generation and editing, debugging, and iterative agent workflows.",
} as const;

export const socialImage = {
  url: siteConfig.ogImage,
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} website preview`,
} as const;

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

/**
 * Per-page metadata. Next.js replaces (not merges) the root `openGraph` and
 * `twitter` objects when a page defines its own, so each page must carry the
 * complete set, including its own canonical URL.
 */
export function buildPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: path,
      siteName: siteConfig.name,
      title,
      description,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
  };
}
