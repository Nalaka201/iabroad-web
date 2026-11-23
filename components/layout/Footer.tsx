import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui/Container";
import { Newsletter } from "@/components/layout/Newsletter";
import { destinations, settings } from "@/lib/data";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/destinations", label: "Study Destinations" },
  { href: "/universities", label: "Universities" },
  { href: "/courses", label: "Courses" },
  { href: "/register", label: "Register" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-[#091b33] to-[#040d1a] text-[#cfd9e6] overflow-hidden">
      {/* 3D Horizon Glow Line */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-60"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 h-64 w-[600px] rounded-full blur-3xl opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(201,162,39,.3), transparent 70%)",
        }}
        aria-hidden
      />

      <Container className="relative z-10 grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4">
            <Logo onLight={false} />
          </div>
          <p className="text-sm leading-relaxed text-[#aebccd]">
            Helping students and families navigate the global education
            journey — from university selection to pre-departure — with honest,
            expert guidance.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-accent">
            Quick Links
          </h4>
          <ul className="space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-flex text-sm text-[#cfd9e6] transition-all duration-200 hover:text-accent hover:translate-x-1"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-accent">
            Destinations
          </h4>
          <ul className="space-y-2.5">
            {destinations.map((d) => (
              <li key={d.code}>
                <Link
                  href={`/universities?country=${d.code}`}
                  className="inline-flex text-sm text-[#cfd9e6] transition-all duration-200 hover:text-accent hover:translate-x-1"
                >
                  {d.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-accent">
            Get in Touch
          </h4>
          <p className="mb-2 text-sm text-[#aebccd]">{settings.phone}</p>
          <p className="mb-2 text-sm text-[#aebccd]">{settings.email}</p>
          <p className="text-sm text-[#aebccd]">{settings.address}</p>
          <h4 className="mt-6 mb-3 text-xs font-bold uppercase tracking-[0.14em] text-white">
            Newsletter
          </h4>
          <Newsletter />
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-white/10 py-5 text-xs text-[#8497ac] sm:flex-row sm:justify-between">
        <span>© {year} Ibroad Education. All rights reserved.</span>
        <span className="flex gap-4">
          <Link href="/about" className="transition-colors hover:text-[#aebccd]">
            Privacy Policy
          </Link>
          <span aria-hidden>·</span>
          <Link href="/about" className="transition-colors hover:text-[#aebccd]">
            Terms of Service
          </Link>
        </span>
      </Container>
    </footer>
  );
}
