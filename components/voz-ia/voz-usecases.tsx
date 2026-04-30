"use client";

import { useEffect, useRef, useState } from "react";
import { Building2, Stethoscope, Megaphone, GraduationCap, ShoppingBag, Landmark, UtensilsCrossed } from "lucide-react";
import { cn } from "@/lib/utils";

const sectors = [
  {
    icon: Building2,
    name: "Inmobiliarias",
    useCase: "Califica compradores e inversores en segundos. Agenda visitas, responde consultas de propiedades y filtra los leads serios antes de que lleguen a su equipo.",
    color: "rgba(167,139,250,1)",
    glow: "rgba(124,58,237,0.18)",
  },
  {
    icon: Stethoscope,
    name: "Clínicas & Consultorios",
    useCase: "Atiende fuera de horario, agenda turnos y confirma citas. Cero pacientes perdidos por una llamada sin respuesta a las 21h o un sábado.",
    color: "rgba(251,113,133,1)",
    glow: "rgba(244,63,94,0.16)",
  },
  {
    icon: Megaphone,
    name: "Agencias de Marketing",
    useCase: "Respuesta inmediata a cada lead que llega de campañas. Califica, agenda discovery calls y deriva al estratega correcto sin cuello de botella.",
    color: "rgba(96,165,250,1)",
    glow: "rgba(59,130,246,0.16)",
  },
  {
    icon: GraduationCap,
    name: "Academias & Educación",
    useCase: "Información sobre programas, becas y fechas de inscripción 24/7. Captura datos del prospecto y agenda la entrevista de admisión.",
    color: "rgba(94,234,212,1)",
    glow: "rgba(20,184,166,0.16)",
  },
  {
    icon: ShoppingBag,
    name: "E-commerce",
    useCase: "Resolución de dudas pre-compra, seguimiento de pedidos y postventa. Reduce tickets de soporte y libera a su equipo para lo importante.",
    color: "rgba(251,146,60,1)",
    glow: "rgba(234,88,12,0.16)",
  },
  {
    icon: Landmark,
    name: "Servicios Financieros",
    useCase: "Calificación de prospectos, consultas sobre productos y derivación al asesor adecuado. Cumple con los protocolos sin perder velocidad.",
    color: "rgba(192,132,252,1)",
    glow: "rgba(168,85,247,0.16)",
  },
  {
    icon: UtensilsCrossed,
    name: "Restaurantes",
    useCase: "Reservas en tiempo real, información de menú, eventos privados y delivery. Su mesa siempre disponible, incluso en hora pico.",
    color: "rgba(253,186,116,1)",
    glow: "rgba(249,115,22,0.16)",
  },
];

export default function VozUsecases() {
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
            Diseñado para cada{" "}
            <span className="bg-gradient-to-r from-violet-400 to-orange-400 bg-clip-text text-transparent">
              industria.
            </span>
          </h2>
          <p className="text-white/55 text-base md:text-lg mt-4 max-w-2xl mx-auto">
            Cada agente se entrena con los protocolos, vocabulario y casos de uso específicos de su sector.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sectors.map((sector, i) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.name}
                className={cn(
                  "group relative p-6 rounded-2xl backdrop-blur-xl bg-white/[0.04] border border-white/10 transition-all duration-700 hover:bg-white/[0.07] hover:-translate-y-1",
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at top, ${sector.glow} 0%, transparent 70%)` }}
                />
                <div className="relative z-10">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: `${sector.glow}`,
                      border: `1px solid ${sector.color}33`,
                      color: sector.color,
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3
                    className="text-white font-bold text-lg mb-2 leading-tight"
                    style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
                  >
                    {sector.name}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed">{sector.useCase}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
