"use client";
import { useEffect, useState } from "react";
import { STEPS } from "@/data/content";

function StepVisual({ step }) {
  if (step === 0) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ alignSelf: "flex-start", maxWidth: "80%", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.1)", borderRadius: "14px 14px 14px 4px", padding: "10px 14px", fontFamily: "var(--font-body)", fontSize: 13, color: "var(--white)", animation: "fade-in-up .4s var(--ease-standard) both" }}>
          Hi, I need GST registration for my new firm 👋
        </div>
        <div style={{ alignSelf: "flex-end", maxWidth: "80%", background: "var(--whatsapp-green)", borderRadius: "14px 14px 4px 14px", padding: "10px 14px", fontFamily: "var(--font-body)", fontSize: 13, color: "var(--white)", animation: "fade-in-up .4s var(--ease-standard) .5s both" }}>
          Sure! Share your PAN &amp; address proof — we&rsquo;ll take it from here.
        </div>
        <div style={{ alignSelf: "flex-start", display: "flex", gap: 4, padding: "10px 14px", background: "rgba(255,255,255,.08)", borderRadius: "14px 14px 14px 4px", animation: "fade-in-up .4s var(--ease-standard) 1s both" }}>
          {[0, 1, 2].map((d) => (
            <span key={d} style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(255,255,255,.6)", animation: `float-y 1s ease-in-out ${d * 0.15}s infinite` }} />
          ))}
        </div>
      </div>
    );
  }
  if (step === 1) {
    const rows = [["GST registration", 100], ["Document verification", 80], ["Return preparation", 55], ["Authority filing", 30]];
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {rows.map((r, i) => (
          <div key={r[0]} style={{ animation: `fade-in-up .4s var(--ease-standard) ${i * 0.12}s both` }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-body)", fontSize: 12, color: "var(--white)", marginBottom: 6 }}>
              <span>{r[0]}</span>
              <span style={{ fontFamily: "var(--font-mono)", color: r[1] === 100 ? "var(--status-positive)" : "var(--gold-400)" }}>{r[1] === 100 ? "✓ Done" : r[1] + "%"}</span>
            </div>
            <div style={{ height: 6, borderRadius: 999, background: "rgba(255,255,255,.1)", overflow: "hidden" }}>
              <div style={{ height: "100%", borderRadius: 999, background: r[1] === 100 ? "var(--status-positive)" : "var(--gold-500)", width: r[1] + "%", animation: `grow-w 1s var(--ease-standard) ${i * 0.12}s both` }} />
            </div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, padding: "8px 0" }}>
      <div style={{ position: "relative", width: 80, height: 80, borderRadius: "50%", background: "var(--status-positive)", display: "flex", alignItems: "center", justifyContent: "center", animation: "pop-in .5s var(--ease-emphasized) both" }}>
        <span style={{ color: "var(--white)", fontSize: 38, fontWeight: 700 }}>✓</span>
        <span style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "2px solid var(--status-positive)", animation: "pulse-ring 2s infinite" }} />
      </div>
      <div style={{ background: "var(--white)", borderRadius: "var(--radius-md)", padding: "14px 20px", textAlign: "center", boxShadow: "var(--shadow-md)", animation: "fade-in-up .4s var(--ease-standard) .3s both" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "var(--tracking-widest)", textTransform: "uppercase", color: "var(--ink-300)" }}>Certificate Issued</div>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "var(--navy-900)", margin: "4px 0" }}>GSTIN 19ABCDE1234F1Z5</div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--status-positive)" }}>● Active · Reminders on</div>
      </div>
    </div>
  );
}

export function Stepper() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % STEPS.length), 3800);
    return () => clearInterval(id);
  }, [paused]);
  const icons = ["SHARE", "HANDLE", "DONE"];
  const s = STEPS[active];

  return (
    <div className="rsp-2col" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} style={{ display: "grid", gridTemplateColumns: "minmax(0,340px) minmax(0,1fr)", gap: 24, alignItems: "stretch" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {STEPS.map((st, i) => (
          <button
            key={st.n}
            onClick={() => setActive(i)}
            style={{
              textAlign: "left", display: "flex", alignItems: "center", gap: 16, padding: "18px 20px", borderRadius: "var(--radius-lg)",
              border: "1px solid " + (active === i ? "var(--gold-400)" : "var(--ink-100)"), background: active === i ? "var(--white)" : "transparent",
              boxShadow: active === i ? "var(--shadow-md)" : "none", cursor: "pointer", transition: "all .3s var(--ease-standard)", position: "relative", overflow: "hidden",
            }}
          >
            <span style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: "var(--gold-500)", transform: active === i ? "scaleY(1)" : "scaleY(0)", transformOrigin: "top", transition: "transform .3s" }} />
            <span style={{ width: 44, height: 44, flexShrink: 0, borderRadius: "50%", background: active === i ? "var(--gold-500)" : "var(--navy-050)", color: active === i ? "var(--navy-950)" : "var(--navy-700)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, transition: "all .3s" }}>
              {st.n}
            </span>
            <span>
              <span style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-base)", color: active === i ? "var(--navy-900)" : "var(--ink-700)" }}>{st.t}</span>
              <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "var(--tracking-widest)", textTransform: "uppercase", color: active === i ? "var(--gold-600)" : "var(--ink-300)", marginTop: 4 }}>{icons[i]}</span>
            </span>
          </button>
        ))}
      </div>
      <div style={{ position: "relative", borderRadius: "var(--radius-xl)", overflow: "hidden", background: "var(--white)", border: "1px solid var(--ink-100)", boxShadow: "var(--shadow-md)", padding: "32px 34px", display: "flex", flexDirection: "column", justifyContent: "center", minHeight: 340 }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: 200, height: 200, background: "var(--gold-500)", opacity: 0.1, borderRadius: "0 0 0 100%" }} />
        <div key={active} style={{ position: "relative", animation: "fade-in-up .4s var(--ease-standard)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
            <span style={{ width: 48, height: 48, flexShrink: 0, borderRadius: "var(--radius-md)", background: "var(--gold-500)", color: "var(--navy-950)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20 }}>
              {s.n}
            </span>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-2xl)", color: "var(--navy-900)", letterSpacing: "var(--tracking-tight)" }}>{s.t}</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ink-500)", marginTop: 2, maxWidth: 420 }}>{s.d}</div>
            </div>
          </div>
          <div style={{ background: "var(--navy-950)", borderRadius: "var(--radius-lg)", padding: "20px 22px", minHeight: 180, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <StepVisual step={active} />
          </div>
        </div>
        <div style={{ position: "relative", display: "flex", gap: 8, marginTop: 24 }}>
          {STEPS.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} style={{ width: active === i ? 30 : 10, height: 6, borderRadius: 999, border: "none", padding: 0, background: active === i ? "var(--gold-500)" : "var(--ink-100)", cursor: "pointer", transition: "all .3s" }} />
          ))}
        </div>
      </div>
    </div>
  );
}
