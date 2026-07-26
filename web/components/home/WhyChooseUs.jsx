"use client";
import { useState } from "react";
import { SectionHead } from "@/components/ui/Eyebrow";
import { WhyIcon } from "@/components/shared/icons";
import { WHY_CHOOSE_US } from "@/data/content";

function WhyCard({ f, i }) {
  const [h, setH] = useState(false);
  const [pos, setPos] = useState({ x: 50, y: 0 });
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  };
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      onMouseMove={onMove}
      style={{
        position: "relative", background: "var(--white)", borderRadius: "var(--radius-xl)", padding: "34px 26px 30px",
        border: "1px solid " + (h ? "var(--gold-300,#f5cf82)" : "var(--ink-100)"), overflow: "hidden", textAlign: "center", cursor: "default",
        transform: h ? "translateY(-6px)" : "none", boxShadow: h ? "0 24px 46px rgba(15,42,66,.14)" : "var(--shadow-sm)",
        transition: "transform .35s var(--ease-standard),box-shadow .35s,border-color .35s",
      }}
    >
      <div style={{ position: "absolute", inset: 0, opacity: h ? 1 : 0, transition: "opacity .35s", background: `radial-gradient(280px circle at ${pos.x}% ${pos.y}%,rgba(239,168,46,.12),transparent 60%)`, pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,var(--gold-400),var(--gold-600))", transform: h ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left", transition: "transform .4s var(--ease-standard)" }} />
      <span style={{ position: "absolute", top: 14, right: 18, fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700, color: h ? "var(--gold-500)" : "var(--ink-100)", transition: "color .35s" }}>
        {String(i + 1).padStart(2, "0")}
      </span>
      <div style={{ position: "relative", width: 58, height: 58, margin: "0 auto 18px", borderRadius: "50%", background: h ? "var(--gold-500)" : "var(--navy-950)", color: h ? "var(--navy-950)" : "var(--gold-400)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .35s,color .35s", transform: h ? "rotate(-6deg) scale(1.06)" : "none" }}>
        <WhyIcon code={f.icon} />
        {h && <span style={{ position: "absolute", inset: -5, borderRadius: "50%", border: "2px solid var(--gold-400)", animation: "pulse-ring 1.8s infinite" }} />}
      </div>
      <div style={{ position: "relative", fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-lg)", color: "var(--navy-900)", marginBottom: 8 }}>{f.title}</div>
      <div style={{ position: "relative", fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", color: "var(--ink-500)", lineHeight: "var(--leading-sm)", maxWidth: 260, margin: "0 auto" }}>{f.description}</div>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section style={{ position: "relative", padding: "86px 32px 96px", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(43,108,214,.11) 1px,transparent 1px)", backgroundSize: "28px 28px",
          WebkitMaskImage: "radial-gradient(120% 80% at 50% 0%,black,transparent 72%)", maskImage: "radial-gradient(120% 80% at 50% 0%,black,transparent 72%)", opacity: 0.55,
        }}
      />
      <div style={{ position: "relative", maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <SectionHead eyebrow="Why Us" title="Why Businesses Choose Us" sub="Professional, secure, and dependable compliance services — hover any card to explore." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {WHY_CHOOSE_US.map((f, i) => (
            <WhyCard key={f.title} f={f} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
