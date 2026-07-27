"use client";
import { useState } from "react";
import { ACCENTS, TINTS } from "@/data/theme";

export function CategoryExplorer({ categories, onSelect }) {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(null);
  const c = categories[active];
  const accent = ACCENTS[active % 4], tint = TINTS[active % 4];

  return (
    <div className="rsp-sidebar" style={{ display: "grid", gridTemplateColumns: "320px 1fr", background: "var(--white)", borderRadius: "var(--radius-xl)", overflow: "hidden", border: "1px solid var(--ink-100)", boxShadow: "var(--shadow-md)", minHeight: 400 }}>
      <div className="rsp-sidebar-list" style={{ background: "var(--paper-alt)", padding: 12, display: "flex", flexDirection: "column", flexWrap: "nowrap", gap: 4, overflowY: "auto", borderRight: "1px solid var(--ink-100)" }}>
        {categories.map((cat, i) => {
          const isActive = active === i;
          const isHovered = hovered === i && !isActive;
          return (
            <button
              key={cat.title}
              onClick={() => setActive(i)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered((h) => (h === i ? null : h))}
              style={{
                display: "flex", alignItems: "center", gap: 12, padding: "13px 14px", borderRadius: "var(--radius-md)", border: "none",
                background: isActive || isHovered ? "var(--white)" : "transparent",
                boxShadow: isActive ? "var(--shadow-sm)" : isHovered ? "0 1px 4px rgba(15,32,48,.08)" : "none",
                cursor: "pointer", textAlign: "left", fontFamily: "var(--font-body)", flexShrink: 0, whiteSpace: "nowrap",
                transition: "background var(--duration-fast) var(--ease-standard)",
              }}
            >
              <span style={{ width: 34, height: 34, flexShrink: 0, borderRadius: "var(--radius-md)", background: TINTS[i % 4], color: ACCENTS[i % 4], display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: "var(--weight-semibold)" }}>
                {cat.icon}
              </span>
              <span style={{ fontSize: "var(--text-sm)", fontWeight: isActive ? "var(--weight-semibold)" : "var(--weight-medium)", color: isActive || isHovered ? "var(--navy-900)" : "var(--ink-700)", flex: 1 }}>{cat.title}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-300)" }}>{cat.count}</span>
            </button>
          );
        })}
      </div>
      <div style={{ padding: "40px 44px", display: "flex", flexDirection: "column", gap: 16, position: "relative" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: 160, height: 160, background: tint, opacity: 0.55, borderRadius: "0 0 0 100%" }} />
        <div key={active} style={{ position: "relative", display: "flex", flexDirection: "column", gap: 16, animation: "fade-in-up .35s var(--ease-standard)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 54, height: 54, borderRadius: "var(--radius-lg)", background: tint, color: accent, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: "var(--weight-semibold)" }}>
              {c.icon}
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-2xl)", color: "var(--navy-900)" }}>{c.title}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: accent, fontWeight: "var(--weight-semibold)" }}>{c.count} services in this module</div>
            </div>
          </div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-base)", color: "var(--ink-500)", lineHeight: "var(--leading-base)", maxWidth: 440 }}>{c.description}</div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, background: "var(--paper-alt)", borderRadius: "var(--radius-md)", padding: "8px 14px" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "var(--tracking-wide)", textTransform: "uppercase", color: "var(--ink-300)" }}>Turnaround</span>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: 13, color: "var(--navy-900)" }}>{c.turnaround}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, background: "var(--paper-alt)", borderRadius: "var(--radius-md)", padding: "8px 14px" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "var(--tracking-wide)", textTransform: "uppercase", color: "var(--ink-300)" }}>You&apos;ll need</span>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: 13, color: "var(--navy-900)" }}>{c.docs}</span>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {c.services.map((sv, si) => (
              <div key={sv} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: "var(--radius-md)", background: "var(--white)", border: "1px solid var(--ink-100)", animation: `fade-in-up .35s var(--ease-standard) ${si * 0.06}s both` }}>
                <span style={{ width: 20, height: 20, flexShrink: 0, borderRadius: "50%", background: tint, color: accent, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700 }}>✓</span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--ink-700)" }}>{sv}</span>
              </div>
            ))}
          </div>
          <div>
            <button onClick={onSelect} style={{ fontFamily: "var(--font-body)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-sm)", padding: "12px 22px", borderRadius: "var(--radius-pill)", border: "none", background: accent, color: "var(--white)", cursor: "pointer" }}>
              View all {c.title} services →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
