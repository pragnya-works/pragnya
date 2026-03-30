export const siteConfig = {
  name: "Pragnya",
  legalName: "Pragnya Works",
  url: "https://www.pragnyaa.in",
  title: "Pragnya | Conscious Intelligence, Exceptional Products",
  homeTitle: "Pragnya | AI Product Development and Software Agency",
  description:
    "Pragnya is an AI product development and software agency building modern web applications and resilient software systems from first principles.",
  socialTitle: "Pragnya | AI Product Development From First Principles",
  socialDescription:
    "AI product development, modern web applications, resilient software systems.",
  socialImageDescriptionLines: [
    "AI product development, modern web applications,",
    "resilient software systems.",
  ],
  ogImage: "/opengraph-image",
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
