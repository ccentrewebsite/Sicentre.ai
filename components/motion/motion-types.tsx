"use client";

import { useState } from "react";
import { Building2, UtensilsCrossed, Camera, Sparkles, Wand2 } from "lucide-react";
import { cn } from "@/lib/utils";

const types = [
  {
    icon: Building2,
    title: "Cinematografía Inmobiliaria",
    tagline: "Property Film",
    description:
      "Producción audiovisual de alto impacto para propiedades. Cada frame diseñado para detonar el deseo de compra antes de la primera visita física.",
    specs: ["Drone 4K", "Steadicam", "Color Grading LUT", "Motion Stabilization", "Entrega 48h"],
  },
  {
    icon: UtensilsCrossed,
    title: "Contenido Gastronómico IA",
    tagline: "Food Film",
    description:
      "Reels y micro-documentales gastronómicos en slow motion y macro que convierten seguidores en reservas. IA generativa para texturas imposibles de ignorar.",
    specs: ["Slow Motion 120fps", "Macro Lens", "AI Enhancement", "Reels Optimizados", "Pack Mensual"],
  },
  {
    icon: Camera,
    title: "Fotografía Arquitectónica IA",
    tagline: "Arch Photo",
    description:
      "Fotografía potenciada por IA. Virtual staging, upscaling 4K y retoque fotorrealista. Renders que no parecen renders.",
    specs: ["Virtual Staging", "AI Upscale 4K", "HDR Fusion", "Retoque Fotorrealista"],
  },
  {
    icon: Sparkles,
    title: "Identidad Visual en Movimiento",
    tagline: "Motion Brand",
    description:
      "Sistema de identidad animada completo. Logo kinético, intros cinemáticos, templates de Stories y Reels. Una sola inversión, impacto permanente.",
    specs: ["Logo Animado", "Motion Graphics", "Templates Editables", "After Effects"],
  },
  {
    icon: Wand2,
    title: "Video IA Generativo",
    tagline: "AI Video",
    description:
      "Producción 100% IA para campañas sin presupuesto de rodaje. Kling, Runway y Sora para secuencias cinematográficas imposibles de filmar en el mundo real.",
    specs: ["Kling AI", "Runway Gen-3", "Sora", "Sin rodaje físico"],
  },
];

export default function MotionTypes() {
  const [active, setActive] = useState(0);
  const ActiveIcon = types[active].icon;

  return (
    <section className="py-24 md:py-32 px-6 md:px-10" style={{ background: "#0F0C1E" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <h2
            className="text-4xl md:text-6xl font-bold text-white"
            style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
          >
            ¿Qué producimos?
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            Cinco líneas de producción visual. Cada una pensada para un objetivo concreto de su marca.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-6">
          {/* List */}
          <div className="flex flex-col gap-3">
            {types.map((type, i) => {
              const Icon = type.icon;
              const isActive = active === i;
              return (
                <button
                  key={type.title}
                  onClick={() => setActive(i)}
                  className={cn(
                    "text-left p-5 rounded-2xl transition-all duration-300 cursor-pointer flex items-center gap-4 border",
                    isActive
                      ? "bg-orange-500/10 border-orange-500/40"
                      : "bg-white/[0.04] border-white/10 hover:border-white/25"
                  )}
                >
                  <span className="text-xs font-mono text-white/30 w-6 shrink-0 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors",
                      isActive ? "bg-orange-500/20 text-orange-400" : "bg-white/5 text-white/55"
                    )}
                  >
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div
                      className={cn("font-bold text-base leading-tight", isActive ? "text-white" : "text-white/85")}
                      style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
                    >
                      {type.title}
                    </div>
                    <div className="text-xs text-white/35 mt-0.5">{type.tagline}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div
            key={active}
            className="rounded-2xl p-8 md:p-10 border border-orange-500/30 bg-gradient-to-br from-orange-500/[0.06] to-violet-600/[0.04] transition-all duration-500 animate-in fade-in"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-orange-300 flex items-center justify-center">
                <ActiveIcon size={22} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-orange-300/80 font-semibold">
                  {types[active].tagline}
                </p>
                <h3
                  className="text-2xl md:text-3xl font-bold text-white leading-tight"
                  style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
                >
                  {types[active].title}
                </h3>
              </div>
            </div>

            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-7">
              {types[active].description}
            </p>

            <div className="flex flex-wrap gap-2">
              {types[active].specs.map((spec) => (
                <span
                  key={spec}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/[0.06] border border-white/10 text-white/75 tracking-wide"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
