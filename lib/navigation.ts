import { siteConfig } from "@/lib/site";

export type NavLink = {
  href: string;
  label: string;
  external?: boolean;
};

export const navLinks: readonly NavLink[] = [
  { href: "/about", label: "About" },
  { href: "/edward", label: "Edward" },
  { href: "/#services", label: "Services" },
  { href: siteConfig.githubUrl, label: "GitHub", external: true },
] as const;

export const contactHref = `mailto:${siteConfig.email}`;
