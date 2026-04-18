"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
  prefix?: string;
  target: number;
  suffix: string;
  label: string;
  isStatic?: boolean;
  staticValue?: string;
}

const stats: StatItem[] = [
  {
    target: 72,
    suffix: "h",
    label: "Entrega del sitio web",
  },
  {
    target: 0,
    suffix: "",
    label: "Disponible para tus clientes",
    isStatic: true,
    staticValue: "24/7",
  },
  {
    target: 360,
    suffix: "°",
    label: "Solución digital completa",
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
        style={{ fontFamily: "'Clash Display', sans-serif" }}
      >
        {stat.isStatic ? stat.staticValue : `${count}${stat.suffix}`}
      </div>
      <p className="text-white/60 text-base md:text-lg font-medium">
        {stat.label}
      </p>
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
      className="relative py-24 overflow-hidden"
      style={{ background: "#0D0B18" }}
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
