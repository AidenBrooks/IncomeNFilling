"use client";
import { useState } from "react";
import { Portrait } from "@/components/shared/Portrait";
import { TESTIMONIALS } from "@/data/testimonials";

function ReviewCard({ t }) {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        width: 290, flexShrink: 0, background: "var(--white)", borderRadius: "var(--radius-lg)", border: "1px solid var(--ink-100)",
        boxShadow: h ? "var(--shadow-md)" : "var(--shadow-sm)", padding: "16px 18px", display: "flex", flexDirection: "column", gap: 10,
        transform: h ? "translateY(-4px)" : "none", transition: "transform .25s var(--ease-standard),box-shadow .25s",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 36, height: 36, flexShrink: 0, borderRadius: "50%", overflow: "hidden", border: "2px solid var(--paper-alt)" }}>
          <Portrait seed={t.av} size={36} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: 13, color: "var(--navy-900)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{t.name}</span>
            <span style={{ flexShrink: 0, width: 14, height: 14, borderRadius: "50%", background: "var(--gold-500)", color: "var(--navy-950)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700 }}>✓</span>
          </div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--ink-300)" }}>@{t.initials.toLowerCase()}client</div>
        </div>
        <div style={{ display: "flex", gap: 1, color: "var(--gold-500)", fontSize: 11, flexShrink: 0 }}>★★★★★</div>
      </div>
      <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--ink-700)", lineHeight: 1.5, display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{t.quote}</div>
      <div style={{ display: "flex", alignItems: "center", gap: 5, paddingTop: 8, borderTop: "1px solid var(--ink-100)", fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--ink-300)" }}>
        <span>{t.meta.split(" · ")[0]}</span>
        <span>·</span>
        <span style={{ color: "var(--link)" }}>Google Review</span>
      </div>
    </div>
  );
}

export function ReviewMarquee() {
  const [paused, setPaused] = useState(false);
  const rows = [TESTIMONIALS, [...TESTIMONIALS].reverse()];
  return (
    <div style={{ position: "relative", width: "100vw", marginLeft: "calc(50% - 50vw)", overflow: "hidden", padding: "12px 0" }}>
      <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: 120, zIndex: 3, pointerEvents: "none", background: "linear-gradient(90deg,var(--navy-050),transparent)" }} />
      <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: 120, zIndex: 3, pointerEvents: "none", background: "linear-gradient(270deg,var(--navy-050),transparent)" }} />
      <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {rows.map((row, ri) => (
          <div key={ri} style={{ display: "flex", gap: 18, width: "max-content", animation: `ticker-scroll ${38 + ri * 10}s linear infinite`, animationDirection: ri === 1 ? "reverse" : "normal", animationPlayState: paused ? "paused" : "running" }}>
            {[...row, ...row].map((t, i) => (
              <ReviewCard key={ri + "-" + i} t={t} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
