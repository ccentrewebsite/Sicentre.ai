"use client";

import { useEffect, useState } from "react";
import { Play } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

const floatingTags = ["#reels", "#fotografía", "#branding", "#tiktok", "#content"];

export default function MotionHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      <div className="relative z-10 flex-1 flex items-center justify-center px-6 md:px-10 pt-24 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20">
            <span className="text-xs font-semibold text-orange-300 tracking-wide">
              Producción visual premium
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-6xl md:text-8xl font-bold text-white leading-[0.95] mb-6"
            style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
          >
            Contenido que{" "}
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-fuchsia-400 bg-clip-text text-transparent">
              vende.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Video cinematográfico, fotografía IA y content mensual para redes.
            Producción de nivel internacional desde Asunción.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base text-white transition-all duration-200 shadow-xl hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #EA580C, #c2410c)" }}
            >
              <Play size={16} fill="currentColor" />
              Ver showreel
            </a>
            <LiquidButton
              size="xl"
              className="text-white border border-violet-500/30 rounded-full"
              onClick={() =>
                document.querySelector("#planes-motion")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Ver planes
            </LiquidButton>
          </div>

          {/* Floating tags */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {floatingTags.map((tag, i) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full text-sm font-medium text-white/60 backdrop-blur-xl bg-white/[0.04] border border-white/10 animate-pulse"
                style={{ animationDelay: `${i * 200}ms`, animationDuration: "3s" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
