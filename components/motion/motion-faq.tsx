"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "¿Cuánto tarda en entregar el contenido?",
    a: "El primer lote se entrega en 5-7 días hábiles. A partir de ese momento, el flujo mensual queda establecido con fechas fijas de entrega.",
  },
  {
    q: "¿Necesito tener estudio o locación?",
    a: "No necesariamente. Trabajamos con locaciones externas, estudios alquilados o producción con IA según el tipo de contenido.",
  },
  {
    q: "¿Puedo pedir cambios en la edición?",
    a: "Sí, incluimos 2 rondas de revisión por pieza. Queremos que el contenido represente perfectamente su marca.",
  },
  {
    q: "¿En qué formatos entregan?",
    a: "Entregamos en todos los formatos: 9:16 para Reels/TikTok, 1:1 para feed, 16:9 para YouTube. Archivos en alta calidad listos para publicar.",
  },
  {
    q: "¿Hacen la publicación en redes también?",
    a: "El plan Marca Completa incluye gestión de publicación. En los demás planes, entregamos el contenido listo para que usted publique.",
  },
  {
    q: "¿Puedo cancelar cuando quiero?",
    a: "Sí, sin penalidades. Los planes mensuales se renuevan mes a mes. Los anuales tienen descuento del 20% pero se facturan por adelantado.",
  },
];

function FAQItem({ faq }: { faq: typeof faqs[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.07]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-white/80 group-hover:text-white font-medium transition-colors pr-4">
          {faq.q}
        </span>
        <ChevronDown
          size={18}
          className={cn(
            "text-white/40 shrink-0 transition-transform duration-300",
            open && "rotate-180 text-orange-400"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-40 pb-5" : "max-h-0"
        )}
      >
        <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
      </div>
    </div>
  );
}

export default function MotionFaq() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10" style={{ background: "transparent" }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2
            className="text-4xl md:text-6xl font-bold text-white"
            style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
          >
            Preguntas frecuentes.
          </h2>
        </div>

        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/40 text-sm mb-4">¿Desea ver ejemplos de nuestro trabajo?</p>
          <a
            href="/contacto"
            className="inline-flex items-center px-6 py-3 rounded-full font-semibold text-sm text-white transition-all duration-200"
            style={{ background: "linear-gradient(135deg, #EA580C, #7C3AED)" }}
          >
            Ver portfolio completo →
          </a>
        </div>
      </div>
    </section>
  );
}
