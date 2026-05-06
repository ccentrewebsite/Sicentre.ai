"use client";

import { useState } from "react";
import { Check, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

type Tier = "starter" | "business" | "ultra";

interface Plan {
  name: string;
  shortName: string;
  tagline?: string;
  priceMonthly: number;
  priceAnnual: number;
  features: string[];
  tier: Tier;
}

const plans: Plan[] = [
  {
    name: "Plan Starter",
    shortName: "Starter",
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
    tier: "starter",
  },
  {
    name: "Plan Business",
    shortName: "Business",
    priceMonthly: 1500,
    priceAnnual: 1200,
    features: [
      "Agente 24/7 sin límites",
      "Llamadas ilimitadas",
      "Calificación avanzada",
      "Agenda automática",
      "Integración CRM",
      "Soporte prioritario",
    ],
    tier: "business",
  },
  {
    name: "Plan ULTRA",
    shortName: "ULTRA",
    tagline: "Voz IA + Web + Studio",
    priceMonthly: 3000,
    priceAnnual: 2400,
    features: [
      "Voz IA 24/7 ilimitada",
      "Sitio web a medida",
      "Studio mensual de contenido",
      "Director de cuenta dedicado",
      "Integraciones a medida",
    ],
    tier: "ultra",
  },
];

export default function VozPricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section
      id="planes-voz"
      className="py-24 md:py-32 px-6 md:px-10"
      style={{ background: "transparent" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-6xl font-bold text-white mb-8"
            style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
          >
            Planes Voz IA.
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} annual={annual} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Card ─────────────────────────────────────────────────── */
function PlanCard({ plan, annual }: { plan: Plan; annual: boolean }) {
  const isBusiness = plan.tier === "business";
  const isUltra = plan.tier === "ultra";

  return (
    <div
      className={cn(
        "relative flex flex-col p-8 rounded-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1",
        isUltra
          ? "border border-orange-500/40 shadow-xl shadow-fuchsia-500/15"
          : isBusiness
          ? "bg-white/[0.07] border border-white/30 shadow-xl shadow-white/[0.04]"
          : "bg-white/[0.035] border border-white/10 hover:border-white/20"
      )}
      style={
        isUltra
          ? {
              background:
                "linear-gradient(135deg, rgba(124,58,237,0.16) 0%, rgba(217,70,239,0.10) 50%, rgba(234,88,12,0.16) 100%)",
            }
          : undefined
      }
    >
      {/* Badge */}
      {isBusiness && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white/15 border border-white/35 text-white text-[11px] font-bold tracking-wide uppercase backdrop-blur-md">
          Más popular
        </div>
      )}
      {isUltra && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-[11px] font-bold tracking-wide uppercase"
          style={{
            background: "linear-gradient(to right, #7C3AED, #D946EF, #F97316)",
            boxShadow: "0 6px 18px rgba(217,70,239,0.35)",
          }}
        >
          Mejor valor
        </div>
      )}

      {/* Title */}
      <div className="flex items-center gap-2 mb-1">
        {isUltra ? (
          <Zap size={18} fill="#FB923C" style={{ color: "#FB923C" }} />
        ) : (
          <Zap size={18} className={isBusiness ? "text-white/80" : "text-violet-400"} />
        )}
        <h3
          className={cn(
            "text-2xl font-bold",
            isUltra ? "text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-300 to-orange-300" : "text-white"
          )}
          style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
        >
          {plan.name}
        </h3>
      </div>
      {plan.tagline && (
        <p className="text-white/55 text-xs mt-1">{plan.tagline}</p>
      )}

      {/* Price */}
      <div className="mt-5 mb-6">
        <span className="block text-[10px] uppercase tracking-[0.22em] font-bold text-white/40 mb-1">
          Desde
        </span>
        <div className="flex items-end gap-1">
          <span className="text-5xl font-bold text-white font-clash tabular-nums leading-none">
            ${annual ? plan.priceAnnual.toLocaleString("es-AR") : plan.priceMonthly.toLocaleString("es-AR")}
          </span>
          <span className="text-white/45 mb-1.5 text-sm">/mes</span>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-white/72 text-sm">
            <Check
              size={16}
              className={cn(
                "shrink-0 mt-0.5",
                isUltra ? "text-orange-300" : isBusiness ? "text-white/85" : "text-violet-400"
              )}
            />
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="/contacto"
        className={cn(
          "block text-center w-full py-3.5 rounded-full font-semibold text-sm transition-all duration-200",
          isUltra
            ? "text-white hover:-translate-y-0.5"
            : isBusiness
            ? "bg-white/10 text-white border-2 border-white/45 hover:bg-white/15 hover:border-white/60"
            : "bg-white/5 text-white border border-white/12 hover:bg-white/10 hover:border-white/25"
        )}
        style={
          isUltra
            ? {
                background: "linear-gradient(to right, #7C3AED, #D946EF, #F97316)",
                boxShadow: "0 10px 28px rgba(217,70,239,0.32)",
              }
            : undefined
        }
      >
        Elegir {plan.shortName} →
      </a>
    </div>
  );
}
