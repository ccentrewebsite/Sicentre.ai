"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// ─── Vertex shader ────────────────────────────────────────────────────────────
const VERT = `
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`;

// ─── Fragment shader — flowing plasma + violet/orange palette ─────────────────
const FRAG = `
precision highp float;
uniform float u_time;
uniform vec2  u_res;

// Sicentre brand palette: violet → magenta → orange
vec3 palette(float t) {
  t = fract(t);
  vec3 a = vec3(0.486, 0.227, 0.929); // #7C3AED violet
  vec3 b = vec3(0.780, 0.200, 0.750); // magenta bridge
  vec3 c = vec3(0.918, 0.345, 0.047); // #EA580C orange
  vec3 d = vec3(0.600, 0.150, 0.850); // deep violet
  if (t < 0.33) return mix(a, b, smoothstep(0.0, 0.33, t));
  if (t < 0.66) return mix(b, c, smoothstep(0.33, 0.66, t));
  return mix(c, d, smoothstep(0.66, 1.0, t));
}

float hash(vec2 p) {
  p = fract(p * vec2(127.1, 311.7));
  p += dot(p, p + 19.19);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i),           hash(i + vec2(1,0)), u.x),
    mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), u.x),
    u.y);
}

float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  mat2 R = mat2( 0.8, 0.6, -0.6, 0.8);
  for (int i = 0; i < 7; i++) {
    v += a * noise(p);
    p  = R * p * 2.1 + vec2(float(i) * 1.7);
    a *= 0.48;
  }
  return v;
}

void main() {
  vec2 uv = (gl_FragCoord.xy - u_res * 0.5) / min(u_res.x, u_res.y);
  float t = u_time * 0.22;

  // Two-pass domain warping
  vec2 q = vec2(fbm(uv + t * 0.09),
                fbm(uv + vec2(4.1, 2.3) + t * 0.11));

  vec2 r = vec2(fbm(uv + 3.8 * q + vec2(1.7, 9.2) + t * 0.13),
                fbm(uv + 3.8 * q + vec2(8.3, 2.8) + t * 0.12));

  float f = fbm(uv + 4.2 * r + t * 0.08);
  f = f * 0.5 + 0.5;

  // Drive hue from warp field + slow cycle
  float hue = f * 0.7 + length(q) * 0.25 + t * 0.06;
  vec3 col   = palette(hue);

  // Luminosity: bright peaks, dark valleys
  float lum = pow(f, 1.6);
  col *= lum * 1.9;

  // Subtle grid overlay for "matrix" feel
  vec2 grid = fract(uv * 28.0 + t * 0.3);
  float line = smoothstep(0.92, 1.0, max(grid.x, grid.y));
  col += line * palette(hue + 0.15) * 0.18 * lum;

  // Dark base
  vec3 base = vec3(0.051, 0.043, 0.094);
  col = mix(base, col, lum * 0.92);

  // Vignette
  float v = 1.0 - smoothstep(0.45, 1.35, length(uv));
  col *= v;

  // Slight desaturate center to let hero text breathe
  float center = 1.0 - smoothstep(0.0, 0.55, length(uv));
  col = mix(col, col * 0.55, center * 0.4);

  gl_FragColor = vec4(col, 1.0);
}
`;

// ─── WebGL bootstrap ──────────────────────────────────────────────────────────
function createGL(canvas: HTMLCanvasElement) {
  const gl = canvas.getContext("webgl", { antialias: false, alpha: false });
  if (!gl) return null;

  const mkShader = (type: number, src: string) => {
    const s = gl.createShader(type)!;
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS))
      console.error(gl.getShaderInfoLog(s));
    return s;
  };

  const prog = gl.createProgram()!;
  gl.attachShader(prog, mkShader(gl.VERTEX_SHADER,   VERT));
  gl.attachShader(prog, mkShader(gl.FRAGMENT_SHADER, FRAG));
  gl.linkProgram(prog);
  gl.useProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER,
    new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);

  const loc = gl.getAttribLocation(prog, "a_pos");
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  return {
    gl,
    uTime: gl.getUniformLocation(prog, "u_time")!,
    uRes:  gl.getUniformLocation(prog, "u_res")!,
  };
}

// ─── Component ────────────────────────────────────────────────────────────────
export const useWindowSize = () => {
  return { width: 0, height: 0 }; // kept for API compat, not used
};

export const Component = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = createGL(canvas);
    if (!ctx) return;

    const { gl, uTime, uRes } = ctx;
    let raf: number;
    const t0 = performance.now();

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const tick = () => {
      gl.uniform1f(uTime, (performance.now() - t0) / 1000);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <div className={cn("flex flex-col items-center w-full h-full", className)}>
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", display: "block" }}
      />
    </div>
  );
};

export const UnicornBackground = () => (
  <Component className="absolute inset-0 z-0 pointer-events-none" />
);
