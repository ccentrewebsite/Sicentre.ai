"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingPlan {
  name: string;
  priceMonthly: number;
  priceAnnual: number;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
  badge?: string;
  subtitle?: string;
}

const plans: PricingPlan[] = [
  {
    name: "Website Starter",
    priceMonthly: 99,
    priceAnnual: 79,
    features: [
      "Hasta 5 páginas",
      "Hosting incluido",
      "SSL + dominio",
      "1.000 créditos/mes",
    ],
    cta: "Empezar →",
    href: "#contacto",
  },
  {
    name: "Website Business",
    priceMonthly: 199,
    priceAnnual: 139,
    features: [
      "Todo Starter",
      "SEO técnico",
      "Blog integrado",
      "Redes sociales",
      "3.000 créditos/mes",
    ],
    cta: "Empezar →",
    href: "#contacto",
  },
  {
    name: "Llamadas IA",
    priceMonthly: 399,
    priceAnnual: 319,
    features: [
      "Agente vocal 24/7",
      "Calificación de leads",
      "Agenda automática",
      "Soporte prioritario",
    ],
    cta: "Probar demo →",
    href: "#contacto",
  },
  {
    name: "Studio",
    priceMonthly: 199,
    priceAnnual: 139,
    features: [
      "4 reels/mes",
      "Fotografía mensual",
      "Content para redes",
      "Edición profesional",
    ],
    cta: "Ver trabajos →",
    href: "#portfolio",
  },
];

const ultraPlan: PricingPlan = {
  name: "ULTRA 360",
  priceMonthly: 699,
  priceAnnual: 549,
  badge: "MÁS POPULAR",
  subtitle: "TODOS los servicios combinados",
  features: [
    "Website Business",
    "Llamadas IA 24/7",
    "Studio Visual completo",
    "Soporte dedicado",
    "Estrategia mensual",
  ],
  cta: "Contactar ahora →",
  href: "#contacto",
  featured: true,
};

function PlanCard({
  plan,
  annual,
}: {
  plan: PricingPlan;
  annual: boolean;
}) {
  const price = annual ? plan.priceAnnual : plan.priceMonthly;

  return (
    <div
      className="group flex flex-col p-7 rounded-[20px] transition-all duration-300 hover:-translate-y-1"
      style={{
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        background: "rgba(124, 58, 237, 0.06)",
        border: "1px solid rgba(124, 58, 237, 0.2)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(234, 88, 12, 0.4)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(124, 58, 237, 0.2)";
      }}
    >
      <h3
        className="text-lg font-bold text-white mb-1"
        style={{ fontFamily: "'Clash Display', sans-serif" }}
      >
        {plan.name}
      </h3>
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-4xl font-bold text-white">
          ${price}
        </span>
        <span className="text-white/50 text-sm">/mes</span>
      </div>
      <ul className="flex flex-col gap-2.5 mb-8 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-white/70">
            <Check size={15} className="text-violet-400 mt-0.5 shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      <a
        href={plan.href}
        className="block text-center py-3 px-6 rounded-full text-sm font-semibold text-violet-300 border border-violet-500/40 hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-all duration-200"
      >
        {plan.cta}
      </a>
    </div>
  );
}

function UltraCard({ plan, annual }: { plan: PricingPlan; annual: boolean }) {
  const price = annual ? plan.priceAnnual : plan.priceMonthly;

  return (
    <div className="gradient-border relative p-px rounded-[20px] mt-6">
      <div
        className="relative rounded-[20px] p-8 md:p-10"
        style={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          background: "rgba(124, 58, 237, 0.1)",
        }}
      >
        {/* Grid layout */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold text-orange-400 bg-orange-500/15 border border-orange-500/30">
                {plan.badge}
              </span>
            </div>
            <h3
              className="text-3xl md:text-4xl font-bold text-white mb-1"
              style={{ fontFamily: "'Clash Display', sans-serif" }}
            >
              Plan ULTRA 360
            </h3>
            <p className="text-white/50 text-sm mb-6">{plan.subtitle}</p>
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-bold text-white">${price}</span>
              <span className="text-white/50">/mes</span>
              {annual && (
                <span className="ml-2 text-xs text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 rounded-full">
                  Ahorrás ${plan.priceMonthly - plan.priceAnnual}/mes
                </span>
              )}
            </div>
          </div>

          {/* Features */}
          <ul className="flex flex-col gap-3 flex-1">
            {plan.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 text-white/80"
              >
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-violet-500 to-orange-500 flex items-center justify-center shrink-0">
                  <Check size={11} className="text-white" strokeWidth={3} />
                </div>
                <span className="text-sm font-medium">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex-shrink-0">
            <a
              href={plan.href}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-white text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-600/30 whitespace-nowrap"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #EA580C)",
              }}
            >
              {plan.cta}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PricingSection() {
  const [annual, setAnnual] = useState(false);

  return (
    <section
      id="precios"
      className="relative py-24 overflow-hidden"
      style={{ background: "#0D0B18" }}
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 20% 80%, rgba(234,88,12,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-400/70 mb-4">
            Precios
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8"
            style={{ fontFamily: "'Clash Display', sans-serif" }}
          >
            Planes diseñados{" "}
            <span className="bg-gradient-to-r from-violet-400 to-orange-400 bg-clip-text text-transparent">
              para crecer.
            </span>
          </h2>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4">
            <span
              className={cn(
                "text-sm font-medium transition-colors",
                !annual ? "text-white" : "text-white/50"
              )}
            >
              Mensual
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className={cn(
                "relative w-12 h-6 rounded-full transition-all duration-300 outline-none",
                annual ? "bg-violet-600" : "bg-white/20"
              )}
              role="switch"
              aria-checked={annual}
            >
              <span
                className={cn(
                  "absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-all duration-300",
                  annual ? "translate-x-6" : "translate-x-0"
                )}
              />
            </button>
            <span
              className={cn(
                "text-sm font-medium transition-colors flex items-center gap-2",
                annual ? "text-white" : "text-white/50"
              )}
            >
              Anual
              <span className="text-xs font-bold text-orange-400 bg-orange-500/15 border border-orange-500/30 px-2 py-0.5 rounded-full">
                -20%
              </span>
            </span>
          </div>
        </div>

        {/* Standard plans grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} annual={annual} />
          ))}
        </div>

        {/* Ultra plan */}
        <UltraCard plan={ultraPlan} annual={annual} />
      </div>
    </section>
  );
}
