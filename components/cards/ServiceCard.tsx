import { ServiceIconSvg } from "@/components/icons";

export function ServiceCard({
  service,
}: {
  service: { icon: "compass" | "doc" | "visa" | "plane"; title: string; desc: string };
}) {
  return (
    <div className="group flex flex-col items-center rounded-2xl border border-line bg-white p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-xl">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-tint to-surface text-primary shadow-xs transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-primary-deep">
        <ServiceIconSvg name={service.icon} className="h-7 w-7" />
      </div>
      <h3 className="mb-2.5 text-lg font-bold text-primary transition-colors group-hover:text-accent-deep">
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted">{service.desc}</p>
    </div>
  );
}
