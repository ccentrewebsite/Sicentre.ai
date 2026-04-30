"use client";

import { useEffect, useRef, useState } from "react";
import { X, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const problems = [
  "Llamadas perdidas fuera de horario de oficina",
  "Leads que no se calificaron a tiempo",
  "Agenda mal coordinada y citas que se caen",
  "Costo alto de mantener una recepcionista 8×5",
  "Sin datos ni registros de sus conversaciones",
];

const solutions = [
  "Atiende 24/7, los 365 días del año",
  "Califica cada lead automáticamente",
  "Agenda y confirma citas en tiempo real",
  "Hasta 70% más económico que una recepcionista",
  "Cada llamada registrada, transcripta y analizada",
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
      style={{ background: "transparent" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-12 md:mb-14">
          <h2
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
          >
            Su empresa pierde clientes{" "}
            <span className="text-red-400">cada noche.</span>
          </h2>
          <p className="text-white/55 text-base md:text-lg mt-4 max-w-2xl mx-auto">
            Mientras usted descansa, su competencia responde. Cada llamada sin atender es un cliente que ya no vuelve.
          </p>
        </div>

        {/* Stat banner */}
        <div className="flex justify-center mb-14 md:mb-16">
          <div className="inline-flex flex-col items-center gap-2 px-8 py-6 rounded-2xl bg-red-500/5 border border-red-500/20">
            <p
              className="text-5xl md:text-6xl font-bold text-red-400"
              style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
            >
              <AnimatedCounter end={67} suffix="%" />
            </p>
            <p className="text-white/55 text-sm max-w-xs text-center">
              de los clientes no vuelve a llamar si no se les atiende la primera vez.
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
                <li key={p} className="flex items-start gap-3 text-white/65">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <X size={12} className="text-red-400" />
                  </div>
                  <span className="leading-snug">{p}</span>
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
                <li key={s} className="flex items-start gap-3 text-white/85">
                  <div className="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-violet-400" />
                  </div>
                  <span className="leading-snug">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
