"use client";

import { useEffect, useRef, useState } from "react";
import { X, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const problems = [
  "Llamadas sin responder",
  "Leads perdidos",
  "Clientes frustrados",
  "Solo disponible en horario",
];

const solutions = [
  "Responde al instante",
  "Califica automáticamente",
  "Agenda turnos",
  "Disponible 24/7",
];

function AnimatedCounter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function VozProblem() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-10"
      style={{ background: "#0F0C1E" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Stat banner */}
        <div className="text-center mb-16">
          <div className="inline-flex flex-col items-center gap-2 px-8 py-6 rounded-2xl bg-red-500/5 border border-red-500/20">
            <p className="text-5xl md:text-6xl font-bold text-red-400" style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}>
              <AnimatedCounter end={67} suffix="%" />
            </p>
            <p className="text-white/50 text-sm max-w-xs text-center">
              de los clientes no vuelve a llamar si no les atienden la primera vez
            </p>
          </div>
        </div>

        {/* Split layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Problem */}
          <div
            className={cn(
              "p-8 rounded-2xl border transition-all duration-700",
              "bg-red-500/[0.04] border-red-500/20",
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}
          >
            <h3
              className="text-2xl font-bold text-red-400 mb-6"
              style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
            >
              El problema
            </h3>
            <ul className="space-y-4">
              {problems.map((p) => (
                <li key={p} className="flex items-center gap-3 text-white/60">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                    <X size={12} className="text-red-400" />
                  </div>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div
            className={cn(
              "p-8 rounded-2xl border transition-all duration-700",
              "bg-violet-600/[0.06] border-violet-500/20",
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
            style={{ transitionDelay: "150ms" }}
          >
            <h3
              className="text-2xl font-bold text-violet-400 mb-6"
              style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
            >
              La solución
            </h3>
            <ul className="space-y-4">
              {solutions.map((s) => (
                <li key={s} className="flex items-center gap-3 text-white/80">
                  <div className="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center shrink-0">
                    <Check size={12} className="text-violet-400" />
                  </div>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
