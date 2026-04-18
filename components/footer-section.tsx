"use client";

import Image from "next/image";

const SantiriaLogoWhite = () => (
  <div>
    <Image
      src="/logos/logo-blanc.svg"
      alt="Santiria"
      width={160}
      height={54}
      className="h-8 w-auto"
    />
  </div>
);

const footerColumns = [
  {
    title: "Navegación",
    links: [
      { label: "Inicio", href: "#" },
      { label: "Servicios", href: "#servicios" },
      { label: "Llamadas IA", href: "#llamadas" },
      { label: "Studio", href: "#studio" },
      { label: "Precios", href: "#precios" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { label: "Diseño Web", href: "#servicios" },
      { label: "Agente de Voz IA", href: "#llamadas" },
      { label: "Studio Visual", href: "#studio" },
      { label: "Plan ULTRA 360", href: "#precios" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "hola@santiria.com", href: "mailto:hola@santiria.com" },
      { label: "WhatsApp +595 981 000 000", href: "https://wa.me/595981000000" },
      { label: "Asunción, Paraguay", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacidad", href: "#" },
      { label: "Términos", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
];

export default function FooterSection() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "#080610" }}
    >
      {/* Subtle glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 30% at 50% 0%, rgba(124,58,237,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <SantiriaLogoWhite />
            <p className="text-white/40 text-sm leading-relaxed max-w-[200px]">
              Agencia digital 360° con IA para América Latina.
            </p>
            <div className="flex items-center gap-3">
              {/* Social icons */}
              <a
                href="https://instagram.com/santiria"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-violet-500/50 transition-all duration-200"
                aria-label="Instagram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/santiria"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-violet-500/50 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://wa.me/595981000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-orange-500/50 transition-all duration-200"
                aria-label="WhatsApp"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <h4
                className="text-white/80 font-semibold text-sm"
                style={{ fontFamily: "'Clash Display', sans-serif" }}
              >
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/40 text-sm hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.07] py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-sm text-center md:text-left">
            © 2026 Santiria. Todos los derechos reservados · Asunción, Paraguay
          </p>
          <p className="text-white/20 text-xs">
            Hecho con IA · Para América Latina
          </p>
        </div>
      </div>
    </footer>
  );
}
