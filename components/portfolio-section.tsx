"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  category: string;
  gradient: string;
  accentColor: string;
  tag: string;
}

const projects: Project[] = [
  {
    title: "Clínica Sonrisas",
    category: "Salud · Diseño Web",
    gradient:
      "radial-gradient(ellipse at 30% 30%, #4c1d95 0%, #2e1065 40%, #0D0B18 100%)",
    accentColor: "text-violet-400",
    tag: "Website",
  },
  {
    title: "Casa Verde",
    category: "Gastronomía · Branding",
    gradient:
      "radial-gradient(ellipse at 70% 30%, #064e3b 0%, #022c22 40%, #0D0B18 100%)",
    accentColor: "text-emerald-400",
    tag: "Identidad",
  },
  {
    title: "Inmobiliaria del Sur",
    category: "Real Estate · Studio",
    gradient:
      "radial-gradient(ellipse at 30% 70%, #1e3a5f 0%, #0c1e35 40%, #0D0B18 100%)",
    accentColor: "text-blue-400",
    tag: "Studio",
  },
  {
    title: "Taller Rueda",
    category: "Automotriz · Llamadas IA",
    gradient:
      "radial-gradient(ellipse at 70% 70%, #7f1d1d 0%, #450a0a 40%, #0D0B18 100%)",
    accentColor: "text-red-400",
    tag: "Llamadas IA",
  },
  {
    title: "Boutique Asunción",
    category: "Moda · Contenido",
    gradient:
      "radial-gradient(ellipse at 50% 30%, #831843 0%, #4a0826 40%, #0D0B18 100%)",
    accentColor: "text-rose-400",
    tag: "360°",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="relative flex-shrink-0 w-[340px] md:w-[380px] h-[480px] md:h-[520px] rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1"
      style={{ scrollSnapAlign: "start" }}
    >
      {/* Background gradient (simulating image) */}
      <div
        className="absolute inset-0"
        style={{ background: project.gradient }}
      />

      {/* Decorative elements */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="w-64 h-64 rounded-full border-2 border-white" />
        <div className="absolute w-48 h-48 rounded-full border border-white" />
        <div className="absolute w-32 h-32 rounded-full border border-white" />
      </div>

      {/* Geometric accent */}
      <div className="absolute top-8 right-8 w-16 h-16 opacity-20">
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect
            x="2"
            y="2"
            width="60"
            height="60"
            stroke="white"
            strokeWidth="2"
            rx="8"
          />
          <line x1="2" y1="32" x2="62" y2="32" stroke="white" strokeWidth="1" />
          <line x1="32" y1="2" x2="32" y2="62" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      {/* Bottom dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
        }}
      />

      {/* Content bar */}
      <div
        className="absolute bottom-0 left-0 right-0 p-6"
        style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          background: "rgba(255,255,255,0.04)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <span
              className={cn(
                "inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-2 bg-white/10",
                project.accentColor
              )}
            >
              {project.tag}
            </span>
            <h3
              className="text-white font-bold text-xl leading-tight"
              style={{ fontFamily: "'Clash Display', sans-serif" }}
            >
              {project.title}
            </h3>
            <p className="text-white/50 text-xs mt-1">{project.category}</p>
          </div>
          <button className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-violet-600 transition-colors duration-200 group-hover:bg-violet-600">
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
    setTimeout(checkScrollability, 400);
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
    setTimeout(checkScrollability, 400);
  };

  return (
    <section
      id="portfolio"
      className="relative py-24 overflow-hidden"
      style={{ background: "#0F0C1E" }}
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 100% 50%, rgba(124,58,237,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 mb-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-400/70 mb-4">
                Portfolio
              </p>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                style={{ fontFamily: "'Clash Display', sans-serif" }}
              >
                Trabajo que habla{" "}
                <span className="bg-gradient-to-r from-violet-400 to-orange-400 bg-clip-text text-transparent">
                  por sí solo.
                </span>
              </h2>
            </div>

            {/* Nav arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                className={cn(
                  "w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-200",
                  canScrollLeft
                    ? "border-violet-500/40 text-white hover:bg-violet-600 hover:border-violet-600"
                    : "border-white/10 text-white/20 cursor-not-allowed"
                )}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={scrollRight}
                disabled={!canScrollRight}
                className={cn(
                  "w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-200",
                  canScrollRight
                    ? "border-violet-500/40 text-white hover:bg-violet-600 hover:border-violet-600"
                    : "border-white/10 text-white/20 cursor-not-allowed"
                )}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-hide pl-6 md:pl-10 pr-6 md:pr-10 pb-4"
          style={{ scrollSnapType: "x mandatory" }}
          onScroll={checkScrollability}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
          {/* Spacer for padding effect on right */}
          <div className="flex-shrink-0 w-1" />
        </div>
      </div>
    </section>
  );
}
