"use client";

import { useState } from "react";
import { MessageCircle, Mail, MapPin, Check, ChevronRight, ChevronDown, Clock, ShieldCheck, Lightbulb, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

/* ── Qualification questions ─────────────────────────────── */
const STEPS = [
  {
    id: "servicio",
    question: "¿Qué servicio le interesa?",
    options: [
      { value: "web",    label: "Diseño Web",    icon: "🌐" },
      { value: "voz",    label: "Agente Voz IA", icon: "🤖" },
      { value: "studio", label: "Studio Visual", icon: "🎬" },
      { value: "todo",   label: "Todo junto",    icon: "⚡" },
    ],
  },
  {
    id: "empresa",
    question: "¿Cómo describe su empresa?",
    options: [
      { value: "freelance", label: "Emprendedor / Freelance", icon: "👤" },
      { value: "pyme",      label: "Pequeña empresa",         icon: "🏢" },
      { value: "mediana",   label: "Empresa mediana",         icon: "🏛️" },
      { value: "grande",    label: "Empresa grande",          icon: "🌍" },
    ],
  },
  {
    id: "presupuesto",
    question: "¿Cuál es su presupuesto aproximado?",
    options: [
      { value: "less500",   label: "Menos de $500",   icon: "💡" },
      { value: "500_2000",  label: "$500 – $2.000",   icon: "📈" },
      { value: "2000_5000", label: "$2.000 – $5.000", icon: "🚀" },
      { value: "more5000",  label: "Más de $5.000",   icon: "💎" },
    ],
  },
  {
    id: "timing",
    question: "¿Cuándo quiere comenzar?",
    options: [
      { value: "now",       label: "Ya mismo",          icon: "⚡" },
      { value: "1month",    label: "En menos de 1 mes", icon: "📅" },
      { value: "3months",   label: "En 2–3 meses",      icon: "🗓️" },
      { value: "exploring", label: "Solo explorando",   icon: "👀" },
    ],
  },
];

const TRUST_CHIPS = [
  { icon: Clock,       title: "Respuesta en 24h",         sub: "Lun a vie · horario paraguayo" },
  { icon: ShieldCheck, title: "Sin compromiso",           sub: "La consulta es gratis y sin presión" },
  { icon: Lightbulb,   title: "Ideas desde el día 1",     sub: "Propuestas concretas, sin humo" },
];

const inputStyle = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.10)",
};

/* ── Discrete alternative contact (collapsible) ──────────── */

function AltContact({ leadName }: { leadName?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-6">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-center gap-1.5 mx-auto px-4 py-2 rounded-full text-sm font-medium text-white/55 hover:text-white transition-colors"
        aria-expanded={open}
      >
        ¿Prefiere otro canal?
        <ChevronDown
          size={14}
          className={cn("transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      <div
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
          open ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a
              href={`https://wa.me/595981000000?text=Hola%20Sicentre${leadName ? `%20soy%20${encodeURIComponent(leadName)}` : ""}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-3.5 rounded-2xl transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "rgba(37,211,102,0.06)",
                border: "1px solid rgba(37,211,102,0.22)",
              }}
            >
              <span
                className="inline-flex items-center justify-center w-9 h-9 rounded-xl shrink-0"
                style={{ background: "rgba(37,211,102,0.20)" }}
              >
                <MessageCircle size={16} style={{ color: "#25D366" }} strokeWidth={2.2} />
              </span>
              <span className="flex-1 min-w-0">
                <span className="block text-sm font-semibold text-white">WhatsApp</span>
                <span className="block text-[11px] text-white/45 truncate">+595 981 000 000</span>
              </span>
              <span className="text-green-400 group-hover:translate-x-0.5 transition-transform">→</span>
            </a>

            <a
              href="mailto:hola@sicentre.com"
              className="group flex items-center gap-3 p-3.5 rounded-2xl transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "rgba(124,58,237,0.06)",
                border: "1px solid rgba(124,58,237,0.22)",
              }}
            >
              <span
                className="inline-flex items-center justify-center w-9 h-9 rounded-xl shrink-0"
                style={{ background: "rgba(124,58,237,0.20)" }}
              >
                <Mail size={16} style={{ color: "#A78BFA" }} strokeWidth={2.2} />
              </span>
              <span className="flex-1 min-w-0">
                <span className="block text-sm font-semibold text-white">Email</span>
                <span className="block text-[11px] text-white/45 truncate">hola@sicentre.com</span>
              </span>
              <span className="text-violet-400 group-hover:translate-x-0.5 transition-transform">→</span>
            </a>

            <div
              className="flex items-center gap-3 p-3.5 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <span
                className="inline-flex items-center justify-center w-9 h-9 rounded-xl shrink-0"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <MapPin size={16} className="text-white/55" strokeWidth={2.2} />
              </span>
              <span className="flex-1 min-w-0">
                <span className="block text-sm font-semibold text-white">Asunción, Paraguay</span>
                <span className="block text-[11px] text-white/45">Atendemos toda Latinoamérica</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main component ──────────────────────────────────────── */

export default function ContactoPage() {
  const [step, setStep] = useState(0); // 0–3 = questions, 4 = contact form, 5 = success
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contact, setContact] = useState({ nombre: "", whatsapp: "", email: "" });
  const [loading, setLoading] = useState(false);

  const isQuestion = step < STEPS.length;
  const currentQ = isQuestion ? STEPS[step] : null;
  const totalSteps = STEPS.length + 1; // questions + form
  const stepLabel = step < STEPS.length ? step + 1 : STEPS.length + 1;
  const progress = Math.min((step / totalSteps) * 100, 100);

  /* Auto-advance on option select — no Next button needed */
  function selectOption(value: string) {
    if (!currentQ) return;
    setAnswers((prev) => ({ ...prev, [currentQ.id]: value }));
    setStep((s) => s + 1);
  }

  function goBack() {
    if (step > 0 && step <= STEPS.length) {
      setStep((s) => s - 1);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    console.log("[Sicentre Contact]", { ...answers, ...contact });
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setStep(STEPS.length + 1); // success
  }

  const isSuccess = step === STEPS.length + 1;
  const isContactForm = step === STEPS.length;

  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}
      <div className="relative pt-32 pb-10 px-6 md:px-10 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2"
            style={{
              width: "min(120vw, 720px)",
              height: "300px",
              background: "radial-gradient(ellipse, rgba(124,58,237,0.20) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div
            className="absolute top-10 right-1/4"
            style={{
              width: "min(80vw, 320px)",
              height: "200px",
              background: "radial-gradient(ellipse, rgba(234,88,12,0.12) 0%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1
            className="font-clash leading-[0.9] mb-5 text-white"
            style={{ fontSize: "clamp(3.2rem, 9vw, 7rem)", textShadow: "0 0 60px rgba(255,255,255,0.15)" }}
          >
            Hablemos.
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Cuéntenos su proyecto en cuatro preguntas. Le respondemos en menos de 24 horas con ideas concretas, sin costo y sin compromiso.
          </p>
        </div>
      </div>

      {/* ── Trust chips strip ── */}
      {!isSuccess && (
        <div className="px-6 md:px-10 mb-8 md:mb-10">
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3">
            {TRUST_CHIPS.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  <span
                    className="inline-flex items-center justify-center w-9 h-9 rounded-xl shrink-0"
                    style={{
                      background: "rgba(124,58,237,0.18)",
                      border: "1px solid rgba(124,58,237,0.35)",
                    }}
                  >
                    <Icon size={15} className="text-violet-200" strokeWidth={2.2} />
                  </span>
                  <div className="flex flex-col leading-tight">
                    <span className="text-sm font-semibold text-white">{c.title}</span>
                    <span className="text-[11px] text-white/45">{c.sub}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Main focused card ── */}
      <div className="px-6 md:px-10 pb-10 md:pb-14">
        <div className="max-w-2xl mx-auto">
          <div
            className="rounded-3xl p-6 md:p-8"
            style={{
              backdropFilter: "blur(32px)",
              WebkitBackdropFilter: "blur(32px)",
              background: "rgba(20,16,38,0.55)",
              border: "1px solid rgba(255,255,255,0.14)",
              boxShadow: "0 24px 70px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)",
            }}
          >
            {/* ── Success ── */}
            {isSuccess ? (
              <div className="flex flex-col items-center gap-4 py-6 md:py-8 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #7C3AED, #EA580C)" }}
                >
                  <Check size={32} className="text-white" strokeWidth={2.5} />
                </div>
                <h3 className="font-clash text-3xl font-bold text-white">¡Mensaje enviado!</h3>
                <p className="text-white/60 text-sm max-w-md leading-relaxed">
                  Recibimos su consulta{contact.nombre ? `, ${contact.nombre}` : ""}. Le respondemos en menos de 24 horas con ideas concretas y un plan a su medida.
                </p>

                {/* Contact options for follow-up — appear AFTER the form */}
                <div className="w-full mt-3">
                  <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-white/40 mb-3">
                    Mientras tanto
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href={`https://wa.me/595981000000?text=Hola%20Sicentre${contact.nombre ? `%2C%20soy%20${encodeURIComponent(contact.nombre)}` : ""}%2C%20acabo%20de%20enviar%20mi%20consulta`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 rounded-full font-semibold text-white text-sm transition-all hover:-translate-y-0.5"
                      style={{ background: "#25D366", boxShadow: "0 8px 22px rgba(37,211,102,0.30)" }}
                    >
                      <MessageCircle size={16} />
                      Adelantar por WhatsApp
                    </a>
                    <a
                      href="mailto:hola@sicentre.com"
                      className="flex items-center justify-center gap-2 px-4 py-3 rounded-full font-semibold text-white text-sm transition-all hover:-translate-y-0.5"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.14)",
                      }}
                    >
                      <Mail size={16} className="text-violet-300" />
                      hola@sicentre.com
                    </a>
                  </div>
                </div>
              </div>

              /* ── Contact form ── */
            ) : isContactForm ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Header with back */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-violet-300 mb-1">
                      Último paso · {stepLabel} / {totalSteps}
                    </p>
                    <h3 className="font-clash text-2xl text-white leading-tight">¿Cómo le contactamos?</h3>
                  </div>
                  <button
                    type="button"
                    onClick={goBack}
                    className="inline-flex items-center gap-1 text-xs text-white/45 hover:text-white/80 transition-colors px-2 py-1 rounded-md shrink-0"
                  >
                    <ArrowLeft size={12} /> Volver
                  </button>
                </div>

                {/* Progress */}
                <div className="h-1 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
                  <div
                    className="h-1 rounded-full transition-all duration-500"
                    style={{ width: `${(step / totalSteps) * 100}%`, background: "linear-gradient(90deg, #7C3AED, #EA580C)" }}
                  />
                </div>

                {[
                  { name: "nombre",   label: "Nombre",   type: "text",  placeholder: "Juan Pérez", required: true },
                  { name: "whatsapp", label: "WhatsApp", type: "tel",   placeholder: "+595 981 000 000", required: true },
                  { name: "email",    label: "Email (opcional)", type: "email", placeholder: "juan@empresa.com", required: false },
                ].map((f) => (
                  <div key={f.name} className="flex flex-col gap-1.5">
                    <label className="text-xs text-white/55 font-medium">
                      {f.label}{f.required && <span className="text-violet-300 ml-0.5">*</span>}
                    </label>
                    <input
                      type={f.type}
                      required={f.required}
                      placeholder={f.placeholder}
                      value={contact[f.name as keyof typeof contact]}
                      onChange={(e) => setContact((p) => ({ ...p, [f.name]: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder:text-white/25 outline-none transition-all focus:border-violet-500/60"
                      style={inputStyle}
                    />
                  </div>
                ))}

                {/* Recap pills of previous answers */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {Object.entries(answers).map(([key, val]) => {
                    const q = STEPS.find((s) => s.id === key);
                    const opt = q?.options.find((o) => o.value === val);
                    return opt ? (
                      <span
                        key={key}
                        className="text-[11px] px-2.5 py-1 rounded-full"
                        style={{
                          background: "rgba(124,58,237,0.18)",
                          border: "1px solid rgba(124,58,237,0.35)",
                          color: "rgba(196,181,253,0.95)",
                        }}
                      >
                        {opt.icon} {opt.label}
                      </span>
                    ) : null;
                  })}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-white font-semibold text-sm transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-600/30 disabled:opacity-70"
                  style={{ background: "linear-gradient(135deg, #7C3AED, #EA580C)" }}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Enviando...
                    </>
                  ) : "Enviar consulta →"}
                </button>
              </form>

              /* ── Qualification questions ── */
            ) : (
              <div className="flex flex-col gap-6">
                {/* Header with back + step */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-violet-300 mb-1">
                      Pregunta {stepLabel} de {totalSteps}
                    </p>
                    <h3 className="font-clash text-xl md:text-2xl text-white leading-snug">
                      {currentQ?.question}
                    </h3>
                  </div>
                  {step > 0 && (
                    <button
                      type="button"
                      onClick={goBack}
                      className="inline-flex items-center gap-1 text-xs text-white/45 hover:text-white/80 transition-colors px-2 py-1 rounded-md shrink-0"
                    >
                      <ArrowLeft size={12} /> Volver
                    </button>
                  )}
                </div>

                {/* Progress bar */}
                <div className="h-1 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
                  <div
                    className="h-1 rounded-full transition-all duration-500"
                    style={{ width: `${progress}%`, background: "linear-gradient(90deg, #7C3AED, #EA580C)" }}
                  />
                </div>

                {/* Options — auto-advance on click */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentQ?.options.map((opt) => {
                    const wasSelected = answers[currentQ.id] === opt.value;
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => selectOption(opt.value)}
                        className={cn(
                          "group flex items-center gap-3 px-4 py-4 rounded-2xl text-left transition-all duration-200 hover:scale-[1.01] hover:-translate-y-0.5",
                        )}
                        style={{
                          background: wasSelected ? "rgba(124,58,237,0.22)" : "rgba(255,255,255,0.04)",
                          border: `1px solid ${wasSelected ? "rgba(124,58,237,0.55)" : "rgba(255,255,255,0.10)"}`,
                          boxShadow: wasSelected ? "0 0 18px rgba(124,58,237,0.18)" : "none",
                        }}
                      >
                        <span className="text-2xl shrink-0">{opt.icon}</span>
                        <span className="text-sm font-semibold text-white/90 leading-tight flex-1">
                          {opt.label}
                        </span>
                        <ChevronRight
                          size={16}
                          className="text-white/35 group-hover:text-violet-300 group-hover:translate-x-0.5 transition-all shrink-0"
                        />
                      </button>
                    );
                  })}
                </div>

                {/* Hint */}
                <p className="text-[11px] text-white/35 text-center">
                  Toque una opción para continuar
                </p>
              </div>
            )}
          </div>

          {/* ── Discrete alt-contact toggle (only during questions/form) ── */}
          {!isSuccess && <AltContact leadName={contact.nombre} />}
        </div>
      </div>
    </div>
  );
}
