import { Mail } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-paper/5 px-6 py-24 md:px-12 md:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Start a project
          </p>
          <h2
            id="contact-heading"
            className="balanced-text mb-6 font-display text-4xl font-medium tracking-tight text-paper md:text-5xl lg:text-6xl"
          >
            Let&apos;s build something resilient.
          </h2>
          <p className="mb-10 text-paper-muted md:text-lg">
            Tell us what you are building and we will reply with a clear next
            step within two business days.
          </p>
          <a
            href="mailto:founder@pragnyaa.in?subject=Project%20inquiry"
            className="inline-flex items-center gap-2 rounded-sm border border-accent/20 bg-accent/10 px-6 py-3 text-sm font-semibold text-accent transition hover:bg-accent/20"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            founder@pragnyaa.in
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
