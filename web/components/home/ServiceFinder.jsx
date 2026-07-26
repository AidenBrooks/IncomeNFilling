"use client";
import { useState } from "react";
import { HOME_CATEGORIES } from "@/data/categories";
import { ACCENTS, TINTS } from "@/data/theme";

export function ServiceFinder({ onSelect }) {
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const [prevQ, setPrevQ] = useState(q);
  if (q !== prevQ) {
    setPrevQ(q);
    setActive(0);
  }
  const filtered = HOME_CATEGORIES.filter((cat) => cat.title.toLowerCase().includes(q.toLowerCase())).slice(0, 4);
  const c = filtered[active];
  const realIndex = c ? HOME_CATEGORIES.indexOf(c) : 0;
  const accent = ACCENTS[realIndex % 4], tint = TINTS[realIndex % 4];

  return (
    <div style={{ position: "relative", borderRadius: "var(--radius-xl)", background: "var(--white)", boxShadow: "var(--shadow-lg)", padding: 26, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "var(--tracking-widest)", textTransform: "uppercase", color: "var(--gold-600)", marginBottom: 4 }}>
          Quick Service Finder
        </div>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-lg)", color: "var(--navy-900)" }}>
          Not sure where to start?
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, background: "var(--paper-alt)", borderRadius: "var(--radius-pill)", padding: "9px 14px" }}>
        <span style={{ fontSize: 13, color: "var(--ink-300)" }}>⌕</span>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search a service category…"
          style={{ border: "none", background: "none", outline: "none", fontFamily: "var(--font-body)", fontSize: 13, width: "100%", color: "var(--navy-900)" }}
        />
      </div>
      {filtered.length > 0 ? (
        <>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>
            {filtered.map((cat, i) => {
              const ri = HOME_CATEGORIES.indexOf(cat);
              return (
                <button
                  key={cat.icon}
                  onClick={() => setActive(i)}
                  style={{
                    display: "flex", flexDirection: "column", alignItems: "center", gap: 6, padding: "12px 4px",
                    borderRadius: "var(--radius-md)", border: active === i ? `2px solid ${ACCENTS[ri % 4]}` : "1px solid var(--ink-100)",
                    background: active === i ? TINTS[ri % 4] : "var(--white)", cursor: "pointer", transition: "all .2s",
                  }}
                >
                  <span
                    style={{
                      width: 30, height: 30, borderRadius: "50%", background: active === i ? ACCENTS[ri % 4] : "var(--paper-alt)",
                      color: active === i ? "var(--white)" : "var(--ink-500)", display: "flex", alignItems: "center", justifyContent: "center",
                      fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: "var(--weight-semibold)", transition: "all .2s",
                    }}
                  >
                    {cat.icon}
                  </span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 10, color: "var(--navy-800)", textAlign: "center", lineHeight: 1.2 }}>
                    {cat.title.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>
          <div key={active + q} style={{ background: tint, borderRadius: "var(--radius-md)", padding: 16, display: "flex", flexDirection: "column", gap: 8, animation: "fade-in-up .35s var(--ease-standard)" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-base)", color: "var(--navy-900)" }}>{c.title}</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ink-500)", lineHeight: 1.5 }}>{c.description}</div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: accent, fontWeight: "var(--weight-semibold)" }}>{c.count} services</span>
              <span onClick={onSelect} style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: "var(--weight-semibold)", color: accent, cursor: "pointer" }}>
                View →
              </span>
            </div>
          </div>
        </>
      ) : (
        <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ink-500)", textAlign: "center", padding: "18px 0" }}>No matches — try a different term.</div>
      )}
      <div onClick={onSelect} style={{ textAlign: "center", fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-300)", cursor: "pointer" }}>
        or explore all 94 services →
      </div>
    </div>
  );
}
