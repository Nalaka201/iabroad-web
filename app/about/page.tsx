import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { StatCounter } from "@/components/StatCounter";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stats } from "@/lib/data";

const values = [
  {
    title: "Honest Guidance",
    desc: "We tell you what fits, not what's convenient. If a destination isn't right for you, we say so.",
  },
  {
    title: "Student-First",
    desc: "Every recommendation starts from your profile, budget and career goal — never from commissions.",
  },
  {
    title: "End-to-End",
    desc: "From shortlist to pre-departure, one team owns your journey so nothing falls between the cracks.",
  },
];

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Ibroad Education" breadcrumb="About">
        <p>Honest, expert guidance for students and families pursuing education abroad.</p>
      </PageHero>

      <Reveal className="py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-line shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80"
                alt="Students collaborating and studying abroad"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur-md">
                <p className="text-sm font-semibold text-accent">Personalized Student Mentorship</p>
                <p className="text-xs text-white/90">Supporting students from initial advice to campus arrival.</p>
              </div>
            </div>
            <div>
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                Our Mission
              </span>
              <h2 className="mb-4 text-2xl font-bold text-primary sm:text-[28px]">
                Guiding ambition with honesty
              </h2>
              <p className="mb-4">
                Ibroad Education was founded to cut through the noise of
                overseas admissions. We match each student to universities and
                courses that genuinely fit their academic profile, budget and
                goals — not the ones that are easiest to place.
              </p>
              <p className="mb-6">
                Our consultants bring years of country-specific experience and
                stay current on visa policy, intake cycles and program changes
                so families can plan with confidence.
              </p>
              <ButtonLink href="/contact" variant="primary">
                Talk to a consultant
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Reveal>

      <Reveal className="bg-surface py-24">
        <Container>
          <SectionHeading kicker="By the numbers" title="Why Families Choose Ibroad" />
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            <Stat value={stats.placed} label="Students Placed" />
            <Stat value={stats.universities} label="Universities" />
            <Stat value={stats.countries} label="Countries" />
            <Stat value={stats.satisfaction} label="% Satisfaction" />
          </div>
          <p className="mt-6 text-center">
            <Badge variant="sample">Sample statistics</Badge>
          </p>
        </Container>
      </Reveal>

      <Reveal className="bg-white py-24">
        <Container>
          <SectionHeading kicker="How we work" title="Our Values" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-line bg-white p-6"
              >
                <h3 className="mb-2 text-lg font-semibold text-primary">
                  {v.title}
                </h3>
                <p className="text-sm text-muted">{v.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Reveal>

      <CtaBand />
    </>
  );
}

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-extrabold leading-none text-accent">
        <StatCounter value={value} />
      </div>
      <div className="mt-1.5 text-sm text-muted">{label}</div>
    </div>
  );
}
