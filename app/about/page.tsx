import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { StatCounter } from "@/components/StatCounter";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card3D } from "@/components/ui/Card3D";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stats } from "@/lib/data";

const values = [
  {
    title: "Honest Guidance",
    desc: "We tell you what fits, not what's convenient. If a destination isn't right for you, we say so.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Student-First",
    desc: "Every recommendation starts from your profile, budget and career goal — never from commissions.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "End-to-End",
    desc: "From shortlist to pre-departure, one team owns your journey so nothing falls between the cracks.",
    image:
      "https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=600&q=80",
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
            <Card3D className="overflow-hidden">
              <div className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-line shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80"
                  alt="Students collaborating and studying abroad"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                <div
                  className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/20 bg-[#0c2038]/85 p-4 text-white backdrop-blur-xl shadow-2xl"
                  style={{ transform: "translateZ(25px)" }}
                >
                  <p className="text-sm font-semibold text-accent">Personalized Student Mentorship</p>
                  <p className="text-xs text-white/90">Supporting students from initial advice to campus arrival.</p>
                </div>
              </div>
            </Card3D>
            <div>
              <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent-deep">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-ping" />
                Our Mission
              </span>
              <h2 className="mb-4 text-2xl font-black text-primary sm:text-[32px] tracking-tight">
                Guiding ambition with honesty
              </h2>
              <p className="mb-4 text-base leading-relaxed text-[#4b5563]">
                Ibroad Education was founded to cut through the noise of
                overseas admissions. We match each student to universities and
                courses that genuinely fit their academic profile, budget and
                goals — not the ones that are easiest to place.
              </p>
              <p className="mb-6 text-base leading-relaxed text-[#4b5563]">
                Our consultants bring years of country-specific experience and
                stay current on visa policy, intake cycles and program changes
                so families can plan with confidence.
              </p>
              <ButtonLink href="/contact" variant="primary" size="lg" className="shadow-lg shadow-primary/20 hover:scale-105">
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
            <Card3D>
              <Stat value={stats.placed} label="Students Placed" />
            </Card3D>
            <Card3D>
              <Stat value={stats.universities} label="Universities" />
            </Card3D>
            <Card3D>
              <Stat value={stats.countries} label="Countries" />
            </Card3D>
            <Card3D>
              <Stat value={stats.satisfaction} label="% Satisfaction" />
            </Card3D>
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
              <Card3D key={v.title} className="h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-xs transition-all duration-300 hover:border-accent hover:shadow-2xl">
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={v.image}
                      alt={v.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 ease-out hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <span
                      className="absolute bottom-3 left-4 rounded-md bg-white/90 px-2.5 py-1 text-xs font-bold text-primary shadow-md backdrop-blur-xs"
                      style={{ transform: "translateZ(15px)" }}
                    >
                      {v.title}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-2 text-lg font-bold text-primary">
                      {v.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">{v.desc}</p>
                  </div>
                </div>
              </Card3D>
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
    <div className="flex flex-col items-center justify-center rounded-2xl border border-line bg-white p-6 text-center shadow-xs transition-all duration-300 hover:border-accent hover:shadow-xl">
      <div className="text-4xl font-black leading-none text-accent">
        <StatCounter value={value} />
      </div>
      <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted">{label}</div>
    </div>
  );
}
