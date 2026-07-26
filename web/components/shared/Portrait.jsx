"use client";
import { useId } from "react";
import { ACCENTS } from "@/data/theme";

// Real portrait photos keyed off a deterministic seed, used on review/client cards.
export function Portrait({ seed = 0, gender = "men", size = 40 }) {
  const n = Math.abs(Math.round(seed)) % 99;
  const src = `https://randomuser.me/api/portraits/${gender === "women" ? "women" : "men"}/${n}.jpg`;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt="" width={size} height={size} loading="lazy" style={{ display: "block", width: size, height: size, objectFit: "cover", borderRadius: "50%" }} />;
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
