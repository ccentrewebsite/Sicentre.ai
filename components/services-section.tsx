"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ServiceItem {
  stat: string;
  label: string;
  service: string;
  description: string;
  href: string;
  delay: number;
  borderColor: string;
  borderHover: string;
}

const services: ServiceItem[] = [
  {
    stat: "24/7",
    label: "Voz IA",
    service: "Agentes\nde voz",
    description: "Agente de voz con IA que responde llamadas, califica leads y agenda turnos — las 24 horas, los 7 días.",
    href: "/voz-ia",
    delay: 0,
    borderColor: "rgba(234,88,12,0.25)",
    borderHover: "rgba(234,88,12,0.6)",
  },
  {
    stat: "100%",
    label: "Diseño Web",
    service: "Sitios web a medida",
    description: "Un sitio que refleja su marca, convierte visitantes en clientes y trabaja por usted las 24 horas. Sin IA genérica.",
    href: "/web",
    delay: 100,
    borderColor: "rgba(124,58,237,0.25)",
    borderHover: "rgba(124,58,237,0.6)",
  },
  {
    stat: "∞",
    label: "Motion",
    service: "Creación visual profesional",
    description: "Video cinematográfico, fotografía IA y content mensual para redes. Producción de nivel internacional.",
    href: "/motion",
    delay: 200,
    borderColor: "rgba(99,102,241,0.25)",
    borderHover: "rgba(99,102,241,0.6)",
  },
];

const C_ORANGE = "rgba(251,146,60,0.9)";
const C_VIOLET = "rgba(167,139,250,0.9)";
const C_BLUE   = "rgba(147,197,253,0.9)";

function Stat({ value, color, size = "clamp(3.8rem,7.5vw,6rem)" }: { value: string; color: string; size?: string }) {
  return (
    <span style={{
      fontFamily: "'AUTOMATA-DISPLAY', sans-serif",
      fontSize: size,
      fontWeight: 700,
      color: "transparent",
      WebkitTextStroke: `2px ${color}`,
      textShadow: `0 0 36px ${color}, 0 0 70px ${color}`,
      letterSpacing: "-0.02em",
      userSelect: "none",
      lineHeight: 1,
    }}>
      {value}
    </span>
  );
}

function VozVisual({ stat }: { stat: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: "linear-gradient(160deg, #110800 0%, #1f0d00 50%, #0d0b18 100%)" }}>
      <div className="absolute" style={{ width: "260px", height: "260px", background: "radial-gradient(circle, rgba(251,146,60,0.85) 0%, rgba(234,88,12,0.55) 35%, transparent 70%)", top: "-10%", left: "50%", transform: "translateX(-50%)", filter: "blur(18px)" }} />
      <div className="absolute" style={{ width: "180px", height: "180px", background: "radial-gradient(circle, rgba(251,191,36,0.5) 0%, transparent 70%)", top: "20%", right: "5%", filter: "blur(28px)" }} />
      <div className="absolute" style={{ width: "300px", height: "200px", background: "radial-gradient(ellipse, rgba(234,88,12,0.3) 0%, transparent 70%)", bottom: "0", left: "50%", transform: "translateX(-50%)", filter: "blur(30px)" }} />
      {/* Stat + illustration */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10">
        <Stat value={stat} color={C_ORANGE} />
        {/* Audio waveform */}
        <svg width="96" height="36" viewBox="0 0 96 36" fill="none">
          <rect x="0"  y="18" width="8" height="0"  rx="4" fill={C_ORANGE} opacity="0"/>
          <rect x="0"  y="14" width="8" height="8"  rx="4" fill={C_ORANGE} opacity="0.45"/>
          <rect x="11" y="9"  width="8" height="18" rx="4" fill={C_ORANGE} opacity="0.60"/>
          <rect x="22" y="3"  width="8" height="30" rx="4" fill={C_ORANGE} opacity="0.78"/>
          <rect x="33" y="7"  width="8" height="22" rx="4" fill={C_ORANGE} opacity="0.90"/>
          <rect x="44" y="0"  width="8" height="36" rx="4" fill={C_ORANGE} opacity="1.00"/>
          <rect x="55" y="5"  width="8" height="26" rx="4" fill={C_ORANGE} opacity="0.88"/>
          <rect x="66" y="10" width="8" height="16" rx="4" fill={C_ORANGE} opacity="0.65"/>
          <rect x="77" y="15" width="8" height="6"  rx="3" fill={C_ORANGE} opacity="0.45"/>
          <rect x="88" y="17" width="8" height="2"  rx="1" fill={C_ORANGE} opacity="0.30"/>
        </svg>
      </div>
    </div>
  );
}

function WebVisual({ stat }: { stat: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: "linear-gradient(160deg, #0a0618 0%, #150c2e 50%, #0d0b18 100%)" }}>
      <div className="absolute" style={{ width: "280px", height: "280px", background: "radial-gradient(circle, rgba(167,139,250,0.75) 0%, rgba(124,58,237,0.5) 35%, transparent 70%)", top: "-15%", left: "50%", transform: "translateX(-50%)", filter: "blur(20px)" }} />
      <div className="absolute" style={{ width: "160px", height: "160px", background: "radial-gradient(circle, rgba(139,92,246,0.45) 0%, transparent 70%)", top: "25%", left: "0%", filter: "blur(25px)" }} />
      <div className="absolute" style={{ width: "320px", height: "180px", background: "radial-gradient(ellipse, rgba(124,58,237,0.25) 0%, transparent 70%)", bottom: "0", left: "50%", transform: "translateX(-50%)", filter: "blur(30px)" }} />
      {/* Stat + hand-drawn stroke */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 z-10">
        <Stat value={stat} color={C_VIOLET} />
        <svg width="165" height="36" viewBox="0 0 165 36" fill="none">
          {/* Main wobbly hand-drawn stroke */}
          <path
            d="M 4 22 C 12 16, 10 24, 22 19 C 32 15, 30 23, 42 18 C 52 14, 50 22, 62 17 C 72 13, 70 21, 82 16 C 92 12, 90 20, 102 15 C 112 11, 110 19, 122 16 C 126 15, 128 17, 130 16"
            stroke={C_VIOLET} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"
          />
          {/* Pen icon at right end of stroke */}
          <g transform="translate(140, 2) rotate(12)">
            {/* Body */}
            <rect x="-5" y="0" width="10" height="18" rx="2.5" stroke={C_VIOLET} strokeWidth="1.6"/>
            {/* Tip */}
            <path d="M -5 18 L 0 26 L 5 18" stroke={C_VIOLET} strokeWidth="1.6" strokeLinejoin="round"/>
            {/* Cap separator */}
            <line x1="-5" y1="5.5" x2="5" y2="5.5" stroke={C_VIOLET} strokeWidth="1.4"/>
            {/* Clip */}
            <path d="M 5 2 L 7 2 L 7 14" stroke={C_VIOLET} strokeWidth="1.3" strokeLinecap="round"/>
          </g>
        </svg>
      </div>
    </div>
  );
}

function MotionVisual({ stat }: { stat: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: "linear-gradient(160deg, #060c1a 0%, #0c1530 50%, #0d0b18 100%)" }}>
      <div className="absolute" style={{ width: "260px", height: "260px", background: "radial-gradient(circle, rgba(147,197,253,0.70) 0%, rgba(59,130,246,0.45) 35%, transparent 70%)", top: "-10%", left: "50%", transform: "translateX(-50%)", filter: "blur(18px)" }} />
      <div className="absolute" style={{ width: "150px", height: "150px", background: "radial-gradient(circle, rgba(94,234,212,0.4) 0%, transparent 70%)", top: "20%", right: "10%", filter: "blur(25px)" }} />
      <div className="absolute" style={{ width: "300px", height: "200px", background: "radial-gradient(ellipse, rgba(99,102,241,0.25) 0%, transparent 70%)", bottom: "0", left: "50%", transform: "translateX(-50%)", filter: "blur(30px)" }} />
      {/* Stat + cinema pictograms */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10">
        <span style={{ display: "inline-block", transform: "scaleX(1.4)" }}>
          <Stat value={stat} color={C_BLUE} size="clamp(5rem,10vw,8rem)" />
        </span>
        {/* Cinema icons row */}
        <svg width="160" height="34" viewBox="0 0 160 34" fill="none" stroke={C_BLUE} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          {/* Clapperboard */}
          <rect x="2"  y="12" width="28" height="20" rx="3"/>
          <rect x="2"  y="4"  width="28" height="9"  rx="2"/>
          <line x1="9"  y1="4" x2="7"  y2="13"/>
          <line x1="17" y1="4" x2="15" y2="13"/>
          <line x1="25" y1="4" x2="23" y2="13"/>
          {/* Film reel */}
          <circle cx="66" cy="17" r="13"/>
          <circle cx="66" cy="17" r="4"/>
          <circle cx="66" cy="6"  r="2.5"/>
          <circle cx="66" cy="28" r="2.5"/>
          <circle cx="55" cy="17" r="2.5"/>
          <circle cx="77" cy="17" r="2.5"/>
          {/* Camera */}
          <rect x="97" y="10" width="28" height="18" rx="3"/>
          <circle cx="111" cy="19" r="5"/>
          <path d="M 106 10 L 108 5 L 114 5 L 116 10"/>
          {/* Star / sparkle */}
          <path d="M 148 2 L 150 10 L 158 10 L 152 15 L 154 23 L 148 19 L 142 23 L 144 15 L 138 10 L 146 10 Z" opacity="0.85"/>
        </svg>
      </div>
    </div>
  );
}

function ServiceCard({ item, visible, index }: { item: ServiceItem; visible: boolean; index: number }) {
  const [hovered, setHovered] = useState(false);

  const Visual = index === 0
    ? <VozVisual stat={item.stat} />
    : index === 1
    ? <WebVisual stat={item.stat} />
    : <MotionVisual stat={item.stat} />;

  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-[24px] overflow-hidden cursor-pointer",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{
        transitionDelay: `${item.delay}ms`,
        transition: "all 0.4s ease",
        border: `1px solid ${hovered ? item.borderHover : item.borderColor}`,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        background: "rgba(255,255,255,0.03)",
        boxShadow: hovered ? `0 16px 60px rgba(0,0,0,0.5), 0 0 40px ${item.borderColor}` : "0 4px 24px rgba(0,0,0,0.3)",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Visual area */}
      <div className="relative w-full" style={{ height: "260px" }}>
        {Visual}
      </div>

      {/* Content area */}
      <div
        className="flex flex-col gap-3 px-6 py-6"
        style={{ borderTop: `1px solid ${item.borderColor}` }}
      >
        {/* Title */}
        <h3
          className="text-white font-bold leading-tight"
          style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif", fontSize: "clamp(1.3rem, 2.2vw, 1.65rem)" }}
        >
          {item.service.split("\n").map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </h3>

        {/* Description */}
        <p className="text-white/55 text-sm leading-relaxed">
          {item.description}
        </p>

        {/* CTA */}
        <Link
          href={item.href}
          className="mt-1 text-xs font-semibold text-white/40 hover:text-white/80 tracking-[0.12em] uppercase transition-colors duration-200 border-b border-white/15 hover:border-white/50 pb-0.5 self-start"
        >
          Saber más
        </Link>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [orange, setOrange] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setOrange((p) => !p), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="relative py-24 overflow-hidden planet-section"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 80% 20%, rgba(124,58,237,0.07) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className={cn("text-center mb-16 transition-all duration-700", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl mx-auto leading-tight"
            style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
          >
            Todo lo que su negocio necesita,
            <br />
            <span style={{
              color: orange ? "#EA580C" : "#7C3AED",
              transition: "color 0.8s ease-in-out",
              textShadow: "0 3px 12px rgba(0,0,0,0.5)",
            }}>
              en un solo lugar.
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((item, i) => (
            <ServiceCard key={item.stat} item={item} visible={visible} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
