"use client";

import { useEffect, useRef, useState } from "react";
import { Heart, UtensilsCrossed, Building2, Car, ShoppingBag, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

const sectors = [
  {
    icon: Heart,
    name: "Clínicas",
    useCase: "Agenda turnos, confirma citas y responde preguntas de pacientes.",
    color: "rose",
  },
  {
    icon: UtensilsCrossed,
    name: "Restaurants",
    useCase: "Gestiona reservas, informa menú y horarios de atención.",
    color: "orange",
  },
  {
    icon: Building2,
    name: "Inmobiliarias",
    useCase: "Califica leads, agenda visitas y responde consultas de propiedades.",
    color: "blue",
  },
  {
    icon: Car,
    name: "Talleres Automotriz",
    useCase: "Agenda turnos de service, informa presupuestos y tiempos.",
    color: "slate",
  },
  {
    icon: ShoppingBag,
    name: "Tiendas",
    useCase: "Informa stock, precios y horarios de apertura.",
    color: "violet",
  },
  {
    icon: Briefcase,
    name: "Estudios Profesionales",
    useCase: "Agenda consultas, califica prospectos y gestiona urgencias.",
    color: "indigo",
  },
];

const colorMap: Record<string, string> = {
  rose: "bg-rose-500/15 text-rose-400",
  orange: "bg-orange-500/15 text-orange-400",
  blue: "bg-blue-500/15 text-blue-400",
  slate: "bg-slate-500/15 text-slate-400",
  violet: "bg-violet-500/15 text-violet-400",
  indigo: "bg-indigo-500/15 text-indigo-400",
};

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
      style={{ background: "#0F0C1E" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-6xl font-bold text-white"
            style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
          >
            Para cualquier tipo{" "}
            <span className="bg-gradient-to-r from-violet-400 to-orange-400 bg-clip-text text-transparent">
              de negocio.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sectors.map((sector, i) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.name}
                className={cn(
                  "p-6 rounded-2xl backdrop-blur-xl bg-violet-600/[0.06] border border-violet-600/20 transition-all duration-700 hover:bg-violet-600/10 hover:border-violet-500/30",
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={cn("w-11 h-11 rounded-xl flex items-center justify-center mb-4", colorMap[sector.color])}>
                  <Icon size={20} />
                </div>
                <h3
                  className="text-white font-semibold mb-2"
                  style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
                >
                  {sector.name}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{sector.useCase}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
