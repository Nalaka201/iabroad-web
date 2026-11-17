export function SectionHeading({
  kicker,
  title,
  lead,
  className,
}: {
  kicker?: string;
  title: string;
  lead?: string;
  className?: string;
}) {
  return (
    <div className={`mx-auto mb-14 max-w-2xl text-center ${className ?? ""}`}>
      {kicker && (
        <span className="mb-3.5 inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent-tint/70 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.15em] text-accent-deep">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-deep" />
          {kicker}
        </span>
      )}
      <h2 className="text-3xl font-black tracking-tight text-primary sm:text-4xl">
        {title}
      </h2>
      {lead && (
        <p className="mt-3.5 text-base leading-relaxed text-muted sm:text-lg">
          {lead}
        </p>
      )}
    </div>
  );
}
