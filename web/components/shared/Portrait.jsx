"use client";
import { useId } from "react";
import { ACCENTS } from "@/data/theme";

// Self-contained SVG silhouette avatar, procedurally hue-shifted from a seed.
// No external dependency (was randomuser.me — dropped since hotlinked photos don't
// survive network-restricted environments or ad/tracker blockers).
export function Portrait({ seed = 0, size = 40 }) {
  const h = (Math.abs(Math.round(seed)) * 47) % 360;
  const h2 = (h + 38) % 360;
  const gid = "pv" + useId().replace(/[^a-z0-9]/gi, "");
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" style={{ display: "block" }}>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={`hsl(${h} 55% 62%)`} />
          <stop offset="1" stopColor={`hsl(${h2} 52% 46%)`} />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="20" fill={`url(#${gid})`} />
      <circle cx="20" cy="16" r="6.4" fill="rgba(255,255,255,.9)" />
      <path d="M8.5 33c1.6-6.2 6.1-9.4 11.5-9.4S29.9 26.8 31.5 33z" fill="rgba(255,255,255,.9)" />
    </svg>
  );
}

// Self-contained SVG initials avatar fallback (no external dependency).
export function Avatar({ label, idx, size = 40 }) {
  const a1 = ACCENTS[idx % 4];
  const a2 = ACCENTS[(idx + 2) % 4];
  const gid = "av" + useId().replace(/[^a-z0-9]/gi, "");
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" style={{ display: "block" }}>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={a1} />
          <stop offset="1" stopColor={a2} />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="20" fill={`url(#${gid})`} />
      <text x="20" y="21" textAnchor="middle" dominantBaseline="central" fontFamily="Georgia, serif" fontWeight="700" fontSize="15" letterSpacing="0.5" fill="#ffffff">
        {label}
      </text>
    </svg>
  );
}
