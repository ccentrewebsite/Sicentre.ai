import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { GlobalBackground } from "@/components/ui/global-background";
import Navbar from "@/components/navbar";
import { LiquidGlassFilter } from "@/components/ui/liquid-glass-nav";

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: "Sicentre | Agencia Digital 360° IA",
  description:
    "Agencia digital 360° con inteligencia artificial. Diseño web a medida, agentes de voz IA y producción visual premium para América Latina.",
  keywords: [
    "agencia digital",
    "inteligencia artificial",
    "diseño web",
    "llamadas IA",
    "producción visual",
    "Paraguay",
    "Asunción",
    "América Latina",
  ],
  authors: [{ name: "Sicentre" }],
  openGraph: {
    title: "Sicentre | Agencia Digital 360° IA",
    description:
      "Diseño web, automatización de llamadas con IA y producción visual premium desde Asunción para América Latina.",
    type: "website",
    locale: "es_PY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={cn("dark", "font-sans", jakarta.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.fontshare.com" />
      </head>
      <body className="bg-transparent text-white font-sans antialiased">
        <GlobalBackground />
        <LiquidGlassFilter />
        <Navbar />
        <div style={{ position: "relative", zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
