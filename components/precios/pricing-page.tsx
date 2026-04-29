"use client";

import { useState, useRef, useEffect } from "react";
import { Check, ChevronDown, Star, Zap, Globe, Mic, Film, Sparkles, Clock, ShieldCheck, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import PricingComparison, { type ComparisonColumn, type ComparisonRow } from "./pricing-comparison";

/* ─── Header commitments band — liquid glass strip ───────────── */
const commitments = [
  { icon: ShieldCheck, label: "Sin permanencia" },
  { icon: Clock,       label: "Respuesta en 24 horas" },
  { icon: Sparkles,    label: "100% a medida" },
  { icon: Layers,      label: "Pago único disponible" },
];

function CommitmentsBar() {
  return (
    <div className="flex justify-center mb-8">
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-0 max-w-3xl w-full rounded-2xl overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.10)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.25)",
        }}
      >
        {commitments.map((c, i) => {
          const Icon = c.icon;
          return (
            <div
              key={c.label}
              className={cn(
                "flex items-center justify-center gap-2.5 px-4 py-3.5",
                i % 2 === 1 ? "border-l border-white/[0.08]" : "",
                i >= 2 ? "border-t border-white/[0.08] md:border-t-0" : "",
                i > 0 && i < 4 ? "md:border-l md:border-white/[0.08]" : "",
              )}
            >
              <span
                className="inline-flex items-center justify-center w-6 h-6 rounded-full shrink-0"
                style={{
                  background: "rgba(124,58,237,0.20)",
                  border: "1px solid rgba(167,139,250,0.40)",
                }}
              >
                <Icon size={12} className="text-violet-200" strokeWidth={2.4} />
              </span>
              <span className="text-white/85 text-xs md:text-sm font-semibold whitespace-nowrap">
                {c.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Comparison data ───────────────────────────────────────── */
const webComparisonCols: ComparisonColumn[] = [
  { name: "Vitrina" },
  { name: "E-commerce", highlighted: true },
];
const webComparisonRows: ComparisonRow[] = [
  { feature: "Diseño 100% personalizado",          values: [true, true] },
  { feature: "Hosting + dominio + SSL",            values: [true, true] },
  { feature: "Modificaciones por WhatsApp",        values: [true, true] },
  { feature: "Páginas incluidas",                  values: ["Hasta 5", "Ilimitadas"] },
  { feature: "Tienda online completa",             values: [false, true] },
  { feature: "Productos en catálogo",              values: [false, "Ilimitados"] },
  { feature: "Pasarela de pago",                   values: [false, true] },
  { feature: "Gestión de stock",                   values: [false, true] },
  { feature: "SEO básico (estructura, meta)",      values: [true, true] },
  { feature: "SEO avanzado (schema, ficha local)", values: [false, true] },
  { feature: "Google Analytics + Search Console",  values: [true, true] },
  { feature: "Integración WhatsApp Business",      values: [true, true] },
  { feature: "Soporte post-entrega",               values: ["30 días", "90 días"] },
];

const vozComparisonCols: ComparisonColumn[] = [
  { name: "Starter" },
  { name: "Business", highlighted: true },
];
const vozComparisonRows: ComparisonRow[] = [
  { feature: "Configuración a medida del agente",      values: [true, true] },
  { feature: "Voz natural en español rioplatense",     values: [true, true] },
  { feature: "Voz clonada personalizada",              values: [false, true] },
  { feature: "Llamadas mensuales",                     values: ["500", "Ilimitadas"] },
  { feature: "Calificación automática de leads",       values: [false, true] },
  { feature: "Agenda de turnos en tiempo real",        values: [false, true] },
  { feature: "Integración Google Calendar",            values: [true, true] },
  { feature: "CRM automático",                         values: ["Google Sheets", "Completo"] },
  { feature: "Reportes",                               values: ["Mensual", "Semanal"] },
  { feature: "Soporte",                                values: ["WhatsApp", "Prioritario 24/7"] },
];

const studioComparisonCols: ComparisonColumn[] = [
  { name: "Starter" },
  { name: "Business", highlighted: true },
];
const studioComparisonRows: ComparisonRow[] = [
  { feature: "Reels mensuales",                        values: [4, 8] },
  { feature: "Fotos de producto / lifestyle",          values: [10, 30] },
  { feature: "Caption + hashtags optimizados",         values: [true, true] },
  { feature: "Calendario editorial",                   values: [false, true] },
  { feature: "Estrategia de contenido mensual",        values: [false, true] },
  { feature: "Color grading cinematográfico",          values: [false, true] },
  { feature: "Drone 4K",                               values: [false, "A medida"] },
  { feature: "Virtual staging IA",                     values: [false, "A medida"] },
  { feature: "Revisiones por entrega",                 values: ["1", "Ilimitadas"] },
];

/* ─── Plan data ─────────────────────────────────────────────── */
const webPlans = [
  {
    id: "vitrina",
    name: "Web Vitrina",
    tag: "Pago único",
    priceMonthly: 500,
    priceAnnual: 500,
    oneTime: true,
    description: "El sitio que su negocio necesita para existir online.",
    cta: "Empezar →",
    href: "/contacto",
    color: "#7C3AED",
    features: [
      "Diseño a medida",
      "Hasta 5 páginas",
      "Hosting + dominio + SSL",
      "Modificaciones vía WhatsApp",
      "Google Analytics",
      "SEO básico",
      "Integración WhatsApp",
    ],
  },
  {
    id: "ecommerce",
    name: "Web E-commerce",
    tag: "Pago único",
    priceMonthly: 1000,
    priceAnnual: 1000,
    oneTime: true,
    description: "Su tienda online completa, lista para vender desde el día 1.",
    cta: "Empezar →",
    href: "/contacto",
    color: "#7C3AED",
    features: [
      "Todo lo del plan Vitrina",
      "Tienda online completa",
      "Productos ilimitados",
      "Pasarela de pago",
      "Gestión de stock",
      "SEO avanzado",
      "Soporte 90 días",
    ],
  },
];

const vozPlans = [
  {
    id: "voz-starter",
    name: "Voz IA Starter",
    tag: "/mes",
    priceMonthly: 500,
    priceAnnual: 400,
    oneTime: false,
    description: "Un agente de voz inteligente para empezar a automatizar.",
    cta: "Activar →",
    href: "/contacto",
    color: "#7C3AED",
    features: [
      "Agente básico configurado",
      "Configuración incluida",
      "Horario de atención personalizable",
      "Notificaciones por WhatsApp",
      "Hasta 500 llamadas/mes",
      "Panel de resumen mensual",
    ],
  },
  {
    id: "voz-business",
    name: "Voz IA Business",
    tag: "/mes",
    priceMonthly: 1500,
    priceAnnual: 1200,
    oneTime: false,
    description: "Cobertura total: su negocio atiende solo, las 24 horas.",
    cta: "Activar →",
    href: "/contacto",
    color: "#7C3AED",
    popular: true,
    features: [
      "Agente 24/7 sin límites",
      "Llamadas ilimitadas",
      "Calificación de leads",
      "Agenda automática",
      "Integración CRM",
      "Soporte prioritario",
      "Dashboard en tiempo real",
    ],
  },
  {
    id: "voz-enterprise",
    name: "Voz IA Enterprise",
    tag: "A consultar",
    priceMonthly: 0,
    priceAnnual: 0,
    oneTime: false,
    enterprise: true,
    description: "Solución personalizada para grandes operaciones.",
    cta: "Contactar →",
    href: "/contacto",
    color: "#EA580C",
    features: [
      "Agentes múltiples",
      "Integración sistemas propios",
      "SLA garantizado",
      "Soporte dedicado",
      "Formación del equipo",
      "Reportería avanzada",
    ],
  },
];

const studioPlans = [
  {
    id: "studio-starter",
    name: "Studio Starter",
    tag: "/mes",
    priceMonthly: 500,
    priceAnnual: 400,
    oneTime: false,
    description: "Contenido mensual esencial para mantener su presencia activa.",
    cta: "Empezar →",
    href: "/contacto",
    color: "#EA580C",
    features: [
      "4 reels/mes",
      "10 fotos de producto",
      "Caption + hashtags",
      "1 revisión por entrega",
      "Formato para todas las redes",
    ],
  },
  {
    id: "studio-business",
    name: "Studio Business",
    tag: "/mes",
    priceMonthly: 1500,
    priceAnnual: 1200,
    oneTime: false,
    description: "Producción completa para dominar su nicho en redes.",
    cta: "Empezar →",
    href: "/contacto",
    color: "#EA580C",
    popular: true,
    features: [
      "8 reels/mes",
      "30 fotos de producto",
      "Estrategia de contenido",
      "Calendario editorial",
      "IA generativa avanzada",
      "Revisiones ilimitadas",
      "Story planning incluido",
    ],
  },
  {
    id: "studio-enterprise",
    name: "Studio Enterprise",
    tag: "A consultar",
    priceMonthly: 0,
    priceAnnual: 0,
    oneTime: false,
    enterprise: true,
    description: "Producción de nivel internacional a escala.",
    cta: "Contactar →",
    href: "/contacto",
    color: "#EA580C",
    features: [
      "Producción sin límite",
      "Equipo dedicado",
      "Campañas multicanal",
      "Brand guidelines",
      "Dirección creativa",
      "Reportería con ROI",
    ],
  },
];

/* ─── FAQ data ──────────────────────────────────────────────── */
const faqs = [
  {
    q: "¿Los precios son realmente sin costo mensual para los sitios web?",
    a: "Sí. Los planes Web Vitrina ($500) y Web E-commerce ($1.000) son pagos únicos. El sitio es suyo para siempre. Solo paga el hosting de renovación anual (~$60/año) a partir del segundo año.",
  },
  {
    q: "¿Pueden confiar en una agencia tan nueva?",
    a: "Entendemos la duda. Por eso trabajamos con contratos claros, entrega por etapas y pago parcial al inicio. Puede ver mockups antes de pagar el saldo. Además ofrecemos garantía de satisfacción en 30 días.",
  },
  {
    q: "¿Es complicado configurar el agente de voz?",
    a: "Para nada. Nosotros hacemos todo el trabajo. Le hacemos un cuestionario de 20 minutos, en 5 días hábiles su agente está activo y en su número actual. Cero técnico de su parte.",
  },
  {
    q: "¿Cuánto tiempo tarda en verse resultados?",
    a: "El sitio web se entrega rápido. El agente de voz en 5-7 días. El contenido del mes 1 está listo en 7 días. Resultados medibles (más tráfico, más llamadas, más ventas) se ven a partir del mes 2.",
  },
  {
    q: "¿Puedo cancelar los servicios mensuales cuando quiera?",
    a: "Sí, con 30 días de aviso. Sin penalidades ni letra chica. Si no ve resultados, le ayudamos a encontrar el porqué antes de cancelar.",
  },
];

/* ─── Plan card component ────────────────────────────────────── */
type Plan = {
  id: string;
  name: string;
  tag: string;
  priceMonthly: number;
  priceAnnual: number;
  oneTime: boolean;
  description: string;
  cta: string;
  href: string;
  color: string;
  popular?: boolean;
  enterprise?: boolean;
  features: string[];
};

function PlanCard({
  plan,
  annual,
  visible,
  delay,
}: {
  plan: Plan;
  annual: boolean;
  visible: boolean;
  delay: number;
}) {
  const price = annual ? plan.priceAnnual : plan.priceMonthly;
  const isEnterprise = plan.enterprise;

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl p-6 transition-all duration-300",
        plan.popular
          ? "gradient-border shadow-2xl shadow-violet-600/15"
          : "bg-white/[0.10] border border-white/35 hover:border-white/60 hover:bg-white/[0.13]",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-violet-600 to-orange-500 text-white text-xs font-bold whitespace-nowrap shadow-lg shadow-violet-600/30">
          Más popular
        </div>
      )}

      <div className="mb-1">
        <span
          className="text-xs font-semibold uppercase tracking-widest"
          style={{ color: plan.color + "aa" }}
        >
          {plan.tag}
        </span>
      </div>

      <h3 className="text-xl font-bold text-white mb-2 font-clash">{plan.name}</h3>
      <p className="text-white/50 text-sm mb-5 leading-relaxed">{plan.description}</p>

      {/* Price */}
      <div className="mb-6">
        {isEnterprise ? (
          <p className="text-2xl font-bold text-white font-clash">A consultar</p>
        ) : (
          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40 mb-1">
              Desde
            </span>
            <div className="flex items-end gap-1.5">
              <span className="text-4xl font-bold text-white font-clash leading-none">${price}</span>
              <span className="text-white/45 text-sm mb-1">
                {plan.oneTime ? " USD pago único" : "/mes"}
              </span>
            </div>
          </div>
        )}
        {annual && !plan.oneTime && !isEnterprise && (
          <p className="text-green-400 text-xs mt-2 font-medium">
            Ahorra ${(plan.priceMonthly - plan.priceAnnual) * 12}/año
          </p>
        )}
      </div>

      <ul className="flex flex-col gap-2.5 mb-8 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-white/70">
            <Check
              size={14}
              className="shrink-0 mt-0.5"
              style={{ color: plan.color }}
            />
            {f}
          </li>
        ))}
      </ul>

      <a
        href={plan.href}
        className={cn(
          "block text-center w-full py-3 rounded-full font-semibold text-sm transition-all duration-200",
          plan.popular
            ? "bg-gradient-to-r from-violet-600 to-orange-500 text-white hover:opacity-90 shadow-lg shadow-violet-600/25"
            : "bg-white/6 text-white hover:bg-white/10 border border-white/10"
        )}
      >
        {plan.cta}
      </a>
    </div>
  );
}

/* ─── FAQ item ───────────────────────────────────────────────── */
function FaqItem({ faq }: { faq: typeof faqs[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/[0.07]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-white/80 group-hover:text-white font-medium transition-colors pr-4">
          {faq.q}
        </span>
        <ChevronDown
          size={18}
          className={cn(
            "text-white/40 shrink-0 transition-transform duration-300",
            open && "rotate-180 text-violet-400"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-52 pb-5" : "max-h-0"
        )}
      >
        <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
      </div>
    </div>
  );
}

/* ─── Service title header — sub to the page H1 ──────────────── */
function ServiceTitleHeader({
  serviceTitle,
  marketingHook,
}: {
  serviceTitle: React.ReactNode;
  marketingHook: string;
}) {
  return (
    <div className="text-center mb-10 md:mb-12">
      <h2
        className="font-clash font-bold text-white leading-[1] tracking-tight mb-4"
        style={{ fontSize: "clamp(1.85rem, 4vw, 3.2rem)" }}
      >
        {serviceTitle}
      </h2>
      <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
        {marketingHook}
      </p>
    </div>
  );
}

/* ─── Independent monthly/annual toggle ──────────────────────── */
function BillingToggle({
  annual,
  setAnnual,
}: {
  annual: boolean;
  setAnnual: (v: boolean) => void;
}) {
  return (
    <div className="flex justify-center mb-10 md:mb-12">
      <div className="inline-flex items-center gap-2 p-1.5 rounded-full bg-white/5 border border-white/10">
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
  );
}

/* ─── Hero comparator: à la carte vs ULTRA ───────────────────── */
type CompareService = {
  id: string;
  label: string;
  price: number;
  suffix: string;
  oneTime?: boolean;
  icon: typeof Globe;
  accent: string;
  accentSoft: string;
};

const COMPARE_SERVICES: CompareService[] = [
  {
    id: "voz",
    label: "Voz Business",
    price: 1500,
    suffix: "/mes",
    icon: Mic,
    accent: "#EA580C",
    accentSoft: "rgba(234,88,12,0.18)",
  },
  {
    id: "studio",
    label: "Studio Business",
    price: 1500,
    suffix: "/mes",
    icon: Film,
    accent: "#A78BFA",
    accentSoft: "rgba(167,139,250,0.18)",
  },
  {
    id: "web",
    label: "Web E-commerce",
    price: 1000,
    suffix: " único",
    oneTime: true,
    icon: Globe,
    accent: "#7C3AED",
    accentSoft: "rgba(124,58,237,0.18)",
  },
];

function HeroComparator() {
  const [selected, setSelected] = useState<string[]>(["voz", "studio", "web"]);
  const toggle = (id: string) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  const picked = COMPARE_SERVICES.filter((s) => selected.includes(s.id));
  const monthly = picked.filter((s) => !s.oneTime).reduce((a, b) => a + b.price, 0);
  const oneTime = picked.filter((s) => s.oneTime).reduce((a, b) => a + b.price, 0);

  const ultraMonthly = 3000;
  const monthlyDelta = monthly - ultraMonthly;
  const allSelected = selected.length === COMPARE_SERVICES.length;

  return (
    <div className="relative mt-9 md:mt-11 pt-8 md:pt-10 border-t border-white/10">
      <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/45 mb-5 text-center">
        À la carta · vs · Plan ULTRA
      </p>

      {/* Service chips */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {COMPARE_SERVICES.map((s) => {
          const active = selected.includes(s.id);
          const Icon = s.icon;
          return (
            <button
              key={s.id}
              onClick={() => toggle(s.id)}
              className={cn(
                "inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 select-none",
                active ? "scale-100" : "scale-[0.97]"
              )}
              style={{
                background: active ? s.accentSoft : "rgba(255,255,255,0.05)",
                border: `1px solid ${active ? s.accent + "88" : "rgba(255,255,255,0.10)"}`,
                color: active ? "#fff" : "rgba(255,255,255,0.55)",
                boxShadow: active ? `0 0 18px ${s.accentSoft}` : "none",
              }}
              aria-pressed={active}
            >
              <Icon size={14} style={{ color: active ? s.accent : "rgba(255,255,255,0.45)" }} strokeWidth={2.2} />
              <span>{s.label}</span>
              <span
                className="text-[10px] tabular-nums"
                style={{ color: active ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.35)" }}
              >
                ${s.price.toLocaleString("es-AR")}{s.suffix}
              </span>
            </button>
          );
        })}
      </div>

      {/* Comparison panels */}
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-stretch gap-3 max-w-3xl mx-auto">
        {/* Left: cumulated */}
        <div
          className="rounded-2xl p-5 text-left"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.10)",
          }}
        >
          <p className="text-[10px] uppercase tracking-[0.18em] text-white/40 mb-2 font-semibold">
            Su cumulado a la carta
          </p>
          {selected.length === 0 ? (
            <p className="text-white/40 text-sm">Active los servicios para ver el total.</p>
          ) : (
            <>
              <div className="flex items-baseline gap-1.5">
                <span className="text-[11px] text-white/45 font-medium">desde</span>
                <span className="font-bold text-white font-clash leading-none tabular-nums" style={{ fontSize: "clamp(1.7rem, 4.2vw, 2.4rem)" }}>
                  ${monthly.toLocaleString("es-AR")}
                </span>
                <span className="text-white/55 text-sm">/mes</span>
              </div>
              {oneTime > 0 && (
                <p className="text-white/55 text-xs mt-1.5">
                  + ${oneTime.toLocaleString("es-AR")} pago único
                </p>
              )}
            </>
          )}
        </div>

        {/* Middle: vs */}
        <div className="flex items-center justify-center px-2 sm:px-1">
          <span
            className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 px-3 py-1.5 rounded-full"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            vs
          </span>
        </div>

        {/* Right: ULTRA */}
        <div
          className="relative rounded-2xl p-5 text-left overflow-hidden gradient-border"
          style={{
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.16) 0%, rgba(234,88,12,0.10) 100%)",
          }}
        >
          <div className="flex items-center gap-1.5 mb-2">
            <Zap size={12} fill="#FB923C" style={{ color: "#FB923C" }} />
            <p className="text-[10px] uppercase tracking-[0.18em] font-bold" style={{ color: "#FB923C" }}>
              Plan ULTRA · todo incluido
            </p>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-[11px] text-white/55 font-medium">desde</span>
            <span className="font-bold text-white font-clash leading-none tabular-nums" style={{ fontSize: "clamp(1.7rem, 4.2vw, 2.4rem)" }}>
              ${ultraMonthly.toLocaleString("es-AR")}
            </span>
            <span className="text-white/65 text-sm">/mes</span>
          </div>
          <p className="text-white/60 text-xs mt-1.5">Web + Voz IA 24/7 + Studio en uno solo.</p>
        </div>
      </div>

      {/* Saving callout when all selected */}
      {allSelected && (
        <p className="text-center mt-4 text-xs font-semibold" style={{ color: "#FB923C" }}>
          ✦ Mismo costo mensual, sitio web e integración total incluidos. Ahorre ${oneTime.toLocaleString("es-AR")} de inversión inicial.
        </p>
      )}
      {!allSelected && monthlyDelta > 0 && (
        <p className="text-center mt-4 text-xs font-medium text-white/55">
          Pague ${monthlyDelta.toLocaleString("es-AR")}/mes menos con ULTRA y obtenga el resto incluido.
        </p>
      )}
    </div>
  );
}

/* ─── Quick-jump tabs under the page H1 ──────────────────────── */
const sectionTabs = [
  { id: "planes-web",    label: "Sitios Web" },
  { id: "planes-voz",    label: "Agentes de Voz" },
  { id: "planes-studio", label: "Creación Visual" },
];

function SectionTabs() {
  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="flex justify-center">
      <div
        className="inline-flex items-center gap-2 p-1.5 rounded-full max-w-full overflow-x-auto scroll-hide"
        style={{
          background: "rgba(255,255,255,0.045)",
          border: "1px solid rgba(255,255,255,0.10)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        {sectionTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleClick(tab.id)}
            className="cursor-pointer whitespace-nowrap px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-semibold text-white/70 hover:text-white hover:bg-white/[0.12] hover:scale-[1.06] hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(124,58,237,0.35)] transition-all duration-200 ease-out"
          >
            {tab.label}
          </button>
        ))}
        <button
          onClick={() => handleClick("planes-ultra")}
          className="animate-ultra-pulse cursor-pointer whitespace-nowrap px-5 md:px-6 py-2.5 rounded-full text-sm md:text-base font-extrabold tracking-wide text-white bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-500 hover:scale-[1.08] hover:-translate-y-0.5 transition-transform duration-200 ease-out"
        >
          Plan ULTRA
        </button>
      </div>
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────── */
export default function PricingPage() {
  const [vozAnnual, setVozAnnual] = useState(false);
  const [studioAnnual, setStudioAnnual] = useState(false);
  const webRef = useRef<HTMLDivElement>(null);
  const vozRef = useRef<HTMLDivElement>(null);
  const studioRef = useRef<HTMLDivElement>(null);
  const ultraRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const [webVisible, setWebVisible] = useState(false);
  const [vozVisible, setVozVisible] = useState(false);
  const [studioVisible, setStudioVisible] = useState(false);
  const [ultraVisible, setUltraVisible] = useState(false);
  const [faqVisible, setFaqVisible] = useState(false);

  useEffect(() => {
    const makeObserver = (
      ref: React.RefObject<HTMLDivElement | null>,
      setter: (v: boolean) => void
    ) => {
      const observer = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) setter(true);
        },
        { threshold: 0.05 }
      );
      if (ref.current) observer.observe(ref.current);
      return observer;
    };

    const o1 = makeObserver(webRef, setWebVisible);
    const o2 = makeObserver(vozRef, setVozVisible);
    const o3 = makeObserver(studioRef, setStudioVisible);
    const o4 = makeObserver(ultraRef, setUltraVisible);
    const o5 = makeObserver(faqRef, setFaqVisible);
    return () => {
      o1.disconnect();
      o2.disconnect();
      o3.disconnect();
      o4.disconnect();
      o5.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero — wrapped in a horizontal liquid-glass card to clearly
          separate the page title from the sections below */}
      <div className="pt-32 md:pt-36 pb-10 px-6 md:px-10">
        <div
          className="relative max-w-6xl mx-auto rounded-[28px] md:rounded-[36px] overflow-hidden text-center"
          style={{
            background: "rgba(255,255,255,0.045)",
            border: "1px solid rgba(255,255,255,0.10)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 18px 60px rgba(0,0,0,0.35)",
            padding: "clamp(2rem, 4.5vw, 3.75rem) clamp(1.5rem, 5vw, 4rem)",
          }}
        >
          <div
            className="absolute pointer-events-none"
            style={{
              width: "clamp(280px, 90vw, 720px)",
              height: "clamp(220px, 55vw, 420px)",
              background: "radial-gradient(ellipse, rgba(124,58,237,0.18) 0%, transparent 70%)",
              top: "-160px",
              left: "50%",
              transform: "translateX(-50%)",
              filter: "blur(80px)",
            }}
          />
          <div
            className="absolute pointer-events-none"
            style={{
              width: "clamp(220px, 70vw, 520px)",
              height: "clamp(180px, 42vw, 320px)",
              background: "radial-gradient(ellipse, rgba(234,88,12,0.12) 0%, transparent 70%)",
              bottom: "-120px",
              right: "-80px",
              filter: "blur(70px)",
            }}
          />

          <div className="relative">
            <h1
              className="font-bold text-white mb-5 font-clash leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.8rem)" }}
            >
              Planes diseñados
              <br />
              para crecer.
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto">
              Desde un sitio web hasta su operación digital completa con IA. Precios claros, resultados medibles.
            </p>

            {/* Interactive ULTRA vs cumulated comparator */}
            <HeroComparator />
          </div>
        </div>

        {/* Quick-jump tabs — outside the hero card */}
        <div className="max-w-6xl mx-auto mt-8 md:mt-10">
          <SectionTabs />
        </div>

        {/* À la carte subtitle */}
        <div className="max-w-6xl mx-auto mt-10 md:mt-12 text-center">
          <p
            className="font-clash font-semibold text-white/85 mb-3"
            style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.6rem)" }}
          >
            Descubra nuestros{" "}
            <span className="gradient-text" style={{ filter: "drop-shadow(0 4px 14px rgba(124,58,237,0.4))" }}>
              abonos a la carta
            </span>
          </p>
          <div
            className="inline-flex flex-col items-center"
            aria-hidden
          >
            <span className="block w-px h-8 md:h-10" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.45), rgba(255,255,255,0))" }} />
            <ChevronDown
              size={20}
              className="animate-bounce-slow"
              style={{ color: "rgba(255,255,255,0.6)" }}
            />
          </div>
        </div>
      </div>

      {/* ── Web plans ─────────────────────────────────────────── */}
      <div
        id="planes-web"
        ref={webRef}
        className="px-6 md:px-10 pb-24 max-w-5xl mx-auto"
        style={{ scrollMarginTop: "110px" }}
      >
        <ServiceTitleHeader
          serviceTitle={
            <>
              Sitios Web{" "}
              <span
                className="gradient-text"
                style={{ filter: "drop-shadow(0 4px 18px rgba(124,58,237,0.45))" }}
              >
                a Medida
              </span>
            </>
          }
          marketingHook="Su presencia online sin compromisos. Diseño 100% personalizado, pago único, sin sorpresas."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {webPlans.map((plan, i) => (
            <PlanCard
              key={plan.id}
              plan={plan as Plan}
              annual={false}
              visible={webVisible}
              delay={i * 100}
            />
          ))}
        </div>

        {/* Comparison */}
        <div className="mt-12 md:mt-14">
          <PricingComparison
            title="¿Qué incluye cada plan web?"
            columns={webComparisonCols}
            rows={webComparisonRows}
            accent="#7C3AED"
            visible={webVisible}
          />
        </div>
      </div>

      {/* ── Voz IA plans ──────────────────────────────────────── */}
      <div
        id="planes-voz"
        ref={vozRef}
        className="px-6 md:px-10 pb-24 max-w-5xl mx-auto"
        style={{ scrollMarginTop: "110px" }}
      >
        <ServiceTitleHeader
          serviceTitle={
            <>
              Agentes de{" "}
              <span style={{ color: "#EA580C", textShadow: "0 4px 18px rgba(234,88,12,0.45)" }}>
                Voz
              </span>
            </>
          }
          marketingHook="Su negocio atiende, siempre. Califica leads, agenda turnos y responde preguntas las 24 horas, los 7 días."
        />
        <BillingToggle annual={vozAnnual} setAnnual={setVozAnnual} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {vozPlans.map((plan, i) => (
            <PlanCard
              key={plan.id}
              plan={plan as Plan}
              annual={vozAnnual}
              visible={vozVisible}
              delay={i * 100}
            />
          ))}
        </div>

        {/* Comparison */}
        <div className="mt-12 md:mt-14">
          <PricingComparison
            title="¿Qué incluye cada plan de Voz IA?"
            columns={vozComparisonCols}
            rows={vozComparisonRows}
            accent="#EA580C"
            visible={vozVisible}
          />
        </div>
      </div>

      {/* ── Studio plans ──────────────────────────────────────── */}
      <div
        id="planes-studio"
        ref={studioRef}
        className="px-6 md:px-10 pb-24 max-w-5xl mx-auto"
        style={{ scrollMarginTop: "110px" }}
      >
        <ServiceTitleHeader
          serviceTitle={
            <>
              Creación{" "}
              <span
                className="gradient-text"
                style={{ filter: "drop-shadow(0 4px 18px rgba(234,88,12,0.45))" }}
              >
                Visual
              </span>
            </>
          }
          marketingHook="Producción cinematográfica, sin presupuesto de rodaje. Reels, fotos y estrategia de contenido mensual con IA."
        />
        <BillingToggle annual={studioAnnual} setAnnual={setStudioAnnual} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {studioPlans.map((plan, i) => (
            <PlanCard
              key={plan.id}
              plan={plan as Plan}
              annual={studioAnnual}
              visible={studioVisible}
              delay={i * 100}
            />
          ))}
        </div>

        {/* Comparison */}
        <div className="mt-12 md:mt-14">
          <PricingComparison
            title="¿Qué incluye cada plan Studio?"
            columns={studioComparisonCols}
            rows={studioComparisonRows}
            accent="#A78BFA"
            visible={studioVisible}
          />
        </div>
      </div>

      {/* ── ULTRA ─────────────────────────────────────────── */}
      <div
        id="planes-ultra"
        ref={ultraRef}
        className="px-6 md:px-10 pb-24 max-w-4xl mx-auto"
        style={{ scrollMarginTop: "110px" }}
      >
        <div
          className={cn(
            "relative gradient-border p-8 md:p-12 rounded-2xl transition-all duration-700",
            ultraVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ background: "rgba(124,58,237,0.08)" }}
        >
          {/* Badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-5 py-1.5 rounded-full bg-gradient-to-r from-violet-600 to-orange-500 text-white shadow-xl shadow-violet-600/30">
            <Zap size={13} fill="currentColor" />
            <span className="font-bold text-sm tracking-wide">PLAN FLAGSHIP</span>
          </div>

          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
              <span className="text-xs font-bold text-orange-400 tracking-widest uppercase">
                Todo incluido
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold font-clash mb-3">
              <span className="gradient-text">ULTRA</span>
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Web + Voz IA 24/7 + Studio mensual. La solución completa para escalar sin límites.
            </p>
          </div>

          {/* Price */}
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40 mb-2">
              Desde
            </p>
            <div className="flex items-end gap-2 justify-center mb-2">
              <span className="text-6xl md:text-7xl font-bold text-white font-clash">
                $3.000
              </span>
              <span className="text-white/50 text-xl mb-3">/mes</span>
            </div>
            <p className="text-white/40 text-sm">
              Plan anual disponible. Desde $2.400/mes, con un ahorro de $7.200/año.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              { icon: <Globe size={16} />, text: "Sitio web 15 páginas + e-commerce" },
              { icon: <Mic size={16} />, text: "Agente de voz 24/7 ilimitado" },
              { icon: <Film size={16} />, text: "8 reels/mes + fotografía" },
              { icon: <Check size={16} />, text: "Soporte dedicado" },
              { icon: <Check size={16} />, text: "Dashboard de métricas" },
              { icon: <Zap size={16} />, text: "Calificación de leads automática" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-white/4 border border-white/8"
              >
                <span className="text-violet-400 shrink-0">{item.icon}</span>
                <span className="text-white/75 text-sm">{item.text}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="/contacto"
              className="inline-flex items-center gap-2 px-6 md:px-10 py-4 rounded-full bg-gradient-to-r from-violet-600 to-orange-500 text-white font-bold text-base md:text-lg hover:opacity-90 transition-all duration-200 shadow-2xl shadow-violet-600/30 hover:-translate-y-0.5"
            >
              <Zap size={18} fill="currentColor" />
              Activar ULTRA →
            </a>
            <p className="text-white/30 text-xs mt-4">
              Configuración completa en 10 días · Sin sorpresas
            </p>
          </div>
        </div>
      </div>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <div ref={faqRef} className="px-6 md:px-10 pb-24 max-w-3xl mx-auto">
        <div
          className={cn(
            "text-center mb-12 transition-all duration-700",
            faqVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white font-clash mb-3">
            Preguntas frecuentes.
          </h2>
          <p className="text-white/50">
            Respuestas honestas a las dudas más comunes.
          </p>
        </div>
        <div
          className={cn(
            "transition-all duration-700 delay-200",
            faqVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          {faqs.map((faq, i) => (
            <FaqItem key={i} faq={faq} />
          ))}
        </div>

        <div
          className={cn(
            "mt-12 text-center transition-all duration-700 delay-300",
            faqVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <p className="text-white/40 text-sm mb-4">¿Tiene otra pregunta?</p>
          <a
            href="/contacto"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-violet-600 text-white text-sm font-semibold hover:bg-violet-500 transition-all duration-200"
          >
            Hablar con el equipo →
          </a>
        </div>
      </div>
    </div>
  );
}
