"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/* ─── CSS geometric avatars ─────────────────────────────────── */
function RaphaelAvatar() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="raphaelBg" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#3B1F75" />
          <stop offset="100%" stopColor="#0E0820" />
        </radialGradient>
        <radialGradient id="raphaelGlow" cx="50%" cy="42%" r="45%">
          <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.55" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <linearGradient id="raphaelStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="60" fill="url(#raphaelBg)" />
      <circle cx="60" cy="60" r="60" fill="url(#raphaelGlow)" />
      {/* Geometric face — pen / design */}
      <circle cx="60" cy="50" r="22" fill="none" stroke="url(#raphaelStroke)" strokeWidth="1.5" strokeOpacity="0.85" />
      <circle cx="60" cy="50" r="14" fill="#7C3AED" fillOpacity="0.22" />
      {/* Body — geometric shoulders */}
      <path d="M22 110 Q22 82 60 76 Q98 82 98 110" fill="#7C3AED" fillOpacity="0.25" />
      <path d="M22 110 Q22 82 60 76 Q98 82 98 110" fill="none" stroke="#A78BFA" strokeOpacity="0.35" strokeWidth="1" />
      {/* Pen stroke — designer signature */}
      <path d="M28 32 Q44 24 60 30 Q76 36 92 28" stroke="#A78BFA" strokeWidth="1.2" strokeOpacity="0.6" fill="none" strokeLinecap="round" />
      {/* Vertical accent */}
      <line x1="60" y1="14" x2="60" y2="22" stroke="#A78BFA" strokeWidth="1.5" strokeOpacity="0.7" strokeLinecap="round" />
      <circle cx="60" cy="11" r="2" fill="#A78BFA" />
    </svg>
  );
}

function SantiagoAvatar() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="santiagoBg" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#7C2D12" />
          <stop offset="100%" stopColor="#160600" />
        </radialGradient>
        <radialGradient id="santiagoGlow" cx="50%" cy="42%" r="45%">
          <stop offset="0%" stopColor="#FB923C" stopOpacity="0.55" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <linearGradient id="santiagoStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FB923C" />
          <stop offset="100%" stopColor="#EA580C" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="60" fill="url(#santiagoBg)" />
      <circle cx="60" cy="60" r="60" fill="url(#santiagoGlow)" />
      {/* Geometric face — network */}
      <circle cx="60" cy="50" r="22" fill="none" stroke="url(#santiagoStroke)" strokeWidth="1.5" strokeOpacity="0.85" />
      <circle cx="60" cy="50" r="14" fill="#EA580C" fillOpacity="0.22" />
      {/* Body */}
      <path d="M22 110 Q22 82 60 76 Q98 82 98 110" fill="#EA580C" fillOpacity="0.22" />
      <path d="M22 110 Q22 82 60 76 Q98 82 98 110" fill="none" stroke="#FB923C" strokeOpacity="0.35" strokeWidth="1" />
      {/* Network nodes */}
      <circle cx="28" cy="40" r="3" fill="#FB923C" fillOpacity="0.85" />
      <circle cx="92" cy="40" r="3" fill="#FB923C" fillOpacity="0.85" />
      <circle cx="60" cy="14" r="3" fill="#FB923C" fillOpacity="0.85" />
      <line x1="28" y1="40" x2="60" y2="50" stroke="#FB923C" strokeWidth="0.8" strokeOpacity="0.45" strokeDasharray="2 3" />
      <line x1="92" y1="40" x2="60" y2="50" stroke="#FB923C" strokeWidth="0.8" strokeOpacity="0.45" strokeDasharray="2 3" />
      <line x1="60" y1="14" x2="60" y2="28" stroke="#FB923C" strokeWidth="0.8" strokeOpacity="0.45" strokeDasharray="2 3" />
    </svg>
  );
}

/* ─── Placeholder avatar — empty seat for future hire ───────── */
function PlaceholderAvatar() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="placeholderGlow" cx="50%" cy="42%" r="45%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <pattern id="placeholderHatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        </pattern>
      </defs>
      <circle cx="60" cy="60" r="60" fill="rgba(255,255,255,0.025)" />
      <circle cx="60" cy="60" r="60" fill="url(#placeholderHatch)" />
      <circle cx="60" cy="60" r="60" fill="url(#placeholderGlow)" />
      {/* Subtle dashed silhouette — head + shoulders */}
      <circle cx="60" cy="50" r="18" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2" strokeDasharray="3 3" />
      <path d="M28 108 Q28 84 60 80 Q92 84 92 108" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2" strokeDasharray="3 3" />
      {/* Plus icon centered */}
      <line x1="60" y1="46" x2="60" y2="54" stroke="rgba(255,255,255,0.45)" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="56" y1="50" x2="64" y2="50" stroke="rgba(255,255,255,0.45)" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

/* ─── Engagements (manifesto) ───────────────────────────────── */
const engagements = [
  {
    n: "01",
    title: "Cero templates.",
    body:
      "Cada proyecto se diseña desde la primera línea. Si lo construye una IA en cinco minutos, no lo entregamos.",
  },
  {
    n: "02",
    title: "Respuesta real, no ticket.",
    body:
      "Un interlocutor humano disponible — usted nos escribe, nosotros respondemos. Sin centro de soporte, sin filtros automáticos.",
  },
  {
    n: "03",
    title: "100% a medida.",
    body:
      "Nada de presets. Su marca, su negocio y sus clientes definen cada decisión visual y técnica del proyecto.",
  },
  {
    n: "04",
    title: "Socio, no proveedor.",
    body:
      "Trabajamos con usted mes a mes, año a año. Pensamos su negocio como si fuera el nuestro — porque parte de él, lo es.",
  },
  {
    n: "05",
    title: "Resultado antes que estética.",
    body:
      "Cada decisión se justifica por lo que aporta. El diseño bonito que no convierte es decoración. No es lo nuestro.",
  },
  {
    n: "06",
    title: "Sin promesas chiffradas.",
    body:
      "No prometemos plazos imposibles para cerrar la venta. Le decimos lo que entregaremos y cuándo — y lo cumplimos.",
  },
];

/* ─── Method steps ──────────────────────────────────────────── */
const methodSteps = [
  {
    n: "I",
    title: "Escuchamos antes de proponer",
    body:
      "Una conversación seria sobre su negocio, sus clientes y los obstáculos reales que tiene hoy. Sin formularios, sin discovery genérico.",
  },
  {
    n: "II",
    title: "Diseñamos a medida",
    body:
      "Cada decisión — tipografía, voz, flujo de calificación, paleta — se piensa para usted. Nada se reutiliza de otro proyecto.",
  },
  {
    n: "III",
    title: "Iteramos hasta que cierre",
    body:
      "Mostramos antes de cobrar el saldo. Ajustamos hasta que cada detalle responda a lo que usted pidió. Sin paywall en las revisiones.",
  },
  {
    n: "IV",
    title: "Acompañamos después de entregar",
    body:
      "El día de live no es el final. Quedamos a un mensaje de distancia para ajustar, optimizar y crecer con su negocio.",
  },
];

/* ─── Future team roles (placeholder cards) ─────────────────── */
const futureRoles = [
  { role: "CEO" },
  { role: "Director de Diseño" },
  { role: "Marketing" },
];

/* ─── Main component ─────────────────────────────────────────── */
export default function NosotrosPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const methodRef = useRef<HTMLDivElement>(null);
  const engagementsRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const futureRef = useRef<HTMLDivElement>(null);

  const [heroVisible, setHeroVisible] = useState(false);
  const [visionVisible, setVisionVisible] = useState(false);
  const [methodVisible, setMethodVisible] = useState(false);
  const [engagementsVisible, setEngagementsVisible] = useState(false);
  const [teamVisible, setTeamVisible] = useState(false);
  const [futureVisible, setFutureVisible] = useState(false);

  useEffect(() => {
    const pairs: [React.RefObject<HTMLDivElement | null>, (v: boolean) => void][] = [
      [heroRef, setHeroVisible],
      [visionRef, setVisionVisible],
      [methodRef, setMethodVisible],
      [engagementsRef, setEngagementsVisible],
      [teamRef, setTeamVisible],
      [futureRef, setFutureVisible],
    ];
    const observers = pairs.map(([ref, setter]) => {
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setter(true); },
        { threshold: 0.05 }
      );
      if (ref.current) obs.observe(ref.current);
      return obs;
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="bg-transparent">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[78vh] flex flex-col overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[760px] h-[520px] rounded-full hero-blob-violet"
            style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.28) 0%, transparent 70%)", filter: "blur(90px)" }}
          />
          <div
            className="absolute top-[140px] right-[-120px] w-[440px] h-[440px] rounded-full hero-blob-orange"
            style={{ background: "radial-gradient(ellipse, rgba(234,88,12,0.18) 0%, transparent 70%)", filter: "blur(90px)" }}
          />
        </div>

        <div
          ref={heroRef}
          className={cn(
            "relative z-10 flex-1 flex items-center justify-center px-6 md:px-10 pt-32 pb-24 text-center transition-all duration-1000",
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="max-w-4xl mx-auto">
            <p className="uppercase tracking-[0.3em] text-xs font-semibold text-white/45 mb-7">
              Nosotros
            </p>
            <h1
              className="font-bold text-white leading-[0.92] tracking-tight mb-8 font-clash"
              style={{ fontSize: "clamp(2.8rem, 8vw, 6.5rem)" }}
            >
              No somos otra{" "}
              <br className="hidden sm:block" />
              <span className="gradient-text">agencia digital.</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/65 max-w-2xl mx-auto leading-relaxed">
              Construimos cada proyecto a mano, decisión por decisión. Sin templates, sin atajos, sin guion comercial. Para empresas que se niegan a desaparecer en el ruido.
            </p>
          </div>
        </div>
      </section>

      {/* ── Vision ────────────────────────────────────────────── */}
      <section
        ref={visionRef}
        className="relative py-28 md:py-36 px-6 md:px-10 overflow-hidden"
        style={{ background: "#0F0C1E" }}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            width: "640px",
            height: "440px",
            background: "radial-gradient(ellipse, rgba(124,58,237,0.14) 0%, transparent 70%)",
            top: "-60px",
            left: "50%",
            transform: "translateX(-50%)",
            filter: "blur(80px)",
          }}
        />

        <div className="relative max-w-4xl mx-auto">
          <p
            className={cn(
              "uppercase tracking-[0.3em] text-xs font-semibold text-violet-300/80 mb-7 transition-all duration-700",
              visionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Visión
          </p>
          <h2
            className={cn(
              "font-bold text-white leading-[1.05] tracking-tight mb-10 font-clash transition-all duration-700 delay-100",
              visionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.4rem)" }}
          >
            Cada empresa merece una presencia digital que <span className="gradient-text">la represente de verdad</span> — y que trabaje incluso cuando su equipo duerme.
          </h2>

          <div
            className={cn(
              "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 text-white/70 text-base md:text-lg leading-relaxed transition-all duration-700 delay-200",
              visionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <p>
              Sicentre nace con una intención clara: convertirse en la referencia digital con IA en América Latina para las empresas que se niegan a quedar invisibles.
            </p>
            <p>
              Creemos que el tamaño del negocio no debería decidir la calidad de su imagen. Una herramienta de venta hecha con criterio puede transformar un comercio local en un referente regional. Esa es la apuesta — y es para todos.
            </p>
          </div>
        </div>
      </section>

      {/* ── Método ────────────────────────────────────────────── */}
      <section
        ref={methodRef}
        className="relative py-28 md:py-36 px-6 md:px-10 overflow-hidden"
        style={{ background: "#0D0B18" }}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            width: "560px",
            height: "380px",
            background: "radial-gradient(ellipse, rgba(234,88,12,0.10) 0%, transparent 70%)",
            bottom: "-60px",
            right: "-100px",
            filter: "blur(80px)",
          }}
        />

        <div className="relative max-w-5xl mx-auto">
          <div
            className={cn(
              "mb-14 md:mb-16 transition-all duration-700",
              methodVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <p className="uppercase tracking-[0.3em] text-xs font-semibold text-orange-300/80 mb-5">
              Método
            </p>
            <h2
              className="font-bold text-white leading-[1.05] tracking-tight font-clash mb-5"
              style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}
            >
              Cómo trabajamos —{" "}
              <span style={{ color: "#EA580C", textShadow: "0 4px 18px rgba(234,88,12,0.4)" }}>
                paso por paso.
              </span>
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-2xl leading-relaxed">
              No hay magia. Hay una manera concreta de hacer las cosas, repetida en cada proyecto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {methodSteps.map((step, i) => (
              <div
                key={step.n}
                className={cn(
                  "relative p-7 md:p-8 rounded-2xl transition-all duration-700",
                  methodVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{
                  transitionDelay: `${i * 110}ms`,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                }}
              >
                <span
                  className="absolute top-6 right-7 font-clash font-bold text-white/12"
                  style={{ fontSize: "clamp(2.6rem, 4.5vw, 3.6rem)", lineHeight: 1, letterSpacing: "-0.02em" }}
                >
                  {step.n}
                </span>
                <h3 className="font-clash text-white font-bold text-xl md:text-2xl leading-tight mb-3 max-w-[80%]">
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-[90%]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Engagements (manifesto) ──────────────────────────── */}
      <section
        ref={engagementsRef}
        className="relative py-28 md:py-36 px-6 md:px-10 overflow-hidden"
        style={{ background: "#0F0C1E" }}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            width: "560px",
            height: "380px",
            background: "radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)",
            top: "-40px",
            left: "-80px",
            filter: "blur(80px)",
          }}
        />

        <div className="relative max-w-6xl mx-auto">
          <div
            className={cn(
              "text-center mb-14 md:mb-16 transition-all duration-700",
              engagementsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <p className="uppercase tracking-[0.3em] text-xs font-semibold text-violet-300/80 mb-5">
              Manifiesto
            </p>
            <h2
              className="font-bold text-white leading-[1] tracking-tight font-clash mx-auto max-w-3xl"
              style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}
            >
              Las reglas que <span className="gradient-text">nos imponemos.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {engagements.map((e, i) => (
              <div
                key={e.n}
                className={cn(
                  "relative p-7 rounded-2xl transition-all duration-700 hover:-translate-y-1",
                  engagementsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{
                  transitionDelay: `${i * 80}ms`,
                  background: "rgba(255,255,255,0.045)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                }}
              >
                <p className="text-xs font-mono font-bold tracking-[0.2em] text-white/35 mb-3">{e.n}</p>
                <h3 className="font-clash font-bold text-white text-lg md:text-xl leading-tight mb-3">
                  {e.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team — Raphael + Santiago ────────────────────────── */}
      <section
        ref={teamRef}
        className="relative py-28 md:py-36 px-6 md:px-10 overflow-hidden"
        style={{ background: "#0D0B18" }}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            width: "640px",
            height: "440px",
            background: "radial-gradient(ellipse, rgba(124,58,237,0.10) 0%, transparent 70%)",
            top: "-60px",
            left: "50%",
            transform: "translateX(-50%)",
            filter: "blur(80px)",
          }}
        />

        <div className="relative max-w-5xl mx-auto">
          <div
            className={cn(
              "text-center mb-14 md:mb-16 transition-all duration-700",
              teamVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <p className="uppercase tracking-[0.3em] text-xs font-semibold text-white/45 mb-5">
              Equipo
            </p>
            <h2
              className="font-bold text-white leading-[1.05] tracking-tight font-clash mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}
            >
              Las personas detrás{" "}
              <span className="gradient-text">de cada decisión.</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Dos perfiles que se complementan, sin filtros entre ustedes y quien decide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {/* Raphael */}
            <div
              className={cn(
                "relative p-7 md:p-8 rounded-2xl transition-all duration-700",
                teamVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              )}
              style={{
                transitionDelay: "100ms",
                background: "rgba(124,58,237,0.10)",
                border: "1px solid rgba(124,58,237,0.25)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              <div className="flex items-start gap-5 mb-6">
                <div
                  className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0"
                  style={{ border: "1px solid rgba(167,139,250,0.35)" }}
                >
                  <RaphaelAvatar />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-clash leading-tight">Raphael</h3>
                  <p className="text-violet-300 text-sm font-semibold mt-1">
                    Cofundador · Dirección creativa
                  </p>
                </div>
              </div>

              <p
                className="font-clash text-white/90 text-lg md:text-xl leading-snug"
                style={{ fontStyle: "italic" }}
              >
                «Cada pixel justifica su existencia. El resto es decoración.»
              </p>
            </div>

            {/* Santiago */}
            <div
              className={cn(
                "relative p-7 md:p-8 rounded-2xl transition-all duration-700",
                teamVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              )}
              style={{
                transitionDelay: "200ms",
                background: "rgba(234,88,12,0.10)",
                border: "1px solid rgba(234,88,12,0.25)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              <div className="flex items-start gap-5 mb-6">
                <div
                  className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0"
                  style={{ border: "1px solid rgba(251,146,60,0.35)" }}
                >
                  <SantiagoAvatar />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-clash leading-tight">Santiago</h3>
                  <p className="text-orange-300 text-sm font-semibold mt-1">
                    Cofundador · Dirección comercial
                  </p>
                </div>
              </div>

              <p
                className="font-clash text-white/90 text-lg md:text-xl leading-snug"
                style={{ fontStyle: "italic" }}
              >
                «Gana quien entiende a su cliente. No quien grita más fuerte.»
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Future hires — placeholder cards ─────────────────── */}
      <section
        ref={futureRef}
        className="relative py-24 md:py-32 px-6 md:px-10 overflow-hidden"
        style={{ background: "#0F0C1E" }}
      >
        <div className="relative max-w-5xl mx-auto">
          <div
            className={cn(
              "text-center mb-12 md:mb-14 transition-all duration-700",
              futureVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <p className="uppercase tracking-[0.3em] text-xs font-semibold text-white/35 mb-4">
              Próximamente
            </p>
            <h2
              className="font-bold text-white leading-[1.05] tracking-tight font-clash mb-3"
              style={{ fontSize: "clamp(1.7rem, 4vw, 3rem)" }}
            >
              El equipo crece.
            </h2>
            <p className="text-white/55 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Estos lugares ya están reservados — para perfiles que comparten nuestra exigencia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {futureRoles.map((r, i) => (
              <div
                key={r.role}
                className={cn(
                  "p-6 md:p-7 rounded-2xl transition-all duration-700",
                  futureVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{
                  transitionDelay: `${i * 100}ms`,
                  background: "rgba(255,255,255,0.025)",
                  border: "1px dashed rgba(255,255,255,0.18)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                }}
              >
                <div
                  className="w-full aspect-square rounded-xl overflow-hidden mb-5"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <PlaceholderAvatar />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35 mb-1.5">
                  {r.role}
                </p>
                <p className="font-clash text-white/35 text-base leading-tight">
                  Por presentar.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-10 text-center" style={{ background: "#0D0B18" }}>
        <div className="max-w-2xl mx-auto">
          <h2
            className="font-bold text-white mb-6 font-clash leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            Trabajemos{" "}
            <span className="gradient-text">juntos.</span>
          </h2>
          <p className="text-white/60 mb-9 leading-relaxed text-base md:text-lg max-w-md mx-auto">
            Cuéntenos su proyecto. Le respondemos en menos de 24 horas — con ideas concretas, sin costo y sin compromiso.
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center px-7 md:px-10 py-4 rounded-full bg-gradient-to-r from-violet-600 to-orange-500 text-white font-semibold text-base hover:opacity-90 transition-all duration-200 shadow-xl shadow-violet-600/30 hover:-translate-y-0.5"
          >
            Hablemos →
          </a>
        </div>
      </section>
    </div>
  );
}
