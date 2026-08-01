"use client";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useBP } from "@/lib/useBP";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { ServiceIcon, WhatsAppIcon } from "@/components/shared/icons";
import { HUB_CATEGORIES } from "@/data/categories";
import { loadSelection, clearSelection, saveSelection } from "@/lib/selectionStorage";
import { WHATSAPP_NUMBER } from "@/data/content";

const APPLY_ACCENTS = ["var(--gold-500)", "var(--navy-700)", "var(--status-positive)", "var(--navy-500)", "var(--gold-600)"];
const APPLY_TINTS = ["var(--gold-050)", "var(--navy-050)", "var(--paper-alt)", "var(--navy-050)", "var(--gold-050)"];

const NEXT_STEPS = [
  { t: "Advisor calls you", d: "Usually within 2 working hours, to confirm scope and answer questions." },
  { t: "Documents verified", d: "We check what you've shared against your checklist below." },
  { t: "Filed with authorities", d: "Prepared, submitted, and tracked until it's through." },
  { t: "Confirmation shared", d: "Certificate or acknowledgement sent to you — status: deployed." },
];

const SUBMIT_PHASES = [
  { t: "Securing your details", d: "Encrypting your contact info" },
  { t: "Sending to your advisor", d: "Routing to the right specialist" },
  { t: "Confirming your request", d: "Locking in your checklist" },
];

const PHASE_ICONS = [
  <svg key="l" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 018 0v3" /></svg>,
  <svg key="p" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M21 4L3 11l6 2.5L21 4z" /><path d="M21 4l-6 16-3-7" /></svg>,
  <svg key="c" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M9 12l2 2 4-4" /></svg>,
];

const STEPS = ["Review", "Documents", "Your details"];
const STEP_ICONS = {
  0: <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.2-3.2" /></g>,
  1: <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="12" height="16" rx="2" /><path d="M9 3h6v3H9z" /><path d="M9 11l1.5 1.5L13 10M9 16h5" /></g>,
  2: <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 4L3 11l6 2.5L21 4z" /><path d="M21 4l-6 16-3-7" /></g>,
};

function findCategoryFor(name) {
  return HUB_CATEGORIES.find((c) => c.services.includes(name));
}

function ApplyLabel({ children }) {
  return <label style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 600, letterSpacing: ".05em", textTransform: "uppercase", color: "var(--ink-500)" }}>{children}</label>;
}

function CheckCircle({ size = 72, color = "var(--gold-600)" }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12.5l2.5 2.5 5-5.5" />
    </svg>
  );
}

export default function ServicesApplyPage() {
  const router = useRouter();
  const bp = useBP();
  const goServices = () => router.push("/services");

  const [serviceNames, setServiceNames] = useState(null);
  const [checked, setChecked] = useState({});
  const [step, setStep] = useState(0);
  const [hoverStep, setHoverStep] = useState(-1);
  const [headHover, setHeadHover] = useState(false);
  const [f, setF] = useState({ name: "", phone: "", email: "", notes: "" });
  const [sent, setSent] = useState(false);
  const [sentSummary, setSentSummary] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitPhase, setSubmitPhase] = useState(0);

  useEffect(() => {
    const id = requestAnimationFrame(() => setServiceNames(loadSelection()));
    return () => cancelAnimationFrame(id);
  }, []);

  const goStep = (n) => {
    setStep(n);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const grouped = useMemo(() => {
    if (!serviceNames) return [];
    const byCat = new Map();
    for (const name of serviceNames) {
      const cat = findCategoryFor(name);
      if (!cat) continue;
      if (!byCat.has(cat.title)) byCat.set(cat.title, { cat, services: [] });
      byCat.get(cat.title).services.push(name);
    }
    return [...byCat.values()];
  }, [serviceNames]);

  const deliverables = useMemo(() => {
    const set = new Set();
    grouped.forEach((g) => (g.cat.deliverables || []).forEach((d) => set.add(d)));
    return [...set];
  }, [grouped]);

  const totalDocs = grouped.reduce((n, g) => n + (g.cat.docs?.length || 0), 0);
  const checkedCount = Object.values(checked).filter(Boolean).length;
  const docPct = totalDocs ? checkedCount / totalDocs : 0;
  const toggleDoc = (key) => setChecked((s) => ({ ...s, [key]: !s[key] }));

  const removeService = (name) =>
    setServiceNames((list) => {
      const next = (list || []).filter((s) => s !== name);
      saveSelection(next);
      return next;
    });
  const removeModule = (svcs) =>
    setServiceNames((list) => {
      const rm = new Set(svcs);
      const next = (list || []).filter((s) => !rm.has(s));
      saveSelection(next);
      return next;
    });

  const waText =
    serviceNames && serviceNames.length
      ? `Hi! I'm interested in: ${serviceNames.join(", ")}. Could you help me get started?`
      : "Hi! I'd like to know more about your services.";
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;

  const submit = (e) => {
    e.preventDefault();
    setSentSummary({ names: serviceNames || [], name: f.name });
    setSubmitPhase(0);
    setSubmitting(true);
    [700, 1450, 2200].forEach((ms, i) => setTimeout(() => setSubmitPhase(i + 1), ms));
    setTimeout(() => {
      clearSelection();
      setSent(true);
      setSubmitting(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 3050);
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

  const reqStatus = totalDocs > 0 && checkedCount === totalDocs ? { t: "Ready to send", c: "var(--status-positive)" } : docPct > 0 ? { t: "In progress", c: "var(--gold-400)" } : { t: "Draft started", c: "var(--navy-300)" };

  const pillBtn = (primary, extra = {}) => ({
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, fontFamily: "var(--font-body)", fontWeight: "var(--weight-semibold)", fontSize: 14,
    padding: "13px 26px", borderRadius: "var(--radius-pill)", border: primary ? "none" : "1.5px solid var(--ink-100)",
    background: primary ? "linear-gradient(135deg,var(--gold-400),var(--gold-500))" : "var(--white)", color: primary ? "var(--navy-950)" : "var(--navy-800)",
    cursor: "pointer", boxShadow: primary ? "0 4px 14px rgba(212,167,71,.32)" : "none", transition: "transform .18s,box-shadow .18s", ...extra,
  });

  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <a href={waHref} target="_blank" rel="noreferrer" style={{ position: "fixed", bottom: bp.ltDesktop ? 16 : 26, right: bp.ltDesktop ? 16 : 26, width: bp.ltDesktop ? 52 : 58, height: bp.ltDesktop ? 52 : 58, borderRadius: "50%", background: "var(--whatsapp-green)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-lg)", zIndex: 80, textDecoration: "none" }}>
        <span style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "2px solid var(--whatsapp-green)", animation: "pulse-ring 2s infinite" }} />
        <WhatsAppIcon size={30} color="var(--white)" />
      </a>

      {submitting && (
        <div style={{ position: "fixed", inset: 0, zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 24, background: "radial-gradient(circle at 50% 38%,rgba(20,54,96,.82),rgba(6,18,36,.94))", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", animation: "fade-in-up .3s var(--ease-standard) both" }}>
          <div style={{ width: "100%", maxWidth: 400, background: "var(--white)", borderRadius: "var(--radius-xl)", boxShadow: "0 40px 90px rgba(0,0,0,.45)", padding: "38px 34px 30px", position: "relative", overflow: "hidden", textAlign: "center", animation: "popCard .45s var(--ease-standard) both" }}>
            <span aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg,var(--gold-400),var(--gold-600))" }} />
            <div style={{ position: "relative", width: 96, height: 96, margin: "6px auto 22px" }}>
              {submitPhase < 3 ? (
                <svg width="96" height="96" viewBox="0 0 96 96" style={{ position: "absolute", inset: 0, animation: "spinArc 1s linear infinite" }}>
                  <circle cx="48" cy="48" r="42" fill="none" stroke="var(--gold-100)" strokeWidth="5" />
                  <path d="M48 6a42 42 0 0142 42" fill="none" stroke="var(--gold-500)" strokeWidth="5" strokeLinecap="round" />
                </svg>
              ) : (
                <span aria-hidden style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "5px solid var(--status-positive)" }} />
              )}
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ width: 60, height: 60, borderRadius: "50%", background: submitPhase >= 3 ? "var(--status-positive)" : "linear-gradient(150deg,var(--navy-950),var(--navy-800))", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", transition: "background .4s" }}>
                  {submitPhase >= 3 ? (
                    <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" style={{ animation: "completePop .45s both" }}>
                      <path d="M5 12.5l4.5 4.5L19 7" style={{ strokeDasharray: 26, animation: "checkDraw .5s .1s both" }} />
                    </svg>
                  ) : (
                    PHASE_ICONS[Math.min(submitPhase, 2)]
                  )}
                </span>
              </div>
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-xl)", color: "var(--navy-900)", marginBottom: 4 }}>{submitPhase >= 3 ? "All set!" : "Submitting your request"}</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ink-500)", marginBottom: 24 }}>{submitPhase >= 3 ? "Taking you to your confirmation…" : "Hang tight — this only takes a moment."}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, textAlign: "left", marginBottom: 22 }}>
              {SUBMIT_PHASES.map((p, i) => {
                const pdone = submitPhase > i;
                const pcur = submitPhase === i;
                return (
                  <div key={p.t} style={{ display: "flex", alignItems: "center", gap: 12, opacity: pdone || pcur ? 1 : 0.4, transition: "opacity .4s" }}>
                    <span style={{ width: 26, height: 26, flexShrink: 0, borderRadius: "50%", background: pdone ? "var(--status-positive)" : pcur ? "var(--gold-050)" : "var(--paper-alt)", border: pcur ? "2px solid var(--gold-500)" : "none", display: "flex", alignItems: "center", justifyContent: "center", color: pdone ? "#fff" : "var(--gold-600)" }}>
                      {pdone ? (
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7" /></svg>
                      ) : pcur ? (
                        <svg width="14" height="14" viewBox="0 0 24 24" style={{ animation: "spinArc .8s linear infinite" }}>
                          <circle cx="12" cy="12" r="9" fill="none" stroke="var(--gold-200)" strokeWidth="3" />
                          <path d="M12 3a9 9 0 019 9" fill="none" stroke="var(--gold-600)" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                      ) : (
                        <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--ink-300)" }} />
                      )}
                    </span>
                    <span>
                      <span style={{ display: "block", fontFamily: "var(--font-body)", fontSize: 13.5, fontWeight: 600, color: "var(--navy-900)" }}>{p.t}</span>
                      <span style={{ display: "block", fontFamily: "var(--font-body)", fontSize: 11.5, color: "var(--ink-500)" }}>{p.d}</span>
                    </span>
                  </div>
                );
              })}
            </div>
            <div style={{ height: 6, borderRadius: 6, background: "var(--paper-alt)", overflow: "hidden" }}>
              <span style={{ display: "block", height: "100%", borderRadius: 6, background: "linear-gradient(90deg,var(--gold-400),var(--gold-600))", width: `${(submitPhase / 3) * 100}%`, transition: "width .5s var(--ease-standard)" }} />
            </div>
          </div>
        </div>
      )}

      <NavBar active="services" />

      <section style={{ background: "linear-gradient(155deg,var(--navy-950) 0%,var(--navy-900) 60%,var(--navy-800) 100%)", padding: "56px 32px 96px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,.045) 1px,transparent 1px)", backgroundSize: "26px 26px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -120, left: "-6%", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle,rgba(212,167,71,.18),transparent 66%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -160, right: "-4%", width: 460, height: 460, borderRadius: "50%", background: "radial-gradient(circle,rgba(30,64,124,.5),transparent 68%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, background: "linear-gradient(to top,rgba(11,31,58,.4),transparent)", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: 820, margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--gold-400)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 16, background: "rgba(212,167,71,.1)", border: "1px solid rgba(212,167,71,.25)", padding: "6px 14px", borderRadius: "var(--radius-pill)" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--status-positive)", animation: "pulse-dot 2s infinite" }} />
              Get started
            </div>
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-4xl)", color: "var(--white)", margin: "0 0 12px", letterSpacing: "var(--tracking-tight)", lineHeight: 1.1 }}>
              Let&apos;s get your <span style={{ color: "var(--gold-400)" }}>paperwork</span> moving
            </h1>
            <p style={{ color: "var(--navy-300)", margin: "0 auto 24px", maxWidth: 540, fontFamily: "var(--font-body)", fontSize: "var(--text-base)", lineHeight: 1.5 }}>
              Three quick steps — review what you picked, tick off the documents you have, and tell us where to call. No uploads, no payment to submit.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
              {[
                { i: "M12 3l7 3v5c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6z", t: "No payment to submit" },
                { i: "M4 4h16v4H4zM4 10h10v4H4zM4 16h16v4H4z", t: "No uploads needed" },
                { i: "M12 6v6l4 2", t: "2-hour callback" },
              ].map((c) => (
                <span key={c.t} style={{ display: "inline-flex", alignItems: "center", gap: 7, fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--white)", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.14)", padding: "7px 13px 7px 10px", borderRadius: "var(--radius-pill)" }}>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--gold-400)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d={c.i} /></svg>
                  {c.t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 32px 96px", maxWidth: 1080, margin: "-56px auto 0", position: "relative" }}>
        {serviceNames === null ? null : sent ? (
          <div style={{ maxWidth: 640, margin: "0 auto", background: "var(--white)", borderRadius: "var(--radius-xl)", boxShadow: "0 24px 55px rgba(11,31,58,.14)", padding: "var(--space-8)", position: "relative", overflow: "hidden", animation: "fade-in-up .55s var(--ease-standard) both" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, background: "linear-gradient(90deg,var(--gold-400),var(--gold-600))" }} />
            <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: 230, overflow: "hidden", pointerEvents: "none" }}>
              {Array.from({ length: 18 }).map((_, ci) => {
                const cols = ["var(--gold-400)", "var(--gold-600)", "var(--status-positive)", "var(--navy-500)"];
                return (
                  <span
                    key={ci}
                    style={{
                      position: "absolute", top: 0, left: `${(ci * 5.4 + 3) % 100}%`, width: ci % 3 ? 7 : 9, height: ci % 2 ? 10 : 7, borderRadius: ci % 2 ? 2 : "50%",
                      background: cols[ci % cols.length], animation: `confDrop ${(1.7 + (ci % 5) * 0.25).toFixed(2)}s ${((ci % 7) * 0.12).toFixed(2)}s var(--ease-standard) both`,
                    }}
                  />
                );
              })}
            </div>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 6, marginBottom: 36 }}>
              <div style={{ position: "relative", width: 72, height: 72, marginBottom: 14 }}>
                <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "var(--gold-100)" }} />
                <span style={{ position: "absolute", inset: -8, borderRadius: "50%", border: "2px solid var(--gold-300)", animation: "pulse-ring 2s infinite" }} />
                <span style={{ position: "relative", display: "block" }}>
                  <CheckCircle size={72} color="var(--gold-600)" />
                </span>
              </div>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-2xl)", color: "var(--navy-900)", margin: 0 }}>
                Thanks{sentSummary && sentSummary.name ? ", " + sentSummary.name.split(" ")[0] : ""}! 🎉
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-base)", color: "var(--ink-500)", margin: 0, maxWidth: 420 }}>
                {sentSummary && sentSummary.names.length ? (
                  <>
                    Your request for <b style={{ color: "var(--navy-900)" }}>{sentSummary.names.join(", ")}</b> is in.
                  </>
                ) : (
                  "Your request is in."
                )}
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
              <button onClick={goServices} style={pillBtn(false)}>Browse more services</button>
            </div>
          </div>
        ) : grouped.length === 0 ? (
          <div style={{ maxWidth: 520, margin: "0 auto", background: "var(--white)", borderRadius: "var(--radius-xl)", boxShadow: "0 24px 55px rgba(11,31,58,.14)", padding: "56px 32px", textAlign: "center" }}>
            <div style={{ width: 64, height: 64, margin: "0 auto 18px", borderRadius: "50%", background: "var(--paper-alt)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26 }}>🗂</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-xl)", color: "var(--navy-900)", marginBottom: 8 }}>No services selected yet</h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--ink-500)", maxWidth: 360, margin: "0 auto 22px" }}>Pick one or more services from the directory and hit &quot;Request selected&quot; — we&apos;ll bring you back here with a tailored checklist.</p>
            <button onClick={goServices} style={pillBtn(true)}>Browse services →</button>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: bp.ltDesktop ? "1fr" : "minmax(0,1fr) 400px", gap: 30, alignItems: "start" }}>
            <div style={{ minWidth: 0 }}>
              <div style={{ position: "relative", background: "var(--white)", borderRadius: "var(--radius-xl)", boxShadow: "0 14px 38px rgba(11,31,58,.08)", border: "1px solid var(--ink-100)", padding: "28px 30px 22px", marginBottom: 24, overflow: "hidden" }}>
                <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(var(--ink-100) 1px,transparent 1px)", backgroundSize: "20px 20px", opacity: 0.5, pointerEvents: "none" }} />
                <div style={{ position: "relative", display: "flex", alignItems: "flex-start" }}>
                  <div aria-hidden style={{ position: "absolute", top: 29, left: `${100 / (STEPS.length * 2)}%`, right: `${100 / (STEPS.length * 2)}%`, height: 4, borderRadius: 4, background: "var(--ink-100)", overflow: "hidden" }}>
                    <span style={{ display: "block", height: "100%", width: `${(step / (STEPS.length - 1)) * 100}%`, background: "linear-gradient(90deg,var(--gold-400),var(--gold-600))", borderRadius: 4, transition: "width .55s var(--ease-standard)" }} />
                  </div>
                  {STEPS.map((label, i) => {
                    const done = i < step;
                    const cur = i === step;
                    const clickable = i <= step;
                    const hov = hoverStep === i && clickable;
                    const caption = done ? "Completed" : cur ? "In progress" : "Up next";
                    return (
                      <button
                        key={label}
                        onClick={() => clickable && goStep(i)}
                        onMouseEnter={() => setHoverStep(i)}
                        onMouseLeave={() => setHoverStep(-1)}
                        style={{ flex: 1, position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 10, padding: 0, border: "none", background: "none", cursor: clickable ? "pointer" : "default" }}
                      >
                        <span
                          style={{
                            position: "relative", width: 58, height: 58, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                            background: cur ? "linear-gradient(150deg,var(--navy-950),var(--navy-800))" : done ? "radial-gradient(circle at 35% 28%,#4fd897,var(--status-positive))" : "var(--white)",
                            border: cur ? "none" : done ? "none" : "2px solid var(--ink-100)", color: cur || done ? "#fff" : hov ? "var(--gold-600)" : "var(--ink-300)",
                            boxShadow: cur ? "0 0 0 6px rgba(212,167,71,.20),0 10px 24px rgba(11,31,58,.22)" : done ? "0 8px 22px rgba(52,168,110,.42),inset 0 2px 3px rgba(255,255,255,.4)" : hov ? "0 6px 16px rgba(11,31,58,.12)" : "none",
                            transform: cur ? "scale(1.08)" : hov ? "translateY(-3px)" : "none", transition: "all .3s var(--ease-standard)",
                          }}
                        >
                          {done && <span aria-hidden style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "linear-gradient(180deg,rgba(255,255,255,.4),transparent 55%)", pointerEvents: "none" }} />}
                          {done ? (
                            <svg viewBox="0 0 24 24" width="27" height="27" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" style={{ position: "relative", animation: "completePop .45s var(--ease-standard) both" }}>
                              <path d="M5 12.5l4.5 4.5L19 7" style={{ strokeDasharray: 26, animation: "checkDraw .5s .12s var(--ease-standard) both" }} />
                            </svg>
                          ) : (
                            <svg viewBox="0 0 24 24" width="25" height="25">{STEP_ICONS[i]}</svg>
                          )}
                          {done && <span aria-hidden style={{ position: "absolute", inset: -5, borderRadius: "50%", border: "2px solid rgba(52,168,110,.32)" }} />}
                          {cur && <span aria-hidden style={{ position: "absolute", inset: -6, borderRadius: "50%", border: "2px solid var(--gold-400)", animation: "pulse-ring 2s infinite" }} />}
                          <span style={{ position: "absolute", top: -4, right: -4, minWidth: 20, height: 20, padding: "0 5px", borderRadius: 10, background: cur ? "var(--gold-500)" : done ? "var(--white)" : "var(--paper-alt)", color: cur ? "var(--navy-950)" : done ? "var(--status-positive)" : "var(--ink-300)", border: done ? "1.5px solid var(--status-positive)" : "none", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 11, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 6px rgba(11,31,58,.15)" }}>
                            {i + 1}
                          </span>
                        </span>
                        <span style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                          <span style={{ fontFamily: "var(--font-display)", fontSize: 14.5, fontWeight: "var(--weight-semibold)", color: cur || done ? "var(--navy-900)" : "var(--ink-500)", whiteSpace: "nowrap", transition: "color .3s" }}>{label}</span>
                          <span style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: ".08em", textTransform: "uppercase", color: cur ? "var(--gold-600)" : done ? "var(--status-positive)" : "var(--ink-300)", transition: "color .3s" }}>{caption}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {step === 0 && (
                <div style={{ animation: "fade-in-up .35s var(--ease-standard) both" }}>
                  <div style={{ background: "var(--white)", borderRadius: "var(--radius-xl)", boxShadow: "0 24px 55px rgba(11,31,58,.10)", border: "1px solid var(--ink-100)", padding: "32px 32px 28px" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-2xl)", color: "var(--navy-900)", marginBottom: 3 }}>Here&apos;s what you picked</div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "var(--ink-500)", marginBottom: 20 }}>
                      {serviceNames.length} service{serviceNames.length > 1 ? "s" : ""} across {grouped.length} module{grouped.length > 1 ? "s" : ""}. Add more anytime — nothing is locked in.
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                      {grouped.map(({ cat, services }, gi) => {
                        const ac = APPLY_ACCENTS[gi % APPLY_ACCENTS.length];
                        const tint = APPLY_TINTS[gi % APPLY_TINTS.length];
                        const notch = { position: "absolute", width: 20, height: 20, borderRadius: "50%", background: "var(--white)", left: "calc(100% - 112px)", transform: "translateX(-50%)", zIndex: 6 };
                        return (
                          <div key={cat.title} style={{ position: "relative", display: "flex", minHeight: 150, borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-sm)" }}>
                            <span aria-hidden style={{ ...notch, top: -10 }} />
                            <span aria-hidden style={{ ...notch, bottom: -10 }} />
                            <span aria-hidden style={{ position: "absolute", top: 12, bottom: 12, left: "calc(100% - 112px)", borderLeft: "2px dashed var(--ink-100)", zIndex: 5 }} />
                            <div style={{ position: "relative", flex: 1, minWidth: 0, background: "var(--white)", border: "1px solid var(--ink-100)", borderRight: "none", borderRadius: "var(--radius-lg) 0 0 var(--radius-lg)", padding: "16px 20px", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--ink-300)", marginBottom: 14 }}>
                                <span>Module No. {String(gi + 1).padStart(2, "0")}</span>
                                <span style={{ display: "inline-flex", alignItems: "center", gap: 5, color: ac, fontWeight: "var(--weight-semibold)" }}>
                                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: ac }} />
                                  {cat.turnaround}
                                </span>
                              </div>
                              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14, paddingRight: 20 }}>
                                <span style={{ flexShrink: 0, width: 46, height: 46, borderRadius: 13, background: tint, color: ac, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                  <ServiceIcon code={cat.icon} size={23} />
                                </span>
                                <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-lg)", color: "var(--navy-900)", lineHeight: 1.2, overflowWrap: "break-word", textWrap: "balance" }}>{cat.title}</div>
                              </div>
                              <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: "auto" }}>
                                {services.map((s) => (
                                  <span key={s} style={{ display: "inline-flex", alignItems: "center", gap: 7, fontFamily: "var(--font-body)", fontSize: 12.5, fontWeight: "var(--weight-medium)", padding: "5px 6px 5px 12px", borderRadius: "var(--radius-pill)", background: tint, color: "var(--navy-800)", border: "1px solid " + ac + "33" }}>
                                    {s}
                                    <button
                                      onClick={() => removeService(s)}
                                      title={`Remove ${s}`}
                                      onMouseEnter={(e) => {
                                        e.currentTarget.style.background = "#e5484d";
                                        e.currentTarget.style.color = "#fff";
                                        e.currentTarget.style.borderColor = "transparent";
                                      }}
                                      onMouseLeave={(e) => {
                                        e.currentTarget.style.background = "var(--white)";
                                        e.currentTarget.style.color = "var(--ink-500)";
                                        e.currentTarget.style.borderColor = "var(--ink-100)";
                                      }}
                                      style={{ flexShrink: 0, width: 18, height: 18, borderRadius: "50%", border: "1px solid var(--ink-100)", background: "var(--white)", color: "var(--ink-500)", cursor: "pointer", fontSize: 12, lineHeight: 1, display: "flex", alignItems: "center", justifyContent: "center", transition: "all .15s", padding: 0 }}
                                    >
                                      ×
                                    </button>
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div style={{ position: "relative", width: 112, flexShrink: 0, background: `linear-gradient(165deg,${ac},var(--navy-950))`, borderRadius: "0 var(--radius-lg) var(--radius-lg) 0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", padding: "18px 0", overflow: "hidden" }}>
                              <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,.14) 1px,transparent 1px)", backgroundSize: "12px 12px", opacity: 0.4 }} />
                              <div style={{ position: "relative", fontFamily: "var(--font-mono)", fontSize: 8.5, letterSpacing: ".3em", textTransform: "uppercase", color: "rgba(255,255,255,.7)", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>Module</div>
                              <div style={{ position: "relative", textAlign: "center", lineHeight: 1 }}>
                                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 38, color: "#fff", letterSpacing: "-.02em" }}>{services.length}</div>
                                <div style={{ fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.65)", marginTop: 5 }}>picked</div>
                              </div>
                              <div aria-hidden style={{ position: "relative", width: 6, height: 6, borderRadius: "50%", background: "rgba(255,255,255,.45)" }} />
                            </div>
                            <button
                              onClick={() => removeModule(services)}
                              title="Remove this module"
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = "#e5484d";
                                e.currentTarget.style.borderColor = "transparent";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = "rgba(255,255,255,.16)";
                                e.currentTarget.style.borderColor = "rgba(255,255,255,.32)";
                              }}
                              style={{ position: "absolute", top: 9, right: 9, zIndex: 7, width: 24, height: 24, borderRadius: "50%", border: "1px solid rgba(255,255,255,.32)", background: "rgba(255,255,255,.16)", color: "#fff", cursor: "pointer", fontSize: 15, lineHeight: 1, display: "flex", alignItems: "center", justifyContent: "center", transition: "all .15s", padding: 0 }}
                            >
                              ×
                            </button>
                          </div>
                        );
                      })}
                      <button
                        onClick={goServices}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "var(--gold-500)";
                          e.currentTarget.style.background = "var(--gold-050)";
                          e.currentTarget.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "var(--ink-100)";
                          e.currentTarget.style.background = "var(--paper-alt)";
                          e.currentTarget.style.transform = "none";
                        }}
                        style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, width: "100%", padding: 18, borderRadius: "var(--radius-lg)", border: "2px dashed var(--ink-100)", background: "var(--paper-alt)", cursor: "pointer", transition: "all .2s var(--ease-standard)" }}
                      >
                        <span style={{ flexShrink: 0, width: 38, height: 38, borderRadius: "50%", background: "var(--gold-500)", color: "var(--navy-950)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 700, lineHeight: 1 }}>+</span>
                        <span style={{ textAlign: "left" }}>
                          <span style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-base)", color: "var(--navy-900)" }}>Add more services</span>
                          <span style={{ display: "block", fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--ink-500)", marginTop: 1 }}>Need something else too? Browse the directory — your current picks stay saved.</span>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, marginTop: 20, flexWrap: "wrap" }}>
                    <button onClick={goServices} style={{ ...pillBtn(false), padding: "11px 20px" }}>← Edit selection</button>
                    <button
                      onClick={() => goStep(1)}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
                      style={pillBtn(true)}
                    >
                      Continue to documents →
                    </button>
                  </div>
                </div>
              )}

              {step === 1 && (
                <div style={{ animation: "fade-in-up .35s var(--ease-standard) both" }}>
                  <div style={{ background: "var(--white)", borderRadius: "var(--radius-xl)", boxShadow: "0 24px 55px rgba(11,31,58,.10)", border: "1px solid var(--ink-100)", padding: "32px 32px 28px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, flexWrap: "wrap", marginBottom: 2 }}>
                      <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-2xl)", color: "var(--navy-900)" }}>Which of these do you have?</div>
                      {totalDocs > 0 && (
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, color: checkedCount === totalDocs ? "var(--status-positive)" : "var(--ink-500)", background: "var(--paper-alt)", padding: "5px 12px", borderRadius: "var(--radius-pill)" }}>
                          {checkedCount} / {totalDocs} ready
                        </span>
                      )}
                    </div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "var(--ink-500)", marginBottom: 20 }}>Just tick what&apos;s on hand — this is only to help your advisor prep. You can skip it entirely and still continue.</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                      {grouped.map(({ cat }) => {
                        const done = (cat.docs || []).every((d) => checked[cat.title + "::" + d]);
                        return (
                          <div key={cat.title}>
                            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                              <span style={{ flexShrink: 0, width: 26, height: 26, borderRadius: "var(--radius-sm)", background: done ? "var(--status-positive)" : "var(--gold-050)", color: done ? "#fff" : "var(--gold-600)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                {done ? <span style={{ fontSize: 14, fontWeight: 700 }}>✓</span> : <ServiceIcon code={cat.icon} size={15} />}
                              </span>
                              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--gold-600)" }}>{cat.title}</div>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: bp.mobile ? "1fr" : "1fr 1fr", gap: 8 }}>
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
                                    <span style={{ flexShrink: 0, width: 20, height: 20, borderRadius: 5, border: "2px solid " + (on ? "var(--gold-500)" : "var(--ink-100)"), background: on ? "var(--gold-500)" : "var(--white)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--navy-950)", fontSize: 12, fontWeight: 700 }}>{on ? "✓" : ""}</span>
                                    <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--navy-800)" }}>{doc}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, marginTop: 20, flexWrap: "wrap" }}>
                    <button onClick={() => goStep(0)} style={{ ...pillBtn(false), padding: "11px 20px" }}>← Back</button>
                    <button
                      onClick={() => goStep(2)}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
                      style={pillBtn(true)}
                    >
                      {checkedCount > 0 ? "Continue" : "Skip for now"} →
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div style={{ animation: "fade-in-up .35s var(--ease-standard) both" }}>
                  <a href={waHref} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", background: "var(--white)", border: "1px solid var(--ink-100)", borderRadius: "var(--radius-lg)", padding: "14px 18px", marginBottom: 18, boxShadow: "var(--shadow-sm)" }}>
                    <span style={{ width: 40, height: 40, flexShrink: 0, borderRadius: "50%", background: "var(--whatsapp-green)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <WhatsAppIcon size={19} color="#fff" />
                    </span>
                    <span style={{ flex: 1 }}>
                      <span style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: 14, color: "var(--navy-900)" }}>Prefer to chat? WhatsApp us instead</span>
                      <span style={{ display: "block", fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--ink-500)" }}>Your selection comes pre-filled in the message.</span>
                    </span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 18, color: "var(--ink-300)" }}>›</span>
                  </a>
                  <div style={{ background: "var(--white)", borderRadius: "var(--radius-xl)", boxShadow: "0 24px 55px rgba(11,31,58,.10)", border: "1px solid var(--ink-100)", padding: "34px 34px", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, background: "linear-gradient(90deg,var(--gold-400),var(--gold-600))" }} />
                    <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                      <div>
                        <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-2xl)", color: "var(--navy-900)" }}>Where should we reach you?</div>
                        <div style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "var(--ink-500)", marginTop: 4 }}>No obligation — an advisor calls to confirm scope, no payment needed to submit.</div>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: bp.mobile ? "1fr" : "1fr 1fr", gap: 12 }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                          <ApplyLabel>Full name</ApplyLabel>
                          <input required value={f.name} onChange={(e) => set("name", e.target.value)} onFocus={foc} onBlur={blur} placeholder="Jane Doe" style={iStyle} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                          <ApplyLabel>Phone</ApplyLabel>
                          <input required value={f.phone} onChange={(e) => set("phone", e.target.value)} onFocus={foc} onBlur={blur} placeholder="+91 …" style={iStyle} />
                        </div>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                        <ApplyLabel>Email address</ApplyLabel>
                        <input required type="email" value={f.email} onChange={(e) => set("email", e.target.value)} onFocus={foc} onBlur={blur} placeholder="jane@company.com" style={iStyle} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                        <ApplyLabel>Anything specific we should know?</ApplyLabel>
                        <textarea value={f.notes} onChange={(e) => set("notes", e.target.value)} onFocus={foc} onBlur={blur} rows={3} placeholder="e.g. entity type, existing GSTIN, preferred business name…" style={{ ...iStyle, resize: "vertical", minHeight: 80 }} />
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, marginTop: 4, flexWrap: "wrap" }}>
                        <button type="button" onClick={() => goStep(1)} style={{ ...pillBtn(false), padding: "11px 20px" }}>← Back</button>
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
                          style={pillBtn(true)}
                        >
                          Submit request
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                        </button>
                      </div>
                      <div style={{ display: "flex", justifyContent: "center" }}>
                        <span style={{ position: "relative", overflow: "hidden", display: "inline-flex", alignItems: "center", gap: 9, padding: "8px 15px 8px 11px", borderRadius: "var(--radius-pill)", background: "rgba(52,168,110,.08)", border: "1.5px solid rgba(52,168,110,.3)", cursor: "default" }}>
                          <span aria-hidden style={{ position: "absolute", top: 0, bottom: 0, width: 40, left: "-60%", background: "linear-gradient(100deg,transparent,rgba(255,255,255,.7),transparent)", transform: "skewX(-18deg)", animation: "autoShine 4s ease-in-out infinite" }} />
                          <span style={{ position: "relative", width: 22, height: 22, flexShrink: 0, borderRadius: "50%", background: "var(--status-positive)", display: "flex", alignItems: "center", justifyContent: "center", animation: "shieldGuard 2.4s ease-out infinite" }}>
                            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v5c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6z" /><path d="M9 12l2 2 4-4" /></svg>
                          </span>
                          <span style={{ position: "relative", fontFamily: "var(--font-body)", fontSize: 12, color: "var(--navy-800)" }}>
                            Your details stay private — <b style={{ color: "var(--status-positive)" }}>used only to contact you back</b>.
                          </span>
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>

            <aside style={{ position: bp.ltDesktop ? "static" : "sticky", top: 90, order: bp.ltDesktop ? -1 : 0, marginBottom: bp.ltDesktop ? 6 : 0, display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ background: "var(--white)", borderRadius: "var(--radius-xl)", boxShadow: "0 20px 45px rgba(11,31,58,.12)", border: "1px solid var(--ink-100)", overflow: "hidden" }}>
                <div onMouseEnter={() => setHeadHover(true)} onMouseLeave={() => setHeadHover(false)} style={{ position: "relative", overflow: "hidden", padding: "20px 26px 30px", background: "linear-gradient(150deg,var(--gold-300) 0%,var(--gold-500) 52%,var(--gold-600) 100%)", cursor: "default" }}>
                  <span aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "repeating-linear-gradient(90deg,var(--navy-950) 0 14px,transparent 14px 20px)" }} />
                  <span aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(11,31,58,.06) 1px,transparent 1px)", backgroundSize: "16px 16px", opacity: 0.7, pointerEvents: "none" }} />
                  <span aria-hidden style={{ position: "absolute", top: -70, right: -50, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,255,255,.5),transparent 66%)", transform: headHover ? "scale(1.25) translate(-6px,4px)" : "scale(1)", transition: "transform 1s var(--ease-standard)", pointerEvents: "none" }} />
                  <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--navy-950)" }}>
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8a2 2 0 012-2h14a2 2 0 012 2v2a2 2 0 000 4v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a2 2 0 000-4z" /><path d="M9 6v12" strokeDasharray="2 2" /></svg>
                      Request ticket
                    </div>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".08em", color: "rgba(11,31,58,.6)" }}>{"#INF-" + String(1000 + (serviceNames.length * 137 + grouped.length * 29) % 9000).padStart(4, "0")}</span>
                  </div>
                  <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14 }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 9 }}>
                        <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 52, color: "var(--navy-950)", lineHeight: 0.85, letterSpacing: "-.03em" }}>{serviceNames.length}</span>
                        <span style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--navy-800)" }}>service{serviceNames.length > 1 ? "s" : ""}</span>
                      </div>
                      <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "rgba(11,31,58,.6)", marginTop: 6 }}>across {grouped.length} module{grouped.length > 1 ? "s" : ""}</div>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 7, marginTop: 14, padding: "5px 12px 5px 9px", borderRadius: "var(--radius-pill)", background: "var(--navy-950)", border: "1px solid rgba(11,31,58,.2)" }}>
                        <span style={{ position: "relative", width: 8, height: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <span aria-hidden style={{ position: "absolute", inset: -3, borderRadius: "50%", border: `1.5px solid ${reqStatus.c}`, opacity: 0.6, animation: "pulse-ring 2s infinite" }} />
                          <span style={{ width: 8, height: 8, borderRadius: "50%", background: reqStatus.c, boxShadow: `0 0 8px ${reqStatus.c}` }} />
                        </span>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".06em", textTransform: "uppercase", fontWeight: 600, color: "#fff" }}>{reqStatus.t}</span>
                      </span>
                    </div>
                    <div style={{ position: "relative", width: 112, height: 112, flexShrink: 0, transform: headHover ? "scale(1.06)" : "scale(1)", transition: "transform .45s var(--ease-standard)" }}>
                      <svg width="112" height="112" viewBox="0 0 112 112" aria-hidden style={{ position: "absolute", inset: 0, animation: `ringSpin ${headHover ? "8s" : "22s"} linear infinite`, transition: "animation .4s" }}>
                        <circle cx="56" cy="56" r="52" fill="none" stroke="rgba(11,31,58,.28)" strokeWidth="2" strokeDasharray="2 7" strokeLinecap="round" />
                      </svg>
                      <svg width="112" height="112" viewBox="0 0 112 112" style={{ position: "relative", display: "block" }}>
                        <circle cx="56" cy="56" r="44" fill="var(--navy-950)" />
                        <circle cx="56" cy="56" r="44" fill="none" stroke="rgba(255,255,255,.14)" strokeWidth="6" />
                        <circle cx="56" cy="56" r="44" fill="none" stroke="var(--gold-400)" strokeWidth="6" strokeLinecap="round" strokeDasharray={2 * Math.PI * 44} strokeDashoffset={2 * Math.PI * 44 * (1 - docPct)} transform="rotate(-90 56 56)" style={{ transition: "stroke-dashoffset .6s var(--ease-standard)", filter: "drop-shadow(0 0 5px rgba(212,167,71,.7))" }} />
                      </svg>
                      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 26, color: "#fff", lineHeight: 1 }}>{Math.round(docPct * 100)}%</span>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: ".14em", color: "var(--gold-400)", textTransform: "uppercase", marginTop: 3 }}>docs</span>
                      </div>
                    </div>
                  </div>
                  <span aria-hidden style={{ position: "absolute", bottom: -11, left: -11, width: 22, height: 22, borderRadius: "50%", background: "var(--white)" }} />
                  <span aria-hidden style={{ position: "absolute", bottom: -11, right: -11, width: 22, height: 22, borderRadius: "50%", background: "var(--white)" }} />
                  <span aria-hidden style={{ position: "absolute", bottom: 9, left: 16, right: 16, borderTop: "2px dashed rgba(11,31,58,.3)" }} />
                </div>
                <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: 15 }}>
                  {[
                    { k: "Modules", v: grouped.length },
                    { k: "Documents to gather", v: totalDocs },
                    { k: "Documents you have", v: `${checkedCount} / ${totalDocs}`, accent: true },
                    { k: "Deliverables you'll get", v: deliverables.length },
                  ].map((row) => (
                    <div key={row.k} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "var(--ink-500)" }}>{row.k}</span>
                      <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, color: row.accent ? (checkedCount === totalDocs && totalDocs > 0 ? "var(--status-positive)" : "var(--gold-600)") : "var(--navy-900)" }}>{row.v}</span>
                    </div>
                  ))}
                </div>
                <div style={{ padding: "18px 24px", borderTop: "1px dashed var(--ink-100)", background: "var(--paper-alt)" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--navy-700)", marginBottom: 10 }}>What you&apos;ll receive</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                    {deliverables.slice(0, 4).map((d) => (
                      <div key={d} style={{ display: "flex", alignItems: "flex-start", gap: 9 }}>
                        <span style={{ width: 18, height: 18, flexShrink: 0, marginTop: 1, borderRadius: "50%", background: "var(--gold-500)", color: "var(--navy-950)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700 }}>✓</span>
                        <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--navy-800)", lineHeight: 1.35 }}>{d}</span>
                      </div>
                    ))}
                    {deliverables.length > 4 && <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--ink-300)", paddingLeft: 27 }}>+{deliverables.length - 4} more</div>}
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 14, background: "var(--white)", borderRadius: "var(--radius-lg)", border: "1px solid var(--ink-100)", padding: "15px 18px" }}>
                <span style={{ position: "relative", width: 44, height: 44, flexShrink: 0, borderRadius: "50%", background: "radial-gradient(circle at 50% 40%,#1c3a5e,var(--navy-950))", display: "flex", alignItems: "center", justifyContent: "center", overflow: "visible" }}>
                  <span aria-hidden style={{ position: "absolute", inset: -3, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,214,102,.55),transparent 65%)", animation: "boltGlow 3.2s ease-in-out infinite" }} />
                  <span aria-hidden style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "2px solid var(--gold-400)", animation: "lightningBurst 3.2s ease-out infinite" }} />
                  <span aria-hidden style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "rgba(255,240,200,.9)", animation: "badgeFlash 3.2s ease-out infinite", pointerEvents: "none" }} />
                  <svg viewBox="0 0 24 24" width="22" height="22" style={{ position: "relative", animation: "thunderStrike 3.2s ease-in-out infinite", transformOrigin: "50% 45%" }}>
                    <path d="M13 2L4.5 13.5H11L9.5 22L18 9.5H11.5L13 2Z" fill="var(--gold-400)" stroke="var(--gold-300)" strokeWidth=".6" strokeLinejoin="round" />
                  </svg>
                </span>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ink-500)", lineHeight: 1.4 }}>
                  Advisor calls back within <b style={{ color: "var(--navy-900)" }}>2 working hours</b> of submitting.
                </div>
              </div>
            </aside>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}
