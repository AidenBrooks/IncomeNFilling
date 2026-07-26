"use client";
import { useState } from "react";
import { ServiceIcon } from "@/components/shared/icons";
import { GROUP_ACCENT, GROUP_TINT } from "@/data/categories";

export function ServiceCard({ c, i, selCount, onClick }) {
  const [h, setH] = useState(false);
  const ac = GROUP_ACCENT[c.group] || "var(--gold-500)";
  const tint = GROUP_TINT[c.group] || "var(--gold-050)";
  const preview = c.services.slice(0, 3);
  const more = c.count - preview.length;
  const notch = { position: "absolute", width: 22, height: 22, borderRadius: "50%", background: "var(--paper)", left: "calc(100% - 96px)", transform: "translateX(-50%)", zIndex: 6 };

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        position: "relative", borderRadius: "var(--radius-lg)", cursor: "pointer", overflow: "hidden", display: "flex", minHeight: 252,
        boxShadow: h ? "0 26px 50px rgba(15,42,66,.18)" : "var(--shadow-sm)", transform: h ? "translateY(-6px)" : "none",
        transition: "box-shadow .4s var(--ease-standard),transform .4s var(--ease-standard)",
        animation: `fade-in-up .4s var(--ease-standard) ${i * 0.04}s both`,
      }}
    >
      <span aria-hidden style={{ ...notch, top: -11 }} />
      <span aria-hidden style={{ ...notch, bottom: -11 }} />
      <span aria-hidden style={{ position: "absolute", top: 12, bottom: 12, left: "calc(100% - 96px)", borderLeft: "2px dashed var(--ink-100)", zIndex: 5 }} />
      <div style={{ position: "relative", flex: 1, background: "var(--white)", border: "1px solid " + (h ? ac : "var(--ink-100)"), borderRight: "none", borderRadius: "var(--radius-lg) 0 0 var(--radius-lg)", display: "flex", flexDirection: "column", padding: "20px 22px", transition: "border-color .3s", overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--ink-300)", marginBottom: 16 }}>
          <span>File No. {String(i + 1).padStart(2, "0")}</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 5, color: ac, fontWeight: "var(--weight-semibold)" }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: ac }} />
            {c.group}
          </span>
        </div>
        <div style={{ marginBottom: 12 }}>
          <div style={{ width: 50, height: 50, borderRadius: 13, background: h ? ac : tint, color: h ? "var(--white)" : ac, display: "flex", alignItems: "center", justifyContent: "center", transition: "background .35s,color .35s", marginBottom: 12 }}>
            <ServiceIcon code={c.icon} size={24} />
          </div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-lg)", color: "var(--navy-900)", lineHeight: 1.2, overflowWrap: "break-word", textWrap: "balance" }}>{c.title}</div>
        </div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", color: "var(--ink-500)", lineHeight: "var(--leading-sm)" }}>{c.description}</div>
        <div style={{ overflow: "hidden", maxHeight: h ? 70 : 0, opacity: h ? 1 : 0, transition: "max-height .45s var(--ease-standard),opacity .3s", marginTop: h ? 12 : 0 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {preview.map((s, j) => (
              <span key={s} style={{ fontFamily: "var(--font-body)", fontSize: 10.5, fontWeight: "var(--weight-medium)", padding: "4px 9px", borderRadius: "var(--radius-pill)", background: tint, color: "var(--navy-800)", border: "1px solid " + ac + "33", transform: h ? "translateY(0)" : "translateY(6px)", transition: `transform .3s ${0.05 + j * 0.05}s` }}>
                {s}
              </span>
            ))}
            {more > 0 && (
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, fontWeight: 700, padding: "4px 9px", borderRadius: "var(--radius-pill)", background: "var(--navy-950)", color: "var(--white)" }}>+{more}</span>
            )}
          </div>
        </div>
        <div style={{ marginTop: "auto", paddingTop: 14, fontFamily: "var(--font-body)", fontSize: 12, fontWeight: "var(--weight-semibold)", color: h ? ac : "var(--ink-500)", transition: "color .3s", display: "inline-flex", alignItems: "center", gap: 7 }}>
          Choose services
          <span style={{ display: "inline-block", transform: h ? "translateX(4px)" : "none", transition: "transform .3s" }}>→</span>
        </div>
      </div>
      <div style={{ position: "relative", width: 96, flexShrink: 0, background: `linear-gradient(165deg,${ac},var(--navy-950))`, borderRadius: "0 var(--radius-lg) var(--radius-lg) 0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", padding: "20px 0", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,.14) 1px,transparent 1px)", backgroundSize: "12px 12px", opacity: 0.4 }} />
        <div style={{ position: "relative", fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: ".3em", textTransform: "uppercase", color: "rgba(255,255,255,.7)", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>Services</div>
        <div style={{ position: "relative", textAlign: "center", lineHeight: 1 }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 40, color: "var(--white)", letterSpacing: "-.02em" }}>{selCount > 0 ? selCount : c.count}</div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 8.5, letterSpacing: ".1em", textTransform: "uppercase", color: selCount > 0 ? "#7fe6a6" : "rgba(255,255,255,.6)", marginTop: 4 }}>{selCount > 0 ? "picked" : "total"}</div>
        </div>
        <div style={{ position: "relative", width: 36, height: 36, borderRadius: "50%", background: "var(--white)", color: "var(--navy-950)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, transition: "transform .3s", transform: h ? "scale(1.12)" : "none" }}>→</div>
      </div>
    </div>
  );
}
