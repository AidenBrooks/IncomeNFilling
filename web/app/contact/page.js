"use client";
import { Fragment, useState } from "react";
import { useBP } from "@/lib/useBP";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { OfficeMap } from "@/components/shared/OfficeMap";
import { CallIcon, WhatsAppIcon, EmailIcon, CheckCircleIcon } from "@/components/shared/icons";
import { WHATSAPP_URL, PHONE_HREF } from "@/data/content";

const CAT = ["GST", "Income Tax", "Incorporation", "Corporate Compliance", "Accounting", "Licenses", "Tax Notice"];

const CHANNELS = [
  { key: "call", label: "Call us", footLabel: "Call", href: PHONE_HREF, accent: "var(--gold-500)", icon: <CallIcon size={19} color="#fff" /> },
  { key: "wa", label: "WhatsApp", href: WHATSAPP_URL, accent: "var(--whatsapp-green)", icon: <WhatsAppIcon size={19} color="#fff" /> },
  { key: "email", label: "Email", footLabel: "Email", href: `mailto:support@incomenfiling.com`, accent: "var(--navy-600)", icon: <EmailIcon size={19} color="#fff" /> },
];

function Label({ children }) {
  return <label style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 600, letterSpacing: ".05em", textTransform: "uppercase", color: "var(--ink-500)" }}>{children}</label>;
}

export default function ContactPage() {
  const bp = useBP();
  const [cat, setCat] = useState("");
  const [f, setF] = useState({ name: "", email: "", phone: "", msg: "" });
  const [sent, setSent] = useState(false);
  const set = (k, v) => setF((o) => ({ ...o, [k]: v }));
  const iStyle = { width: "100%", boxSizing: "border-box", fontFamily: "var(--font-body)", fontSize: 14.5, padding: "13px 16px", borderRadius: "var(--radius-md)", border: "1.5px solid var(--ink-100)", background: "var(--navy-050)", color: "var(--navy-900)", outline: "none", transition: "border-color .15s,box-shadow .15s" };
  const foc = (e) => {
    e.currentTarget.style.borderColor = "var(--gold-500)";
    e.currentTarget.style.boxShadow = "0 0 0 4px rgba(212,167,71,.15)";
    e.currentTarget.style.background = "var(--white)";
  };
  const blur = (e) => {
    e.currentTarget.style.borderColor = "var(--ink-100)";
    e.currentTarget.style.boxShadow = "none";
    e.currentTarget.style.background = "var(--navy-050)";
  };
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <WhatsAppButton />
      <NavBar active="contact" />
      <section style={{ background: "linear-gradient(150deg,var(--navy-950) 0%,var(--navy-900) 55%,var(--navy-800) 100%)", padding: bp.mobile ? "48px 20px 116px" : "70px 32px 128px", position: "relative", overflow: "hidden", textAlign: "center" }}>
        <div style={{ position: "absolute", top: -80, left: "6%", width: 230, height: 230, borderRadius: 46, background: "radial-gradient(circle,rgba(212,167,71,.3),transparent 68%)", transform: "rotate(-14deg)", animation: "float-y 7s ease-in-out infinite", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 20, right: "10%", width: 130, height: 130, border: "2px dashed rgba(212,167,71,.28)", borderRadius: "50%", transform: "rotate(18deg)", animation: "float-y 5.5s ease-in-out infinite", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,.05) 1px,transparent 1px)", backgroundSize: "26px 26px", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: 780, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 9, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--gold-400)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 18, background: "rgba(212,167,71,.1)", border: "1px solid rgba(212,167,71,.25)", padding: "6px 15px", borderRadius: "var(--radius-pill)" }}>
            <span style={{ position: "relative", width: 8, height: 8, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
              <span aria-hidden style={{ position: "absolute", inset: -3, borderRadius: "50%", border: "1.5px solid var(--status-positive)", opacity: 0.5, animation: "pulse-ring 2s infinite" }} />
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--status-positive)" }} />
            </span>
            Advisors online · replies in minutes
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: bp.mobile ? "var(--text-4xl)" : "var(--text-5xl)", color: "var(--white)", margin: "0 0 14px", letterSpacing: "var(--tracking-tight)", lineHeight: 1.08 }}>
            Let&apos;s start a <span style={{ color: "var(--gold-400)", whiteSpace: "nowrap" }}>conversation</span>
          </h1>
          <p style={{ color: "var(--navy-300)", margin: "0 auto 30px", maxWidth: 520, fontFamily: "var(--font-body)", fontSize: "var(--text-lg)", lineHeight: 1.5 }}>
            Tell us what you&apos;re working on and the right advisor will take it from here — call, WhatsApp, email or drop by an office.
          </p>
          <div style={{ display: "inline-flex", flexWrap: "wrap", gap: 0, justifyContent: "center", alignItems: "center", background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.1)", borderRadius: "var(--radius-pill)", padding: "6px 6px" }}>
            {[["Free first consultation"], ["Reply within working hours"], ["No obligation, ever"]].map((s, i, arr) => (
              <Fragment key={s[0]}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", fontFamily: "var(--font-body)", fontSize: 13.5, color: "var(--white)" }}>
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="var(--gold-400)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {s[0]}
                </span>
                {i < arr.length - 1 && <span aria-hidden style={{ width: 1, height: 18, background: "rgba(255,255,255,.14)" }} />}
              </Fragment>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center", marginTop: 30 }}>
            {[["1000+", "businesses served"], ["2", "offices, Pan-India"], ["9+", "years of expertise"]].map((s, i, arr) => (
              <Fragment key={s[1]}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "var(--gold-400)" }}>{s[0]}</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--navy-300)" }}>{s[1]}</span>
                </div>
                {i < arr.length - 1 && <span aria-hidden style={{ width: 1, height: 22, background: "rgba(255,255,255,.14)" }} />}
              </Fragment>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: "0 32px 90px", maxWidth: "var(--container-max)", margin: "0 auto", marginTop: -80, position: "relative" }}>
        <div style={{ marginBottom: 26 }}>
          <OfficeMap contactChannels={CHANNELS} />
        </div>
        <div id="contact-form" style={{ maxWidth: 820, margin: "0 auto", scrollMarginTop: 90 }}>
          <div style={{ background: "var(--white)", borderRadius: "var(--radius-xl)", boxShadow: "0 24px 55px rgba(11,31,58,.14)", padding: bp.mobile ? "28px 22px" : "var(--space-8)", position: "relative", overflow: "hidden", minHeight: 520 }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, background: "linear-gradient(90deg,var(--gold-400),var(--gold-600))" }} />
            {sent ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", minHeight: 460, animation: "fade-in-up .4s var(--ease-standard) both" }}>
                <div style={{ position: "relative", width: 88, height: 88, marginBottom: 22 }}>
                  <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "var(--gold-100)" }} />
                  <span style={{ position: "absolute", inset: -8, borderRadius: "50%", border: "2px solid var(--gold-300)", animation: "pulse-ring 2s infinite" }} />
                  <span style={{ position: "relative", display: "block" }}>
                    <CheckCircleIcon size={88} color="var(--gold-600)" />
                  </span>
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-2xl)", color: "var(--navy-900)", margin: "0 0 10px" }}>
                  Thanks{f.name ? ", " + f.name.split(" ")[0] : ""}! 🎉
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-base)", color: "var(--ink-500)", margin: "0 0 26px", maxWidth: 360, lineHeight: 1.55 }}>
                  Your request{cat ? " about " + cat : ""} is in. An advisor from our team will reach out within a few working hours.
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 14, padding: "12px 22px", borderRadius: "var(--radius-pill)", background: "var(--whatsapp-green)", color: "#fff", textDecoration: "none", boxShadow: "0 4px 14px rgba(37,211,102,.32)" }}>
                    Continue on WhatsApp ›
                  </a>
                  <button
                    onClick={() => {
                      setSent(false);
                      setF({ name: "", email: "", phone: "", msg: "" });
                      setCat("");
                    }}
                    style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 14, padding: "12px 22px", borderRadius: "var(--radius-pill)", border: "1.5px solid var(--ink-100)", background: "var(--white)", color: "var(--navy-800)", cursor: "pointer" }}
                  >
                    Send another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-xl)", color: "var(--navy-900)" }}>Request a free consultation</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "var(--ink-500)", marginTop: 4 }}>No obligation — we&apos;ll scope it on a quick call.</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  <Label>What do you need help with?</Label>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {CAT.map((c) => (
                      <button
                        type="button"
                        key={c}
                        onClick={() => setCat(c)}
                        style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, padding: "8px 15px", borderRadius: "var(--radius-pill)", border: "1.5px solid " + (cat === c ? "var(--gold-500)" : "var(--ink-100)"), background: cat === c ? "var(--gold-050)" : "var(--white)", color: cat === c ? "var(--gold-600)" : "var(--navy-700)", cursor: "pointer", transition: "all .15s" }}
                      >
                        {cat === c ? "✓ " : ""}
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: bp.mobile ? "1fr" : "1fr 1fr", gap: 12 }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                    <Label>Full name</Label>
                    <input required value={f.name} onChange={(e) => set("name", e.target.value)} onFocus={foc} onBlur={blur} placeholder="Jane Doe" style={iStyle} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                    <Label>Phone</Label>
                    <input value={f.phone} onChange={(e) => set("phone", e.target.value)} onFocus={foc} onBlur={blur} placeholder="+91 …" style={iStyle} />
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  <Label>Email address</Label>
                  <input required type="email" value={f.email} onChange={(e) => set("email", e.target.value)} onFocus={foc} onBlur={blur} placeholder="jane@company.com" style={iStyle} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  <Label>Briefly describe your requirement</Label>
                  <textarea value={f.msg} onChange={(e) => set("msg", e.target.value)} onFocus={foc} onBlur={blur} rows={3} placeholder="e.g. need GST registration for a new LLP" style={{ ...iStyle, resize: "vertical", minHeight: 88 }} />
                </div>
                <button
                  type="submit"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 10px 26px rgba(212,167,71,.42)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = "0 4px 14px rgba(212,167,71,.32)";
                  }}
                  style={{ marginTop: 4, display: "flex", alignItems: "center", justifyContent: "center", gap: 9, fontFamily: "var(--font-body)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-base)", padding: 15, borderRadius: "var(--radius-pill)", border: "none", background: "linear-gradient(135deg,var(--gold-400),var(--gold-500))", color: "var(--navy-950)", cursor: "pointer", boxShadow: "0 4px 14px rgba(212,167,71,.32)", transition: "transform .18s,box-shadow .18s" }}
                >
                  Book my free consultation
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
                <div style={{ textAlign: "center", fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ink-300)" }}>🔒 Your details stay private — used only to contact you back.</div>
              </form>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
