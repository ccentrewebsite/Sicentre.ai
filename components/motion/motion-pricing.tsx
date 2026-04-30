"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Studio Starter",
    tagline: "4 reels/mes",
    priceMonthly: 500,
    priceAnnual: 400,
    features: [
      "4 reels mensuales",
      "Edición cinematográfica",
      "Música + captions",
      "Formatos Instagram + TikTok",
      "Entrega en 5 días",
    ],
    highlight: false,
    enterprise: false,
  },
  {
    name: "Studio Business",
    tagline: "8 reels + fotografía",
    priceMonthly: 1500,
    priceAnnual: 1200,
    features: [
      "8 reels mensuales",
      "30 fotos de producto/lifestyle",
      "Edición IA avanzada",
      "Calendario editorial",
      "Stories y captions incluidos",
      "Soporte prioritario",
    ],
    highlight: true,
    enterprise: false,
  },
  {
    name: "Studio Enterprise",
    tagline: "Producción ilimitada",
    priceMonthly: 0,
    priceAnnual: 0,
    features: [
      "Producción sin límite",
      "Equipo dedicado",
      "Campañas multicanal",
      "Brand guidelines",
      "Dirección creativa",
      "Reportería con ROI",
    ],
    highlight: false,
    enterprise: true,
  },
];

export default function MotionPricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section
      id="planes-motion"
      className="py-24 md:py-32 px-6 md:px-10"
      style={{ background: "transparent" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-6xl font-bold text-white mb-8"
            style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
          >
            Planes Motion.
          </h2>

          <div className="inline-flex items-center gap-3 p-1.5 rounded-full bg-white/5 border border-white/10">
            <button
              onClick={() => setAnnual(false)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-200",
                !annual
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-600/25"
                  : "text-white/50 hover:text-white"
              )}
            >
              Mensual
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2",
                annual
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-600/25"
                  : "text-white/50 hover:text-white"
              )}
            >
              Anual
              <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 font-semibold">
                -20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative p-7 rounded-2xl backdrop-blur-xl transition-all duration-300",
                plan.highlight
                  ? "bg-orange-500/10 border border-orange-500/40 shadow-xl shadow-orange-500/10"
                  : "bg-violet-600/[0.06] border border-violet-600/20 hover:border-violet-500/30"
              )}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-orange-500 to-violet-600 text-white text-xs font-semibold">
                  Más popular
                </div>
              )}

              <div className="mb-4">
                <h3
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
                >
                  {plan.name}
                </h3>
                <p className="text-white/40 text-xs mt-1">{plan.tagline}</p>
              </div>

              <div className="flex items-end gap-1 mb-6">
                {plan.enterprise ? (
                  <span className="text-2xl font-bold text-white">Sur devis</span>
                ) : (
                  <>
                    <span className="text-4xl font-bold text-white">
                      ${annual ? plan.priceAnnual.toLocaleString("es-AR") : plan.priceMonthly.toLocaleString("es-AR")}
                    </span>
                    <span className="text-white/40 mb-1">/mes</span>
                  </>
                )}
              </div>

              <ul className="space-y-2.5 mb-7">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-white/65 text-sm">
                    <Check size={14} className={plan.highlight ? "text-orange-400 shrink-0" : "text-violet-400 shrink-0"} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="/contacto"
                className={cn(
                  "block text-center w-full py-3 rounded-full font-semibold text-sm transition-all duration-200",
                  plan.highlight
                    ? "bg-gradient-to-r from-orange-500 to-violet-600 text-white hover:opacity-90 shadow-lg"
                    : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                )}
              >
                {plan.enterprise ? "Contactar →" : `Empezar con ${plan.name}`}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
