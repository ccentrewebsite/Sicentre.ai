"use client";

import { useState, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const serviceDropdown = [
  { label: "Sitios Web",       href: "/web",    desc: "Diseño web a medida" },
  { label: "Agente de Voz IA", href: "/voz-ia", desc: "Atiende llamadas 24/7" },
  { label: "Creación Visual", href: "/motion", desc: "Contenido que vende" },
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
      {/* ── Mobile full-screen overlay ── */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-[90] flex flex-col px-5 pb-8 overflow-y-auto"
          style={{
            paddingTop: "clamp(80px, 20vw, 96px)",
            background: "rgba(4,0,12,0.97)",
            backdropFilter: "blur(40px)",
            WebkitBackdropFilter: "blur(40px)",
          }}
        >
          {/* Service cards */}
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/25 mb-3 px-1">
            Servicios
          </p>
          <div className="grid grid-cols-3 gap-2 mb-8">
            {serviceDropdown.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="flex flex-col gap-1 p-3 rounded-2xl active:scale-95 transition-transform"
                style={{
                  background: "rgba(124,58,237,0.1)",
                  border: "1px solid rgba(124,58,237,0.22)",
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-sm font-bold text-white">{s.label}</span>
                <span className="text-[11px] text-white/40 leading-tight">{s.desc}</span>
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-white/8 mb-4" />

          {/* Main links */}
          <nav className="flex flex-col flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between px-3 py-4 text-xl font-semibold text-white/70 hover:text-white rounded-2xl hover:bg-white/5 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
                <span className="text-white/20">→</span>
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <button
            className="w-full py-4 rounded-full font-bold text-white text-base mt-4"
            style={{ background: "linear-gradient(135deg, #7C3AED, #EA580C)" }}
            onClick={() => { setMobileMenuOpen(false); router.push("/contacto"); }}
          >
            Hablemos →
          </button>
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
