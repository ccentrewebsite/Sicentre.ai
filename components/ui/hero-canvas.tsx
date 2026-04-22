"use client"

import { Canvas } from "@react-three/fiber"
import { ShaderPlane } from "./background-paper-shaders"

export default function HeroCanvas() {
  return (
    <Canvas
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      camera={{ position: [0, 0, 3], fov: 60 }}
      gl={{ alpha: true, antialias: false }}
    >

      {/* Main violet orb — center, large (black → vivid violet) */}
      <ShaderPlane
        position={[0.2, 0.1, 0]}
        color1="#050008"
        color2="#8B00FF"
        scale={3.2}
      />

      {/* Orange accent — upper right (vivid orange → vivid violet) */}
      <ShaderPlane
        position={[1.3, 0.85, -0.3]}
        color1="#FF5500"
        color2="#9400D3"
        scale={1.8}
      />

      {/* Second orange burst — lower right */}
      <ShaderPlane
        position={[1.0, -0.8, -0.2]}
        color1="#FF6600"
        color2="#FF3300"
        scale={1.2}
      />

      {/* Deep black shadow fill — lower left */}
      <ShaderPlane
        position={[-1.1, -0.7, -0.5]}
        color1="#000000"
        color2="#0a0010"
        scale={2.2}
      />
    </Canvas>
  )
}
