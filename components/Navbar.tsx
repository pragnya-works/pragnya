"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#product", label: "Edward" },
  { href: "https://github.com/pragnya-works", label: "GitHub", external: true },
] as const;

type NavLink = (typeof navLinks)[number];

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md border-b border-white/5"
      role="navigation"
      aria-label="Main navigation"
      style={{ willChange: "transform, opacity" }}
    >
      <Link 
        href="/" 
        className="flex items-center gap-2"
        aria-label="Pragnya home"
      >
        <div 
          className="w-8 h-8 bg-accent-gold rounded-full flex items-center justify-center font-display font-bold text-black text-xl"
          aria-hidden="true"
        >
          P
        </div>
        <span className="font-display text-xl font-semibold tracking-tight">
          Pragnya
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-accent-gold transition-colors focus:outline-none focus:text-accent-gold"
            {...('external' in link && link.external && { 
              target: "_blank", 
              rel: "noopener noreferrer" 
            })}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <Link
        href="mailto:shubho@pragnyaa.in"
        className="px-5 py-2 rounded-full border border-accent-gold/20 bg-accent-gold/5 text-accent-gold text-xs font-bold uppercase tracking-[0.2em] hover:bg-accent-gold/10 transition-all focus:outline-none focus:ring-2 focus:ring-accent-gold/50"
      >
        Get in touch
      </Link>
    </motion.nav>
  );
};
