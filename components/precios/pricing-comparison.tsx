"use client";

import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export type ComparisonValue = boolean | string | number;

export interface ComparisonRow {
  feature: string;
  values: ComparisonValue[];
}

export interface ComparisonColumn {
  name: string;
  highlighted?: boolean;
}

interface PricingComparisonProps {
  title?: string;
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
  accent?: string;
  visible?: boolean;
}

function Cell({ value, accent }: { value: ComparisonValue; accent: string }) {
  if (value === true) {
    return (
      <div
        className="inline-flex items-center justify-center w-7 h-7 rounded-full"
        style={{ background: `${accent}26`, border: `1px solid ${accent}55` }}
      >
        <Check size={14} style={{ color: accent }} strokeWidth={2.5} />
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="inline-flex items-center justify-center w-7 h-7 text-white/25">
        <Minus size={14} strokeWidth={2} />
      </div>
    );
  }
  return (
    <span className="text-white/85 text-sm font-medium tabular-nums">{value}</span>
  );
}

export default function PricingComparison({
  title = "¿Qué incluye?",
  columns,
  rows,
  accent = "#7C3AED",
  visible = true,
}: PricingComparisonProps) {
  const colCount = columns.length;
  const gridCols = `minmax(140px, 1.3fr) repeat(${colCount}, minmax(90px, 1fr))`;

  return (
    <div
      className={cn(
        "relative rounded-3xl overflow-hidden transition-all duration-700",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{
        background: "rgba(20,16,38,0.65)",
        border: "1px solid rgba(255,255,255,0.14)",
        backdropFilter: "blur(28px)",
        WebkitBackdropFilter: "blur(28px)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 24px 60px rgba(0,0,0,0.4)",
      }}
    >
      {/* Header */}
      <div className="px-6 md:px-8 pt-7 md:pt-8 pb-2 flex items-center justify-between gap-4">
        <h3
          className="text-white font-bold leading-tight"
          style={{ fontFamily: "'AUTOMATA-DISPLAY', sans-serif", fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)" }}
        >
          {title}
        </h3>
      </div>

      {/* Table — scrollable on mobile */}
      <div className="overflow-x-auto">
        <div style={{ minWidth: `${140 + colCount * 100}px` }}>

          {/* Column headers */}
          <div
            className="grid items-center px-6 md:px-8 py-5"
            style={{ gridTemplateColumns: gridCols }}
          >
            <span className="text-white/60 text-sm font-semibold tracking-wide">
              Funcionalidad
            </span>
            {columns.map((col) => (
              <div key={col.name} className="text-center">
                {col.highlighted ? (
                  <span
                    className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs md:text-sm font-bold tracking-wide"
                    style={{
                      background: `${accent}22`,
                      border: `1px solid ${accent}66`,
                      color: accent,
                      textShadow: `0 0 12px ${accent}55`,
                    }}
                  >
                    {col.name}
                  </span>
                ) : (
                  <span className="text-white/85 text-xs md:text-sm font-bold tracking-wide">
                    {col.name}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className="grid items-center px-6 md:px-8 py-4 transition-colors hover:bg-white/[0.05]"
              style={{
                gridTemplateColumns: gridCols,
                borderTop: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <span className="text-white/75 text-sm leading-snug pr-4">
                {row.feature}
              </span>
              {row.values.map((v, j) => (
                <div key={j} className="flex items-center justify-center">
                  <Cell value={v} accent={accent} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
