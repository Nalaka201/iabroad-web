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
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c1f38] via-primary-deep to-[#183a62] py-20 text-white lg:py-28">
        {/* Ambient radial glow orbs */}
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(201,162,39,.20), transparent 65%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-32 h-[480px] w-[480px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(37,99,235,.16), transparent 65%)",
          }}
          aria-hidden
        />

        <Container className="relative grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent backdrop-blur-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Study Abroad Consultancy
            </span>
            <h1 className="mb-5 text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              Your Global Education{" "}
              <span className="bg-gradient-to-r from-accent via-[#e5b838] to-[#f5d56b] bg-clip-text text-transparent">
                Journey Starts Here
              </span>
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-[#d4dfed]">
              From university selection to visa and pre-departure, Ibroad
              Education guides students to the UK, USA, Canada, Australia,
              Germany and New Zealand with honest, expert advice.
            </p>
            <div className="mb-10 flex flex-wrap gap-4">
              <ButtonLink href="/universities" variant="accent" size="lg">
                Explore Universities
              </ButtonLink>
              <ButtonLink href="/about" variant="ghost" size="lg">
                Our Services
              </ButtonLink>
            </div>
            <div className="grid grid-cols-2 gap-6 border-t border-white/15 pt-7 sm:grid-cols-4">
              <HeroStat value={stats.universities} label="Universities" />
              <HeroStat value={stats.courses} label="Courses" />
              <HeroStat value={stats.countries} label="Countries" />
              <HeroStat value={stats.placed} label="Students Placed" />
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative rounded-3xl border border-white/20 bg-white/[0.08] p-6 shadow-2xl backdrop-blur-md">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="flex items-center gap-2 text-lg font-bold text-white">
                  Featured Universities
                </h3>
                <Badge variant="sample">Sample</Badge>
              </div>
              <div className="space-y-3">
                {featured.slice(0, 3).map((u) => (
                  <Link
                    key={u.id}
                    href={`/universities/${u.id}`}
                    className="group flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/[0.06] p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-white/[0.14] hover:shadow-lg"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent font-extrabold text-primary-deep shadow-sm transition-transform duration-200 group-hover:scale-105">
                      {u.mono}
                    </span>
                    <span className="leading-tight">
                      <b className="text-sm font-semibold text-white transition-colors group-hover:text-accent">
                        {u.name}
                      </b>
                      <br />
                      <small className="text-xs text-[#cfd9e6]">
                        {u.city}, {u.countryName}
                      </small>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== DESTINATIONS ===== */}
      <Reveal className="bg-white py-24">
        <Container>
          <SectionHeading
            kicker="Where you can study"
            title="Popular Study Destinations"
            lead="Six destinations, each with distinct strengths, costs and post-study work pathways."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.slice(0, 6).map((d) => (
              <DestinationCard key={d.code} country={d} />
            ))}
          </div>
        </Container>
      </Reveal>

      {/* ===== FEATURED UNIVERSITIES ===== */}
      <Reveal className="bg-page py-24">
        <Container>
          <SectionHeading
            kicker="Handpicked for you"
            title="Featured Universities"
            lead="A snapshot of partner institutions. Browse the full catalogue on the Universities page."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((u) => (
              <UniversityCard key={u.id} university={u} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink href="/universities" variant="outline" size="md">
              View all universities
            </ButtonLink>
          </div>
        </Container>
      </Reveal>

      {/* ===== SERVICES ===== */}
      <Reveal className="bg-white py-24">
        <Container>
          <SectionHeading
            kicker="What we do"
            title="Our Services"
            lead="Four structured services that take you from first question to first day on campus."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </div>
        </Container>
      </Reveal>

      {/* ===== TESTIMONIALS ===== */}
      <Reveal className="bg-page py-24">
        <Container>
          <SectionHeading
            kicker="Student voices"
            title="What Students Say"
            lead="Sample testimonials shown until live reviews are collected."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </Container>
      </Reveal>

      <CtaBand />
    </>
  );
}

function HeroStat({ value, label }: { value: number; label: string }) {
  return (
    <div>
      <div className="text-3xl font-black leading-none text-accent sm:text-4xl">
        <StatCounter value={value} />
      </div>
      <div className="mt-2 text-xs font-medium text-[#d4dfed] sm:text-sm">
        {label}
      </div>
    </div>
  );
}
