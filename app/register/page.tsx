import { PageHero } from "@/components/PageHero";
import { Badge } from "@/components/ui/Badge";
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

      <section className="py-12">
        <Container>
          <div className="grid items-start gap-8 lg:grid-cols-[1.6fr_1fr]">
            <RegisterForm />

            <aside className="rounded-2xl bg-primary p-8 text-[#cfd9e6]">
              <h3 className="mb-4 text-lg font-semibold text-white">
                What happens next?
              </h3>
              <ul className="space-y-0">
                {nextSteps.map((s) => (
                  <li
                    key={s}
                    className="flex gap-3 border-b border-white/10 py-2.5 text-sm last:border-b-0"
                  >
                    <span className="font-extrabold text-accent">✓</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[13px] text-[#9fb1c7]">
                <Badge variant="sample">Prototype</Badge> No data is stored or
                transmitted from this page.
              </p>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
