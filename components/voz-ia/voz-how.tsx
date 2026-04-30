"use client";

import { useEffect, useRef, useState } from "react";
import { MessageSquare, GraduationCap, Plug, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: MessageSquare,
    label: "I",
    title: "Sesión de onboarding",
    duration: "30 min",
    description:
      "Una llamada para entender su negocio, su tono de voz y los casos de uso que le importan. Nada técnico. Usted nos cuenta, nosotros traducimos.",
    color: "violet",
  },
  {
    icon: GraduationCap,
    label: "II",
    title: "Entrenamiento del agente",
    duration: "Días 1–2",
    description:
      "Configuramos personalidad, voz, scripts y flujos de calificación. El agente aprende a hablar como su marca habla y a vender como usted vende.",
    color: "orange",
  },
  {
    icon: Plug,
    label: "III",
    title: "Integración completa",
    duration: "Día 2",
    description:
      "Conectamos su número actual, su Google Calendar y su CRM. Sin cambiar nada en su operación. Cero fricción para su equipo.",
    color: "violet",
  },
  {
    icon: Rocket,
    label: "IV",
    title: "Live en 48 horas",
    duration: "Día 2",
    description:
      "Su agente atiende, califica y agenda desde hoy. Usted recibe el resumen de cada conversación por WhatsApp en tiempo real.",
    color: "orange",
  },
];

export default function VozHow() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-10"
      style={{ background: "transparent" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <h2
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
          >
            En marcha en{" "}
            <span style={{ color: "#EA580C", textShadow: "0 4px 20px rgba(234,88,12,0.4)" }}>48 horas.</span>
          </h2>
          <p className="text-white/55 text-base md:text-lg mt-4 max-w-2xl mx-auto">
            Cuatro pasos. Sin fricción técnica de su parte. Su agente atiende su primera llamada en menos de dos días.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className={cn(
                  "relative flex flex-col p-7 rounded-2xl backdrop-blur-xl transition-all duration-700",
                  "bg-violet-600/[0.06] border border-violet-600/20 hover:border-violet-500/40",
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <span
                  className="absolute -top-3 right-5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-[0.18em] bg-[#0D0B18] border border-violet-500/40 text-violet-300"
                  style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
                >
                  {step.label}
                </span>

                <div
                  className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-5",
                    step.color === "orange"
                      ? "bg-orange-500/15 text-orange-400"
                      : "bg-violet-500/15 text-violet-400"
                  )}
                >
                  <Icon size={24} />
                </div>

                <h3
                  className="text-lg font-bold text-white mb-1.5 leading-tight"
                  style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
                >
                  {step.title}
                </h3>
                <p
                  className={cn(
                    "text-xs uppercase tracking-[0.14em] font-semibold mb-3",
                    step.color === "orange" ? "text-orange-300/80" : "text-violet-300/80"
                  )}
                >
                  {step.duration}
                </p>
                <p className="text-white/55 text-sm leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
