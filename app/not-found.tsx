import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404: Page Not Found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-16 h-16 mx-auto mb-8 bg-accent-gold/10 rounded-full flex items-center justify-center">
          <span className="font-display text-3xl font-bold text-accent-gold">
            404
          </span>
        </div>
        
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
          Page Not Found
        </h1>
        
        <p className="text-white/50 text-lg mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-full border border-accent-gold/20 bg-accent-gold/5 text-accent-gold font-bold text-sm uppercase tracking-wider hover:bg-accent-gold/10 transition-all focus:outline-none focus:ring-2 focus:ring-accent-gold/50"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
