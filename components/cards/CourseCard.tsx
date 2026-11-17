import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { getUniversity } from "@/lib/data";
import { money } from "@/lib/utils";
import type { Course } from "@/lib/types";

export function CourseCard({ course }: { course: Course }) {
  const uni = getUniversity(course.uni);
  return (
    <Link
      href={`/courses/${course.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-xl"
    >
      {course.image && (
        <div className="relative h-36 w-full overflow-hidden bg-slate-100">
          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <span className="absolute bottom-3 left-3 inline-flex items-center rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-semibold text-primary shadow-xs backdrop-blur-xs">
            {course.level} · {course.field}
          </span>
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        {!course.image && (
          <span className="mb-3 inline-flex w-fit items-center rounded-full bg-accent-tint px-2.5 py-0.5 text-xs font-semibold text-accent-deep">
            {course.level} · {course.field}
          </span>
        )}
        <h3 className="mb-1.5 text-lg font-semibold leading-tight text-primary transition-colors group-hover:text-accent-deep">
          {course.title}
        </h3>
        <p className="mb-3 text-sm text-muted">
          {uni?.name ?? "—"} · {uni?.city ?? ""}
        </p>
        <div className="mb-4 grid grid-cols-2 gap-3 border-y border-line py-3">
          <div>
            <span className="block text-xs text-muted">Duration</span>
            <span className="font-bold text-primary">{course.duration}</span>
          </div>
          <div>
            <span className="block text-xs text-muted">Tuition / yr</span>
            <span className="font-bold text-primary">{money(course.fee)}</span>
          </div>
          <div>
            <span className="block text-xs text-muted">Intake</span>
            <span className="font-bold text-primary">{course.intake}</span>
          </div>
          <div>
            <span className="block text-xs text-muted">Country</span>
            <span className="font-bold text-primary">{uni?.countryName ?? "—"}</span>
          </div>
        </div>
        <div className="mt-auto flex flex-wrap gap-1.5">
          <Badge variant="sample">Sample</Badge>
        </div>
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent-deep">
          View course →
        </span>
      </div>
    </Link>
  );
}
