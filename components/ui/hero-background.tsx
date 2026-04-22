"use client"

import dynamic from "next/dynamic"

const MeshGradient = dynamic(
  () => import("@paper-design/shaders-react").then(m => ({ default: m.MeshGradient })),
  { ssr: false, loading: () => null }
)

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#000000", "#0a0015", "#FF5500", "#8B00FF"]}
        speed={0.6}
      />

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,100,0,0.45) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
          opacity: 0.10,
        }}
      />
    </div>
  )
}
