"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormData {
  nombre: string;
  empresa: string;
  servicio: string;
  contacto: string;
}

const servicios = [
  { value: "", label: "Servicio de interés" },
  { value: "website", label: "Website" },
  { value: "llamadas-ia", label: "Llamadas IA" },
  { value: "studio", label: "Studio" },
  { value: "ultra-360", label: "ULTRA 360" },
];

export default function CTASection() {
  const [form, setForm] = useState<FormData>({
    nombre: "",
    empresa: "",
    servicio: "",
    contacto: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contacto"
      className="relative py-32 overflow-hidden aurora-bg"
      style={{ background: "#0D0B18" }}
    >
      {/* Aurora blobs */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)",
          top: "-200px",
          left: "-200px",
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(234,88,12,0.18) 0%, transparent 70%)",
          bottom: "-150px",
          right: "-100px",
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
          top: "50%",
          right: "20%",
          borderRadius: "50%",
          filter: "blur(60px)",
          transform: "translateY(-50%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">
        {/* Headline */}
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-400/70 mb-5">
          Contacto
        </p>
        <h2
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5 leading-[0.95]"
          style={{ fontFamily: "'Clash Display', sans-serif" }}
        >
          ¿Listo para el{" "}
          <span className="bg-gradient-to-r from-violet-400 to-orange-400 bg-clip-text text-transparent">
            siguiente nivel?
          </span>
        </h2>
        <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto">
          Escribinos y te respondemos en menos de 24 horas.
        </p>

        {/* Form card */}
        <div
          className="max-w-xl mx-auto rounded-[24px] p-8 md:p-10"
          style={{
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            background: "rgba(124, 58, 237, 0.07)",
            border: "1px solid rgba(124, 58, 237, 0.2)",
          }}
        >
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-violet-600 to-orange-500 flex items-center justify-center">
                <CheckCircle size={32} className="text-white" />
              </div>
              <h3
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "'Clash Display', sans-serif" }}
              >
                ¡Mensaje enviado!
              </h3>
              <p className="text-white/60 text-center">
                Te contactamos en menos de 24 horas. Mientras tanto, podés
                escribirnos directo por WhatsApp.
              </p>
              <a
                href="https://wa.me/595981000000"
                className="mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #EA580C)",
                }}
              >
                Ir a WhatsApp →
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Nombre */}
              <div>
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Nombre"
                  required
                  className={cn(
                    "w-full p-4 rounded-xl text-white text-sm placeholder:text-white/40 outline-none transition-all duration-200",
                    "focus:border-violet-500/60"
                  )}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(124, 58, 237, 0.2)",
                  }}
                />
              </div>

              {/* Empresa */}
              <div>
                <input
                  type="text"
                  name="empresa"
                  value={form.empresa}
                  onChange={handleChange}
                  placeholder="Empresa"
                  className={cn(
                    "w-full p-4 rounded-xl text-white text-sm placeholder:text-white/40 outline-none transition-all duration-200",
                    "focus:border-violet-500/60"
                  )}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(124, 58, 237, 0.2)",
                  }}
                />
              </div>

              {/* Servicio */}
              <div>
                <select
                  name="servicio"
                  value={form.servicio}
                  onChange={handleChange}
                  required
                  className={cn(
                    "w-full p-4 rounded-xl text-sm outline-none transition-all duration-200 appearance-none cursor-pointer",
                    form.servicio ? "text-white" : "text-white/40"
                  )}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(124, 58, 237, 0.2)",
                    color: form.servicio
                      ? "rgba(255,255,255,1)"
                      : "rgba(255,255,255,0.4)",
                  }}
                >
                  {servicios.map((s) => (
                    <option
                      key={s.value}
                      value={s.value}
                      style={{ background: "#1a1040", color: "white" }}
                      disabled={s.value === ""}
                    >
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* WhatsApp o Email */}
              <div>
                <input
                  type="text"
                  name="contacto"
                  value={form.contacto}
                  onChange={handleChange}
                  placeholder="WhatsApp o Email"
                  required
                  className={cn(
                    "w-full p-4 rounded-xl text-white text-sm placeholder:text-white/40 outline-none transition-all duration-200"
                  )}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(124, 58, 237, 0.2)",
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-4 px-8 rounded-full text-white font-bold text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-600/30 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 mt-2"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #EA580C)",
                }}
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar mensaje
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Fine print */}
        {!submitted && (
          <p className="mt-6 text-white/30 text-sm">
            Sin spam. Sin compromiso. Solo resultados.
          </p>
        )}
      </div>
    </section>
  );
}
