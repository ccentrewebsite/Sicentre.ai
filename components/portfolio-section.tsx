"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  category: string;
  gradient: string;
  borderColor: string;
  glowColor: string;
  iconBg: string;
  mockElements: { label: string; color: string }[];
}

const projects: Project[] = [
  {
    title: "Clínica Sonrisas",
    category: "Salud · Diseño Web",
    gradient: "linear-gradient(145deg, #6d28d9 0%, #4c1d95 35%, #1e1040 70%, #0d0b18 100%)",
    borderColor: "rgba(139,92,246,0.6)",
    glowColor: "rgba(109,40,217,0.4)",
    iconBg: "#7c3aed",
    mockElements: [
      { label: "Reservar cita", color: "#a78bfa" },
      { label: "Servicios", color: "#ffffff" },
    ],
  },
  {
    title: "Casa Verde",
    category: "Gastronomía · Branding",
    gradient: "linear-gradient(145deg, #065f46 0%, #064e3b 35%, #022c22 70%, #0d0b18 100%)",
    borderColor: "rgba(16,185,129,0.6)",
    glowColor: "rgba(6,95,70,0.4)",
    iconBg: "#059669",
    mockElements: [
      { label: "Ver menú", color: "#6ee7b7" },
      { label: "Reservas", color: "#ffffff" },
    ],
  },
  {
    title: "Inmobiliaria del Sur",
    category: "Real Estate · Studio",
    gradient: "linear-gradient(145deg, #1e3a5f 0%, #0c1e35 35%, #061020 70%, #0d0b18 100%)",
    borderColor: "rgba(59,130,246,0.6)",
    glowColor: "rgba(30,58,95,0.4)",
    iconBg: "#2563eb",
    mockElements: [
      { label: "Ver propiedades", color: "#93c5fd" },
      { label: "Contactar", color: "#ffffff" },
    ],
  },
  {
    title: "Taller Rueda",
    category: "Automotriz · Voz IA",
    gradient: "linear-gradient(145deg, #c2410c 0%, #9a3412 35%, #450a0a 70%, #0d0b18 100%)",
    borderColor: "rgba(249,115,22,0.6)",
    glowColor: "rgba(194,65,12,0.4)",
    iconBg: "#ea580c",
    mockElements: [
      { label: "Turno online", color: "#fdba74" },
      { label: "Servicios", color: "#ffffff" },
    ],
  },
  {
    title: "Boutique Asunción",
    category: "Moda · Contenido 360°",
    gradient: "linear-gradient(145deg, #9d174d 0%, #831843 35%, #4a0826 70%, #0d0b18 100%)",
    borderColor: "rgba(244,63,94,0.6)",
    glowColor: "rgba(157,23,77,0.4)",
    iconBg: "#e11d48",
    mockElements: [
      { label: "Nueva colección", color: "#fda4af" },
      { label: "Tienda online", color: "#ffffff" },
    ],
  },
];

function MockScreen({ project }: { project: Project }) {
  return (
    <div className="absolute inset-0 p-5 flex flex-col" style={{ background: project.gradient }}>
      {/* Top bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-white/30" />
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-white/15" />
        </div>
        <div className="w-16 h-1.5 rounded-full bg-white/10" />
      </div>

      {/* Mock nav */}
      <div className="flex gap-3 mb-5">
        {["Inicio", "Servicios", "Contacto"].map((item) => (
          <div key={item} className="h-1.5 rounded-full bg-white/15" style={{ width: `${item.length * 6}px` }} />
        ))}
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center" style={{ background: "rgba(255,255,255,0.12)" }}>
          <div className="w-5 h-5 rounded-md" style={{ background: project.iconBg }} />
        </div>
        <h3
          className="text-white font-bold leading-tight mb-3"
          style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", fontFamily: "'AUTOMATA-DISPLAY', sans-serif", textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}
        >
          {project.title}
        </h3>
        <div className="flex gap-2 flex-wrap">
          {project.mockElements.map((el) => (
            <div
              key={el.label}
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{ background: "rgba(255,255,255,0.1)", color: el.color, border: "1px solid rgba(255,255,255,0.15)" }}
            >
              {el.label}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom mock elements */}
      <div className="mt-auto space-y-2">
        <div className="h-1.5 rounded-full bg-white/10 w-full" />
        <div className="h-1.5 rounded-full bg-white/7 w-3/4" />
      </div>
    </div>
  );
}

function ProjectCard({ project, active }: { project: Project; active: boolean }) {
  return (
    <div
      className={cn(
        "relative flex-shrink-0 flex flex-col rounded-2xl overflow-hidden cursor-pointer transition-all duration-500",
        active ? "scale-[1.03]" : "scale-100 opacity-80 hover:opacity-100"
      )}
      style={{
        width: "260px",
        scrollSnapAlign: "center",
        border: `1.5px solid ${project.borderColor}`,
        boxShadow: active
          ? `0 0 32px ${project.glowColor}, 0 8px 40px rgba(0,0,0,0.6)`
          : `0 0 12px ${project.glowColor.replace("0.4", "0.15")}, 0 4px 20px rgba(0,0,0,0.4)`,
      }}
    >
      {/* Mock image area */}
      <div className="relative" style={{ height: "220px" }}>
        <MockScreen project={project} />
      </div>

      {/* Info bar */}
      <div
        className="px-4 py-3 flex items-center justify-between gap-3"
        style={{ background: "rgba(8,6,20,0.97)", borderTop: `1px solid ${project.borderColor.replace("0.6", "0.3")}` }}
      >
        <div className="min-w-0">
          <p
            className="text-white font-bold text-sm leading-tight truncate"
            style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
          >
            {project.title}
          </p>
          <p className="text-white/40 text-xs mt-0.5 truncate">{project.category}</p>
        </div>
        <div
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110"
          style={{ background: project.iconBg }}
        >
          <ExternalLink size={13} className="text-white" />
        </div>
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkActive = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const cardWidth = 260 + 20; // width + gap
    const idx = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(idx, projects.length - 1));
  };

  const scrollTo = (dir: "left" | "right") => {
    const cardWidth = 260 + 20;
    scrollRef.current?.scrollBy({ left: dir === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
    setTimeout(checkActive, 400);
  };

  const scrollToIndex = (i: number) => {
    const cardWidth = 260 + 20;
    scrollRef.current?.scrollTo({ left: i * cardWidth, behavior: "smooth" });
    setActiveIndex(i);
  };

  return (
    <section id="portfolio" className="relative pt-20 pb-10">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(124,58,237,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10">
        {/* Header — centered */}
        <div className="text-center mb-12 px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-400/70 mb-4">
            Portfolio
          </p>
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            style={{
              fontFamily: "'AUTOMATA-DISPLAY', sans-serif",
              textShadow: "0 0 60px rgba(124,58,237,0.3)",
            }}
          >
            Trabajo que habla{" "}
            <span className="bg-gradient-to-r from-violet-400 to-orange-400 bg-clip-text text-transparent">
              por sí solo.
            </span>
          </h2>
        </div>

        {/* Carousel wrapper with side arrows */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scrollTo("left")}
            disabled={activeIndex === 0}
            className={cn(
              "absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200",
              activeIndex === 0
                ? "bg-white/5 text-white/20 cursor-not-allowed"
                : "bg-white/10 text-white hover:bg-violet-600 backdrop-blur-sm border border-white/10"
            )}
          >
            <ChevronLeft size={18} />
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scrollTo("right")}
            disabled={activeIndex === projects.length - 1}
            className={cn(
              "absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200",
              activeIndex === projects.length - 1
                ? "bg-white/5 text-white/20 cursor-not-allowed"
                : "bg-white/10 text-white hover:bg-violet-600 backdrop-blur-sm border border-white/10"
            )}
          >
            <ChevronRight size={18} />
          </button>

          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-5 overflow-x-auto scroll-hide px-10 md:px-24 pb-4"
            style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
            onScroll={checkActive}
          >
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} active={i === activeIndex} />
            ))}
            <div className="flex-shrink-0 w-1" />
          </div>
        </div>

      </div>
    </section>
  );
}
