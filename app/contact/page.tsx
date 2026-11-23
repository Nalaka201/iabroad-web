import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Card3D } from "@/components/ui/Card3D";
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

      <Reveal className="py-16">
        <Container>
          <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {infoCards.map((c) => (
              <Card3D key={c.title} className="h-full">
                <div className="flex h-full flex-col items-center rounded-2xl border border-line bg-white p-7 text-center shadow-xs transition-all duration-300 hover:border-accent hover:shadow-xl">
                  <div
                    className="mx-auto mb-3.5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-tint to-surface text-2xl shadow-sm transition-transform duration-300 hover:scale-110"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    {/* eslint-disable-next-line */}
                    <span aria-hidden>{c.icon}</span>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-primary">
                    {c.title}
                  </h3>
                  <p className="text-sm font-medium text-muted">{c.value}</p>
                </div>
              </Card3D>
            ))}
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-line bg-white p-8 shadow-xs">
              <ContactForm initialSubject={initialSubject} />
            </div>

            <Card3D>
              <aside className="rounded-2xl bg-gradient-to-br from-primary-deep via-primary to-[#0f2440] p-8 text-[#cfd9e6] shadow-xl border border-white/10">
                <h3 className="mb-4 text-xl font-bold text-white flex items-center gap-2">
                  <span>📍</span> Visit / Reach Us
                </h3>
                <p className="text-sm leading-relaxed">{settings.address}</p>
                <div className="mt-4 pt-4 border-t border-white/10 text-sm space-y-1">
                  <p className="font-semibold text-accent">{settings.phone}</p>
                  <p className="text-white/80">{settings.email}</p>
                </div>
                
                {/* Real Modern Map Aerial Graphic */}
                <div className="relative mt-6 h-[260px] w-full overflow-hidden rounded-xl border border-white/20 shadow-inner">
                  <Image
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
                    alt="Ibroad Education Headquarters"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="flex flex-col items-center gap-1.5 rounded-2xl border border-white/30 bg-[#0c2038]/90 px-4 py-3 text-center text-white shadow-2xl backdrop-blur-md">
                      <span className="flex h-3 w-3 rounded-full bg-accent animate-ping" />
                      <span className="text-xs font-bold text-accent">📍 Ibroad Main Office</span>
                      <span className="text-[11px] text-white/80">{settings.address}</span>
                    </div>
                  </div>
                </div>
              </aside>
            </Card3D>
          </div>
        </Container>
      </Reveal>
    </>
  );
}
