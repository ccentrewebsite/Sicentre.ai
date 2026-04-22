"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const projects = [
  {
    name: "Clínica Sonrisas",
    sector: "Salud dental",
    url: "clinicasonrisas.com.py",
    accent: "#5B8EF0",
    bg: "#0A1628",
    navColor: "#0F1E38",
    heroGrad: "from-[#0F1E38] to-[#1a2d4a]",
    tagline: "Tu sonrisa, nuestra misión",
    items: ["Turnos online", "Ortodoncia", "Blanqueamiento", "Emergencias"],
    heroBlock: "h-16 bg-[#5B8EF0]/20 rounded-lg",
  },
  {
    name: "Casa Verde Restaurant",
    sector: "Gastronomía",
    url: "casaverde.com.py",
    accent: "#22C55E",
    bg: "#061408",
    navColor: "#0A1F0C",
    heroGrad: "from-[#0A1F0C] to-[#162E18]",
    tagline: "Sabores de la tierra",
    items: ["Menú del día", "Reservas", "Eventos", "Delivery"],
    heroBlock: "h-16 bg-[#22C55E]/20 rounded-lg",
  },
  {
    name: "Inmobiliaria del Sur",
    sector: "Inmobiliaria",
    url: "inmsur.com.py",
    accent: "#F59E0B",
    bg: "#150E00",
    navColor: "#201500",
    heroGrad: "from-[#201500] to-[#2c1e00]",
    tagline: "Encontrá tu lugar",
    items: ["Venta", "Alquiler", "Terrenos", "Tasaciones"],
    heroBlock: "h-16 bg-[#F59E0B]/20 rounded-lg",
  },
  {
    name: "Taller Rueda",
    sector: "Automotriz",
    url: "tallerrueda.com.py",
    accent: "#EF4444",
    bg: "#140808",
    navColor: "#1E0D0D",
    heroGrad: "from-[#1E0D0D] to-[#2a1010]",
    tagline: "Expertos en movimiento",
    items: ["Service", "Diagnóstico", "Repuestos", "Grúa 24h"],
    heroBlock: "h-16 bg-[#EF4444]/20 rounded-lg",
  },
  {
    name: "Boutique Asunción",
    sector: "Moda",
    url: "boutiqueasu.com.py",
    accent: "#EC4899",
    bg: "#150A12",
    navColor: "#1E0E1A",
    heroGrad: "from-[#1E0E1A] to-[#2a1424]",
    tagline: "Estilo que te define",
    items: ["Mujer", "Hombre", "Accesorios", "Outlet"],
    heroBlock: "h-16 bg-[#EC4899]/20 rounded-lg",
  },
];

function BrowserMockup({ project, visible, delay }: { project: typeof projects[0]; visible: boolean; delay: number }) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 cursor-pointer hover:scale-[1.02] hover:border-white/20 hover:shadow-2xl",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Browser chrome */}
      <div
        className="px-3 pt-3 pb-2"
        style={{ background: project.navColor }}
      >
        {/* Window controls */}
        <div className="flex items-center gap-1.5 mb-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        </div>
        {/* Address bar */}
        <div className="flex items-center gap-2 px-2 py-1 rounded-md bg-white/5 border border-white/10">
          <div className="w-2 h-2 rounded-full" style={{ background: project.accent + "80" }} />
          <span className="text-[9px] text-white/40 font-mono truncate">{project.url}</span>
        </div>
      </div>

      {/* Website content */}
      <div className="relative" style={{ background: project.bg }}>
        {/* Site navbar */}
        <div
          className="flex items-center justify-between px-4 py-2 border-b border-white/5"
          style={{ background: project.navColor }}
        >
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-sm" style={{ background: project.accent }} />
            <span className="text-[9px] font-bold text-white/80">{project.name.split(" ")[0]}</span>
          </div>
          <div className="flex items-center gap-3">
            {project.items.slice(0, 3).map((item) => (
              <span key={item} className="text-[7px] text-white/40">{item}</span>
            ))}
          </div>
          <div
            className="px-2 py-0.5 rounded-full text-[7px] font-bold text-white"
            style={{ background: project.accent }}
          >
            Contacto
          </div>
        </div>

        {/* Hero section */}
        <div className={cn("px-4 pt-4 pb-3 bg-gradient-to-br", project.heroGrad)}>
          <p className="text-[8px] font-bold text-white/90 mb-1">{project.tagline}</p>
          <p className="text-[6px] text-white/40 mb-2 max-w-[120px]">
            La mejor experiencia para su negocio en Paraguay
          </p>
          <div className="flex gap-1.5">
            <div
              className="px-2 py-0.5 rounded-full text-[6px] font-bold text-white"
              style={{ background: project.accent }}
            >
              Empezar →
            </div>
            <div className="px-2 py-0.5 rounded-full text-[6px] text-white/40 border border-white/10">
              Saber más
            </div>
          </div>
        </div>

        {/* Content rows */}
        <div className="px-4 py-3 grid grid-cols-2 gap-2">
          {project.items.map((item) => (
            <div
              key={item}
              className="px-2 py-1.5 rounded-lg border border-white/5 flex items-center gap-1.5"
              style={{ background: project.accent + "08" }}
            >
              <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ background: project.accent + "40" }} />
              <span className="text-[7px] text-white/60">{item}</span>
            </div>
          ))}
        </div>

        {/* Footer bar */}
        <div className="px-4 py-2 border-t border-white/5 flex items-center justify-between">
          <span className="text-[6px] text-white/20">© 2026 {project.name}</span>
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <div key={i} className="w-3 h-3 rounded-full border border-white/10" />
            ))}
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          style={{ background: `linear-gradient(135deg, ${project.accent}22, rgba(0,0,0,0.6))` }}
        >
          <div className="text-center px-4">
            <p className="text-white font-semibold text-sm mb-1">{project.name}</p>
            <p className="text-white/60 text-xs">{project.sector}</p>
            <div className="mt-3 px-4 py-1.5 rounded-full text-xs font-semibold text-white inline-block"
              style={{ background: project.accent }}
            >
              Ver caso →
            </div>
          </div>
        </div>
      </div>

      {/* Info bar */}
      <div className="p-4 bg-[#0D0B18]/90 backdrop-blur-sm flex items-center justify-between">
        <div>
          <h3 className="text-white font-semibold text-sm">{project.name}</h3>
          <span className="text-white/40 text-xs">{project.sector}</span>
        </div>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm group-hover:translate-x-1 transition-transform"
          style={{ background: project.accent + "20" }}
        >
          →
        </div>
      </div>
    </div>
  );
}

export default function WebPortfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-10 planet-section-warm"
      style={{ background: "#0F0C1E" }}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <h2
            className="text-4xl md:text-6xl font-bold text-white font-clash mb-4"
          >
            Sitios que{" "}
            <span className="gradient-text">construimos.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Cada sitio es diferente. Diseñado desde cero para el negocio, el sector y los clientes del cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <BrowserMockup
              key={project.name}
              project={project}
              visible={visible}
              delay={i * 80}
            />
          ))}
          {/* CTA card */}
          <div
            className={cn(
              "relative flex flex-col items-center justify-center p-8 rounded-2xl border-2 border-dashed border-violet-500/20 transition-all duration-700 hover:border-violet-500/40 cursor-pointer group",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: `${5 * 80}ms`, background: "rgba(124,58,237,0.04)" }}
          >
            <div className="w-12 h-12 rounded-full bg-violet-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">+</span>
            </div>
            <h3 className="text-white font-semibold text-center mb-2">Su negocio aquí</h3>
            <p className="text-white/40 text-sm text-center mb-5">
              Diseño 100% personalizado para su sector y audiencia
            </p>
            <a
              href="/contacto"
              className="px-5 py-2.5 rounded-full bg-violet-600 text-white text-sm font-semibold hover:bg-violet-500 transition-all duration-200"
            >
              Empezar proyecto →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
