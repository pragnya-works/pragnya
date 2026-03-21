export const siteConfig = {
  name: "Pragnya",
  legalName: "Pragnya Works",
  url: "https://pragnyaa.in",
  title: "Pragnya | Conscious Intelligence, Exceptional Products",
  description:
    "Pragnya is a wisdom-driven software agency building AI products, resilient web apps, and scalable systems from first principles.",
  ogImage: "/og.png",
  email: "founder@pragnyaa.in",
  githubUrl: "https://github.com/pragnya-works",
  keywords: [
    "Pragnya",
    "software agency",
    "AI product development",
    "web app development",
    "system architecture",
    "first-principles engineering",
    "resilient systems",
    "developer tools",
    "India",
  ],
} as const;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.legalName,
  url: siteConfig.url,
  logo: `${siteConfig.url}/pragnya-mark.svg`,
  description: siteConfig.description,
  email: siteConfig.email,
  sameAs: [siteConfig.githubUrl],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: siteConfig.email,
    url: siteConfig.url,
  },
} as const;
