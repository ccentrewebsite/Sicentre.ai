"use client";

import { useState, useRef } from "react";
import { ChevronDown, Menu, X, Globe, Mic, Film } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const serviceDropdown = [
  { label: "Sitios Web",       href: "/web",    desc: "Diseño web a medida",    icon: Globe, accent: "#7C3AED", accentSoft: "rgba(124,58,237,0.18)" },
  { label: "Agente de Voz IA", href: "/voz-ia", desc: "Atiende llamadas 24/7",  icon: Mic,   accent: "#EA580C", accentSoft: "rgba(234,88,12,0.18)" },
  { label: "Creación Visual",  href: "/motion", desc: "Contenido que vende",    icon: Film,  accent: "#A78BFA", accentSoft: "rgba(167,139,250,0.18)" },
];

const navLinks = [
  { label: "Precios",  href: "/precios" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [servicesOpen,       setServicesOpen]       = useState(false);
  const [mobileMenuOpen,     setMobileMenuOpen]     = useState(false);
  const servicesTriggerRef = useRef<HTMLLIElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const [dropdownLeft, setDropdownLeft] = useState(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (servicesTriggerRef.current && navRef.current) {
      const triggerRect = servicesTriggerRef.current.getBoundingClientRect();
      const navRect = navRef.current.getBoundingClientRect();
      setDropdownLeft(triggerRect.left - navRect.left);
    }
    setServicesOpen(true);
  };

  const closeServices = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };
  const router = useRouter();

  return (
    <>
      {/* ── Mobile full-screen overlay — premium liquid glass ── */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-[90] overflow-y-auto animate-mobile-menu-in"
          style={{
            background:
              "linear-gradient(180deg, #08051A 0%, #0D0B22 50%, #0A0716 100%)",
          }}
        >
          {/* Ambient violet glow — top */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: "min(120vw, 720px)",
              height: "420px",
              top: "-180px",
              left: "50%",
              transform: "translateX(-50%)",
              background:
                "radial-gradient(ellipse, rgba(124,58,237,0.30) 0%, transparent 70%)",
              filter: "blur(70px)",
            }}
          />
          {/* Ambient orange glow — bottom right */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: "min(90vw, 520px)",
              height: "320px",
              bottom: "-120px",
              right: "-80px",
              background:
                "radial-gradient(ellipse, rgba(234,88,12,0.22) 0%, transparent 70%)",
              filter: "blur(70px)",
            }}
          />
          {/* Subtle dot grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              opacity: 0.7,
            }}
          />

          <div
            className="relative flex flex-col min-h-full px-5 pb-10"
            style={{ paddingTop: "clamp(96px, 22vw, 112px)" }}
          >
            {/* Section label */}
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/40 mb-4 px-1">
              Servicios
            </p>

            {/* Service cards — 1 col, premium liquid glass with accent */}
            <div className="flex flex-col gap-3 mb-8">
              {serviceDropdown.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group relative flex items-center gap-4 px-4 py-4 rounded-2xl overflow-hidden active:scale-[0.98] transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.045)",
                      border: `1px solid ${s.accentSoft}`,
                      backdropFilter: "blur(22px)",
                      WebkitBackdropFilter: "blur(22px)",
                      boxShadow:
                        "inset 0 1px 0 rgba(255,255,255,0.07), 0 8px 24px rgba(0,0,0,0.25)",
                      animationDelay: `${80 + i * 70}ms`,
                    }}
                  >
                    {/* Accent glow corner */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -top-8 -right-8 w-32 h-32 rounded-full"
                      style={{
                        background: `radial-gradient(circle, ${s.accentSoft} 0%, transparent 70%)`,
                        filter: "blur(20px)",
                      }}
                    />
                    {/* Icon badge */}
                    <span
                      className="relative inline-flex items-center justify-center w-11 h-11 rounded-xl shrink-0"
                      style={{
                        background: s.accentSoft,
                        border: `1px solid ${s.accent}55`,
                        boxShadow: `0 0 18px ${s.accentSoft}`,
                      }}
                    >
                      <Icon size={18} style={{ color: s.accent }} strokeWidth={2} />
                    </span>
                    {/* Text */}
                    <span className="relative flex-1 flex flex-col">
                      <span className="text-base font-bold text-white leading-tight">
                        {s.label}
                      </span>
                      <span className="text-xs text-white/45 leading-tight mt-0.5">
                        {s.desc}
                      </span>
                    </span>
                    {/* Arrow */}
                    <span
                      className="relative text-white/30 group-active:translate-x-0.5 transition-transform"
                      style={{ color: s.accent }}
                    >
                      →
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Divider */}
            <div
              className="h-px mb-4"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 50%, transparent 100%)",
              }}
            />

            {/* Main links */}
            <nav className="flex flex-col flex-1 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-4 text-lg font-semibold text-white/75 active:text-white rounded-xl active:bg-white/5 transition-all"
                >
                  {link.label}
                  <span className="text-white/25">→</span>
                </Link>
              ))}
            </nav>

            {/* CTA — orange highlighted, mirror of hero Hablemos */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                router.push("/contacto");
              }}
              className="relative overflow-hidden w-full py-4 rounded-full font-bold text-white text-base mt-6 active:scale-[0.98] transition-transform"
              style={{
                background:
                  "linear-gradient(135deg, #F97316 0%, #EA580C 50%, #C2410C 100%)",
                boxShadow:
                  "0 14px 40px rgba(234,88,12,0.45), 0 0 0 1px rgba(255,255,255,0.15) inset, 0 -2px 8px rgba(0,0,0,0.25) inset",
              }}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-6 top-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)",
                }}
              />
              <span className="relative">Hablemos →</span>
            </button>
          </div>
        </div>
      )}

      {/* ── Navbar pill — always visible ── */}
      <div className="fixed top-0 left-0 right-0 z-[100] px-5 md:px-8 pt-4 flex items-center justify-center">
        <nav ref={navRef} className="w-full max-w-2xl relative">
          <div
            className="flex items-center gap-8 px-5 md:px-6 h-[62px] rounded-full"
            style={{
              background: "rgba(255,255,255,0.055)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              border: "1px solid rgba(255,255,255,0.11)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.09), inset 0 -1px 0 rgba(0,0,0,0.18), 0 8px 40px rgba(0,0,0,0.35)",
            }}
          >
            {/* Logo */}
            <Link href="/" className="flex-shrink-0" onClick={() => setMobileMenuOpen(false)}>
              <img
                src="/logos/logo-blanc-couleur.svg"
                alt="Sicentre"
                className="h-9 w-auto"
              />
            </Link>

            {/* Center links — desktop */}
            <ul className="hidden md:flex items-center gap-10 ml-auto">
              <li
                ref={servicesTriggerRef}
                onMouseEnter={openServices}
                onMouseLeave={closeServices}
              >
                <button
                  className="flex items-center gap-1 px-4 py-2 text-sm text-white/65 hover:text-white rounded-full hover:bg-white/7 transition-all duration-200"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  Servicios
                  <ChevronDown
                    size={13}
                    className={cn("transition-transform duration-200", servicesOpen && "rotate-180")}
                  />
                </button>
              </li>

              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-sm text-white/65 hover:text-white rounded-full hover:bg-white/7 transition-all duration-200 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile burger */}
            <button
              className="md:hidden ml-auto p-2 rounded-full text-white/70 hover:text-white transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Desktop services dropdown */}
          {servicesOpen && (
            <div
              className="hidden md:block absolute top-[70px] w-56 z-[200]"
              style={{ left: dropdownLeft }}
              onMouseEnter={openServices}
              onMouseLeave={closeServices}
            >
              <div
                className="rounded-2xl p-2"
                style={{
                  backdropFilter: "blur(60px) saturate(200%) brightness(0.65)",
                  WebkitBackdropFilter: "blur(60px) saturate(200%) brightness(0.65)",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18), 0 8px 32px rgba(0,0,0,0.4)",
                }}
              >
                {serviceDropdown.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="flex flex-col gap-0.5 px-4 py-3 rounded-xl hover:bg-white/8 transition-all duration-200 group"
                  >
                    <span className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">
                      {s.label}
                    </span>
                    <span className="text-xs text-white/40">{s.desc}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}
