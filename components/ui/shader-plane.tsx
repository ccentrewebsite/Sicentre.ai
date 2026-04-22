"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

const vertexShader = `
  uniform float time;
  uniform float intensity;
  varying vec2 vUv;
  varying vec3 vPosition;

  void main() {
    vUv = uv;
    vPosition = position;

    vec3 pos = position;
    pos.y += sin(pos.x * 10.0 + time) * 0.1 * intensity;
    pos.x += cos(pos.y * 8.0  + time * 1.5) * 0.05 * intensity;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

const fragmentShader = `
  uniform float time;
  uniform float intensity;
  uniform vec3  color1;
  uniform vec3  color2;
  varying vec2  vUv;
  varying vec3  vPosition;

  void main() {
    vec2 uv = vUv;

    float noise  = sin(uv.x * 20.0 + time)       * cos(uv.y * 15.0 + time * 0.8);
    noise       += sin(uv.x * 35.0 - time * 2.0) * cos(uv.y * 25.0 + time * 1.2) * 0.5;

    vec3 color = mix(color1, color2, noise * 0.5 + 0.5);
    // Keep white-mix very low to avoid blowout
    color = mix(color, vec3(1.0), pow(abs(noise), 2.0) * intensity * 0.12);

    float glow = 1.0 - length(uv - 0.5) * 2.0;
    glow = pow(max(glow, 0.0), 2.0);

    // Reinhard tone-map before output
    color = color / (color + vec3(0.7));

    gl_FragColor = vec4(color * glow, glow * 0.88);
  }
`

export function ShaderPlane({
  position,
  color1 = "#1a0533",
  color2 = "#7C3AED",
  scale  = 1,
}: {
  position: [number, number, number]
  color1?: string
  color2?: string
  scale?: number
}) {
  const mesh = useRef<THREE.Mesh>(null)

  const uniforms = useMemo(
    () => ({
      time:      { value: 0 },
      intensity: { value: 0.6 },
      color1:    { value: new THREE.Color(color1) },
      color2:    { value: new THREE.Color(color2) },
    }),
    [color1, color2],
  )

  useFrame((state) => {
    if (!mesh.current) return
    // × 0.25 → "mode détente"
    uniforms.time.value      = state.clock.elapsedTime * 0.25
    uniforms.intensity.value = 0.6 + Math.sin(state.clock.elapsedTime * 0.4) * 0.15
  })

  return (
    <mesh ref={mesh} position={position} scale={scale}>
      <planeGeometry args={[2, 2, 32, 32]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

export function EnergyRing({
  radius   = 1,
  position = [0, 0, 0] as [number, number, number],
  color    = "#7C3AED",
}: {
  radius?:   number
  position?: [number, number, number]
  color?:    string
}) {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.z = state.clock.elapsedTime * 0.18
    ;(mesh.current.material as THREE.MeshBasicMaterial).opacity =
      0.18 + Math.sin(state.clock.elapsedTime * 0.5) * 0.06
  })

  return (
    <mesh ref={mesh} position={position}>
      <ringGeometry args={[radius * 0.82, radius, 64]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.18}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  )
}
