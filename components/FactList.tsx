import type { ReactNode } from "react";

export type Fact = {
  label: string;
  value: ReactNode;
};

type FactListProps = {
  heading: string;
  headingId: string;
  facts: readonly Fact[];
};

export function FactList({ heading, headingId, facts }: FactListProps) {
  return (
    <section
      className="mt-16 border-t border-paper/10 pt-10"
      aria-labelledby={headingId}
    >
      <h2
        id={headingId}
        className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-accent"
      >
        {heading}
      </h2>
      <dl className="divide-y divide-paper/5">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6"
          >
            <dt className="text-xs font-semibold uppercase tracking-wider text-paper-muted">
              {fact.label}
            </dt>
            <dd className="break-words text-paper">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
