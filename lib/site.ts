export const siteConfig = {
  name: "Pragnya",
  legalName: "Pragnya Works",
  url: "https://www.pragnyaa.in",
  title: "Pragnya | AI Product Development & Software Agency",
  homeTitle: "Pragnya | AI Product Development and Software Engineering",
  description:
    "Pragnya is an AI product development and software agency that builds production-grade web apps, AI systems, and scalable architecture for founders and teams. Fast, clean, and engineered to last.",
  socialTitle: "Pragnya | AI Product Development That Ships",
  socialDescription:
    "We build AI products, modern web apps, and resilient systems from first principles. Fast, clean, production-ready engineering for startups and teams.",
  socialImageDescriptionLines: [
    "AI products, modern web apps,",
    "and resilient software systems.",
  ],
  ogImage: "/opengraph-image",
  email: "founder@pragnyaa.in",
  githubUrl: "https://github.com/pragnya-works",
  keywords: [
    "Pragnya",
    "AI product development",
    "AI software agency",
    "software engineering agency",
    "web app development",
    "Next.js development",
    "React development",
    "system architecture",
    "resilient systems",
    "first-principles engineering",
    "technical strategy",
    "startup engineering",
    "software agency India",
    "developer tools",
  ],
} as const;

export const schemaIds = {
  organization: `${siteConfig.url}/#organization`,
  website: `${siteConfig.url}/#website`,
  webpage: `${siteConfig.url}/#webpage`,
  service: `${siteConfig.url}/#service`,
} as const;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": schemaIds.organization,
      name: siteConfig.legalName,
      legalName: siteConfig.legalName,
      url: siteConfig.url,
      logo: `${siteConfig.url}/pragnya-mark.svg`,
      description: siteConfig.description,
      email: siteConfig.email,
      sameAs: [siteConfig.githubUrl],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: siteConfig.email,
          url: siteConfig.url,
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": schemaIds.website,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: "en",
      publisher: {
        "@id": schemaIds.organization,
      },
    },
  ],
} as const;
