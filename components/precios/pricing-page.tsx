"use client";

import { useState, useRef, useEffect } from "react";
import { Check, ChevronDown, Star, Zap, Globe, Mic, Film } from "lucide-react";
import { cn } from "@/lib/utils";
import PricingComparison, { type ComparisonColumn, type ComparisonRow } from "./pricing-comparison";

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
  { name: "Enterprise" },
];
const vozComparisonRows: ComparisonRow[] = [
  { feature: "Configuración a medida del agente",      values: [true, true, true] },
  { feature: "Voz natural en español rioplatense",     values: [true, true, true] },
  { feature: "Voz clonada personalizada",              values: [false, true, "Múltiples voces"] },
  { feature: "Llamadas mensuales",                     values: ["500", "Ilimitadas", "Ilimitadas"] },
  { feature: "Calificación automática de leads",       values: [false, true, true] },
  { feature: "Agenda de turnos en tiempo real",        values: [false, true, true] },
  { feature: "Integración Google Calendar",            values: [true, true, true] },
  { feature: "CRM automático",                         values: ["Google Sheets", "Completo", "A medida"] },
  { feature: "Múltiples agentes",                      values: [false, false, true] },
  { feature: "Múltiples líneas telefónicas",           values: [false, false, true] },
  { feature: "Reportes",                               values: ["Mensual", "Semanal", "Avanzado"] },
  { feature: "Soporte",                                values: ["WhatsApp", "Prioritario 24/7", "Dedicado"] },
  { feature: "Onboarding",                             values: ["Estándar", "Estándar", "Dedicado"] },
  { feature: "SLA garantizado",                        values: [false, false, true] },
];

const studioComparisonCols: ComparisonColumn[] = [
  { name: "Starter" },
  { name: "Business", highlighted: true },
  { name: "Enterprise" },
];
const studioComparisonRows: ComparisonRow[] = [
  { feature: "Reels mensuales",                        values: [4, 8, "Ilimitados"] },
  { feature: "Fotos de producto / lifestyle",          values: [10, 30, "Ilimitadas"] },
  { feature: "Caption + hashtags optimizados",         values: [true, true, true] },
  { feature: "Calendario editorial",                   values: [false, true, true] },
  { feature: "Estrategia de contenido mensual",        values: [false, true, true] },
  { feature: "Color grading cinematográfico",          values: [false, true, true] },
  { feature: "Drone 4K",                               values: [false, "A medida", "Incluido"] },
  { feature: "Virtual staging IA",                     values: [false, "A medida", "Incluido"] },
  { feature: "Video IA generativo (Kling, Runway, Sora)", values: [false, false, true] },
  { feature: "Brand guidelines visual",                values: [false, false, true] },
  { feature: "Dirección creativa dedicada",            values: [false, false, true] },
  { feature: "Revisiones por entrega",                 values: ["1", "Ilimitadas", "Ilimitadas"] },
  { feature: "Reportes con ROI",                       values: [false, false, true] },
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
        "relative flex flex-col rounded-2xl p-6 transition-all duration-700",
        plan.popular
          ? "gradient-border shadow-2xl shadow-violet-600/10"
          : "bg-violet-600/[0.06] border border-violet-600/20",
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
          <div className="flex items-end gap-1.5">
            <span className="text-4xl font-bold text-white font-clash">${price}</span>
            <span className="text-white/40 text-sm mb-1.5">
              {plan.oneTime ? " USD pago único" : "/mes"}
            </span>
          </div>
        )}
        {annual && !plan.oneTime && !isEnterprise && (
          <p className="text-green-400 text-xs mt-1 font-medium">
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

/* ─── Section header ─────────────────────────────────────────── */
function SectionHeader({
  icon,
  label,
  title,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  title: React.ReactNode;
  sub: string;
}) {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full bg-violet-600/10 border border-violet-500/20">
        {icon}
        <span className="text-xs font-semibold text-violet-300 tracking-wide">{label}</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 font-clash">{title}</h2>
      <p className="text-white/50 text-base max-w-xl mx-auto">{sub}</p>
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────── */
export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
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
      {/* Hero */}
      <div className="pt-40 pb-20 px-6 md:px-10 text-center">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20">
          <Star size={12} className="text-orange-400" />
          <span className="text-xs font-semibold text-orange-300 tracking-wide">Sin letra chica · Sin sorpresas</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-clash leading-[0.95]">
          Planes diseñados para{" "}
          <span className="gradient-text">crecer.</span>
        </h1>
        <p className="text-white/50 text-lg max-w-xl mx-auto mb-10">
          Desde un sitio web hasta su operación digital completa con IA. Precios claros, resultados medibles.
        </p>

        {/* Toggle */}
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

      {/* ── Web plans ─────────────────────────────────────────── */}
      <div
        ref={webRef}
        className="px-6 md:px-10 pb-24 max-w-5xl mx-auto"
      >
        <SectionHeader
          icon={<Globe size={12} className="text-violet-400" />}
          label="Sitios Web"
          title={<>Su presencia online.</>}
          sub="Diseño 100% personalizado. Pago único, sin sorpresas."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {webPlans.map((plan, i) => (
            <PlanCard
              key={plan.id}
              plan={plan as Plan}
              annual={annual}
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
        ref={vozRef}
        className="px-6 md:px-10 pb-24 max-w-5xl mx-auto"
      >
        <SectionHeader
          icon={<Mic size={12} className="text-violet-400" />}
          label="Agente de Voz IA"
          title={<>Su negocio atiende solo.</>}
          sub="Califica leads, agenda turnos y responde preguntas — 24/7."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {vozPlans.map((plan, i) => (
            <PlanCard
              key={plan.id}
              plan={plan as Plan}
              annual={annual}
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
        ref={studioRef}
        className="px-6 md:px-10 pb-24 max-w-5xl mx-auto"
      >
        <SectionHeader
          icon={<Film size={12} className="text-orange-400" />}
          label="Motion Studio"
          title={<>Contenido que <span className="gradient-text">vende.</span></>}
          sub="Reels, fotos y estrategia de contenido mensual con IA."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {studioPlans.map((plan, i) => (
            <PlanCard
              key={plan.id}
              plan={plan as Plan}
              annual={annual}
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

      {/* ── ULTRA 360 ─────────────────────────────────────────── */}
      <div
        ref={ultraRef}
        className="px-6 md:px-10 pb-24 max-w-4xl mx-auto"
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
              <span className="gradient-text">ULTRA 360</span>
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Web + Voz IA 24/7 + Studio mensual. La solución completa para escalar sin límites.
            </p>
          </div>

          {/* Price */}
          <div className="text-center mb-10">
            <div className="flex items-end gap-2 justify-center mb-1">
              <span className="text-white/40 text-base mb-3">desde</span>
              <span className="text-6xl md:text-7xl font-bold text-white font-clash">
                $3.000
              </span>
              <span className="text-white/50 text-xl mb-3">/mes</span>
            </div>
            {annual && (
              <p className="text-green-400 text-sm font-medium">
                Plan anual: desde $2.400/mes · Ahorra $7.200/año
              </p>
            )}
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
              Activar ULTRA 360 →
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
