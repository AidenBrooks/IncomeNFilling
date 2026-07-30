"use client";
import { useRouter } from "next/navigation";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";

const STEPS = [
  { n: "01", t: "Share Your Documents", d: "Form-16, bank statements, and investment proofs — via WhatsApp or the form below." },
  { n: "02", t: "We Prepare & Verify", d: "Our advisors compute your liability, apply eligible deductions, and confirm with you." },
  { n: "03", t: "Filed & Deployed", d: "Return is e-filed and acknowledged — status updates to deployed, with a copy sent to you." },
];

const ACCENTS = ["var(--gold-500)", "var(--navy-700)", "var(--status-positive)"];
function tint(c) {
  if (c === "var(--gold-500)") return "var(--gold-050)";
  if (c === "var(--status-positive)") return "var(--paper-alt)";
  return "var(--navy-050)";
}

const FAQ = [
  { question: "Who needs to file an ITR?", answer: "Anyone above the exemption threshold, plus professionals, freelancers, and businesses regardless of income." },
  { question: "Can you handle a delayed or notice case?", answer: "Yes — we handle belated returns and respond to scrutiny notices as part of this service." },
];

export default function ITRFilingPage() {
  const router = useRouter();

  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <WhatsAppButton />
      <NavBar active="services" />
      <section className="itr-detail-section" style={{ padding: "56px 32px 90px", maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--ink-500)", marginBottom: 16 }}>
          services / income-tax / <span style={{ color: "var(--navy-900)" }}>itr-filing</span>
        </div>
        <div className="rsp-2col" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 40, alignItems: "start" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12, flexWrap: "wrap" }}>
              <h1 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-4xl)", color: "var(--navy-900)", margin: 0 }}>ITR Filing</h1>
              <Badge status="positive" pulse>available</Badge>
            </div>
            <p style={{ fontFamily: "var(--font-body)", color: "var(--ink-500)", maxWidth: 560, marginBottom: 40, fontSize: "var(--text-base)", lineHeight: "var(--leading-base)" }}>
              Income tax return filing for individuals, professionals, and businesses — computed accurately and filed on schedule, every year.
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-2xl)", color: "var(--navy-900)", marginBottom: 24 }}>How it&apos;s delivered</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 48 }}>
              {STEPS.map((s, i) => (
                <div key={s.n} style={{ display: "flex", gap: 18, background: "var(--white)", border: "1px solid var(--ink-100)", borderRadius: "var(--radius-lg)", padding: "20px 24px", borderLeft: `4px solid ${ACCENTS[i]}` }}>
                  <div style={{ width: 36, height: 36, flexShrink: 0, borderRadius: "50%", background: tint(ACCENTS[i]), color: ACCENTS[i], display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontWeight: "var(--weight-semibold)", fontSize: 13 }}>
                    {s.n}
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-lg)", color: "var(--navy-900)", marginBottom: 6 }}>{s.t}</div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", color: "var(--ink-500)", lineHeight: "var(--leading-sm)" }}>{s.d}</div>
                  </div>
                </div>
              ))}
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-2xl)", color: "var(--navy-900)", marginBottom: 20 }}>Frequently asked</h2>
            <Accordion defaultOpenIndex={0} items={FAQ} />
          </div>
          <div className="rsp-unstick itr-cta-card" style={{ position: "sticky", top: 24, background: "var(--navy-900)", borderRadius: "var(--radius-xl)", padding: 32, color: "var(--white)", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -40, right: -40, width: 150, height: 150, background: "var(--gold-500)", opacity: 0.15, borderRadius: "50%" }} />
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "var(--tracking-widest)", textTransform: "uppercase", color: "var(--gold-400)", marginBottom: 10, position: "relative" }}>Get started</div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-xl)", marginBottom: 14, position: "relative" }}>Book your ITR filing</div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", color: "var(--navy-300)", lineHeight: "var(--leading-sm)", marginBottom: 24, position: "relative" }}>Free consultation, no obligation. An advisor responds within the day.</p>
            <Button variant="primary" fullWidth onClick={() => router.push("/chat")}>Chat With an Advisor</Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
