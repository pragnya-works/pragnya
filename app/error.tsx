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
    <main className="flex min-h-screen items-center justify-center bg-ink px-6">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto mb-8 flex size-16 items-center justify-center rounded-sm bg-red-500/10">
          <span className="font-display text-3xl font-medium text-red-500">
            !
          </span>
        </div>

        <h1 className="mb-4 font-display text-4xl font-medium tracking-tight text-paper md:text-5xl">
          Something Went Wrong
        </h1>

        <p className="mb-8 text-lg leading-relaxed text-paper/50">
          An unexpected error occurred. Please try again.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={reset}
            className="inline-flex items-center rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-ink transition hover:bg-accent/90"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex items-center rounded-sm border border-paper/10 bg-paper/5 px-6 py-3 text-sm font-semibold text-paper transition hover:border-accent/30 hover:text-accent"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}
