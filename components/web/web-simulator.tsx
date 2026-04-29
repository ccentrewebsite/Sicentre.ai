"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface Answers {
  sector: string;
  visitors: number;
  conversion: number;
  ticket: number;
  platform: string;
}

function Counter({ value, prefix = "", suffix = "", decimals = 0 }: { value: number; prefix?: string; suffix?: string; decimals?: number }) {
  const [display, setDisplay] = useState(0);
  const prev = useRef(0);

  useEffect(() => {
    const from = prev.current;
    const to = value;
    prev.current = to;
    if (from === to) return;
    const duration = 1200;
    const start = performance.now();
    const raf = (ts: number) => {
      const p = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setDisplay(from + (to - from) * ease);
      if (p < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [value]);

  const fmt = (n: number) => n.toLocaleString("es-AR", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  return <>{prefix}{fmt(display)}{suffix}</>;
}

function StepBar({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="flex items-center gap-2 flex-1">
          <div
            className="flex items-center justify-center rounded-full text-xs font-bold transition-all duration-300 flex-shrink-0"
            style={{
              width: "28px", height: "28px",
              background: i < current ? "linear-gradient(135deg, #7C3AED, #EA580C)" : i === current ? "rgba(124,58,237,0.2)" : "rgba(255,255,255,0.05)",
              border: i <= current ? "none" : "1px solid rgba(255,255,255,0.1)",
              color: i < current ? "white" : i === current ? "#A78BFA" : "rgba(255,255,255,0.25)",
            }}
          >
            {i < current ? (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : i + 1}
          </div>
          {i < total - 1 && (
            <div className="flex-1 h-px transition-all duration-500" style={{ background: i < current ? "linear-gradient(90deg, #7C3AED, #EA580C)" : "rgba(255,255,255,0.08)" }} />
          )}
        </div>
      ))}
    </div>
  );
}

function OptionCard({ label, sublabel, icon, selected, onClick }: { label: string; sublabel?: string; icon?: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left px-4 py-3.5 rounded-2xl transition-all duration-200 flex items-center gap-3"
      style={{
        background: selected ? "rgba(124,58,237,0.18)" : "rgba(255,255,255,0.04)",
        border: selected ? "1.5px solid rgba(124,58,237,0.65)" : "1.5px solid rgba(255,255,255,0.08)",
        boxShadow: selected ? "0 0 20px rgba(124,58,237,0.2)" : "none",
        transform: selected ? "scale(1.01)" : "scale(1)",
      }}
    >
      {icon && <span className="text-xl flex-shrink-0">{icon}</span>}
      <div>
        <div className={cn("font-semibold text-sm transition-colors", selected ? "text-white" : "text-white/60")}>{label}</div>
        {sublabel && <div className="text-xs text-white/35 mt-0.5">{sublabel}</div>}
      </div>
      <div className="ml-auto flex-shrink-0">
        <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200" style={{ borderColor: selected ? "#7C3AED" : "rgba(255,255,255,0.2)", background: selected ? "#7C3AED" : "transparent" }}>
          {selected && <div className="w-2 h-2 rounded-full bg-white" />}
        </div>
      </div>
    </button>
  );
}

function RangeSlider({ value, onChange, min, max, step, unit = "%", marks }: { value: number; onChange: (v: number) => void; min: number; max: number; step: number; unit?: string; marks: number[] }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="w-full">
      <div className="flex justify-between text-xs text-white/35 mb-3">
        <span>{min}{unit}</span>
        <span className="text-violet-400 font-bold text-base">{value}{unit}</span>
        <span>{max}{unit}</span>
      </div>
      <div className="relative h-2 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
        <div className="absolute inset-y-0 left-0 rounded-full" style={{ width: `${pct}%`, background: "linear-gradient(90deg, #7C3AED, #EA580C)" }} />
        <input
          type="range" min={min} max={max} step={step} value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer h-full"
        />
        <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 border-violet-400 shadow-lg" style={{ left: `calc(${pct}% - 10px)`, background: "#0D0B18", boxShadow: "0 0 12px rgba(124,58,237,0.6)" }} />
      </div>
      <div className="flex justify-between mt-3 gap-2">
        {marks.map(v => (
          <button key={v} onClick={() => onChange(v)} className="text-xs rounded px-1.5 py-0.5 transition-all" style={{ color: value === v ? "#A78BFA" : "rgba(255,255,255,0.2)", background: value === v ? "rgba(124,58,237,0.15)" : "transparent" }}>{v}{unit}</button>
        ))}
      </div>
    </div>
  );
}

function calculate(a: Answers) {
  // Current state
  const monthlyConversions = (a.visitors * a.conversion) / 100;
  const monthlyRevenue = monthlyConversions * a.ticket;

  // With custom Sicentre site — industry uplift ~2.5× from custom design + UX + perf
  const upliftedConversion = a.conversion * 2.5;
  const newMonthlyConversions = (a.visitors * upliftedConversion) / 100;
  const newMonthlyRevenue = newMonthlyConversions * a.ticket;
  const monthlyRevenueGain = Math.round(newMonthlyRevenue - monthlyRevenue);

  // Platform monthly cost saved
  const platformMonthly = a.platform === "agency" ? 200 : a.platform === "shopify" ? 120 : a.platform === "wix" ? 60 : 0;
  const annualPlatformSaved = platformMonthly * 12;

  // Sicentre Web E-commerce one-time
  const sicentreInvestment = 1000;

  const annualGain = monthlyRevenueGain * 12 + annualPlatformSaved;
  const yearOneNet = annualGain - sicentreInvestment;
  const roi = sicentreInvestment > 0 ? Math.round(yearOneNet / sicentreInvestment) : 0;

  return { monthlyRevenueGain, annualGain, platformMonthly, annualPlatformSaved, sicentreInvestment, yearOneNet, roi, newMonthlyConversions: Math.round(newMonthlyConversions), monthlyConversions: Math.round(monthlyConversions) };
}

function ResultsScreen({ answers }: { answers: Answers }) {
  const r = calculate(answers);

  return (
    <div>
      {/* Hero gain */}
      <div className="text-center mb-8 p-6 rounded-2xl" style={{ background: "rgba(124,58,237,0.10)", border: "1px solid rgba(124,58,237,0.30)" }}>
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-violet-300 mb-2">Su sitio puede generar cada año</p>
        <div className="font-bold text-violet-200 mb-1" style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif", fontSize: "clamp(2.8rem,6vw,4rem)", lineHeight: 1 }}>
          +$<Counter value={r.annualGain} />
        </div>
        <p className="text-white/45 text-sm mt-2">
          adicionales con un sitio diseñado para convertir
        </p>
      </div>

      {/* Breakdown */}
      <div className="space-y-2.5 mb-8">
        <div className="flex items-center justify-between px-4 py-3 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
          <span className="text-white/55 text-sm">Conversiones extra cada mes</span>
          <span className="font-bold text-sm ml-4 flex-shrink-0 text-violet-300">+<Counter value={r.newMonthlyConversions - r.monthlyConversions} /></span>
        </div>
        <div className="flex items-center justify-between px-4 py-3 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
          <span className="text-white/55 text-sm">Ventas adicionales por mes</span>
          <span className="font-bold text-sm ml-4 flex-shrink-0 text-violet-300">+$<Counter value={r.monthlyRevenueGain} /></span>
        </div>
        {r.platformMonthly > 0 && (
          <div className="flex items-center justify-between px-4 py-3 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <span className="text-white/55 text-sm">Suscripciones que deja de pagar al año</span>
            <span className="font-bold text-sm ml-4 flex-shrink-0 text-orange-300">+$<Counter value={r.annualPlatformSaved} /></span>
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="relative my-6 flex items-center gap-3">
        <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
        <span className="text-xs text-white/30 tracking-widest uppercase">Su inversión Sicentre</span>
        <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
      </div>

      {/* ROI panel */}
      <div className="p-5 rounded-2xl mb-6" style={{ background: "rgba(124,58,237,0.10)", border: "1px solid rgba(124,58,237,0.30)" }}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-violet-400/70 mb-1">Pago único · suyo para siempre</p>
            <div className="font-bold text-violet-300" style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif", fontSize: "clamp(2rem,4vw,2.8rem)", lineHeight: 1 }}>
              ${r.sicentreInvestment.toLocaleString("es-AR")}
            </div>
            <p className="text-white/40 text-xs mt-1">Web E-commerce a medida</p>
          </div>
          <div className="text-right">
            <div className="inline-flex flex-col items-center justify-center px-4 py-3 rounded-2xl" style={{ background: "linear-gradient(135deg, #7C3AED, #EA580C)" }}>
              <span className="text-white font-bold text-xl">×{r.roi}</span>
              <span className="text-white/80 text-xs font-semibold tracking-wider">ROI año 1</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs text-white/40">
            <span>Inversión única</span>
            <span className="text-orange-400 font-semibold">${r.sicentreInvestment.toLocaleString("es-AR")}</span>
          </div>
          <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
            <div className="h-full rounded-full transition-all duration-1000 delay-300" style={{ width: `${Math.min((r.sicentreInvestment / r.annualGain) * 100, 100)}%`, background: "linear-gradient(90deg, #EA580C, #FB923C)" }} />
          </div>
          <div className="flex justify-between text-xs text-white/40">
            <span>Ganancia neta año 1</span>
            <span className="text-violet-400 font-semibold">${Math.max(r.yearOneNet, 0).toLocaleString("es-AR")}</span>
          </div>
          <div className="h-3 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
            <div className="h-full rounded-full transition-all duration-1000 delay-500" style={{ width: `${Math.min((r.yearOneNet / r.annualGain) * 100, 100)}%`, background: "linear-gradient(90deg, #7C3AED, #A78BFA)" }} />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="/contacto"
          className="flex-1 py-4 px-6 rounded-full text-center font-bold text-white text-base transition-all duration-200 hover:-translate-y-0.5"
          style={{ background: "linear-gradient(135deg, #7C3AED, #EA580C)", boxShadow: "0 8px 32px rgba(124,58,237,0.35)" }}
        >
          Quiero esos resultados →
        </a>
        <a
          href="/precios#planes-web"
          className="flex-1 py-4 px-6 rounded-full text-center font-semibold text-white/70 text-sm transition-all duration-200 hover:text-white"
          style={{ background: "rgba(255,255,255,0.055)", border: "1px solid rgba(255,255,255,0.11)" }}
        >
          Ver planes
        </a>
      </div>

      <p className="text-center text-white/25 text-xs mt-4">
        Estimación basada en uplift promedio de conversión (sitios a medida vs. plataformas genéricas).
      </p>
    </div>
  );
}

export default function WebSimulator() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<Answers>>({ conversion: 1.5 });
  const [done, setDone] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const TOTAL_STEPS = 5;

  const scrollToCard = () => {
    setTimeout(() => cardRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }), 100);
  };

  const next = (patch: Partial<Answers>) => {
    const updated = { ...answers, ...patch };
    setAnswers(updated);
    if (step < TOTAL_STEPS - 1) {
      setStep((s) => s + 1);
      scrollToCard();
    } else {
      setDone(true);
      scrollToCard();
    }
  };

  const restart = () => { setStep(0); setAnswers({ conversion: 1.5 }); setDone(false); };

  const stepContent = [
    {
      question: "¿En qué sector opera su negocio?",
      hint: "Cada sector convierte distinto. Esto afina el cálculo.",
      content: (
        <div className="grid grid-cols-2 gap-2.5">
          {[
            { label: "E-commerce / Tienda", icon: "📦", value: "ecommerce" },
            { label: "Servicios profesionales", icon: "💼", value: "services" },
            { label: "Restaurante / Hotelería", icon: "🍽️", value: "hospitality" },
            { label: "Inmobiliaria", icon: "🏠", value: "realestate" },
            { label: "Salud / Clínica", icon: "🏥", value: "health" },
            { label: "Otro negocio", icon: "🏢", value: "other" },
          ].map((o) => (
            <OptionCard key={o.value} label={o.label} icon={o.icon} selected={answers.sector === o.value} onClick={() => next({ sector: o.value })} />
          ))}
        </div>
      ),
    },
    {
      question: "¿Cuántas visitas recibe su sitio cada mes?",
      hint: "Estime en base a sus redes, anuncios o tráfico actual.",
      content: (
        <div className="grid grid-cols-1 gap-2.5">
          {[
            { label: "Menos de 500 visitas", sublabel: "Sin sitio o tráfico mínimo", value: 300 },
            { label: "500 – 2.000 visitas", sublabel: "Presencia básica activa", value: 1200 },
            { label: "2.000 – 8.000 visitas", sublabel: "Negocio con flujo constante", value: 5000 },
            { label: "8.000 – 25.000 visitas", sublabel: "Marca con anuncios + redes", value: 15000 },
            { label: "Más de 25.000 visitas", sublabel: "Empresa o marca consolidada", value: 40000 },
          ].map((o) => (
            <OptionCard key={o.value} label={o.label} sublabel={o.sublabel} selected={answers.visitors === o.value} onClick={() => next({ visitors: o.value })} />
          ))}
        </div>
      ),
    },
    {
      question: "¿Cuál es su tasa de conversión actual?",
      hint: "Promedio de la industria: 1% – 2%. Sitios a medida llegan a 4% – 6%.",
      content: (
        <div>
          <RangeSlider
            value={answers.conversion ?? 1.5}
            onChange={(v) => setAnswers((a) => ({ ...a, conversion: v }))}
            min={0.5} max={5} step={0.5} unit="%"
            marks={[0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]}
          />
          <button
            className="w-full mt-6 py-3.5 rounded-full font-bold text-white text-sm transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #7C3AED, #EA580C)" }}
            onClick={() => next({ conversion: answers.conversion ?? 1.5 })}
          >
            Continuar →
          </button>
        </div>
      ),
    },
    {
      question: "¿Cuánto vale en promedio una venta?",
      hint: "El valor medio del ticket cuando un cliente compra.",
      content: (
        <div className="grid grid-cols-1 gap-2.5">
          {[
            { label: "$20 – $80", sublabel: "Ticket bajo: comida, productos básicos", value: 50 },
            { label: "$80 – $200", sublabel: "Ticket medio: productos, servicios", value: 140 },
            { label: "$200 – $500", sublabel: "Ticket medio-alto: consultoría, equipo", value: 350 },
            { label: "$500 – $1.500", sublabel: "Ticket alto: servicios premium", value: 1000 },
            { label: "Más de $1.500", sublabel: "Ticket muy alto: proyectos, propiedades", value: 3000 },
          ].map((o) => (
            <OptionCard key={o.value} label={o.label} sublabel={o.sublabel} selected={answers.ticket === o.value} onClick={() => next({ ticket: o.value })} />
          ))}
        </div>
      ),
    },
    {
      question: "¿Cómo está hecho su sitio actual?",
      hint: "El costo de las plataformas suma a lo largo del tiempo.",
      content: (
        <div className="flex flex-col gap-2.5">
          <OptionCard label="Agencia o desarrollador externo" sublabel="~$200/mes en mantenimiento + licencias" icon="🏢" selected={answers.platform === "agency"} onClick={() => next({ platform: "agency" })} />
          <OptionCard label="Shopify o plataforma e-commerce" sublabel="~$120/mes en suscripción + apps" icon="🛒" selected={answers.platform === "shopify"} onClick={() => next({ platform: "shopify" })} />
          <OptionCard label="Wix, Squarespace o similar" sublabel="~$60/mes en suscripción" icon="🌐" selected={answers.platform === "wix"} onClick={() => next({ platform: "wix" })} />
          <OptionCard label="No tengo sitio web" sublabel="Empezamos de cero · sin costo previo" icon="❌" selected={answers.platform === "none"} onClick={() => next({ platform: "none" })} />
        </div>
      ),
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-10 overflow-hidden" style={{ background: "linear-gradient(180deg, #0F0C1E 0%, #0D0B18 100%)" }}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-clash text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Calcule cuánto puede{" "}
            <span style={{ color: "#A78BFA" }}>ganar con su sitio web.</span>
          </h2>
          <p className="text-white/50 text-base max-w-md mx-auto">
            Responda 5 preguntas y le mostramos el potencial real de su sitio.
          </p>
        </div>

        <div
          ref={cardRef}
          className="rounded-3xl p-7 md:p-9"
          style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 32px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(124,58,237,0.08)",
          }}
        >
          {!done ? (
            <>
              <StepBar current={step} total={TOTAL_STEPS} />
              <div className="mb-6">
                <h3 className="font-clash font-bold text-white text-xl md:text-2xl mb-1.5 leading-snug">
                  {stepContent[step].question}
                </h3>
                <p className="text-white/35 text-sm">{stepContent[step].hint}</p>
              </div>
              {stepContent[step].content}
              {step > 0 && (
                <button onClick={() => setStep((s) => s - 1)} className="mt-5 text-xs text-white/25 hover:text-white/50 transition-colors">
                  ← Volver
                </button>
              )}
            </>
          ) : (
            <>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-clash font-bold text-white text-xl">Su diagnóstico personalizado</h3>
                <button onClick={restart} className="text-xs text-white/30 hover:text-white/60 transition-colors px-3 py-1.5 rounded-full" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
                  Recalcular
                </button>
              </div>
              <ResultsScreen answers={answers as Answers} />
            </>
          )}
        </div>

        <div className="flex items-center justify-center gap-6 mt-8 flex-wrap">
          {["Sin compromiso", "Datos confidenciales", "Resultado inmediato"].map((t) => (
            <div key={t} className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(124,58,237,0.7)" }} />
              <span className="text-xs text-white/30">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
