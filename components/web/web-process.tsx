"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, Palette, Code2, Rocket, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

type Step = {
  number: string;
  title: string;
  duration: string;
  description: string;
  highlights: string[];
  icon: typeof MessageCircle;
  accent: string;
  accentSoft: string;
  illustration: React.ReactNode;
};

/* ── Per-step micro illustrations ───────────────────────── */

function BriefIllu({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 200 110" className="w-full h-full">
      <defs>
        <linearGradient id="brief-bubble" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0.3" />
          <stop offset="100%" stopColor={accent} stopOpacity="0.05" />
        </linearGradient>
      </defs>
      {/* WhatsApp bubble out */}
      <rect x="20" y="22" width="98" height="22" rx="11" fill="url(#brief-bubble)" stroke={accent} strokeOpacity="0.45" strokeWidth="1" />
      <line x1="34" y1="33" x2="92" y2="33" stroke="white" strokeOpacity="0.55" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="34" y1="38" x2="78" y2="38" stroke="white" strokeOpacity="0.32" strokeWidth="1.4" strokeLinecap="round" />
      {/* Bubble in */}
      <rect x="82" y="56" width="98" height="22" rx="11" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
      <line x1="94" y1="67" x2="158" y2="67" stroke="white" strokeOpacity="0.65" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="94" y1="72" x2="138" y2="72" stroke="white" strokeOpacity="0.32" strokeWidth="1.4" strokeLinecap="round" />
      {/* Typing dots */}
      <circle cx="32" cy="92" r="2.2" fill={accent} opacity="0.7"><animate attributeName="opacity" values="0.3;1;0.3" dur="1.4s" repeatCount="indefinite" /></circle>
      <circle cx="42" cy="92" r="2.2" fill={accent} opacity="0.5"><animate attributeName="opacity" values="0.3;1;0.3" dur="1.4s" begin="0.2s" repeatCount="indefinite" /></circle>
      <circle cx="52" cy="92" r="2.2" fill={accent} opacity="0.4"><animate attributeName="opacity" values="0.3;1;0.3" dur="1.4s" begin="0.4s" repeatCount="indefinite" /></circle>
    </svg>
  );
}

function DesignIllu({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 200 110" className="w-full h-full">
      {/* Layout frame */}
      <rect x="14" y="12" width="120" height="86" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
      {/* Header */}
      <rect x="22" y="22" width="38" height="6" rx="2" fill={accent} fillOpacity="0.7" />
      <rect x="100" y="22" width="26" height="4" rx="2" fill="rgba(255,255,255,0.4)" />
      {/* Hero */}
      <rect x="22" y="36" width="104" height="22" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="30" y="44" width="60" height="3" rx="1.5" fill="white" fillOpacity="0.7" />
      <rect x="30" y="50" width="40" height="2.5" rx="1.25" fill="rgba(255,255,255,0.3)" />
      {/* Cards row */}
      <rect x="22" y="64" width="32" height="28" rx="3" fill={accent} fillOpacity="0.18" stroke={accent} strokeOpacity="0.4" strokeWidth="0.6" />
      <rect x="58" y="64" width="32" height="28" rx="3" fill="rgba(234,88,12,0.18)" stroke="rgba(234,88,12,0.4)" strokeWidth="0.6" />
      <rect x="94" y="64" width="32" height="28" rx="3" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.6" />
      {/* Color palette */}
      <circle cx="156" cy="32" r="9" fill={accent} />
      <circle cx="174" cy="32" r="9" fill="#EA580C" />
      <circle cx="156" cy="50" r="9" fill="#A78BFA" />
      <circle cx="174" cy="50" r="9" fill="rgba(255,255,255,0.85)" />
      {/* Cursor */}
      <path d="M 152 78 L 152 96 L 158 91 L 162 99 L 166 97 L 162 89 L 168 89 Z" fill="white" stroke={accent} strokeWidth="1" />
    </svg>
  );
}

function DevIllu({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 200 110" className="w-full h-full">
      {/* Code editor */}
      <rect x="16" y="14" width="168" height="84" rx="6" fill="rgba(20,16,38,0.85)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <rect x="16" y="14" width="168" height="14" rx="6" fill="rgba(255,255,255,0.05)" />
      {[
        { color: "#ff5f57", x: 24 },
        { color: "#ffbd2e", x: 34 },
        { color: "#28c840", x: 44 },
      ].map((d, i) => <circle key={i} cx={d.x} cy="21" r="2.5" fill={d.color} opacity="0.8" />)}
      {/* Code lines */}
      <text x="24" y="44" fontSize="6" fontFamily="monospace" fill={accent} fillOpacity="0.85">{`<section>`}</text>
      <text x="32" y="56" fontSize="6" fontFamily="monospace" fill="#FB923C" fillOpacity="0.85">{`<Hero `}<tspan fill="#A78BFA">live</tspan>{` />`}</text>
      <text x="32" y="68" fontSize="6" fontFamily="monospace" fill="rgba(255,255,255,0.6)">{`<Pricing />`}</text>
      <text x="32" y="80" fontSize="6" fontFamily="monospace" fill="rgba(255,255,255,0.45)">{`<Footer />`}</text>
      <text x="24" y="92" fontSize="6" fontFamily="monospace" fill={accent} fillOpacity="0.85">{`</section>`}</text>
      {/* Cursor blink */}
      <rect x="92" y="50" width="1.5" height="9" fill="white">
        <animate attributeName="opacity" values="0;1;0" dur="1.2s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
}

function LaunchIllu({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 200 110" className="w-full h-full">
      <defs>
        <linearGradient id="rocket-trail" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#EA580C" stopOpacity="0" />
          <stop offset="100%" stopColor="#EA580C" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      {/* Trail */}
      <path d="M 96 110 Q 100 70 110 50 Q 118 35 132 22" stroke="url(#rocket-trail)" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="2 4" />
      {/* Stars */}
      {[
        { x: 30, y: 28, r: 1.4 },
        { x: 60, y: 18, r: 1 },
        { x: 170, y: 30, r: 1.6 },
        { x: 150, y: 60, r: 1 },
        { x: 30, y: 80, r: 1.2 },
      ].map((s, i) => (
        <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="white" opacity="0.7">
          <animate attributeName="opacity" values="0.2;0.9;0.2" dur={`${1.5 + (i * 0.3)}s`} repeatCount="indefinite" />
        </circle>
      ))}
      {/* Rocket */}
      <g transform="translate(122, 14) rotate(35)">
        <path d="M 0 0 Q 8 -4 16 0 L 14 22 L 2 22 Z" fill={accent} />
        <path d="M 4 22 L 0 30 L 6 26 Z" fill="#FB923C" />
        <path d="M 12 22 L 16 30 L 10 26 Z" fill="#FB923C" />
        <circle cx="8" cy="9" r="2.5" fill="rgba(255,255,255,0.9)" />
        {/* Flame */}
        <path d="M 4 24 Q 8 32 12 24 L 8 36 Z" fill="#EA580C">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="0.5s" repeatCount="indefinite" />
        </path>
      </g>
      {/* Domain ribbon */}
      <rect x="16" y="92" width="80" height="14" rx="7" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
      <text x="24" y="102" fontSize="6.5" fontFamily="monospace" fill={accent}>https://</text>
      <text x="50" y="102" fontSize="6.5" fontFamily="monospace" fill="white">su-marca.com</text>
    </svg>
  );
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "Brief",
    duration: "15 minutos",
    description: "Una conversación por WhatsApp para entender quién es, qué vende y a quién atiende.",
    highlights: ["Sin formularios", "Audio o texto", "Respuesta el mismo día"],
    icon: MessageCircle,
    accent: "#A78BFA",
    accentSoft: "rgba(167,139,250,0.18)",
    illustration: <BriefIllu accent="#A78BFA" />,
  },
  {
    number: "02",
    title: "Diseño",
    duration: "24 a 48 horas",
    description: "Recibe un diseño hecho desde cero. Ajustamos las veces que haga falta hasta dar en el clavo.",
    highlights: ["Mockup interactivo", "Revisiones ilimitadas", "Sin templates"],
    icon: Palette,
    accent: "#7C3AED",
    accentSoft: "rgba(124,58,237,0.18)",
    illustration: <DesignIllu accent="#7C3AED" />,
  },
  {
    number: "03",
    title: "Desarrollo",
    duration: "5 a 10 días",
    description: "Construimos su sitio con stack moderno, optimizado para velocidad, móvil y SEO desde el día cero.",
    highlights: ["Next.js 14", "100% responsive", "Performance Lighthouse 95+"],
    icon: Code2,
    accent: "#F472B6",
    accentSoft: "rgba(244,114,182,0.18)",
    illustration: <DevIllu accent="#F472B6" />,
  },
  {
    number: "04",
    title: "Lanzamiento",
    duration: "El mismo día",
    description: "Su sitio queda online con dominio, hosting y SSL incluidos. El sitio es suyo, sin suscripciones.",
    highlights: ["Dominio + SSL", "Hosting gestionado", "Soporte WhatsApp"],
    icon: Rocket,
    accent: "#EA580C",
    accentSoft: "rgba(234,88,12,0.18)",
    illustration: <LaunchIllu accent="#EA580C" />,
  },
];

function StepCard({ step, index, visible }: { step: Step; index: number; visible: boolean }) {
  const Icon = step.icon;
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-3xl overflow-hidden transition-all duration-700",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{
        transitionDelay: `${index * 110}ms`,
        background: "rgba(20,16,38,0.55)",
        border: `1px solid ${step.accentSoft}`,
        boxShadow: `inset 0 1px 0 rgba(255,255,255,0.06), 0 18px 40px rgba(0,0,0,0.32), 0 0 60px ${step.accentSoft}`,
      }}
    >
      {/* Illustration band */}
      <div
        className="relative h-28 md:h-32 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${step.accentSoft} 0%, rgba(20,16,38,0.4) 100%)`,
        }}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            width: "180px",
            height: "120px",
            top: "-30px",
            left: "50%",
            transform: "translateX(-50%)",
            background: `radial-gradient(ellipse, ${step.accentSoft} 0%, transparent 70%)`,
            filter: "blur(28px)",
          }}
        />
        <div className="absolute inset-0">{step.illustration}</div>
      </div>

      {/* Content */}
      <div className="relative px-5 pt-5 pb-6 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-xl shrink-0"
            style={{
              background: step.accentSoft,
              border: `1px solid ${step.accent}55`,
            }}
          >
            <Icon size={16} style={{ color: step.accent }} strokeWidth={2.2} />
          </span>
          <div className="flex-1">
            <div className="flex items-baseline gap-2">
              <span className="text-[10px] uppercase tracking-[0.22em] font-bold" style={{ color: step.accent }}>
                {step.number}
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.16em] text-white/45">
                <Clock size={9} strokeWidth={2.4} /> {step.duration}
              </span>
            </div>
            <h3
              className="font-clash font-bold text-white text-xl mt-0.5 leading-tight"
            >
              {step.title}
            </h3>
          </div>
        </div>

        <p className="text-white/65 text-sm leading-relaxed">
          {step.description}
        </p>

        <ul className="flex flex-wrap gap-1.5 mt-1">
          {step.highlights.map((h) => (
            <li
              key={h}
              className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.12em] font-semibold px-2 py-0.5 rounded-full"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              <span className="w-1 h-1 rounded-full" style={{ background: step.accent }} />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function WebProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 px-6 md:px-10 overflow-hidden">
      {/* Background ambient */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "min(120vw, 900px)",
          height: "500px",
          top: "-180px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(ellipse, rgba(124,58,237,0.14) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Title */}
        <div className={cn("text-center mb-12 md:mb-16 transition-all duration-700", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/45 mb-3">
            De la idea al sitio en línea
          </p>
          <h2
            className="font-clash text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Así{" "}
            <span className="gradient-text" style={{ filter: "drop-shadow(0 4px 18px rgba(124,58,237,0.4))" }}>
              trabajamos
            </span>
            <span className="text-white">.</span>
          </h2>
          <p className="text-white/55 text-base md:text-lg max-w-2xl mx-auto mt-4">
            Cuatro pasos claros, sin reuniones interminables ni sorpresas en la factura.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {STEPS.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
