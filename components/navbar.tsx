"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { GlassButton } from "@/components/ui/glass-button";
import { LiquidGlassNavButton } from "@/components/ui/liquid-glass-nav";

const serviceDropdown = [
  { label: "Web",    href: "/web",    desc: "Sitios web en 72h" },
  { label: "Voz IA", href: "/voz-ia", desc: "Agente de voz 24/7" },
  { label: "Motion", href: "/motion", desc: "Contenido que vende" },
];

const navLinks = [
  { label: "Precios",  href: "/precios" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [servicesOpen,       setServicesOpen]       = useState(false);
  const [mobileMenuOpen,     setMobileMenuOpen]     = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [visible,            setVisible]            = useState(true);
  const lastScrollY = useRef(0);
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

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const isAtTop = currentY < 20;
      const isScrollingUp = currentY < lastScrollY.current;
      setVisible(isAtTop || isScrollingUp);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] px-5 md:px-8 pt-4 flex items-center justify-center transition-transform duration-300 ease-in-out",
        visible ? "translate-y-0" : "-translate-y-[calc(100%+1.5rem)]"
      )}
    >
      {/* ── Navbar pill ── */}
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
          <Link href="/" className="flex-shrink-0">
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
            className="md:hidden p-2 rounded-full text-white/70 hover:text-white hover:bg-white/8 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Desktop services dropdown — outside pill to bypass stacking context */}
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

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div
            className="md:hidden mt-2 rounded-3xl p-4 shadow-2xl"
            style={{
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              background: "rgba(5,5,8,0.96)",
              border: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            <ul className="flex flex-col gap-1">
              <li>
                <button
                  className="w-full text-left flex items-center justify-between px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-2xl transition-all duration-200"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  Servicios
                  <ChevronDown
                    size={13}
                    className={cn("transition-transform duration-200", mobileServicesOpen && "rotate-180")}
                  />
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4 flex flex-col gap-1 mt-1">
                    {serviceDropdown.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="flex items-center justify-between px-4 py-2.5 text-white/60 hover:text-white hover:bg-white/5 rounded-2xl transition-all"
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
                    className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-2xl transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2 pt-2 border-t border-white/10">
                <GlassButton
                  size="default"
                  className="w-full"
                  onClick={() => { setMobileMenuOpen(false); router.push("/contacto"); }}
                >
                  Hablemos
                </GlassButton>
              </li>
            </ul>
          </div>
        )}
      </nav>

    </div>
  );
}
