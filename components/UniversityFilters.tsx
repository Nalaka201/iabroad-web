"use client";

import { useMemo, useState } from "react";
import { UniversityCard } from "@/components/cards/UniversityCard";
import { SearchTabs } from "@/components/SearchTabs";
import { Badge } from "@/components/ui/Badge";
import { EmptyState } from "@/components/ui/EmptyState";
import { destinations, universities } from "@/lib/data";
import { cn } from "@/lib/utils";

export function UniversityFilters({
  initialCountry = "",
}: {
  initialCountry?: string;
}) {
  const [country, setCountry] = useState(initialCountry);
  const [query, setQuery] = useState("");
  const [featured, setFeatured] = useState(false);

  const results = useMemo(() => {
    let list = universities.slice();
    if (country) list = list.filter((u) => u.country === country);
    if (featured) list = list.filter((u) => u.featured);
    const t = query.trim().toLowerCase();
    if (t)
      list = list.filter((u) =>
        `${u.name} ${u.city} ${u.countryName}`.toLowerCase().includes(t)
      );
    return list;
  }, [country, featured, query]);

  const clear = () => {
    setCountry("");
    setQuery("");
    setFeatured(false);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
      <SearchTabs active="universities" />

      <div className="flex flex-wrap items-center gap-3 p-6">
        <select
          aria-label="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="min-w-[150px] rounded-lg border-[1.5px] border-line bg-white px-3.5 py-3 text-base text-ink outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
        >
          <option value="">All countries</option>
          {destinations.map((d) => (
            <option key={d.code} value={d.code}>
              {d.name}
            </option>
          ))}
        </select>

        <button
          type="button"
          onClick={() => setFeatured((f) => !f)}
          className={cn(
            "rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
            featured
              ? "bg-primary text-white"
              : "bg-primary-tint text-primary hover:border hover:border-primary"
          )}
        >
          Featured only
        </button>

        <input
          type="search"
          placeholder="Search by name or city…"
          aria-label="Search universities"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="min-w-[180px] flex-1 rounded-lg border-[1.5px] border-line bg-white px-3.5 py-3 text-base text-ink outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
        />

        <button
          type="button"
          onClick={clear}
          className="rounded-full border-[1.5px] border-line px-4 py-2 text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-primary-tint"
        >
          Clear
        </button>
      </div>

      <div className="flex items-center justify-between border-t border-line bg-page px-6 py-3 text-sm text-muted">
        <span>
          {results.length} universit{results.length === 1 ? "y" : "ies"} found
        </span>
        <Badge variant="sample">Sample data</Badge>
      </div>

      <div className="p-6">
        {results.length ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((u) => (
              <UniversityCard key={u.id} university={u} />
            ))}
          </div>
        ) : (
          <EmptyState message="No universities match your filters. Try clearing them." />
        )}
      </div>
    </div>
  );
}
