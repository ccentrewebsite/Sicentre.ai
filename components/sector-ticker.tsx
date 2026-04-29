"use client";

const sectors = [
  "Restaurantes & Gastronomía",
  "Salud & Clínicas",
  "Moda & Retail",
  "Inmobiliaria",
  "Educación",
  "Turismo & Hoteles",
  "Tecnología",
  "Servicios Jurídicos",
  "Construcción",
  "Automotriz",
  "Finanzas & Seguros",
  "Belleza & Estética",
  "Eventos & Entretenimiento",
  "E-Commerce",
  "Consultoría",
  "Logística & Transporte",
  "Fitness & Bienestar",
  "Marketing & Publicidad",
  "Agencias Creativas",
  "Clínicas Dentales",
  "Coworking & Oficinas",
  "ONGs & Fundaciones",
  "Arquitectura & Diseño",
];

const doubled = [...sectors, ...sectors];

export default function SectorTicker() {
  return (
    <div className="relative z-20 -mt-10 w-full">
      {/* SVG liquid glass filter */}
      <svg
        className="absolute w-0 h-0 overflow-hidden"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <filter
            id="ticker-liquid"
            x="-2%"
            y="-40%"
            width="104%"
            height="180%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.016 0.009"
              numOctaves="4"
              seed="9"
              result="noise"
            />
            <feGaussianBlur in="noise" stdDeviation="2.5" result="softNoise" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="softNoise"
              scale="16"
              xChannelSelector="R"
              yChannelSelector="G"
              result="distorted"
            />
            <feGaussianBlur in="distorted" stdDeviation="0.6" />
          </filter>
        </defs>
      </svg>

      {/* Outer wrapper — full width, no rounded corners */}
      <div className="relative overflow-hidden" style={{ isolation: "isolate" }}>

        {/* ── Layer 1: Liquid glass backdrop ── */}
        <div
          className="absolute inset-0"
          style={{
            backdropFilter: "blur(32px) saturate(200%) brightness(1.08)",
            WebkitBackdropFilter: "blur(32px) saturate(200%) brightness(1.08)",
            filter: "url(#ticker-liquid)",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(124,58,237,0.09) 45%, rgba(234,88,12,0.06) 100%)",
          }}
        />

        {/* ── Layer 2: Color tint + borders (undistorted) ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.025) 0%, rgba(124,58,237,0.04) 50%, rgba(234,88,12,0.025) 100%)",
            borderTop: "1px solid rgba(255,255,255,0.13)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            boxShadow:
              "inset 0 1.5px 0 rgba(255,255,255,0.22)," +
              "inset 0 -1px 0 rgba(0,0,0,0.28)," +
              "0 6px 40px rgba(0,0,0,0.55)",
          }}
        />

        {/* ── Layer 3: Top refraction edge ── */}
        <div
          className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.45) 25%, rgba(255,255,255,0.15) 75%, transparent 100%)",
          }}
        />

        {/* ── Layer 4: Scrolling tickers ── */}
        <div className="relative z-10 py-5 overflow-hidden flex flex-col gap-4">
          {/* Left mask */}
          <div
            className="absolute left-0 top-0 bottom-0 w-12 md:w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, rgba(5,3,12,0.7) 0%, transparent 100%)" }}
          />
          {/* Right mask */}
          <div
            className="absolute right-0 top-0 bottom-0 w-12 md:w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, rgba(5,3,12,0.7) 0%, transparent 100%)" }}
          />

          {/* Row 1 — left to right */}
          <div className="flex animate-scroll-ticker whitespace-nowrap will-change-transform">
            {doubled.map((sector, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-3 px-7 text-[15px] font-medium tracking-wide text-white/65"
              >
                <span
                  className="w-[6px] h-[6px] rounded-full flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED 0%, #EA580C 100%)",
                    boxShadow: "0 0 8px rgba(124,58,237,0.6)",
                  }}
                />
                {sector}
              </span>
            ))}
          </div>

          {/* Row 2 — right to left (reversed) */}
          <div className="flex animate-scroll-ticker-reverse whitespace-nowrap will-change-transform">
            {[...doubled].reverse().map((sector, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-3 px-7 text-[15px] font-medium tracking-wide text-white/45"
              >
                <span
                  className="w-[5px] h-[5px] rounded-full flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #EA580C 0%, #7C3AED 100%)",
                    boxShadow: "0 0 6px rgba(234,88,12,0.5)",
                  }}
                />
                {sector}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
