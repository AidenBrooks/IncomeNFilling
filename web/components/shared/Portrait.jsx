"use client";
import { useId, useState } from "react";
import { ACCENTS } from "@/data/theme";

function GradientSilhouette({ seed, size, gid }) {
  const h = (Math.abs(Math.round(seed)) * 47) % 360;
  const h2 = (h + 38) % 360;
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

// Real photo avatar keyed off a deterministic seed, used on review/client cards.
// The gradient silhouette renders immediately as a base layer, and the photo is
// overlaid on top once it loads — so a slow connection or blocked host never
// shows a gap or broken-image icon, just the silhouette staying put.
export function Portrait({ seed = 0, size = 40 }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const gid = "pv" + useId().replace(/[^a-z0-9]/gi, "");
  const n = Math.abs(Math.round(seed)) % 99;
  const gender = Math.round(seed) % 2 === 0 ? "women" : "men";
  const src = `https://randomuser.me/api/portraits/${gender}/${n}.jpg`;
  return (
    <span style={{ position: "relative", display: "block", width: size, height: size }}>
      <GradientSilhouette seed={seed} size={size} gid={gid} />
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt=""
          width={size}
          height={size}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          style={{
            position: "absolute", inset: 0, display: "block", width: size, height: size, objectFit: "cover", borderRadius: "50%",
            opacity: loaded ? 1 : 0, transition: "opacity .25s",
          }}
        />
      )}
    </span>
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
