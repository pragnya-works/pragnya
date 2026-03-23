import Link from "next/link";
import { Mail } from "lucide-react";
import { PragnyaLogo } from "@/components/PragnyaLogo";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#product", label: "Products" },
  { href: "https://github.com/pragnya-works", label: "GitHub", external: true },
] as const;

export const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-white/5 bg-black/45 px-6 py-4 backdrop-blur-md motion-safe:animate-slide-down-fade md:px-12"
      role="navigation"
      aria-label="Main navigation"
    >
      <Link
        href="/"
        className="flex items-center"
        aria-label="Pragnya home"
      >
        <PragnyaLogo
          className="h-8 w-auto sm:h-9"
          priority
        />
      </Link>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="transition-colors hover:text-accent-gold focus:outline-none focus:text-accent-gold"
            {...("external" in link &&
              link.external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
          >
            {link.label}
          </a>
        ))}
      </div>

      <>
        <a
          href="mailto:founder@pragnyaa.in"
          aria-label="Email founder"
          className="text-accent-gold focus:outline-none md:hidden"
        >
          <Mail className="h-5 w-5" aria-hidden="true" />
        </a>

        <a
          href="mailto:founder@pragnyaa.in"
          className="hidden md:inline-flex px-5 py-2 rounded-full border border-accent-gold/20 bg-accent-gold/5 text-accent-gold text-xs font-bold uppercase tracking-[0.2em] hover:bg-accent-gold/10 transition-all focus:outline-none focus:ring-2 focus:ring-accent-gold/50"
        >
          Get in touch
        </a>
      </>
    </nav>
  );
};
