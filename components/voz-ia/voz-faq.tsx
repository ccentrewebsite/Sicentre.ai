"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "¿Habla bien el español rioplatense?",
    a: "Sí, entrenado con acento y modismos rioplatenses. Habla de usted, entiende el contexto paraguayo y rioplatense.",
  },
  {
    q: "¿Puede agendar turnos?",
    a: "Sí, se integra con Google Calendar y otros sistemas de agenda. El cliente reserva su turno en la misma llamada.",
  },
  {
    q: "¿Qué pasa si no sabe responder algo?",
    a: "Escala al humano, toma los datos de contacto del cliente y le notifica por WhatsApp para que usted lo llame.",
  },
  {
    q: "¿Cuánto tarda el setup?",
    a: "5-7 días hábiles desde que nos facilita los datos de su negocio. Incluye entrenamiento y pruebas.",
  },
  {
    q: "¿Puedo escuchar las llamadas?",
    a: "Sí, todas las llamadas se graban y puede acceder al historial completo desde su panel de control.",
  },
  {
    q: "¿Funciona con mi número actual?",
    a: "Sí, no necesita cambiar su número. Redireccionamos las llamadas de su número existente al agente de IA.",
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

export default function VozFaq() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10" style={{ background: "#0F0C1E" }}>
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
          <p className="text-white/40 text-sm mb-4">¿Desea escuchar una demo?</p>
          <a
            href="/contacto"
            className="inline-flex items-center px-6 py-3 rounded-full bg-violet-600 text-white text-sm font-semibold hover:bg-violet-500 transition-all duration-200"
          >
            Hablar con el equipo →
          </a>
        </div>
      </div>
    </section>
  );
}
