import Link from "next/link";
import { PragnyaLogo } from "@/components/PragnyaLogo";
import { MobileMenu } from "@/components/MobileMenu";

type NavLink = {
  href: string;
  label: string;
  external?: boolean;
};

const navLinks: readonly NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "https://github.com/pragnya-works", label: "GitHub", external: true },
];

export function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-paper/5 bg-ink/95 md:bg-ink/80 md:backdrop-blur-md"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6 md:px-12">
        <Link
          href="/"
          aria-label="Pragnya home"
          className="flex items-center"
        >
          <PragnyaLogo className="h-7 w-auto sm:h-8" priority />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="text-sm font-medium text-paper/70 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:founder@pragnyaa.in"
            className="rounded-sm border border-paper/10 bg-paper/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-paper transition hover:border-accent/30 hover:text-accent"
          >
            Get in touch
          </a>
        </div>

        <MobileMenu />
      </div>
    </nav>
  );
}
