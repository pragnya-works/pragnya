export type NavLink = {
  href: string;
  label: string;
  external?: boolean;
};

export const navLinks: readonly NavLink[] = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "https://github.com/pragnya-works", label: "GitHub", external: true },
] as const;
