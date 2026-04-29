"use client";

import { useState, useEffect, useRef } from "react";
import { Building2, User, Server, Wrench, ShoppingBag, Search, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

type CostItem = {
  id: string;
  label: string;
  detail: string;
  amount: number;
  kind: "once" | "monthly";
  icon: typeof Building2;
};

const COST_ITEMS: CostItem[] = [
  {
    id: "agency",
    label: "Agencia local de diseño web",
    detail: "Sitio a medida · 5-10 páginas",
    amount: 2500,
    kind: "once",
    icon: Building2,
  },
  {
    id: "freelance",
    label: "Freelance desarrollador",
    detail: "Sitio a medida · sin garantías",
    amount: 1500,
    kind: "once",
    icon: User,
  },
  {
    id: "hosting",
    label: "Hosting profesional + dominio",
    detail: "Servidor + SSL + email pro",
    amount: 25,
    kind: "monthly",
    icon: Server,
  },
  {
    id: "maintenance",
    label: "Mantenimiento mensual",
    detail: "Bugs, updates, backups",
    amount: 80,
    kind: "monthly",
    icon: Wrench,
  },
  {
    id: "saas",
    label: "Plataforma SaaS premium",
    detail: "Webflow Pro / Shopify Plus / similar",
    amount: 49,
    kind: "monthly",
    icon: ShoppingBag,
  },
  {
    id: "seo",
    label: "Consultor SEO mensual",
    detail: "Optimización + reportes",
    amount: 300,
    kind: "monthly",
    icon: Search,
  },
];

const VITRINA_ONCE = 500;
const VITRINA_INCLUDES = [
  "Diseño 100% a medida",
  "Hasta 5 páginas",
  "Hosting + dominio + SSL incluidos",
  "Modificaciones vía WhatsApp",
  "SEO básico estructurado",
  "Soporte 30 días post-entrega",
];

function Counter({ value }: { value: number }) {
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

  return <>{Math.round(display).toLocaleString("es-AR")}</>;
}

export default function WebSimulator() {
  const [selected, setSelected] = useState<string[]>(["agency", "hosting", "maintenance"]);
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

  const picked = COST_ITEMS.filter((i) => selected.includes(i.id));
  const oneTime = picked.filter((i) => i.kind === "once").reduce((a, b) => a + b.amount, 0);
  const monthly = picked.filter((i) => i.kind === "monthly").reduce((a, b) => a + b.amount, 0);
  const yearOneTotal = oneTime + monthly * 12;
  const savedYearOne = Math.max(yearOneTotal - VITRINA_ONCE, 0);
  const ratio = yearOneTotal > 0 ? Math.round((yearOneTotal / VITRINA_ONCE) * 10) / 10 : 0;

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-10 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0F0C1E 0%, #0D0B18 100%)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className={cn("text-center mb-12 md:mb-14 transition-all duration-700", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
          <h2 className="font-clash text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Un sitio web a medida en otro lado{" "}
            <span style={{ color: "#A78BFA" }}>cuesta varias veces más.</span>
          </h2>
          <p className="text-white/55 text-base md:text-lg max-w-2xl mx-auto">
            Active los costos típicos de un sitio web profesional en el mercado y compárelos contra <strong className="text-white">Web Vitrina — $500 pago único</strong>, con todo incluido.
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
              Si lo encarga en otro lado
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
                      background: active ? "rgba(124,58,237,0.16)" : "rgba(255,255,255,0.04)",
                      border: `1.5px solid ${active ? "rgba(124,58,237,0.55)" : "rgba(255,255,255,0.08)"}`,
                      boxShadow: active ? "0 0 18px rgba(124,58,237,0.18)" : "none",
                    }}
                    aria-pressed={active}
                  >
                    <span
                      className="inline-flex items-center justify-center w-9 h-9 rounded-xl shrink-0"
                      style={{
                        background: active ? "rgba(124,58,237,0.22)" : "rgba(255,255,255,0.04)",
                        border: `1px solid ${active ? "rgba(124,58,237,0.45)" : "rgba(255,255,255,0.08)"}`,
                      }}
                    >
                      <Icon size={16} style={{ color: active ? "#A78BFA" : "rgba(255,255,255,0.45)" }} strokeWidth={2} />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className={cn("font-semibold text-sm leading-tight", active ? "text-white" : "text-white/65")}>
                        {item.label}
                      </div>
                      <div className="text-xs text-white/40 mt-0.5 truncate">{item.detail}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className={cn("font-bold text-sm tabular-nums", active ? "text-violet-200" : "text-white/40")}>
                        ${item.amount.toLocaleString("es-AR")}
                      </span>
                      <span className="text-[10px] text-white/35 ml-0.5">
                        {item.kind === "once" ? " único" : "/mes"}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Subtotal — first year */}
            <div
              className="px-4 py-4 rounded-2xl"
              style={{
                background: "rgba(124,58,237,0.10)",
                border: "1px solid rgba(124,58,237,0.30)",
              }}
            >
              <div className="flex items-end justify-between gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-violet-300 mb-1">
                    Costo del primer año
                  </p>
                  <p className="text-white/45 text-xs">
                    {selected.length} de {COST_ITEMS.length} activados
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-white font-clash leading-none tabular-nums" style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)" }}>
                    $<Counter value={yearOneTotal} />
                  </span>
                </div>
              </div>
              {(oneTime > 0 || monthly > 0) && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {oneTime > 0 && (
                    <span
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold"
                      style={{
                        background: "rgba(124,58,237,0.18)",
                        border: "1px solid rgba(124,58,237,0.45)",
                        color: "#C4B5FD",
                      }}
                    >
                      <span>+ inicial</span>
                      <span className="tabular-nums text-white text-xs">${oneTime.toLocaleString("es-AR")}</span>
                    </span>
                  )}
                  {monthly > 0 && (
                    <span
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold"
                      style={{
                        background: "rgba(234,88,12,0.16)",
                        border: "1px solid rgba(234,88,12,0.45)",
                        color: "#FED7AA",
                      }}
                    >
                      <span>+ recurrente</span>
                      <span className="tabular-nums text-white text-xs">${monthly.toLocaleString("es-AR")}/mes</span>
                    </span>
                  )}
                </div>
              )}
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

          {/* RIGHT — Web Vitrina */}
          <div
            className="relative rounded-3xl p-6 md:p-7 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(124,58,237,0.32) 0%, rgba(167,139,250,0.18) 100%)",
              border: "1.5px solid rgba(167,139,250,0.50)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.10), 0 24px 60px rgba(124,58,237,0.18)",
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span
                className="inline-flex items-center justify-center w-8 h-8 rounded-lg"
                style={{ background: "rgba(255,255,255,0.12)" }}
              >
                <Globe size={15} className="text-white" strokeWidth={2.2} />
              </span>
              <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-white">
                Web Vitrina · Sicentre
              </p>
            </div>
            <div className="flex items-baseline gap-1.5 mb-1">
              <span className="font-bold text-white font-clash leading-none tabular-nums" style={{ fontSize: "clamp(2rem, 5vw, 2.8rem)" }}>
                ${VITRINA_ONCE}
              </span>
              <span className="text-white/75 text-base">pago único</span>
            </div>
            <p className="text-white/70 text-xs mb-4">El sitio queda suyo · sin suscripciones</p>

            <ul className="flex flex-col gap-1.5 mb-5">
              {VITRINA_INCLUDES.map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs text-white/85">
                  <span className="mt-1 w-1 h-1 rounded-full bg-white/70 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="/precios#planes-web"
              className="block w-full py-3 rounded-full text-center font-bold text-white text-sm transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #7C3AED, #A78BFA)", boxShadow: "0 8px 24px rgba(124,58,237,0.35)" }}
            >
              Ver Web Vitrina →
            </a>
          </div>
        </div>

        {/* Saving callout */}
        <div className={cn("mt-8 md:mt-10 transition-all duration-700 delay-300", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
          {yearOneTotal === 0 ? (
            <p className="text-center text-white/40 text-sm">
              Active al menos un costo para ver la comparación.
            </p>
          ) : yearOneTotal <= VITRINA_ONCE ? (
            <p className="text-center text-white/55 text-sm md:text-base">
              Active más componentes para ver el costo real de un sitio web a medida.
            </p>
          ) : (
            <div
              className="max-w-2xl mx-auto px-5 py-4 rounded-2xl text-center"
              style={{
                background: "rgba(167,139,250,0.10)",
                border: "1px solid rgba(167,139,250,0.30)",
              }}
            >
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-violet-300 mb-1">
                Su ahorro con Web Vitrina
              </p>
              <p className="font-clash font-bold text-white tabular-nums" style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)" }}>
                $<Counter value={savedYearOne} />
                <span className="text-white/55 text-sm font-medium ml-2">en el primer año</span>
              </p>
              <p className="text-white/55 text-xs md:text-sm mt-1.5">
                Hacerlo en otro lado cuesta {ratio}× más que Web Vitrina.
              </p>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-white/25 text-xs mt-6">
          Estimaciones basadas en tarifas promedio del mercado para sitios a medida y suscripciones SaaS profesionales.
        </p>
      </div>
    </section>
  );
}
