"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CountUp } from "@/components/ui/CountUp";
import { HeroCTAButton } from "@/components/ui/HeroCTAButton";
import { ServiceFinder } from "@/components/home/ServiceFinder";
import { ACCENTS } from "@/data/theme";

const BADGES = [
  { icon: "GST", left: "34%", top: "-1%" },
  { icon: "ITR", right: "-3%", top: "20%" },
  { icon: "INC", left: "26%", bottom: "6%" },
  { icon: "ROC", right: "3%", bottom: "4%" },
];

export function Hero() {
  const router = useRouter();
  return (
    <section style={{ position: "relative", background: "var(--white)" }}>
      <div
        className="rsp-2col"
        style={{
          position: "relative", maxWidth: "var(--container-max)", margin: "0 auto", display: "grid",
          gridTemplateColumns: "1.05fr .95fr", gap: "clamp(32px, 6vw, 60px)", alignItems: "center",
          padding: "clamp(44px, 8vw, 72px) clamp(16px, 4vw, 32px) clamp(48px, 8vw, 80px)",
        }}
      >
        <div>
          <Eyebrow>All Systems Compliant · Since 2017</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-6xl)", color: "var(--navy-900)", margin: "20px 0 20px", letterSpacing: "var(--tracking-tight)", lineHeight: 1.06 }}>
            Business compliance,
            <br />
            made{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              effortless
              <svg viewBox="0 0 220 18" style={{ position: "absolute", left: 0, bottom: -10, width: "100%", height: 18 }}>
                <path d="M2 13 C60 2, 160 2, 218 12" stroke="var(--gold-500)" strokeWidth="6" fill="none" strokeLinecap="round" />
              </svg>
            </span>
            .
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-lg)", color: "var(--ink-500)", maxWidth: 460, lineHeight: "var(--leading-lg)", marginBottom: 32 }}>
            A dedicated team handling taxation, GST, incorporation, and corporate law — so your business stays compliant without the busywork.
          </p>
          <div style={{ display: "flex", gap: 14, marginBottom: 40, flexWrap: "wrap" }}>
            <HeroCTAButton variant="primary" onClick={() => router.push("/contact")}>Book Free Consultation</HeroCTAButton>
            <HeroCTAButton variant="ghost" onClick={() => router.push("/services")}>Explore Services</HeroCTAButton>
          </div>
          <div style={{ display: "flex", gap: 36, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-3xl)", color: "var(--navy-900)" }}>
                <CountUp to={500} suffix="+" />
              </div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ink-500)" }}>Businesses served</div>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-3xl)", color: "var(--navy-900)" }}>
                <CountUp to={7} suffix="+" />
              </div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ink-500)" }}>Years of excellence</div>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-3xl)", color: "var(--navy-900)" }}>
                <CountUp to={94} />
              </div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ink-500)" }}>Services live</div>
            </div>
          </div>
        </div>
        <div style={{ position: "relative", height: "clamp(320px, 76vw, 560px)", maxHeight: 560, width: "100%" }}>
          <div style={{ position: "absolute", right: "2%", top: "50%", transform: "translateY(-50%)", width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle at 45% 45%,rgba(239,168,46,.18),rgba(43,108,214,.10) 52%,transparent 72%)" }} />
          <div style={{ position: "absolute", right: "-4%", top: "50%", transform: "translateY(-50%)", width: 500, height: 500, borderRadius: "50%", border: "2px dashed var(--gold-300,#f5cf82)", animation: "spin-slow 46s linear infinite", opacity: 0.7 }} />
          <div style={{ position: "absolute", right: "6%", top: "50%", transform: "translateY(-50%)", width: 360, height: 360, borderRadius: "50%", border: "1.5px solid rgba(43,108,214,.2)", animation: "spin-slow 32s linear infinite reverse" }} />
          <div style={{ position: "absolute", left: "-4%", bottom: 0, width: "52%", height: "98%", zIndex: 2 }}>
            <Image src="/images/hero-advisor.png" alt="Advisor" fill sizes="(max-width: 1100px) 60vw, 400px" style={{ objectFit: "contain", objectPosition: "bottom center" }} priority />
          </div>
          <div style={{ position: "absolute", right: 0, top: "8%", zIndex: 4, width: "64%", minWidth: 290 }}>
            <ServiceFinder onSelect={() => router.push("/services")} />
          </div>
          <div style={{ position: "absolute", top: "2%", right: "6%", zIndex: 5, display: "inline-flex", alignItems: "center", gap: 6, background: "var(--white)", borderRadius: "var(--radius-pill)", padding: "6px 14px", boxShadow: "var(--shadow-md)" }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--status-positive)", animation: "pulse-dot 2s infinite" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--navy-800)" }}>94 services live</span>
          </div>
          {BADGES.map((b, i) => {
            const ac = ACCENTS[i % 4];
            return (
              <div
                key={b.icon}
                style={{
                  position: "absolute", left: b.left, right: b.right, top: b.top, bottom: b.bottom, zIndex: 5, width: 60, height: 60,
                  borderRadius: "50%", background: "var(--white)", boxShadow: "var(--shadow-md)", display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: "var(--weight-semibold)", letterSpacing: ".04em", color: ac, border: `2px solid ${ac}`,
                  animation: "float-y 5s ease-in-out infinite", animationDelay: `${i * 0.35}s`,
                }}
              >
                {b.icon}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
