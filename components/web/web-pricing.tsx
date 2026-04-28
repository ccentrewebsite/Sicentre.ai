"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Plan Vitrina",
    price: 500,
    desc: "Presencia profesional online, lista en 72h.",
    features: [
      "Hasta 5 páginas",
      "Diseño 100% custom",
      "Hosting + dominio + SSL",
      "SEO base optimizado",
      "Panel de edición",
      "Integración WhatsApp",
      "Soporte 30 días",
    ],
    highlight: false,
    cta: "Quiero mi vitrina",
  },
  {
    name: "Plan E-commerce",
    price: 1000,
    desc: "Tienda online completa para vender desde el día 1.",
    features: [
      "Todo Plan Vitrina",
      "Tienda con pasarela de pago",
      "Gestión de productos",
      "SEO avanzado",
      "Blog integrado",
      "Google Analytics",
      "Soporte 90 días",
    ],
    highlight: true,
    cta: "Quiero mi tienda",
  },
];

export default function WebPricing() {
  return (
    <section
      id="planes"
      className="py-24 md:py-32 px-6 md:px-10"
      style={{ background: "#0D0B18" }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
          >
            Precios web.
          </h2>
          <p className="text-white/50 text-base">
            Precio fijo, sin sorpresas. Un pago único, su sitio para siempre.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                  Más completo
                </div>
              )}

              <h3
                className="text-2xl font-bold text-white mb-1"
                style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
              >
                {plan.name}
              </h3>
              <p className="text-white/40 text-sm mb-5">{plan.desc}</p>

              <div className="flex items-end gap-1.5 mb-1">
                <span className="text-sm text-white/40">desde</span>
                <span className="text-5xl font-bold text-white">${plan.price.toLocaleString("es-AR")}</span>
                <span className="text-white/40 mb-1.5">USD</span>
              </div>
              <p className="text-xs text-violet-400/70 mb-6">Pago único · Sin mensualidades</p>

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
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-white/25 text-xs mt-8">
          ¿Necesitás algo más específico? <a href="/contacto" className="text-violet-400 hover:text-violet-300">Hablemos →</a>
        </p>
      </div>
    </section>
  );
}
