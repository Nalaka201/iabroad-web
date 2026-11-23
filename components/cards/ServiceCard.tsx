import Image from "next/image";
import { ServiceIconSvg } from "@/components/icons";
import { Card3D } from "@/components/ui/Card3D";

const serviceImages: Record<string, string> = {
  compass:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
  doc:
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
  visa:
    "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
  plane:
    "https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=600&q=80",
};

export function ServiceCard({
  service,
}: {
  service: { icon: "compass" | "doc" | "visa" | "plane"; title: string; desc: string };
}) {
  const imgUrl = serviceImages[service.icon] || serviceImages.compass;

  return (
    <Card3D className="h-full">
      <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-xs transition-all duration-300 hover:border-accent hover:shadow-2xl">
        <div className="relative h-40 w-full overflow-hidden bg-slate-100">
          <Image
            src={imgUrl}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div
            className="absolute bottom-3 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary-deep shadow-lg backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(201,162,39,0.6)]"
            style={{ transform: "translateZ(25px)" }}
          >
            <ServiceIconSvg name={service.icon} className="h-6 w-6" />
          </div>
        </div>
        <div className="flex flex-1 flex-col p-6 text-left">
          <h3 className="mb-2 text-lg font-bold text-primary transition-colors group-hover:text-accent-deep">
            {service.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted">{service.desc}</p>
        </div>
      </div>
    </Card3D>
  );
}
