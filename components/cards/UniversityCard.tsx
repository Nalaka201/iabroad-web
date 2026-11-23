import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Card3D } from "@/components/ui/Card3D";
import type { University } from "@/lib/types";

export function UniversityCard({ university }: { university: University }) {
  return (
    <Card3D className="h-full">
      <Link
        href={`/universities/${university.id}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-xs transition-all duration-300 hover:border-accent hover:shadow-2xl"
      >
        <div className="relative h-48 w-full overflow-hidden bg-slate-100">
          {university.image ? (
            <Image
              src={university.image}
              alt={university.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div
            className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/95 text-lg font-black tracking-tight text-accent shadow-lg backdrop-blur-xs transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            style={{ transform: "translateZ(25px)" }}
          >
            {university.mono}
          </div>
          {university.featured && (
            <div
              className="absolute right-4 top-4"
              style={{ transform: "translateZ(20px)" }}
            >
              <Badge variant="gold">Featured</Badge>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="mb-1 text-xl font-bold leading-tight text-primary transition-colors group-hover:text-accent-deep">
            {university.name}
          </h3>
          <p className="mb-3 text-xs font-semibold text-muted">
            📍 {university.city}, {university.countryName} · Est.{" "}
            {university.established}
          </p>
          <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
            {university.desc}
          </p>
          <div className="mt-auto flex items-center justify-between border-t border-line/70 pt-4">
            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-colors group-hover:text-accent-deep">
              <span>View details</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1.5">
                →
              </span>
            </span>
            <div className="flex flex-wrap gap-1.5">
              <Badge variant="sample">Sample</Badge>
            </div>
          </div>
        </div>
      </Link>
    </Card3D>
  );
}
