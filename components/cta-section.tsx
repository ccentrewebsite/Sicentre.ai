"use client";

import { useState } from "react";
import { Check, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// ── Qualification questions ────────────────────────────────────────────────────

const STEPS = [
  {
    id: "servicio",
    question: "¿Qué servicio le interesa?",
    options: [
      { value: "web",     label: "Diseño Web",    icon: "🌐" },
      { value: "voz",     label: "Agente Voz IA", icon: "🤖" },
      { value: "studio",  label: "Studio Visual", icon: "🎬" },
      { value: "todo",    label: "Todo junto",    icon: "⚡" },
    ],
  },
  {
    id: "empresa",
    question: "¿Cómo describe su empresa?",
    options: [
      { value: "freelance",  label: "Emprendedor / Freelance", icon: "👤" },
      { value: "pyme",       label: "Pequeña empresa",         icon: "🏢" },
      { value: "mediana",    label: "Empresa mediana",         icon: "🏛️" },
      { value: "grande",     label: "Empresa grande",          icon: "🌍" },
    ],
  },
  {
    id: "presupuesto",
    question: "¿Cuál es su presupuesto aproximado?",
    options: [
      { value: "less500",    label: "Menos de $500",    icon: "💡" },
      { value: "500_2000",   label: "$500 – $2.000",    icon: "📈" },
      { value: "2000_5000",  label: "$2.000 – $5.000",  icon: "🚀" },
      { value: "more5000",   label: "Más de $5.000",    icon: "💎" },
    ],
  },
  {
    id: "timing",
    question: "¿Cuándo quiere comenzar?",
    options: [
      { value: "now",        label: "Ya mismo",          icon: "⚡" },
      { value: "1month",     label: "En menos de 1 mes", icon: "📅" },
      { value: "3months",    label: "En 2–3 meses",      icon: "🗓️" },
      { value: "exploring",  label: "Solo explorando",   icon: "👀" },
    ],
  },
];

const inputStyle = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.10)",
};

const benefits = [
  "Respuesta en menos de 24 horas",
  "Sin compromiso ni costo",
  "Consejo gratuito y personalizado",
  "Equipo basado en Asunción, Paraguay",
];

export default function CTASection() {
  const [step, setStep] = useState(0);                  // 0–3 = questions, 4 = contact form, 5 = success
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selected, setSelected] = useState<string>("");
  const [contact, setContact] = useState({ nombre: "", whatsapp: "", email: "" });
  const [loading, setLoading] = useState(false);

  const currentQ = STEPS[step];
  const progress = Math.round(((step) / STEPS.length) * 100);

  function handleSelect(value: string) {
    setSelected(value);
  }

  function handleNext() {
    if (!selected) return;
    const newAnswers = { ...answers, [currentQ.id]: selected };
    setAnswers(newAnswers);
    setSelected("");
    setStep((s) => s + 1);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setStep(5);
  }

  return (
    <section id="contacto" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background glows */}
      <div className="absolute pointer-events-none" style={{ width: "700px", height: "700px", background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)", top: "-200px", left: "-200px", borderRadius: "50%", filter: "blur(80px)" }} />
      <div className="absolute pointer-events-none" style={{ width: "500px", height: "500px", background: "radial-gradient(circle, rgba(234,88,12,0.12) 0%, transparent 70%)", bottom: "-150px", right: "-100px", borderRadius: "50%", filter: "blur(80px)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left column ── */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-400/70 mb-5">Contacto</p>
            <h2 className="font-clash leading-[1.0] mb-6" style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}>
              <span className="block text-white" style={{ textShadow: "0 0 40px rgba(255,255,255,0.25), 0 0 80px rgba(255,255,255,0.10)" }}>
                Hablemos.
              </span>
            </h2>
            <p className="text-white/55 text-base md:text-lg leading-relaxed mb-10">
              Cuéntenos su proyecto y le responderemos en menos de 24 horas con ideas concretas para su negocio, sin costo y sin compromiso.
            </p>
            <ul className="flex flex-col gap-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "rgba(124,58,237,0.25)", border: "1px solid rgba(124,58,237,0.5)" }}>
                    <Check size={12} className="text-violet-400" strokeWidth={3} />
                  </div>
                  <span className="text-white/70 text-sm">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right column — stepper ── */}
          <div>
            <div className="rounded-2xl p-7 md:p-8" style={{ backdropFilter: "blur(32px)", WebkitBackdropFilter: "blur(32px)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", boxShadow: "0 8px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.07)" }}>

              {/* ── Success ── */}
              {step === 5 ? (
                <div className="flex flex-col items-center gap-4 py-8 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #7C3AED, #EA580C)" }}>
                    <Check size={32} className="text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="font-clash text-2xl font-bold text-white">¡Mensaje enviado!</h3>
                  <p className="text-white/60 text-sm">Le contactamos en menos de 24 horas. También puede escribirnos por WhatsApp.</p>
                  <a href="https://wa.me/595981000000" className="mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm transition-all hover:-translate-y-0.5" style={{ background: "linear-gradient(135deg, #7C3AED, #EA580C)" }}>
                    Ir a WhatsApp →
                  </a>
                </div>

              /* ── Contact form (after qualification) ── */
              ) : step === 4 ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="mb-1">
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase text-violet-400/70 mb-1">Último paso</p>
                    <h3 className="font-clash text-xl text-white">¿Cómo le contactamos?</h3>
                  </div>
                  {[
                    { name: "nombre",   label: "Nombre *",   type: "text",  placeholder: "Juan Pérez"           },
                    { name: "whatsapp", label: "WhatsApp *", type: "tel",   placeholder: "+595 981 000 000"      },
                    { name: "email",    label: "Email *",    type: "email", placeholder: "juan@empresa.com"      },
                  ].map((f) => (
                    <div key={f.name} className="flex flex-col gap-1.5">
                      <label className="text-xs text-white/40 font-medium">{f.label}</label>
                      <input
                        type={f.type}
                        required
                        placeholder={f.placeholder}
                        value={contact[f.name as keyof typeof contact]}
                        onChange={(e) => setContact((p) => ({ ...p, [f.name]: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder:text-white/25 outline-none transition-all focus:border-violet-500/50"
                        style={inputStyle}
                      />
                    </div>
                  ))}

                  {/* Summary pills */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {Object.entries(answers).map(([key, val]) => {
                      const q = STEPS.find((s) => s.id === key);
                      const opt = q?.options.find((o) => o.value === val);
                      return opt ? (
                        <span key={key} className="text-xs px-3 py-1 rounded-full" style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.35)", color: "rgba(167,139,250,0.9)" }}>
                          {opt.icon} {opt.label}
                        </span>
                      ) : null;
                    })}
                  </div>

                  <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-white font-semibold text-sm transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-600/30 disabled:opacity-70 mt-1" style={{ background: "linear-gradient(135deg, #7C3AED, #EA580C)" }}>
                    {loading ? (
                      <><svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Enviando...</>
                    ) : "Enviar consulta →"}
                  </button>
                </form>

              /* ── Qualification questions ── */
              ) : (
                <div className="flex flex-col gap-6">
                  {/* Progress bar */}
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-white/35">{step + 1} / {STEPS.length}</span>
                      <span className="text-xs text-white/35">{progress}%</span>
                    </div>
                    <div className="h-1 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
                      <div className="h-1 rounded-full transition-all duration-500" style={{ width: `${progress}%`, background: "linear-gradient(90deg, #7C3AED, #EA580C)" }} />
                    </div>
                  </div>

                  {/* Question */}
                  <h3 className="font-clash text-lg md:text-xl text-white leading-snug">{currentQ.question}</h3>

                  {/* Options */}
                  <div className="grid grid-cols-2 gap-3">
                    {currentQ.options.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => handleSelect(opt.value)}
                        className={cn(
                          "flex flex-col items-start gap-1.5 px-4 py-3.5 rounded-xl text-left transition-all duration-200",
                          selected === opt.value
                            ? "border-violet-500/70 scale-[1.02]"
                            : "border-white/10 hover:border-violet-400/40 hover:scale-[1.01]"
                        )}
                        style={{
                          background: selected === opt.value ? "rgba(124,58,237,0.22)" : "rgba(255,255,255,0.04)",
                          border: `1px solid ${selected === opt.value ? "rgba(124,58,237,0.6)" : "rgba(255,255,255,0.08)"}`,
                          boxShadow: selected === opt.value ? "0 0 20px rgba(124,58,237,0.2)" : "none",
                        }}
                      >
                        <span className="text-lg">{opt.icon}</span>
                        <span className="text-sm font-medium text-white/85 leading-tight">{opt.label}</span>
                      </button>
                    ))}
                  </div>

                  {/* Next button */}
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!selected}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-white font-semibold text-sm transition-all hover:-translate-y-0.5 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    style={{ background: selected ? "linear-gradient(135deg, #7C3AED, #EA580C)" : "rgba(255,255,255,0.08)" }}
                  >
                    {step === STEPS.length - 1 ? "Ver formulario de contacto" : "Siguiente"} <ChevronRight size={16} />
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
