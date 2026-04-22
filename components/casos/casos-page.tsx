"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

const cases = [
  {
    sector: "Salud",
    client: "Clínica Dental Sonrisas",
    gradient: "from-violet-600 to-purple-800",
    problem: "Perdían 15+ llamadas diarias fuera del horario de atención. Cada paciente perdido = $80 de ticket promedio.",
    solution: "Implementamos Voz IA + sitio web con agendamiento online. El agente califica, agenda y envía recordatorios.",
    metric: "+127%",
    metricLabel: "más pacientes agendados",
    metricType: "up",
    secondMetric: "-89%",
    secondLabel: "llamadas sin responder",
    secondType: "down",
  },
  {
    sector: "Gastronomía",
    client: "Casa Verde Resto",
    gradient: "from-teal-500 to-emerald-700",
    problem: "Sin presencia web profesional. Las reservas se perdían por Instagram sin confirmación ni seguimiento.",
    solution: "Sitio web con reservas online, menú digital y WhatsApp integrado. Reels semanales para redes sociales.",
    metric: "+85%",
    metricLabel: "reservas online",
    metricType: "up",
    secondMetric: "3x",
    secondLabel: "más seguidores en Instagram",
    secondType: "up",
  },
  {
    sector: "Inmobiliaria",
    client: "Sur Inmobiliaria",
    gradient: "from-indigo-600 to-blue-800",
    problem: "El equipo de ventas no podía atender todos los consultas de propiedades. Leads fríos por demora en respuesta.",
    solution: "Voz IA para calificación inicial de leads. Sitio con catálogo de propiedades y formulario inteligente.",
    metric: "+210%",
    metricLabel: "leads calificados",
    metricType: "up",
    secondMetric: "-65%",
    secondLabel: "tiempo de respuesta",
    secondType: "down",
  },
  {
    sector: "Automotriz",
    client: "Autotech Taller",
    gradient: "from-red-600 to-orange-700",
    problem: "Turnos de service desorganizados, clientes llamando y sin respuesta. Perdían 20% de sus citas por no confirmación.",
    solution: "Agente de voz que agenda turnos, confirma citas y envía recordatorios por WhatsApp. Sitio web actualizado.",
    metric: "-72%",
    metricLabel: "no-shows de clientes",
    metricType: "down",
    secondMetric: "+40%",
    secondLabel: "ocupación del taller",
    secondType: "up",
  },
  {
    sector: "Moda & Retail",
    client: "Boutique Asunción",
    gradient: "from-rose-500 to-pink-700",
    problem: "Sin identidad visual en redes. Contenido inconsistente y sin estrategia. Ventas estancadas.",
    solution: "Content mensual: 8 reels + fotografía de producto + calendario editorial. Identidad visual consistente.",
    metric: "+300%",
    metricLabel: "engagement en Instagram",
    metricType: "up",
    secondMetric: "+55%",
    secondLabel: "ventas por redes",
    secondType: "up",
  },
];

function CaseCard({ c, index, visible }: { c: typeof cases[0]; index: number; visible: boolean }) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 transition-all duration-700",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Gradient header */}
      <div className={cn("relative h-36 bg-gradient-to-br overflow-hidden", c.gradient)}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute bottom-4 left-5 right-5">
          <span className="inline-block px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white/90 text-xs font-semibold mb-1">
            {c.sector}
          </span>
          <h3
            className="text-white font-bold text-lg leading-tight"
            style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
          >
            {c.client}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 bg-[#0D0B18]">
        <div className="mb-4">
          <p className="text-xs font-semibold text-red-400/80 uppercase tracking-wider mb-1">El problema</p>
          <p className="text-white/55 text-sm leading-relaxed">{c.problem}</p>
        </div>
        <div className="mb-5">
          <p className="text-xs font-semibold text-violet-400/80 uppercase tracking-wider mb-1">La solución</p>
          <p className="text-white/55 text-sm leading-relaxed">{c.solution}</p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3.5 rounded-xl bg-violet-600/[0.06] border border-violet-600/20 text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              {c.metricType === "up"
                ? <TrendingUp size={14} className="text-green-400" />
                : <TrendingDown size={14} className="text-orange-400" />
              }
              <span
                className={cn("text-xl font-bold", c.metricType === "up" ? "text-green-400" : "text-orange-400")}
                style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
              >
                {c.metric}
              </span>
            </div>
            <p className="text-white/40 text-xs">{c.metricLabel}</p>
          </div>
          <div className="p-3.5 rounded-xl bg-violet-600/[0.06] border border-violet-600/20 text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              {c.secondType === "up"
                ? <TrendingUp size={14} className="text-green-400" />
                : <TrendingDown size={14} className="text-orange-400" />
              }
              <span
                className={cn("text-xl font-bold", c.secondType === "up" ? "text-green-400" : "text-orange-400")}
                style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
              >
                {c.secondMetric}
              </span>
            </div>
            <p className="text-white/40 text-xs">{c.secondLabel}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CasosPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="pt-44 pb-20 px-6 md:px-10 text-center">
        <h1
          className="text-5xl md:text-7xl font-bold text-white mb-4"
          style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
        >
          Resultados que{" "}
          <span className="bg-gradient-to-r from-violet-400 to-orange-400 bg-clip-text text-transparent">
            hablan solos.
          </span>
        </h1>
        <p className="text-white/50 text-lg max-w-xl mx-auto">
          Casos reales de negocios que transformaron su operación con Sicentre.
        </p>
      </div>

      {/* Cases grid */}
      <div ref={sectionRef} className="px-6 md:px-10 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <CaseCard key={c.client} c={c} index={i} visible={visible} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p
            className="text-2xl md:text-3xl font-bold text-white mb-6"
            style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
          >
            Empiece su caso de éxito.
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center px-10 py-4 rounded-full bg-violet-600 text-white font-semibold text-lg hover:bg-violet-500 transition-all duration-200 shadow-xl shadow-violet-600/30 hover:-translate-y-0.5"
          >
            Empiece su caso de éxito →
          </a>
        </div>
      </div>
    </div>
  );
}
