"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/* ─── Photo placeholder frame — shared by every team card ───── */
function PhotoPlaceholder() {
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
      <rect width="120" height="120" fill="rgba(255,255,255,0.025)" />
      <rect width="120" height="120" fill="url(#placeholderHatch)" />
      <rect width="120" height="120" fill="url(#placeholderGlow)" />
      <circle cx="60" cy="50" r="18" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2" strokeDasharray="3 3" />
      <path d="M28 108 Q28 84 60 80 Q92 84 92 108" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2" strokeDasharray="3 3" />
      <line x1="60" y1="46" x2="60" y2="54" stroke="rgba(255,255,255,0.45)" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="56" y1="50" x2="64" y2="50" stroke="rgba(255,255,255,0.45)" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

/* ─── Team — three members, ordered ─────────────────────────── */
interface TeamMember {
  name: string;
  role: string;
  description: string;
  accentBg: string;
  accentBorder: string;
  pending?: boolean;
}

const team: TeamMember[] = [
  {
    name: "Santiago",
    role: "CEO",
    description:
      "Conducción estratégica del estudio. Visión de largo plazo, decisiones de crecimiento, alianzas y expansión del estándar Sicentre dentro y fuera del mercado.",
    accentBg: "rgba(234,88,12,0.14)",
    accentBorder: "rgba(234,88,12,0.36)",
  },
  {
    name: "Raphael",
    role: "Director de Diseño",
    description:
      "Define el estándar visual de cada proyecto que sale del estudio. Pensamiento de producto, exigencia europea, criterio sobre cada decisión de diseño.",
    accentBg: "rgba(124,58,237,0.14)",
    accentBorder: "rgba(124,58,237,0.36)",
  },
  {
    name: "Por presentar",
    role: "Marketing & Comunicación",
    description:
      "Posicionamiento, contenido y crecimiento. Difunde el estándar Sicentre y construye la voz de la marca en cada canal donde la conversación importa.",
    accentBg: "rgba(255,255,255,0.04)",
    accentBorder: "rgba(255,255,255,0.20)",
    pending: true,
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
      "Cada decisión, tipografía, voz, flujo de calificación, paleta, se piensa para usted. Nada se reutiliza de otro proyecto.",
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

/* ─── Manifesto ─────────────────────────────────────────────── */
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
      "Un interlocutor humano disponible. Usted nos escribe, nosotros respondemos. Sin centro de soporte, sin filtros automáticos.",
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
      "Trabajamos con usted mes a mes, año a año. Pensamos su negocio como si fuera el nuestro, porque parte de él, lo es.",
  },
  {
    n: "05",
    title: "Resultado antes que estética.",
    body:
      "Cada decisión se justifica por lo que aporta. El diseño bonito que no convierte es decoración. No es lo nuestro.",
  },
  {
    n: "06",
    title: "Sin promesas vacías.",
    body:
      "No prometemos plazos imposibles para cerrar la venta. Le decimos lo que entregaremos y cuándo. Y lo cumplimos.",
  },
];

/* ─── Liquid glass block wrapper ────────────────────────────── */
function GlassBlock({
  children,
  glowColor,
  glowPosition = "top",
  className,
}: {
  children: React.ReactNode;
  glowColor?: "violet" | "orange";
  glowPosition?: "top" | "bottom" | "left" | "right";
  className?: string;
}) {
  const glowStyle: React.CSSProperties = {
    width: "640px",
    height: "440px",
    background:
      glowColor === "orange"
        ? "radial-gradient(ellipse, rgba(234,88,12,0.16) 0%, transparent 70%)"
        : "radial-gradient(ellipse, rgba(124,58,237,0.18) 0%, transparent 70%)",
    filter: "blur(80px)",
    pointerEvents: "none",
  };

  if (glowPosition === "top") {
    glowStyle.top = "-80px";
    glowStyle.left = "50%";
    glowStyle.transform = "translateX(-50%)";
  } else if (glowPosition === "bottom") {
    glowStyle.bottom = "-80px";
    glowStyle.right = "-100px";
  } else if (glowPosition === "left") {
    glowStyle.top = "-60px";
    glowStyle.left = "-120px";
  } else {
    glowStyle.top = "-60px";
    glowStyle.right = "-120px";
  }

  return (
    <section
      className={cn(
        "relative max-w-[1280px] mx-auto my-10 md:my-14 px-6 md:px-12 lg:px-16 py-14 md:py-20 lg:py-24 rounded-[28px] md:rounded-[36px] overflow-hidden",
        className
      )}
      style={{
        background:
          "linear-gradient(to bottom, rgba(20,16,38,0.42) 0%, rgba(13,11,24,0.48) 50%, rgba(20,16,38,0.42) 100%)",
        backdropFilter: "blur(32px)",
        WebkitBackdropFilter: "blur(32px)",
        border: "1px solid rgba(255,255,255,0.14)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.08), 0 24px 70px rgba(0,0,0,0.40)",
      }}
    >
      {glowColor && <div className="absolute" style={glowStyle} />}
      <div className="relative z-10">{children}</div>
    </section>
  );
}

/* ─── Main component ─────────────────────────────────────────── */
export default function NosotrosPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const methodRef = useRef<HTMLDivElement>(null);
  const engagementsRef = useRef<HTMLDivElement>(null);

  const [heroVisible, setHeroVisible] = useState(false);
  const [visionVisible, setVisionVisible] = useState(false);
  const [teamVisible, setTeamVisible] = useState(false);
  const [methodVisible, setMethodVisible] = useState(false);
  const [engagementsVisible, setEngagementsVisible] = useState(false);

  useEffect(() => {
    const pairs: [React.RefObject<HTMLDivElement | null>, (v: boolean) => void][] = [
      [heroRef, setHeroVisible],
      [visionRef, setVisionVisible],
      [teamRef, setTeamVisible],
      [methodRef, setMethodVisible],
      [engagementsRef, setEngagementsVisible],
    ];
    const observers = pairs.map(([ref, setter]) => {
      const obs = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) setter(true);
        },
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
      <section className="relative min-h-[72vh] flex flex-col overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[760px] h-[520px] rounded-full hero-blob-violet"
            style={{
              background: "radial-gradient(ellipse, rgba(124,58,237,0.30) 0%, transparent 70%)",
              filter: "blur(90px)",
            }}
          />
          <div
            className="absolute top-[140px] right-[-120px] w-[440px] h-[440px] rounded-full hero-blob-orange"
            style={{
              background: "radial-gradient(ellipse, rgba(234,88,12,0.18) 0%, transparent 70%)",
              filter: "blur(90px)",
            }}
          />
        </div>

        <div
          ref={heroRef}
          className={cn(
            "relative z-10 flex-1 flex items-center justify-center px-6 md:px-10 pt-32 pb-20 text-center transition-all duration-1000",
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="max-w-4xl mx-auto">
            <p className="uppercase tracking-[0.3em] text-xs font-semibold text-white/45 mb-7">
              Nosotros
            </p>
            <h1
              className="font-bold text-white leading-[0.95] tracking-tight mb-8 font-clash"
              style={{ fontSize: "clamp(2.6rem, 7.5vw, 6.2rem)" }}
            >
              No somos otra <span className="gradient-text whitespace-nowrap">agencia digital.</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/65 max-w-2xl mx-auto leading-relaxed">
              Construimos cada proyecto a mano, decisión por decisión. Sin templates, sin atajos, sin guion comercial. Para empresas que se niegan a desaparecer en el ruido digital.
            </p>
          </div>
        </div>
      </section>

      {/* ── Visión ──────────────────────────────────────────── */}
      <div ref={visionRef}>
        <GlassBlock glowColor="violet" glowPosition="top">
          <div
            className={cn(
              "max-w-4xl mx-auto transition-all duration-700",
              visionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <p className="uppercase tracking-[0.3em] text-xs font-semibold text-violet-300/85 mb-6">
              Visión
            </p>
            <h2
              className="font-bold text-white leading-[1.05] tracking-tight mb-9 font-clash"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              Cada empresa merece una presencia digital{" "}
              <span className="gradient-text">que la represente.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 text-white/72 text-base md:text-lg leading-relaxed">
              <p>
                Sicentre nace con una intención clara: convertirse en la referencia digital con IA en América Latina para las empresas que se niegan a quedar invisibles.
              </p>
              <p>
                Creemos que el tamaño del negocio no debería decidir la calidad de su imagen. Una herramienta de venta hecha con criterio puede transformar un comercio local en un referente regional. Esa es la apuesta.
              </p>
            </div>
          </div>
        </GlassBlock>
      </div>

      {/* ── Equipo ──────────────────────────────────────────── */}
      <div ref={teamRef}>
        <GlassBlock glowColor="orange" glowPosition="right">
          <div
            className={cn(
              "max-w-6xl mx-auto transition-all duration-700",
              teamVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <div className="text-center mb-12 md:mb-14">
              <p className="uppercase tracking-[0.3em] text-xs font-semibold text-orange-300/85 mb-5">
                Equipo
              </p>
              <h2
                className="font-bold text-white leading-[1.05] tracking-tight font-clash mb-4 max-w-3xl mx-auto"
                style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}
              >
                Las personas detrás{" "}
                <span className="gradient-text whitespace-nowrap">de cada decisión.</span>
              </h2>
              <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Tres roles, una misma exigencia. Quienes diseñan, dirigen y comunican el estándar Sicentre.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {team.map((m, i) => (
                <div
                  key={`${m.role}-${i}`}
                  className="flex flex-col p-6 rounded-2xl transition-all duration-700"
                  style={{
                    transitionDelay: `${i * 110}ms`,
                    background: m.accentBg,
                    border: m.pending
                      ? `1px dashed ${m.accentBorder}`
                      : `1px solid ${m.accentBorder}`,
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                  }}
                >
                  <div
                    className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-5"
                    style={{ border: "1px solid rgba(255,255,255,0.10)" }}
                  >
                    <PhotoPlaceholder />
                  </div>

                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55 mb-2">
                    {m.role}
                  </p>
                  <h3
                    className={cn(
                      "font-clash font-bold leading-tight mb-3",
                      m.pending ? "text-white/45 italic" : "text-white"
                    )}
                    style={{ fontSize: "clamp(1.4rem, 2vw, 1.7rem)" }}
                  >
                    {m.name}
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed">{m.description}</p>
                </div>
              ))}
            </div>
          </div>
        </GlassBlock>
      </div>

      {/* ── Método ──────────────────────────────────────────── */}
      <div ref={methodRef}>
        <GlassBlock glowColor="violet" glowPosition="left">
          <div
            className={cn(
              "max-w-5xl mx-auto transition-all duration-700",
              methodVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <div className="mb-12 md:mb-14">
              <p className="uppercase tracking-[0.3em] text-xs font-semibold text-violet-300/85 mb-5">
                Método
              </p>
              <h2
                className="font-bold text-white leading-[1.05] tracking-tight font-clash mb-5"
                style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}
              >
                Cómo trabajamos,{" "}
                <span className="gradient-text whitespace-nowrap">paso por paso.</span>
              </h2>
              <p className="text-white/60 text-base md:text-lg max-w-2xl leading-relaxed">
                No hay magia. Hay una manera concreta de hacer las cosas, repetida con rigor en cada proyecto.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {methodSteps.map((step, i) => (
                <div
                  key={step.n}
                  className="relative p-7 md:p-8 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.045)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                  }}
                >
                  <span
                    className="absolute top-6 right-7 font-clash font-bold text-white/12"
                    style={{
                      fontSize: "clamp(2.6rem, 4.5vw, 3.6rem)",
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {step.n}
                  </span>
                  <h3 className="font-clash text-white font-bold text-xl md:text-2xl leading-tight mb-3 max-w-[80%]">
                    {step.title}
                  </h3>
                  <p className="text-white/65 text-sm md:text-base leading-relaxed max-w-[92%]">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </GlassBlock>
      </div>

      {/* ── Manifiesto ──────────────────────────────────────── */}
      <div ref={engagementsRef}>
        <GlassBlock glowColor="orange" glowPosition="bottom">
          <div
            className={cn(
              "max-w-6xl mx-auto transition-all duration-700",
              engagementsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <div className="text-center mb-12 md:mb-14">
              <p className="uppercase tracking-[0.3em] text-xs font-semibold text-orange-300/85 mb-5">
                Manifiesto
              </p>
              <h2
                className="font-bold text-white leading-[1] tracking-tight font-clash mx-auto max-w-3xl"
                style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}
              >
                Las reglas que{" "}
                <span className="gradient-text whitespace-nowrap">nos imponemos.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {engagements.map((e) => (
                <div
                  key={e.n}
                  className="relative p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.13)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                  }}
                >
                  <p className="text-xs font-mono font-bold tracking-[0.2em] text-white/40 mb-3">
                    {e.n}
                  </p>
                  <h3 className="font-clash font-bold text-white text-lg md:text-xl leading-tight mb-3">
                    {e.title}
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed">{e.body}</p>
                </div>
              ))}
            </div>
          </div>
        </GlassBlock>
      </div>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative py-24 md:py-32 px-6 md:px-10 text-center overflow-hidden">
        <div
          className="absolute pointer-events-none"
          style={{
            width: "720px",
            height: "440px",
            background: "radial-gradient(ellipse, rgba(124,58,237,0.16) 0%, transparent 70%)",
            top: "0",
            left: "50%",
            transform: "translateX(-50%)",
            filter: "blur(80px)",
          }}
        />
        <div className="relative max-w-2xl mx-auto">
          <h2
            className="font-bold text-white mb-6 font-clash leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            Trabajemos <span className="gradient-text whitespace-nowrap">juntos.</span>
          </h2>
          <p className="text-white/65 mb-9 leading-relaxed text-base md:text-lg max-w-md mx-auto">
            Cuéntenos su proyecto. Le respondemos en menos de 24 horas, con ideas concretas, sin costo y sin compromiso.
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center px-7 md:px-10 py-4 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-500 text-white font-semibold text-base hover:opacity-90 transition-all duration-200 shadow-xl shadow-fuchsia-500/30 hover:-translate-y-0.5"
          >
            Hablemos →
          </a>
        </div>
      </section>
    </div>
  );
}
