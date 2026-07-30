"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useBP } from "@/lib/useBP";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CountUp } from "@/components/ui/CountUp";
import { HeroCTAButton } from "@/components/ui/HeroCTAButton";
import { ServiceFinder } from "@/components/home/ServiceFinder";
import { ACCENTS } from "@/data/theme";

export function Hero() {
  const router = useRouter();
  const bp = useBP();
  const go = (path) => router.push(path === "contact" ? "/contact" : "/services");

  return (
    <section style={{ position: "relative", background: "var(--white)" }}>
      <div
        style={{
          position: "relative", maxWidth: "var(--container-max)", margin: "0 auto", display: "grid",
          gridTemplateColumns: bp.ltDesktop ? "1fr" : "1.05fr .95fr", gap: bp.mobile ? 32 : 60, alignItems: "center",
          padding: bp.mobile ? "40px 20px 48px" : "72px 32px 80px",
        }}
      >
        <div style={{ textAlign: bp.ltDesktop ? "center" : "left" }}>
          <Eyebrow>All Systems Compliant · Since 2017</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: bp.mobile ? "var(--text-4xl)" : "var(--text-6xl)", color: "var(--navy-900)", margin: "20px 0 20px", letterSpacing: "var(--tracking-tight)", lineHeight: 1.06 }}>
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
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-lg)", color: "var(--ink-500)", maxWidth: 460, lineHeight: "var(--leading-lg)", marginBottom: 32, marginLeft: bp.ltDesktop ? "auto" : 0, marginRight: bp.ltDesktop ? "auto" : 0 }}>
            A dedicated team handling taxation, GST, incorporation, and corporate law — so your business stays compliant without the busywork.
          </p>
          <div style={{ display: "flex", gap: 14, marginBottom: 40, flexWrap: "wrap", justifyContent: bp.ltDesktop ? "center" : "flex-start" }}>
            <HeroCTAButton variant="primary" onClick={() => go("contact")}>Book Free Consultation</HeroCTAButton>
            <HeroCTAButton variant="ghost" onClick={() => go("services")}>Explore Services</HeroCTAButton>
          </div>
          <div style={{ display: "flex", gap: bp.mobile ? 24 : 36, justifyContent: bp.ltDesktop ? "center" : "flex-start" }}>
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
        <div style={{ position: "relative", height: bp.mobile ? "auto" : 560, width: "100%" }}>
          {bp.ltDesktop ? (
            <div style={{ position: "relative", height: bp.mobile ? 420 : 460, maxWidth: bp.mobile ? 380 : 440, margin: "0 auto" }}>
              <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: "92%", aspectRatio: "1", borderRadius: "50%", border: "2px dashed var(--gold-300,#f5cf82)", animation: "spin-slow 46s linear infinite", opacity: 0.65 }} />
              <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: "66%", aspectRatio: "1", borderRadius: "50%", border: "1.5px solid rgba(43,108,214,.2)", animation: "spin-slow 32s linear infinite reverse" }} />
              <div style={{ position: "absolute", left: "-8%", bottom: 0, width: "56%", height: "96%", zIndex: 2 }}>
                <Image src="/images/hero-advisor.png" alt="Advisor" fill sizes="60vw" style={{ objectFit: "contain", objectPosition: "bottom center" }} priority />
              </div>
              <div style={{ position: "absolute", right: 0, top: "7%", zIndex: 4, width: "74%", minWidth: 248 }}>
                <ServiceFinder onSelect={() => go("services")} />
              </div>
              <div style={{ position: "absolute", top: "1%", right: "5%", zIndex: 5, display: "inline-flex", alignItems: "center", gap: 6, background: "var(--white)", borderRadius: "var(--radius-pill)", padding: "5px 12px", boxShadow: "var(--shadow-md)" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--status-positive)", animation: "pulse-dot 2s infinite" }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--navy-800)" }}>94 services live</span>
              </div>
              {[
                { icon: "GST", left: "30%", top: "-2%" },
                { icon: "ITR", right: "-4%", top: "22%" },
                { icon: "INC", left: "20%", bottom: "5%" },
                { icon: "ROC", right: "2%", bottom: "3%" },
              ].map((b, i) => {
                const ac = ACCENTS[i % 4];
                return (
                  <div
                    key={b.icon}
                    style={{
                      position: "absolute", left: b.left, right: b.right, top: b.top, bottom: b.bottom, zIndex: 5, width: 46, height: 46,
                      borderRadius: "50%", background: "var(--white)", boxShadow: "var(--shadow-md)", display: "flex", alignItems: "center", justifyContent: "center",
                      fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: "var(--weight-semibold)", letterSpacing: ".04em", color: ac, border: `2px solid ${ac}`,
                      animation: "float-y 5s ease-in-out infinite", animationDelay: `${i * 0.35}s`,
                    }}
                  >
                    {b.icon}
                  </div>
                );
              })}
            </div>
          ) : (
            <>
              <div style={{ position: "absolute", right: "-4%", top: "50%", transform: "translateY(-50%)", width: 500, height: 500, borderRadius: "50%", border: "2px dashed var(--gold-300,#f5cf82)", animation: "spin-slow 46s linear infinite", opacity: 0.7 }} />
              <div style={{ position: "absolute", right: "6%", top: "50%", transform: "translateY(-50%)", width: 360, height: 360, borderRadius: "50%", border: "1.5px solid rgba(43,108,214,.2)", animation: "spin-slow 32s linear infinite reverse" }} />
              <div style={{ position: "absolute", left: "-4%", bottom: 0, width: "52%", height: "98%", zIndex: 2 }}>
                <Image src="/images/hero-advisor.png" alt="Advisor" fill sizes="400px" style={{ objectFit: "contain", objectPosition: "bottom center" }} priority />
              </div>
              <div style={{ position: "absolute", right: 0, top: "8%", zIndex: 4, width: "64%", minWidth: 290 }}>
                <ServiceFinder onSelect={() => go("services")} />
              </div>
              <div style={{ position: "absolute", top: "2%", right: "6%", zIndex: 5, display: "inline-flex", alignItems: "center", gap: 6, background: "var(--white)", borderRadius: "var(--radius-pill)", padding: "6px 14px", boxShadow: "var(--shadow-md)" }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--status-positive)", animation: "pulse-dot 2s infinite" }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--navy-800)" }}>94 services live</span>
              </div>
              {[
                { icon: "GST", left: "34%", top: "-1%" },
                { icon: "ITR", right: "-3%", top: "20%" },
                { icon: "INC", left: "26%", bottom: "6%" },
                { icon: "ROC", right: "3%", bottom: "4%" },
              ].map((b, i) => {
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
            </>
          )}
        </div>
      </div>
    </section>
  );
}
