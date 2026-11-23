import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { StatCounter } from "@/components/StatCounter";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { UniversityCard } from "@/components/cards/UniversityCard";
import { ReefluxHeroVisual } from "@/components/ReefluxHeroVisual";
import {
  destinations,
  featuredUniversities,
  services,
  stats,
  testimonials,
} from "@/lib/data";

export default function HomePage() {
  const featured = featuredUniversities();
  return (
    <>
      {/* ===== REEFLUX 3D HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#030a14] via-[#08172c] to-[#0c1f38] py-20 text-white lg:py-28">
        {/* Subtle modern dot-grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
          aria-hidden
        />

        {/* Ambient Reeflux volumetric glows */}
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-[620px] w-[620px] rounded-full blur-3xl opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(201,162,39,.25), rgba(99,102,241,.18), transparent 70%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 h-[550px] w-[550px] rounded-full blur-3xl opacity-50"
          style={{
            background:
              "radial-gradient(circle, rgba(56,189,248,.2), rgba(168,85,247,.15), transparent 70%)",
          }}
          aria-hidden
        />

        {/* 3D Perspective Floor Grid */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-64 reeflux-grid-floor opacity-70"
          aria-hidden
        />

        <Container className="relative grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="z-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent backdrop-blur-xl shadow-lg">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-ping" />
              <span>Study Abroad Consultancy</span>
            </div>

            <h1 className="mb-6 text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.45rem]">
              Your Global Education{" "}
              <span className="bg-gradient-to-r from-accent via-[#f5d061] to-[#fef08a] bg-clip-text text-transparent underline decoration-accent/40 decoration-wavy underline-offset-8">
                Journey Starts Here
              </span>
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-[#d4dfed]">
              From university selection to visa and pre-departure, Ibroad
              Education guides students to the UK, USA, Canada, Australia,
              Germany and New Zealand with honest, expert advice.
            </p>

            <div className="mb-10 flex flex-wrap items-center gap-4">
              <ButtonLink
                href="/universities"
                variant="accent"
                size="lg"
                className="shadow-xl shadow-accent/25 transition-all hover:shadow-accent/40 hover:-translate-y-0.5"
              >
                <span>Explore Universities</span>
                <span className="text-sm font-bold">→</span>
              </ButtonLink>
              <ButtonLink
                href="/about"
                variant="ghost"
                size="lg"
                className="border-white/25 bg-white/[0.08] backdrop-blur-xl transition-all hover:border-white/60 hover:bg-white/[0.18] hover:-translate-y-0.5"
              >
                Our Services
              </ButtonLink>
            </div>

            {/* Elevated Stats Shelf */}
            <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl">
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                <HeroStat value={stats.universities} label="Universities" />
                <HeroStat value={stats.courses} label="Courses" />
                <HeroStat value={stats.countries} label="Countries" />
                <HeroStat value={stats.placed} label="Students Placed" />
              </div>
            </div>
          </div>

          {/* Right Column: Reeflux 3D Interactive Showcase */}
          <div className="z-10 w-full">
            <ReefluxHeroVisual featuredUniversities={featured} />
          </div>
        </Container>
      </section>

      {/* ===== DESTINATIONS ===== */}
      <section className="bg-white py-24 relative overflow-hidden">
        <Container>
          <Reveal>
            <SectionHeading
              kicker="Where you can study"
              title="Popular Study Destinations"
              lead="Six destinations, each with distinct strengths, costs and post-study work pathways."
            />
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.slice(0, 6).map((d, i) => (
              <Reveal key={d.code} delay={i * 90}>
                <DestinationCard country={d} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== FEATURED UNIVERSITIES ===== */}
      <section className="bg-page py-24 relative overflow-hidden">
        <Container>
          <Reveal>
            <SectionHeading
              kicker="Handpicked for you"
              title="Featured Universities"
              lead="A snapshot of partner institutions. Browse the full catalogue on the Universities page."
            />
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((u, i) => (
              <Reveal key={u.id} delay={i * 90}>
                <UniversityCard university={u} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Reveal delay={300}>
              <ButtonLink href="/universities" variant="outline" size="md">
                View all universities
              </ButtonLink>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="bg-white py-24 relative overflow-hidden">
        <Container>
          <Reveal>
            <SectionHeading
              kicker="What we do"
              title="Our Services"
              lead="Four structured services that take you from first question to first day on campus."
            />
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="bg-page py-24 relative overflow-hidden">
        <Container>
          <Reveal>
            <SectionHeading
              kicker="Student voices"
              title="What Students Say"
              lead="Sample testimonials shown until live reviews are collected."
            />
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 90}>
                <TestimonialCard testimonial={t} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

function HeroStat({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col">
      <div className="text-3xl font-black tracking-tight leading-none text-accent sm:text-4xl">
        <StatCounter value={value} />
      </div>
      <div className="mt-2 text-xs font-semibold text-[#d4dfed] sm:text-sm">
        {label}
      </div>
    </div>
  );
}
