"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface Answers {
  sector: string;
  followers: number;
  posts: number;
  engagement: number;
  ticket: number;
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
              background: i < current ? "linear-gradient(135deg, #EA580C, #7C3AED)" : i === current ? "rgba(234,88,12,0.2)" : "rgba(255,255,255,0.05)",
              border: i <= current ? "none" : "1px solid rgba(255,255,255,0.1)",
              color: i < current ? "white" : i === current ? "#FB923C" : "rgba(255,255,255,0.25)",
            }}
          >
            {i < current ? (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : i + 1}
          </div>
          {i < total - 1 && (
            <div className="flex-1 h-px transition-all duration-500" style={{ background: i < current ? "linear-gradient(90deg, #EA580C, #7C3AED)" : "rgba(255,255,255,0.08)" }} />
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
        background: selected ? "rgba(234,88,12,0.18)" : "rgba(255,255,255,0.04)",
        border: selected ? "1.5px solid rgba(234,88,12,0.65)" : "1.5px solid rgba(255,255,255,0.08)",
        boxShadow: selected ? "0 0 20px rgba(234,88,12,0.2)" : "none",
        transform: selected ? "scale(1.01)" : "scale(1)",
      }}
    >
      {icon && <span className="text-xl flex-shrink-0">{icon}</span>}
      <div>
        <div className={cn("font-semibold text-sm transition-colors", selected ? "text-white" : "text-white/60")}>{label}</div>
        {sublabel && <div className="text-xs text-white/35 mt-0.5">{sublabel}</div>}
      </div>
      <div className="ml-auto flex-shrink-0">
        <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200" style={{ borderColor: selected ? "#EA580C" : "rgba(255,255,255,0.2)", background: selected ? "#EA580C" : "transparent" }}>
          {selected && <div className="w-2 h-2 rounded-full bg-white" />}
        </div>
      </div>
    </button>
  );
}

function RangeSlider({ value, onChange, min, max, step, unit, marks }: { value: number; onChange: (v: number) => void; min: number; max: number; step: number; unit: string; marks: number[] }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="w-full">
      <div className="flex justify-between text-xs text-white/35 mb-3">
        <span>{min}{unit}</span>
        <span className="text-orange-400 font-bold text-base">{value}{unit}</span>
        <span>{max}{unit}</span>
      </div>
      <div className="relative h-2 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
        <div className="absolute inset-y-0 left-0 rounded-full" style={{ width: `${pct}%`, background: "linear-gradient(90deg, #EA580C, #7C3AED)" }} />
        <input
          type="range" min={min} max={max} step={step} value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer h-full"
        />
        <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 border-orange-400 shadow-lg" style={{ left: `calc(${pct}% - 10px)`, background: "#0D0B18", boxShadow: "0 0 12px rgba(234,88,12,0.6)" }} />
      </div>
      <div className="flex justify-between mt-3 gap-2">
        {marks.map(v => (
          <button key={v} onClick={() => onChange(v)} className="text-xs rounded px-1.5 py-0.5 transition-all" style={{ color: value === v ? "#FB923C" : "rgba(255,255,255,0.2)", background: value === v ? "rgba(234,88,12,0.15)" : "transparent" }}>{v}{unit}</button>
        ))}
      </div>
    </div>
  );
}

function calculate(a: Answers) {
  // Current monthly metrics
  const currentImpressions = Math.round(a.followers * (a.engagement / 100) * a.posts);

  // With Studio Business: 8 reels + 30 photos = 38 pieces/mo, with quality uplift
  const newPosts = 38;
  const newEngagement = a.engagement * 1.7; // premium content uplift
  const newImpressions = Math.round(a.followers * (newEngagement / 100) * newPosts);
  const impressionsGained = Math.max(newImpressions - currentImpressions, 0);

  // Convert reach to leads (0.6% of impressions become interested) and customers (5% of leads buy)
  const newLeads = Math.round(impressionsGained * 0.006);
  const newCustomers = Math.round(newLeads * 0.05);
  const monthlyRevenueGain = Math.round(newCustomers * a.ticket);
  const annualRevenueGain = monthlyRevenueGain * 12;

  // Studio Business cost
  const studioMonthly = 1500;
  const studioAnnual = studioMonthly * 12;
  const yearOneNet = annualRevenueGain - studioAnnual;
  const roi = studioMonthly > 0 ? Math.round(annualRevenueGain / studioAnnual) : 0;

  return { currentImpressions, newImpressions, impressionsGained, newLeads, newCustomers, monthlyRevenueGain, annualRevenueGain, studioMonthly, studioAnnual, yearOneNet, roi };
}

function ResultsScreen({ answers }: { answers: Answers }) {
  const r = calculate(answers);

  return (
    <div>
      <div className="text-center mb-8 p-6 rounded-2xl" style={{ background: "rgba(234,88,12,0.10)", border: "1px solid rgba(234,88,12,0.30)" }}>
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-orange-300 mb-2">Alcance extra que puede captar al mes</p>
        <div className="font-bold text-orange-200 mb-1" style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif", fontSize: "clamp(2.8rem,6vw,4rem)", lineHeight: 1 }}>
          +<Counter value={r.impressionsGained} />
        </div>
        <p className="text-white/45 text-sm mt-2">
          impactos adicionales con producción Studio Business
        </p>
      </div>

      <div className="space-y-2.5 mb-8">
        <div className="flex items-center justify-between px-4 py-3 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
          <span className="text-white/55 text-sm">Leads nuevos cada mes</span>
          <span className="font-bold text-sm ml-4 flex-shrink-0 text-orange-300">+<Counter value={r.newLeads} /></span>
        </div>
        <div className="flex items-center justify-between px-4 py-3 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
          <span className="text-white/55 text-sm">Clientes adicionales por mes</span>
          <span className="font-bold text-sm ml-4 flex-shrink-0 text-orange-300">+<Counter value={r.newCustomers} /></span>
        </div>
        <div className="flex items-center justify-between px-4 py-3 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
          <span className="text-white/55 text-sm">Facturación mensual extra</span>
          <span className="font-bold text-sm ml-4 flex-shrink-0 text-orange-300">+$<Counter value={r.monthlyRevenueGain} /></span>
        </div>
      </div>

      <div className="relative my-6 flex items-center gap-3">
        <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
        <span className="text-xs text-white/30 tracking-widest uppercase">Su inversión Studio</span>
        <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
      </div>

      <div className="p-5 rounded-2xl mb-6" style={{ background: "rgba(234,88,12,0.10)", border: "1px solid rgba(234,88,12,0.30)" }}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-orange-400/80 mb-1">Studio Business · 8 reels + 30 fotos / mes</p>
            <div className="font-bold text-orange-300" style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif", fontSize: "clamp(2rem,4vw,2.8rem)", lineHeight: 1 }}>
              ${r.studioMonthly.toLocaleString("es-AR")}<span className="text-base font-medium text-white/50">/mes</span>
            </div>
            <p className="text-white/40 text-xs mt-1">Producción cinematográfica completa</p>
          </div>
          <div className="text-right">
            <div className="inline-flex flex-col items-center justify-center px-4 py-3 rounded-2xl" style={{ background: "linear-gradient(135deg, #EA580C, #7C3AED)" }}>
              <span className="text-white font-bold text-xl">×{r.roi}</span>
              <span className="text-white/80 text-xs font-semibold tracking-wider">ROI año 1</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs text-white/40">
            <span>Inversión Studio anual</span>
            <span className="text-orange-400 font-semibold">${r.studioAnnual.toLocaleString("es-AR")}</span>
          </div>
          <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
            <div className="h-full rounded-full transition-all duration-1000 delay-300" style={{ width: `${Math.min((r.studioAnnual / Math.max(r.annualRevenueGain, 1)) * 100, 100)}%`, background: "linear-gradient(90deg, #7C3AED, #A78BFA)" }} />
          </div>
          <div className="flex justify-between text-xs text-white/40">
            <span>Ganancia neta año 1</span>
            <span className="text-orange-400 font-semibold">${Math.max(r.yearOneNet, 0).toLocaleString("es-AR")}</span>
          </div>
          <div className="h-3 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
            <div className="h-full rounded-full transition-all duration-1000 delay-500" style={{ width: `${Math.min((Math.max(r.yearOneNet, 0) / Math.max(r.annualRevenueGain, 1)) * 100, 100)}%`, background: "linear-gradient(90deg, #EA580C, #FB923C)" }} />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="/contacto"
          className="flex-1 py-4 px-6 rounded-full text-center font-bold text-white text-base transition-all duration-200 hover:-translate-y-0.5"
          style={{ background: "linear-gradient(135deg, #EA580C, #7C3AED)", boxShadow: "0 8px 32px rgba(234,88,12,0.35)" }}
        >
          Quiero ese alcance →
        </a>
        <a
          href="/precios#planes-studio"
          className="flex-1 py-4 px-6 rounded-full text-center font-semibold text-white/70 text-sm transition-all duration-200 hover:text-white"
          style={{ background: "rgba(255,255,255,0.055)", border: "1px solid rgba(255,255,255,0.11)" }}
        >
          Ver planes Studio
        </a>
      </div>

      <p className="text-center text-white/25 text-xs mt-4">
        Estimación basada en uplift de engagement con producción premium y conversión social → ventas.
      </p>
    </div>
  );
}

export default function MotionSimulator() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<Answers>>({ engagement: 1.5 });
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

  const restart = () => { setStep(0); setAnswers({ engagement: 1.5 }); setDone(false); };

  const stepContent = [
    {
      question: "¿En qué sector está su marca?",
      hint: "El contenido convierte distinto en cada industria.",
      content: (
        <div className="grid grid-cols-2 gap-2.5">
          {[
            { label: "Moda / Belleza", icon: "👗", value: "fashion" },
            { label: "Gastronomía", icon: "🍽️", value: "food" },
            { label: "Inmobiliaria", icon: "🏠", value: "realestate" },
            { label: "Servicios profesionales", icon: "💼", value: "services" },
            { label: "Salud / Wellness", icon: "🧘", value: "health" },
            { label: "Otro sector", icon: "🏢", value: "other" },
          ].map((o) => (
            <OptionCard key={o.value} label={o.label} icon={o.icon} selected={answers.sector === o.value} onClick={() => next({ sector: o.value })} />
          ))}
        </div>
      ),
    },
    {
      question: "¿Cuántos seguidores tiene su marca en redes?",
      hint: "Sumando Instagram, TikTok y otras plataformas activas.",
      content: (
        <div className="grid grid-cols-1 gap-2.5">
          {[
            { label: "Menos de 1.000", sublabel: "Marca arrancando", value: 500 },
            { label: "1.000 – 5.000", sublabel: "Audiencia local fiel", value: 2500 },
            { label: "5.000 – 20.000", sublabel: "Comunidad consolidada", value: 12000 },
            { label: "20.000 – 100.000", sublabel: "Marca de referencia", value: 50000 },
            { label: "Más de 100.000", sublabel: "Influencia regional", value: 200000 },
          ].map((o) => (
            <OptionCard key={o.value} label={o.label} sublabel={o.sublabel} selected={answers.followers === o.value} onClick={() => next({ followers: o.value })} />
          ))}
        </div>
      ),
    },
    {
      question: "¿Cuántas piezas publica al mes hoy?",
      hint: "Reels, fotos, posts. Lo que de verdad publica, no lo planificado.",
      content: (
        <div className="grid grid-cols-1 gap-2.5">
          {[
            { label: "Menos de 4 piezas", sublabel: "Presencia mínima · solo cuando hay tiempo", value: 2 },
            { label: "4 – 8 piezas", sublabel: "Una o dos por semana", value: 6 },
            { label: "8 – 16 piezas", sublabel: "Constante · 2-4 por semana", value: 12 },
            { label: "16 – 30 piezas", sublabel: "Activos · casi a diario", value: 22 },
            { label: "Más de 30 piezas", sublabel: "Estrategia agresiva", value: 40 },
          ].map((o) => (
            <OptionCard key={o.value} label={o.label} sublabel={o.sublabel} selected={answers.posts === o.value} onClick={() => next({ posts: o.value })} />
          ))}
        </div>
      ),
    },
    {
      question: "¿Cuál es su tasa de engagement actual?",
      hint: "Promedio de la industria: 1% – 2%. Contenido premium llega a 3% – 5%.",
      content: (
        <div>
          <RangeSlider
            value={answers.engagement ?? 1.5}
            onChange={(v) => setAnswers((a) => ({ ...a, engagement: v }))}
            min={0.5} max={5} step={0.5} unit="%"
            marks={[0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]}
          />
          <button
            className="w-full mt-6 py-3.5 rounded-full font-bold text-white text-sm transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #EA580C, #7C3AED)" }}
            onClick={() => next({ engagement: answers.engagement ?? 1.5 })}
          >
            Continuar →
          </button>
        </div>
      ),
    },
    {
      question: "¿Cuánto vale en promedio un cliente?",
      hint: "Lo que factura cuando alguien compra o contrata.",
      content: (
        <div className="grid grid-cols-1 gap-2.5">
          {[
            { label: "$20 – $80", sublabel: "Ticket bajo: comida, productos básicos", value: 50 },
            { label: "$80 – $250", sublabel: "Ticket medio: moda, servicios", value: 165 },
            { label: "$250 – $700", sublabel: "Ticket medio-alto: estética, consultoría", value: 475 },
            { label: "$700 – $2.000", sublabel: "Ticket alto: servicios premium", value: 1300 },
            { label: "Más de $2.000", sublabel: "Lujo · proyectos · propiedades", value: 4000 },
          ].map((o) => (
            <OptionCard key={o.value} label={o.label} sublabel={o.sublabel} selected={answers.ticket === o.value} onClick={() => next({ ticket: o.value })} />
          ))}
        </div>
      ),
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-10 overflow-hidden" style={{ background: "linear-gradient(180deg, #0F0C1E 0%, #0D0B18 100%)" }}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-clash text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Calcule cuánto puede crecer{" "}
            <span style={{ color: "#FB923C" }}>su marca en redes.</span>
          </h2>
          <p className="text-white/50 text-base max-w-md mx-auto">
            Responda 5 preguntas y le mostramos el alcance que puede captar cada mes.
          </p>
        </div>

        <div
          ref={cardRef}
          className="rounded-3xl p-7 md:p-9"
          style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 32px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(234,88,12,0.08)",
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
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(234,88,12,0.7)" }} />
              <span className="text-xs text-white/30">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
