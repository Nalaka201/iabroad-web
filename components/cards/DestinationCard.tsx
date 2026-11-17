import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { unisByCountry } from "@/lib/data";
import type { Country } from "@/lib/types";

export function DestinationCard({ country }: { country: Country }) {
  const uniCount = unisByCountry(country.code).length;
  return (
    <Link
      href={`/universities?country=${country.code}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-xl"
    >
      <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-primary-tint to-surface">
        {country.image ? (
          <Image
            src={country.image}
            alt={country.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-5xl">
            {country.flag}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <span
          className="absolute right-3.5 top-3.5 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-2xl shadow-md backdrop-blur-xs"
          aria-hidden
        >
          {country.flag}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-bold text-primary transition-colors group-hover:text-accent-deep">
          {country.name}
        </h3>
        <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
          {country.blurb}
        </p>
        <div className="mb-4 flex items-center justify-between border-t border-line/70 pt-3 text-xs text-muted">
          <span>
            <b className="font-bold text-primary">{uniCount}</b> unis
          </span>
          <span>
            Popular: <b className="font-semibold text-primary">{country.popular.slice(0, 2).join(", ")}</b>
          </span>
        </div>
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-colors group-hover:text-accent-deep">
            <span>View universities</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </span>
          <Badge variant="sample">Sample</Badge>
        </div>
      </div>
    </Link>
  );
}
