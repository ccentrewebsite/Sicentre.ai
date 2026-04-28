"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// ── Illustrations ──────────────────────────────────────────────────────────────

function PulseOrbitalIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden" style={{ WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 35%)", maskImage: "linear-gradient(to bottom, transparent 0%, black 35%)" }}>
      {/* Ambient glow */}
      <div className="absolute" style={{ width: "260px", height: "260px", background: "radial-gradient(circle, rgba(234,88,12,0.38) 0%, rgba(124,58,237,0.12) 55%, transparent 70%)", filter: "blur(42px)" }} />

      {/* Static concentric arcs */}
      <div className="absolute rounded-full" style={{ width: "210px", height: "210px", border: "1.5px solid rgba(234,88,12,0.42)", opacity: 0.38 }} />
      <div className="absolute rounded-full" style={{ width: "162px", height: "162px", border: "1.5px solid rgba(167,139,250,0.40)", opacity: 0.28 }} />
      <div className="absolute rounded-full" style={{ width: "116px", height: "116px", border: "1.5px solid rgba(234,88,12,0.36)", opacity: 0.22 }} />

      {/* 2 orbital dots: 90° (top) and 270° (bottom), on the 162px ring trace */}
      <div className="absolute" style={{ width: "170px", height: "170px" }}>
        <div className="absolute" style={{ top: "0px", left: "81px", width: "8px", height: "8px", borderRadius: "50%", background: "#FB923C", boxShadow: "0 0 10px rgba(234,88,12,0.8), 0 0 4px rgba(234,88,12,0.8)" }} />
        <div className="absolute" style={{ top: "162px", left: "81px", width: "8px", height: "8px", borderRadius: "50%", background: "#FB923C", boxShadow: "0 0 10px rgba(234,88,12,0.8), 0 0 4px rgba(234,88,12,0.8)" }} />
      </div>

      {/* Central glowing circle */}
      <div className="relative z-10 flex items-center justify-center" style={{ width: "88px", height: "88px", borderRadius: "50%", background: "linear-gradient(145deg, #2d0e00, #1a0800)", border: "2px solid rgba(234,88,12,0.78)", boxShadow: "0 0 44px rgba(234,88,12,0.65), 0 0 90px rgba(234,88,12,0.18), inset 0 1px 0 rgba(255,255,255,0.09)" }}>
        <span className="font-clash font-bold" style={{ fontSize: "22px", letterSpacing: "-0.02em", color: "#FB923C", textShadow: "0 0 18px rgba(234,88,12,0.95)" }}>24/7</span>
      </div>

    </div>
  );
}

function MultiCallIllustration() {
  const lines = [
    ["50%","50%","18%","22%","rgba(234,88,12,0.6)"],
    ["50%","50%","80%","18%","rgba(251,146,60,0.55)"],
    ["50%","50%","85%","72%","rgba(234,88,12,0.5)"],
    ["50%","50%","15%","76%","rgba(251,146,60,0.5)"],
    ["50%","50%","52%","8%","rgba(234,88,12,0.55)"],
  ];
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute" style={{ width: "160px", height: "160px", background: "radial-gradient(circle, rgba(234,88,12,0.28) 0%, transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", filter: "blur(22px)" }} />
      <svg className="absolute inset-0 w-full h-full">
        {lines.map(([x1,y1,x2,y2,stroke], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={stroke} strokeWidth="1.2" strokeDasharray="4 5" />
        ))}
      </svg>
      <div className="absolute z-10 flex items-center justify-center" style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "44px", height: "44px", background: "linear-gradient(145deg, #1f0d00, #0d0b18)", borderRadius: "50%", border: "1.5px solid rgba(234,88,12,0.75)", boxShadow: "0 0 22px rgba(234,88,12,0.55)" }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(251,146,60,0.95)" strokeWidth="1.8" strokeLinecap="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      </div>
      {[
        { style: { top: "8%", left: "8%" } },
        { style: { top: "6%", right: "10%" } },
        { style: { bottom: "14%", right: "6%" } },
        { style: { bottom: "12%", left: "5%" } },
        { style: { top: "0%", left: "44%" } },
      ].map((n, i) => (
        <div key={i} className="absolute z-10 flex items-center justify-center" style={{ ...n.style, width: "26px", height: "26px", background: "linear-gradient(145deg, #1a0800, #0d0b18)", borderRadius: "50%", border: "1.5px solid rgba(234,88,12,0.55)", boxShadow: "0 0 10px rgba(234,88,12,0.35)" }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(251,146,60,0.85)" strokeWidth="2" strokeLinecap="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </div>
      ))}
    </div>
  );
}

function FunnelIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg width="96" height="136" viewBox="0 0 96 136" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Trapèze inversé (haut de l'entonnoir) */}
        <path d="M 4 14 L 92 14 L 60 52 L 36 52 Z" stroke="#EA580C" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
        {/* Triangle pointu (corps resserré) */}
        <path d="M 60 52 L 48 82 L 36 52 Z" stroke="#EA580C" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
        {/* Ligne verticale pointillée descendante */}
        <line x1="48" y1="82" x2="48" y2="118" stroke="#EA580C" strokeWidth="1.5" strokeDasharray="4 4" strokeLinecap="round" />
        {/* Cercle à la pointe */}
        <circle cx="48" cy="124" r="5" stroke="#EA580C" strokeWidth="1.8" fill="none" />
        {/* Points dans le haut de l'entonnoir */}
        <circle cx="26" cy="26" r="3" fill="#EA580C" />
        <circle cx="50" cy="20" r="3" fill="#EA580C" />
        <circle cx="72" cy="28" r="3" fill="#EA580C" />
        {/* Lead qualifié sorti de l'entonnoir, sur la ligne pointillée */}
        <circle cx="48" cy="65" r="4.5" fill="#FF9A2E" />
      </svg>
    </div>
  );
}

function CalendarIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <div className="absolute" style={{ width: "150px", height: "120px", background: "radial-gradient(ellipse, rgba(234,88,12,0.2) 0%, transparent 70%)", filter: "blur(18px)" }} />
      <div className="relative z-10" style={{ width: "120px", background: "linear-gradient(145deg, #1f0d00, #0d0b18)", borderRadius: "14px", border: "1px solid rgba(234,88,12,0.4)", overflow: "hidden", boxShadow: "0 0 24px rgba(234,88,12,0.3)" }}>
        <div className="flex items-center justify-between px-3 py-2" style={{ background: "rgba(234,88,12,0.2)", borderBottom: "1px solid rgba(234,88,12,0.2)" }}>
          <span className="text-xs font-bold" style={{ color: "rgba(251,146,60,0.9)", fontFamily: "monospace" }}>ABRIL</span>
          <span className="text-xs" style={{ color: "rgba(251,146,60,0.6)", fontFamily: "monospace" }}>2025</span>
        </div>
        <div className="grid grid-cols-7 gap-0 px-1.5 pt-1.5">
          {["L","M","M","J","V","S","D"].map((d, i) => (
            <div key={i} className="text-center" style={{ fontSize: "6px", color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-0.5 p-1.5 pt-1">
          {Array.from({ length: 28 }, (_, i) => i + 1).map((d) => (
            <div key={d} className="flex items-center justify-center" style={{
              height: "14px", borderRadius: "3px", fontSize: "6.5px", fontFamily: "monospace",
              background: d === 15 ? "rgba(234,88,12,0.85)" : d === 22 ? "rgba(124,58,237,0.5)" : "transparent",
              color: d === 15 || d === 22 ? "white" : d < 5 ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.5)",
              boxShadow: d === 15 ? "0 0 8px rgba(234,88,12,0.7)" : "none",
            }}>
              {d === 15 ? "✓" : d}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ComparisonIllustration() {
  const PersonIcon = ({ muted = false }: { muted?: boolean }) => (
    <div className="flex items-center justify-center" style={{ width: "22px", height: "22px", borderRadius: "50%", background: muted ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.06)", border: `1px solid ${muted ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.12)"}` }}>
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={muted ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.38)"} strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="8" r="4" /><path d="M6 20v-2a6 6 0 0 1 12 0v2" />
      </svg>
    </div>
  );

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden px-2 py-2">
      <div className="absolute" style={{ width: "300px", height: "120px", background: "radial-gradient(ellipse, rgba(234,88,12,0.12) 0%, transparent 70%)", filter: "blur(24px)", top: "30%" }} />

      <div className="w-full flex items-center justify-between gap-1">

        {/* Employees side */}
        <div className="flex flex-col items-center gap-2 flex-1 min-w-0">
          <div className="flex flex-col gap-0.5">
            <div className="flex gap-0.5">{Array.from({length:5}).map((_,i) => <PersonIcon key={i} />)}</div>
            <div className="flex gap-0.5">{Array.from({length:5}).map((_,i) => <PersonIcon key={i} />)}</div>
            <div className="flex gap-0.5">{Array.from({length:5}).map((_,i) => <PersonIcon key={i} />)}</div>
            <div className="flex gap-0.5">{Array.from({length:5}).map((_,i) => <PersonIcon key={i} />)}</div>
            <div className="flex gap-0.5">{Array.from({length:5}).map((_,i) => <PersonIcon key={i} />)}</div>
          </div>
          <div className="text-center">
            <div className="text-white/30 mb-0.5" style={{ fontSize: "9px" }}>25 empleados</div>
            <div className="font-clash font-bold text-white/45" style={{ fontSize: "12px" }}>$10.000/mes</div>
          </div>
        </div>

        {/* VS divider */}
        <div className="flex flex-col items-center gap-1 flex-shrink-0">
          <div style={{ width: "1px", height: "22px", background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.15), transparent)" }} />
          <span className="font-clash font-bold text-white/22 tracking-widest" style={{ fontSize: "10px" }}>VS</span>
          <div style={{ width: "1px", height: "22px", background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.15), transparent)" }} />
        </div>

        {/* AI agent side */}
        <div className="flex flex-col items-center gap-2 flex-1 min-w-0">
          <div className="flex items-center justify-center" style={{ width: "48px", height: "48px", borderRadius: "50%", background: "linear-gradient(145deg, #1f0d00, #0d0b18)", border: "1.5px solid rgba(234,88,12,0.7)", boxShadow: "0 0 28px rgba(234,88,12,0.5)" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(251,146,60,0.95)" strokeWidth="1.5" strokeLinecap="round">
              <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/>
              <circle cx="9" cy="14" r="1" fill="rgba(251,146,60,0.9)" stroke="none"/>
              <circle cx="15" cy="14" r="1" fill="rgba(251,146,60,0.9)" stroke="none"/>
            </svg>
          </div>
          <div className="text-center">
            <div style={{ fontSize: "9px", color: "rgba(251,146,60,0.6)", lineHeight: 1.3 }}>Agente IA<br/>Sicentre</div>
            <div className="font-clash font-bold mt-0.5" style={{ fontSize: "12px", color: "rgba(251,146,60,0.95)", textShadow: "0 0 12px rgba(234,88,12,0.5)" }}>$1.500/mes</div>
          </div>
          {/* Badge centré sous le robot */}
          <div className="rounded-full text-center mt-1" style={{ padding: "6px 12px", background: "rgba(234,88,12,0.75)", border: "1px solid rgba(251,146,60,0.5)", boxShadow: "0 0 18px rgba(234,88,12,0.45)" }}>
            <div className="font-clash font-bold" style={{ fontSize: "16px", color: "#fff", lineHeight: 1 }}>−85%</div>
            <div style={{ fontSize: "8px", color: "rgba(255,255,255,0.65)" }}>de costo</div>
          </div>
        </div>

      </div>
    </div>
  );
}

// ── Component ──────────────────────────────────────────────────────────────────

export default function ServiceVoiceDetail() {
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

  const cardBase = "glass-card flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1";
  const cardStyle = { borderColor: "rgba(234,88,12,0.2)", background: "rgba(234,88,12,0.18)" };
  const vis = (delay: number) => ({
    style: { transitionDelay: `${delay}ms`, ...cardStyle },
    className: cn(cardBase, visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"),
  });

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden planet-section planet-section-warm">
      <div className="absolute pointer-events-none" style={{ width: "600px", height: "400px", background: "radial-gradient(ellipse, rgba(234,88,12,0.12) 0%, transparent 70%)", top: "-60px", left: "50%", transform: "translateX(-50%)", filter: "blur(70px)" }} />
      <div className="absolute pointer-events-none" style={{ width: "400px", height: "300px", background: "radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 70%)", bottom: "0", left: "0", filter: "blur(60px)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className={cn("text-center mb-14 transition-all duration-700", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(251,146,60,0.7)" }}>
            Agente de Voz IA
          </p>
          <h2 className="font-clash text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl mx-auto leading-tight mb-5">
            Su negocio atiende.{" "}
            <span style={{ color: "#7C3AED", textShadow: "0 3px 10px rgba(0,0,0,0.5)" }}>Siempre.</span>
            {" "}
            <span style={{ color: "#EA580C", textShadow: "0 3px 10px rgba(0,0,0,0.5)" }}>Sin excusas.</span>
          </h2>
          <p className="text-white/55 text-base md:text-lg max-w-xl mx-auto">
            Nunca se enferma. Nunca pide vacaciones. Nunca deja una llamada sin responder.
          </p>
        </div>

        {/* Bento grid
            Row 1 : [Card1 col-span-2] [Card2 row-span-2]
            Row 2 : [Card3]  [Card4]   [Card2 continues ]
            Row 3 : [Card5 col-span-2] [Pricing          ]
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Card 1 — 365 días / 24h → orbital */}
          <div {...vis(0)} className={cn(vis(0).className, "md:col-span-2")}>
            <div className="px-5 pt-5 pb-3">
              <h3 className="font-clash text-white font-bold text-lg leading-snug mb-1.5">365 días. 24 horas.</h3>
              <p className="text-white/50 text-sm leading-relaxed">Responde cada llamada, cada día del año. Sin excepciones, sin horarios, sin ausencias.</p>
            </div>
            <div className="relative w-full flex-1 h-44"><PulseOrbitalIllustration /></div>
          </div>

          {/* Card 2 — Múltiples llamadas (unchanged) */}
          <div {...vis(80)} className={cn(vis(80).className, "md:row-span-2")}>
            <div className="px-5 pt-5 pb-3">
              <h3 className="font-clash text-white font-bold text-lg leading-snug mb-1.5">Múltiples llamadas simultáneas</h3>
              <p className="text-white/50 text-sm leading-relaxed">Mientras su equipo descansa, el agente atiende a todos a la vez. Sin colas, sin esperas.</p>
            </div>
            <div className="relative w-full flex-1 min-h-[160px]"><MultiCallIllustration /></div>
          </div>

          {/* Card 3 — Funnel */}
          <div {...vis(160)}>
            <div className="px-5 pt-5 pb-3">
              <h3 className="font-clash text-white font-bold text-lg leading-snug mb-1.5">Califica leads automáticamente</h3>
              <p className="text-white/50 text-sm leading-relaxed">Filtra, identifica y prioriza los clientes con más potencial antes de que lleguen a su equipo.</p>
            </div>
            <div className="relative w-full flex-1 h-40"><FunnelIllustration /></div>
          </div>

          {/* Card 4 — Calendar */}
          <div {...vis(240)}>
            <div className="px-5 pt-5 pb-3">
              <h3 className="font-clash text-white font-bold text-lg leading-snug mb-1.5">Agenda turnos y citas sin intervención</h3>
              <p className="text-white/50 text-sm leading-relaxed">Su calendario siempre al día. El agente reserva, confirma y recuerda por usted.</p>
            </div>
            <div className="relative w-full flex-1 h-40"><CalendarIllustration /></div>
          </div>

          {/* Card 5 — Comparison 10 employees vs IA */}
          <div {...vis(320)} className={cn(vis(320).className, "md:col-span-2")}>
            <div className="px-5 pt-5 pb-3">
              <h3 className="font-clash text-white font-bold text-lg leading-snug mb-1.5">El trabajo de varios empleados. A una fracción del costo.</h3>
              <p className="text-white/50 text-sm leading-relaxed">Disponible 24/7, sin días de baja, sin errores por cansancio. Agenda turnos, califica leads y atiende a todos sus clientes al mismo tiempo. Todo por menos de lo que cuesta un solo empleado a tiempo completo.</p>
            </div>
            <div className="relative w-full h-44"><ComparisonIllustration /></div>
          </div>

          {/* Pricing card */}
          <div
            className={cn("gradient-border flex flex-col justify-between p-7 transition-all duration-500 hover:-translate-y-1", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}
            style={{ transitionDelay: "400ms" }}
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: "rgba(251,146,60,0.5)" }}>Inversión mensual</p>
              <div className="font-clash font-bold mb-2" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", lineHeight: 1, color: "#EA580C", textShadow: "0 0 30px rgba(234,88,12,0.45)" }}>
                Desde $1.500
                <span className="text-lg text-white/40">/mes</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mt-3">Configuración incluida. Sin permanencia.</p>
            </div>
            <Link
              href="/voz-ia"
              className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-600/25"
              style={{ background: "linear-gradient(135deg, #EA580C, #7C3AED)" }}
            >
              Solicitar demo →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
