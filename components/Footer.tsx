import { PragnyaLogo } from "@/components/PragnyaLogo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-paper/5 px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <PragnyaLogo className="h-8 w-auto opacity-70" loading="lazy" />
        <p className="text-xs text-paper-muted">
          &copy; {year} Pragnya Works. Built from first principles.
        </p>
      </div>
    </footer>
  );
}
