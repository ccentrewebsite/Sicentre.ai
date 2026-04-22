"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const productions = [
  {
    title: "Film Culinaire",
    client: "Casa Verde Restaurant",
    type: "Video cinematográfico",
    description: "Planos macro de platos, vapor, texturas. Edición de 60 segundos con música ambient y color grading cálido. +45% reservas tras el lanzamiento.",
    colors: ["#22C55E", "#15803D", "#052E16"],
    shape: "film",
    aspect: "tall",
  },
  {
    title: "Video Inmobiliaria",
    client: "Del Sur Propiedades",
    type: "Tour virtual & drone",
    description: "Recorrido aéreo de 90 segundos con drone, interiores en steadicam y narración. Cada propiedad, una historia.",
    colors: ["#3B82F6", "#1D4ED8", "#0A1628"],
    shape: "drone",
    aspect: "square",
  },
  {
    title: "Identidad de Marca",
    client: "Boutique Asunción",
    type: "Brand film",
    description: "Sesión fotográfica + video lifestyle. 3 reels, 20 fotos de producto, identidad visual coherente para todas las plataformas.",
    colors: ["#EC4899", "#9D174D", "#1C001A"],
    shape: "brand",
    aspect: "square",
  },
  {
    title: "Campaña IA",
    client: "TechPY",
    type: "IA + Motion graphics",
    description: "Videos generados con Sora y Kling AI, post-producidos con color grading profesional. El futuro del contenido, hoy.",
    colors: ["#7C3AED", "#4C1D95", "#130B20"],
    shape: "ai",
    aspect: "tall",
  },
  {
    title: "Reel Social",
    client: "Gym Force",
    type: "Content mensual",
    description: "8 reels/mes: entrenamientos, transformaciones, tips. 200k views en el primer mes. Estrategia de contenido + producción completa.",
    colors: ["#EF4444", "#991B1B", "#1A0808"],
    shape: "reel",
    aspect: "square",
  },
  {
    title: "Fotografía IA",
    client: "Clínica Sonrisas",
    type: "AI Photography",
    description: "Fotos de antes/después, equipo médico y espacios. Generadas y retocadas con Midjourney. Cero sesión, máximo impacto.",
    colors: ["#F59E0B", "#B45309", "#150C00"],
    shape: "photo",
    aspect: "square",
  },
];

type ProductionShape = "film" | "drone" | "brand" | "ai" | "reel" | "photo";

function CinematicVisual({ colors, shape }: { colors: string[]; shape: ProductionShape }) {
  const visuals: Record<ProductionShape, React.ReactNode> = {
    film: (
      <svg viewBox="0 0 200 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="filmGrad" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor={colors[0]} stopOpacity="0.6" />
            <stop offset="100%" stopColor={colors[2]} stopOpacity="1" />
          </radialGradient>
        </defs>
        <rect width="200" height="160" fill={`url(#filmGrad)`} />
        {/* Bokeh circles */}
        {[40,80,130,160].map((x, i) => (
          <circle key={i} cx={x} cy={60 + i * 10} r={8 + i * 4} fill={colors[0]} fillOpacity="0.12" />
        ))}
        {/* Steam wisps */}
        <path d="M80 120 Q85 105 80 90 Q75 75 80 60" stroke={colors[0]} strokeWidth="1.5" fill="none" strokeOpacity="0.4" />
        <path d="M100 125 Q107 110 100 95 Q93 80 100 65" stroke={colors[0]} strokeWidth="2" fill="none" strokeOpacity="0.3" />
        <path d="M120 118 Q126 103 120 88 Q114 73 120 58" stroke={colors[0]} strokeWidth="1.5" fill="none" strokeOpacity="0.4" />
        {/* Plate shape */}
        <ellipse cx="100" cy="130" rx="50" ry="8" fill={colors[0]} fillOpacity="0.15" />
        {/* Film grain */}
        {Array.from({length: 30}).map((_, i) => (
          <rect key={i} x={Math.sin(i * 47) * 90 + 100} y={Math.cos(i * 31) * 60 + 80} width="1" height="1" fill="white" fillOpacity="0.1" />
        ))}
      </svg>
    ),
    drone: (
      <svg viewBox="0 0 200 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="droneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors[2]} />
            <stop offset="100%" stopColor={colors[1]} />
          </linearGradient>
        </defs>
        <rect width="200" height="160" fill={`url(#droneGrad)`} />
        {/* Aerial grid */}
        {[20,40,60,80,100,120,140,160,180].map((x) => (
          <line key={x} x1={x} y1="0" x2={x - 20} y2="160" stroke={colors[0]} strokeOpacity="0.08" strokeWidth="0.5" />
        ))}
        {[0,20,40,60,80,100,120,140,160].map((y) => (
          <line key={y} x1="0" y1={y} x2="200" y2={y} stroke={colors[0]} strokeOpacity="0.08" strokeWidth="0.5" />
        ))}
        {/* Building shapes */}
        <rect x="30" y="80" width="25" height="60" fill={colors[0]} fillOpacity="0.15" rx="2" />
        <rect x="70" y="60" width="30" height="80" fill={colors[0]} fillOpacity="0.2" rx="2" />
        <rect x="115" y="90" width="20" height="50" fill={colors[0]} fillOpacity="0.12" rx="2" />
        <rect x="150" y="70" width="28" height="70" fill={colors[0]} fillOpacity="0.18" rx="2" />
        {/* Drone crosshair */}
        <circle cx="100" cy="80" r="20" stroke={colors[0]} strokeWidth="0.8" fill="none" strokeOpacity="0.5" strokeDasharray="3 2" />
        <line x1="100" y1="55" x2="100" y2="70" stroke={colors[0]} strokeWidth="0.8" strokeOpacity="0.6" />
        <line x1="100" y1="90" x2="100" y2="105" stroke={colors[0]} strokeWidth="0.8" strokeOpacity="0.6" />
        <line x1="75" y1="80" x2="90" y2="80" stroke={colors[0]} strokeWidth="0.8" strokeOpacity="0.6" />
        <line x1="110" y1="80" x2="125" y2="80" stroke={colors[0]} strokeWidth="0.8" strokeOpacity="0.6" />
        <circle cx="100" cy="80" r="3" fill={colors[0]} fillOpacity="0.7" />
      </svg>
    ),
    brand: (
      <svg viewBox="0 0 200 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="brandGrad" cx="60%" cy="35%" r="70%">
            <stop offset="0%" stopColor={colors[0]} stopOpacity="0.5" />
            <stop offset="100%" stopColor={colors[2]} />
          </radialGradient>
        </defs>
        <rect width="200" height="160" fill={`url(#brandGrad)`} />
        {/* Fashion silhouette */}
        <ellipse cx="100" cy="40" rx="18" ry="20" fill={colors[0]} fillOpacity="0.25" />
        <path d="M78 60 Q90 55 100 58 Q110 55 122 60 L130 130 Q115 138 100 136 Q85 138 70 130 Z" fill={colors[0]} fillOpacity="0.2" />
        {/* Geometric accents */}
        <polygon points="150,20 170,50 130,50" fill={colors[0]} fillOpacity="0.15" />
        <circle cx="35" cy="100" r="25" stroke={colors[0]} strokeWidth="0.5" fill="none" strokeOpacity="0.3" />
        <circle cx="35" cy="100" r="15" stroke={colors[0]} strokeWidth="0.5" fill="none" strokeOpacity="0.2" />
        {/* Diagonal lines */}
        {[0,20,40].map((offset) => (
          <line key={offset} x1={offset} y1="0" x2={offset + 160} y2="160" stroke={colors[0]} strokeOpacity="0.04" strokeWidth="0.5" />
        ))}
        {/* Color swatches */}
        <rect x="160" y="100" width="12" height="12" rx="2" fill={colors[0]} fillOpacity="0.6" />
        <rect x="160" y="118" width="12" height="12" rx="2" fill={colors[1]} fillOpacity="0.6" />
        <rect x="160" y="136" width="12" height="12" rx="2" fill="white" fillOpacity="0.1" />
      </svg>
    ),
    ai: (
      <svg viewBox="0 0 200 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="aiGrad" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor={colors[0]} stopOpacity="0.4" />
            <stop offset="60%" stopColor={colors[1]} stopOpacity="0.3" />
            <stop offset="100%" stopColor={colors[2]} />
          </radialGradient>
        </defs>
        <rect width="200" height="160" fill={`url(#aiGrad)`} />
        {/* Neural network nodes */}
        {[[30,40],[30,80],[30,120],[100,30],[100,65],[100,95],[100,130],[170,50],[170,80],[170,110]].map(([x,y], i) => (
          <circle key={i} cx={x} cy={y} r="5" fill={colors[0]} fillOpacity={0.3 + (i % 3) * 0.15} />
        ))}
        {/* Connections */}
        {[
          [30,40,100,30],[30,40,100,65],[30,80,100,65],[30,80,100,95],
          [30,120,100,95],[30,120,100,130],[100,30,170,50],[100,65,170,50],
          [100,65,170,80],[100,95,170,80],[100,95,170,110],[100,130,170,110]
        ].map(([x1,y1,x2,y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={colors[0]} strokeOpacity="0.15" strokeWidth="0.8" />
        ))}
        {/* Glowing center */}
        <circle cx="100" cy="80" r="30" fill={colors[0]} fillOpacity="0.06" />
        <circle cx="100" cy="80" r="18" fill={colors[0]} fillOpacity="0.1" />
      </svg>
    ),
    reel: (
      <svg viewBox="0 0 200 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="reelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={colors[2]} />
            <stop offset="100%" stopColor={colors[1]} />
          </linearGradient>
        </defs>
        <rect width="200" height="160" fill={`url(#reelGrad)`} />
        {/* Phone frame */}
        <rect x="70" y="15" width="60" height="130" rx="8" fill="rgba(255,255,255,0.05)" stroke={colors[0]} strokeWidth="0.5" strokeOpacity="0.4" />
        {/* Screen content */}
        <rect x="73" y="22" width="54" height="95" rx="3" fill={colors[0]} fillOpacity="0.12" />
        {/* Play button */}
        <polygon points="95,64 115,74 95,84" fill={colors[0]} fillOpacity="0.5" />
        {/* Progress bar */}
        <rect x="73" y="120" width="30" height="2" rx="1" fill={colors[0]} fillOpacity="0.5" />
        <rect x="103" y="120" width="24" height="2" rx="1" fill="white" fillOpacity="0.1" />
        {/* Side buttons */}
        <rect x="65" y="45" width="4" height="20" rx="2" fill={colors[0]} fillOpacity="0.3" />
        <rect x="131" y="45" width="4" height="15" rx="2" fill={colors[0]} fillOpacity="0.3" />
        {/* Bottom bar */}
        <rect x="85" y="137" width="30" height="3" rx="1.5" fill="white" fillOpacity="0.15" />
        {/* Stats outside phone */}
        <text x="20" y="55" fontSize="8" fill={colors[0]} fillOpacity="0.6" fontFamily="monospace">200K</text>
        <text x="20" y="65" fontSize="6" fill="white" fillOpacity="0.3" fontFamily="monospace">views</text>
        <text x="155" y="55" fontSize="8" fill={colors[0]} fillOpacity="0.6" fontFamily="monospace">+38%</text>
        <text x="155" y="65" fontSize="6" fill="white" fillOpacity="0.3" fontFamily="monospace">reach</text>
      </svg>
    ),
    photo: (
      <svg viewBox="0 0 200 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="photoGrad" cx="40%" cy="30%" r="65%">
            <stop offset="0%" stopColor={colors[0]} stopOpacity="0.3" />
            <stop offset="100%" stopColor={colors[2]} />
          </radialGradient>
        </defs>
        <rect width="200" height="160" fill={`url(#photoGrad)`} />
        {/* Camera aperture */}
        <circle cx="100" cy="80" r="45" stroke={colors[0]} strokeWidth="0.5" fill="none" strokeOpacity="0.2" />
        <circle cx="100" cy="80" r="35" stroke={colors[0]} strokeWidth="0.8" fill="none" strokeOpacity="0.3" />
        <circle cx="100" cy="80" r="25" stroke={colors[0]} strokeWidth="1" fill="none" strokeOpacity="0.4" />
        <circle cx="100" cy="80" r="10" fill={colors[0]} fillOpacity="0.2" />
        {/* Blade lines */}
        {[0,30,60,90,120,150].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          return (
            <line
              key={i}
              x1={100 + Math.cos(rad) * 10}
              y1={80 + Math.sin(rad) * 10}
              x2={100 + Math.cos(rad) * 35}
              y2={80 + Math.sin(rad) * 35}
              stroke={colors[0]}
              strokeOpacity="0.25"
              strokeWidth="0.8"
            />
          );
        })}
        {/* Sparkle */}
        <circle cx="50" cy="35" r="3" fill={colors[0]} fillOpacity="0.5" />
        <circle cx="160" cy="45" r="2" fill={colors[0]} fillOpacity="0.4" />
        <circle cx="145" cy="130" r="4" fill={colors[0]} fillOpacity="0.3" />
        {/* AI badge */}
        <rect x="140" y="15" width="40" height="16" rx="8" fill={colors[0]} fillOpacity="0.2" stroke={colors[0]} strokeWidth="0.5" strokeOpacity="0.4" />
        <text x="150" y="26" fontSize="6" fill={colors[0]} fillOpacity="0.8" fontFamily="sans-serif">AI gen</text>
      </svg>
    ),
  };

  return visuals[shape] || null;
}

export default function MotionGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
      className="py-24 md:py-32 px-6 md:px-10 planet-section"
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
            Producción{" "}
            <span className="gradient-text">premium.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Cada pieza de contenido diseñada para generar resultados reales en redes y plataformas.
          </p>
        </div>

        {/* Showreel grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {productions.map((item, i) => (
            <div
              key={item.title}
              className={cn(
                "group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700",
                item.aspect === "tall" ? "sm:row-span-2" : "",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{
                transitionDelay: `${i * 80}ms`,
                border: "1px solid rgba(255,255,255,0.08)",
                minHeight: item.aspect === "tall" ? "320px" : "220px",
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Cinematic visual */}
              <div className="absolute inset-0">
                <CinematicVisual colors={item.colors} shape={item.shape as ProductionShape} />
              </div>

              {/* Default label */}
              <div
                className={cn(
                  "absolute bottom-0 left-0 right-0 p-4 transition-all duration-300",
                  hoveredIndex === i ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                )}
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold text-sm">{item.title}</p>
                    <p className="text-white/50 text-xs">{item.type}</p>
                  </div>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-semibold"
                    style={{
                      background: item.colors[0] + "25",
                      color: item.colors[0],
                      border: `1px solid ${item.colors[0]}40`,
                    }}
                  >
                    {item.type.split(" ")[0]}
                  </span>
                </div>
              </div>

              {/* Hover overlay with description */}
              <div
                className={cn(
                  "absolute inset-0 flex flex-col justify-end p-5 transition-all duration-300",
                  hoveredIndex === i ? "opacity-100" : "opacity-0"
                )}
                style={{
                  background: `linear-gradient(to top, ${item.colors[2]}f0 0%, ${item.colors[1]}90 50%, transparent 100%)`,
                }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-2"
                  style={{ color: item.colors[0] }}
                >
                  {item.type}
                </p>
                <h3 className="text-white font-bold text-lg mb-2 font-clash">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-3">
                  {item.description}
                </p>
                <p className="text-white/40 text-xs">{item.client}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
