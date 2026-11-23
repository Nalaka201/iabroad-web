import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Card3D } from "@/components/ui/Card3D";
import type { Testimonial } from "@/lib/types";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card3D className="h-full">
      <div className="flex h-full flex-col justify-between rounded-2xl border border-line bg-white p-7 shadow-xs transition-all duration-300 hover:border-accent/60 hover:shadow-2xl">
        <div>
          <span
            className="mb-2 block text-4xl font-black leading-none text-accent"
            style={{ transform: "translateZ(20px)" }}
          >
            “
          </span>
          <p className="text-[16px] leading-relaxed text-ink">
            {testimonial.text}
          </p>
        </div>
        <div className="mt-6 border-t border-line/60 pt-4">
          <div className="flex items-center gap-3.5">
            {testimonial.avatar ? (
              <div
                className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-accent/60 shadow-md"
                style={{ transform: "translateZ(20px)" }}
              >
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
            ) : (
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary font-black text-accent shadow-md"
                style={{ transform: "translateZ(20px)" }}
              >
                {testimonial.initials}
              </div>
            )}
            <div className="flex-1">
              <p className="text-sm font-bold text-primary">{testimonial.name}</p>
              <p className="text-xs text-muted">{testimonial.role}</p>
            </div>
          </div>
          <div className="mt-3">
            <Badge variant="sample">Sample testimonial</Badge>
          </div>
        </div>
      </div>
    </Card3D>
  );
}
