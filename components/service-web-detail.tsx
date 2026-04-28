"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// ── Illustrations ──────────────────────────────────────────────────────────────

function BrowserMockupIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden px-4 py-3" style={{ WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%)", maskImage: "linear-gradient(to bottom, transparent 0%, black 20%)" }}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(124,58,237,0.2) 0%, transparent 65%)" }} />
      <div className="relative z-10 w-full max-w-[290px]" style={{ background: "rgba(15,12,28,0.95)", borderRadius: "10px", border: "1px solid rgba(124,58,237,0.3)", boxShadow: "0 8px 32px rgba(0,0,0,0.5)", overflow: "hidden" }}>
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-2.5 py-2" style={{ background: "rgba(20,14,38,0.95)", borderBottom: "1px solid rgba(124,58,237,0.15)" }}>
          <div className="flex gap-1">
            {["#ff5f57","#ffbd2e","#28c840"].map((c, i) => <div key={i} style={{ width: "6px", height: "6px", borderRadius: "50%", background: c, opacity: 0.85 }} />)}
          </div>
          <div className="flex-1 mx-2 px-2 py-0.5 rounded" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <span style={{ fontSize: "7px", color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>sicentre.com/mi-negocio</span>
          </div>
        </div>
        {/* Fake website content */}
        <div className="px-3 py-2.5">
          <div className="flex items-center justify-between mb-2.5">
            <div className="w-14 h-2.5 rounded" style={{ background: "rgba(124,58,237,0.55)" }} />
            <div className="flex gap-2">
              {[1,2,3].map(i => <div key={i} style={{ width: "22px", height: "1.5px", background: "rgba(255,255,255,0.18)", borderRadius: "1px" }} />)}
            </div>
          </div>
          <div className="rounded-lg p-3 mb-2.5" style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.28), rgba(234,88,12,0.22))", border: "1px solid rgba(124,58,237,0.2)" }}>
            <div className="w-4/5 h-3 rounded mb-2" style={{ background: "rgba(255,255,255,0.6)" }} />
            <div className="w-1/2 h-2 rounded mb-3" style={{ background: "rgba(255,255,255,0.2)" }} />
            <div className="w-20 h-5 rounded-full" style={{ background: "linear-gradient(90deg, rgba(124,58,237,0.85), rgba(234,88,12,0.85))" }} />
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {[["rgba(124,58,237,0.25)"],["rgba(234,88,12,0.2)"],["rgba(167,139,250,0.2)"]].map(([bg], i) => (
              <div key={i} className="rounded-lg p-2" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="w-full h-7 rounded mb-1.5" style={{ background: bg }} />
                <div className="w-full h-1.5 rounded" style={{ background: "rgba(255,255,255,0.12)" }} />
                <div className="w-2/3 h-1 rounded mt-1" style={{ background: "rgba(255,255,255,0.07)" }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function HostingSecurityIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden px-3 py-2">
      <div className="absolute" style={{ width: "180px", height: "120px", background: "radial-gradient(ellipse, rgba(124,58,237,0.25) 0%, transparent 70%)", filter: "blur(22px)" }} />
      <div className="relative z-10 w-full max-w-[210px] flex flex-col gap-2">
        <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl" style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.28)" }}>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.25)" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(34,197,94,0.9)" strokeWidth="2" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          </div>
          <div>
            <div style={{ fontSize: "9px", color: "rgba(34,197,94,0.9)", fontFamily: "monospace", fontWeight: "bold" }}>SSL Activo</div>
            <div style={{ fontSize: "6.5px", color: "rgba(255,255,255,0.35)", marginTop: "1px" }}>Certificado válido · HTTPS</div>
          </div>
          <div className="ml-auto flex-shrink-0">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(34,197,94,0.7)" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </div>
        <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl" style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.22)" }}>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(124,58,237,0.14)" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(167,139,250,0.9)" strokeWidth="2" strokeLinecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          </div>
          <div className="flex-1">
            <div style={{ fontSize: "9px", color: "rgba(167,139,250,0.9)", fontFamily: "monospace", fontWeight: "bold" }}>99.9% Uptime</div>
            <div className="mt-1.5 w-full h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.07)" }}>
              <div style={{ width: "99.9%", height: "100%", background: "rgba(124,58,237,0.8)", borderRadius: "999px" }} />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl" style={{ background: "rgba(234,88,12,0.07)", border: "1px solid rgba(234,88,12,0.18)" }}>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(234,88,12,0.12)" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(251,146,60,0.9)" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          </div>
          <div>
            <div style={{ fontSize: "9px", color: "rgba(251,146,60,0.9)", fontFamily: "monospace", fontWeight: "bold" }}>Dominio incluido</div>
            <div style={{ fontSize: "6.5px", color: "rgba(255,255,255,0.35)", marginTop: "1px" }}>Hosting gestionado · CDN global</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatIllustration() {
  return (
    <div className="relative w-full h-full flex flex-col justify-center gap-2 overflow-hidden px-4 py-3">
      {/* WA header bar */}
      <div className="flex items-center gap-2 px-2 pb-2 mb-0.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "rgba(37,211,102,0.25)", border: "1px solid rgba(37,211,102,0.4)" }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="rgba(37,211,102,0.9)"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
        </div>
        <div>
          <div className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.75)", fontSize: "9px" }}>Sicentre Support</div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#25D366" }} />
            <span style={{ fontSize: "7px", color: "rgba(37,211,102,0.8)" }}>en línea</span>
          </div>
        </div>
      </div>

      {/* Message from client */}
      <div className="self-start max-w-[80%]">
        <div className="px-3 py-2 rounded-2xl rounded-tl-sm text-xs leading-snug" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", fontSize: "9.5px" }}>
          Hola! Necesito cambiar el texto del banner principal 👋
        </div>
        <div style={{ fontSize: "7px", color: "rgba(255,255,255,0.3)", marginTop: "2px", paddingLeft: "4px" }}>10:32</div>
      </div>

      {/* Reply from us */}
      <div className="self-end max-w-[80%]">
        <div className="px-3 py-2 rounded-2xl rounded-tr-sm text-xs leading-snug" style={{ background: "rgba(124,58,237,0.35)", border: "1px solid rgba(124,58,237,0.5)", color: "rgba(255,255,255,0.85)", fontSize: "9.5px" }}>
          ¡Hecho! Ya está actualizado 🎉
        </div>
        <div className="flex justify-end items-center gap-1" style={{ marginTop: "2px", paddingRight: "4px" }}>
          <span style={{ fontSize: "7px", color: "rgba(255,255,255,0.3)" }}>10:34</span>
          <svg width="12" height="8" viewBox="0 0 16 10" fill="none"><path d="M1 5l4 4L15 1" stroke="rgba(167,139,250,0.8)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 5l4 4" stroke="rgba(167,139,250,0.8)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      </div>

      {/* Second client message */}
      <div className="self-start max-w-[80%]">
        <div className="px-3 py-2 rounded-2xl rounded-tl-sm text-xs leading-snug" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", fontSize: "9.5px" }}>
          Increíble, gracias! 🙌
        </div>
        <div style={{ fontSize: "7px", color: "rgba(255,255,255,0.3)", marginTop: "2px", paddingLeft: "4px" }}>10:36</div>
      </div>

      {/* Typing indicator */}
      <div className="self-end">
        <div className="flex items-center gap-1 px-3 py-2 rounded-2xl rounded-tr-sm" style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.35)" }}>
          {[0, 1, 2].map((i) => <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(167,139,250,0.7)" }} />)}
        </div>
      </div>
    </div>
  );
}

function SEOIllustration() {
  return (
    <div className="relative w-full h-full flex items-end justify-center pb-2 px-4 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2" style={{ width: "170px", height: "90px", background: "radial-gradient(ellipse, rgba(234,88,12,0.28) 0%, transparent 70%)", filter: "blur(18px)" }} />
      <svg width="100%" height="115" viewBox="0 0 190 115" preserveAspectRatio="xMidYMax meet">
        <defs>
          <linearGradient id="seoBarGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(234,88,12,0.85)" />
            <stop offset="100%" stopColor="rgba(234,88,12,0.2)" />
          </linearGradient>
        </defs>
        {[30, 60, 90].map((y) => <line key={y} x1="18" y1={y} x2="185" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />)}
        {[
          { x: 28, h: 35 }, { x: 52, h: 52 }, { x: 76, h: 44 },
          { x: 100, h: 70 }, { x: 124, h: 88 }, { x: 148, h: 103 },
        ].map((b, i) => <rect key={i} x={b.x - 9} y={110 - b.h} width="16" height={b.h} rx="3" fill="url(#seoBarGrad)" />)}
        <polyline points="19,108 52,82 76,72 100,57 124,35 162,12" fill="none" stroke="rgba(234,88,12,0.95)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="162" cy="12" r="5" fill="rgba(251,146,60,1)" style={{ filter: "drop-shadow(0 0 7px rgba(234,88,12,0.9))" }} />
        <line x1="18" y1="4" x2="18" y2="112" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <line x1="18" y1="112" x2="185" y2="112" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      </svg>
    </div>
  );
}

function AnalyticsIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden px-4 pb-3">
      <div className="absolute" style={{ width: "150px", height: "60px", background: "radial-gradient(ellipse, rgba(124,58,237,0.22) 0%, transparent 70%)", top: "25%", left: "50%", transform: "translateX(-50%)", filter: "blur(14px)" }} />
      <svg width="100%" height="105" viewBox="0 0 200 105" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="vGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(124,58,237,0.5)" />
            <stop offset="100%" stopColor="rgba(124,58,237,0)" />
          </linearGradient>
          <linearGradient id="oGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(234,88,12,0.4)" />
            <stop offset="100%" stopColor="rgba(234,88,12,0)" />
          </linearGradient>
        </defs>
        {[25, 50, 75].map((y) => <line key={y} x1="10" y1={y} x2="195" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />)}
        {/* Violet curve + fill */}
        <path d="M 10 80 C 30 72, 45 48, 65 52 C 82 55, 92 32, 112 36 C 132 40, 142 20, 162 24 C 176 27, 188 20, 195 17 L 195 95 L 10 95 Z" fill="url(#vGrad)" />
        <path d="M 10 80 C 30 72, 45 48, 65 52 C 82 55, 92 32, 112 36 C 132 40, 142 20, 162 24 C 176 27, 188 20, 195 17" fill="none" stroke="rgba(124,58,237,0.95)" strokeWidth="2.4" strokeLinecap="round" />
        {/* Orange curve + fill */}
        <path d="M 10 88 C 35 82, 55 70, 75 65 C 95 60, 105 52, 125 57 C 145 62, 155 44, 172 40 C 182 37, 190 34, 195 31 L 195 95 L 10 95 Z" fill="url(#oGrad)" />
        <path d="M 10 88 C 35 82, 55 70, 75 65 C 95 60, 105 52, 125 57 C 145 62, 155 44, 172 40 C 182 37, 190 34, 195 31" fill="none" stroke="rgba(234,88,12,0.9)" strokeWidth="2.4" strokeLinecap="round" />
        {/* Highlight dots */}
        <circle cx="112" cy="36" r="4.5" fill="rgba(124,58,237,1)" style={{ filter: "drop-shadow(0 0 5px rgba(124,58,237,0.9))" }} />
        <circle cx="125" cy="57" r="4.5" fill="rgba(234,88,12,1)" style={{ filter: "drop-shadow(0 0 5px rgba(234,88,12,0.9))" }} />
        {/* Legend */}
        <rect x="14" y="6" width="9" height="3.5" rx="1.75" fill="rgba(124,58,237,0.95)" />
        <rect x="30" y="6" width="9" height="3.5" rx="1.75" fill="rgba(234,88,12,0.9)" />
        <line x1="10" y1="4" x2="10" y2="95" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <line x1="10" y1="95" x2="195" y2="95" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      </svg>
    </div>
  );
}

function SocialIntegrationIllustration() {
  const channels = [
    { label: "WhatsApp", border: "rgba(37,211,102,0.25)", bg: "rgba(37,211,102,0.08)", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="rgba(37,211,102,0.9)"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/></svg>, color: "rgba(37,211,102,0.7)" },
    { label: "Instagram", border: "rgba(225,48,108,0.22)", bg: "rgba(225,48,108,0.07)", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(225,48,108,0.9)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>, color: "rgba(225,48,108,0.7)" },
    { label: "Facebook", border: "rgba(24,119,242,0.22)", bg: "rgba(24,119,242,0.07)", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="rgba(24,119,242,0.9)"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>, color: "rgba(24,119,242,0.7)" },
    { label: "TikTok", border: "rgba(255,255,255,0.12)", bg: "rgba(255,255,255,0.04)", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="rgba(255,255,255,0.8)"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.16 8.16 0 0 0 4.77 1.52V6.82a4.85 4.85 0 0 1-1.01-.13z"/></svg>, color: "rgba(255,255,255,0.45)" },
    { label: "LinkedIn", border: "rgba(10,102,194,0.22)", bg: "rgba(10,102,194,0.07)", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="rgba(10,102,194,0.9)"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>, color: "rgba(10,102,194,0.7)" },
    { label: "Google", border: "rgba(234,88,12,0.2)", bg: "rgba(234,88,12,0.07)", icon: <svg width="20" height="20" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="rgba(66,133,244,0.9)"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="rgba(52,168,83,0.9)"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="rgba(251,188,5,0.9)"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="rgba(234,67,53,0.9)"/></svg>, color: "rgba(251,146,60,0.7)" },
  ];
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden px-3 py-2">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.13) 0%, transparent 70%)" }} />
      <div className="relative z-10 w-full grid grid-cols-3 gap-2">
        {channels.map((ch, i) => (
          <div key={i} className="flex flex-col items-center gap-1.5 px-1 py-2.5 rounded-xl" style={{ background: ch.bg, border: `1px solid ${ch.border}` }}>
            {ch.icon}
            <span style={{ fontSize: "6.5px", color: ch.color, fontFamily: "monospace" }}>{ch.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Card data ──────────────────────────────────────────────────────────────────

const features = [
  {
    title: "Diseño único y personalizado",
    description: "Sin estéticas genéricas de IA. Su sitio refleja exactamente quién es su empresa.",
    illustration: <BrowserMockupIllustration />,
    colSpan: "md:col-span-2",
    illustrationHeight: "h-44",
  },
  {
    title: "Hosting, dominio y seguridad incluidos",
    description: "Todo listo desde el primer día. Sin configuraciones técnicas de su parte.",
    illustration: <HostingSecurityIllustration />,
    colSpan: "",
    illustrationHeight: "h-44",
  },
  {
    title: "Modificaciones instantáneas vía WhatsApp",
    description: "Escriba, nosotros actualizamos. Sin tickets, sin esperas, sin complicaciones.",
    illustration: <ChatIllustration />,
    colSpan: "",
    illustrationHeight: "h-40",
  },
  {
    title: "Optimizado para Google desde el día 1",
    description: "Estructura técnica pensada para aparecer en los primeros resultados.",
    illustration: <SEOIllustration />,
    colSpan: "",
    illustrationHeight: "h-40",
  },
  {
    title: "Acceso a Google Analytics y Search Console",
    description: "Vea cuántas personas visitan su sitio, desde dónde y qué buscan.",
    illustration: <AnalyticsIllustration />,
    colSpan: "",
    illustrationHeight: "h-40",
  },
  {
    title: "Integración con WhatsApp Business y redes",
    description: "Su sitio conectado con todos sus canales de comunicación.",
    illustration: <SocialIntegrationIllustration />,
    colSpan: "md:col-span-2",
    illustrationHeight: "h-44",
  },
];

// ── Component ──────────────────────────────────────────────────────────────────

export default function ServiceWebDetail() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden planet-section planet-section-warm">
      {/* Background glows */}
      <div className="absolute pointer-events-none" style={{ width: "600px", height: "400px", background: "radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%)", top: "-80px", left: "50%", transform: "translateX(-50%)", filter: "blur(60px)" }} />
      <div className="absolute pointer-events-none" style={{ width: "400px", height: "300px", background: "radial-gradient(ellipse, rgba(234,88,12,0.07) 0%, transparent 70%)", bottom: "0", right: "0", filter: "blur(60px)" }} />

      {/* Futuristic cursor — background decoration */}
      <div className="absolute pointer-events-none hidden md:block" style={{ left: "14%", top: "18%", opacity: 0.10, zIndex: 1, transform: "rotate(105deg)" }}>
        <svg width="180" height="220" viewBox="0 0 180 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="cursorGrad" x1="10" y1="10" x2="140" y2="180" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#A78BFA" />
              <stop offset="55%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#EA580C" />
            </linearGradient>
            <filter id="cursorGlow">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          {/* Outer cursor body */}
          <path
            d="M 10 10 L 10 155 L 46 119 L 72 178 L 92 170 L 66 111 L 110 111 Z"
            stroke="url(#cursorGrad)"
            strokeWidth="2"
            strokeLinejoin="miter"
            strokeLinecap="round"
            fill="rgba(124,58,237,0.06)"
            filter="url(#cursorGlow)"
          />
          {/* Inner slim duplicate — depth effect */}
          <path
            d="M 18 22 L 18 138 L 48 108 L 68 154 L 78 149 L 58 103 L 96 103 Z"
            stroke="rgba(167,139,250,0.45)"
            strokeWidth="0.8"
            strokeLinejoin="miter"
            fill="none"
          />

          {/* Tip — reticle crosshair */}
          <circle cx="10" cy="10" r="5" stroke="#EA580C" strokeWidth="1.5" fill="none" />
          <circle cx="10" cy="10" r="2" fill="#FB923C" />
          <line x1="10" y1="0" x2="10" y2="4" stroke="#EA580C" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="10" y1="16" x2="10" y2="20" stroke="#EA580C" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="0" y1="10" x2="4" y2="10" stroke="#EA580C" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="16" y1="10" x2="20" y2="10" stroke="#EA580C" strokeWidth="1.2" strokeLinecap="round" />

          {/* Top-left corner bracket */}
          <path d="M 0 26 L 0 16 L 10 16" stroke="rgba(167,139,250,0.8)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          {/* Bottom-right corner bracket (at fork) */}
          <path d="M 118 103 L 126 103 L 126 111" stroke="rgba(234,88,12,0.75)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          {/* Bottom-left corner bracket (at base) */}
          <path d="M 0 163 L 0 155 L 10 155" stroke="rgba(167,139,250,0.6)" strokeWidth="1" strokeLinecap="round" fill="none" />

          {/* Scan lines along left edge */}
          <line x1="-6" y1="50" x2="6" y2="50" stroke="rgba(167,139,250,0.6)" strokeWidth="1" />
          <line x1="-4" y1="70" x2="4" y2="70" stroke="rgba(167,139,250,0.35)" strokeWidth="0.8" />
          <line x1="-6" y1="90" x2="6" y2="90" stroke="rgba(234,88,12,0.5)" strokeWidth="1" />
          <line x1="-4" y1="110" x2="4" y2="110" stroke="rgba(234,88,12,0.3)" strokeWidth="0.8" />
          <line x1="-6" y1="130" x2="6" y2="130" stroke="rgba(167,139,250,0.4)" strokeWidth="1" />

          {/* Dashed trailing line from tip — motion trail */}
          <line x1="10" y1="10" x2="10" y2="-30" stroke="rgba(234,88,12,0.4)" strokeWidth="1" strokeDasharray="3 5" strokeLinecap="round" />

          {/* End glow dot */}
          <circle cx="72" cy="178" r="3" fill="#FB923C" opacity="0.7" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className={cn("text-center mb-14 transition-all duration-700", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-400/70 mb-4">
            Diseño Web
          </p>
          <h2
            className="font-clash text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl mx-auto leading-tight mb-5"
          >
            Su presencia online,{" "}
            <span className="gradient-text" style={{ filter: "drop-shadow(0 3px 10px rgba(0,0,0,0.7))" }}>sin compromisos.</span>
          </h2>
          <p className="text-white/55 text-base md:text-lg max-w-xl mx-auto">
            Cada sitio es único. Diseñado desde cero para su negocio, su identidad y sus clientes.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={cn(
                "glass-card flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-violet-500/40",
                f.colSpan,
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${i * 80}ms`, background: "rgba(124,58,237,0.36)" }}
            >
              {/* Text */}
              <div className="px-5 pt-5 pb-3">
                <h3 className="font-clash text-white font-bold text-lg leading-snug mb-1.5">
                  {f.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{f.description}</p>
              </div>
              {/* Illustration */}
              <div className={cn("relative w-full flex-1", f.illustrationHeight)}>
                {f.illustration}
              </div>
            </div>
          ))}

          {/* Pricing card */}
          <div
            className={cn(
              "gradient-border flex flex-col justify-between p-7 transition-all duration-500 hover:-translate-y-1",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "560ms" }}
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/40 mb-3">
                Inversión única
              </p>
              <div
                className="font-clash font-bold gradient-text mb-2"
                style={{ fontSize: "clamp(2.8rem, 5vw, 3.8rem)", lineHeight: 1 }}
              >
                Desde $500
              </div>
              <p className="text-white/50 text-sm leading-relaxed mt-3">
                Sin suscripciones. Su sitio, para siempre.
              </p>
            </div>
            <Link
              href="/web"
              className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-600/25"
              style={{ background: "linear-gradient(135deg, #7C3AED, #EA580C)" }}
            >
              Ver todos los planes →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
