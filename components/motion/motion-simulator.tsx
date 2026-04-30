"use client";

import { useState, useEffect, useRef } from "react";
import { Palette, Users, Video, Camera, Sparkles, Brush, Wand2 } from "lucide-react";
import { cn } from "@/lib/utils";

type CostItem = {
  id: string;
  label: string;
  detail: string;
  monthly: number;
  icon: typeof Palette;
};

const COST_ITEMS: CostItem[] = [
  {
    id: "designer",
    label: "Diseñador gráfico",
    detail: "In-house o freelance · 30h/mes",
    monthly: 1000,
    icon: Palette,
  },
  {
    id: "cm",
    label: "Community manager",
    detail: "Planning, copy, publicación",
    monthly: 700,
    icon: Users,
  },
  {
    id: "video",
    label: "Editor de video / motion",
    detail: "Reels, edición, color grading",
    monthly: 900,
    icon: Video,
  },
  {
    id: "photo",
    label: "Sesión de fotografía mensual",
    detail: "Producto + lifestyle",
    monthly: 500,
    icon: Camera,
  },
  {
    id: "higgsfield",
    label: "Higgsfield AI Pro",
    detail: "Generación de video con IA",
    monthly: 129,
    icon: Wand2,
  },
  {
    id: "midjourney",
    label: "Midjourney + ChatGPT Plus",
    detail: "Imágenes IA + redacción",
    monthly: 50,
    icon: Sparkles,
  },
  {
    id: "adobe",
    label: "Adobe Creative Cloud",
    detail: "Photoshop, Premiere, Illustrator",
    monthly: 60,
    icon: Brush,
  },
];

const STUDIO_STARTER = 500;
const STUDIO_INCLUDES = [
  "4 reels mensuales producidos",
  "10 fotos de producto / lifestyle",
  "Caption + hashtags optimizados",
  "Formato para todas las redes",
  "1 revisión por entrega",
];

function Counter({ value, prefix = "" }: { value: number; prefix?: string }) {
  const [display, setDisplay] = useState(0);
  const prev = useRef(0);

  useEffect(() => {
    const from = prev.current;
    const to = value;
    prev.current = to;
    if (from === to) return;
    const duration = 700;
    const start = performance.now();
    const raf = (ts: number) => {
      const p = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setDisplay(from + (to - from) * ease);
      if (p < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [value]);

  return <>{prefix}{Math.round(display).toLocaleString("es-AR")}</>;
}

export default function MotionSimulator() {
  const [selected, setSelected] = useState<string[]>(["designer", "cm", "higgsfield"]);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggle = (id: string) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  const monthlyTotal = COST_ITEMS.filter((i) => selected.includes(i.id)).reduce((a, b) => a + b.monthly, 0);
  const monthlySaved = Math.max(monthlyTotal - STUDIO_STARTER, 0);
  const annualSaved = monthlySaved * 12;
  const ratio = monthlyTotal > 0 ? Math.round((monthlyTotal / STUDIO_STARTER) * 10) / 10 : 0;

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-10 overflow-hidden"
      style={{ background: "transparent" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className={cn("text-center mb-12 md:mb-14 transition-all duration-700", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
          <h2 className="font-clash text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Producir su contenido por su cuenta{" "}
            <span style={{ color: "#FB923C" }}>cuesta más de lo que cree.</span>
          </h2>
          <p className="text-white/55 text-base md:text-lg max-w-2xl mx-auto">
            Active los roles y suscripciones que necesitaría para producir contenido a un nivel similar. Compare en tiempo real contra <strong className="text-white">Studio Starter — $500/mes</strong>.
          </p>
        </div>

        {/* Comparator grid */}
        <div className={cn("grid grid-cols-1 lg:grid-cols-[1fr_auto_360px] gap-6 lg:gap-5 items-start transition-all duration-700 delay-150", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
          {/* LEFT — toggleable cost items */}
          <div
            className="rounded-3xl p-5 md:p-6"
            style={{
              background: "rgba(20,16,38,0.55)",
              border: "1px solid rgba(255,255,255,0.14)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 24px 60px rgba(0,0,0,0.35)",
            }}
          >
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-white/55 mb-4">
              Si lo hace por su cuenta
            </p>

            <div className="flex flex-col gap-2.5 mb-5">
              {COST_ITEMS.map((item) => {
                const active = selected.includes(item.id);
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => toggle(item.id)}
                    className="text-left flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 active:scale-[0.99]"
                    style={{
                      background: active ? "rgba(234,88,12,0.16)" : "rgba(255,255,255,0.04)",
                      border: `1.5px solid ${active ? "rgba(234,88,12,0.55)" : "rgba(255,255,255,0.08)"}`,
                      boxShadow: active ? "0 0 18px rgba(234,88,12,0.18)" : "none",
                    }}
                    aria-pressed={active}
                  >
                    <span
                      className="inline-flex items-center justify-center w-9 h-9 rounded-xl shrink-0"
                      style={{
                        background: active ? "rgba(234,88,12,0.22)" : "rgba(255,255,255,0.04)",
                        border: `1px solid ${active ? "rgba(234,88,12,0.45)" : "rgba(255,255,255,0.08)"}`,
                      }}
                    >
                      <Icon size={16} style={{ color: active ? "#FB923C" : "rgba(255,255,255,0.45)" }} strokeWidth={2} />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className={cn("font-semibold text-sm leading-tight", active ? "text-white" : "text-white/65")}>
                        {item.label}
                      </div>
                      <div className="text-xs text-white/40 mt-0.5 truncate">{item.detail}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className={cn("font-bold text-sm tabular-nums", active ? "text-orange-300" : "text-white/40")}>
                        ${item.monthly.toLocaleString("es-AR")}
                      </span>
                      <span className="text-[10px] text-white/35 ml-0.5">/mes</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Subtotal */}
            <div
              className="flex items-end justify-between gap-3 px-4 py-4 rounded-2xl"
              style={{
                background: "rgba(234,88,12,0.10)",
                border: "1px solid rgba(234,88,12,0.30)",
              }}
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-orange-300 mb-1">
                  Su costo mensual
                </p>
                <p className="text-white/45 text-xs">
                  {selected.length} de {COST_ITEMS.length} activados
                </p>
              </div>
              <div className="text-right">
                <span className="font-bold text-white font-clash leading-none tabular-nums" style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)" }}>
                  $<Counter value={monthlyTotal} />
                </span>
                <span className="text-white/55 text-sm ml-1">/mes</span>
              </div>
            </div>
          </div>

          {/* MIDDLE — vs */}
          <div className="hidden lg:flex items-center justify-center pt-10">
            <span
              className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/40 px-3 py-1.5 rounded-full"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              vs
            </span>
          </div>

          {/* RIGHT — Studio Starter */}
          <div
            className="relative rounded-3xl p-6 md:p-7 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(234,88,12,0.32) 0%, rgba(124,58,237,0.18) 100%)",
              border: "1.5px solid rgba(234,88,12,0.45)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.10), 0 24px 60px rgba(234,88,12,0.18)",
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span
                className="inline-flex items-center justify-center w-8 h-8 rounded-lg"
                style={{ background: "rgba(255,255,255,0.12)" }}
              >
                <Video size={15} className="text-white" strokeWidth={2.2} />
              </span>
              <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-white">
                Studio Starter · Sicentre
              </p>
            </div>
            <div className="flex items-baseline gap-1.5 mb-1">
              <span className="text-xs text-white/65 font-medium">desde</span>
              <span className="font-bold text-white font-clash leading-none tabular-nums" style={{ fontSize: "clamp(2rem, 5vw, 2.8rem)" }}>
                ${STUDIO_STARTER}
              </span>
              <span className="text-white/75 text-base">/mes</span>
            </div>
            <p className="text-white/70 text-xs mb-4">Todo incluido · sin contratar a nadie</p>

            <ul className="flex flex-col gap-1.5 mb-5">
              {STUDIO_INCLUDES.map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs text-white/85">
                  <span className="mt-1 w-1 h-1 rounded-full bg-white/70 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="/precios#planes-studio"
              className="block w-full py-3 rounded-full text-center font-bold text-white text-sm transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #EA580C, #7C3AED)", boxShadow: "0 8px 24px rgba(234,88,12,0.35)" }}
            >
              Ver Studio Starter →
            </a>
          </div>
        </div>

        {/* Saving callout */}
        <div className={cn("mt-8 md:mt-10 transition-all duration-700 delay-300", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
          {monthlyTotal === 0 ? (
            <p className="text-center text-white/40 text-sm">
              Active al menos un rol o suscripción para ver la comparación.
            </p>
          ) : monthlyTotal <= STUDIO_STARTER ? (
            <p className="text-center text-white/55 text-sm md:text-base">
              Active más roles para ver el ahorro real al producir todo el contenido por su cuenta.
            </p>
          ) : (
            <div
              className="max-w-2xl mx-auto px-5 py-4 rounded-2xl text-center"
              style={{
                background: "rgba(124,58,237,0.10)",
                border: "1px solid rgba(124,58,237,0.30)",
              }}
            >
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-violet-300 mb-1">
                Su ahorro con Studio Starter
              </p>
              <p className="font-clash font-bold text-white tabular-nums" style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)" }}>
                $<Counter value={monthlySaved} />/mes
                <span className="text-white/45 text-sm font-medium ml-2">·</span>
                <span className="text-violet-200 text-sm md:text-base font-semibold ml-2">
                  $<Counter value={annualSaved} />/año
                </span>
              </p>
              <p className="text-white/55 text-xs md:text-sm mt-1.5">
                Producirlo por su cuenta cuesta {ratio}× más que Studio Starter.
              </p>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-white/25 text-xs mt-6">
          Estimaciones basadas en salarios y suscripciones de mercado. Higgsfield AI Pro a $129/mes (tarifa pública 2026).
        </p>
      </div>
    </section>
  );
}
