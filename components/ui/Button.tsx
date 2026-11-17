import Link from "next/link";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "accent" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold leading-none rounded-full border-[1.5px] border-transparent cursor-pointer transition-all duration-200 text-center whitespace-nowrap no-underline active:scale-[0.98]";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white border-primary shadow-xs hover:bg-primary-deep hover:border-primary-deep hover:-translate-y-0.5 hover:shadow-md",
  accent:
    "bg-accent text-primary-deep border-accent font-bold shadow-xs hover:bg-accent-deep hover:border-accent-deep hover:text-white hover:-translate-y-0.5 hover:shadow-md",
  ghost:
    "bg-white/10 backdrop-blur-xs text-white border-white/40 hover:bg-white/20 hover:border-white/70 hover:text-white hover:-translate-y-0.5",
  outline:
    "bg-transparent text-primary border-line hover:border-primary hover:bg-primary-tint hover:text-primary hover:-translate-y-0.5",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2.5 text-sm",
  md: "px-6 py-3.5 text-base",
  lg: "px-8 py-4 text-[17px]",
};

export function buttonClass(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  block = false
): string {
  return cn(base, variants[variant], sizes[size], block && "w-full");
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
};

export function Button({
  variant = "primary",
  size = "md",
  block = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button className={cn(buttonClass(variant, size, block), className)} {...rest}>
      {children}
    </button>
  );
}

type ButtonLinkProps = {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  block = false,
  external = false,
  className,
  children,
}: ButtonLinkProps) {
  const cls = cn(buttonClass(variant, size, block), className);
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
