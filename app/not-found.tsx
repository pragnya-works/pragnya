import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404: Page Not Found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <main id="main-content" className="flex min-h-screen items-center justify-center bg-ink px-6">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto mb-8 flex size-16 items-center justify-center rounded-sm bg-accent/10">
          <span className="font-display text-3xl font-medium text-accent">
            404
          </span>
        </div>

        <h1 className="mb-4 font-display text-4xl font-medium tracking-tight text-paper md:text-5xl">
          Page Not Found
        </h1>

        <p className="mb-8 text-lg leading-relaxed text-paper/50">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-flex items-center rounded-sm border border-accent/20 bg-accent/10 px-6 py-3 text-sm font-semibold text-accent transition hover:bg-accent/20"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
