import { cn } from "@/lib/utils";

/** The navy rounded-square + gold graduation-cap mark. The square uses
 *  `currentColor`, so the parent sets the brand colour (navy on light
 *  backgrounds, translucent on the footer). */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 42 42"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="42" height="42" rx="10" fill="currentColor" />
      <path d="M21 8 L34 14.5 L21 21 L8 14.5 Z" fill="#c9a227" />
      <path
        d="M13 17 v5.5 c0 2.2 3.6 4 8 4 s8 -1.8 8 -4 V17"
        fill="none"
        stroke="#c9a227"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M34 14.5 v7"
        stroke="#c9a227"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="34" cy="23" r="1.7" fill="#c9a227" />
    </svg>
  );
}

/** Full lockup: mark + wordmark. `onLight=false` renders for dark backgrounds. */
export function Logo({
  onLight = true,
  className,
}: {
  onLight?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <LogoMark
        className={cn(
          "h-10 w-10 shrink-0",
          onLight ? "text-primary" : "text-white/10"
        )}
      />
      <span className="flex flex-col leading-none">
        <b
          className={cn(
            "text-xl font-extrabold tracking-tight",
            onLight ? "text-primary" : "text-white"
          )}
        >
          Ibroad<span className="text-accent"> Education</span>
        </b>
        <small
          className={cn(
            "mt-0.5 text-[11px] uppercase tracking-[0.18em]",
            onLight ? "text-muted" : "text-slate-400"
          )}
        >
          Study Abroad Consultants
        </small>
      </span>
    </span>
  );
}
