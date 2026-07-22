import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { ProductEdward } from "@/components/ProductEdward";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { schemaIds, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    absolute: siteConfig.homeTitle,
  },
  description: siteConfig.description,
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
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const webpageJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": schemaIds.webpage,
        name: siteConfig.homeTitle,
        url: siteConfig.url,
        description: siteConfig.description,
        inLanguage: "en",
        isPartOf: {
          "@id": schemaIds.website,
        },
        about: {
          "@id": schemaIds.organization,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${siteConfig.url}${siteConfig.ogImage}`,
        },
        mainEntity: {
          "@id": schemaIds.service,
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": schemaIds.service,
        name: "AI Product Development and Software Engineering",
        url: siteConfig.url,
        description: siteConfig.description,
        provider: {
          "@id": schemaIds.organization,
        },
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
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageJsonLd) }}
      />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <About />
        <ProductEdward />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
