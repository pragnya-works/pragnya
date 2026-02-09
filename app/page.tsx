import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

const About = dynamic(() => import("@/components/About").then(mod => ({ default: mod.About })), {
  loading: () => <div className="min-h-screen" />,
});

const ProductEdward = dynamic(() => import("@/components/ProductEdward").then(mod => ({ default: mod.ProductEdward })), {
  loading: () => <div className="min-h-screen" />,
});

const currentYear = new Date().getFullYear();

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen" id="main-content">
        <Hero />
        <Suspense fallback={<div className="min-h-screen" />}>
          <About />
        </Suspense>
        <Suspense fallback={<div className="min-h-screen" />}>
          <ProductEdward />
        </Suspense>
      </main>

      <footer className="py-20 px-6 border-t border-white/5 flex flex-col items-center">
        <div 
          className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center font-display font-bold text-white/20 text-2xl mb-6"
          aria-hidden="true"
        >
          P
        </div>
        <p className="text-white/30 text-sm font-medium tracking-wide">
          &copy; {currentYear} Pragnya Works. Built with Wisdom.
        </p>
      </footer>
    </>
  );
}
