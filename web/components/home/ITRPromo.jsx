"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { HeroCTAButton } from "@/components/ui/HeroCTAButton";

export function ITRPromo() {
  const router = useRouter();
  return (
    <section style={{ padding: "40px 32px 90px" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", position: "relative", borderRadius: "var(--radius-xl)", overflow: "hidden", minHeight: 340, display: "grid", gridTemplateColumns: "1fr 1fr", background: "linear-gradient(115deg,var(--navy-050) 46%,#dbe6fb)" }}>
        <div style={{ position: "absolute", right: "22%", top: "50%", transform: "translateY(-50%)", width: 520, height: 520, borderRadius: "50%", border: "60px solid rgba(43,108,214,.06)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 2, padding: "52px 20px 52px 56px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 18 }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-4xl)", color: "var(--navy-900)", margin: 0, lineHeight: 1.12, letterSpacing: "var(--tracking-tight)" }}>
            File ITR in Minutes
            <br />
            with <span style={{ color: "var(--navy-600,#2b6cd6)" }}>100% Accuracy</span>
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-lg)", color: "var(--ink-500)", margin: 0 }}>Maximum Tax Refund, Guaranteed.</p>
          <div>
            <HeroCTAButton variant="primary" onClick={() => router.push("/contact")}>Start Filing Now</HeroCTAButton>
          </div>
          <div style={{ position: "relative", overflow: "hidden", display: "flex", alignItems: "center", gap: 14, background: "var(--white)", borderRadius: "var(--radius-lg)", padding: "12px 18px", boxShadow: "var(--shadow-sm)", maxWidth: 400, border: "1.5px solid transparent" }}>
            <span aria-hidden style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: 60, background: "linear-gradient(100deg,transparent,rgba(255,255,255,.85),transparent)", animation: "npSheen 3.6s var(--ease-standard) infinite", pointerEvents: "none" }} />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, paddingRight: 14, borderRight: "1px solid var(--ink-100)" }}>
              <span style={{ position: "relative", overflow: "hidden", width: 26, height: 26, borderRadius: 6, background: "var(--navy-050)", color: "var(--navy-700)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, animation: "npShieldGlow 2.6s ease-in-out infinite" }}>
                🛡
                <span aria-hidden style={{ position: "absolute", top: -4, bottom: -4, left: 0, width: 10, background: "linear-gradient(100deg,transparent,rgba(255,255,255,.9),transparent)", animation: "npShieldShine 3.6s var(--ease-standard) infinite", pointerEvents: "none" }} />
              </span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--navy-700)", fontWeight: "var(--weight-semibold)", textAlign: "center" }}>
                Notice
                <br />
                Protect
              </span>
            </div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ink-500)", lineHeight: 1.5 }}>
              Received a notice? <strong style={{ color: "var(--navy-900)" }}>We Handle It Free.</strong>
              <br />
              Computation Error? <strong style={{ color: "var(--navy-900)" }}>100% Refund.</strong>
            </div>
          </div>
        </div>
        <div style={{ position: "relative", minHeight: 340 }}>
          <Image src="/images/itr-refund.jpg" alt="ITR refund" fill sizes="(max-width: 900px) 50vw, 600px" style={{ objectFit: "cover", objectPosition: "center" }} />
        </div>
      </div>
    </section>
  );
}
