"use client";

import { useState } from "react";
import { HeroBackground } from "@/components/ui/hero-background";

function HablemosButton() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="/contacto"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-9 py-3.5 text-base md:text-lg font-bold tracking-tight text-white whitespace-nowrap transition-transform duration-200 hover:-translate-y-0.5"
      style={{
        background: "linear-gradient(135deg, #F97316 0%, #EA580C 50%, #C2410C 100%)",
        boxShadow:
          "0 14px 40px rgba(234,88,12,0.45), 0 0 0 1px rgba(255,255,255,0.15) inset, 0 -2px 8px rgba(0,0,0,0.25) inset",
      }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(120px circle at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.45), transparent 65%)`,
          mixBlendMode: "screen",
        }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-6 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)",
        }}
      />
      <span className="relative z-10">Hablemos →</span>
    </a>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-black">
      <HeroBackground />

      {/* Fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-72 z-[2] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* Scan lines — anchored to section left */}
      <div className="absolute pointer-events-none hidden md:block z-10" style={{ left: "4%", top: "50%", transform: "translateY(-50%)", opacity: 0.65 }}>
        <svg width="100" height="60" viewBox="0 0 64 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="scanGrad1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity="1" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="scanGrad2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity="1" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="scanGrad3" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity="1" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="0" y1="5"  x2="56" y2="5"  stroke="url(#scanGrad1)" strokeWidth="1.2" />
          <line x1="0" y1="17" x2="38" y2="17" stroke="url(#scanGrad2)" strokeWidth="1.2" />
          <line x1="0" y1="29" x2="22" y2="29" stroke="url(#scanGrad3)" strokeWidth="1.2" />
        </svg>
      </div>

      {/* ── HERO CONTENT — perfectly centered ── */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 md:px-10">
        <div className="max-w-4xl mx-auto text-center relative">

          <h1
            className="font-clash leading-[1.0] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.2rem, 6vw, 6rem)" }}
          >
            <span className="shimmer-hero-title">
              Su negocio en
            </span>
            <br />
            <span className="shimmer-text">piloto automático.</span>
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed px-2 md:px-0">
            Diseño web, automatización de llamadas con IA<br className="hidden sm:block" /> y producción visual premium, para América Latina.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">
            <button
              onClick={() =>
                document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-base md:text-lg font-semibold tracking-tight text-white/85 hover:text-white whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
              style={{
                background: "rgba(255,255,255,0.045)",
                border: "1px solid rgba(255,255,255,0.18)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              Ver servicios
            </button>
            <HablemosButton />
          </div>
        </div>
      </div>
    </section>
  );
}
