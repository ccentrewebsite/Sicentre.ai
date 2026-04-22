"use client";

import { useState } from "react";
import { MessageCircle, Mail, MapPin, Check, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// ── Same 4 qualification questions as landing ──────────────────────────────────

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

const inputStyle = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.10)",
};

// ── Main component ─────────────────────────────────────────────────────────────

export default function ContactoPage() {
  const [step, setStep] = useState(0);          // 0–3 = questions, 4 = contact form, 5 = success
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selected, setSelected] = useState("");
  const [contact, setContact] = useState({ nombre: "", whatsapp: "", email: "" });
  const [loading, setLoading] = useState(false);

  const currentQ = STEPS[step];
  const progress = Math.round((step / STEPS.length) * 100);

  function handleNext() {
    if (!selected) return;
    setAnswers((prev) => ({ ...prev, [currentQ.id]: selected }));
    setSelected("");
    setStep((s) => s + 1);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    console.log("[Sicentre Contact]", { ...answers, ...contact });
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setStep(5);
  }

  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}
      <div className="relative pt-32 pb-12 px-6 md:px-10 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]" style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.2) 0%, transparent 70%)", filter: "blur(60px)" }} />
          <div className="absolute top-10 right-1/4 w-[300px] h-[200px]" style={{ background: "radial-gradient(ellipse, rgba(234,88,12,0.12) 0%, transparent 70%)", filter: "blur(50px)" }} />
        </div>
        <div className="relative z-10">
          <h1 className="font-clash leading-[0.9] mb-5 text-white" style={{ fontSize: "clamp(4rem, 10vw, 9rem)", textShadow: "0 0 60px rgba(255,255,255,0.15)" }}>
            Hablemos.
          </h1>
          <p className="text-white/55 text-lg max-w-2xl mx-auto leading-relaxed">
            Cuéntenos su proyecto. Le respondemos en menos de 24 horas con ideas concretas, sin costo y sin compromiso.
          </p>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="px-6 md:px-10 pb-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* ── Form ── */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl p-7 md:p-8" style={{ backdropFilter: "blur(32px)", WebkitBackdropFilter: "blur(32px)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", boxShadow: "0 8px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.07)" }}>

              {/* ── Success ── */}
              {step === 5 ? (
                <div className="flex flex-col items-center gap-4 py-10 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #7C3AED, #EA580C)" }}>
                    <Check size={32} className="text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="font-clash text-3xl font-bold text-white">¡Mensaje enviado!</h3>
                  <p className="text-white/55 text-sm max-w-xs leading-relaxed">
                    Recibimos su consulta. Le respondemos en menos de 24 horas con ideas concretas y sin compromiso.
                  </p>
                  <a
                    href="https://wa.me/595981000000?text=Hola%20Sicentre%2C%20acabo%20de%20enviar%20mi%20consulta"
                    target="_blank" rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm transition-all hover:-translate-y-0.5"
                    style={{ background: "#25D366" }}
                  >
                    <MessageCircle size={16} /> Escribir por WhatsApp
                  </a>
                </div>

              /* ── Contact form ── */
              ) : step === 4 ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase text-violet-400/70 mb-1">Último paso</p>
                    <h3 className="font-clash text-2xl text-white">¿Cómo le contactamos?</h3>
                  </div>

                  {[
                    { name: "nombre",   label: "Nombre *",   type: "text",  placeholder: "Juan Pérez"          },
                    { name: "whatsapp", label: "WhatsApp *", type: "tel",   placeholder: "+595 981 000 000"     },
                    { name: "email",    label: "Email",      type: "email", placeholder: "juan@empresa.com"     },
                  ].map((f) => (
                    <div key={f.name} className="flex flex-col gap-1.5">
                      <label className="text-xs text-white/40 font-medium">{f.label}</label>
                      <input
                        type={f.type}
                        required={f.label.includes("*")}
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

                  <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-white font-semibold text-sm transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-600/30 disabled:opacity-70" style={{ background: "linear-gradient(135deg, #7C3AED, #EA580C)" }}>
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
                  <h3 className="font-clash text-xl md:text-2xl text-white leading-snug">{currentQ.question}</h3>

                  {/* Options */}
                  <div className="grid grid-cols-2 gap-3">
                    {currentQ.options.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setSelected(opt.value)}
                        className={cn("flex flex-col items-start gap-1.5 px-4 py-3.5 rounded-xl text-left transition-all duration-200", selected === opt.value ? "scale-[1.02]" : "hover:scale-[1.01]")}
                        style={{
                          background: selected === opt.value ? "rgba(124,58,237,0.22)" : "rgba(255,255,255,0.04)",
                          border: `1px solid ${selected === opt.value ? "rgba(124,58,237,0.6)" : "rgba(255,255,255,0.08)"}`,
                          boxShadow: selected === opt.value ? "0 0 20px rgba(124,58,237,0.2)" : "none",
                        }}
                      >
                        <span className="text-xl">{opt.icon}</span>
                        <span className="text-sm font-medium text-white/85 leading-tight">{opt.label}</span>
                      </button>
                    ))}
                  </div>

                  {/* Next */}
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

          {/* ── Sidebar ── */}
          <div className="lg:col-span-2 flex flex-col gap-5 lg:pt-2">
            <h2 className="font-clash text-xl font-bold text-white">Contacto directo.</h2>

            <a href="https://wa.me/595981000000?text=Hola%20Sicentre%2C%20quiero%20saber%20m%C3%A1s" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 rounded-2xl transition-all duration-200" style={{ border: "1px solid rgba(37,211,102,0.2)", background: "rgba(37,211,102,0.04)" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(37,211,102,0.2)", color: "#25D366" }}><MessageCircle size={18} /></div>
              <div className="flex-1">
                <p className="text-white font-semibold text-sm">WhatsApp</p>
                <p className="text-white/50 text-xs">+595 981 000 000</p>
              </div>
              <span className="text-green-400 text-sm group-hover:translate-x-1 transition-transform">→</span>
            </a>

            <a href="mailto:hola@sicentre.com" className="group flex items-center gap-4 p-4 rounded-2xl transition-all duration-200" style={{ border: "1px solid rgba(124,58,237,0.2)", background: "rgba(124,58,237,0.04)" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(124,58,237,0.2)", color: "#A78BFA" }}><Mail size={18} /></div>
              <div className="flex-1">
                <p className="text-white font-semibold text-sm">Email</p>
                <p className="text-white/50 text-xs">hola@sicentre.com</p>
              </div>
              <span className="text-violet-400 text-sm group-hover:translate-x-1 transition-transform">→</span>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.4)" }}><MapPin size={18} /></div>
              <div>
                <p className="text-white font-semibold text-sm">Asunción, Paraguay</p>
                <p className="text-white/40 text-xs">Atendemos toda Latinoamérica</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-2">
              {[
                { icon: "⚡", title: "Respuesta en menos de 24h", sub: "Lun–Vie, horario paraguayo" },
                { icon: "🔒", title: "Sin compromiso", sub: "La consulta es gratis y sin presión" },
                { icon: "💡", title: "Ideas concretas desde el día 1", sub: "No vendemos humo, proponemos soluciones" },
              ].map((arg) => (
                <div key={arg.title} className="flex items-start gap-3">
                  <span className="text-lg flex-shrink-0">{arg.icon}</span>
                  <div>
                    <p className="text-white/80 text-sm font-semibold">{arg.title}</p>
                    <p className="text-white/40 text-xs">{arg.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
