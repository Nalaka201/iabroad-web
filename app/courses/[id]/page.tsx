import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { courses, getCourse, getUniversity } from "@/lib/data";
import { money } from "@/lib/utils";

export function generateStaticParams() {
  return courses.map((c) => ({ id: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const c = getCourse(id);
  return { title: c ? c.title : "Course" };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const c = getCourse(id);
  if (!c) notFound();
  const u = getUniversity(c.uni);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-deep via-primary to-[#1d3d63] py-16 text-white">
        {c.image && (
          <div className="absolute inset-0">
            <Image
              src={c.image}
              alt={c.title}
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
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl font-extrabold text-primary shadow-lg">
              {c.level.slice(0, 2)}
            </div>
            <div className="flex-1">
              <p className="mb-3 text-sm text-[#9fb1c7]">
                <Link href="/" className="text-[#cfd9e6] hover:text-accent">
                  Home
                </Link>{" "}
                /{" "}
                <Link
                  href="/courses"
                  className="text-[#cfd9e6] hover:text-accent"
                >
                  Courses
                </Link>{" "}
                / {c.title}
              </p>
              <h1 className="mb-1.5 text-3xl font-extrabold leading-tight sm:text-4xl">
                {c.title}
              </h1>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#cfd9e6]">
                <span>{u?.name}</span>
                <span>📍 {u ? `${u.city}, ${u.countryName}` : ""}</span>
                <span className="font-semibold text-accent">{c.field}</span>
                <Badge variant="sample">Sample</Badge>
              </div>
            </div>
            <ButtonLink href="/register" variant="accent">
              Apply / Register
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid items-start gap-8 lg:grid-cols-[2fr_1fr]">
            <div>
              <div className="mb-5 overflow-hidden rounded-2xl border border-line bg-white shadow-xs">
                {c.image && (
                  <div className="relative h-64 w-full sm:h-72">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 700px"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6 sm:p-8">
                  <h2 className="mb-4 text-xl font-bold text-primary">
                    Course Overview
                  </h2>
                  <p>{c.desc}</p>
                </div>
              </div>

              <div className="mb-5 rounded-2xl border border-line bg-white p-6 sm:p-8">
                <h2 className="mb-4 text-xl font-bold text-primary">
                  Entry Requirements
                </h2>
                <ul className="space-y-0">
                  {c.reqs.map((r) => (
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

              {u && (
                <div className="rounded-2xl border border-line bg-white p-6 sm:p-8">
                  <h2 className="mb-4 text-xl font-bold text-primary">
                    About {u.name}
                  </h2>
                  <p className="mb-3">{u.desc}</p>
                  <Link
                    href={`/universities/${u.id}`}
                    className="text-sm font-semibold text-primary hover:text-accent-deep"
                  >
                    View university →
                  </Link>
                </div>
              )}
            </div>

            <aside className="rounded-2xl bg-primary-tint p-6 lg:sticky lg:top-24">
              <h3 className="mb-3 text-lg font-semibold text-primary">
                Course Facts
              </h3>
              <FactRow k="Level" v={c.level} />
              <FactRow k="Field" v={c.field} />
              <FactRow k="Duration" v={c.duration} />
              <FactRow k="Tuition / yr" v={money(c.fee)} />
              <FactRow k="Intake" v={c.intake} />
              <FactRow k="City" v={u?.city ?? "—"} />
              <ButtonLink
                href="/register"
                variant="primary"
                block
                className="mt-4"
              >
                Apply / Register
              </ButtonLink>
              <ButtonLink
                href="/contact?subject=Application%20Support"
                variant="outline"
                block
                className="mt-2"
              >
                Ask About This Course
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
