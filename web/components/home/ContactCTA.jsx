"use client";
import { useState } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HeroCTAButton } from "@/components/ui/HeroCTAButton";
import { HOME_CATEGORIES } from "@/data/categories";
import { WHATSAPP_URL } from "@/data/content";

function CField({ tag = "input", children, ...props }) {
  const [f, setF] = useState(false);
  const Tag = tag;
  return (
    <Tag
      {...props}
      onFocus={() => setF(true)}
      onBlur={() => setF(false)}
      style={{
        fontFamily: "var(--font-body)", fontSize: 14, padding: "12px 14px", borderRadius: "var(--radius-md)",
        border: "1.5px solid " + (f ? "var(--gold-500)" : "var(--ink-100)"), background: f ? "var(--white)" : "var(--paper-alt)",
        color: "var(--navy-900)", outline: "none", width: "100%", boxSizing: "border-box",
        boxShadow: f ? "0 0 0 3px rgba(239,168,46,.16)" : "none", transition: "all .15s",
        ...(tag === "textarea" ? { resize: "vertical" } : {}),
      }}
    >
      {children}
    </Tag>
  );
}

export function ContactCTA() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" style={{ padding: "96px 32px", background: "var(--white)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(43,108,214,.16) 1px,transparent 1px)", backgroundSize: "26px 26px", opacity: 0.7 }} />
      <div style={{ position: "absolute", top: -120, left: "50%", transform: "translateX(-50%)", width: 560, height: 340, background: "radial-gradient(circle,rgba(239,168,46,.14),transparent 68%)" }} />
      <div style={{ position: "relative", maxWidth: 1060, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <Eyebrow>Get In Touch</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-3xl)", color: "var(--navy-900)", margin: "16px 0 0", letterSpacing: "var(--tracking-tight)" }}>
            Let&apos;s start a conversation
          </h2>
          <p style={{ fontFamily: "var(--font-body)", color: "var(--ink-500)", margin: "10px auto 0", maxWidth: 480 }}>
            Tell us what you need — a real advisor replies, usually within a couple of hours.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "0.92fr 1.08fr", background: "var(--white)", borderRadius: "var(--radius-xl)", overflow: "hidden", border: "1px solid var(--ink-100)", boxShadow: "0 30px 60px rgba(15,42,66,.16)" }}>
          <div style={{ position: "relative", overflow: "hidden", background: "linear-gradient(155deg,var(--gold-300,#f7cf82),var(--gold-500) 52%,var(--gold-600,#d8901f))", padding: "34px 30px", display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ position: "absolute", top: -70, right: -60, width: 210, height: 210, borderRadius: "50%", border: "22px solid rgba(15,42,66,.1)" }} />
            <div style={{ position: "absolute", bottom: -80, left: -60, width: 190, height: 190, borderRadius: "50%", background: "rgba(255,255,255,.16)" }} />
            <div style={{ position: "relative", display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: 7, background: "rgba(15,42,66,.14)", borderRadius: "var(--radius-pill)", padding: "6px 13px" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--navy-950)", animation: "pulse-dot 2s infinite" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".05em", textTransform: "uppercase", color: "var(--navy-950)", fontWeight: "var(--weight-semibold)" }}>Replies in under 2 hours</span>
            </div>
            <div style={{ position: "relative" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-2xl)", color: "var(--navy-950)", lineHeight: 1.15 }}>
                We&apos;d love to
                <br />
                hear from you.
              </div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(15,42,66,.72)", marginTop: 8, maxWidth: 280 }}>A quick question or a full compliance plan — reach us however suits you best.</div>
            </div>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                { t: "You reach out", d: "Send the form — takes about a minute." },
                { t: "A real advisor replies", d: "Not a bot. A person who scopes your need." },
                { t: "We map your next step", d: "A clear plan, no obligation to proceed." },
              ].map((s, i, arr) => (
                <div key={s.t} style={{ display: "flex", gap: 15, alignItems: "flex-start" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                    <span style={{ width: 34, height: 34, borderRadius: "50%", background: "var(--navy-950)", color: "var(--gold-400)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14, boxShadow: "0 4px 12px rgba(15,42,66,.25)" }}>
                      {i + 1}
                    </span>
                    {i < arr.length - 1 && <span style={{ width: 2, flex: 1, minHeight: 22, background: "repeating-linear-gradient(to bottom,rgba(15,42,66,.35) 0 4px,transparent 4px 9px)" }} />}
                  </div>
                  <div style={{ paddingBottom: i < arr.length - 1 ? 18 : 0 }}>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: 15, color: "var(--navy-950)", lineHeight: 1.2 }}>{s.t}</div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "rgba(15,42,66,.7)", marginTop: 2, lineHeight: 1.4 }}>{s.d}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ position: "relative", marginTop: "auto", display: "grid", gridTemplateColumns: "repeat(3,1fr)", paddingTop: 18, borderTop: "1px solid rgba(15,42,66,.16)" }}>
              {[["500+", "Clients"], ["4.9★", "Rating"], ["<2hr", "Avg reply"]].map((s, si) => (
                <div key={s[1]} style={{ textAlign: "center", borderLeft: si ? "1px solid rgba(15,42,66,.16)" : "none" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--text-xl)", color: "var(--navy-950)" }}>{s[0]}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: ".05em", textTransform: "uppercase", color: "rgba(15,42,66,.6)", marginTop: 2 }}>{s[1]}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ padding: "34px 32px" }}>
            {sent ? (
              <div style={{ height: "100%", minHeight: 300, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 14 }}>
                <div style={{ width: 66, height: 66, borderRadius: "50%", background: "var(--status-positive)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--white)", fontSize: 32, fontWeight: 700, animation: "pop-in .5s var(--ease-emphasized) both" }}>✓</div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-xl)", color: "var(--navy-900)" }}>Thanks — we&apos;ll be in touch!</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--ink-500)", maxWidth: 340 }}>Our team typically responds within a few working hours. For anything urgent, message us on WhatsApp.</div>
                <button onClick={() => setSent(false)} style={{ fontFamily: "var(--font-body)", fontWeight: "var(--weight-semibold)", fontSize: 13, padding: "10px 20px", borderRadius: "var(--radius-pill)", border: "1px solid var(--ink-100)", background: "var(--white)", color: "var(--navy-800)", cursor: "pointer" }}>
                  Send another →
                </button>
              </div>
            ) : (
              <>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-xl)", color: "var(--navy-900)", marginBottom: 4 }}>Send us a message</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ink-500)", marginBottom: 20 }}>We&apos;ll get back with a clear next step — no obligation.</div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  style={{ display: "flex", flexDirection: "column", gap: 14 }}
                >
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                    <CField required placeholder="Your name" />
                    <CField required placeholder="Phone" />
                  </div>
                  <CField required type="email" placeholder="Email address" />
                  <CField tag="select" defaultValue="">
                    <option value="" disabled>What do you need help with?</option>
                    {HOME_CATEGORIES.map((c) => (
                      <option key={c.title}>{c.title}</option>
                    ))}
                  </CField>
                  <CField tag="textarea" rows="4" placeholder="Tell us a little about your requirement…" />
                  <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
                    <HeroCTAButton variant="primary">Send Message</HeroCTAButton>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ink-300)" }}>
                      or{" "}
                      <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" style={{ color: "var(--whatsapp-green)", fontWeight: "var(--weight-semibold)" }}>
                        chat on WhatsApp
                      </a>
                    </span>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
