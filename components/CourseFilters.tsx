"use client";

import { useMemo, useState } from "react";
import { CourseCard } from "@/components/cards/CourseCard";
import { SearchTabs } from "@/components/SearchTabs";
import { Badge } from "@/components/ui/Badge";
import { EmptyState } from "@/components/ui/EmptyState";
import { courses, destinations, getUniversity, universities } from "@/lib/data";

const unique = <T,>(arr: T[]) => Array.from(new Set(arr));

export function CourseFilters({ initialCountry = "" }: { initialCountry?: string }) {
  const [country, setCountry] = useState(initialCountry);
  const [uni, setUni] = useState("");
  const [level, setLevel] = useState("");
  const [field, setField] = useState("");
  const [maxFee, setMaxFee] = useState("");
  const [query, setQuery] = useState("");

  const levels = unique(courses.map((c) => c.level));
  const fields = unique(courses.map((c) => c.field));

  const results = useMemo(() => {
    let list = courses.slice();
    if (country) list = list.filter((c) => getUniversity(c.uni)?.country === country);
    if (uni) list = list.filter((c) => c.uni === uni);
    if (level) list = list.filter((c) => c.level === level);
    if (field) list = list.filter((c) => c.field === field);
    if (maxFee) list = list.filter((c) => c.fee <= Number(maxFee));
    const t = query.trim().toLowerCase();
    if (t)
      list = list.filter((c) =>
        `${c.title} ${c.field} ${c.level}`.toLowerCase().includes(t)
      );
    return list;
  }, [country, uni, level, field, maxFee, query]);

  const clear = () => {
    setCountry("");
    setUni("");
    setLevel("");
    setField("");
    setMaxFee("");
    setQuery("");
  };

  const selectCls =
    "min-w-[150px] rounded-lg border-[1.5px] border-line bg-white px-3.5 py-3 text-base text-ink outline-none focus:border-primary focus:ring-2 focus:ring-primary/15";

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
      <SearchTabs active="courses" />

      <div className="flex flex-wrap items-center gap-3 p-6">
        <select aria-label="Country" value={country} onChange={(e) => setCountry(e.target.value)} className={selectCls}>
          <option value="">All countries</option>
          {destinations.map((d) => (
            <option key={d.code} value={d.code}>{d.name}</option>
          ))}
        </select>
        <select aria-label="University" value={uni} onChange={(e) => setUni(e.target.value)} className={selectCls}>
          <option value="">All universities</option>
          {universities.map((u) => (
            <option key={u.id} value={u.id}>{u.name}</option>
          ))}
        </select>
        <select aria-label="Level" value={level} onChange={(e) => setLevel(e.target.value)} className={selectCls}>
          <option value="">All levels</option>
          {levels.map((l) => <option key={l} value={l}>{l}</option>)}
        </select>
        <select aria-label="Field" value={field} onChange={(e) => setField(e.target.value)} className={selectCls}>
          <option value="">All fields</option>
          {fields.map((f) => <option key={f} value={f}>{f}</option>)}
        </select>
        <select aria-label="Max tuition" value={maxFee} onChange={(e) => setMaxFee(e.target.value)} className={selectCls}>
          <option value="">Any budget</option>
          <option value="20000">Under $20k</option>
          <option value="30000">Under $30k</option>
          <option value="40000">Under $40k</option>
        </select>
        <input
          type="search"
          placeholder="Search course title…"
          aria-label="Search courses"
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
        <span>{results.length} course{results.length === 1 ? "" : "s"} found</span>
        <Badge variant="sample">Sample data</Badge>
      </div>

      <div className="p-6">
        {results.length ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        ) : (
          <EmptyState message="No courses match your filters. Try clearing them." />
        )}
      </div>
    </div>
  );
}
