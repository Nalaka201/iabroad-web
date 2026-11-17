import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0c1f38] via-primary-deep to-[#18395f] py-20 text-white">
      {/* Decorative gradient glowing spheres */}
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(201,162,39,.2), transparent 70%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,.16), transparent 70%)",
        }}
        aria-hidden
      />

      <Container className="relative flex flex-wrap items-center justify-between gap-8">
        <div className="max-w-2xl">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent backdrop-blur-xs">
            Ready to begin?
          </span>
          <h2 className="text-3xl font-black leading-tight sm:text-4xl">
            Start Your Global Education Journey Today
          </h2>
          <p className="mt-3.5 text-base leading-relaxed text-[#d4dfed] sm:text-lg">
            Register for personalised guidance, or send an inquiry — our
            consultants reply within one business day.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3.5">
          <ButtonLink href="/register" variant="accent" size="lg">
            Register Now
          </ButtonLink>
          <ButtonLink href="/contact" variant="ghost" size="lg">
            Contact Us
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
