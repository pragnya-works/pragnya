import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center rounded-sm border px-6 py-3 text-sm font-semibold transition";

const variants = {
  primary: "border-accent/20 bg-accent/10 text-accent hover:bg-accent/20",
  secondary:
    "border-paper/10 bg-paper/5 text-paper hover:border-accent/30 hover:text-accent",
} as const;

type ButtonLinkProps = {
  href: string;
  variant?: keyof typeof variants;
  children: ReactNode;
};

/** Call-to-action link. Absolute web URLs open in a new tab. */
export function ButtonLink({
  href,
  variant = "primary",
  children,
}: ButtonLinkProps) {
  const opensNewTab = href.startsWith("http");

  return (
    <a
      href={href}
      className={cn(base, variants[variant])}
      {...(opensNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
