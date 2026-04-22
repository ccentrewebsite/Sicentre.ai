"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const tools = [
  {
    name: "Kling AI",
    category: "Generación de video",
    description: "Generamos videos publicitarios realistas a partir de texto e imágenes. Ideal para campañas de producto sin rodaje.",
    color: "#7C3AED",
    icon: (
      <svg viewBox="0 0 40 40" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#7C3AED" fillOpacity="0.2" />
        <path d="M10 28 L20 12 L30 28" stroke="#7C3AED" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="20" r="3" fill="#7C3AED" />
      </svg>
    ),
  },
  {
    name: "Runway ML",
    category: "Edición con IA",
    description: "Rotoscopia automática, extensión de video y efectos visuales imposibles de lograr con herramientas tradicionales.",
    color: "#EA580C",
    icon: (
      <svg viewBox="0 0 40 40" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#EA580C" fillOpacity="0.2" />
        <rect x="8" y="17" width="24" height="6" rx="3" fill="#EA580C" fillOpacity="0.7" />
        <circle cx="20" cy="20" r="4" fill="#EA580C" />
        <line x1="20" y1="8" x2="20" y2="13" stroke="#EA580C" strokeWidth="2" />
        <line x1="20" y1="27" x2="20" y2="32" stroke="#EA580C" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "Midjourney",
    category: "Fotografía IA",
    description: "Generamos fotos de producto, lifestyle y team shots de nivel editorial sin sesión fotográfica. Retoque incluido.",
    color: "#3B82F6",
    icon: (
      <svg viewBox="0 0 40 40" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#3B82F6" fillOpacity="0.2" />
        <path d="M14 28 Q14 16 20 12 Q26 16 26 28" stroke="#3B82F6" strokeWidth="2" fill="none" />
        <path d="M20 12 Q20 20 20 28" stroke="#3B82F6" strokeWidth="1.5" fill="none" />
        <ellipse cx="20" cy="28" rx="6" ry="2" fill="#3B82F6" fillOpacity="0.3" />
      </svg>
    ),
  },
  {
    name: "Sora",
    category: "Video generativo",
    description: "Videos de alta fidelidad generados por OpenAI. Escenas complejas, cinematografía imposible de producir en set.",
    color: "#10B981",
    icon: (
      <svg viewBox="0 0 40 40" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#10B981" fillOpacity="0.2" />
        <circle cx="20" cy="20" r="10" stroke="#10B981" strokeWidth="1.5" fill="none" />
        <circle cx="20" cy="20" r="6" stroke="#10B981" strokeWidth="1.5" fill="none" />
        <circle cx="20" cy="20" r="2.5" fill="#10B981" fillOpacity="0.7" />
      </svg>
    ),
  },
  {
    name: "Pika Labs",
    category: "Animación de imagen",
    description: "Damos vida a fotos estáticas y diseños. Animaciones fluidas para redes sociales, motion logos y contenido dinámico.",
    color: "#F59E0B",
    icon: (
      <svg viewBox="0 0 40 40" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#F59E0B" fillOpacity="0.2" />
        <path d="M15 10 L15 30 L30 20 Z" fill="#F59E0B" fillOpacity="0.7" />
        <path d="M10 14 L10 26" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function MotionTools() {
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
      style={{ background: "#0D0B18" }}
    >
      <div className="max-w-5xl mx-auto">
        <div
          className={cn(
            "text-center mb-14 transition-all duration-700",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20">
            <span className="text-xs font-semibold text-orange-300 tracking-wide">
              Herramientas de vanguardia
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-clash mb-4">
            Producimos con las{" "}
            <span className="gradient-text">mejores IAs.</span>
          </h2>
          <p className="text-white/50 text-base max-w-xl mx-auto">
            Combinamos las herramientas de IA más avanzadas del mercado con criterio creativo humano para producir contenido que ningún otro estudio puede igualar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool, i) => (
            <div
              key={tool.name}
              className={cn(
                "group relative p-6 rounded-2xl transition-all duration-700 hover:scale-[1.02]",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{
                transitionDelay: `${i * 80}ms`,
                background: `${tool.color}08`,
                border: `1px solid ${tool.color}25`,
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top left, ${tool.color}12 0%, transparent 70%)` }}
              />

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex-shrink-0">
                  {tool.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                    <h3 className="text-white font-bold text-base font-clash">{tool.name}</h3>
                    <span
                      className="text-[10px] px-2 py-0.5 rounded-full font-semibold"
                      style={{ background: tool.color + "20", color: tool.color }}
                    >
                      {tool.category}
                    </span>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Fifth tool spans full on some layouts — add sixth item CTA */}
          <div
            className={cn(
              "relative p-6 rounded-2xl transition-all duration-700 flex items-center gap-4 cursor-pointer",
              "border border-dashed border-violet-500/20 bg-violet-500/4 hover:border-violet-500/40",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: `${5 * 80}ms` }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600/20 to-orange-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-lg">+</span>
            </div>
            <div>
              <p className="text-white/70 font-semibold text-sm">Y muchas más</p>
              <p className="text-white/35 text-xs">Adobe Creative Suite · DaVinci Resolve · After Effects</p>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div
          className={cn(
            "mt-12 text-center transition-all duration-700 delay-500",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <p className="text-white/30 text-sm italic">
            "No reemplazamos la creatividad humana con IA. Usamos la IA para amplificarla."
          </p>
        </div>
      </div>
    </section>
  );
}
