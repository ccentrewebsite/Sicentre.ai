"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/* ─── CSS geometric avatars ─────────────────────────────────── */
function RaphaelAvatar() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="raphaelBg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4C1D95" />
          <stop offset="100%" stopColor="#1E0B35" />
        </radialGradient>
        <radialGradient id="raphaelFace" cx="50%" cy="40%" r="45%">
          <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.4" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <circle cx="60" cy="60" r="60" fill="url(#raphaelBg)" />
      <circle cx="60" cy="60" r="60" fill="url(#raphaelFace)" />
      {/* Head */}
      <ellipse cx="60" cy="48" rx="22" ry="25" fill="#7C3AED" fillOpacity="0.5" />
      {/* Body */}
      <path d="M28 105 Q28 80 60 75 Q92 80 92 105" fill="#7C3AED" fillOpacity="0.4" />
      {/* Creative tools hint */}
      <rect x="72" y="30" width="16" height="22" rx="2" fill="#A78BFA" fillOpacity="0.5" transform="rotate(15 80 41)" />
      <line x1="72" y1="36" x2="88" y2="34" stroke="#7C3AED" strokeWidth="0.8" strokeOpacity="0.7" />
      <line x1="72" y1="40" x2="88" y2="38" stroke="#7C3AED" strokeWidth="0.8" strokeOpacity="0.5" />
      {/* French element */}
      <rect x="20" y="28" width="8" height="16" rx="1" fill="#3B82F6" fillOpacity="0.6" />
      <rect x="28" y="28" width="8" height="16" rx="1" fill="white" fillOpacity="0.3" />
      <rect x="36" y="28" width="8" height="16" rx="1" fill="#EF4444" fillOpacity="0.6" />
      {/* Geometric accent */}
      <polygon points="55,10 65,10 70,20 65,30 55,30 50,20" fill="none" stroke="#7C3AED" strokeWidth="0.8" strokeOpacity="0.5" />
    </svg>
  );
}

function SantiagoAvatar() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="santiagoBg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7C2D12" />
          <stop offset="100%" stopColor="#1C0A00" />
        </radialGradient>
        <radialGradient id="santiagoGlow" cx="50%" cy="60%" r="40%">
          <stop offset="0%" stopColor="#EA580C" stopOpacity="0.3" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <circle cx="60" cy="60" r="60" fill="url(#santiagoBg)" />
      <circle cx="60" cy="60" r="60" fill="url(#santiagoGlow)" />
      {/* Head */}
      <ellipse cx="60" cy="48" rx="23" ry="26" fill="#EA580C" fillOpacity="0.4" />
      {/* Body */}
      <path d="M25 105 Q25 78 60 73 Q95 78 95 105" fill="#EA580C" fillOpacity="0.35" />
      {/* Handshake / network */}
      <circle cx="32" cy="65" r="6" fill="#EA580C" fillOpacity="0.5" />
      <circle cx="88" cy="65" r="6" fill="#EA580C" fillOpacity="0.5" />
      <line x1="38" y1="65" x2="82" y2="65" stroke="#EA580C" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 2" />
      <circle cx="60" cy="65" r="4" fill="#EA580C" fillOpacity="0.7" />
      {/* Paraguay element */}
      <path d="M88 30 Q95 38 88 46 Q81 38 88 30 Z" fill="#22C55E" fillOpacity="0.5" />
      <circle cx="88" cy="38" r="3" fill="white" fillOpacity="0.2" />
      {/* Growth chart hint */}
      <polyline points="20,95 30,85 40,88 55,72 70,78 85,65" fill="none" stroke="#FB923C" strokeWidth="1.2" strokeOpacity="0.5" />
      {/* Geometric accent */}
      <circle cx="60" cy="12" r="8" fill="none" stroke="#EA580C" strokeWidth="0.8" strokeOpacity="0.4" />
      <circle cx="60" cy="12" r="3" fill="#EA580C" fillOpacity="0.3" />
    </svg>
  );
}

/* ─── Timeline ──────────────────────────────────────────────── */
const timeline = [
  {
    year: "2024",
    title: "Fundación",
    description: "Raphael y Santiago se conocen en Asunción. Deciden combinar sus mundos: diseño europeo y red comercial local. Nace Sicentre.",
    color: "#7C3AED",
  },
  {
    year: "2024",
    title: "Primer cliente",
    description: "Clínica Sonrisas confía en nosotros para su presencia digital. El sitio web duplica sus agendamientos en el primer mes.",
    color: "#8B5CF6",
  },
  {
    year: "2025",
    title: "Expansión IA",
    description: "Lanzamos el servicio de Voz IA y Studio. Los primeros agentes de voz para negocios paraguayos. Los primeros reels generados con IA del mercado local.",
    color: "#EA580C",
  },
  {
    year: "2026",
    title: "Hoy",
    description: "Más de 50 proyectos entregados. Clientes en Paraguay, Argentina y Bolivia. Líderes en soluciones digitales con IA para América Latina.",
    color: "#FB923C",
  },
];

/* ─── Stats ─────────────────────────────────────────────────── */
const stats = [
  { value: "50+", label: "Proyectos entregados" },
  { value: "3", label: "Países atendidos" },
  { value: "24h", label: "Tiempo de respuesta" },
];

/* ─── Main component ─────────────────────────────────────────── */
export default function NosotrosPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const [heroVisible, setHeroVisible] = useState(false);
  const [teamVisible, setTeamVisible] = useState(false);
  const [valuesVisible, setValuesVisible] = useState(false);
  const [timelineVisible, setTimelineVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const pairs: [React.RefObject<HTMLDivElement | null>, (v: boolean) => void][] = [
      [heroRef, setHeroVisible],
      [teamRef, setTeamVisible],
      [valuesRef, setValuesVisible],
      [timelineRef, setTimelineVisible],
      [statsRef, setStatsVisible],
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
      <section className="relative min-h-[80vh] flex flex-col overflow-hidden">
        {/* Aurora */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full hero-blob-violet"
            style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.25) 0%, transparent 70%)", filter: "blur(80px)" }}
          />
          <div
            className="absolute top-[100px] right-[-100px] w-[400px] h-[400px] rounded-full hero-blob-orange"
            style={{ background: "radial-gradient(ellipse, rgba(234,88,12,0.15) 0%, transparent 70%)", filter: "blur(80px)" }}
          />
        </div>

        <div
          ref={heroRef}
          className={cn(
            "relative z-10 flex-1 flex items-center justify-center px-6 md:px-10 pt-28 pb-20 text-center transition-all duration-1000",
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-violet-600/10 border border-violet-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
              </span>
              <span className="text-xs font-semibold text-violet-300 tracking-wide">
                Asunción, Paraguay · Desde 2024
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.95] mb-6 font-clash">
              Dos personas.{" "}
              <br />
              <span className="gradient-text">Una visión.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Una agencia pequeña con pensamiento grande. Nacimos para demostrar que el talento latinoamericano puede competir — y ganar — en el mundo digital global.
            </p>
          </div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────────── */}
      <section
        ref={teamRef}
        className="py-24 md:py-32 px-6 md:px-10 planet-section"
        style={{ background: "#0F0C1E" }}
      >
        <div className="max-w-5xl mx-auto">
          <div
            className={cn(
              "text-center mb-16 transition-all duration-700",
              teamVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white font-clash mb-4">
              El equipo.
            </h2>
            <p className="text-white/50 text-base max-w-lg mx-auto">
              Dos mundos diferentes que se complementan a la perfección.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Raphael */}
            <div
              className={cn(
                "glass-card p-8 transition-all duration-700",
                teamVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              )}
              style={{ transitionDelay: "100ms" }}
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 border border-violet-500/20">
                  <RaphaelAvatar />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-clash mb-1">Raphael</h3>
                  <p className="text-violet-400 text-sm font-semibold mb-1">
                    Cofundador · Creative Director
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-violet-600/20 text-violet-300 border border-violet-500/20">
                      🇫🇷 Francés en Paraguay
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-white/65 text-sm leading-relaxed mb-5">
                Diseñador y estratega digital formado en Europa. Trabajó con agencias de París, Madrid y Miami antes de instalarse en Asunción. Trae el estándar estético internacional y la visión de producto que diferencia a Sicentre.
              </p>

              <div className="flex flex-wrap gap-2">
                {["Diseño UI/UX", "Estrategia digital", "IA creativa", "Branding"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-violet-600/15 text-violet-300 border border-violet-500/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 pt-5 border-t border-violet-500/15">
                <p className="text-white/40 text-xs italic">
                  "Cada pixel tiene que justificar su existencia. El diseño bello que no convierte es decoración."
                </p>
              </div>
            </div>

            {/* Santiago */}
            <div
              className={cn(
                "glass-card p-8 transition-all duration-700",
                teamVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              )}
              style={{
                transitionDelay: "200ms",
                background: "rgba(234,88,12,0.1)",
                border: "1px solid rgba(234,88,12,0.2)",
              }}
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 border border-orange-500/20">
                  <SantiagoAvatar />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-clash mb-1">Santiago</h3>
                  <p className="text-orange-400 text-sm font-semibold mb-1">
                    Cofundador · Director Comercial
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/20">
                      🇵🇾 Paraguayo
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-white/65 text-sm leading-relaxed mb-5">
                Comercial nato con una red construida durante años en el ecosistema empresarial paraguayo. Entiende los dolores reales de los negocios locales y traduce las soluciones tecnológicas en resultados tangibles.
              </p>

              <div className="flex flex-wrap gap-2">
                {["Ventas B2B", "Red local", "Estrategia comercial", "CRM"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 border border-orange-500/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 pt-5 border-t border-orange-500/15">
                <p className="text-white/40 text-xs italic">
                  "El mejor producto no gana. Gana el que mejor entiende a su cliente. Eso es lo que hacemos."
                </p>
              </div>
            </div>
          </div>

          {/* Complementarity card */}
          <div
            className={cn(
              "mt-6 p-6 rounded-2xl text-center transition-all duration-700 delay-300",
              "border border-white/8",
              teamVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <p className="text-white/60 text-base max-w-2xl mx-auto leading-relaxed">
              <span className="text-violet-300 font-semibold">Raphael</span> trae el estándar global.{" "}
              <span className="text-orange-300 font-semibold">Santiago</span> trae el conocimiento local.
              Juntos construyen soluciones que ninguno podría crear solo.
            </p>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────── */}
      <section
        ref={valuesRef}
        className="py-24 md:py-32 px-6 md:px-10 planet-section-warm"
        style={{ background: "#0D0B18" }}
      >
        <div className="max-w-5xl mx-auto">
          <div
            className={cn(
              "text-center mb-14 transition-all duration-700",
              valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white font-clash mb-4">
              Por qué Sicentre.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: (
                  <svg viewBox="0 0 48 48" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 24 C8 14 16 8 24 8 C32 8 40 14 40 24 C40 34 32 40 24 40" stroke="#7C3AED" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    <path d="M24 40 L20 34 L28 34 Z" fill="#7C3AED" fillOpacity="0.6" />
                    <circle cx="24" cy="24" r="4" fill="#7C3AED" fillOpacity="0.5" />
                    <line x1="8" y1="38" x2="18" y2="30" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" />
                    <line x1="8" y1="44" x2="8" y2="32" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
                title: "No templates",
                description: "Cero templates. Cero shortcuts. Cada proyecto diseñado desde el principio para su negocio específico. Si no es custom, no lo hacemos.",
                color: "#7C3AED",
              },
              {
                icon: (
                  <svg viewBox="0 0 48 48" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="6,36 16,24 24,30 34,14 42,20" stroke="#EA580C" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="42" cy="20" r="3" fill="#EA580C" fillOpacity="0.7" />
                    <line x1="6" y1="42" x2="42" y2="42" stroke="#EA580C" strokeOpacity="0.2" strokeWidth="1" />
                    <line x1="6" y1="6" x2="6" y2="42" stroke="#EA580C" strokeOpacity="0.2" strokeWidth="1" />
                  </svg>
                ),
                title: "Resultados medibles",
                description: "Más tráfico, más llamadas, más ventas. Trabajamos con métricas desde el día 1. Si no hay resultados, rediseñamos la estrategia.",
                color: "#EA580C",
              },
              {
                icon: (
                  <svg viewBox="0 0 48 48" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 32 C16 24 32 24 32 16 C32 10 26 6 20 8 C14 10 10 16 12 22" stroke="#7C3AED" strokeWidth="2" fill="none" strokeLinecap="round" />
                    <path d="M32 16 C38 14 44 18 42 24 C40 30 34 32 28 30" stroke="#EA580C" strokeWidth="2" fill="none" strokeLinecap="round" />
                    <path d="M12 22 C8 28 10 36 16 38 C22 40 28 36 28 30" stroke="#7C3AED" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="3 2" />
                    <circle cx="24" cy="24" r="3" fill="#7C3AED" fillOpacity="0.5" />
                  </svg>
                ),
                title: "Socios a largo plazo",
                description: "No hacemos proyectos únicos y desaparecemos. Estamos disponibles para crecer con usted, mes tras mes, año tras año.",
                color: "#7C3AED",
              },
            ].map((value, i) => (
              <div
                key={value.title}
                className={cn(
                  "glass-card p-7 transition-all duration-700",
                  valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: value.color + "15", border: `1px solid ${value.color}25` }}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white font-clash mb-3">{value.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────────── */}
      <section
        ref={timelineRef}
        className="py-24 md:py-32 px-6 md:px-10"
        style={{ background: "#0F0C1E" }}
      >
        <div className="max-w-3xl mx-auto">
          <div
            className={cn(
              "text-center mb-16 transition-all duration-700",
              timelineVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white font-clash mb-4">
              Nuestra historia.
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/40 via-orange-500/30 to-transparent" />

            <div className="flex flex-col gap-10">
              {timeline.map((item, i) => (
                <div
                  key={item.year + item.title}
                  className={cn(
                    "relative flex items-start gap-6 md:gap-0 transition-all duration-700",
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
                    timelineVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  )}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  {/* Dot */}
                  <div
                    className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-2 border-[#0F0C1E] md:absolute md:left-1/2 md:-translate-x-1/2"
                    style={{ background: item.color + "25", borderColor: item.color + "60" }}
                  >
                    <span className="text-xs font-bold" style={{ color: item.color }}>{item.year}</span>
                  </div>

                  {/* Content */}
                  <div
                    className={cn(
                      "flex-1 md:w-5/12",
                      i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:ml-auto"
                    )}
                  >
                    <div
                      className="p-5 rounded-2xl"
                      style={{
                        background: item.color + "08",
                        border: `1px solid ${item.color}20`,
                      }}
                    >
                      <p
                        className="text-xs font-bold uppercase tracking-widest mb-2"
                        style={{ color: item.color }}
                      >
                        {item.year}
                      </p>
                      <h3 className="text-white font-bold text-lg font-clash mb-2">{item.title}</h3>
                      <p className="text-white/55 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section
        ref={statsRef}
        className="py-20 px-6 md:px-10"
        style={{ background: "#0D0B18" }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={cn(
                  "transition-all duration-700",
                  statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                )}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <p className="text-6xl font-bold gradient-text font-clash mb-2">{stat.value}</p>
                <p className="text-white/50 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-10 text-center" style={{ background: "#0F0C1E" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-clash leading-[0.95]">
            Trabajemos{" "}
            <span className="gradient-text">juntos.</span>
          </h2>
          <p className="text-white/50 mb-8 leading-relaxed text-base max-w-md mx-auto">
            Cuéntenos su proyecto. Le respondemos en menos de 24 horas con ideas concretas, sin costo y sin compromiso.
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center px-10 py-4 rounded-full bg-gradient-to-r from-violet-600 to-orange-500 text-white font-semibold text-base hover:opacity-90 transition-all duration-200 shadow-xl shadow-violet-600/30 hover:-translate-y-0.5"
          >
            Hablemos →
          </a>
        </div>
      </section>
    </div>
  );
}
