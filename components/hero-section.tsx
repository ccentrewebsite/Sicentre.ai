"use client";

import { HeroBackground } from "@/components/ui/hero-background";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full px-4 sm:px-0">
            <LiquidButton
              size="xxl"
              onClick={() =>
                document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-base font-semibold tracking-tight whitespace-nowrap text-white w-full sm:w-auto"
            >
              Ver servicios
            </LiquidButton>
            <LiquidButton
              size="xxl"
              onClick={() => window.location.href = "/contacto"}
              className="text-base font-semibold tracking-tight whitespace-nowrap text-white w-full sm:w-auto"
            >
              Hablemos
            </LiquidButton>
          </div>
        </div>
      </div>
    </section>
  );
}
