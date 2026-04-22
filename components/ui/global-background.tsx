"use client"

import { MeshGradient } from "@paper-design/shaders-react"

export function GlobalBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    >
      <MeshGradient
        className="w-full h-full"
        colors={["#000000", "#050008", "#CC3300", "#7700BB"]}
        speed={0.35}
        distortion={0.4}
        swirl={0.15}
      />
    </div>
  )
}
