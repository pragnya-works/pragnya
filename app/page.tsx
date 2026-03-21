import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ProductEdward } from "@/components/ProductEdward";
import { siteConfig } from "@/lib/site";

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: {
    absolute: "Pragnya | AI Product Development and Software Agency",
  },
  description:
    "Pragnya builds AI products, modern web applications, and resilient software systems from first principles.",
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function Home() {
  const webpageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: siteConfig.title,
    url: siteConfig.url,
    description: siteConfig.description,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    about: {
      "@type": "Organization",
      name: siteConfig.legalName,
    },
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
        <div
          className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center font-display font-bold text-white/20 text-2xl mb-6"
          aria-hidden="true"
        >
          P
        </div>
        <p className="text-sm font-medium tracking-wide text-white/60">
          &copy; {currentYear} Pragnya Works. Built with Wisdom.
        </p>
      </footer>
    </>
  );
}
