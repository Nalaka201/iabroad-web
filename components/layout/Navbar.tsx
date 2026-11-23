"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { destinations, settings } from "@/lib/data";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/destinations", label: "Destinations", hasDropdown: true },
  { href: "/universities", label: "Universities" },
  { href: "/courses", label: "Courses" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 180);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "border-line/80 bg-white/95 backdrop-blur-xl shadow-md shadow-primary/5 py-1"
            : "border-line/50 bg-white/90 backdrop-blur-lg py-2"
        )}
      >
        <Container className="flex min-h-[68px] items-center justify-between gap-6">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Ibroad Education home"
            className="transition-transform duration-200 hover:scale-[1.02]"
          >
            <Logo />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-1 xl:gap-1.5 lg:flex">
            {links.map((l) => {
              if (l.hasDropdown) {
                return (
                  <div
                    key={l.href}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={l.href}
                      className={cn(
                        "group inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
                        isActive(l.href) || dropdownOpen
                          ? "bg-primary-tint text-primary shadow-xs"
                          : "text-ink/80 hover:bg-surface hover:text-primary"
                      )}
                    >
                      <span>{l.label}</span>
                      <span
                        className={cn(
                          "text-xs transition-transform duration-200 text-muted group-hover:text-primary",
                          dropdownOpen && "rotate-180"
                        )}
                      >
                        ▾
                      </span>
                    </Link>

                    {/* Modern Dropdown Flyout */}
                    <div
                      className={cn(
                        "absolute left-1/2 top-full z-50 mt-2 w-[480px] -translate-x-1/2 rounded-2xl border border-line bg-white/95 p-4 shadow-2xl backdrop-blur-xl transition-all duration-200 ease-out",
                        dropdownOpen
                          ? "visible translate-y-0 opacity-100 scale-100"
                          : "invisible pointer-events-none -translate-y-2 opacity-0 scale-95"
                      )}
                    >
                      <div className="mb-2.5 flex items-center justify-between border-b border-line/70 px-2 pb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-accent-deep">
                          Top Study Destinations
                        </span>
                        <Link
                          href="/destinations"
                          className="text-xs font-semibold text-primary hover:text-accent-deep hover:underline"
                        >
                          View all 6 →
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {destinations.map((d) => (
                          <Link
                            key={d.code}
                            href={`/universities?country=${d.code}`}
                            className="group flex items-center gap-3 rounded-xl p-2.5 transition-all hover:bg-primary-tint/70"
                          >
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line/60 bg-white text-2xl shadow-xs transition-transform group-hover:scale-105">
                              {d.flag}
                            </span>
                            <div className="overflow-hidden">
                              <p className="text-sm font-bold text-primary transition-colors group-hover:text-accent-deep">
                                {d.name}
                              </p>
                              <p className="truncate text-xs text-muted">
                                {d.popular.slice(0, 2).join(", ")}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>

                      <div className="mt-3 rounded-xl bg-surface/70 p-2.5 text-center">
                        <p className="text-xs text-muted">
                          Looking for university shortlists or visa advice?{" "}
                          <Link
                            href="/contact"
                            className="font-bold text-primary hover:underline"
                          >
                            Speak to an Advisor
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
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
              );
            })}
          </nav>

          {/* Action Cluster */}
          <div className="flex items-center gap-3">
            {/* Quick Hotline Pill on Tablet/Desktop */}
            <a
              href={`tel:${settings.phone.replace(/\s/g, "")}`}
              className="hidden items-center gap-1.5 rounded-full border border-line bg-surface/80 px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:border-primary hover:bg-white xl:inline-flex"
            >
              <span className="text-accent">📞</span>
              <span>{settings.phone}</span>
            </a>

            {/* Primary CTA */}
            <ButtonLink
              href="/register"
              variant="accent"
              size="sm"
              className="shadow-sm hover:shadow-md"
            >
              <span>Register Now</span>
              <span className="text-xs transition-transform group-hover:translate-x-0.5">→</span>
            </ButtonLink>

            {/* Mobile Hamburger Button */}
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

      {/* Mobile Drawer Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-primary-deep/50 backdrop-blur-xs transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setOpen(false)}
        aria-hidden
      />

      {/* Mobile Drawer Sheet */}
      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-[70] w-[88vw] max-w-[380px] overflow-y-auto bg-white p-6 shadow-2xl transition-transform duration-300 ease-out lg:hidden",
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
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-surface text-muted transition-colors hover:text-primary"
          >
            ✕
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "flex items-center justify-between rounded-xl px-4 py-3 text-[16px] font-semibold transition-colors",
                isActive(l.href)
                  ? "bg-primary-tint text-primary"
                  : "text-ink/85 hover:bg-surface hover:text-primary"
              )}
            >
              <span>{l.label}</span>
              <span className="text-xs text-muted">→</span>
            </Link>
          ))}
        </nav>

        {/* Quick Destinations Grid in Mobile Menu */}
        <div className="mt-6 border-t border-line pt-5">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-accent-deep">
            Popular Destinations
          </p>
          <div className="grid grid-cols-2 gap-2">
            {destinations.map((d) => (
              <Link
                key={d.code}
                href={`/universities?country=${d.code}`}
                className="flex items-center gap-2 rounded-xl border border-line/60 bg-surface/60 p-2.5 text-xs font-bold text-primary transition-colors hover:bg-primary-tint"
              >
                <span className="text-lg">{d.flag}</span>
                <span className="truncate">{d.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact info & Action in Mobile Menu */}
        <div className="mt-6 border-t border-line pt-5">
          <div className="space-y-2 mb-4 text-xs text-muted">
            <a
              href={`tel:${settings.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 font-semibold text-primary"
            >
              <span>📞</span>
              <span>{settings.phone}</span>
            </a>
            <a
              href={`mailto:${settings.email}`}
              className="flex items-center gap-2 font-semibold text-primary"
            >
              <span>✉️</span>
              <span>{settings.email}</span>
            </a>
          </div>

          <Link
            href="/register"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-accent py-3.5 text-center font-bold text-primary-deep shadow-md transition-all hover:bg-accent-deep hover:text-white"
          >
            <span>Register Now</span>
            <span aria-hidden>→</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
