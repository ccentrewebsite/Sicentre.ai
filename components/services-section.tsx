"use client";

import { useEffect, useRef, useState } from "react";
import { Monitor, Phone, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCard {
  icon: React.ReactNode;
  tag: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  delay: number;
}

const services: ServiceCard[] = [
  {
    icon: <Monitor size={28} className="text-violet-400" />,
    tag: "Desde $79/mes",
    title: "Sitios web a medida",
    description:
      "Diseño 100% personalizado, entregado en 72h. Hosting, dominio y SSL incluidos. Sin templates, sin IA genérica.",
    cta: "Ver planes →",
    href: "#precios",
    delay: 0,
  },
  {
    icon: <Phone size={28} className="text-violet-400" />,
    tag: "Desde $399/mes",
    title: "Tu negocio, siempre disponible",
    description:
      "Agente de voz con IA que responde llamadas, califica leads y agenda turnos — las 24 horas, los 7 días.",
    cta: "Ver demo →",
    href: "#llamadas",
    delay: 100,
  },
  {
    icon: <Play size={28} className="text-violet-400" />,
    tag: "Desde $199/mes",
    title: "Contenido visual premium",
    description:
      "Video cinematográfico, fotografía IA y content mensual para redes. Producción de nivel internacional.",
    cta: "Ver trabajos →",
    href: "#portfolio",
    delay: 200,
  },
];

function ServiceCardComponent({
  service,
  visible,
}: {
  service: ServiceCard;
  visible: boolean;
}) {
  return (
    <div
      className={cn(
        "group p-8 rounded-[20px] flex flex-col gap-5 transition-all duration-500 cursor-default",
        "hover:-translate-y-1",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{
        transitionDelay: `${service.delay}ms`,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        background: "rgba(124, 58, 237, 0.06)",
        border: "1px solid rgba(124, 58, 237, 0.2)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(234, 88, 12, 0.4)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(124, 58, 237, 0.2)";
      }}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-violet-600/10 flex items-center justify-center border border-violet-500/20">
        {service.icon}
      </div>

      {/* Tag */}
      <span className="inline-flex self-start px-3 py-1 rounded-full text-xs font-semibold text-orange-400 bg-orange-500/10 border border-orange-500/20">
        {service.tag}
      </span>

      {/* Title */}
      <h3
        className="text-2xl font-bold text-white leading-tight"
        style={{ fontFamily: "'Clash Display', sans-serif" }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-white/60 text-sm leading-relaxed flex-1">
        {service.description}
      </p>

      {/* CTA */}
      <a
        href={service.href}
        className="text-violet-400 text-sm font-semibold hover:text-violet-300 transition-colors group-hover:gap-2 flex items-center gap-1"
      >
        {service.cta}
      </a>
    </div>
  );
}

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{ background: "#0F0C1E" }}
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 80% 20%, rgba(124,58,237,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-400/70 mb-4">
            Servicios
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl mx-auto leading-tight"
            style={{ fontFamily: "'Clash Display', sans-serif" }}
          >
            Todo lo que tu negocio necesita,{" "}
            <span className="bg-gradient-to-r from-violet-400 to-orange-400 bg-clip-text text-transparent">
              en un solo lugar.
            </span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCardComponent
              key={service.title}
              service={service}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
