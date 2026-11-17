import { cn } from "@/lib/utils";

export type BadgeVariant = "default" | "gold" | "sample" | "info" | "success";

const styles: Record<BadgeVariant, string> = {
  default: "bg-surface text-muted",
  gold: "bg-accent-tint text-accent-deep",
  sample: "bg-[#FFF6E0] text-[#8a6a00] border border-dashed border-accent",
  info: "bg-[#E6F0F8] text-info",
  success: "bg-[#E2F2EB] text-success",
};

export function Badge({
  variant = "default",
  className,
  children,
}: {
  variant?: BadgeVariant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold",
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
