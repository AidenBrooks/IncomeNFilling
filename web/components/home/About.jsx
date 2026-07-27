"use client";
import { useState } from "react";
import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ABOUT_CHECKS, ABOUT_STATS } from "@/data/content";

function HL({ c, children }) {
  return <span style={{ color: c === "g" ? "var(--gold-600)" : "var(--navy-700)", fontWeight: "var(--weight-semibold)" }}>{children}</span>;
}

export function About() {
  const [hovImg, setHovImg] = useState(false);
  return (
    <section id="about" style={{ position: "relative", background: "var(--white)", padding: "clamp(56px, 10vw, 100px) clamp(16px, 4vw, 32px)", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(43,108,214,.13) 1px,transparent 1px)", backgroundSize: "26px 26px",
          WebkitMaskImage: "radial-gradient(120% 90% at 88% 30%,black,transparent 70%)", maskImage: "radial-gradient(120% 90% at 88% 30%,black,transparent 70%)", opacity: 0.6,
        }}
      />
      <div style={{ position: "absolute", top: -140, left: -120, width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle,rgba(239,168,46,.12),transparent 66%)", pointerEvents: "none" }} />
      <div className="rsp-2col" style={{ position: "relative", maxWidth: "var(--container-max)", margin: "0 auto", display: "grid", gridTemplateColumns: "1.02fr .98fr", gap: "clamp(32px, 6vw, 64px)", alignItems: "center" }}>
        <div>
          <Eyebrow>Who We Are</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-4xl)", color: "var(--navy-900)", margin: "18px 0 22px", letterSpacing: "var(--tracking-tight)", lineHeight: 1.08 }}>
            About Income N Filing
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-base)", color: "var(--ink-500)", lineHeight: "var(--leading-lg)", margin: "0 0 16px", maxWidth: 520 }}>
            <HL>Income N Filing</HL> is your trusted partner for business compliance and tax advisory. Since <HL c="g">2017</HL>, we have helped businesses confidently navigate the complexities of regulatory compliance.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-base)", color: "var(--ink-500)", lineHeight: "var(--leading-lg)", margin: "0 0 16px", maxWidth: 520 }}>
            Our mission is to provide a <HL c="g">single, seamless solution</HL> for all your compliance, taxation, registrations, accounting, and legal needs — handled with precision and professionalism, so you can stay focused on growing your business.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-base)", color: "var(--ink-500)", lineHeight: "var(--leading-lg)", margin: "0 0 28px", maxWidth: 520 }}>
            From <HL>new startups</HL> to <HL>established enterprises</HL>, we deliver tailored services across incorporation, statutory registrations, income tax filing, GST compliance, and corporate audits.
          </p>
          <div className="rsp-cols-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 30 }}>
            {ABOUT_CHECKS.map((c) => (
              <div key={c.t} style={{ display: "flex", alignItems: "center", gap: 11, padding: "11px 13px", background: "var(--gold-050)", border: "1px solid var(--gold-200)", borderRadius: "var(--radius-md)" }}>
                <span style={{ flexShrink: 0, width: 26, height: 26, borderRadius: "50%", background: "var(--gold-500)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--navy-950)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d={c.icon} />
                  </svg>
                </span>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-medium)", fontSize: 13.5, color: "var(--navy-900)", lineHeight: 1.2 }}>{c.t}</span>
              </div>
            ))}
          </div>
          <div style={{ position: "relative", background: "linear-gradient(120deg,var(--navy-950),var(--navy-800))", borderRadius: "var(--radius-lg)", padding: "26px 30px", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -24, left: 18, fontFamily: "Georgia,serif", fontSize: 120, lineHeight: 1, color: "var(--gold-500)", opacity: 0.18 }}>&ldquo;</div>
            <div style={{ position: "absolute", top: 0, right: 0, width: 150, height: 150, background: "radial-gradient(circle at 80% 20%,rgba(239,168,46,.22),transparent 62%)" }} />
            <p style={{ position: "relative", fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-xl)", color: "var(--gold-400)", margin: 0, lineHeight: 1.35 }}>
              When you get your business started with us, there is no looking back.
            </p>
            <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 8, marginTop: 16 }}>
              <span style={{ width: 22, height: 2, background: "var(--gold-500)" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--navy-200)" }}>Anish · Founder</span>
            </div>
          </div>
        </div>
        <div style={{ position: "relative", height: "clamp(340px, 72vw, 520px)", maxHeight: 520 }}>
          <div style={{ position: "absolute", right: 12, top: 24, bottom: 24, width: "74%", borderRadius: "var(--radius-xl)", background: "linear-gradient(150deg,var(--navy-050),#dbe6fb)" }} />
          <div style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", width: 210, height: 210, borderRadius: "50%", border: "2px dashed var(--gold-300,#f5cf82)", animation: "spin-slow 40s linear infinite", pointerEvents: "none" }} />
          <div
            onMouseEnter={() => setHovImg(true)}
            onMouseLeave={() => setHovImg(false)}
            style={{
              position: "absolute", left: 24, top: 60, right: 40, bottom: 70, borderRadius: "var(--radius-xl)", overflow: "hidden",
              boxShadow: hovImg ? "0 34px 60px rgba(15,42,66,.32)" : "0 24px 46px rgba(15,42,66,.24)",
              transform: hovImg ? "rotate(0deg) scale(1.01)" : "rotate(-2.4deg)", transition: "transform .4s var(--ease-standard),box-shadow .4s", border: "6px solid var(--white)",
            }}
          >
            <Image src="/images/about-office.jpg" alt="Our office" fill sizes="440px" style={{ objectFit: "cover", objectPosition: "center" }} />
            <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 90, background: "linear-gradient(transparent,rgba(15,42,66,.55))", pointerEvents: "none" }} />
          </div>
          <div style={{ position: "absolute", left: 0, top: 24, display: "inline-flex", alignItems: "center", gap: 8, background: "var(--white)", borderRadius: "var(--radius-pill)", padding: "8px 15px", boxShadow: "var(--shadow-md)" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--status-positive)", animation: "pulse-dot 2s infinite" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".05em", color: "var(--navy-800)" }}>7+ years · pan-India</span>
          </div>
          <div style={{ position: "absolute", right: 0, bottom: 6, display: "flex", gap: 0, background: "var(--white)", borderRadius: "var(--radius-lg)", boxShadow: "0 18px 40px rgba(15,42,66,.2)", overflow: "hidden" }}>
            {ABOUT_STATS.map((s, i) => (
              <div key={s.l} style={{ padding: "14px 18px", textAlign: "center", borderLeft: i ? "1px solid var(--ink-100)" : "none" }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-2xl)", color: "var(--navy-900)", lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 10.5, color: "var(--ink-500)", marginTop: 4, whiteSpace: "nowrap" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
