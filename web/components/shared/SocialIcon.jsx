"use client";
import { useState } from "react";

export function SocialIcon({ d, label }) {
  const [h, setH] = useState(false);
  return (
    <a
      href="#"
      aria-label={label}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        width: 38, height: 38, borderRadius: "50%", border: "1px solid " + (h ? "var(--gold-500)" : "rgba(255,255,255,.18)"),
        background: h ? "var(--gold-500)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center",
        textDecoration: "none", transform: h ? "translateY(-3px)" : "none", transition: "all .18s var(--ease-standard)",
      }}
    >
      <svg viewBox="0 0 24 24" width="17" height="17" fill={h ? "var(--navy-950)" : "var(--white)"}>{d}</svg>
    </a>
  );
}
