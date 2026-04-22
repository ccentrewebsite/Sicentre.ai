"use client"

import dynamic from "next/dynamic"
import { MeshGradient } from "@paper-design/shaders-react"

const HeroCanvas = dynamic(() => import("./hero-canvas"), { ssr: false })

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {/* MeshGradient base layer — orange + violet + black */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#000000", "#0a0015", "#FF5500", "#8B00FF"]}
        speed={0.6}
      />

      {/* Three.js ShaderPlane orbs on top */}
      <HeroCanvas />

      {/* Subtle dot grid — orange tint to match palette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,100,0,0.45) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
          opacity: 0.10,
        }}
      />
    </div>
  )
}
