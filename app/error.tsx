"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-16 h-16 mx-auto mb-8 bg-red-500/10 rounded-full flex items-center justify-center">
          <span className="font-display text-3xl font-bold text-red-500">
            !
          </span>
        </div>
        
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
          Something Went Wrong
        </h1>
        
        <p className="text-white/50 text-lg mb-8 leading-relaxed">
          An unexpected error occurred. Please try again.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 rounded-full bg-accent-gold text-black font-bold text-sm uppercase tracking-wider hover:brightness-110 transition-all focus:outline-none focus:ring-2 focus:ring-accent-gold/50"
          >
            Try Again
          </button>
          
          <Link
            href="/"
            className="px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] text-white/80 font-bold text-sm uppercase tracking-wider hover:bg-white/[0.08] transition-all focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}
