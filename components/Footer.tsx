import Link from "next/link";
import { PragnyaLogo } from "@/components/PragnyaLogo";
import { contactHref } from "@/lib/navigation";
import { founder, siteConfig } from "@/lib/site";

const linkClass = "transition hover:text-accent";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-paper/5 px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <PragnyaLogo className="h-8 w-auto opacity-70" loading="lazy" />
        <div className="flex flex-col items-center gap-3 text-xs text-paper-muted md:items-end">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              <li>
                <Link href="/about" className={linkClass}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/edward" className={linkClass}>
                  Edward
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={founder.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Founder on LinkedIn
                </a>
              </li>
              <li>
                <a href={contactHref} className={linkClass}>
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </nav>
          <p>
            &copy; {year} {siteConfig.name}. Founded by {founder.name}.
          </p>
        </div>
      </div>
    </footer>
  );
}
