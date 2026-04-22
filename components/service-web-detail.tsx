"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// ── Illustrations ──────────────────────────────────────────────────────────────

function DesignIllustration() {
  return (
    <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
      <div className="absolute" style={{ width: "220px", height: "180px", background: "radial-gradient(ellipse, rgba(124,58,237,0.30) 0%, transparent 70%)", top: "0", left: "30%", filter: "blur(24px)" }} />
      <div className="absolute" style={{ width: "160px", height: "140px", background: "radial-gradient(ellipse, rgba(234,88,12,0.25) 0%, transparent 70%)", bottom: "5%", right: "10%", filter: "blur(20px)" }} />
      {/* Blob violet */}
      <div className="absolute" style={{ width: "115px", height: "105px", background: "linear-gradient(135deg, rgba(124,58,237,0.85), rgba(139,92,246,0.55))", borderRadius: "62% 38% 46% 54% / 55% 48% 52% 45%", top: "12%", left: "10%", boxShadow: "0 0 32px rgba(124,58,237,0.55)" }} />
      {/* Blob orange */}
      <div className="absolute" style={{ width: "95px", height: "88px", background: "linear-gradient(135deg, rgba(234,88,12,0.85), rgba(251,146,60,0.55))", borderRadius: "38% 62% 55% 45% / 48% 55% 45% 52%", top: "18%", right: "14%", boxShadow: "0 0 28px rgba(234,88,12,0.55)" }} />
      {/* Small accent */}
      <div className="absolute" style={{ width: "58px", height: "54px", background: "linear-gradient(135deg, rgba(167,139,250,0.75), rgba(124,58,237,0.45))", borderRadius: "55% 45% 38% 62% / 45% 62% 38% 55%", bottom: "22%", left: "32%", boxShadow: "0 0 18px rgba(124,58,237,0.45)" }} />
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.45 }}>
        <line x1="22%" y1="38%" x2="68%" y2="32%" stroke="rgba(167,139,250,0.8)" strokeWidth="1" strokeDasharray="3 6" />
        <line x1="28%" y1="58%" x2="56%" y2="76%" stroke="rgba(251,146,60,0.7)" strokeWidth="1" strokeDasharray="4 5" />
        <circle cx="22%" cy="38%" r="3.5" fill="rgba(167,139,250,0.95)" />
        <circle cx="68%" cy="32%" r="2.8" fill="rgba(251,146,60,0.95)" />
        <circle cx="56%" cy="76%" r="2.2" fill="rgba(167,139,250,0.8)" />
      </svg>
    </div>
  );
}

function SecurityIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <div className="absolute" style={{ width: "190px", height: "190px", background: "radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 70%)", filter: "blur(22px)" }} />
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.55 }}>
        {/* Horizontal lines */}
        <line x1="0" y1="35%" x2="29%" y2="35%" stroke="rgba(124,58,237,0.8)" strokeWidth="1.2" />
        <line x1="71%" y1="35%" x2="100%" y2="35%" stroke="rgba(124,58,237,0.8)" strokeWidth="1.2" />
        <line x1="0" y1="65%" x2="27%" y2="65%" stroke="rgba(124,58,237,0.65)" strokeWidth="1.2" />
        <line x1="73%" y1="65%" x2="100%" y2="65%" stroke="rgba(124,58,237,0.65)" strokeWidth="1.2" />
        {/* Vertical lines */}
        <line x1="35%" y1="0" x2="35%" y2="27%" stroke="rgba(124,58,237,0.8)" strokeWidth="1.2" />
        <line x1="65%" y1="0" x2="65%" y2="27%" stroke="rgba(124,58,237,0.65)" strokeWidth="1.2" />
        <line x1="35%" y1="73%" x2="35%" y2="100%" stroke="rgba(124,58,237,0.8)" strokeWidth="1.2" />
        <line x1="65%" y1="73%" x2="65%" y2="100%" stroke="rgba(124,58,237,0.65)" strokeWidth="1.2" />
        {/* Corner dots */}
        <circle cx="0" cy="35%" r="3.5" fill="rgba(167,139,250,0.9)" />
        <circle cx="100%" cy="35%" r="3.5" fill="rgba(167,139,250,0.9)" />
        <circle cx="0" cy="65%" r="3" fill="rgba(124,58,237,0.9)" />
        <circle cx="100%" cy="65%" r="3" fill="rgba(124,58,237,0.9)" />
        <circle cx="35%" cy="0" r="3.5" fill="rgba(167,139,250,0.9)" />
        <circle cx="65%" cy="0" r="3" fill="rgba(124,58,237,0.9)" />
      </svg>
      {/* Chip */}
      <div className="relative z-10 flex items-center justify-center" style={{ width: "76px", height: "76px", background: "linear-gradient(145deg, #1a1040, #0d0b18)", borderRadius: "18px", border: "1px solid rgba(124,58,237,0.6)", boxShadow: "0 0 32px rgba(124,58,237,0.55), inset 0 1px 0 rgba(255,255,255,0.08)" }}>
        <svg width="38" height="38" viewBox="0 0 36 36" fill="none">
          <path d="M18 3 L30 8.5 L30 18.5 Q30 27.5 18 33 Q6 27.5 6 18.5 L6 8.5 Z" fill="rgba(124,58,237,0.25)" stroke="rgba(167,139,250,0.95)" strokeWidth="1.5" />
          <path d="M12.5 18.5 L16 22 L23.5 14" stroke="rgba(167,139,250,1)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

function ChatIllustration() {
  return (
    <div className="relative w-full h-full flex flex-col justify-center gap-2 overflow-hidden px-4 py-3">
      {/* WA header bar */}
      <div className="flex items-center gap-2 px-2 pb-2 mb-0.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "rgba(37,211,102,0.25)", border: "1px solid rgba(37,211,102,0.4)" }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="rgba(37,211,102,0.9)"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
        </div>
        <div>
          <div className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.75)", fontSize: "9px" }}>Sicentre Support</div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#25D366" }} />
            <span style={{ fontSize: "7px", color: "rgba(37,211,102,0.8)" }}>en línea</span>
          </div>
        </div>
      </div>

      {/* Message from client */}
      <div className="self-start max-w-[80%]">
        <div className="px-3 py-2 rounded-2xl rounded-tl-sm text-xs leading-snug" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", fontSize: "9.5px" }}>
          Hola! Necesito cambiar el texto del banner principal 👋
        </div>
        <div style={{ fontSize: "7px", color: "rgba(255,255,255,0.3)", marginTop: "2px", paddingLeft: "4px" }}>10:32</div>
      </div>

      {/* Reply from us */}
      <div className="self-end max-w-[80%]">
        <div className="px-3 py-2 rounded-2xl rounded-tr-sm text-xs leading-snug" style={{ background: "rgba(124,58,237,0.35)", border: "1px solid rgba(124,58,237,0.5)", color: "rgba(255,255,255,0.85)", fontSize: "9.5px" }}>
          ¡Hecho! Ya está actualizado 🎉
        </div>
        <div className="flex justify-end items-center gap-1" style={{ marginTop: "2px", paddingRight: "4px" }}>
          <span style={{ fontSize: "7px", color: "rgba(255,255,255,0.3)" }}>10:34</span>
          <svg width="12" height="8" viewBox="0 0 16 10" fill="none"><path d="M1 5l4 4L15 1" stroke="rgba(167,139,250,0.8)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 5l4 4" stroke="rgba(167,139,250,0.8)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      </div>

      {/* Second client message */}
      <div className="self-start max-w-[80%]">
        <div className="px-3 py-2 rounded-2xl rounded-tl-sm text-xs leading-snug" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", fontSize: "9.5px" }}>
          Increíble, gracias! 🙌
        </div>
        <div style={{ fontSize: "7px", color: "rgba(255,255,255,0.3)", marginTop: "2px", paddingLeft: "4px" }}>10:36</div>
      </div>

      {/* Typing indicator */}
      <div className="self-end">
        <div className="flex items-center gap-1 px-3 py-2 rounded-2xl rounded-tr-sm" style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.35)" }}>
          {[0, 1, 2].map((i) => <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(167,139,250,0.7)" }} />)}
        </div>
      </div>
    </div>
  );
}

function SEOIllustration() {
  return (
    <div className="relative w-full h-full flex items-end justify-center pb-2 px-4 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2" style={{ width: "170px", height: "90px", background: "radial-gradient(ellipse, rgba(234,88,12,0.28) 0%, transparent 70%)", filter: "blur(18px)" }} />
      <svg width="100%" height="115" viewBox="0 0 190 115" preserveAspectRatio="xMidYMax meet">
        <defs>
          <linearGradient id="seoBarGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(234,88,12,0.85)" />
            <stop offset="100%" stopColor="rgba(234,88,12,0.2)" />
          </linearGradient>
        </defs>
        {[30, 60, 90].map((y) => <line key={y} x1="18" y1={y} x2="185" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />)}
        {[
          { x: 28, h: 35 }, { x: 52, h: 52 }, { x: 76, h: 44 },
          { x: 100, h: 70 }, { x: 124, h: 88 }, { x: 148, h: 103 },
        ].map((b, i) => <rect key={i} x={b.x - 9} y={110 - b.h} width="16" height={b.h} rx="3" fill="url(#seoBarGrad)" />)}
        <polyline points="19,108 52,82 76,72 100,57 124,35 162,12" fill="none" stroke="rgba(234,88,12,0.95)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="162" cy="12" r="5" fill="rgba(251,146,60,1)" style={{ filter: "drop-shadow(0 0 7px rgba(234,88,12,0.9))" }} />
        <line x1="18" y1="4" x2="18" y2="112" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <line x1="18" y1="112" x2="185" y2="112" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      </svg>
    </div>
  );
}

function AnalyticsIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden px-4 pb-3">
      <div className="absolute" style={{ width: "150px", height: "60px", background: "radial-gradient(ellipse, rgba(124,58,237,0.22) 0%, transparent 70%)", top: "25%", left: "50%", transform: "translateX(-50%)", filter: "blur(14px)" }} />
      <svg width="100%" height="105" viewBox="0 0 200 105" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="vGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(124,58,237,0.5)" />
            <stop offset="100%" stopColor="rgba(124,58,237,0)" />
          </linearGradient>
          <linearGradient id="oGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(234,88,12,0.4)" />
            <stop offset="100%" stopColor="rgba(234,88,12,0)" />
          </linearGradient>
        </defs>
        {[25, 50, 75].map((y) => <line key={y} x1="10" y1={y} x2="195" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />)}
        {/* Violet curve + fill */}
        <path d="M 10 80 C 30 72, 45 48, 65 52 C 82 55, 92 32, 112 36 C 132 40, 142 20, 162 24 C 176 27, 188 20, 195 17 L 195 95 L 10 95 Z" fill="url(#vGrad)" />
        <path d="M 10 80 C 30 72, 45 48, 65 52 C 82 55, 92 32, 112 36 C 132 40, 142 20, 162 24 C 176 27, 188 20, 195 17" fill="none" stroke="rgba(124,58,237,0.95)" strokeWidth="2.4" strokeLinecap="round" />
        {/* Orange curve + fill */}
        <path d="M 10 88 C 35 82, 55 70, 75 65 C 95 60, 105 52, 125 57 C 145 62, 155 44, 172 40 C 182 37, 190 34, 195 31 L 195 95 L 10 95 Z" fill="url(#oGrad)" />
        <path d="M 10 88 C 35 82, 55 70, 75 65 C 95 60, 105 52, 125 57 C 145 62, 155 44, 172 40 C 182 37, 190 34, 195 31" fill="none" stroke="rgba(234,88,12,0.9)" strokeWidth="2.4" strokeLinecap="round" />
        {/* Highlight dots */}
        <circle cx="112" cy="36" r="4.5" fill="rgba(124,58,237,1)" style={{ filter: "drop-shadow(0 0 5px rgba(124,58,237,0.9))" }} />
        <circle cx="125" cy="57" r="4.5" fill="rgba(234,88,12,1)" style={{ filter: "drop-shadow(0 0 5px rgba(234,88,12,0.9))" }} />
        {/* Legend */}
        <rect x="14" y="6" width="9" height="3.5" rx="1.75" fill="rgba(124,58,237,0.95)" />
        <rect x="30" y="6" width="9" height="3.5" rx="1.75" fill="rgba(234,88,12,0.9)" />
        <line x1="10" y1="4" x2="10" y2="95" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <line x1="10" y1="95" x2="195" y2="95" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      </svg>
    </div>
  );
}

function ConnectionIllustration() {
  const satellites: { style: React.CSSProperties; color: "violet" | "orange" }[] = [
    { style: { top: "8%", left: "8%" },   color: "violet" },
    { style: { top: "8%", right: "8%" },  color: "orange" },
    { style: { bottom: "12%", right: "6%" }, color: "violet" },
    { style: { bottom: "10%", left: "6%" }, color: "orange" },
    { style: { top: "2%", left: "44%" },  color: "violet" },
  ];
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute" style={{ width: "170px", height: "170px", background: "radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", filter: "blur(22px)" }} />
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.28 }}>
        <circle cx="50%" cy="50%" r="36%" fill="none" stroke="rgba(124,58,237,0.7)" strokeWidth="0.8" />
        <circle cx="50%" cy="50%" r="22%" fill="none" stroke="rgba(124,58,237,0.5)" strokeWidth="0.8" />
      </svg>
      <svg className="absolute inset-0 w-full h-full">
        {[["15%","25%","violet"],["82%","20%","orange"],["88%","72%","violet"],["12%","76%","orange"],["50%","8%","violet"]].map(([x, y, c], i) => (
          <line key={i} x1="50%" y1="50%" x2={x} y2={y} stroke={c === "violet" ? "rgba(124,58,237,0.5)" : "rgba(234,88,12,0.5)"} strokeWidth="1" strokeDasharray="4 5" />
        ))}
      </svg>
      {/* Central node */}
      <div className="absolute z-10 flex items-center justify-center" style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "58px", height: "58px", background: "linear-gradient(145deg, #1a1040, #0d0b18)", borderRadius: "50%", border: "1.5px solid rgba(124,58,237,0.7)", boxShadow: "0 0 24px rgba(124,58,237,0.55)" }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(167,139,250,0.95)" strokeWidth="1.5" strokeLinecap="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </div>
      {/* Satellite nodes */}
      {satellites.map((s, i) => (
        <div key={i} className="absolute z-10 flex items-center justify-center" style={{ ...s.style, width: "30px", height: "30px", background: "linear-gradient(145deg, #12101e, #0d0b18)", borderRadius: "50%", border: `1.5px solid ${s.color === "violet" ? "rgba(124,58,237,0.65)" : "rgba(234,88,12,0.65)"}`, boxShadow: `0 0 12px ${s.color === "violet" ? "rgba(124,58,237,0.4)" : "rgba(234,88,12,0.4)"}` }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={s.color === "violet" ? "rgba(167,139,250,0.85)" : "rgba(251,146,60,0.85)"} strokeWidth="2" strokeLinecap="round">
            <circle cx="12" cy="8" r="4" /><path d="M6 20v-2a6 6 0 0 1 12 0v2" />
          </svg>
        </div>
      ))}
    </div>
  );
}

// ── Card data ──────────────────────────────────────────────────────────────────

const features = [
  {
    title: "Diseño único y personalizado",
    description: "Sin estéticas genéricas de IA. Su sitio refleja exactamente quién es su empresa.",
    illustration: <DesignIllustration />,
    colSpan: "md:col-span-2",
    illustrationHeight: "h-44",
  },
  {
    title: "Hosting, dominio y seguridad incluidos",
    description: "Todo listo desde el primer día. Sin configuraciones técnicas de su parte.",
    illustration: <SecurityIllustration />,
    colSpan: "",
    illustrationHeight: "h-44",
  },
  {
    title: "Modificaciones instantáneas vía WhatsApp",
    description: "Escriba, nosotros actualizamos. Sin tickets, sin esperas, sin complicaciones.",
    illustration: <ChatIllustration />,
    colSpan: "",
    illustrationHeight: "h-40",
  },
  {
    title: "Optimizado para Google desde el día 1",
    description: "Estructura técnica pensada para aparecer en los primeros resultados.",
    illustration: <SEOIllustration />,
    colSpan: "",
    illustrationHeight: "h-40",
  },
  {
    title: "Acceso a Google Analytics y Search Console",
    description: "Vea cuántas personas visitan su sitio, desde dónde y qué buscan.",
    illustration: <AnalyticsIllustration />,
    colSpan: "",
    illustrationHeight: "h-40",
  },
  {
    title: "Integración con WhatsApp Business y redes",
    description: "Su sitio conectado con todos sus canales de comunicación.",
    illustration: <ConnectionIllustration />,
    colSpan: "md:col-span-2",
    illustrationHeight: "h-44",
  },
];

// ── Component ──────────────────────────────────────────────────────────────────

export default function ServiceWebDetail() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden planet-section planet-section-warm">
      {/* Background glows */}
      <div className="absolute pointer-events-none" style={{ width: "600px", height: "400px", background: "radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%)", top: "-80px", left: "50%", transform: "translateX(-50%)", filter: "blur(60px)" }} />
      <div className="absolute pointer-events-none" style={{ width: "400px", height: "300px", background: "radial-gradient(ellipse, rgba(234,88,12,0.07) 0%, transparent 70%)", bottom: "0", right: "0", filter: "blur(60px)" }} />

      {/* Futuristic cursor — background decoration */}
      <div className="absolute pointer-events-none" style={{ left: "14%", top: "18%", opacity: 0.10, zIndex: 1, transform: "rotate(-15deg)" }}>
        <svg width="180" height="220" viewBox="0 0 180 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="cursorGrad" x1="10" y1="10" x2="140" y2="180" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#A78BFA" />
              <stop offset="55%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#EA580C" />
            </linearGradient>
            <filter id="cursorGlow">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          {/* Outer cursor body */}
          <path
            d="M 10 10 L 10 155 L 46 119 L 72 178 L 92 170 L 66 111 L 110 111 Z"
            stroke="url(#cursorGrad)"
            strokeWidth="2"
            strokeLinejoin="miter"
            strokeLinecap="round"
            fill="rgba(124,58,237,0.06)"
            filter="url(#cursorGlow)"
          />
          {/* Inner slim duplicate — depth effect */}
          <path
            d="M 18 22 L 18 138 L 48 108 L 68 154 L 78 149 L 58 103 L 96 103 Z"
            stroke="rgba(167,139,250,0.45)"
            strokeWidth="0.8"
            strokeLinejoin="miter"
            fill="none"
          />

          {/* Tip — reticle crosshair */}
          <circle cx="10" cy="10" r="5" stroke="#EA580C" strokeWidth="1.5" fill="none" />
          <circle cx="10" cy="10" r="2" fill="#FB923C" />
          <line x1="10" y1="0" x2="10" y2="4" stroke="#EA580C" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="10" y1="16" x2="10" y2="20" stroke="#EA580C" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="0" y1="10" x2="4" y2="10" stroke="#EA580C" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="16" y1="10" x2="20" y2="10" stroke="#EA580C" strokeWidth="1.2" strokeLinecap="round" />

          {/* Top-left corner bracket */}
          <path d="M 0 26 L 0 16 L 10 16" stroke="rgba(167,139,250,0.8)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          {/* Bottom-right corner bracket (at fork) */}
          <path d="M 118 103 L 126 103 L 126 111" stroke="rgba(234,88,12,0.75)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          {/* Bottom-left corner bracket (at base) */}
          <path d="M 0 163 L 0 155 L 10 155" stroke="rgba(167,139,250,0.6)" strokeWidth="1" strokeLinecap="round" fill="none" />

          {/* Scan lines along left edge */}
          <line x1="-6" y1="50" x2="6" y2="50" stroke="rgba(167,139,250,0.6)" strokeWidth="1" />
          <line x1="-4" y1="70" x2="4" y2="70" stroke="rgba(167,139,250,0.35)" strokeWidth="0.8" />
          <line x1="-6" y1="90" x2="6" y2="90" stroke="rgba(234,88,12,0.5)" strokeWidth="1" />
          <line x1="-4" y1="110" x2="4" y2="110" stroke="rgba(234,88,12,0.3)" strokeWidth="0.8" />
          <line x1="-6" y1="130" x2="6" y2="130" stroke="rgba(167,139,250,0.4)" strokeWidth="1" />

          {/* Dashed trailing line from tip — motion trail */}
          <line x1="10" y1="10" x2="10" y2="-30" stroke="rgba(234,88,12,0.4)" strokeWidth="1" strokeDasharray="3 5" strokeLinecap="round" />

          {/* End glow dot */}
          <circle cx="72" cy="178" r="3" fill="#FB923C" opacity="0.7" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className={cn("text-center mb-14 transition-all duration-700", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-400/70 mb-4">
            Diseño Web
          </p>
          <h2
            className="font-clash text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl mx-auto leading-tight mb-5"
          >
            Su presencia online,{" "}
            <span className="gradient-text" style={{ filter: "drop-shadow(0 3px 10px rgba(0,0,0,0.7))" }}>sin compromisos.</span>
          </h2>
          <p className="text-white/55 text-lg max-w-xl mx-auto">
            Cada sitio es único. Diseñado desde cero para su negocio, su identidad y sus clientes.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={cn(
                "glass-card flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-violet-500/40",
                f.colSpan,
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Text */}
              <div className="px-5 pt-5 pb-3">
                <h3 className="font-clash text-white font-bold text-lg leading-snug mb-1.5">
                  {f.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{f.description}</p>
              </div>
              {/* Illustration */}
              <div className={cn("relative w-full flex-1", f.illustrationHeight)}>
                {f.illustration}
              </div>
            </div>
          ))}

          {/* Pricing card */}
          <div
            className={cn(
              "gradient-border flex flex-col justify-between p-7 transition-all duration-500 hover:-translate-y-1",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "560ms" }}
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/40 mb-3">
                Inversión única
              </p>
              <div
                className="font-clash font-bold gradient-text mb-2"
                style={{ fontSize: "clamp(2.8rem, 5vw, 3.8rem)", lineHeight: 1 }}
              >
                Desde $500
              </div>
              <p className="text-white/50 text-sm leading-relaxed mt-3">
                Sin suscripciones. Su sitio, para siempre.
              </p>
            </div>
            <Link
              href="/web"
              className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-600/25"
              style={{ background: "linear-gradient(135deg, #7C3AED, #EA580C)" }}
            >
              Ver todos los planes →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
