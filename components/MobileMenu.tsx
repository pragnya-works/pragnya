"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

type NavLink = {
  href: string;
  label: string;
  external?: boolean;
};

const links: readonly NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#product", label: "Products" },
  { href: "https://github.com/pragnya-works", label: "GitHub", external: true },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="flex h-9 w-9 items-center justify-center rounded-sm text-paper/70 transition hover:text-paper"
      >
        {open ? (
          <X className="h-5 w-5" aria-hidden="true" />
        ) : (
          <Menu className="h-5 w-5" aria-hidden="true" />
        )}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-16 border-b border-paper/5 bg-ink/95 p-6 shadow-lg backdrop-blur-md">
          <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-sm font-medium text-paper/80 transition hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:founder@pragnyaa.in"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-sm border border-paper/10 bg-paper/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-paper transition hover:border-accent/30 hover:text-accent"
            >
              Get in touch
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
