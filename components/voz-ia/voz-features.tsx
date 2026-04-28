"use client";

import { useEffect, useRef, useState } from "react";
import { Mic2, Database, CalendarClock, Volume2, Settings2, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Mic2,
    title: "Voice Agent IA",
    description:
      "Agente disponible 24/7 que atiende, califica leads y responde consultas en español natural — con la voz, el tono y el vocabulario de su marca.",
    accent: "#EA580C",
  },
  {
    icon: Database,
    title: "CRM Automático",
    description:
      "Cada llamada genera una ficha de contacto completa: nombre, intención, presupuesto, urgencia. Sin que su equipo levante un dedo.",
    accent: "#7C3AED",
  },
  {
    icon: CalendarClock,
    title: "Agenda Inteligente",
    description:
      "Integración nativa con Google Calendar. El agente reserva citas en tiempo real, evita conflictos y envía confirmaciones automáticas.",
    accent: "#A78BFA",
  },
  {
    icon: Volume2,
    title: "Voz Clonada",
    description:
      "Clonamos la voz que usted quiera — la suya, la de su recepcionista actual, o una voz diseñada para su marca. Personalización total.",
    accent: "#FB923C",
  },
  {
    icon: Settings2,
    title: "100% Personalizable",
    description:
      "Scripts, flujos de calificación, derivaciones y respuestas — todo configurado a la medida de su negocio. Cero soluciones genéricas.",
    accent: "#C084FC",
  },
  {
    icon: BarChart3,
    title: "Reportes e Inteligencia",
    description:
      "Métricas semanales claras, transcripciones de cada llamada y recomendaciones accionables para mejorar la conversión mes a mes.",
    accent: "#FDBA74",
  },
];

export default function VozFeatures() {
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
      style={{ background: "#0D0B18" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <h2
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
          >
            Todo lo que su negocio{" "}
            <span style={{ color: "#EA580C", textShadow: "0 4px 20px rgba(234,88,12,0.4)" }}>
              necesita.
            </span>
          </h2>
          <p className="text-white/55 text-base md:text-lg mt-4 max-w-2xl mx-auto">
            Seis capacidades que transforman cada llamada en una oportunidad medible.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={cn(
                  "group relative p-6 md:p-7 rounded-2xl backdrop-blur-xl bg-white/[0.04] border border-white/10 transition-all duration-700 hover:bg-white/[0.07] hover:-translate-y-1",
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at top, ${feature.accent}1A 0%, transparent 70%)`,
                    border: `1px solid ${feature.accent}33`,
                  }}
                />
                <div className="relative z-10">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: `${feature.accent}1F`,
                      border: `1px solid ${feature.accent}40`,
                      color: feature.accent,
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3
                    className="text-white font-bold text-lg mb-2 leading-tight"
                    style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
