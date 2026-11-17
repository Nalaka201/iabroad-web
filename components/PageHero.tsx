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
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0c1f38] via-primary-deep to-[#183a62] py-16 text-white">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(201,162,39,.18), transparent 65%)",
        }}
        aria-hidden
      />
      <Container className="relative">
        {breadcrumb && (
          <p className="mb-3 text-sm text-[#9fb1c7]">
            <Link href="/" className="text-[#cfd9e6] transition-colors hover:text-accent">
              Home
            </Link>{" "}
            / {breadcrumb}
          </p>
        )}
        <h1 className="mb-3 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
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
