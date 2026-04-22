"use client"

import { useEffect, useRef } from "react"

const VERT = `
  attribute vec2 a_pos;
  void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`

const FRAG = `
  precision highp float;
  uniform float u_time;
  uniform vec2  u_res;

  float hash(vec2 p) {
    p = fract(p * vec2(234.34, 435.345));
    p += dot(p, p + 34.23);
    return fract(p.x * p.y);
  }
  float noise(vec2 p) {
    vec2 i = floor(p); vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i),hash(i+vec2(1,0)),u.x),
               mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),u.x), u.y);
  }
  float fbm(vec2 p) {
    float v=0.0, a=0.5;
    for(int i=0;i<4;i++){v+=a*noise(p);p=p*2.1+vec2(1.7*float(i),0.9*float(i));a*=0.5;}
    return v;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_res;
    vec2 p  = (gl_FragCoord.xy * 2.0 - u_res) / u_res.y;
    float t = u_time * 0.25;

    // ── Dark indigo base ───────────────────────────────────────
    vec3 col = vec3(0.06, 0.04, 0.13);

    // ── Violet aurora — upper half, moderately bright ──────────
    float breath = 0.85 + 0.15 * sin(t * 0.5);

    float d1 = length(p - vec2(0.0, 0.50));
    col += exp(-d1 * 1.20) * breath * vec3(0.38, 0.06, 0.62) * 1.1;

    float d2 = length(p - vec2(0.0, 0.75));
    col += exp(-d2 * 0.65) * 0.45 * vec3(0.22, 0.03, 0.44);

    // Subtle animated mist
    float mist = fbm(p * 1.3 + vec2(t * 0.025, 0.0)) * smoothstep(0.15, 0.85, uv.y);
    col += mist * vec3(0.10, 0.02, 0.22) * 0.35;

    // ── Planet sphere ──────────────────────────────────────────
    vec2  sC = vec2(0.012 * sin(t * 0.18), -1.20);
    float sR = 1.78;
    float d  = length(p - sC);

    // Dark planet body — applied first, strong mix
    float body = smoothstep(sR + 0.03, sR - 0.14, d);
    vec3  bodyCol = vec3(0.025, 0.015, 0.055);
    col = mix(col, bodyCol, body * 0.96);

    // ── Orange / amber rim — narrow band at sphere edge ────────
    float rimPulse = 1.0 + 0.07 * sin(t * 0.65 + 1.0);
    // Tight band: inner boundary close to surface, outer just beyond
    float rimW = 0.13;
    float rim  = smoothstep(sR - rimW * 2.2, sR - rimW * 0.55, d)
               * smoothstep(sR + rimW * 1.1, sR,                d)
               * rimPulse;

    // Deep amber at crown, burnt orange on flanks — muted palette
    float crown  = exp(-abs(p.x - sC.x) * 1.3);
    vec3  amber  = vec3(0.82, 0.52, 0.12);   // warm amber, not yellow
    vec3  orange = vec3(0.80, 0.28, 0.04);   // burnt orange, not neon
    col += rim * mix(orange, amber, crown) * 2.2;

    // Soft atmospheric halo — stays close to rim
    float haloW = 0.45;
    float halo  = smoothstep(sR + haloW, sR + 0.02, d)
                * smoothstep(sR - 0.08, sR + haloW * 0.6, d);
    col += halo * vec3(0.40, 0.10, 0.01) * 0.40;

    // ── Warm ground glow (bottom) ──────────────────────────────
    float gnd = (1.0 - uv.y) * (1.0 - uv.y)
              * smoothstep(0.92, 0.05, abs(uv.x - 0.5) * 2.2);
    col += gnd * vec3(0.22, 0.07, 0.01) * 0.90;

    // ── Film grain ─────────────────────────────────────────────
    float grain = noise(uv * 500.0 + fract(t * 17.3)) - 0.5;
    col += grain * 0.022;

    // ── Vignette — soft, only at extreme edges ─────────────────
    float vig = 1.0 - smoothstep(0.55, 1.70, length(p * vec2(0.60, 1.0))) * 0.50;
    col *= vig;

    // ── Reinhard tone-mapping — prevents oversaturation ────────
    col = col / (col + vec3(0.75));

    // Slight gamma lift for vibrancy without clipping
    col = pow(col, vec3(0.88));

    gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
  }
`

export function WebGLShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef    = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext("webgl", { antialias: false, alpha: false })
    if (!gl) return

    const mkShader = (type: number, src: string) => {
      const s = gl.createShader(type)!
      gl.shaderSource(s, src)
      gl.compileShader(s)
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS))
        console.error("Shader:", gl.getShaderInfoLog(s))
      return s
    }

    const prog = gl.createProgram()!
    gl.attachShader(prog, mkShader(gl.VERTEX_SHADER,   VERT))
    gl.attachShader(prog, mkShader(gl.FRAGMENT_SHADER, FRAG))
    gl.linkProgram(prog)
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER,
      new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW)
    const loc = gl.getAttribLocation(prog, "a_pos")
    gl.enableVertexAttribArray(loc)
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)

    const uTime = gl.getUniformLocation(prog, "u_time")!
    const uRes  = gl.getUniformLocation(prog, "u_res")!
    const dpr   = Math.min(window.devicePixelRatio, 2)

    const resize = () => {
      canvas.width  = window.innerWidth  * dpr
      canvas.height = window.innerHeight * dpr
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(document.documentElement)

    const t0 = performance.now()
    const tick = () => {
      gl.uniform1f(uTime, (performance.now() - t0) / 1000)
      gl.uniform2f(uRes, canvas.width, canvas.height)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      rafRef.current = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      gl.deleteProgram(prog)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%" }}
      className="absolute inset-0 block pointer-events-none"
    />
  )
}
