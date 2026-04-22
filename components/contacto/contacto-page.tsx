"use client";

import { useState } from "react";
import {
  MessageCircle,
  Mail,
  MapPin,
  Check,
  ChevronRight,
  User,
  Building2,
  Phone,
  FileText,
  DollarSign,
  CheckCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Step types ─────────────────────────────────────────────── */
type FormData = {
  nombre: string;
  empresa: string;
  whatsapp: string;
  email: string;
  servicios: string[];
  descripcion: string;
  presupuesto: string;
};

const SERVICES = ["Web", "Voz IA", "Studio / Motion", "Todo (ULTRA 360)"];
const BUDGETS = [
  { label: "Menos de $500", value: "<500" },
  { label: "$500 a $2.000", value: "500-2000" },
  { label: "$2.000 a $5.000", value: "2000-5000" },
  { label: "Más de $5.000", value: ">5000" },
];

const STEPS = [
  { id: 1, label: "Identidad", icon: User },
  { id: 2, label: "Proyecto", icon: FileText },
  { id: 3, label: "Presupuesto", icon: DollarSign },
  { id: 4, label: "Confirmación", icon: CheckCircle },
];

/* ─── Step indicator ─────────────────────────────────────────── */
function StepIndicator({ step, currentStep }: { step: typeof STEPS[0]; currentStep: number }) {
  const Icon = step.icon;
  const done = step.id < currentStep;
  const active = step.id === currentStep;

  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border",
          done
            ? "bg-violet-600 border-violet-600 text-white"
            : active
            ? "bg-violet-600/20 border-violet-500 text-violet-400"
            : "bg-white/4 border-white/10 text-white/30"
        )}
      >
        {done ? <Check size={16} /> : <Icon size={16} />}
      </div>
      <span
        className={cn(
          "text-[10px] font-semibold uppercase tracking-wide hidden sm:block",
          done || active ? "text-white/70" : "text-white/25"
        )}
      >
        {step.label}
      </span>
    </div>
  );
}

/* ─── Step 1 — Identidad ─────────────────────────────────────── */
function Step1({
  data,
  update,
  onNext,
}: {
  data: FormData;
  update: (d: Partial<FormData>) => void;
  onNext: () => void;
}) {
  const isValid = data.nombre.trim() && (data.whatsapp.trim() || data.email.trim());

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-2xl font-bold text-white font-clash mb-1">Cuéntenos quién es.</h2>
        <p className="text-white/50 text-sm">Sin spam, sin newsletters. Solo le escribimos sobre su proyecto.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-white/50 text-xs mb-1.5 font-medium">
            Nombre *
          </label>
          <div className="relative">
            <User size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              type="text"
              value={data.nombre}
              onChange={(e) => update({ nombre: e.target.value })}
              placeholder="Su nombre"
              className="w-full pl-9 pr-4 py-3 rounded-xl text-sm text-white placeholder-white/25 focus:outline-none focus:border-violet-500/50 transition-colors"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
            />
          </div>
        </div>
        <div>
          <label className="block text-white/50 text-xs mb-1.5 font-medium">Empresa</label>
          <div className="relative">
            <Building2 size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              type="text"
              value={data.empresa}
              onChange={(e) => update({ empresa: e.target.value })}
              placeholder="Su empresa (opcional)"
              className="w-full pl-9 pr-4 py-3 rounded-xl text-sm text-white placeholder-white/25 focus:outline-none focus:border-violet-500/50 transition-colors"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-white/50 text-xs mb-1.5 font-medium">
            WhatsApp *
          </label>
          <div className="relative">
            <Phone size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              type="tel"
              value={data.whatsapp}
              onChange={(e) => update({ whatsapp: e.target.value })}
              placeholder="+595 9XX XXX XXX"
              className="w-full pl-9 pr-4 py-3 rounded-xl text-sm text-white placeholder-white/25 focus:outline-none focus:border-violet-500/50 transition-colors"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
            />
          </div>
        </div>
        <div>
          <label className="block text-white/50 text-xs mb-1.5 font-medium">Email</label>
          <div className="relative">
            <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              type="email"
              value={data.email}
              onChange={(e) => update({ email: e.target.value })}
              placeholder="hola@suempresa.com"
              className="w-full pl-9 pr-4 py-3 rounded-xl text-sm text-white placeholder-white/25 focus:outline-none focus:border-violet-500/50 transition-colors"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
            />
          </div>
        </div>
      </div>

      <button
        onClick={onNext}
        disabled={!isValid}
        className={cn(
          "flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-semibold text-sm transition-all duration-200",
          isValid
            ? "bg-violet-600 text-white hover:bg-violet-500 shadow-lg shadow-violet-600/25 hover:-translate-y-0.5"
            : "bg-white/5 text-white/30 cursor-not-allowed"
        )}
      >
        Continuar
        <ChevronRight size={16} />
      </button>
    </div>
  );
}

/* ─── Step 2 — Proyecto ──────────────────────────────────────── */
function Step2({
  data,
  update,
  onNext,
  onBack,
}: {
  data: FormData;
  update: (d: Partial<FormData>) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const toggleService = (s: string) => {
    const current = data.servicios;
    update({
      servicios: current.includes(s)
        ? current.filter((x) => x !== s)
        : [...current, s],
    });
  };
  const isValid = data.servicios.length > 0;

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-2xl font-bold text-white font-clash mb-1">¿Qué necesita?</h2>
        <p className="text-white/50 text-sm">Seleccione uno o más servicios de interés.</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {SERVICES.map((s) => {
          const selected = data.servicios.includes(s);
          return (
            <button
              key={s}
              onClick={() => toggleService(s)}
              className={cn(
                "p-4 rounded-xl text-left text-sm font-medium transition-all duration-200 border",
                selected
                  ? "bg-violet-600/20 border-violet-500 text-white"
                  : "bg-white/4 border-white/10 text-white/60 hover:border-white/20 hover:text-white"
              )}
            >
              <div className="flex items-center gap-2 mb-1">
                <div
                  className={cn(
                    "w-4 h-4 rounded-full border flex items-center justify-center transition-all",
                    selected
                      ? "bg-violet-600 border-violet-600"
                      : "border-white/30"
                  )}
                >
                  {selected && <Check size={9} className="text-white" />}
                </div>
                {s}
              </div>
            </button>
          );
        })}
      </div>

      <div>
        <label className="block text-white/50 text-xs mb-1.5 font-medium">
          Descripción del proyecto (opcional)
        </label>
        <textarea
          value={data.descripcion}
          onChange={(e) => update({ descripcion: e.target.value })}
          rows={4}
          placeholder="Cuéntenos más sobre su negocio, qué quiere lograr, plazos, cualquier detalle relevante..."
          className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 focus:outline-none focus:border-violet-500/50 transition-colors resize-none"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
        />
      </div>

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="flex-1 py-3.5 rounded-full font-semibold text-sm border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-all duration-200"
        >
          Atrás
        </button>
        <button
          onClick={onNext}
          disabled={!isValid}
          className={cn(
            "flex-[2] flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-sm transition-all duration-200",
            isValid
              ? "bg-violet-600 text-white hover:bg-violet-500 shadow-lg shadow-violet-600/25"
              : "bg-white/5 text-white/30 cursor-not-allowed"
          )}
        >
          Continuar
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

/* ─── Step 3 — Presupuesto ───────────────────────────────────── */
function Step3({
  data,
  update,
  onNext,
  onBack,
}: {
  data: FormData;
  update: (d: Partial<FormData>) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-2xl font-bold text-white font-clash mb-1">¿Con qué presupuesto cuenta?</h2>
        <p className="text-white/50 text-sm">
          Sin juicios. Necesitamos saber para proponerle la solución correcta.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {BUDGETS.map((b) => {
          const selected = data.presupuesto === b.value;
          return (
            <button
              key={b.value}
              onClick={() => update({ presupuesto: b.value })}
              className={cn(
                "flex items-center justify-between p-4 rounded-xl text-left transition-all duration-200 border",
                selected
                  ? "bg-violet-600/20 border-violet-500 text-white"
                  : "bg-white/4 border-white/10 text-white/60 hover:border-white/20 hover:text-white"
              )}
            >
              <span className="font-medium text-sm">{b.label}</span>
              <div
                className={cn(
                  "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
                  selected ? "bg-violet-600 border-violet-600" : "border-white/20"
                )}
              >
                {selected && <Check size={10} className="text-white" />}
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="flex-1 py-3.5 rounded-full font-semibold text-sm border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-all duration-200"
        >
          Atrás
        </button>
        <button
          onClick={onNext}
          disabled={!data.presupuesto}
          className={cn(
            "flex-[2] flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-sm transition-all duration-200",
            data.presupuesto
              ? "bg-violet-600 text-white hover:bg-violet-500 shadow-lg shadow-violet-600/25"
              : "bg-white/5 text-white/30 cursor-not-allowed"
          )}
        >
          Ver resumen
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

/* ─── Step 4 — Confirmación ──────────────────────────────────── */
function Step4({
  data,
  onBack,
  onSubmit,
  loading,
}: {
  data: FormData;
  onBack: () => void;
  onSubmit: () => void;
  loading: boolean;
}) {
  const budgetLabel = BUDGETS.find((b) => b.value === data.presupuesto)?.label ?? data.presupuesto;

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-2xl font-bold text-white font-clash mb-1">Confirme su consulta.</h2>
        <p className="text-white/50 text-sm">
          Revise los datos antes de enviar. Le respondemos en menos de 24 horas.
        </p>
      </div>

      {/* Summary */}
      <div
        className="p-5 rounded-2xl flex flex-col gap-4"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
      >
        <SummaryRow label="Nombre" value={data.nombre} />
        {data.empresa && <SummaryRow label="Empresa" value={data.empresa} />}
        {data.whatsapp && <SummaryRow label="WhatsApp" value={data.whatsapp} />}
        {data.email && <SummaryRow label="Email" value={data.email} />}
        <SummaryRow label="Servicios" value={data.servicios.join(", ")} />
        {data.descripcion && <SummaryRow label="Descripción" value={data.descripcion} />}
        <SummaryRow label="Presupuesto" value={budgetLabel} highlight />
      </div>

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="flex-1 py-3.5 rounded-full font-semibold text-sm border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-all duration-200"
        >
          Editar
        </button>
        <button
          onClick={onSubmit}
          disabled={loading}
          className={cn(
            "flex-[2] flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-sm transition-all duration-200",
            loading
              ? "bg-violet-700/50 text-white/50 cursor-not-allowed"
              : "bg-gradient-to-r from-violet-600 to-orange-500 text-white hover:opacity-90 shadow-lg shadow-violet-600/25"
          )}
        >
          {loading ? "Enviando..." : "Enviar consulta →"}
        </button>
      </div>
    </div>
  );
}

function SummaryRow({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-white/35 text-xs w-24 flex-shrink-0 pt-0.5">{label}</span>
      <span
        className={cn(
          "text-sm flex-1",
          highlight ? "text-violet-300 font-semibold" : "text-white/75"
        )}
      >
        {value}
      </span>
    </div>
  );
}

/* ─── Success screen ─────────────────────────────────────────── */
function SuccessScreen({ nombre }: { nombre: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-6">
        <Check size={32} className="text-green-400" />
      </div>
      <h3 className="text-2xl font-bold text-white font-clash mb-2">
        ¡Gracias, {nombre.split(" ")[0]}!
      </h3>
      <p className="text-white/50 text-sm max-w-xs mb-8 leading-relaxed">
        Recibimos su consulta. Le respondemos en menos de 24 horas con ideas concretas y sin compromiso.
      </p>
      <a
        href="https://wa.me/595981000000?text=Hola%20Sicentre%2C%20acabo%20de%20enviar%20mi%20consulta%20por%20el%20formulario"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white transition-all duration-200 shadow-lg"
        style={{ background: "#25D366" }}
      >
        <MessageCircle size={16} />
        Escribir también por WhatsApp
      </a>
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────── */
export default function ContactoPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState<FormData>({
    nombre: "",
    empresa: "",
    whatsapp: "",
    email: "",
    servicios: [],
    descripcion: "",
    presupuesto: "",
  });

  const update = (partial: Partial<FormData>) =>
    setForm((prev) => ({ ...prev, ...partial }));

  const handleSubmit = async () => {
    setLoading(true);
    // Log to console and simulate submission
    console.log("[Sicentre Contact]", form);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative pt-32 pb-12 px-6 md:px-10 text-center overflow-hidden">
        {/* Aurora */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]"
            style={{
              background: "radial-gradient(ellipse, rgba(124,58,237,0.2) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
        </div>
        <div className="relative z-10">
          <h1 className="text-6xl md:text-9xl font-bold text-white font-clash leading-[0.9] mb-5">
            Hablemos.
          </h1>
          <p className="text-white/55 text-lg max-w-2xl mx-auto leading-relaxed">
            Cuéntenos su proyecto. Le respondemos en menos de 24 horas con ideas concretas, sin costo y sin compromiso.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 md:px-10 pb-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div
                className="glass-card p-8"
              >
                <SuccessScreen nombre={form.nombre} />
              </div>
            ) : (
              <div className="glass-card p-8">
                {/* Step indicators */}
                <div className="flex items-center justify-between mb-8 px-2">
                  {STEPS.map((s, i) => (
                    <div key={s.id} className="flex items-center flex-1">
                      <StepIndicator step={s} currentStep={step} />
                      {i < STEPS.length - 1 && (
                        <div
                          className={cn(
                            "flex-1 h-px mx-2 transition-all duration-500",
                            step > s.id
                              ? "bg-violet-500/60"
                              : "bg-white/[0.07]"
                          )}
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Step content */}
                {step === 1 && (
                  <Step1 data={form} update={update} onNext={() => setStep(2)} />
                )}
                {step === 2 && (
                  <Step2
                    data={form}
                    update={update}
                    onNext={() => setStep(3)}
                    onBack={() => setStep(1)}
                  />
                )}
                {step === 3 && (
                  <Step3
                    data={form}
                    update={update}
                    onNext={() => setStep(4)}
                    onBack={() => setStep(2)}
                  />
                )}
                {step === 4 && (
                  <Step4
                    data={form}
                    onBack={() => setStep(3)}
                    onSubmit={handleSubmit}
                    loading={loading}
                  />
                )}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Contact info */}
            <div>
              <h2 className="text-xl font-bold text-white font-clash mb-4">
                Contacto directo.
              </h2>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/595981000000?text=Hola%20Sicentre%2C%20quiero%20saber%20m%C3%A1s%20sobre%20sus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-2xl border border-green-500/20 bg-green-500/[0.04] hover:bg-green-500/[0.08] transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400">
                <MessageCircle size={18} />
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold text-sm">WhatsApp</p>
                <p className="text-white/50 text-xs">+595 981 000 000</p>
              </div>
              <span className="text-green-400 text-sm group-hover:translate-x-1 transition-transform">→</span>
            </a>

            {/* Email */}
            <a
              href="mailto:hola@sicentre.com"
              className="group flex items-center gap-4 p-4 rounded-2xl border border-violet-600/20 bg-violet-600/[0.04] hover:bg-violet-600/[0.08] transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center text-violet-400">
                <Mail size={18} />
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold text-sm">Email</p>
                <p className="text-white/50 text-xs">hola@sicentre.com</p>
              </div>
              <span className="text-violet-400 text-sm group-hover:translate-x-1 transition-transform">→</span>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/8 bg-white/[0.02]">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Asunción, Paraguay</p>
                <p className="text-white/40 text-xs">Atendemos toda Latinoamérica</p>
              </div>
            </div>

            {/* Reassuring arguments */}
            <div className="flex flex-col gap-3 mt-2">
              {[
                {
                  icon: "⚡",
                  title: "Respuesta en menos de 24h",
                  sub: "Lun–Vie, horario paraguayo",
                },
                {
                  icon: "🔒",
                  title: "Sin compromiso",
                  sub: "La consulta es gratis y sin presión",
                },
                {
                  icon: "💡",
                  title: "Ideas concretas desde el día 1",
                  sub: "No vendemos humo, proponemos soluciones",
                },
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
