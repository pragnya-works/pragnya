import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ProductEdward } from "@/components/ProductEdward";
import { PragnyaLogo } from "@/components/PragnyaLogo";
import { schemaIds, siteConfig } from "@/lib/site";

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
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
    canonical: siteConfig.url,
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
      <main className="min-h-screen" id="main-content">
        <Hero />
        <About />
        <ProductEdward />
      </main>

      <footer className="py-20 px-6 border-t border-white/5 flex flex-col items-center">
        <PragnyaLogo className="mb-6 h-12 w-auto sm:h-14" loading="lazy" />
        <p className="text-sm font-medium tracking-wide text-white/60">
          &copy; {currentYear} Pragnya Works. Built with Wisdom.
        </p>
      </footer>
    </>
  );
}
