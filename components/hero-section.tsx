"use client";

import { HeroBackground } from "@/components/ui/hero-background";
import { LiquidGlassNavButton } from "@/components/ui/liquid-glass-nav";
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

      {/* ── HERO CONTENT — perfectly centered ── */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center">

          <h1
            className="font-clash leading-[1.0] tracking-tight mb-6"
            style={{ fontSize: "clamp(3rem, 6vw, 6rem)" }}
          >
            <span className="shimmer-hero-title">
              Su negocio en
            </span>
            <br />
            <span className="shimmer-text">piloto automático.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed">
            Diseño web, automatización de llamadas con IA<br />y producción visual premium, para América Latina.
          </p>

          <div className="flex items-center justify-center gap-4">
            <LiquidButton
              size="xxl"
              onClick={() =>
                document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-base font-semibold tracking-tight whitespace-nowrap text-white"
            >
              Ver servicios
            </LiquidButton>
            <LiquidButton
              size="xxl"
              onClick={() => window.location.href = "/contacto"}
              className="text-base font-semibold tracking-tight whitespace-nowrap text-white"
            >
              Hablemos
            </LiquidButton>
          </div>
        </div>
      </div>
    </section>
  );
}
