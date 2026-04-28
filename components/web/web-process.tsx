"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Brief",
    description: "Nos cuenta qué necesita. 15 minutos por WhatsApp.",
  },
  {
    number: "02",
    title: "Diseño",
    description: "Le mostramos el diseño en 24h. Lo ajustamos hasta que le encante.",
  },
  {
    number: "03",
    title: "Desarrollo",
    description: "Construimos su sitio con tecnología de última generación.",
  },
  {
    number: "04",
    title: "Lanzamiento",
    description: "Su sitio live rápido. Con hosting, dominio y SSL.",
  },
];

function StepCard({ step, index, visible }: { step: typeof steps[0]; index: number; visible: boolean }) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center text-center transition-all duration-700",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Number badge */}
      <div className="mb-6 w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg bg-gradient-to-br from-violet-600 to-violet-800 shadow-lg shadow-violet-600/30">
        {step.number}
      </div>

      {/* Content */}
      <h3
        className="text-xl font-bold text-white mb-3"
        style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
      >
        {step.title}
      </h3>
      <p className="text-white/55 text-sm leading-relaxed max-w-[200px]">
        {step.description}
      </p>
    </div>
  );
}

export default function WebProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          // Animate line progress
          let start = 0;
          const interval = setInterval(() => {
            start += 2;
            setLineProgress(Math.min(start, 100));
            if (start >= 100) clearInterval(interval);
          }, 20);
        }
      },
      { threshold: 0.2 }
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
        {/* Title */}
        <div className="text-center mb-20">
          <h2
            className="text-4xl md:text-6xl font-bold text-white"
            style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
          >
            Así trabajamos.
          </h2>
        </div>

        {/* Steps grid */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-white/10">
            <div
              className="h-full bg-gradient-to-r from-violet-500 to-orange-500 transition-all duration-1000 ease-out"
              style={{ width: `${lineProgress}%` }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} visible={visible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
