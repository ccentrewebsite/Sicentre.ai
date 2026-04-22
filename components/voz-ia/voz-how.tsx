"use client";

import { useEffect, useRef, useState } from "react";
import { MessageSquare, Plug, PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: MessageSquare,
    title: "Configuramos su agente",
    description:
      "Le hacemos preguntas sobre su negocio. Entrenamos el agente con sus datos, tono de voz y casos de uso específicos.",
    color: "violet",
  },
  {
    icon: Plug,
    title: "Lo conectamos",
    description:
      "Integramos con su número existente. Sin cambiar nada en su operación actual. Zero fricción.",
    color: "orange",
  },
  {
    icon: PhoneCall,
    title: "Empieza a atender",
    description:
      "Su agente atiende, califica y agenda. Usted recibe el resumen por WhatsApp con cada interacción.",
    color: "violet",
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
      style={{ background: "#0D0B18" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-6xl font-bold text-white"
            style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
          >
            ¿Cómo funciona?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px bg-gradient-to-r from-violet-500/30 via-orange-500/30 to-violet-500/30" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className={cn(
                  "relative flex flex-col items-center text-center p-8 rounded-2xl backdrop-blur-xl transition-all duration-700",
                  "bg-violet-600/[0.06] border border-violet-600/20",
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Step number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#0D0B18] border border-violet-500/30 flex items-center justify-center text-xs text-violet-400 font-bold">
                  {i + 1}
                </div>

                <div
                  className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center mb-5",
                    step.color === "orange"
                      ? "bg-orange-500/15 text-orange-400"
                      : "bg-violet-500/15 text-violet-400"
                  )}
                >
                  <Icon size={28} />
                </div>

                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
