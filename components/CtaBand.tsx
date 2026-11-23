import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#061527] via-[#091b33] to-[#040d1a] py-20 text-white">
      {/* 3D Perspective Ground Grid */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 reeflux-grid-floor opacity-40"
        aria-hidden
      />

      {/* Decorative gradient glowing spheres */}
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(201,162,39,.3), transparent 70%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,.25), rgba(99,102,241,.2), transparent 70%)",
        }}
        aria-hidden
      />

      <Container className="relative z-10 flex flex-wrap items-center justify-between gap-8">
        <div className="max-w-2xl">
          <span className="mb-3.5 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/[0.08] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent backdrop-blur-md shadow-xs">
            <span className="h-2 w-2 rounded-full bg-accent animate-ping" />
            Ready to begin?
          </span>
          <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-[2.6rem]">
            Start Your Global Education Journey Today
          </h2>
          <p className="mt-3.5 text-base leading-relaxed text-[#d4dfed] sm:text-lg">
            Register for personalised guidance, or send an inquiry — our
            consultants reply within one business day.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <ButtonLink
            href="/register"
            variant="accent"
            size="lg"
            className="shadow-xl shadow-accent/20 transition-all hover:shadow-accent/40 hover:-translate-y-1 hover:scale-105 active:scale-95"
          >
            <span>Register Now</span>
            <span className="font-bold">→</span>
          </ButtonLink>
          <ButtonLink
            href="/contact"
            variant="ghost"
            size="lg"
            className="border-white/25 bg-white/[0.08] backdrop-blur-md transition-all hover:border-white/60 hover:bg-white/[0.18] hover:-translate-y-1 hover:scale-105 active:scale-95"
          >
            Contact Us
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
