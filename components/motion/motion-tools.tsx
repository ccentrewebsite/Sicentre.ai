"use client";

import { useEffect, useRef, useState } from "react";
import { Film, Camera, Scissors, Cpu, ChevronDown, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ToolCategory {
  icon: LucideIcon;
  title: string;
  count: string;
  accent: string;
  tools: { name: string; tag: string }[];
}

const categories: ToolCategory[] = [
  {
    icon: Film,
    title: "Video IA Generativa",
    count: "5 herramientas",
    accent: "#EA580C",
    tools: [
      { name: "Kling AI", tag: "Video cinemático" },
      { name: "Runway ML", tag: "Motion & efectos" },
      { name: "Pika Labs", tag: "Imagen a video" },
      { name: "Hailuo AI", tag: "Realismo extremo" },
      { name: "Sora (OpenAI)", tag: "Larga duración" },
    ],
  },
  {
    icon: Camera,
    title: "Foto & Imagen IA",
    count: "5 herramientas",
    accent: "#7C3AED",
    tools: [
      { name: "Midjourney", tag: "Arquitectura" },
      { name: "Stable Diffusion", tag: "Post-producción" },
      { name: "Adobe Firefly", tag: "Retoque IA" },
      { name: "Flux", tag: "Alta resolución" },
      { name: "Topaz AI", tag: "Upscaling 4K" },
    ],
  },
  {
    icon: Scissors,
    title: "Edición & Post-producción",
    count: "5 herramientas",
    accent: "#A78BFA",
    tools: [
      { name: "DaVinci Resolve", tag: "Color grading" },
      { name: "Adobe Premiere Pro", tag: "Montaje" },
      { name: "After Effects", tag: "Motion graphics" },
      { name: "CapCut Pro", tag: "Redes sociales" },
      { name: "ElevenLabs", tag: "Voz IA multilingüe" },
    ],
  },
  {
    icon: Cpu,
    title: "Hardware Cinemático",
    count: "5 equipos",
    accent: "#FB923C",
    tools: [
      { name: "DJI Mavic 3 Pro", tag: "Drone 4K" },
      { name: "Sony FX3", tag: "Cámara full-frame" },
      { name: "DJI RS3 Pro", tag: "Gimbal" },
      { name: "Aputure LED", tag: "Iluminación pro" },
      { name: "Sigma Art", tag: "Óptica cinemática" },
    ],
  },
];

export default function MotionTools() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-10 planet-section-warm"
      style={{ background: "#0D0B18" }}
    >
      <div className="max-w-5xl mx-auto">
        <div
          className={cn(
            "mb-12 md:mb-14 transition-all duration-700",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white font-clash leading-tight">
            Herramientas de{" "}
            <span className="gradient-text">nivel mundial.</span>
          </h2>
          <p className="text-white/55 text-base md:text-lg max-w-2xl mt-4">
            Combinamos IA generativa, software profesional y hardware cinematográfico para resultados de nivel internacional.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            const isOpen = openIndex === i;
            return (
              <div
                key={cat.title}
                className={cn(
                  "rounded-2xl border overflow-hidden transition-all duration-500",
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                )}
                style={{
                  transitionDelay: `${i * 80}ms`,
                  background: isOpen ? `${cat.accent}10` : "rgba(255,255,255,0.04)",
                  borderColor: isOpen ? `${cat.accent}55` : "rgba(255,255,255,0.10)",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 md:px-7 py-5 md:py-6 cursor-pointer"
                >
                  <div className="flex items-center gap-4 md:gap-5 min-w-0">
                    <div
                      className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                      style={{
                        background: `${cat.accent}20`,
                        color: cat.accent,
                        border: `1px solid ${cat.accent}40`,
                      }}
                    >
                      <Icon size={22} />
                    </div>
                    <div className="min-w-0 text-left">
                      <h3
                        className="text-lg md:text-xl font-bold text-white leading-tight"
                        style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
                      >
                        {cat.title}
                      </h3>
                      <p className="text-xs md:text-sm text-white/45 mt-0.5">{cat.count}</p>
                    </div>
                  </div>
                  <ChevronDown
                    size={22}
                    className={cn("text-white/55 transition-transform duration-300 shrink-0", isOpen && "rotate-180")}
                    style={{ color: isOpen ? cat.accent : undefined }}
                  />
                </button>

                <div
                  className={cn(
                    "grid transition-all duration-500 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 md:px-7 pb-6 pt-1 flex flex-wrap gap-2">
                      {cat.tools.map((tool) => (
                        <span
                          key={tool.name}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs md:text-sm bg-white/[0.05] border border-white/10 text-white/80"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: cat.accent }}
                          />
                          <span className="font-semibold text-white/90">{tool.name}</span>
                          <span className="text-white/45 text-[11px]">— {tool.tag}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p
          className={cn(
            "mt-10 text-center text-sm text-white/35 italic transition-all duration-700 delay-300",
            visible ? "opacity-100" : "opacity-0"
          )}
        >
          No reemplazamos la creatividad humana con IA. Usamos la IA para amplificarla.
        </p>
      </div>
    </section>
  );
}
