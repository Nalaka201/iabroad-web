import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Card3D } from "@/components/ui/Card3D";
import { Container } from "@/components/ui/Container";
import { RegisterForm } from "@/components/RegisterForm";

export const metadata = { title: "Student Registration" };

const nextSteps = [
  "A consultant reviews your profile within 1 business day.",
  "You receive a shortlist of universities and courses matched to you.",
  "We plan documents, timelines and visa steps together.",
  "You get a confirmation by email and WhatsApp.",
];

export default function RegisterPage() {
  return (
    <>
      <PageHero title="Student Registration" breadcrumb="Register">
        <p>No login required. Tell us about yourself and we&apos;ll guide the rest.</p>
      </PageHero>

      <Reveal className="py-16">
        <Container>
          <div className="grid items-start gap-8 lg:grid-cols-[1.6fr_1fr]">
            <div className="rounded-2xl border border-line bg-white p-8 shadow-xs">
              <RegisterForm />
            </div>

            <Card3D>
              <aside className="overflow-hidden rounded-2xl bg-gradient-to-br from-primary-deep via-primary to-[#0f2440] text-[#cfd9e6] shadow-xl border border-white/10">
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
                    alt="Free Counselling & Mentorship"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c2038] via-[#0c2038]/60 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <span className="rounded-full bg-accent/90 px-3 py-1 text-xs font-bold text-primary-deep shadow-md">
                      Free Consultation
                    </span>
                    <span className="text-xs font-semibold text-white/90">
                      Step-by-step guidance
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="mb-4 text-xl font-bold text-white flex items-center gap-2">
                    <span>✨</span> What happens next?
                  </h3>
                  <ul className="space-y-0">
                    {nextSteps.map((s) => (
                      <li
                        key={s}
                        className="flex gap-3 border-b border-white/10 py-3 text-sm last:border-b-0 leading-relaxed"
                      >
                        <span className="font-extrabold text-accent">✓</span>
                        <span className="text-white/90">{s}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-[13px] text-[#9fb1c7]">
                    <Badge variant="sample">Prototype</Badge> No data is stored or
                    transmitted from this page.
                  </p>
                </div>
              </aside>
            </Card3D>
          </div>
        </Container>
      </Reveal>
    </>
  );
}
