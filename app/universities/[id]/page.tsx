import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CourseCard } from "@/components/cards/CourseCard";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  getCoursesByUniversity,
  getUniversity,
  universities,
} from "@/lib/data";
import { money } from "@/lib/utils";

export function generateStaticParams() {
  return universities.map((u) => ({ id: u.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const u = getUniversity(id);
  return { title: u ? u.name : "University" };
}

export default async function UniversityDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const u = getUniversity(id);
  if (!u) notFound();

  const courses = getCoursesByUniversity(id);
  const minFee = courses.length ? Math.min(...courses.map((c) => c.fee)) : null;

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-deep via-primary to-[#1e3c61] py-16 text-white">
        {u.image && (
          <div className="absolute inset-0">
            <Image
              src={u.image}
              alt={u.name}
              fill
              sizes="100vw"
              priority
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-deep via-primary-deep/90 to-primary/80" />
          </div>
        )}
        <Container className="relative">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-white text-3xl font-extrabold text-primary shadow-lg">
              {u.mono}
            </div>
            <div className="flex-1">
              <p className="mb-3 text-sm text-[#9fb1c7]">
                <Link href="/" className="text-[#cfd9e6] hover:text-accent">
                  Home
                </Link>{" "}
                /{" "}
                <Link
                  href="/universities"
                  className="text-[#cfd9e6] hover:text-accent"
                >
                  Universities
                </Link>{" "}
                / {u.name}
              </p>
              <h1 className="mb-1.5 text-3xl font-extrabold leading-tight sm:text-4xl">
                {u.name}
              </h1>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#cfd9e6]">
                <span>📍 {u.city}, {u.countryName}</span>
                <span>
                  Est. <b className="text-accent">{u.established}</b>
                </span>
                {u.featured && (
                  <span className="font-semibold text-accent">Featured</span>
                )}
                <Badge variant="sample">Sample</Badge>
              </div>
            </div>
            <ButtonLink href="/contact" variant="accent">
              Make an Inquiry
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid items-start gap-8 lg:grid-cols-[2fr_1fr]">
            <div>
              <div className="mb-5 overflow-hidden rounded-2xl border border-line bg-white shadow-xs">
                {u.image && (
                  <div className="relative h-64 w-full sm:h-72">
                    <Image
                      src={u.image}
                      alt={u.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 700px"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6 sm:p-8">
                  <h2 className="mb-4 text-xl font-bold text-primary">
                    About the University
                  </h2>
                  <p className="mb-3">{u.desc}</p>
                  <p className="text-sm">
                    <a
                      href={u.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-primary hover:text-accent-deep"
                    >
                      Visit official website ↗
                    </a>{" "}
                    <Badge variant="info">Placeholder link</Badge>
                  </p>
                </div>
              </div>

              <div className="mb-5 rounded-2xl border border-line bg-white p-6 sm:p-8">
                <h2 className="mb-4 text-xl font-bold text-primary">
                  Entry Requirements
                </h2>
                <ul className="space-y-0">
                  {u.reqs.map((r) => (
                    <li
                      key={r}
                      className="relative border-b border-line py-2 pl-7 text-sm last:border-b-0"
                    >
                      <span className="absolute left-0 font-extrabold text-accent">
                        ✓
                      </span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-line bg-white p-6 sm:p-8">
                <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-primary">
                  Courses at {u.name} <Badge variant="sample">Sample</Badge>
                </h2>
                {courses.length ? (
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {courses.map((c) => (
                      <CourseCard key={c.id} course={c} />
                    ))}
                  </div>
                ) : (
                  <p className="text-muted">
                    No sample courses listed for this university yet.
                  </p>
                )}
              </div>
            </div>

            <aside className="rounded-2xl bg-primary-tint p-6 lg:sticky lg:top-24">
              <h3 className="mb-3 text-lg font-semibold text-primary">
                Quick Facts
              </h3>
              <FactRow k="Country" v={u.countryName} />
              <FactRow k="City" v={u.city} />
              <FactRow k="Established" v={String(u.established)} />
              <FactRow k="Courses listed" v={String(courses.length)} />
              <FactRow k="Tuition from" v={minFee !== null ? money(minFee) : "—"} />
              <ButtonLink
                href="/register"
                variant="primary"
                block
                className="mt-4"
              >
                Register Interest
              </ButtonLink>
              <ButtonLink
                href="/contact"
                variant="outline"
                block
                className="mt-2"
              >
                Ask a Question
              </ButtonLink>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}

function FactRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between border-b border-line py-2.5 text-sm last:border-b-0">
      <span className="text-muted">{k}</span>
      <span className="font-bold text-primary">{v}</span>
    </div>
  );
}
