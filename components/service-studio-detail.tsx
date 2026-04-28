"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// ── Illustrations ──────────────────────────────────────────────────────────────

function FilmFrameIllustration() {
  const photos = [
    { src: "/images/butterfly-macro-blue.png",  alt: "Macro butterfly wing — iridescent blue" },
    { src: "/images/robot-cinematic.jpg",        alt: "Futuristic AI robot portrait" },
    { src: "/images/real-estate-luxury.jpg",     alt: "Luxury villa at golden hour" },
  ];
  return (
    <div className="w-full h-full flex gap-1.5 px-1.5 pb-1.5 overflow-hidden">
      {photos.map((p, i) => (
        <div
          key={i}
          className="relative flex-1 overflow-hidden"
          style={{
            borderRadius: "10px",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.5)",
          }}
        >
          {/* Film sprockets top */}
          <div className="absolute top-0 left-0 right-0 flex justify-around px-1.5 pt-0.5 z-10 pointer-events-none">
            {Array.from({ length: 5 }).map((_, j) => (
              <div key={j} style={{ width: "5px", height: "4px", borderRadius: "1px", background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.15)" }} />
            ))}
          </div>
          {/* Film sprockets bottom */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-around px-1.5 pb-0.5 z-10 pointer-events-none">
            {Array.from({ length: 5 }).map((_, j) => (
              <div key={j} style={{ width: "5px", height: "4px", borderRadius: "1px", background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.15)" }} />
            ))}
          </div>
          {/* Image */}
          <img
            src={p.src}
            alt={p.alt}
            className="w-full h-full object-cover"
            style={{ display: "block" }}
          />
          {/* Subtle vignette overlay */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, transparent 25%, transparent 75%, rgba(0,0,0,0.25) 100%)" }} />
        </div>
      ))}
    </div>
  );
}

function VideoEditorIllustration() {
  const scenes = [
    { label: "Scene 01", bg: "linear-gradient(135deg, rgba(124,58,237,0.7), rgba(30,14,60,0.9))" },
    { label: "Scene 02", bg: "linear-gradient(135deg, rgba(234,88,12,0.65), rgba(60,20,5,0.9))" },
    { label: "Scene 03", bg: "linear-gradient(135deg, rgba(59,130,246,0.6), rgba(10,20,50,0.9))" },
    { label: "Scene 04", bg: "linear-gradient(135deg, rgba(167,139,250,0.65), rgba(40,20,70,0.9))" },
  ];
  const specs = ["4K ULTRA HD", "IA Color", "Auto-Cut", "60fps"];
  return (
    <div className="w-full h-full flex flex-col gap-2 px-3 pt-1 pb-3">
      {/* Scene thumbnail strip */}
      <div className="flex gap-1.5 flex-shrink-0">
        {scenes.map((s, i) => (
          <div key={i} className="flex-1 rounded-md overflow-hidden flex flex-col items-center justify-center gap-0.5 py-1.5" style={{ background: s.bg, border: "1px solid rgba(255,255,255,0.09)", height: "42px" }}>
            <div style={{ width: "16px", height: "11px", background: "rgba(255,255,255,0.12)", borderRadius: "2px", border: "1px solid rgba(255,255,255,0.2)" }} />
            <span style={{ fontSize: "6px", color: "rgba(255,255,255,0.45)", fontFamily: "monospace", letterSpacing: "0.05em" }}>{s.label}</span>
          </div>
        ))}
      </div>
      {/* Main video editor image */}
      <div className="relative flex-1 rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.1)", minHeight: 0 }}>
        <img src="/images/video-editor-ui.jpg" alt="Futuristic AI video editor" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(13,11,24,0.5) 100%)" }} />
      </div>
      {/* Tech specs */}
      <div className="flex gap-1.5 flex-wrap flex-shrink-0">
        {specs.map((s, i) => (
          <span key={i} className="px-2 py-0.5 rounded-full text-white/50" style={{ fontSize: "9px", fontFamily: "monospace", fontWeight: 600, letterSpacing: "0.06em", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function CampaignGridIllustration() {
  const pieces = [
    { bg: "linear-gradient(135deg, rgba(124,58,237,0.75), rgba(139,92,246,0.45))", w: "59%", h: "50%" },
    { bg: "linear-gradient(135deg, rgba(234,88,12,0.75), rgba(251,146,60,0.45))", w: "37%", h: "50%" },
    { bg: "linear-gradient(135deg, rgba(99,102,241,0.65), rgba(124,58,237,0.35))", w: "37%", h: "40%" },
    { bg: "linear-gradient(135deg, rgba(234,88,12,0.55), rgba(124,58,237,0.55))", w: "22%", h: "40%" },
    { bg: "linear-gradient(135deg, rgba(167,139,250,0.65), rgba(234,88,12,0.35))", w: "35%", h: "40%" },
  ];
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-5">
      <div className="absolute" style={{ width: "150px", height: "100px", background: "radial-gradient(ellipse, rgba(124,58,237,0.22) 0%, transparent 70%)", filter: "blur(18px)" }} />
      <div className="relative z-10 w-full h-full flex flex-wrap gap-1.5 content-start p-1">
        {pieces.map((p, i) => (
          <div key={i} className="rounded-lg overflow-hidden" style={{ width: p.w, height: p.h, background: p.bg, border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 10px rgba(0,0,0,0.3)", flexShrink: 0 }}>
            <div className="w-full h-full" style={{ background: "repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(255,255,255,0.03) 8px, rgba(255,255,255,0.03) 9px)" }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function SocialPlatformsGrid() {
  const platforms = [
    {
      name: "Instagram", freq: "3× / sem",
      bg: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
      logo: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="1.8"/>
          <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="1.8"/>
          <circle cx="17.5" cy="6.5" r="1.2" fill="white"/>
        </svg>
      ),
    },
    {
      name: "TikTok", freq: "2× / sem",
      bg: "linear-gradient(135deg, #010101, #2d2d2d)",
      logo: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.88a8.18 8.18 0 004.78 1.52V7.01a4.85 4.85 0 01-1.01-.32z"/>
        </svg>
      ),
    },
    {
      name: "YouTube", freq: "1× / sem",
      bg: "linear-gradient(135deg, #ff0000, #cc0000)",
      logo: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
          <path d="M23 7s-.3-1.9-1.2-2.7c-1.1-1.2-2.4-1.2-3-1.3C16.3 3 12 3 12 3s-4.3 0-6.8.1c-.6.1-1.9.1-3 1.3C1.3 5.2 1 7 1 7S.7 9.2.7 11.3v2c0 2.2.3 4.3.3 4.3s.3 1.9 1.2 2.7c1.1 1.2 2.6 1.1 3.3 1.2C7.3 21.7 12 21.7 12 21.7s4.3 0 6.8-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.7 1.2-2.7s.3-2.1.3-4.3v-2C23.3 9.2 23 7 23 7zM9.7 15.5V8.4l6.6 3.6-6.6 3.5z"/>
        </svg>
      ),
    },
    {
      name: "Facebook", freq: "3× / sem",
      bg: "linear-gradient(135deg, #1877f2, #0d5fbd)",
      logo: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      name: "LinkedIn", freq: "2× / sem",
      bg: "linear-gradient(135deg, #0077b5, #005580)",
      logo: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: "X / Twitter", freq: "5× / sem",
      bg: "linear-gradient(135deg, #000000, #1a1a1a)",
      logo: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.745l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center gap-2 px-4 py-3">
      <div className="grid grid-cols-3 gap-2">
        {platforms.map((p, i) => (
          <div key={i} className="flex items-center gap-2 px-2 py-2 rounded-xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg" style={{ background: p.bg }}>
              {p.logo}
            </div>
            <div className="min-w-0">
              <div className="text-white/80 font-semibold truncate" style={{ fontSize: "10px" }}>{p.name}</div>
              <div className="text-white/35" style={{ fontSize: "9px" }}>{p.freq}</div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-white/25 mt-1" style={{ fontSize: "10px", letterSpacing: "0.06em" }}>Publicación automática · Todo incluido</p>
    </div>
  );
}

function SurrealIllustration() {
  return (
    <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
      <div className="absolute" style={{ width: "300px", height: "160px", background: "radial-gradient(ellipse, rgba(124,58,237,0.35) 0%, transparent 70%)", top: "0", left: "25%", filter: "blur(30px)" }} />
      <div className="absolute" style={{ width: "250px", height: "150px", background: "radial-gradient(ellipse, rgba(234,88,12,0.25) 0%, transparent 70%)", bottom: "0", right: "10%", filter: "blur(28px)" }} />
      <div className="absolute" style={{ width: "180px", height: "180px", background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)", top: "30%", left: "5%", filter: "blur(24px)" }} />
      <div className="absolute" style={{ width: "90px", height: "90px", background: "linear-gradient(135deg, rgba(124,58,237,0.75), rgba(167,139,250,0.4))", borderRadius: "50%", top: "15%", left: "12%", boxShadow: "0 0 40px rgba(124,58,237,0.6), inset 0 0 20px rgba(255,255,255,0.08)" }} />
      <div className="absolute" style={{ width: "120px", height: "40px", border: "2px solid rgba(124,58,237,0.5)", borderRadius: "50%", top: "28%", left: "6%", transform: "rotate(-20deg)", boxShadow: "0 0 12px rgba(124,58,237,0.4)" }} />
      <div className="absolute" style={{ width: "70px", height: "70px", background: "linear-gradient(45deg, rgba(234,88,12,0.85), rgba(251,146,60,0.5))", clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)", top: "10%", right: "18%", boxShadow: "0 0 30px rgba(234,88,12,0.6)" }} />
      <div className="absolute" style={{ width: "50px", height: "70px", background: "linear-gradient(160deg, rgba(167,139,250,0.8), rgba(124,58,237,0.4))", clipPath: "polygon(50% 0%, 100% 30%, 85% 100%, 15% 100%, 0% 30%)", bottom: "15%", left: "28%", boxShadow: "0 0 22px rgba(124,58,237,0.55)" }} />
      <svg className="absolute inset-0 w-full h-full">
        {[
          [55,25,3,"rgba(167,139,250,0.9)"],[72,18,2.5,"rgba(234,88,12,0.8)"],[38,35,2,"rgba(251,146,60,0.7)"],
          [65,60,3.5,"rgba(124,58,237,0.9)"],[82,42,2,"rgba(167,139,250,0.75)"],[20,55,2.5,"rgba(234,88,12,0.7)"],
          [48,72,3,"rgba(139,92,246,0.85)"],[88,30,2,"rgba(251,146,60,0.8)"],[30,20,2,"rgba(124,58,237,0.8)"],
          [75,78,2.5,"rgba(234,88,12,0.65)"],[42,15,2,"rgba(167,139,250,0.7)"],[92,65,2,"rgba(124,58,237,0.75)"],
        ].map(([cx,cy,r,fill],i) => (
          <circle key={i} cx={`${cx}%`} cy={`${cy}%`} r={r as number} fill={fill as string}
            style={{ filter: `drop-shadow(0 0 ${(r as number)+3}px ${fill as string})` }} />
        ))}
        <line x1="15%" y1="80%" x2="45%" y2="40%" stroke="rgba(124,58,237,0.3)" strokeWidth="1" strokeDasharray="4 6" />
        <line x1="60%" y1="10%" x2="85%" y2="50%" stroke="rgba(234,88,12,0.25)" strokeWidth="1" strokeDasharray="3 8" />
        <line x1="70%" y1="85%" x2="90%" y2="20%" stroke="rgba(167,139,250,0.2)" strokeWidth="0.8" strokeDasharray="5 5" />
      </svg>
      <div className="absolute" style={{ width: "24px", height: "24px", background: "white", borderRadius: "50%", top: "44%", left: "52%", transform: "translate(-50%,-50%)", boxShadow: "0 0 12px 4px rgba(255,255,255,0.8), 0 0 40px 12px rgba(124,58,237,0.6), 0 0 80px 20px rgba(234,88,12,0.3)", zIndex: 10 }} />
    </div>
  );
}

function CampaignPhotoGrid() {
  return (
    <div className="w-full h-full p-2 grid grid-cols-2 grid-rows-2 gap-1.5 overflow-hidden">
      <div className="relative overflow-hidden rounded-lg row-span-2" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
        <img src="/images/campaign-portrait.jpg" alt="Fashion campaign portrait" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(124,58,237,0.35) 0%, transparent 50%)" }} />
      </div>
      <div className="relative overflow-hidden rounded-lg" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
        <img src="/images/campaign-perfume.jpg" alt="Luxury perfume product shot" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(234,88,12,0.3) 0%, transparent 60%)" }} />
      </div>
      <div className="relative overflow-hidden rounded-lg" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
        <img src="/images/real-estate-luxury.jpg" alt="Luxury real estate" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(124,58,237,0.25) 0%, transparent 60%)" }} />
      </div>
    </div>
  );
}

function SurrealPhotoFill() {
  const tags = ["Ciudad flotante", "Física imposible", "Mundos inexistentes", "Atmósferas únicas", "Efectos VFX"];
  return (
    <div className="w-full h-full flex flex-col gap-2 px-3 pb-3">
      {/* Image cropped */}
      <div className="relative flex-1 rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)", minHeight: 0 }}>
        <img
          src="/images/surreal-city.jpg"
          alt="Impossible floating city — surreal AI scene"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(13,11,24,0.45) 100%)" }} />
        {/* "GENERADO CON IA" stamp */}
        <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full" style={{ background: "rgba(0,0,0,0.55)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}>
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#7C3AED", boxShadow: "0 0 4px rgba(124,58,237,0.9)" }} />
          <span style={{ fontSize: "8px", color: "rgba(255,255,255,0.6)", fontFamily: "monospace", letterSpacing: "0.08em" }}>GENERADO CON IA</span>
        </div>
      </div>
      {/* Effect tags */}
      <div className="flex flex-wrap gap-1.5 flex-shrink-0">
        {tags.map((t, i) => (
          <span key={i} className="px-2.5 py-0.5 rounded-full text-white/50" style={{ fontSize: "10px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Card styles ────────────────────────────────────────────────────────────────

const CARD_BG = "rgba(124,58,237,0.44)";

// ── Component ──────────────────────────────────────────────────────────────────

export default function ServiceStudioDetail() {
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
    <section ref={sectionRef} className="relative py-24 overflow-hidden planet-section">
      <div className="absolute pointer-events-none" style={{ width: "600px", height: "400px", background: "radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)", top: "-60px", left: "50%", transform: "translateX(-50%)", filter: "blur(70px)" }} />
      <div className="absolute pointer-events-none" style={{ width: "400px", height: "300px", background: "radial-gradient(ellipse, rgba(234,88,12,0.07) 0%, transparent 70%)", bottom: "0", right: "0", filter: "blur(60px)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className={cn("text-center mb-14 transition-all duration-700", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-400/70 mb-4">Studio Visual</p>
          <h2 className="font-clash text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl mx-auto leading-tight mb-5">
            Contenido que{" "}
            <span className="gradient-text" style={{ filter: "drop-shadow(0 3px 10px rgba(0,0,0,0.7))" }}>detiene el scroll.</span>
          </h2>
          <p className="text-white/55 text-base md:text-lg max-w-xl mx-auto">
            Imágenes y videos que no parecen generados. Parecen filmados.
          </p>
        </div>

        {/* Bento grid
            Row 1 : [Card1 col-span-2] [Card2 row-span-2]
            Row 2 : [Card3] [Card4]    [Card2 continues ]
            Row 3 : [Card5 col-span-2] [Pricing          ]
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridAutoRows: "minmax(280px, auto)" }}>

          {/* Card 1 — col-span-2 */}
          <div
            className={cn("glass-card flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 md:col-span-2", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}
            style={{ transitionDelay: "0ms", background: CARD_BG, minHeight: "280px" }}
          >
            <div className="px-5 pt-5 pb-3">
              <h3 className="font-clash text-white font-bold text-lg leading-snug mb-1.5">Imágenes que parecen filmadas</h3>
              <p className="text-white/50 text-sm leading-relaxed">Sin estética de IA genérica. Cada imagen diseñada para representar su marca con precisión cinematográfica.</p>
            </div>
            <div className="relative w-full flex-1" style={{ minHeight: "160px" }}>
              <FilmFrameIllustration />
            </div>
          </div>

          {/* Card 2 — row-span-2 (rows 1 & 2) */}
          <div
            className={cn("glass-card flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 md:row-span-2", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}
            style={{ transitionDelay: "80ms", background: CARD_BG }}
          >
            <div className="px-5 pt-5 pb-3">
              <h3 className="font-clash text-white font-bold text-lg leading-snug mb-1.5">Video IA de nivel cinematográfico</h3>
              <p className="text-white/50 text-sm leading-relaxed">Producción audiovisual de alto impacto sin presupuesto de rodaje tradicional.</p>
            </div>
            <div className="relative w-full flex-1" style={{ minHeight: "200px" }}>
              <VideoEditorIllustration />
            </div>
          </div>

          {/* Card 3 */}
          <div
            className={cn("glass-card flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}
            style={{ transitionDelay: "160ms", background: CARD_BG, minHeight: "280px" }}
          >
            <div className="px-5 pt-5 pb-3">
              <h3 className="font-clash text-white font-bold text-lg leading-snug mb-1.5">Campañas visuales completas</h3>
              <p className="text-white/50 text-sm leading-relaxed">Desde la concept hasta los archivos listos para publicar. Todo incluido, todo a medida.</p>
            </div>
            <div className="relative w-full flex-1" style={{ minHeight: "130px" }}>
              <CampaignPhotoGrid />
            </div>
          </div>

          {/* Card 4 */}
          <div
            className={cn("glass-card flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}
            style={{ transitionDelay: "240ms", background: CARD_BG, minHeight: "280px" }}
          >
            <div className="px-5 pt-5 pb-3">
              <h3 className="font-clash text-white font-bold text-lg leading-snug mb-1.5">Contenido mensual para redes</h3>
              <p className="text-white/50 text-sm leading-relaxed">Su marca presente cada semana en todos sus canales. Sin esfuerzo de su parte.</p>
            </div>
            <div className="relative w-full flex-1" style={{ minHeight: "130px" }}>
              <SocialPlatformsGrid />
            </div>
          </div>

          {/* Card 5 — col-span-2 */}
          <div
            className={cn("glass-card flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 md:col-span-2", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}
            style={{ transitionDelay: "320ms", background: CARD_BG, minHeight: "220px", maxHeight: "320px" }}
          >
            <div className="px-5 pt-5 pb-2">
              <h3 className="font-clash text-white font-bold leading-snug mb-1" style={{ fontSize: "clamp(0.95rem, 2vw, 1.125rem)" }}>
                Efectos y escenas imposibles de filmar en el mundo real. Solo con IA.
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">Mundos inexistentes, física imposible, atmósferas únicas. Lo que su imaginación concibe, nosotros lo producimos.</p>
            </div>
            <div className="relative w-full flex-1" style={{ minHeight: "120px" }}>
              <SurrealPhotoFill />
            </div>
          </div>

          {/* Pricing card — bottom-right */}
          <div
            className={cn("gradient-border flex flex-col justify-between p-7 transition-all duration-500 hover:-translate-y-1", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}
            style={{ transitionDelay: "400ms", minHeight: "280px" }}
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-violet-400/50 mb-3">Inversión mensual</p>
              <div className="font-clash font-bold gradient-text mb-2" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", lineHeight: 1 }}>
                Desde $500
                <span className="text-lg text-white/40">/mes</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mt-3">
                Contenido mensual. Cancelable en cualquier momento.
              </p>
            </div>
            <Link
              href="/motion"
              className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-600/25"
              style={{ background: "linear-gradient(135deg, #7C3AED, #EA580C)" }}
            >
              Ver planes Studio →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
