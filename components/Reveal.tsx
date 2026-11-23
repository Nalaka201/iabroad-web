"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * 3D Scroll Reveal: Smoothly rotates, lifts, and fades children into view
 * with perspective depth as user scrolls through the page.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  variant = "3d",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "3d" | "fade" | "scale";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const variantClass =
    variant === "3d"
      ? "reveal-3d"
      : variant === "scale"
      ? "reveal-scale"
      : "reveal-fade";

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: delay ? `${delay}ms` : undefined,
      }}
      className={cn(variantClass, inView && "is-in", className)}
    >
      {children}
    </div>
  );
}
