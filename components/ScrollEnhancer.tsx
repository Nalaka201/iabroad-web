"use client";

import { useEffect, useState } from "react";

export function ScrollEnhancer() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
      setShowBackToTop(window.scrollY > 280);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* 3D Luminous Top Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 z-50 h-[3px] pointer-events-none"
        aria-hidden
      >
        <div
          className="h-full bg-gradient-to-r from-accent via-amber-300 to-sky-400 shadow-[0_0_12px_rgba(201,162,39,0.8)] transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating 3D Back-to-Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-[#0c2038]/85 text-accent shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 cursor-pointer hover:border-accent hover:bg-primary hover:text-white hover:scale-110 hover:-translate-y-1 active:scale-95 ${
          showBackToTop
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-8 opacity-0 pointer-events-none"
        }`}
        style={{
          boxShadow:
            "0 8px 24px -4px rgba(12,32,56,0.4), 0 0 16px rgba(201,162,39,0.25)",
        }}
      >
        <span className="text-xl font-black leading-none animate-bounce">
          ↑
        </span>
      </button>
    </>
  );
}
