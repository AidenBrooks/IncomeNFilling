"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { WhatsAppIcon, CheckCircleIcon } from "@/components/shared/icons";
import { HUB_CATEGORIES } from "@/data/categories";
import { loadSelection, clearSelection } from "@/lib/selectionStorage";
import { WHATSAPP_NUMBER } from "@/data/content";

const NEXT_STEPS = [
  { t: "Advisor calls you", d: "Usually within 2 working hours, to confirm scope and answer questions." },
  { t: "Documents verified", d: "We check what you've shared against your checklist below." },
  { t: "Filed with authorities", d: "Prepared, submitted, and tracked until it's through." },
  { t: "Confirmation shared", d: "Certificate or acknowledgement sent to you — status: deployed." },
];

function findCategoryFor(serviceName) {
  return HUB_CATEGORIES.find((c) => c.services.includes(serviceName));
}

function Label({ children }) {
  return <label style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 600, letterSpacing: ".05em", textTransform: "uppercase", color: "var(--ink-500)" }}>{children}</label>;
}

export default function ServicesApplyPage() {
  const [serviceNames, setServiceNames] = useState(null); // null = not yet loaded (avoids empty-state flash)
  const [checked, setChecked] = useState({});
  const [f, setF] = useState({ name: "", phone: "", email: "", notes: "" });
  const [sent, setSent] = useState(false);
  const [sentSummary, setSentSummary] = useState(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => setServiceNames(loadSelection()));
    return () => cancelAnimationFrame(id);
  }, []);

  const grouped = useMemo(() => {
    if (!serviceNames) return [];
    const byCategory = new Map();
    for (const name of serviceNames) {
      const cat = findCategoryFor(name);
      if (!cat) continue;
      if (!byCategory.has(cat.title)) byCategory.set(cat.title, { cat, services: [] });
      byCategory.get(cat.title).services.push(name);
    }
    return [...byCategory.values()];
  }, [serviceNames]);

  const deliverables = useMemo(() => {
    const set = new Set();
    grouped.forEach((g) => (g.cat.deliverables || []).forEach((d) => set.add(d)));
    return [...set];
  }, [grouped]);

  const totalDocs = grouped.reduce((n, g) => n + (g.cat.docs?.length || 0), 0);
  const checkedCount = Object.values(checked).filter(Boolean).length;

  const toggleDoc = (key) => setChecked((s) => ({ ...s, [key]: !s[key] }));

  const waText = serviceNames && serviceNames.length
    ? `Hi! I'm interested in: ${serviceNames.join(", ")}. Could you help me get started?`
    : "Hi! I'd like to know more about your services.";
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;

  const submit = (e) => {
    e.preventDefault();
    setSentSummary({ names: serviceNames || [], name: f.name });
    clearSelection();
    setSent(true);
  };

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

  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <WhatsAppButton />
      <NavBar active="services" />

      <section style={{ background: "linear-gradient(150deg,var(--navy-950) 0%,var(--navy-900) 55%,var(--navy-800) 100%)", padding: "56px 32px 90px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,.05) 1px,transparent 1px)", backgroundSize: "26px 26px", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--gold-400)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 16, background: "rgba(212,167,71,.1)", border: "1px solid rgba(212,167,71,.25)", padding: "6px 14px", borderRadius: "var(--radius-pill)" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--status-positive)", animation: "pulse-dot 2s infinite" }} />
            Get started
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-4xl)", color: "var(--white)", margin: "0 0 12px", letterSpacing: "var(--tracking-tight)", lineHeight: 1.1 }}>
            Let&apos;s get your paperwork moving
          </h1>
          <p style={{ color: "var(--navy-300)", margin: "0 auto", maxWidth: 520, fontFamily: "var(--font-body)", fontSize: "var(--text-base)", lineHeight: 1.5 }}>
            A quick checklist so your advisor comes prepared — no upload required, just tell us what you have ready.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 32px 96px", maxWidth: 820, margin: "-56px auto 0", position: "relative" }}>
        {serviceNames === null ? null : sent ? (
          <div style={{ background: "var(--white)", borderRadius: "var(--radius-xl)", boxShadow: "0 24px 55px rgba(11,31,58,.14)", padding: "var(--space-8)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, background: "linear-gradient(90deg,var(--gold-400),var(--gold-600))" }} />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 6, marginBottom: 36 }}>
              <div style={{ position: "relative", width: 72, height: 72, marginBottom: 14 }}>
                <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "var(--gold-100)" }} />
                <span style={{ position: "absolute", inset: -8, borderRadius: "50%", border: "2px solid var(--gold-300)", animation: "pulse-ring 2s infinite" }} />
                <span style={{ position: "relative", display: "block" }}>
                  <CheckCircleIcon size={72} color="var(--gold-600)" />
                </span>
              </div>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-2xl)", color: "var(--navy-900)", margin: 0 }}>
                Thanks{sentSummary?.name ? ", " + sentSummary.name.split(" ")[0] : ""}! 🎉
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-base)", color: "var(--ink-500)", margin: 0, maxWidth: 420 }}>
                {sentSummary?.names?.length
                  ? <>Your request for <b style={{ color: "var(--navy-900)" }}>{sentSummary.names.join(", ")}</b> is in.</>
                  : "Your request is in."}
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 32 }}>
              {NEXT_STEPS.map((s, i) => (
                <div key={s.t} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                    <span style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--gold-500)", color: "var(--navy-950)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13 }}>{i + 1}</span>
                    {i < NEXT_STEPS.length - 1 && <span style={{ width: 2, flex: 1, minHeight: 20, background: "var(--ink-100)", marginTop: 4 }} />}
                  </div>
                  <div style={{ paddingBottom: 4 }}>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-base)", color: "var(--navy-900)" }}>{s.t}</div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ink-500)", marginTop: 2 }}>{s.d}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
              <a href={waHref} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 14, padding: "12px 22px", borderRadius: "var(--radius-pill)", background: "var(--whatsapp-green)", color: "#fff", textDecoration: "none", boxShadow: "0 4px 14px rgba(37,211,102,.32)" }}>
                <WhatsAppIcon size={17} color="#fff" /> Continue on WhatsApp
              </a>
              <Link href="/services" style={{ display: "inline-flex", alignItems: "center", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 14, padding: "12px 22px", borderRadius: "var(--radius-pill)", border: "1.5px solid var(--ink-100)", background: "var(--white)", color: "var(--navy-800)", textDecoration: "none" }}>
                Browse more services
              </Link>
            </div>
          </div>
        ) : grouped.length === 0 ? (
          <div style={{ background: "var(--white)", borderRadius: "var(--radius-xl)", boxShadow: "0 24px 55px rgba(11,31,58,.14)", padding: "56px 32px", textAlign: "center" }}>
            <div style={{ width: 64, height: 64, margin: "0 auto 18px", borderRadius: "50%", background: "var(--paper-alt)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26 }}>🗂</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-xl)", color: "var(--navy-900)", marginBottom: 8 }}>No services selected yet</h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--ink-500)", marginBottom: 22, maxWidth: 360, margin: "0 auto 22px" }}>
              Pick one or more services from the directory and hit &quot;Request selected&quot; — we&apos;ll bring you back here with a tailored checklist.
            </p>
            <Link href="/services" style={{ display: "inline-flex", fontFamily: "var(--font-body)", fontWeight: "var(--weight-semibold)", fontSize: 13, padding: "11px 22px", borderRadius: "var(--radius-pill)", border: "none", background: "var(--gold-500)", color: "var(--navy-950)", textDecoration: "none" }}>
              Browse services →
            </Link>
          </div>
        ) : (
          <>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
              {serviceNames.map((s) => (
                <span key={s} style={{ fontFamily: "var(--font-body)", fontSize: 12.5, fontWeight: "var(--weight-medium)", padding: "6px 13px", borderRadius: "var(--radius-pill)", background: "var(--white)", color: "var(--navy-800)", border: "1px solid var(--ink-100)", boxShadow: "var(--shadow-sm)" }}>
                  {s}
                </span>
              ))}
            </div>

            <a href={waHref} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", background: "var(--white)", border: "1px solid var(--ink-100)", borderRadius: "var(--radius-lg)", padding: "14px 18px", marginBottom: 24, boxShadow: "var(--shadow-sm)" }}>
              <span style={{ width: 40, height: 40, flexShrink: 0, borderRadius: "50%", background: "var(--whatsapp-green)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <WhatsAppIcon size={19} color="#fff" />
              </span>
              <span style={{ flex: 1 }}>
                <span style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: 14, color: "var(--navy-900)" }}>Skip the form — WhatsApp us directly</span>
                <span style={{ display: "block", fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--ink-500)" }}>Your selection comes pre-filled in the message.</span>
              </span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 18, color: "var(--ink-300)" }}>›</span>
            </a>

            <div style={{ background: "var(--white)", borderRadius: "var(--radius-xl)", boxShadow: "0 24px 55px rgba(11,31,58,.14)", padding: "var(--space-8)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, background: "linear-gradient(90deg,var(--gold-400),var(--gold-600))" }} />

              <div style={{ marginBottom: 30 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 4 }}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-xl)", color: "var(--navy-900)" }}>Have these ready?</div>
                  {totalDocs > 0 && (
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, color: checkedCount === totalDocs ? "var(--status-positive)" : "var(--ink-500)", background: "var(--paper-alt)", padding: "4px 10px", borderRadius: "var(--radius-pill)" }}>
                      {checkedCount} of {totalDocs} ready
                    </span>
                  )}
                </div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "var(--ink-500)", marginBottom: 20 }}>
                  No need to upload anything now — just check what you have. Your advisor collects the rest on the call.
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                  {grouped.map(({ cat, services }) => (
                    <div key={cat.title}>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--gold-600)", marginBottom: 4 }}>{cat.title}</div>
                      <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ink-300)", marginBottom: 10 }}>For {services.join(", ")}</div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        {(cat.docs || []).map((doc) => {
                          const key = cat.title + "::" + doc;
                          const on = !!checked[key];
                          return (
                            <button
                              type="button"
                              key={key}
                              onClick={() => toggleDoc(key)}
                              style={{ display: "flex", alignItems: "center", gap: 11, padding: "11px 13px", borderRadius: "var(--radius-md)", border: "1.5px solid " + (on ? "var(--gold-500)" : "var(--ink-100)"), background: on ? "var(--gold-050)" : "var(--white)", cursor: "pointer", textAlign: "left", transition: "all .15s" }}
                            >
                              <span style={{ flexShrink: 0, width: 20, height: 20, borderRadius: 5, border: "2px solid " + (on ? "var(--gold-500)" : "var(--ink-100)"), background: on ? "var(--gold-500)" : "var(--white)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--navy-950)", fontSize: 12, fontWeight: 700 }}>
                                {on ? "✓" : ""}
                              </span>
                              <span style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "var(--navy-800)" }}>{doc}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {deliverables.length > 0 && (
                <div style={{ background: "var(--navy-050)", borderRadius: "var(--radius-lg)", padding: "18px 20px", marginBottom: 30 }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--navy-700)", marginBottom: 10 }}>What you&apos;ll receive</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                    {deliverables.map((d) => (
                      <div key={d} style={{ display: "flex", alignItems: "center", gap: 9 }}>
                        <span style={{ width: 18, height: 18, flexShrink: 0, borderRadius: "50%", background: "var(--gold-500)", color: "var(--navy-950)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700 }}>✓</span>
                        <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--navy-800)" }}>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-xl)", color: "var(--navy-900)" }}>Your details</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "var(--ink-500)", marginTop: 4 }}>No obligation — an advisor calls to confirm scope, no payment needed to submit.</div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                    <Label>Full name</Label>
                    <input required value={f.name} onChange={(e) => set("name", e.target.value)} onFocus={foc} onBlur={blur} placeholder="Jane Doe" style={iStyle} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                    <Label>Phone</Label>
                    <input required value={f.phone} onChange={(e) => set("phone", e.target.value)} onFocus={foc} onBlur={blur} placeholder="+91 …" style={iStyle} />
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  <Label>Email address</Label>
                  <input required type="email" value={f.email} onChange={(e) => set("email", e.target.value)} onFocus={foc} onBlur={blur} placeholder="jane@company.com" style={iStyle} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  <Label>Anything specific we should know?</Label>
                  <textarea value={f.notes} onChange={(e) => set("notes", e.target.value)} onFocus={foc} onBlur={blur} rows={3} placeholder="e.g. entity type, existing GSTIN, preferred business name…" style={{ ...iStyle, resize: "vertical", minHeight: 80 }} />
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
                  Submit request
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
                <div style={{ textAlign: "center", fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ink-300)" }}>🔒 Your details stay private — used only to contact you back.</div>
              </form>
            </div>
          </>
        )}
      </section>

      <Footer />
    </div>
  );
}
