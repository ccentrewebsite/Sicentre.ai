"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Mic, Send, Loader2 } from "lucide-react";

const sectors = [
  "Clínica dental",
  "Restaurante",
  "Inmobiliaria",
  "Taller mecánico",
  "Tienda de ropa",
  "Gimnasio",
  "Farmacia",
  "Hotel",
];

export default function VozDemo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [sector, setSector] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);
  const responseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleDemo = async () => {
    if (!sector.trim() || loading) return;
    setLoading(true);
    setStarted(true);
    setResponse("");

    try {
      const res = await fetch("/api/voz-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sector }),
      });

      if (!res.body) throw new Error("No stream");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const text = decoder.decode(value, { stream: true });
        setResponse((prev) => prev + text);
        // Scroll to bottom of response
        if (responseRef.current) {
          responseRef.current.scrollTop = responseRef.current.scrollHeight;
        }
      }
    } catch {
      setResponse(
        "— Hola, le habla Lucía del equipo de atención. ¿En qué le puedo ayudar hoy?\n\n[Demo no disponible — configure su API key de Anthropic para activar la demo en vivo.]"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleDemo();
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-10 planet-section"
      style={{ background: "transparent" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div
          className={cn(
            "text-center mb-12 transition-all duration-700",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-violet-600/10 border border-violet-500/20">
            <Mic size={14} className="text-violet-400" />
            <span className="text-xs font-semibold text-violet-300 tracking-wide">
              Demo en vivo
            </span>
          </div>
          <h2
            className="text-4xl md:text-6xl font-bold text-white mb-4 font-clash"
          >
            Pruébelo{" "}
            <span className="gradient-text">ahora mismo.</span>
          </h2>
          <p className="text-white/55 text-lg max-w-xl mx-auto">
            Ingrese el rubro de su negocio y vea cómo respondería su agente de voz IA a una llamada real.
          </p>
        </div>

        {/* Demo card */}
        <div
          className={cn(
            "glass-card p-8 transition-all duration-700 delay-200",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {/* Quick pick sector badges */}
          <div className="mb-6">
            <p className="text-white/40 text-xs font-medium mb-3 uppercase tracking-wider">
              Sectores populares
            </p>
            <div className="flex flex-wrap gap-2">
              {sectors.map((s) => (
                <button
                  key={s}
                  onClick={() => setSector(s)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200",
                    sector === s
                      ? "bg-violet-600 text-white"
                      : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white border border-white/10"
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="mb-5">
            <label className="block text-white/60 text-sm mb-2 font-medium">
              ¿A qué se dedica su negocio?
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ej: Clínica odontológica, Restaurante italiano, Taller mecánico..."
                className="flex-1 px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 focus:outline-none focus:border-violet-500/50 transition-colors"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              />
              <button
                onClick={handleDemo}
                disabled={loading || !sector.trim()}
                className={cn(
                  "flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200",
                  loading || !sector.trim()
                    ? "bg-violet-700/40 text-white/40 cursor-not-allowed"
                    : "bg-violet-600 text-white hover:bg-violet-500 shadow-lg shadow-violet-600/25 hover:-translate-y-0.5"
                )}
              >
                {loading ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Send size={16} />
                )}
                {loading ? "Generando..." : "Escuchar"}
              </button>
            </div>
          </div>

          {/* Response area */}
          {started && (
            <div className="relative">
              {/* Waveform animation while loading */}
              {loading && (
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-full"
                      style={{
                        width: "3px",
                        height: `${10 + Math.sin(i * 0.8) * 8}px`,
                        background:
                          i % 2 === 0
                            ? "rgba(124,58,237,0.8)"
                            : "rgba(234,88,12,0.6)",
                        animation: `pulse ${0.6 + (i % 4) * 0.15}s ease-in-out infinite`,
                        animationDelay: `${i * 50}ms`,
                      }}
                    />
                  ))}
                  <span className="ml-3 text-white/40 text-xs">
                    Agente conectando...
                  </span>
                </div>
              )}

              <div
                ref={responseRef}
                className="relative rounded-xl p-6 max-h-64 overflow-y-auto"
                style={{
                  background: "rgba(124,58,237,0.06)",
                  border: "1px solid rgba(124,58,237,0.15)",
                }}
              >
                {/* Speaker label */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-violet-600/30 flex items-center justify-center">
                    <Mic size={10} className="text-violet-400" />
                  </div>
                  <span className="text-violet-400 text-xs font-semibold">
                    Agente de Voz IA — {sector}
                  </span>
                </div>

                {response ? (
                  <p className="text-white/80 text-sm leading-relaxed whitespace-pre-wrap">
                    {response}
                    {loading && (
                      <span className="inline-block w-0.5 h-4 bg-violet-400 animate-pulse ml-0.5 align-text-bottom" />
                    )}
                  </p>
                ) : (
                  <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="w-2 h-2 rounded-full bg-violet-500/60 animate-bounce"
                        style={{ animationDelay: `${i * 150}ms` }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* CTA after response */}
              {!loading && response && (
                <div className="mt-5 flex flex-col sm:flex-row items-center gap-3">
                  <p className="text-white/50 text-sm">
                    ¿Quiere este agente para su negocio?
                  </p>
                  <a
                    href="/contacto"
                    className="inline-flex items-center px-6 py-2.5 rounded-full bg-violet-600 text-white text-sm font-semibold hover:bg-violet-500 transition-all duration-200 shadow-lg shadow-violet-600/25"
                  >
                    Solicitar demo →
                  </a>
                </div>
              )}
            </div>
          )}

          {/* Helper text */}
          {!started && (
            <p className="text-white/30 text-xs text-center mt-2">
              Presione Enter o el botón para generar la demo · Powered by Claude AI
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
