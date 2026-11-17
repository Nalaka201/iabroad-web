// Small helpers — no external deps.

/** Join class names, dropping falsy values. */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

/** Format a USD tuition figure, e.g. 21000 -> "$21,000". */
export function money(n: number): string {
  return "$" + Number(n || 0).toLocaleString("en-US");
}

/** Email format check (used by client-side form validation). */
export function isEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

/** Phone format check: starts with + or digit, then digits/spaces/()-, min length. */
export function isPhone(v: string): boolean {
  return /^[+\d][\d\s()-]{6,}$/.test(v.trim());
}
