"use client";

import { useState } from "react";
import { Check, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Plan Starter",
    priceMonthly: 500,
    priceAnnual: 400,
    features: [
      "Agente vocal 24/7",
      "Hasta 500 llamadas/mes",
      "Calificación de leads",
      "Resumen diario WhatsApp",
      "Horario personalizable",
      "Setup incluido",
    ],
    highlight: false,
  },
  {
    name: "Plan Business",
    priceMonthly: 1500,
    priceAnnual: 1200,
    features: [
      "Agente 24/7 sin límites",
      "Llamadas ilimitadas",
      "Calificación de leads",
      "Agenda automática",
      "Integración CRM",
      "Soporte prioritario",
    ],
    highlight: true,
  },
];

export default function VozPricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section
      id="planes-voz"
      className="py-24 md:py-32 px-6 md:px-10"
      style={{ background: "#0D0B18" }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-6xl font-bold text-white mb-8"
            style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
          >
            Planes Voz IA.
          </h2>

          {/* Toggle */}
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative p-8 rounded-2xl backdrop-blur-xl transition-all duration-300 group hover:-translate-y-1",
                plan.highlight
                  ? "bg-violet-600/10 border border-violet-500/40 shadow-xl shadow-violet-600/10"
                  : "bg-violet-600/[0.06] border border-violet-600/20 hover:border-violet-500/40"
              )}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-violet-600 to-orange-500 text-white text-xs font-semibold">
                  Más popular
                </div>
              )}
              <div className="flex items-center gap-2 mb-1">
                <Zap size={18} className="text-violet-400" />
                <h3
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
                >
                  {plan.name}
                </h3>
              </div>

              <div className="flex items-end gap-1 mb-6 mt-4">
                <span className="text-5xl font-bold text-white">
                  ${annual ? plan.priceAnnual.toLocaleString("es-AR") : plan.priceMonthly.toLocaleString("es-AR")}
                </span>
                <span className="text-white/40 mb-1.5">/mes</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-white/70 text-sm">
                    <Check size={16} className="text-violet-400 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="/contacto"
                className={cn(
                  "block text-center w-full py-3.5 rounded-full font-semibold text-sm transition-all duration-200",
                  plan.highlight
                    ? "bg-violet-600 text-white hover:bg-violet-500 shadow-lg shadow-violet-600/25"
                    : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                )}
              >
                Activar {plan.name} →
              </a>
            </div>
          ))}

          {/* ULTRA 360 / Enterprise mention */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-violet-600/10 to-orange-500/10 border border-orange-500/20">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold tracking-widest uppercase text-orange-400">Enterprise</span>
            </div>
            <h3
              className="text-2xl font-bold text-white mb-3"
              style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
            >
              ULTRA 360
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Voz IA + Sitio web + Content mensual. El paquete completo para escalar su negocio. Precio sur devis.
            </p>
            <ul className="space-y-2 mb-8 text-sm">
              {["Voz IA ilimitada", "Sitio web 15 páginas", "8 reels/mes", "Soporte prioritario"].map((f) => (
                <li key={f} className="flex items-center gap-3 text-white/60">
                  <Check size={14} className="text-orange-400 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="/precios"
              className="block text-center w-full py-3.5 rounded-full font-semibold text-sm bg-gradient-to-r from-violet-600 to-orange-500 text-white hover:opacity-90 transition-all duration-200"
            >
              Ver ULTRA 360 →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
