"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// ── Illustrations ──────────────────────────────────────────────────────────────

function LiveStatusIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden px-3 py-2">
      <div className="absolute" style={{ width: "200px", height: "120px", background: "radial-gradient(ellipse, rgba(234,88,12,0.2) 0%, transparent 70%)", filter: "blur(24px)" }} />
      <div className="relative z-10 w-full max-w-[260px]" style={{ background: "linear-gradient(145deg, rgba(25,12,0,0.95), rgba(13,11,24,0.95))", borderRadius: "14px", border: "1px solid rgba(234,88,12,0.3)", boxShadow: "0 0 30px rgba(234,88,12,0.15)", overflow: "hidden" }}>
        <div className="flex items-center justify-between px-3 py-2" style={{ borderBottom: "1px solid rgba(234,88,12,0.15)", background: "rgba(234,88,12,0.08)" }}>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full" style={{ background: "#22c55e", boxShadow: "0 0 6px rgba(34,197,94,0.8)" }} />
            <span style={{ fontSize: "8px", color: "rgba(251,146,60,0.9)", fontFamily: "monospace", letterSpacing: "0.08em" }}>AGENTE ACTIVO</span>
          </div>
          <span style={{ fontSize: "7px", color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>02:47 AM</span>
        </div>
        <div className="grid grid-cols-3 divide-x py-2.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          {[{ label: "Llamadas hoy", value: "47" }, { label: "Disponibilidad", value: "100%" }, { label: "Duración media", value: "3m 12s" }].map((s, i) => (
            <div key={i} className="text-center px-2">
              <div className="font-clash font-bold" style={{ fontSize: "13px", color: i === 1 ? "rgba(251,146,60,0.95)" : "rgba(255,255,255,0.8)" }}>{s.value}</div>
              <div style={{ fontSize: "6.5px", color: "rgba(255,255,255,0.3)", marginTop: "1px" }}>{s.label}</div>
            </div>
          ))}
        </div>
        <div className="mx-2 my-2 px-2.5 py-1.5 rounded-lg flex items-center gap-2" style={{ background: "rgba(234,88,12,0.12)", border: "1px solid rgba(234,88,12,0.25)" }}>
          <div className="flex gap-0.5 items-end" style={{ height: "14px" }}>
            {[4,7,11,8,5,9,6].map((h, i) => (
              <div key={i} style={{ width: "2px", height: `${h}px`, background: `rgba(251,146,60,${0.5 + i * 0.06})`, borderRadius: "1px" }} />
            ))}
          </div>
          <span style={{ fontSize: "8px", color: "rgba(251,146,60,0.85)", fontFamily: "monospace" }}>En llamada activa — 1m 33s</span>
          <div className="ml-auto w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#FB923C", boxShadow: "0 0 5px rgba(251,146,60,0.9)" }} />
        </div>
      </div>
    </div>
  );
}

function ActiveCallsIllustration() {
  const calls = [
    { name: "Carlos M.", duration: "4:22", status: "ACTIVO", active: true },
    { name: "Ana García", duration: "2:07", status: "ACTIVO", active: true },
    { name: "Luis R.", duration: "0:43", status: "ACTIVO", active: true },
    { name: "María L.", duration: "—", status: "EN COLA", active: false },
  ];
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden px-3 py-2">
      <div className="absolute" style={{ width: "180px", height: "100px", background: "radial-gradient(ellipse, rgba(234,88,12,0.18) 0%, transparent 70%)", filter: "blur(20px)", top: "30%" }} />
      <div className="relative z-10 w-full" style={{ background: "rgba(15,8,0,0.85)", borderRadius: "12px", border: "1px solid rgba(234,88,12,0.2)", overflow: "hidden" }}>
        <div className="px-3 py-1.5 flex items-center justify-between" style={{ borderBottom: "1px solid rgba(234,88,12,0.1)", background: "rgba(234,88,12,0.06)" }}>
          <span style={{ fontSize: "7.5px", color: "rgba(251,146,60,0.7)", fontFamily: "monospace", letterSpacing: "0.1em" }}>LLAMADAS EN CURSO</span>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#22c55e", boxShadow: "0 0 5px rgba(34,197,94,0.8)" }} />
            <span style={{ fontSize: "7px", color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }}>3 activas</span>
          </div>
        </div>
        {calls.map((c, i) => (
          <div key={i} className="flex items-center gap-2 px-3 py-1.5" style={{ borderBottom: i < calls.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
            <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(234,88,12,0.12)", border: "1px solid rgba(234,88,12,0.25)" }}>
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="rgba(251,146,60,0.7)" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a6 6 0 0 1 12 0v2"/></svg>
            </div>
            <span style={{ fontSize: "8.5px", color: "rgba(255,255,255,0.65)", flex: 1, fontFamily: "monospace" }}>{c.name}</span>
            <span style={{ fontSize: "8px", color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>{c.duration}</span>
            <div className="px-1.5 py-0.5 rounded" style={{ background: c.active ? "rgba(34,197,94,0.12)" : "rgba(251,146,60,0.12)", border: `1px solid ${c.active ? "rgba(34,197,94,0.3)" : "rgba(251,146,60,0.3)"}` }}>
              <span style={{ fontSize: "6px", color: c.active ? "rgba(34,197,94,0.9)" : "rgba(251,146,60,0.75)", letterSpacing: "0.08em", fontFamily: "monospace" }}>{c.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LeadPipelineIllustration() {
  const stages = [
    { label: "NUEVO", count: 8, color: "rgba(255,255,255,0.3)", leads: ["Juan P.", "Ana M."], pct: 35 },
    { label: "CALIFICADO", count: 3, color: "rgba(251,146,60,0.8)", leads: ["Carlos R."], pct: 72 },
    { label: "AGENDADO", count: 1, color: "rgba(34,197,94,0.85)", leads: ["María L."], pct: 100 },
  ];
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden px-3 py-2">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 60%, rgba(234,88,12,0.1) 0%, transparent 70%)" }} />
      <div className="relative z-10 w-full flex gap-1.5">
        {stages.map((stage, si) => (
          <div key={si} className="flex-1 flex flex-col gap-1.5">
            <div className="flex items-center justify-between mb-0.5">
              <span style={{ fontSize: "6.5px", color: stage.color, fontFamily: "monospace", letterSpacing: "0.05em" }}>{stage.label}</span>
              <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.05)" }}>
                <span style={{ fontSize: "6px", color: "rgba(255,255,255,0.4)" }}>{stage.count}</span>
              </div>
            </div>
            {stage.leads.map((lead, li) => (
              <div key={li} className="px-2 py-1.5" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "6px" }}>
                <div style={{ fontSize: "7.5px", color: "rgba(255,255,255,0.6)", fontFamily: "monospace" }}>{lead}</div>
                <div className="mt-1 h-0.5 rounded-full" style={{ background: "rgba(255,255,255,0.08)", width: "100%" }}>
                  <div style={{ width: `${stage.pct}%`, height: "100%", background: si === 0 ? "rgba(255,255,255,0.2)" : si === 1 ? "rgba(251,146,60,0.7)" : "rgba(34,197,94,0.75)", borderRadius: "999px" }} />
                </div>
              </div>
            ))}
            <div className="px-2 py-1.5 rounded" style={{ background: "rgba(255,255,255,0.02)", border: "1px dashed rgba(255,255,255,0.06)" }}>
              <div style={{ fontSize: "6.5px", color: "rgba(255,255,255,0.18)", fontFamily: "monospace" }}>+{stage.count - stage.leads.length} más</div>
            </div>
          </div>
        ))}
      </div>
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
  const cardStyle = { borderColor: "rgba(255,255,255,0.22)", background: "rgba(20,16,38,0.55)" };
  const vis = (delay: number) => ({
    style: { transitionDelay: `${delay}ms`, ...cardStyle },
    className: cn(cardBase, visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"),
  });

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden planet-section planet-section-warm">
      <div className="absolute pointer-events-none" style={{ width: "600px", height: "400px", background: "radial-gradient(ellipse, rgba(234,88,12,0.12) 0%, transparent 70%)", top: "-60px", left: "50%", transform: "translateX(-50%)", filter: "blur(70px)" }} />
      <div className="absolute pointer-events-none" style={{ width: "400px", height: "300px", background: "radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 70%)", bottom: "0", left: "0", filter: "blur(60px)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">

        {/* Marketing hook above the bento */}
        <div className={cn("text-center mb-12 md:mb-14 transition-all duration-700", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
          <p
            className="font-clash font-semibold text-white/85 mx-auto max-w-3xl leading-tight"
            style={{ fontSize: "clamp(1.2rem, 2.4vw, 1.8rem)" }}
          >
            Cada llamada respondida. Cada lead calificado. Cada cita agendada.
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
            <div className="relative w-full flex-1 h-44"><LiveStatusIllustration /></div>
          </div>

          {/* Card 2 — Múltiples llamadas (unchanged) */}
          <div {...vis(80)} className={cn(vis(80).className, "md:row-span-2")}>
            <div className="px-5 pt-5 pb-3">
              <h3 className="font-clash text-white font-bold text-lg leading-snug mb-1.5">Múltiples llamadas simultáneas</h3>
              <p className="text-white/50 text-sm leading-relaxed">Mientras su equipo descansa, el agente atiende a todos a la vez. Sin colas, sin esperas.</p>
            </div>
            <div className="relative w-full flex-1 min-h-[160px]"><ActiveCallsIllustration /></div>
          </div>

          {/* Card 3 — Funnel */}
          <div {...vis(160)}>
            <div className="px-5 pt-5 pb-3">
              <h3 className="font-clash text-white font-bold text-lg leading-snug mb-1.5">Califica leads automáticamente</h3>
              <p className="text-white/50 text-sm leading-relaxed">Filtra, identifica y prioriza los clientes con más potencial antes de que lleguen a su equipo.</p>
            </div>
            <div className="relative w-full flex-1 h-40"><LeadPipelineIllustration /></div>
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

          {/* Discover card — highlighted */}
          <div
            className={cn("gradient-border flex flex-col justify-between p-7 transition-all duration-500 hover:-translate-y-1", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}
            style={{
              transitionDelay: "400ms",
              background: "linear-gradient(135deg, rgba(234,88,12,0.28) 0%, rgba(124,58,237,0.18) 100%)",
              boxShadow: "0 16px 60px rgba(234,88,12,0.25), 0 0 70px rgba(124,58,237,0.15), inset 0 0 40px rgba(255,255,255,0.04)",
            }}
          >
            <div>
              <p
                className="text-xs font-semibold tracking-[0.18em] uppercase mb-4 inline-flex items-center gap-2"
                style={{ color: "rgba(251,146,60,0.95)" }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#FB923C", boxShadow: "0 0 8px #FB923C" }}
                />
                ¿Quiere ver más?
              </p>
              <h3
                className="font-clash font-bold mb-3 text-white"
                style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)", lineHeight: 1.05, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}
              >
                Su agente, en marcha en 48 horas.
              </h3>
              <p className="text-white/75 text-sm leading-relaxed">
                Vea cómo suena, qué incluye y cuánto le ahorra mes a mes, sin compromiso.
              </p>
            </div>
            <Link
              href="/voz-ia"
              className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-600/40"
              style={{ background: "linear-gradient(135deg, #EA580C, #7C3AED)" }}
            >
              Conocer Voz IA →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
