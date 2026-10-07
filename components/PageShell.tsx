import type { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

type PageShellProps = {
  eyebrow: string;
  title: string;
  titleId: string;
  children: ReactNode;
};

/** Shared frame for standalone content pages (/about, /edward). */
export function PageShell({
  eyebrow,
  title,
  titleId,
  children,
}: PageShellProps) {
  return (
    <>
      <Navbar />
      <main
        id="main-content"
        className="px-6 pt-32 pb-24 md:px-12 md:pt-40 md:pb-32"
        aria-labelledby={titleId}
      >
        <article className="mx-auto max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
          <h1
            id={titleId}
            className="balanced-text mb-10 font-display text-4xl font-medium leading-[1.1] tracking-tight text-paper md:text-6xl"
          >
            {title}
          </h1>
          {children}
        </article>
      </main>
      <Footer />
    </>
  );
}
