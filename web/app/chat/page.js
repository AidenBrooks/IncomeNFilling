"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { WhatsAppIcon } from "@/components/shared/icons";
import { Bubble } from "@/components/chat/Bubble";
import { botReply, nowTime } from "@/components/chat/intentEngine";
import { WHATSAPP_URL } from "@/data/content";

export default function LiveChatPage() {
  const [msgs, setMsgs] = useState([
    { who: "bot", text: "Hi, I’m Ira — your compliance concierge. 👋 Tell me what you’re working on and I’ll point you to the right expert. Pick a topic to begin, or just type your question below.", tiles: true, t: nowTime() },
  ]);
  const [typing, setTyping] = useState(false);
  const [val, setVal] = useState("");
  const [inputFocus, setInputFocus] = useState(false);
  const scrollRef = useRef(null);
  const timers = useRef([]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [msgs, typing]);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const send = (raw) => {
    const text = (raw ?? val).trim();
    if (!text) return;
    setVal("");
    setMsgs((m) => [...m, { who: "user", text, t: nowTime() }]);
    setTyping(true);
    const reply = botReply(text);
    const tm = setTimeout(() => {
      setTyping(false);
      setMsgs((m) => [...m, { who: "bot", ...reply, t: nowTime() }]);
    }, 900 + Math.min(text.length * 16, 800));
    timers.current.push(tm);
  };

  return (
    <div style={{ background: "var(--navy-050)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <WhatsAppButton />
      <NavBar active="chat" />
      <section style={{ flex: 1, padding: "clamp(24px, 5vw, 44px) var(--container-pad) clamp(36px, 6vw, 64px)" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 26 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 15px", borderRadius: "var(--radius-pill)", background: "var(--white)", border: "1px solid var(--ink-100)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--navy-700)", marginBottom: 14 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--status-positive)", animation: "pulse-dot 2s infinite" }} />
              Advisors online · replies in minutes
            </div>
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-4xl)", color: "var(--navy-900)", margin: "0 0 8px", letterSpacing: "var(--tracking-tight)" }}>Meet Ira, your compliance concierge</h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-base)", color: "var(--ink-500)", margin: "0 auto", maxWidth: 460 }}>Ask anything about GST, tax, company setup or notices. Ira finds the right service in seconds — then a real advisor takes over.</p>
          </div>
          <div style={{ borderRadius: 22, overflow: "hidden", boxShadow: "0 30px 70px rgba(6,18,36,.32)", display: "flex", flexDirection: "column", height: "clamp(460px, 78vh, 620px)", border: "1px solid rgba(255,255,255,.5)", background: "var(--white)" }}>
            <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 14, padding: "18px 20px", background: "linear-gradient(135deg,var(--gold-400) 0%,var(--gold-500) 58%,#DA9A1E 100%)", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(130% 150% at 88% -30%,rgba(255,255,255,.5),transparent 55%)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: -40, left: -30, width: 190, height: 190, borderRadius: "50%", background: "radial-gradient(circle,rgba(11,31,58,.09),transparent 70%)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "52%", background: "linear-gradient(180deg,rgba(255,255,255,.28),transparent)", pointerEvents: "none" }} />
              <div style={{ position: "relative", width: 50, height: 50 }}>
                <span style={{ position: "absolute", inset: -4, borderRadius: "50%", border: "2px solid rgba(11,31,58,.32)", animation: "pulse-ring 2.6s infinite" }} />
                <Image src="/logo.jpg" alt="" width={50} height={50} style={{ borderRadius: "50%", border: "2.5px solid rgba(11,31,58,.5)", boxShadow: "0 4px 12px rgba(11,31,58,.22)" }} />
                <span style={{ position: "absolute", right: 0, bottom: 0, width: 13, height: 13, borderRadius: "50%", background: "var(--status-positive)", border: "2px solid var(--gold-500)" }} />
              </div>
              <div style={{ flex: 1, minWidth: 0, position: "relative" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: 18, color: "var(--navy-950)", letterSpacing: ".01em" }}>Ira</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--navy-900)", background: "rgba(11,31,58,.13)", padding: "3px 9px", borderRadius: "var(--radius-pill)" }}>✦ Concierge</span>
                </div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--navy-800)", display: "flex", alignItems: "center", gap: 6, marginTop: 2 }}>
                  {typing ? (
                    "typing…"
                  ) : (
                    <>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--status-positive)", display: "inline-block" }} />
                      Online · replies in minutes
                    </>
                  )}
                </div>
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" title="Talk on WhatsApp" style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: "50%", background: "var(--whatsapp-green)", border: "1.5px solid rgba(255,255,255,.55)", textDecoration: "none", boxShadow: "0 4px 12px rgba(37,211,102,.45)" }}>
                <WhatsAppIcon size={20} color="#fff" />
              </a>
            </div>
            <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "20px 18px", display: "flex", flexDirection: "column", gap: 13, background: "var(--navy-050)", backgroundImage: "radial-gradient(rgba(11,31,58,.04) 1.5px,transparent 1.5px)", backgroundSize: "22px 22px" }}>
              {msgs.map((m, i) => (
                <Bubble key={i} m={m} onChip={send} />
              ))}
              {typing && (
                <div style={{ alignSelf: "flex-start", display: "flex", alignItems: "flex-end", gap: 9, animation: "fade-in-up .3s var(--ease-standard) both" }}>
                  <Image src="/logo.jpg" alt="" width={30} height={30} style={{ flexShrink: 0, borderRadius: "50%", border: "1.5px solid var(--gold-500)", boxShadow: "0 2px 6px rgba(11,31,58,.12)" }} />
                  <div style={{ display: "flex", gap: 6, alignItems: "center", background: "#fff", borderRadius: "16px 16px 16px 4px", padding: "15px 17px", boxShadow: "0 4px 16px rgba(11,31,58,.10)", border: "1px solid var(--ink-100)" }}>
                    {[0, 1, 2].map((d) => (
                      <span key={d} style={{ width: 8, height: 8, borderRadius: "50%", background: "linear-gradient(135deg,var(--gold-400),var(--gold-600))", animation: `typing-bounce 1.1s infinite ${d * 0.16}s` }} />
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 11, padding: "14px 16px", background: "var(--white)", borderTop: "1px solid var(--ink-100)" }}>
              <div
                style={{
                  flex: 1, display: "flex", alignItems: "center", gap: 10, background: "var(--white)", borderRadius: "var(--radius-pill)", padding: "12px 18px",
                  border: "1.5px solid " + (inputFocus ? "var(--gold-500)" : "var(--ink-100)"),
                  boxShadow: inputFocus ? "0 0 0 4px rgba(212,167,71,.16),0 2px 8px rgba(11,31,58,.05)" : "inset 0 1px 3px rgba(11,31,58,.05)",
                  transition: "border-color .18s,box-shadow .18s",
                }}
              >
                <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="var(--ink-300)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M21.44 11.05l-9.19 9.19a5 5 0 01-7.07-7.07l9.19-9.19a3.5 3.5 0 014.95 4.95l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
                </svg>
                <input
                  value={val}
                  onChange={(e) => setVal(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") send();
                  }}
                  onFocus={() => setInputFocus(true)}
                  onBlur={() => setInputFocus(false)}
                  placeholder="Type your question to Ira…"
                  style={{ flex: 1, minWidth: 0, border: "none", outline: "none", background: "none", fontFamily: "var(--font-body)", fontSize: 14.5, color: "var(--navy-900)" }}
                />
              </div>
              <button
                onClick={() => send()}
                title="Send"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px) scale(1.04)";
                  e.currentTarget.style.boxShadow = "0 8px 22px rgba(212,167,71,.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "0 4px 14px rgba(212,167,71,.42)";
                }}
                style={{ flexShrink: 0, width: 48, height: 48, borderRadius: 15, border: "none", background: "linear-gradient(135deg,var(--gold-400),var(--gold-500))", color: "var(--navy-950)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(212,167,71,.42)", transition: "transform .18s var(--ease-standard),box-shadow .18s" }}
              >
                <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13" />
                  <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </button>
            </div>
          </div>
          <div style={{ textAlign: "center", fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ink-300)", marginTop: 16 }}>Guided by Ira · a real advisor continues with you on WhatsApp</div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
