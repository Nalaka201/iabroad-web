import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/ContactForm";
import { settings } from "@/lib/data";

export const metadata = { title: "Contact" };

const infoCards = [
  { icon: "📞", title: "Call / WhatsApp", value: settings.phone },
  { icon: "✉️", title: "Email", value: settings.email },
  { icon: "🕒", title: "Office Hours", value: settings.hours },
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ subject?: string }>;
}) {
  const { subject } = await searchParams;
  const initialSubject = subject ? decodeURIComponent(subject) : "";

  return (
    <>
      <PageHero title="Contact Us" breadcrumb="Contact">
        <p>Send a question or book a free counselling session.</p>
      </PageHero>

      <section className="py-12">
        <Container>
          <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {infoCards.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-line bg-white p-6 text-center"
              >
                <div className="mx-auto mb-3 flex h-13 w-13 items-center justify-center rounded-full bg-primary-tint text-xl">
                  {/* eslint-disable-next-line */}
                  <span aria-hidden>{c.icon}</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-primary">
                  {c.title}
                </h3>
                <p className="text-sm text-muted">{c.value}</p>
              </div>
            ))}
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-2">
            <ContactForm initialSubject={initialSubject} />

            <aside className="rounded-2xl bg-primary p-8 text-[#cfd9e6]">
              <h3 className="mb-4 text-lg font-semibold text-white">
                Visit / Reach Us
              </h3>
              <p className="text-sm">{settings.address}</p>
              <p className="mt-3 text-sm">
                {settings.phone}
                <br />
                {settings.email}
              </p>
              <div className="mt-4 flex h-[280px] items-center justify-center rounded-xl border border-white/15 bg-white/[0.08] text-sm text-[#cfd9e6]">
                Map placeholder
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
