"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/navigation";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;

    const firstLink = panelRef.current?.querySelector("a");
    firstLink?.focus();

    function handlePointerDown(event: PointerEvent) {
      const target = event.target as Node | null;
      if (!target) return;
      if (
        panelRef.current?.contains(target) ||
        buttonRef.current?.contains(target)
      ) {
        return;
      }
      setOpen(false);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      buttonRef.current?.focus();
    }
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex size-9 items-center justify-center rounded-sm text-paper/70 transition hover:text-paper"
      >
        {open ? (
          <X className="size-5" aria-hidden="true" />
        ) : (
          <Menu className="size-5" aria-hidden="true" />
        )}
      </button>

      <div
        className={`absolute inset-x-0 top-16 h-[calc(100vh-4rem)] bg-ink/40 backdrop-blur-[120px] transition-all duration-300 ease-out ${
          open
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-2"
        }`}
        aria-hidden={!open}
        inert={!open}
      >
        <nav
          id={panelId}
          ref={panelRef}
          className="flex w-full flex-col gap-4 border-b border-paper/5 bg-ink p-6 shadow-2xl"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="text-base font-medium text-paper/90 transition hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:founder@pragnyaa.in"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex w-fit items-center justify-center rounded-sm border border-paper/10 bg-paper/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-paper transition hover:border-accent/30 hover:text-accent"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </div>
  );
}
