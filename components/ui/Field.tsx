import { cn } from "@/lib/utils";

export const inputClass =
  "w-full rounded-lg border-[1.5px] border-line bg-white px-3.5 py-3 text-base text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15";

export function Field({
  label,
  required,
  error,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4">
      <label className="mb-1.5 block text-sm font-semibold text-ink">
        {label} {required && <span className="text-error">*</span>}
      </label>
      {children}
      {hint && !error && <p className="mt-1.5 text-xs text-muted">{hint}</p>}
      {error && <p className="mt-1.5 text-xs text-error">{error}</p>}
    </div>
  );
}

/** Apply this alongside `inputClass` to flag an invalid input. */
export function invalidClass(hasError: boolean): string {
  return hasError
    ? "border-error focus:border-error focus:ring-error/10"
    : "";
}

export function FieldRow({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-4 sm:grid-cols-2">{children}</div>;
}

export function FormSectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 mt-6 border-b-2 border-accent pb-2 text-sm font-bold uppercase tracking-[0.1em] text-primary">
      {children}
    </div>
  );
}

export function SuccessBox({
  title,
  children,
  show,
}: {
  title: string;
  children: React.ReactNode;
  show: boolean;
}) {
  if (!show) return null;
  return (
    <div
      className={cn(
        "mb-5 rounded-lg border border-success bg-[#E2F2EB] p-5 text-success"
      )}
    >
      <h3 className="mb-2 text-lg font-bold text-success">{title}</h3>
      <p className="m-0 text-sm text-[#1d5239]">{children}</p>
    </div>
  );
}
