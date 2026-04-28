"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceIntroBlockProps {
  id?: string;
  title: string;
  hook: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageSide: "left" | "right";
  accentColor: string;
  accentColorSoft: string;
  titleAccent: string;
  titleAccentColor: string;
}

export default function ServiceIntroBlock({
  id,
  title,
  hook,
  description,
  imageSrc,
  imageAlt,
  imageSide,
  accentColor,
  accentColorSoft,
  titleAccent,
  titleAccentColor,
}: ServiceIntroBlockProps) {
  return (
    <section id={id} className="relative py-20 md:py-28 overflow-hidden planet-section">
      <div
        className="absolute pointer-events-none"
        style={{
          width: "560px",
          height: "380px",
          background: `radial-gradient(ellipse, ${accentColorSoft} 0%, transparent 70%)`,
          top: imageSide === "right" ? "10%" : "auto",
          bottom: imageSide === "left" ? "10%" : "auto",
          [imageSide === "right" ? "right" : "left"]: "-80px",
          filter: "blur(70px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-14 items-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "relative aspect-[4/5] md:aspect-[5/6] w-full overflow-hidden rounded-[28px] md:col-span-3",
              imageSide === "right" ? "md:order-2" : "md:order-1"
            )}
            style={{
              border: `1px solid ${accentColor}55`,
              boxShadow: `0 30px 80px rgba(0,0,0,0.5), 0 0 60px ${accentColorSoft}`,
            }}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `linear-gradient(135deg, transparent 50%, ${accentColor}22 100%)`,
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(to bottom, transparent 70%, rgba(13,11,24,0.45) 100%)",
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "flex flex-col gap-5 md:col-span-2",
              imageSide === "right" ? "md:order-1" : "md:order-2"
            )}
          >
            <h2
              className="font-clash text-white font-bold leading-[1.05]"
              style={{ fontSize: "clamp(2rem, 4.2vw, 3.4rem)" }}
            >
              {title}{" "}
              <span style={{ color: titleAccentColor, textShadow: "0 3px 14px rgba(0,0,0,0.55)" }}>
                {titleAccent}
              </span>
            </h2>

            <p
              className="font-clash font-semibold leading-snug"
              style={{
                fontSize: "clamp(1rem, 1.6vw, 1.25rem)",
                color: accentColor,
                letterSpacing: "-0.005em",
              }}
            >
              {hook}
            </p>

            <p className="text-white/65 text-base md:text-lg leading-relaxed max-w-xl">
              {description}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
