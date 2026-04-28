"use client";

import { Play } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

const Waveform = () => (
  <div className="flex items-center justify-center gap-1 h-16">
    {Array.from({ length: 32 }).map((_, i) => (
      <div
        key={i}
        className="rounded-full animate-pulse"
        style={{
          width: "3px",
          height: `${20 + Math.sin(i * 0.8) * 16 + Math.random() * 12}px`,
          background: i % 2 === 0
            ? "rgba(124,58,237,0.8)"
            : "rgba(234,88,12,0.6)",
          animationDelay: `${i * 60}ms`,
          animationDuration: `${800 + (i % 5) * 200}ms`,
        }}
      />
    ))}
  </div>
);

export default function VozHero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      <div className="relative z-10 flex-1 flex items-center justify-center px-6 md:px-10 pt-24 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1
            className="text-4xl sm:text-6xl md:text-8xl font-bold text-white leading-[0.95] mb-6"
            style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
          >
            Tu negocio{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-orange-400 bg-clip-text text-transparent">
              atiende solo.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg lg:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Nunca se enferma. Nunca duerme. Nunca pide vacaciones.{" "}
            Nuestro agente de voz con IA atiende cada llamada, califica{" "}
            cada lead y agenda cada turno, las 24 horas, los 7 días.{" "}
            Solo, hace el trabajo de varios empleados. A una fracción{" "}
            del costo.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-violet-600 text-white font-semibold text-base hover:bg-violet-500 transition-all duration-200 shadow-xl shadow-violet-600/30 hover:-translate-y-0.5"
            >
              <Play size={16} fill="currentColor" />
              Escuchar demo
            </a>
            <LiquidButton
              size="xl"
              className="text-white border border-violet-500/30 rounded-full"
              onClick={() =>
                document.querySelector("#planes-voz")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Ver planes
            </LiquidButton>
          </div>

          {/* Waveform */}
          <div className="max-w-lg mx-auto px-4 py-6 rounded-2xl backdrop-blur-xl bg-violet-600/[0.06] border border-violet-600/20">
            <p className="text-white/30 text-xs mb-4 text-center">Agente de voz en vivo</p>
            <Waveform />
          </div>
        </div>
      </div>
    </section>
  );
}
