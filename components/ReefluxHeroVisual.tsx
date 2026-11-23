"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { University } from "@/lib/types";

interface ReefluxHeroVisualProps {
  featuredUniversities: University[];
}

export function ReefluxHeroVisual({
  featuredUniversities,
}: ReefluxHeroVisualProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [lightPos, setLightPos] = useState({ x: 50, y: 50 });
  const [activeTab, setActiveTab] = useState(0);

  // Smooth mouse tilt handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt angles (-12 to 12 degrees)
    const rotateY = ((x - centerX) / centerX) * 12;
    const rotateX = -((y - centerY) / centerY) * 12;

    setRotate({ x: rotateX, y: rotateY });
    setLightPos({
      x: Math.round((x / rect.width) * 100),
      y: Math.round((y / rect.height) * 100),
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setLightPos({ x: 50, y: 50 });
  };

  const sampleUni = featuredUniversities[activeTab] || featuredUniversities[0];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto flex h-[520px] w-full max-w-[560px] items-center justify-center select-none"
      style={{ perspective: "1200px" }}
    >
      {/* Dynamic Cursor Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-10 rounded-full opacity-60 blur-3xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 320px at ${lightPos.x}% ${lightPos.y}%, rgba(201,162,39,0.25), rgba(99,102,241,0.18), transparent 70%)`,
        }}
        aria-hidden
      />

      {/* 3D Tilting Stage Container */}
      <div
        className="relative flex h-full w-full items-center justify-center transition-transform duration-200 ease-out"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        }}
      >
        {/* ========================================================= */}
        {/* 1. CENTERPIECE: Glowing Crystalline Education Core & Rings */}
        {/* ========================================================= */}
        <div
          className="relative flex items-center justify-center"
          style={{ transform: "translateZ(30px)" }}
        >
          {/* Ethereal Ambient Radial Corona */}
          <div className="absolute h-72 w-72 rounded-full bg-gradient-to-tr from-accent/30 via-indigo-500/20 to-sky-400/25 blur-2xl animate-pulse" />

          {/* Glowing Crystal Orb Body */}
          <div className="relative h-48 w-48 rounded-full border border-white/30 bg-gradient-to-tr from-[#0a1a32]/90 via-[#1e345b]/80 to-[#c9a227]/30 shadow-[0_0_60px_rgba(201,162,39,0.35)] backdrop-blur-md flex items-center justify-center overflow-hidden">
            {/* Shimmering internal facets */}
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "conic-gradient(from 45deg at 50% 50%, #c9a227 0deg, transparent 60deg, #38bdf8 120deg, transparent 180deg, #a855f7 240deg, transparent 300deg, #c9a227 360deg)",
                animation: "spin 25s linear infinite",
              }}
            />

            {/* Inner Holographic Core */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center p-3">
              <span className="text-3xl filter drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]">
                🌐
              </span>
              <span className="mt-1 text-[11px] font-black uppercase tracking-[0.2em] text-accent">
                Ibroad 3D
              </span>
              <span className="text-[10px] text-white/70 font-medium">
                Global Network
              </span>
            </div>
          </div>

          {/* 3D Orbiting Ring 1 (Gold) */}
          <div
            className="pointer-events-none absolute h-64 w-64 rounded-full border border-accent/60 shadow-[0_0_20px_rgba(201,162,39,0.4)]"
            style={{
              transform: "rotateX(68deg) rotateY(15deg)",
              animation: "orbit-ring-gold 18s linear infinite",
            }}
          >
            <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_12px_#c9a227]" />
          </div>

          {/* 3D Orbiting Ring 2 (Sapphire / Violet) */}
          <div
            className="pointer-events-none absolute h-80 w-80 rounded-full border border-sky-400/40 shadow-[0_0_25px_rgba(56,189,248,0.3)]"
            style={{
              transform: "rotateX(42deg) rotateY(-35deg)",
              animation: "orbit-ring-sky 24s linear infinite reverse",
            }}
          >
            <div className="absolute -bottom-1.5 right-1/4 h-3.5 w-3.5 rounded-full bg-sky-300 shadow-[0_0_15px_#38bdf8]" />
          </div>

          {/* 3D Orbiting Ring 3 (Lavender / Mist) */}
          <div
            className="pointer-events-none absolute h-[340px] w-[340px] rounded-full border border-purple-400/25 border-dashed"
            style={{
              transform: "rotateX(75deg) rotateY(45deg)",
              animation: "orbit-ring-gold 32s linear infinite",
            }}
          />
        </div>

        {/* ========================================================= */}
        {/* 2. FLOATING 3D GLASS CARDS (Multi-layered Z-depth)        */}
        {/* ========================================================= */}

        {/* --- Card A: Top-Right "Visa Granted" Status with Student Avatar --- */}
        <div
          className="absolute -top-2 -right-4 sm:top-2 sm:right-2 z-20 w-56 sm:w-64 rounded-2xl border border-white/25 bg-[#091b33]/85 p-3.5 shadow-[0_20px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-accent/60"
          style={{
            transform: "translateZ(85px)",
            animation: "reeflux-float 7s ease-in-out infinite",
          }}
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                Visa Approved
              </span>
            </div>
            <span className="rounded-md bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-bold text-emerald-300">
              100% Rate
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-emerald-400 shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                alt="Approved Student"
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold text-white">
                Student Pass Verified
              </p>
              <p className="text-[10px] text-white/60">
                UK • AUS • CAN • USA • GER
              </p>
            </div>
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs text-white font-bold shadow-xs">
              ✓
            </div>
          </div>

          {/* Mini progress bar */}
          <div className="mt-2.5">
            <div className="flex justify-between text-[9px] text-white/70 mb-1">
              <span>Embassy Clearance</span>
              <span className="font-semibold text-emerald-300">Fast Track</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[96%] rounded-full bg-gradient-to-r from-emerald-400 to-teal-300" />
            </div>
          </div>
        </div>

        {/* --- Card B: Left Center "University & Scholarship Match" with Campus Photo --- */}
        <div
          className="absolute top-24 -left-6 sm:left-0 z-20 w-60 sm:w-68 rounded-2xl border border-white/25 bg-[#0b203c]/90 p-3.5 shadow-[0_25px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-accent/60"
          style={{
            transform: "translateZ(110px)",
            animation: "reeflux-float-reverse 8.5s ease-in-out infinite",
          }}
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-accent flex items-center gap-1.5">
              <span>⭐</span> Scholarship Award
            </span>
            <span className="rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-extrabold text-accent">
              Up to 50%
            </span>
          </div>

          {sampleUni && (
            <Link
              href={`/universities/${sampleUni.id}`}
              className="group block rounded-xl bg-white/[0.06] p-2 border border-white/10 transition-colors hover:border-accent/40 hover:bg-white/[0.12]"
            >
              <div className="flex items-center gap-2.5">
                {sampleUni.image ? (
                  <div className="relative h-10 w-12 shrink-0 overflow-hidden rounded-lg shadow-sm">
                    <Image
                      src={sampleUni.image}
                      alt={sampleUni.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                ) : (
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-xs font-black text-primary-deep shadow-xs">
                    {sampleUni.mono}
                  </span>
                )}
                <div className="min-w-0 flex-1">
                  <h4 className="truncate text-xs font-bold text-white group-hover:text-accent transition-colors">
                    {sampleUni.name}
                  </h4>
                  <p className="text-[10px] text-white/60">
                    📍 {sampleUni.city}, {sampleUni.countryName}
                  </p>
                </div>
                <span className="text-xs text-accent group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </div>
            </Link>
          )}

          <div className="mt-2.5 flex items-center justify-between text-[10px] text-white/80">
            <span>Eligibility Match:</span>
            <span className="font-bold text-sky-400">98% High Fit</span>
          </div>
        </div>

        {/* --- Card C: Bottom-Right "Global Route & Intakes" --- */}
        <div
          className="absolute -bottom-2 -right-4 sm:bottom-4 sm:right-2 z-20 w-52 sm:w-60 rounded-2xl border border-white/25 bg-[#091b33]/90 p-3.5 shadow-[0_20px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-accent/60"
          style={{
            transform: "translateZ(75px)",
            animation: "reeflux-float 9s ease-in-out infinite 1s",
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-white flex items-center gap-1.5">
              <span>✈️</span> Intake 2026 Active
            </span>
            <span className="text-[10px] font-bold text-accent">Colombo</span>
          </div>

          <div className="rounded-lg bg-white/[0.05] p-2 border border-white/10 flex items-center justify-between text-[11px] text-white">
            <div className="text-center">
              <div className="font-mono font-bold text-accent">CMB</div>
              <div className="text-[9px] text-white/60">Sri Lanka</div>
            </div>
            <div className="flex flex-col items-center px-2">
              <span className="text-[10px] text-accent animate-pulse">
                ✈ ─── ✈
              </span>
              <span className="text-[8px] text-sky-300">Direct Route</span>
            </div>
            <div className="text-center">
              <div className="font-mono font-bold text-emerald-400">UK / AUS</div>
              <div className="text-[9px] text-white/60">Global</div>
            </div>
          </div>

          <div className="mt-2 text-center">
            <span className="inline-block rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-medium text-white/80">
              Free 1-on-1 Counseling
            </span>
          </div>
        </div>

        {/* --- Quick Featured University Selector Mini Dock --- */}
        <div
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1 rounded-full border border-white/20 bg-[#07172b]/90 p-1.5 shadow-2xl backdrop-blur-xl"
          style={{ transform: "translateX(-50%) translateZ(120px)" }}
        >
          {featuredUniversities.slice(0, 3).map((u, i) => (
            <button
              key={u.id}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold transition-all cursor-pointer ${
                activeTab === i
                  ? "bg-accent text-primary-deep shadow-md font-bold scale-105"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span>{u.mono}</span>
              <span className="hidden sm:inline">{u.countryName}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
