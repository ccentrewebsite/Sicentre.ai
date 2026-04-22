"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface StatItem {
  prefix?: string;
  target: number;
  suffix: string;
  label: string;
  isStatic?: boolean;
  staticValue?: string;
  href: string;
}

const stats: StatItem[] = [
  {
    target: 0,
    suffix: "",
    label: "Su agente de voz, siempre activo. Sin descansos, sin ausencias.",
    isStatic: true,
    staticValue: "24/7",
    href: "/voz-ia",
  },
  {
    target: 0,
    suffix: "",
    label: "Personalizado. Ningún sitio igual a otro.",
    isStatic: true,
    staticValue: "100%",
    href: "/web",
  },
  {
    target: 0,
    suffix: "",
    label: "Creatividad sin límites. Video IA, foto IA y campañas visuales a medida.",
    isStatic: true,
    staticValue: "∞",
    href: "/motion",
  },
];

function useCountUp(target: number, duration: number, started: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    if (target === 0) return;

    let startTime: number | null = null;
    let animFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        animFrame = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animFrame);
  }, [target, duration, started]);

  return count;
}

function StatCard({ stat, started }: { stat: StatItem; started: boolean }) {
  const count = useCountUp(stat.target, 1800, started);

  return (
    <div className="flex flex-col items-center text-center px-8 py-6 group">
      <div
        className="text-7xl md:text-8xl font-bold mb-3 bg-gradient-to-r from-violet-400 to-orange-400 bg-clip-text text-transparent tabular-nums"
        style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
      >
        {stat.isStatic ? stat.staticValue : `${count}${stat.suffix}`}
      </div>
      <p className="text-white/60 text-base md:text-lg font-medium mb-5">
        {stat.label}
      </p>
      <Link
        href={stat.href}
        className="text-xs font-semibold text-white/50 hover:text-white/90 tracking-[0.12em] uppercase transition-colors duration-200 border-b border-white/20 hover:border-white/60 pb-0.5"
      >
        Saber más
      </Link>
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            setStarted(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [started]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden planet-section"
    >
      {/* Violet glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(124,58,237,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Dividers between stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}
