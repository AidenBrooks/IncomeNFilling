"use client";
import { useEffect, useState } from "react";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

const CONSENT =
  "We collect personal details like your name, email address, and phone number etc. By sharing your information, you authorize Income N Filing to contact you via SMS, RCS, WhatsApp, Email, and other communication channels. This consent overrides any NDNC/DND registration as per TRAI regulations.";

function H({ children }) {
  return <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-xl)", color: "var(--navy-900)", margin: "34px 0 12px" }}>{children}</h2>;
}

function P({ children }) {
  return <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-base)", lineHeight: 1.7, color: "var(--ink-500)", margin: "0 0 14px" }}>{children}</p>;
}

function ConsentBox() {
  return (
    <div style={{ background: "var(--navy-050)", border: "1px solid var(--ink-100)", borderLeft: "4px solid var(--gold-500)", borderRadius: "var(--radius-md)", padding: "clamp(16px, 3vw, 20px) clamp(18px, 4vw, 24px)", margin: "0 0 20px" }}>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-base)", lineHeight: 1.7, color: "var(--navy-900)", margin: 0 }}>{CONSENT}</p>
    </div>
  );
}

export default function LegalPage() {
  const [tab, setTab] = useState("privacy");

  useEffect(() => {
    const fromHash = (window.location.hash || "#privacy").slice(1);
    const id = requestAnimationFrame(() => setTab(fromHash === "terms" ? "terms" : "privacy"));
    return () => cancelAnimationFrame(id);
  }, []);

  const go = (next) => {
    setTab(next);
    window.history.replaceState(null, "", `#${next}`);
  };

  const isTerms = tab === "terms";

  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <WhatsAppButton />
      <NavBar active="" />
      <section style={{ background: "linear-gradient(150deg,var(--navy-950) 0%,var(--navy-900) 55%,var(--navy-800) 100%)", padding: "clamp(36px, 6vw, 64px) var(--container-pad)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,.05) 1px,transparent 1px)", backgroundSize: "26px 26px", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: 820, margin: "0 auto" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--gold-400)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 14 }}>Legal</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-bold)", fontSize: "var(--text-4xl)", color: "var(--white)", margin: 0 }}>
            {isTerms ? "Terms & Conditions" : "Privacy Policy"}
          </h1>
          <div style={{ marginTop: 12, fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", color: "var(--navy-300)" }}>Last updated {new Date().getFullYear()}</div>
        </div>
      </section>
      <section style={{ padding: "clamp(28px, 5vw, 48px) var(--container-pad) clamp(56px, 10vw, 96px)", maxWidth: 820, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
          <button
            onClick={() => go("privacy")}
            style={{
              fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13, padding: "8px 16px", borderRadius: "var(--radius-pill)",
              border: "1.5px solid " + (isTerms ? "var(--ink-100)" : "var(--gold-500)"), background: isTerms ? "transparent" : "var(--gold-500)",
              color: isTerms ? "var(--ink-500)" : "var(--navy-950)", cursor: "pointer",
            }}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => go("terms")}
            style={{
              fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13, padding: "8px 16px", borderRadius: "var(--radius-pill)",
              border: "1.5px solid " + (isTerms ? "var(--gold-500)" : "var(--ink-100)"), background: isTerms ? "var(--gold-500)" : "transparent",
              color: isTerms ? "var(--navy-950)" : "var(--ink-500)", cursor: "pointer",
            }}
          >
            Terms &amp; Conditions
          </button>
        </div>

        {isTerms ? (
          <>
            <P>These Terms &amp; Conditions govern your use of Income N Filing&apos;s website and services. By using our services or submitting your details, you agree to the terms set out below.</P>
            <H>Communication consent</H>
            <ConsentBox />
            <H>Scope of services</H>
            <P>All services are provided on a best-effort professional basis in accordance with applicable laws and regulations. Timelines and deliverables are scoped during your consultation.</P>
            <H>Limitation of liability</H>
            <P>Income N Filing is not liable for delays or outcomes arising from incomplete, inaccurate, or delayed information provided by the client, or from changes in statutory requirements beyond our control.</P>
          </>
        ) : (
          <>
            <P>This Privacy Policy explains how Income N Filing collects, uses, and protects the information you share with us when you use our services or contact us.</P>
            <H>Information we collect &amp; your consent</H>
            <ConsentBox />
            <H>How we use your information</H>
            <P>Your details are used solely to respond to your enquiry, deliver the services you request, and keep you informed about the status of your engagement. We do not sell your personal information to third parties.</P>
            <H>Data security</H>
            <P>Your data is stored on secure, dedicated infrastructure. Privacy and trust are non-negotiable for us, and access is restricted to authorised personnel only.</P>
          </>
        )}
      </section>
      <Footer />
    </div>
  );
}
