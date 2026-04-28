"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const serviceLinks = [
  { label: "Sitios Web",       href: "/web",    desc: "Diseño web a medida" },
  { label: "Agente de Voz IA", href: "/voz-ia", desc: "Atiende llamadas 24/7" },
  { label: "Motion & Content", href: "/motion", desc: "Contenido que vende" },
];

const navLinks = [
  { label: "Precios", href: "/precios" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

interface PageNavProps {
  transparent?: boolean;
}

export default function PageNav({ transparent = true }: PageNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isGlass = transparent && !scrolled;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full px-6 md:px-10 py-4 transition-all duration-300",
        isGlass
          ? "bg-transparent"
          : "bg-[#0D0B18]/90 backdrop-blur-xl border-b border-white/[0.06]"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logos/logo-blanc-couleur.svg"
            alt="Sicentre"
            width={160}
            height={54}
            priority
            className="h-9 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {/* Servicios dropdown */}
          <li className="relative">
            <button
              className="flex items-center gap-1 px-4 py-2 text-sm text-white/70 hover:text-white rounded-full hover:bg-white/5 transition-all duration-200"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Servicios
              <ChevronDown
                size={14}
                className={cn(
                  "transition-transform duration-200",
                  servicesOpen && "rotate-180"
                )}
              />
            </button>

            {servicesOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-56 rounded-2xl backdrop-blur-xl bg-[#0D0B18]/90 border border-white/10 p-2 shadow-2xl shadow-black/40"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                {serviceLinks.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="flex flex-col gap-0.5 px-4 py-3 rounded-xl hover:bg-violet-600/10 transition-all duration-200 group"
                  >
                    <span className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">
                      {s.label}
                    </span>
                    <span className="text-xs text-white/40">{s.desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </li>

          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="px-4 py-2 text-sm text-white/70 hover:text-white rounded-full hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/contacto"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-violet-600 text-white text-sm font-semibold hover:bg-violet-500 transition-all duration-200 shadow-lg shadow-violet-600/25"
          >
            Hablemos
          </Link>
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
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 rounded-2xl bg-[#0D0B18]/95 backdrop-blur-xl border border-white/10 p-4 z-50 shadow-2xl">
          <ul className="flex flex-col gap-1">
            <li>
              <button
                className="w-full text-left flex items-center justify-between px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Servicios
                <ChevronDown
                  size={14}
                  className={cn(
                    "transition-transform duration-200",
                    servicesOpen && "rotate-180"
                  )}
                />
              </button>
              {servicesOpen && (
                <div className="pl-4 flex flex-col gap-1 mt-1">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex items-center justify-between px-4 py-2.5 text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="text-sm">{s.label}</span>
                      <span className="text-xs text-white/30">{s.desc}</span>
                    </Link>
                  ))}
                </div>
              )}
            </li>
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 pt-2 border-t border-white/10">
              <Link
                href="/contacto"
                className="block text-center px-4 py-3 rounded-full bg-violet-600 text-white font-semibold hover:bg-violet-500 transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hablemos
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
