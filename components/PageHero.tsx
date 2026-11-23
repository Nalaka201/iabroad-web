import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function PageHero({
  title,
  breadcrumb,
  children,
}: {
  title: string;
  breadcrumb?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#030a14] via-[#08172c] to-[#0c1f38] py-16 text-white lg:py-20">
      {/* 3D Dot Grid Background Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden
      />

      {/* Luminous Volumetric Ambient Glows */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(201,162,39,.3), rgba(99,102,241,.2), transparent 70%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full blur-3xl opacity-35"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,.25), transparent 70%)",
        }}
        aria-hidden
      />

      {/* Receding Perspective Line */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        aria-hidden
      />

      <Container className="relative z-10">
        {breadcrumb && (
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1 text-xs text-[#9fb1c7] backdrop-blur-md shadow-xs">
            <Link
              href="/"
              className="text-[#cfd9e6] transition-colors hover:text-accent font-medium"
            >
              Home
            </Link>{" "}
            <span className="text-white/40">/</span>{" "}
            <span className="text-accent font-semibold">{breadcrumb}</span>
          </div>
        )}
        <h1 className="mb-3 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {children && (
          <div className="max-w-2xl text-base leading-relaxed text-[#d4dfed]">
            {children}
          </div>
        )}
      </Container>
    </section>
  );
}
