"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "¿Cuánto tarda realmente?",
    a: "Trabajamos rápido. Una vez que confirma el diseño, su sitio está live en pocos días hábiles.",
  },
  {
    q: "¿Puedo pedir cambios?",
    a: "Sí, incluimos 2 rondas de revisiones sin costo adicional. Queremos que el resultado le encante.",
  },
  {
    q: "¿Qué necesito para empezar?",
    a: "Solo texto, logo (si tiene) y referencias de diseño. Nosotros nos encargamos del resto.",
  },
  {
    q: "¿El dominio es mío?",
    a: "Sí, el dominio queda registrado a su nombre. Es su propiedad, no la nuestra.",
  },
  {
    q: "¿Funciona en celular?",
    a: "100% responsive, optimizado para mobile-first. Más del 70% del tráfico web es desde el celular.",
  },
  {
    q: "¿Puedo editar el contenido después?",
    a: "Sí, incluimos panel de edición simple. Puede cambiar textos e imágenes usted mismo sin conocimientos técnicos.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
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
            open && "rotate-180 text-violet-400"
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

export default function WebFaq() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-10"
      style={{ background: "#0F0C1E" }}
    >
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
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/40 text-sm mb-4">¿Tiene otra pregunta?</p>
          <a
            href="/contacto"
            className="inline-flex items-center px-6 py-3 rounded-full bg-violet-600 text-white text-sm font-semibold hover:bg-violet-500 transition-all duration-200"
          >
            Escríbanos →
          </a>
        </div>
      </div>
    </section>
  );
}
