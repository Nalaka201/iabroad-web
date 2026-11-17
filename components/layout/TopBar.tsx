import { Container } from "@/components/ui/Container";
import { settings } from "@/lib/data";

const socials = [
  { label: "Facebook", short: "f" },
  { label: "Instagram", short: "ig" },
  { label: "LinkedIn", short: "in" },
  { label: "YouTube", short: "yt" },
];

export function TopBar() {
  return (
    <div className="border-b border-white/10 bg-[#0e213b] text-xs font-medium text-[#dbe4ef]">
      <Container className="flex min-h-[38px] flex-wrap items-center justify-center gap-4 py-1 sm:justify-between">
        <div className="flex flex-wrap items-center gap-5 sm:gap-7">
          <a
            href={`tel:${settings.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-1.5 transition-colors hover:text-accent"
          >
            <span className="text-accent text-[11px]">📞</span>
            <span>{settings.phone}</span>
          </a>
          <a
            href={`mailto:${settings.email}`}
            className="flex items-center gap-1.5 transition-colors hover:text-accent"
          >
            <span className="text-accent text-[11px]">✉️</span>
            <span>{settings.email}</span>
          </a>
        </div>
        <div className="hidden items-center gap-3 sm:flex">
          <span className="text-[11px] text-[#9eb2c9]">{settings.hours}</span>
          <div className="h-3 w-[1px] bg-white/15" />
          <div className="flex items-center gap-1.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-white/10 text-[10px] font-bold text-white transition-all hover:bg-accent hover:text-primary-deep hover:scale-110"
              >
                {s.short}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
