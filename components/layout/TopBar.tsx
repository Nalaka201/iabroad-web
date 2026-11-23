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
    <div className="border-b border-white/10 bg-[#091a30] text-xs font-medium text-[#dbe4ef]">
      <Container className="flex min-h-[38px] flex-wrap items-center justify-between gap-3 py-1.5">
        {/* Left: Live Intake Status & Assessment */}
        <div className="flex items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/20 px-2.5 py-0.5 text-[11px] font-semibold text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span>Intakes 2026/2027 Open</span>
          </span>
          <span className="hidden text-[11px] text-[#9eb2c9] md:inline">
            · 100% Free Initial Assessment & Visa Support
          </span>
        </div>

        {/* Right: Direct Hotline, Email & Hours */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href={`tel:${settings.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-1.5 font-semibold text-white transition-colors hover:text-accent"
          >
            <span className="text-accent text-[11px]">📞</span>
            <span>{settings.phone}</span>
          </a>
          <a
            href={`mailto:${settings.email}`}
            className="hidden items-center gap-1.5 transition-colors hover:text-accent sm:flex"
          >
            <span className="text-accent text-[11px]">✉️</span>
            <span>{settings.email}</span>
          </a>
          <div className="hidden h-3 w-[1px] bg-white/20 lg:block" />
          <div className="hidden items-center gap-1.5 lg:flex">
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
