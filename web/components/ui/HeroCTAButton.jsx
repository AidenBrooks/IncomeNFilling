"use client";
import { useState } from "react";

export function HeroCTAButton({ variant, children, onClick }) {
  const [hover, setHover] = useState(false);
  const primary = variant === "primary";
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-body)",
        fontWeight: "var(--weight-semibold)", fontSize: "var(--text-base)", padding: "14px 26px",
        borderRadius: "var(--radius-pill)", border: primary ? "none" : "1.5px solid var(--navy-900)",
        background: primary ? "var(--gold-500)" : hover ? "var(--navy-900)" : "transparent",
        color: primary ? "var(--navy-950)" : hover ? "var(--white)" : "var(--navy-900)",
        cursor: "pointer", boxShadow: primary && hover ? "0 12px 26px rgba(239,168,46,.4)" : "none",
        transform: hover ? "translateY(-2px)" : "none", transition: "all .2s var(--ease-standard)",
      }}
    >
      {children}
      <span style={{ transition: "transform .2s", transform: hover ? "translateX(4px)" : "none", display: "inline-block" }}>→</span>
    </button>
  );
}
