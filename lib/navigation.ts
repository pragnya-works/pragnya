import { siteConfig } from "@/lib/site";

export type InternalNavLink = {
  label: string;
  /** A typed route, or a pathname+hash pair for in-page anchors. */
  href: "/about" | "/edward" | { pathname: "/"; hash: "#services" };
};

export type ExternalNavLink = {
  label: string;
  href: string;
  external: true;
};

export type NavLink = InternalNavLink | ExternalNavLink;

export const navLinks: readonly NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Edward", href: "/edward" },
  { label: "Services", href: { pathname: "/", hash: "#services" } },
  { label: "GitHub", href: siteConfig.githubUrl, external: true },
];

export const contactHref = `mailto:${siteConfig.email}`;
