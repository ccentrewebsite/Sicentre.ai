"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { cn } from "@/lib/utils";

const UnicornBackground = dynamic(
  () =>
    import("@/components/ui/rainbow-matrix-shader").then((m) => ({
      default: m.UnicornBackground,
    })),
  { ssr: false }
);

const SantiriaLogo = ({ className }: { className?: string }) => (
  <div className={cn(className)}>
    <Image
      src="/logos/logo-blanc-couleur.svg"
      alt="Santiria"
      width={160}
      height={54}
      priority
      className="h-9 w-auto"
    />
  </div>
);

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Llamadas IA", href: "#llamadas" },
  { label: "Studio", href: "#studio" },
  { label: "Precios", href: "#precios" },
];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0D0B18]">
      {/* Unicorn animated background */}
      <UnicornBackground />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: "rgba(0,0,0,0.35)" }}
      />

      {/* Fallback gradient for when Unicorn loads */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.25) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 100%, rgba(234,88,12,0.15) 0%, transparent 70%), #0D0B18",
        }}
      />

      {/* ── NAV ── */}
      <nav className="relative z-10 w-full px-6 md:px-10 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <SantiriaLogo />

          {/* Center links — desktop */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="px-4 py-2 text-sm text-white/70 hover:text-white rounded-full hover:bg-white/5 transition-all duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#contacto"
              className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-violet-600 text-white text-sm font-semibold hover:bg-violet-500 transition-all duration-200 shadow-lg shadow-violet-600/20"
            >
              Hablemos
            </a>
            <button
              className="md:hidden p-2 rounded-full bg-white/5 text-white hover:bg-white/10 transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-2 rounded-2xl glass-nav border border-white/10 p-4 z-50">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 pt-2 border-t border-white/10">
                <a
                  href="#contacto"
                  className="block text-center px-4 py-3 rounded-full bg-violet-600 text-white font-semibold hover:bg-violet-500 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Hablemos
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* ── HERO CONTENT ── */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 md:px-10 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-400/80"
              style={{ letterSpacing: "0.2em" }}
            >
              Websites · Llamadas IA · Studio
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.95] mb-6"
            style={{ fontFamily: "'Clash Display', sans-serif" }}
          >
            Tu negocio,{" "}
            <span className="bg-gradient-to-r from-violet-400 via-violet-300 to-orange-400 bg-clip-text text-transparent">
              en otro nivel.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Diseño web, automatización de llamadas con IA y producción visual
            premium — todo desde Asunción para América Latina.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#contacto"
              className="inline-flex items-center px-8 py-4 rounded-full bg-violet-600 text-white font-semibold text-base hover:bg-violet-500 transition-all duration-200 shadow-xl shadow-violet-600/30 hover:shadow-violet-500/40 hover:-translate-y-0.5"
            >
              Hablemos
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-200 hover:-translate-y-0.5"
              style={{
                backdropFilter: "blur(12px)",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(124,58,237,0.3)",
              }}
            >
              Ver servicios
            </a>
          </div>

          {/* Divider line */}
          <div className="flex flex-col items-center gap-4">
            <div className="h-16 w-px bg-gradient-to-b from-white/20 to-transparent" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 pb-8 flex justify-center">
        <div className="animate-bounce text-white/40">
          <ChevronDown size={24} />
        </div>
      </div>
    </section>
  );
}
