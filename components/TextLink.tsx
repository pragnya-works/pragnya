import type { ReactNode } from "react";

export const textLinkClass =
  "text-paper underline decoration-paper/30 underline-offset-4 transition hover:text-accent hover:decoration-accent/60";

type TextLinkProps = {
  href: string;
  children: ReactNode;
};

/** Inline link for absolute URLs. Web URLs open in a new tab, `mailto:` does not. */
export function TextLink({ href, children }: TextLinkProps) {
  const opensNewTab = href.startsWith("http");

  return (
    <a
      href={href}
      className={textLinkClass}
      {...(opensNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
