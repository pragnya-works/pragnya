import { absoluteUrl, edward, founder, siteConfig } from "@/lib/site";

export const schemaIds = {
  organization: `${siteConfig.url}/#organization`,
  founder: `${siteConfig.url}/#founder`,
  website: `${siteConfig.url}/#website`,
  edward: `${siteConfig.url}/#edward`,
  service: `${siteConfig.url}/#service`,
  homePage: `${siteConfig.url}/#webpage`,
  aboutPage: `${siteConfig.url}/about#webpage`,
  edwardPage: `${siteConfig.url}/edward#webpage`,
} as const;

export const ref = (id: string) => ({ "@id": id });

/** Site-wide nodes, emitted once from the root layout. */
export const siteGraph = [
  {
    "@type": "Organization",
    "@id": schemaIds.organization,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl("/pragnya-mark.svg"),
    description: siteConfig.description,
    email: siteConfig.email,
    foundingDate: siteConfig.foundedYear,
    founder: ref(schemaIds.founder),
    sameAs: [siteConfig.githubUrl, siteConfig.linkedinUrl],
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
    "@type": "Person",
    "@id": schemaIds.founder,
    name: founder.name,
    jobTitle: founder.jobTitle,
    url: founder.websiteUrl,
    sameAs: [founder.linkedinUrl, founder.githubUrl],
    worksFor: ref(schemaIds.organization),
  },
  {
    "@type": "WebSite",
    "@id": schemaIds.website,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: "en",
    publisher: ref(schemaIds.organization),
  },
  {
    "@type": "SoftwareApplication",
    "@id": schemaIds.edward,
    name: edward.name,
    url: edward.url,
    description: edward.description,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    datePublished: edward.datePublished,
    codeRepository: edward.repoUrl,
    creator: ref(schemaIds.organization),
    provider: ref(schemaIds.organization),
  },
] as const;

type PageJsonLdInput = {
  id: string;
  type: "WebPage" | "AboutPage";
  name: string;
  description: string;
  path: string;
  about: string;
};

/** Page-level node that ties a URL to the entity it describes. */
export function buildPageJsonLd({
  id,
  type,
  name,
  description,
  path,
  about,
}: PageJsonLdInput) {
  return {
    "@type": type,
    "@id": id,
    name,
    url: absoluteUrl(path),
    description,
    inLanguage: "en",
    isPartOf: ref(schemaIds.website),
    about: ref(about),
  };
}
