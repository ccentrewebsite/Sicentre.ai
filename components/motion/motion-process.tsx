"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const steps = [
  { number: "01", label: "Brief" },
  { number: "02", label: "Guión" },
  { number: "03", label: "Producción" },
  { number: "04", label: "Edición" },
  { number: "05", label: "Entrega + Publicación" },
];

export default function MotionProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          let p = 0;
          const iv = setInterval(() => {
            p += 2;
            setLineProgress(Math.min(p, 100));
            if (p >= 100) clearInterval(iv);
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
      style={{ background: "#0D0B18" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2
            className="text-4xl md:text-6xl font-bold text-white"
            style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
          >
            Del brief al feed.
          </h2>
        </div>

        {/* Desktop: horizontal */}
        <div className="hidden md:block relative">
          {/* Line */}
          <div className="absolute top-6 left-[5%] right-[5%] h-px bg-white/10">
            <div
              className="h-full bg-gradient-to-r from-orange-500 to-violet-500 transition-all duration-1000 ease-out"
              style={{ width: `${lineProgress}%` }}
            />
          </div>

          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={cn(
                  "flex flex-col items-center text-center transition-all duration-700",
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                )}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center font-bold text-sm bg-gradient-to-br from-orange-500 to-violet-600 text-white shadow-lg">
                  {step.number}
                </div>
                <span className="text-white/70 text-sm font-medium">{step.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden relative pl-8">
          {/* Vertical line */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-white/10">
            <div
              className="w-full bg-gradient-to-b from-orange-500 to-violet-500 transition-all duration-1000 ease-out"
              style={{ height: `${lineProgress}%` }}
            />
          </div>

          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={cn(
                  "flex items-center gap-4 transition-all duration-700",
                  visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                )}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="absolute left-0 w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold bg-gradient-to-br from-orange-500 to-violet-600 text-white">
                  {i + 1}
                </div>
                <span className="text-white/70 text-base font-medium">{step.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
