import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Approach } from "@/components/Approach";
import { ProductEdward } from "@/components/ProductEdward";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata, siteConfig } from "@/lib/site";
import { buildPageJsonLd, ref, schemaIds } from "@/lib/structured-data";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: siteConfig.title,
    description: siteConfig.description,
    path: "/",
  }),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const pageGraph = [
  {
    ...buildPageJsonLd({
      id: schemaIds.homePage,
      type: "WebPage",
      name: siteConfig.title,
      description: siteConfig.description,
      path: "/",
      about: schemaIds.organization,
    }),
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${siteConfig.url}${siteConfig.ogImage}`,
    },
    mainEntity: ref(schemaIds.service),
  },
  {
    "@type": "ProfessionalService",
    "@id": schemaIds.service,
    name: "AI Product Development and Software Engineering",
    url: siteConfig.url,
    description:
      "Client engineering work for founders and teams: AI systems, web applications, and software architecture.",
    provider: ref(schemaIds.organization),
    serviceType: [
      "AI product development",
      "Web application development",
      "Software architecture",
      "Resilient software systems",
    ],
    audience: {
      "@type": "Audience",
      audienceType: "Founders and teams",
    },
  },
];

export default function Home() {
  return (
    <>
      <JsonLd graph={pageGraph} />
      <Navbar />
      <main id="main-content">
        <Hero />
        <ProductEdward />
        <Services />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
