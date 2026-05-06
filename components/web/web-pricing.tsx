"use client";

import { Check, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

type Tier = "starter" | "business" | "ultra";

interface Plan {
  name: string;
  shortName: string;
  desc: string;
  price: number;
  priceSuffix: string;
  priceFootnote: string;
  features: string[];
  tier: Tier;
}

const plans: Plan[] = [
  {
    name: "Plan Vitrina",
    shortName: "Vitrina",
    desc: "Presencia profesional online, a medida.",
    price: 500,
    priceSuffix: "USD",
    priceFootnote: "Pago único · Sin mensualidades",
    features: [
      "Hasta 5 páginas",
      "Diseño 100% custom",
      "Hosting + dominio + SSL",
      "SEO base optimizado",
      "Panel de edición",
      "Integración WhatsApp",
      "Soporte 30 días",
    ],
    tier: "starter",
  },
  {
    name: "Plan E-commerce",
    shortName: "E-commerce",
    desc: "Tienda online completa para vender desde el día 1.",
    price: 1000,
    priceSuffix: "USD",
    priceFootnote: "Pago único · Sin mensualidades",
    features: [
      "Todo Plan Vitrina",
      "Tienda con pasarela de pago",
      "Gestión de productos",
      "SEO avanzado",
      "Blog integrado",
      "Google Analytics",
      "Soporte 90 días",
    ],
    tier: "business",
  },
  {
    name: "Plan ULTRA",
    shortName: "ULTRA",
    desc: "Web + Voz IA + Studio mensual. Su operación digital completa.",
    price: 3000,
    priceSuffix: "/mes",
    priceFootnote: "Suscripción mensual · Cancele cuando quiera",
    features: [
      "Sitio web a medida",
      "Voz IA 24/7 incluida",
      "Studio mensual de contenido",
      "Director de cuenta dedicado",
      "Integraciones a medida",
    ],
    tier: "ultra",
  },
];

export default function WebPricing() {
  return (
    <section
      id="planes"
      className="py-24 md:py-32 px-6 md:px-10"
      style={{ background: "transparent" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
          >
            Precios web.
          </h2>
          <p className="text-white/55 text-base">
            Vitrina y E-commerce son pago único. ULTRA combina su web con todos los servicios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>

        <p className="text-center text-white/30 text-xs mt-8">
          ¿Necesitás algo más específico?{" "}
          <a href="/contacto" className="text-violet-400 hover:text-violet-300">
            Hablemos →
          </a>
        </p>
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
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

      <div className="flex items-center gap-2 mb-1">
        {isUltra && <Zap size={18} fill="#FB923C" style={{ color: "#FB923C" }} />}
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
      <p className="text-white/45 text-sm mb-5">{plan.desc}</p>

      <div className="mb-1">
        <span className="block text-[10px] uppercase tracking-[0.22em] font-bold text-white/40 mb-1">
          Desde
        </span>
        <div className="flex items-end gap-1.5">
          <span className="text-5xl font-bold text-white font-clash tabular-nums leading-none">
            ${plan.price.toLocaleString("es-AR")}
          </span>
          <span className="text-white/45 mb-1.5 text-sm">{plan.priceSuffix}</span>
        </div>
      </div>
      <p
        className={cn(
          "text-xs mb-6",
          isUltra ? "text-orange-300/70" : isBusiness ? "text-white/55" : "text-violet-400/70"
        )}
      >
        {plan.priceFootnote}
      </p>

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
