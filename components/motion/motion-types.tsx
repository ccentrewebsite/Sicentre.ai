"use client";

import { useState } from "react";
import { Video, Camera, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const types = [
  {
    icon: Video,
    title: "Reels & Video",
    description:
      "Reels para Instagram/TikTok, videos de producto, testimoniales, brand films. Edición cinematográfica, música y motion graphics incluidos.",
    tags: ["Instagram", "TikTok", "YouTube"],
  },
  {
    icon: Camera,
    title: "Fotografía IA",
    description:
      "Fotos de producto, lifestyle, team photos con IA enhancement. Retoque profesional y entrega en todos los formatos.",
    tags: ["Producto", "Lifestyle", "Corporativo"],
  },
  {
    icon: Calendar,
    title: "Content mensual",
    description:
      "Pack completo: reels + fotos + captions + calendario editorial. Un mes de contenido listo para publicar.",
    tags: ["Redes sociales", "Editorial", "360°"],
  },
];

export default function MotionTypes() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 md:py-32 px-6 md:px-10" style={{ background: "#0F0C1E" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-6xl font-bold text-white"
            style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
          >
            ¿Qué producimos?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {types.map((type, i) => {
            const Icon = type.icon;
            const isActive = active === i;

            return (
              <div
                key={type.title}
                onClick={() => setActive(i)}
                className={cn(
                  "p-8 rounded-2xl cursor-pointer transition-all duration-300 group",
                  isActive
                    ? "bg-orange-500/10 border border-orange-500/40 shadow-xl shadow-orange-500/10"
                    : "bg-violet-600/[0.06] border border-violet-600/20 hover:border-orange-500/30"
                )}
              >
                <div
                  className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300",
                    isActive ? "bg-orange-500/20 text-orange-400" : "bg-violet-500/15 text-violet-400 group-hover:bg-orange-500/10 group-hover:text-orange-400"
                  )}
                >
                  <Icon size={26} />
                </div>

                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
                >
                  {type.title}
                </h3>

                <p className="text-white/50 text-sm leading-relaxed mb-5">
                  {type.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {type.tags.map((tag) => (
                    <span
                      key={tag}
                      className={cn(
                        "px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300",
                        isActive
                          ? "bg-orange-500/15 text-orange-300"
                          : "bg-white/5 text-white/40"
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
