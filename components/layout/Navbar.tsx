"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/destinations", label: "Destinations" },
  { href: "/universities", label: "Universities" },
  { href: "/courses", label: "Courses" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b border-line/70 bg-white/95 backdrop-blur-md transition-all duration-300",
          scrolled ? "shadow-md shadow-primary/5 py-0" : "py-1"
        )}
      >
        <Container className="flex min-h-[72px] items-center justify-between gap-6">
          <Link href="/" aria-label="Ibroad Education home" className="transition-transform duration-200 hover:scale-[1.01]">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1.5 lg:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
                  isActive(l.href)
                    ? "bg-primary-tint text-primary shadow-xs"
                    : "text-ink/80 hover:bg-surface hover:text-primary"
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ButtonLink
              href="/register"
              variant="accent"
              size="sm"
              className="hidden sm:inline-flex shadow-xs hover:shadow-md"
            >
              Register Now
            </ButtonLink>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface/80 transition-colors hover:border-accent hover:bg-white lg:hidden"
            >
              <div className="flex h-4 w-5 flex-col justify-between">
                <span
                  className={cn(
                    "h-0.5 w-full rounded-full bg-primary transition-all duration-300",
                    open && "translate-y-[7px] rotate-45"
                  )}
                />
                <span
                  className={cn(
                    "h-0.5 w-full rounded-full bg-primary transition-all duration-300",
                    open && "opacity-0"
                  )}
                />
                <span
                  className={cn(
                    "h-0.5 w-full rounded-full bg-primary transition-all duration-300",
                    open && "-translate-y-[7px] -rotate-45"
                  )}
                />
              </div>
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile drawer + scrim */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-primary-deep/50 backdrop-blur-xs transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setOpen(false)}
        aria-hidden
      />
      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-[70] w-[86vw] max-w-[360px] overflow-y-auto bg-white p-7 shadow-2xl transition-transform duration-300 ease-out lg:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!open}
      >
        <div className="mb-6 flex items-center justify-between border-b border-line pb-4">
          <Logo />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-colors hover:text-primary"
          >
            ✕
          </button>
        </div>
        <nav className="flex flex-col space-y-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "flex items-center justify-between rounded-xl px-4 py-3 text-[16px] font-semibold transition-colors",
                isActive(l.href)
                  ? "bg-primary-tint text-primary"
                  : "text-ink/80 hover:bg-surface hover:text-primary"
              )}
            >
              <span>{l.label}</span>
              <span className="text-xs text-muted">→</span>
            </Link>
          ))}
          <div className="pt-4">
            <Link
              href="/register"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-accent py-3.5 text-center font-bold text-primary-deep shadow-md transition-all hover:bg-accent-deep hover:text-white"
            >
              <span>Register Now</span>
              <span aria-hidden>→</span>
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
}
