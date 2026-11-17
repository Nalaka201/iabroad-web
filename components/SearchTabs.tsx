import Link from "next/link";
import { cn } from "@/lib/utils";

export type SearchTab = "universities" | "courses";

/** Tab switch between Universities and Courses. The inactive tab links to
 *  the other listing page. */
export function SearchTabs({ active }: { active: SearchTab }) {
  const tabs: { key: SearchTab; label: string; href: string }[] = [
    { key: "universities", label: "Universities", href: "/universities" },
    { key: "courses", label: "Courses", href: "/courses" },
  ];
  return (
    <div className="flex border-b border-line bg-surface">
      {tabs.map((t) => {
        const isActive = t.key === active;
        const cls = cn(
          "flex-1 border-b-[3px] px-4 py-4 text-center font-semibold transition-colors",
          isActive
            ? "border-accent bg-white text-primary"
            : "border-transparent text-muted hover:text-primary"
        );
        return isActive ? (
          <div key={t.key} className={cls}>
            {t.label}
          </div>
        ) : (
          <Link key={t.key} href={t.href} className={cls}>
            {t.label}
          </Link>
        );
      })}
    </div>
  );
}
