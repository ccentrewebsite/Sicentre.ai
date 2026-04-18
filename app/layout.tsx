import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Santiria | Agencia Digital 360° IA",
  description:
    "Agencia digital 360° con inteligencia artificial. Diseño web a medida, agentes de voz IA y producción visual premium — todo desde Asunción, Paraguay para América Latina.",
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
  authors: [{ name: "Santiria" }],
  openGraph: {
    title: "Santiria | Agencia Digital 360° IA",
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
    <html lang="es" className={cn("dark", "font-sans", geist.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.fontshare.com" />
      </head>
      <body className="bg-[#0D0B18] text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
