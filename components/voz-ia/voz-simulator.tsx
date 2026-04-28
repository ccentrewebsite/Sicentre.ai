"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// ── Types ──────────────────────────────────────────────────────────────────────

interface Answers {
  sector: string;
  dailyCalls: number;
  ticket: number;
  schedule: string;
  missedPct: number;
  employee: string;
}

// ── Animated counter ───────────────────────────────────────────────────────────

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

  const fmt = (n: number) =>
    n.toLocaleString("es-AR", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

  return <>{prefix}{fmt(display)}{suffix}</>;
}

// ── Step indicator ─────────────────────────────────────────────────────────────

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
                <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              i + 1
            )}
          </div>
          {i < total - 1 && (
            <div className="flex-1 h-px transition-all duration-500" style={{ background: i < current ? "linear-gradient(90deg, #7C3AED, #EA580C)" : "rgba(255,255,255,0.08)" }} />
          )}
        </div>
      ))}
    </div>
  );
}

// ── Option cards ───────────────────────────────────────────────────────────────

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

// ── Slider ─────────────────────────────────────────────────────────────────────

function RangeSlider({ value, onChange, min = 10, max = 80, step = 5 }: { value: number; onChange: (v: number) => void; min?: number; max?: number; step?: number }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="w-full">
      <div className="flex justify-between text-xs text-white/35 mb-3">
        <span>{min}%</span>
        <span className="text-violet-400 font-bold text-base">{value}%</span>
        <span>{max}%</span>
      </div>
      <div className="relative h-2 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
        <div className="absolute inset-y-0 left-0 rounded-full" style={{ width: `${pct}%`, background: "linear-gradient(90deg, #7C3AED, #EA580C)" }} />
        <input
          type="range" min={min} max={max} step={step} value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer h-full"
          style={{ height: "100%" }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 border-violet-400 shadow-lg"
          style={{ left: `calc(${pct}% - 10px)`, background: "#0D0B18", boxShadow: "0 0 12px rgba(124,58,237,0.6)" }}
        />
      </div>
      <div className="flex justify-between mt-3 gap-2">
        {[10,20,30,40,50,60,70,80].map(v => (
          <button key={v} onClick={() => onChange(v)} className="text-xs rounded px-1.5 py-0.5 transition-all" style={{ color: value === v ? "#A78BFA" : "rgba(255,255,255,0.2)", background: value === v ? "rgba(124,58,237,0.15)" : "transparent" }}>{v}%</button>
        ))}
      </div>
    </div>
  );
}

// ── Calculation ────────────────────────────────────────────────────────────────

function calculate(a: Answers) {
  const monthlyMissed = Math.round(a.dailyCalls * (a.missedPct / 100) * 30);
  const conversionRate = 0.67;
  const lostRevenue = Math.round(monthlyMissed * a.ticket * conversionRate);

  const employeeCost = a.employee === "exclusive" ? 900 : a.employee === "partial" ? 450 : 0;
  const afterHoursMissed = a.schedule === "office" ? Math.round(a.dailyCalls * 0.35 * 30) : a.schedule === "partial" ? Math.round(a.dailyCalls * 0.15 * 30) : 0;
  const afterHoursLoss = Math.round(afterHoursMissed * a.ticket * conversionRate);

  const totalLoss = lostRevenue + employeeCost + afterHoursLoss;
  const iaCost = 500;
  const netSavings = totalLoss - iaCost;
  const roi = iaCost > 0 ? Math.round(totalLoss / iaCost) : 0;

  return { monthlyMissed, lostRevenue, employeeCost, afterHoursLoss, totalLoss, iaCost, netSavings, roi };
}

// ── Results screen ─────────────────────────────────────────────────────────────

function ResultsScreen({ answers }: { answers: Answers }) {
  const { monthlyMissed, lostRevenue, employeeCost, afterHoursLoss, totalLoss, iaCost, netSavings, roi } = calculate(answers);

  const rows = [
    { label: "Ventas perdidas por llamadas no atendidas", value: lostRevenue, color: "text-red-400" },
    ...(employeeCost > 0 ? [{ label: "Costo operativo empleado telefónico", value: employeeCost, color: "text-orange-400" }] : []),
    ...(afterHoursLoss > 0 ? [{ label: "Pérdidas fuera de horario laboral", value: afterHoursLoss, color: "text-red-400/70" }] : []),
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero loss */}
      <div className="text-center mb-8 p-6 rounded-2xl" style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)" }}>
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-red-400/70 mb-2">Tu negocio está perdiendo cada mes</p>
        <div className="font-bold text-red-400 mb-1" style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif", fontSize: "clamp(2.8rem,6vw,4rem)", lineHeight: 1 }}>
          <Counter prefix="$" value={totalLoss} />
        </div>
        <p className="text-white/40 text-sm mt-2">
          <Counter value={monthlyMissed} suffix=" llamadas no atendidas" /> · estimación conservadora
        </p>
      </div>

      {/* Breakdown */}
      <div className="space-y-2.5 mb-8">
        {rows.map((r, i) => (
          <div key={i} className="flex items-center justify-between px-4 py-3 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <span className="text-white/55 text-sm">{r.label}</span>
            <span className={cn("font-bold text-sm ml-4 flex-shrink-0", r.color)}>
              -$<Counter value={r.value} />
            </span>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="relative my-6 flex items-center gap-3">
        <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
        <span className="text-xs text-white/30 tracking-widest uppercase">Con Sicentre IA</span>
        <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
      </div>

      {/* Savings */}
      <div className="p-5 rounded-2xl mb-6" style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.3)" }}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-violet-400/70 mb-1">Recuperas cada mes</p>
            <div className="font-bold text-violet-300" style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif", fontSize: "clamp(2rem,4vw,2.8rem)", lineHeight: 1 }}>
              +$<Counter value={Math.max(netSavings, 0)} />
            </div>
          </div>
          <div className="text-right">
            <div className="inline-flex flex-col items-center justify-center px-4 py-3 rounded-2xl" style={{ background: "linear-gradient(135deg, #7C3AED, #EA580C)" }}>
              <span className="text-white font-bold text-xl">×{roi}</span>
              <span className="text-white/80 text-xs font-semibold tracking-wider">ROI</span>
            </div>
          </div>
        </div>

        {/* Savings bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-white/40">
            <span>Inversión Sicentre IA</span>
            <span className="text-orange-400 font-semibold">${iaCost}/mes</span>
          </div>
          <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
            <div className="h-full rounded-full transition-all duration-1000 delay-300" style={{ width: `${Math.min((iaCost / totalLoss) * 100, 100)}%`, background: "linear-gradient(90deg, #EA580C, #FB923C)" }} />
          </div>
          <div className="flex justify-between text-xs text-white/40">
            <span>Lo que recuperas</span>
            <span className="text-violet-400 font-semibold">${Math.max(netSavings, 0).toLocaleString("es-AR")}/mes</span>
          </div>
          <div className="h-3 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
            <div className="h-full rounded-full transition-all duration-1000 delay-500" style={{ width: `${Math.min((netSavings / totalLoss) * 100, 100)}%`, background: "linear-gradient(90deg, #7C3AED, #A78BFA)" }} />
          </div>
        </div>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="/contacto"
          className="flex-1 py-4 px-6 rounded-full text-center font-bold text-white text-base transition-all duration-200 hover:-translate-y-0.5"
          style={{ background: "linear-gradient(135deg, #7C3AED, #EA580C)", boxShadow: "0 8px 32px rgba(124,58,237,0.35)" }}
        >
          Quiero recuperar ese dinero →
        </a>
        <a
          href="https://wa.me/message/XXXXXX"
          className="flex-1 py-4 px-6 rounded-full text-center font-semibold text-white/70 text-sm transition-all duration-200 hover:text-white"
          style={{ background: "rgba(255,255,255,0.055)", border: "1px solid rgba(255,255,255,0.11)" }}
        >
          Hablar con un asesor
        </a>
      </div>

      <p className="text-center text-white/25 text-xs mt-4">
        Simulación basada en estadísticas de la industria. Resultados reales pueden variar.
      </p>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────

export default function VozSimulator() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<Answers>>({
    missedPct: 35,
  });
  const [done, setDone] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const TOTAL_STEPS = 6;

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

  const restart = () => { setStep(0); setAnswers({ missedPct: 35 }); setDone(false); };

  const stepContent = [
    // Step 0 — Sector
    {
      question: "¿En qué sector opera tu negocio?",
      hint: "Esto nos permite calcular tus tasas de conversión reales",
      content: (
        <div className="grid grid-cols-2 gap-2.5">
          {[
            { label: "Restaurante / Bar", icon: "🍽️", value: "restaurant" },
            { label: "Clínica / Salud", icon: "🏥", value: "health" },
            { label: "Inmobiliaria", icon: "🏠", value: "realestate" },
            { label: "E-commerce / Tienda", icon: "📦", value: "ecommerce" },
            { label: "Servicios profesionales", icon: "💼", value: "services" },
            { label: "Otro negocio", icon: "🏢", value: "other" },
          ].map((o) => (
            <OptionCard
              key={o.value}
              label={o.label}
              icon={o.icon}
              selected={answers.sector === o.value}
              onClick={() => next({ sector: o.value })}
            />
          ))}
        </div>
      ),
    },
    // Step 1 — Daily calls
    {
      question: "¿Cuántas llamadas recibe tu negocio por día?",
      hint: "Incluye llamadas atendidas y las que no pudo atender",
      content: (
        <div className="grid grid-cols-1 gap-2.5">
          {[
            { label: "1 – 5 llamadas", sublabel: "Negocio pequeño o en crecimiento", value: 3 },
            { label: "5 – 15 llamadas", sublabel: "PYME activa", value: 10 },
            { label: "15 – 30 llamadas", sublabel: "Negocio consolidado", value: 22 },
            { label: "30 – 60 llamadas", sublabel: "Alto volumen de consultas", value: 45 },
            { label: "Más de 60 llamadas", sublabel: "Empresa o franquicia", value: 80 },
          ].map((o) => (
            <OptionCard
              key={o.value}
              label={o.label}
              sublabel={o.sublabel}
              selected={answers.dailyCalls === o.value}
              onClick={() => next({ dailyCalls: o.value })}
            />
          ))}
        </div>
      ),
    },
    // Step 2 — Ticket
    {
      question: "¿Cuánto vale en promedio una venta o cita?",
      hint: "El valor medio de lo que ganas cuando un cliente cierra",
      content: (
        <div className="grid grid-cols-1 gap-2.5">
          {[
            { label: "$20 – $80", sublabel: "Ticket bajo: comida rápida, servicios básicos", value: 50 },
            { label: "$80 – $200", sublabel: "Ticket medio: restaurante, esteticista, taller", value: 140 },
            { label: "$200 – $500", sublabel: "Ticket medio-alto: clínica, consultoría", value: 350 },
            { label: "$500 – $1,500", sublabel: "Ticket alto: servicios premium, inmobiliaria", value: 1000 },
            { label: "Más de $1,500", sublabel: "Ticket muy alto: proyectos, propiedades", value: 3000 },
          ].map((o) => (
            <OptionCard
              key={o.value}
              label={o.label}
              sublabel={o.sublabel}
              selected={answers.ticket === o.value}
              onClick={() => next({ ticket: o.value })}
            />
          ))}
        </div>
      ),
    },
    // Step 3 — Schedule
    {
      question: "¿En qué horario atiende actualmente su teléfono?",
      hint: "El tiempo sin cobertura telefónica es dinero que se escapa",
      content: (
        <div className="flex flex-col gap-2.5">
          <OptionCard
            label="Solo horario de oficina (9h-18h)"
            sublabel="Fuera de ese horario, nadie atiende"
            icon="🌅"
            selected={answers.schedule === "office"}
            onClick={() => next({ schedule: "office" })}
          />
          <OptionCard
            label="Atención parcial o irregular"
            sublabel="A veces hay alguien, a veces no"
            icon="🔄"
            selected={answers.schedule === "partial"}
            onClick={() => next({ schedule: "partial" })}
          />
          <OptionCard
            label="Cobertura manual casi total"
            sublabel="Empleado(s) dedicados al teléfono"
            icon="👥"
            selected={answers.schedule === "fulltime"}
            onClick={() => next({ schedule: "fulltime" })}
          />
        </div>
      ),
    },
    // Step 4 — Missed %
    {
      question: "¿Qué porcentaje de llamadas estima que quedan sin respuesta?",
      hint: "Promedio de la industria: entre 30% y 50% de las llamadas no se atienden",
      content: (
        <div>
          <RangeSlider value={answers.missedPct ?? 35} onChange={(v) => setAnswers((a) => ({ ...a, missedPct: v }))} />
          <button
            className="w-full mt-6 py-3.5 rounded-full font-bold text-white text-sm transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #7C3AED, #EA580C)" }}
            onClick={() => next({ missedPct: answers.missedPct ?? 35 })}
          >
            Continuar →
          </button>
        </div>
      ),
    },
    // Step 5 — Employee
    {
      question: "¿Tiene personal dedicado a atender el teléfono?",
      hint: "Esto suma al costo real que ya tienes sin saberlo",
      content: (
        <div className="flex flex-col gap-2.5">
          <OptionCard
            label="Sí, empleado exclusivo para teléfono"
            sublabel="~$900/mes en salario + cargas sociales"
            icon="👤"
            selected={answers.employee === "exclusive"}
            onClick={() => next({ employee: "exclusive" })}
          />
          <OptionCard
            label="Sí, pero también hace otras tareas"
            sublabel="~$450/mes en costo parcial estimado"
            icon="🧑‍💻"
            selected={answers.employee === "partial"}
            onClick={() => next({ employee: "partial" })}
          />
          <OptionCard
            label="No, cada uno atiende cuando puede"
            sublabel="El costo es tiempo productivo perdido"
            icon="❌"
            selected={answers.employee === "none"}
            onClick={() => next({ employee: "none" })}
          />
        </div>
      ),
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-10 overflow-hidden" style={{ background: "linear-gradient(180deg, #0F0C1E 0%, #0D0B18 100%)" }}>
      <div className="max-w-2xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(251,146,60,0.7)" }}>
            Simulador de pérdidas
          </p>
          <h2 className="font-clash text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            ¿Cuánto dinero estás
            <br />
            <span style={{ color: "#EA580C" }}>perdiendo ahora mismo?</span>
          </h2>
          <p className="text-white/50 text-base max-w-md mx-auto">
            Responde 6 preguntas y te mostramos el cálculo exacto en tu sector.
          </p>
        </div>

        {/* Card */}
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
                <h3 className="font-clash font-bold text-white text-xl">Tu diagnóstico personalizado</h3>
                <button onClick={restart} className="text-xs text-white/30 hover:text-white/60 transition-colors px-3 py-1.5 rounded-full" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
                  Recalcular
                </button>
              </div>
              <ResultsScreen answers={answers as Answers} />
            </>
          )}
        </div>

        {/* Trust badge */}
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
