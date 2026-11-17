import type { ServiceIcon as ServiceIconName } from "@/lib/types";

type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true,
};

export function CompassIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5 L13 13 L8.5 15.5 L11 11 Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function DocIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M14 3v5h5" />
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M9 14l2 2 4-4" />
    </svg>
  );
}

export function VisaIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <rect x="5" y="4" width="14" height="16" rx="2" />
      <path d="M9 8h6M9 12h6M9 16h3" />
      <circle cx="17" cy="16" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PlaneIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M3 14l9-9 9 9-4 1-5-3-5 3z" fill="currentColor" stroke="none" />
      <path d="M12 5v9" />
    </svg>
  );
}

const ICONS: Record<ServiceIconName, (p: IconProps) => React.ReactElement> = {
  compass: CompassIcon,
  doc: DocIcon,
  visa: VisaIcon,
  plane: PlaneIcon,
};

export function ServiceIconSvg({
  name,
  className,
}: {
  name: ServiceIconName;
  className?: string;
}) {
  const Cmp = ICONS[name];
  return <Cmp className={className} />;
}
