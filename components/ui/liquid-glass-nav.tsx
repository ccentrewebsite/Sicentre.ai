"use client";

import React, { useState } from "react";

// SVG filter — inclure une seule fois dans le layout
export const LiquidGlassFilter: React.FC = () => (
  <svg style={{ display: "none" }} aria-hidden>
    {/* Filtre panel — distorsion liquid glass pour menus */}
    <filter id="glass-distortion-panel" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox">
      <feTurbulence type="fractalNoise" baseFrequency="0.006 0.012" numOctaves="2" seed="9" result="turbulence" />
      <feGaussianBlur in="turbulence" stdDeviation="1.5" result="softMap" />
      <feSpecularLighting in="softMap" surfaceScale="5" specularConstant="1.4" specularExponent="70" lightingColor="white" result="specLight">
        <fePointLight x="50" y="-80" z="200" />
      </feSpecularLighting>
      <feComposite in="specLight" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litImage" />
      <feDisplacementMap in="SourceGraphic" in2="softMap" scale="140" xChannelSelector="R" yChannelSelector="G" />
    </filter>
    <filter
      id="glass-distortion"
      x="0%"
      y="0%"
      width="100%"
      height="100%"
      filterUnits="objectBoundingBox"
    >
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.0012 0.006"
        numOctaves="1"
        seed="17"
        result="turbulence"
      />
      <feComponentTransfer in="turbulence" result="mapped">
        <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
        <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
        <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
      </feComponentTransfer>
      <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
      <feSpecularLighting
        in="softMap"
        surfaceScale="4"
        specularConstant="1.2"
        specularExponent="80"
        lightingColor="white"
        result="specLight"
      >
        <fePointLight x="-100" y="-150" z="250" />
      </feSpecularLighting>
      <feComposite
        in="specLight"
        operator="arithmetic"
        k1="0"
        k2="1"
        k3="1"
        k4="0"
        result="litImage"
      />
      <feDisplacementMap
        in="SourceGraphic"
        in2="softMap"
        scale="160"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  </svg>
);

interface LiquidGlassNavButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  as?: "button" | "div";
}

// Wrapper liquid glass pour boutons navbar
export const LiquidGlassNavButton = React.forwardRef<
  HTMLButtonElement,
  LiquidGlassNavButtonProps
>(({ children, onClick, className = "", as = "button" }, ref) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const inner = (
    <div
      className={`group relative overflow-hidden rounded-full cursor-pointer select-none
        transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,2.2)]
        hover:scale-[1.04] active:scale-[0.97] ${className}`}
      style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.3), 0 1px 3px rgba(0,0,0,0.2)" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Layer 1 : distorsion + flou backdrop */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          filter: "url(#glass-distortion)",
          isolation: "isolate",
        }}
      />

      {/* Layer 2 : teinte sombre violette */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(124,58,237,0.10) 50%, rgba(255,255,255,0.05) 100%)",
        }}
      />

      {/* Layer 3 : reflet de bord (rim light) */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          boxShadow:
            "inset 1.5px 1.5px 1px rgba(255,255,255,0.35), inset -1px -1px 1px rgba(255,255,255,0.12)",
        }}
      />

      {/* Layer 4 : lueur qui suit la souris */}
      <div
        className="pointer-events-none absolute inset-0 rounded-full transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(80px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.18), transparent 70%)`,
        }}
      />

      {/* Contenu */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">{children}</div>
    </div>
  );

  if (as === "div") return inner;

  return (
    <button ref={ref} onClick={onClick} className="rounded-full">
      {inner}
    </button>
  );
});
LiquidGlassNavButton.displayName = "LiquidGlassNavButton";
