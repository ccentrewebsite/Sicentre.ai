"use client";

import { LiquidButton } from "@/components/ui/liquid-glass-button";

export default function WebHero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 md:px-10 pt-24 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-xs font-semibold text-green-400 tracking-wide">
              Entrega garantizada en 72h
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-6xl md:text-8xl font-bold text-white leading-[0.95] mb-6"
            style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
          >
            Tu sitio web,{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-orange-400 bg-clip-text text-transparent">
              en 72 horas.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg lg:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Diseño 100% personalizado. Hosting, dominio y SSL incluidos.
            Sin templates, sin IA genérica.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="/contacto"
              className="inline-flex items-center px-8 py-4 rounded-full bg-violet-600 text-white font-semibold text-base hover:bg-violet-500 transition-all duration-200 shadow-xl shadow-violet-600/30 hover:-translate-y-0.5"
            >
              Empezar proyecto →
            </a>
            <LiquidButton
              size="xl"
              className="text-white border border-violet-500/30 rounded-full"
              onClick={() =>
                document.querySelector("#planes")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Ver planes
            </LiquidButton>
          </div>

          {/* Mini stats */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {["72h entrega", "100% custom", "SSL + hosting incluido"].map((stat) => (
              <div
                key={stat}
                className="px-4 py-2 rounded-full backdrop-blur-xl bg-violet-600/[0.06] border border-violet-600/20 text-sm text-white/70"
              >
                {stat}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
