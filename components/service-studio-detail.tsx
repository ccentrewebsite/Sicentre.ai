"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// ── Illustrations ──────────────────────────────────────────────────────────────

function FilmFrameIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute" style={{ width: "260px", height: "180px", background: "radial-gradient(ellipse, rgba(124,58,237,0.45) 0%, transparent 70%)", filter: "blur(32px)", top: "5%", left: "15%" }} />
      <div className="absolute" style={{ width: "200px", height: "160px", background: "radial-gradient(ellipse, rgba(234,88,12,0.35) 0%, transparent 70%)", filter: "blur(28px)", bottom: "0%", right: "10%" }} />

      {/* Frame 1 — back, orange tinted, rotated left */}
      <div className="absolute" style={{
        width: "55%", aspectRatio: "4/3",
        border: "1.5px solid rgba(234,88,12,0.55)", borderRadius: "6px",
        background: "linear-gradient(135deg, rgba(20,8,2,0.92), rgba(30,12,3,0.8))",
        boxShadow: "0 0 28px rgba(234,88,12,0.4), inset 0 0 30px rgba(234,88,12,0.07)",
        transform: "rotate(-9deg) translate(-18%, 10%)", overflow: "hidden", zIndex: 10,
      }}>
        <div className="absolute" style={{ width: "70px", height: "70px", background: "radial-gradient(circle, rgba(251,146,60,0.75) 0%, transparent 70%)", top: "-20px", right: "-10px", filter: "blur(14px)" }} />
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.65 }}>
          {[[18,22,3.5],[44,58,2.5],[72,32,3],[26,72,2.5],[85,22,2],[58,48,4],[80,68,2.5]].map(([cx,cy,r],i) => (
            <circle key={i} cx={`${cx}%`} cy={`${cy}%`} r={r} fill={i%2===0?"rgba(234,88,12,0.8)":"rgba(251,146,60,0.65)"} style={{ filter: `drop-shadow(0 0 ${r+2}px rgba(234,88,12,0.9))` }} />
          ))}
        </svg>
        <div className="absolute top-0 left-0 right-0 flex justify-around px-1.5 pt-0.5">
          {Array.from({length:7}).map((_,i) => <div key={i} style={{ width:"6px", height:"5px", borderRadius:"1px", background:"rgba(234,88,12,0.3)" }} />)}
        </div>
      </div>

      {/* Frame 2 — middle, violet, slight tilt right */}
      <div className="absolute" style={{
        width: "56%", aspectRatio: "4/3",
        border: "1.5px solid rgba(124,58,237,0.65)", borderRadius: "6px",
        background: "linear-gradient(145deg, rgba(10,6,24,0.94), rgba(18,10,40,0.88))",
        boxShadow: "0 0 36px rgba(124,58,237,0.5), inset 0 0 40px rgba(124,58,237,0.09)",
        transform: "rotate(5deg) translate(12%, -10%)", overflow: "hidden", zIndex: 20,
      }}>
        <div className="absolute" style={{ width: "90px", height: "90px", background: "radial-gradient(circle, rgba(167,139,250,0.65) 0%, transparent 70%)", top: "-25px", left: "-15px", filter: "blur(18px)" }} />
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.75 }}>
          {[
            [68.0, 81.2], [14.0, 81.2], [-22.0, 50.0], [14.0, 18.8], [68.0, 18.8], [86.0, 50.0]
          ].map(([x2, y2], i) => (
            <line key={i} x1="50%" y1="50%"
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke={i%2===0?"rgba(124,58,237,0.35)":"rgba(167,139,250,0.25)"} strokeWidth="0.8" strokeDasharray="3 5" />
          ))}
          {[[22,28,4],[58,18,3],[78,58,3.5],[38,68,3],[88,38,2.5],[50,48,5.5]].map(([cx,cy,r],i) => (
            <circle key={i} cx={`${cx}%`} cy={`${cy}%`} r={r} fill={i===5?"rgba(167,139,250,0.8)":i%2===0?"rgba(124,58,237,0.85)":"rgba(139,92,246,0.7)"} style={{ filter: `drop-shadow(0 0 ${r+2}px rgba(124,58,237,1))` }} />
          ))}
        </svg>
        <div className="absolute top-0 left-0 right-0 flex justify-around px-1.5 pt-0.5">
          {Array.from({length:7}).map((_,i) => <div key={i} style={{ width:"6px", height:"5px", borderRadius:"1px", background:"rgba(124,58,237,0.4)" }} />)}
        </div>
      </div>

      {/* Frame 3 — front, portrait, right of center */}
      <div className="absolute" style={{
        width: "38%", aspectRatio: "3/4",
        border: "2px solid rgba(167,139,250,0.82)", borderRadius: "8px",
        background: "linear-gradient(160deg, rgba(12,8,28,0.97), rgba(8,5,20,0.93))",
        boxShadow: "0 0 50px rgba(124,58,237,0.65), 0 12px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)",
        transform: "translate(30%, 2%)", overflow: "hidden", zIndex: 30,
      }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(124,58,237,0.3) 0%, transparent 70%)" }} />
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.95 }}>
          {[[30,22,4.5],[62,38,4],[18,58,3.5],[78,28,3],[45,72,4.5],[82,62,2.5],[55,18,3]].map(([cx,cy,r],i) => (
            <circle key={i} cx={`${cx}%`} cy={`${cy}%`} r={r}
              fill={i%2===0?"rgba(167,139,250,0.95)":"rgba(234,88,12,0.85)"}
              style={{ filter: `drop-shadow(0 0 ${r+3}px ${i%2===0?"rgba(124,58,237,1)":"rgba(234,88,12,0.95)"})` }} />
          ))}
          <circle cx="50%" cy="45%" r="11" fill="rgba(255,255,255,0.92)" style={{ filter: "drop-shadow(0 0 24px rgba(255,255,255,1)) drop-shadow(0 0 50px rgba(124,58,237,0.9)) drop-shadow(0 0 80px rgba(234,88,12,0.5))" }} />
        </svg>
      </div>
    </div>
  );
}

function TimelineIllustration() {
  const tracks: { label: string; clips: { left: number; width: number; color: string; glow: string }[]; keys: { pos: number; color: string }[] }[] = [
    {
      label: "VID",
      clips: [
        { left: 0,  width: 34, color: "rgba(124,58,237,0.80)", glow: "rgba(124,58,237,0.55)" },
        { left: 37, width: 44, color: "rgba(167,139,250,0.65)", glow: "rgba(167,139,250,0.45)" },
        { left: 84, width: 14, color: "rgba(124,58,237,0.72)", glow: "rgba(124,58,237,0.5)" },
      ],
      keys: [{ pos: 10, color: "rgba(167,139,250,0.95)" }, { pos: 54, color: "rgba(167,139,250,0.95)" }, { pos: 85, color: "rgba(167,139,250,0.95)" }],
    },
    {
      label: "MUS",
      clips: [{ left: 0, width: 99, color: "rgba(234,88,12,0.52)", glow: "rgba(234,88,12,0.38)" }],
      keys: [{ pos: 25, color: "rgba(251,146,60,0.95)" }, { pos: 70, color: "rgba(251,146,60,0.95)" }],
    },
    {
      label: "FX",
      clips: [
        { left: 4,  width: 22, color: "rgba(139,92,246,0.70)", glow: "rgba(139,92,246,0.5)" },
        { left: 48, width: 30, color: "rgba(251,146,60,0.60)", glow: "rgba(251,146,60,0.42)" },
        { left: 81, width: 17, color: "rgba(139,92,246,0.65)", glow: "rgba(139,92,246,0.48)" },
      ],
      keys: [{ pos: 15, color: "rgba(167,139,250,0.95)" }, { pos: 62, color: "rgba(251,146,60,0.95)" }, { pos: 90, color: "rgba(167,139,250,0.95)" }],
    },
  ];

  const PLAYHEAD = 22;

  return (
    <div className="relative w-full h-full flex flex-col justify-center overflow-hidden px-3 py-3">
      <div className="absolute" style={{ width: "200px", height: "80px", background: "radial-gradient(ellipse, rgba(124,58,237,0.2) 0%, transparent 70%)", filter: "blur(20px)", bottom: "10%", left: "35%" }} />

      {/* Timecode bar */}
      <div className="relative z-10 flex items-center gap-2 mb-2">
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded" style={{ background: "rgba(0,0,0,0.45)", border: "1px solid rgba(124,58,237,0.3)" }}>
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#EA580C", boxShadow: "0 0 5px rgba(234,88,12,0.9)" }} />
          <span style={{ fontFamily: "monospace", fontSize: "8px", color: "rgba(251,146,60,0.9)", letterSpacing: "0.07em" }}>00:02:14:08</span>
        </div>
        <div className="flex items-center gap-1 ml-auto">
          {(["▶","■","◀▶"] as const).map((icon, i) => (
            <div key={i} className="flex items-center justify-center" style={{ width: "15px", height: "15px", borderRadius: "3px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", fontSize: "5px", color: "rgba(255,255,255,0.4)" }}>{icon}</div>
          ))}
        </div>
      </div>

      {/* Ruler */}
      <div className="relative z-10 flex items-end mb-1 pl-9">
        {Array.from({length:11}).map((_,i) => (
          <div key={i} className="flex flex-col items-center" style={{ flex: 1 }}>
            <span style={{ fontSize: "6px", color: "rgba(255,255,255,0.2)", marginBottom: "1px" }}>{i*10}</span>
            <div style={{ width: "1px", height: i%5===0?"6px":"3px", background: i%5===0?"rgba(255,255,255,0.18)":"rgba(255,255,255,0.08)" }} />
          </div>
        ))}
      </div>

      {/* Track lanes */}
      <div className="relative z-10 flex flex-col gap-1.5">
        {tracks.map((track, ti) => (
          <div key={ti} className="flex items-center gap-2">
            <div style={{ width: "28px", flexShrink: 0, textAlign: "right" }}>
              <span style={{ fontFamily: "monospace", fontSize: "7px", fontWeight: 700, color: "rgba(255,255,255,0.27)", letterSpacing: "0.05em" }}>{track.label}</span>
            </div>
            <div className="relative flex-1 rounded-sm" style={{ height: "20px", background: "rgba(0,0,0,0.38)", border: "1px solid rgba(255,255,255,0.07)" }}>
              {track.clips.map((clip, ci) => (
                <div key={ci} className="absolute inset-y-0.5 rounded-sm overflow-hidden" style={{ left: `${clip.left}%`, width: `${clip.width}%`, background: clip.color, border: "1px solid rgba(255,255,255,0.14)", boxShadow: `inset 0 1px 0 rgba(255,255,255,0.14), 0 0 6px ${clip.glow}` }}>
                  <div className="absolute inset-0" style={{ background: "repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(255,255,255,0.04) 5px, rgba(255,255,255,0.04) 6px)" }} />
                </div>
              ))}
              {track.keys.map((kf, ki) => (
                <div key={ki} className="absolute" style={{ left: `${kf.pos}%`, top: "50%", transform: "translate(-50%,-50%) rotate(45deg)", width: "5px", height: "5px", background: kf.color, boxShadow: `0 0 5px ${kf.color}`, zIndex: 5 }} />
              ))}
              {/* Playhead per lane */}
              <div className="absolute top-0 bottom-0" style={{ left: `${PLAYHEAD}%`, width: "1.5px", background: "rgba(251,146,60,0.9)", boxShadow: "0 0 5px rgba(234,88,12,0.8)", zIndex: 10 }} />
            </div>
          </div>
        ))}
      </div>

      {/* Playhead cap (above ruler) */}
      <div className="absolute" style={{ top: "calc(38% - 2px)", left: `calc(36px + ${PLAYHEAD / 100} * (100% - 44px))`, transform: "translateX(-50%)", width: "9px", height: "9px", background: "#EA580C", clipPath: "polygon(50% 100%, 0% 0%, 100% 0%)", boxShadow: "0 0 8px rgba(234,88,12,0.9)", zIndex: 20 }} />
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

function SocialWavesIllustration() {
  const platforms = [
    { x: "50%", y: "15%", icon: "IG", color: "rgba(167,139,250,0.9)" },
    { x: "82%", y: "48%", icon: "TT", color: "rgba(234,88,12,0.9)" },
    { x: "65%", y: "82%", icon: "FB", color: "rgba(124,58,237,0.9)" },
    { x: "20%", y: "75%", icon: "YT", color: "rgba(251,146,60,0.9)" },
    { x: "12%", y: "38%", icon: "LI", color: "rgba(139,92,246,0.9)" },
  ];
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute" style={{ width: "160px", height: "160px", background: "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", filter: "blur(20px)" }} />
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.3 }}>
        <circle cx="50%" cy="50%" r="35%" fill="none" stroke="rgba(124,58,237,0.5)" strokeWidth="0.7" strokeDasharray="5 4" />
        <circle cx="50%" cy="50%" r="22%" fill="none" stroke="rgba(124,58,237,0.4)" strokeWidth="0.7" />
      </svg>
      <svg className="absolute inset-0 w-full h-full">
        {platforms.map((p, i) => (
          <line key={i} x1="50%" y1="50%" x2={p.x} y2={p.y} stroke={p.color.replace("0.9","0.4")} strokeWidth="1" strokeDasharray="3 5" />
        ))}
      </svg>
      <div className="absolute z-10 flex items-center justify-center" style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "44px", height: "44px", background: "linear-gradient(145deg, #1a0c2e, #0d0b18)", borderRadius: "50%", border: "1.5px solid rgba(124,58,237,0.7)", boxShadow: "0 0 20px rgba(124,58,237,0.5)" }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(167,139,250,0.95)" strokeWidth="1.6" strokeLinecap="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      </div>
      {platforms.map((p, i) => (
        <div key={i} className="absolute z-10 flex items-center justify-center" style={{ top: p.y, left: p.x, transform: "translate(-50%,-50%)", width: "30px", height: "30px", background: "linear-gradient(145deg, #12101e, #0d0b18)", borderRadius: "8px", border: `1.5px solid ${p.color.replace("0.9","0.55")}`, boxShadow: `0 0 10px ${p.color.replace("0.9","0.35")}`, fontSize: "7px", fontWeight: 700, color: p.color, fontFamily: "monospace" }}>
          {p.icon}
        </div>
      ))}
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

// ── Card styles ────────────────────────────────────────────────────────────────

const CARD_BG = "rgba(124,58,237,0.22)";

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
          <h2 className="font-clash text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl mx-auto leading-tight mb-5">
            Contenido que{" "}
            <span className="gradient-text" style={{ filter: "drop-shadow(0 3px 10px rgba(0,0,0,0.7))" }}>detiene el scroll.</span>
          </h2>
          <p className="text-white/55 text-lg max-w-xl mx-auto">
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
              <TimelineIllustration />
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
              <CampaignGridIllustration />
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
              <SocialWavesIllustration />
            </div>
          </div>

          {/* Card 5 — col-span-2 */}
          <div
            className={cn("glass-card flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 md:col-span-2", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}
            style={{ transitionDelay: "320ms", background: CARD_BG, minHeight: "280px" }}
          >
            <div className="px-5 pt-5 pb-3">
              <h3 className="font-clash text-white font-bold leading-snug mb-1.5" style={{ fontSize: "clamp(0.95rem, 2vw, 1.125rem)" }}>
                Efectos y escenas imposibles de filmar en el mundo real. Solo con IA.
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">Mundos inexistentes, física imposible, atmósferas únicas. Lo que su imaginación concibe, nosotros lo producimos.</p>
            </div>
            <div className="relative w-full flex-1" style={{ minHeight: "160px" }}>
              <SurrealIllustration />
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
