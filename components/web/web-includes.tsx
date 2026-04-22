"use client";

import { useEffect, useRef, useState } from "react";
import { Globe, Server, Shield, Search, Layout, Headphones } from "lucide-react";
import { cn } from "@/lib/utils";

const includes = [
  {
    icon: Globe,
    title: "Dominio propio",
    description: "Su dominio .com o .com.py registrado a su nombre, listo para usar.",
  },
  {
    icon: Server,
    title: "Hosting premium",
    description: "Servidores rápidos con 99.9% uptime. Su sitio siempre disponible.",
  },
  {
    icon: Shield,
    title: "SSL + HTTPS",
    description: "Certificado de seguridad incluido. Su sitio seguro desde el primer día.",
  },
  {
    icon: Search,
    title: "SEO técnico base",
    description: "Estructura optimizada para Google. Meta tags, sitemap y schema markup.",
  },
  {
    icon: Layout,
    title: "Panel de edición",
    description: "Edite textos e imágenes usted mismo sin tocar código.",
  },
  {
    icon: Headphones,
    title: "Soporte 30 días",
    description: "Le acompañamos post-lanzamiento. Respondemos en menos de 24h.",
  },
];

function IncludeCard({ item, index, visible }: { item: typeof includes[0]; index: number; visible: boolean }) {
  const Icon = item.icon;
  const isOrange = index % 3 === 2;

  return (
    <div
      className={cn(
        "group p-6 rounded-2xl backdrop-blur-xl bg-violet-600/[0.06] border border-violet-600/20 transition-all duration-700 hover:bg-violet-600/10 hover:border-violet-500/30",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className={cn(
          "w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110",
          isOrange
            ? "bg-orange-500/15 text-orange-400"
            : "bg-violet-500/15 text-violet-400"
        )}
      >
        <Icon size={20} />
      </div>
      <h3
        className="text-white font-semibold mb-2"
        style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
      >
        {item.title}
      </h3>
      <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
    </div>
  );
}

export default function WebIncludes() {
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
      style={{ background: "#0D0B18" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-6xl font-bold text-white"
            style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif" }}
          >
            Todo lo que necesita,{" "}
            <span className="bg-gradient-to-r from-violet-400 to-orange-400 bg-clip-text text-transparent">
              incluido.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {includes.map((item, i) => (
            <IncludeCard key={item.title} item={item} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
