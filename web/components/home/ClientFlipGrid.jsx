"use client";
import { useState } from "react";
import { Portrait } from "@/components/shared/Portrait";
import { CLIENT_CARDS } from "@/data/clients";
import { ACCENTS, TINTS } from "@/data/theme";

function ClientFace({ c, i, back }) {
  const accent = ACCENTS[(i + (back ? 1 : 0)) % 4], tint = TINTS[(i + (back ? 1 : 0)) % 4];
  return (
    <div
      style={{
        position: "absolute", inset: 0, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: back ? "rotateY(180deg)" : "none",
        display: "flex", alignItems: "center", gap: "clamp(10px, 2.5vw, 13px)", padding: "clamp(10px, 2.5vw, 14px) clamp(12px, 3vw, 16px)", background: "var(--white)", border: "1px solid var(--ink-100)",
        borderRadius: "var(--radius-lg)", boxSizing: "border-box", boxShadow: "var(--shadow-sm)", overflow: "hidden",
      }}
    >
      <span style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: accent }} />
      <div style={{ position: "relative", flexShrink: 0 }}>
        <div style={{ width: "clamp(40px, 10vw, 48px)", height: "clamp(40px, 10vw, 48px)", borderRadius: "50%", overflow: "hidden", border: "2px solid " + accent }}>
          <Portrait seed={c.av} size={48} />
        </div>
        <span style={{ position: "absolute", right: -2, bottom: -2, width: 16, height: 16, borderRadius: "50%", background: accent, color: "var(--white)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700, border: "2px solid var(--white)" }}>✓</span>
      </div>
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: 14, color: "var(--navy-900)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.name}</div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-300)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.domain}</div>
        <div style={{ marginTop: 4, display: "inline-block", fontFamily: "var(--font-body)", fontSize: 10, fontWeight: "var(--weight-medium)", color: accent, background: tint, padding: "1px 8px", borderRadius: "var(--radius-pill)" }}>{c.sector}</div>
      </div>
    </div>
  );
}

function ClientFlipCard({ card, i }) {
  const [hover, setHover] = useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ width: 250, height: 92, perspective: 1000, cursor: "default" }}>
      <div
        style={{
          position: "relative", width: "100%", height: "100%", transformStyle: "preserve-3d", animation: `flip-card 9s ${i * 0.7}s infinite`,
          animationPlayState: hover ? "paused" : "running", transition: "transform .3s", filter: hover ? "drop-shadow(0 10px 20px rgba(15,42,66,.14))" : "none",
        }}
      >
        <ClientFace c={card.front} i={i} />
        <ClientFace c={card.back} i={i} back />
      </div>
    </div>
  );
}

export function ClientFlipGrid() {
  return (
    <div className="client-flip-grid" style={{ maxWidth: 1000, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
      {CLIENT_CARDS.map((card, i) => (
        <ClientFlipCard key={i} card={card} i={i} />
      ))}
    </div>
  );
}
