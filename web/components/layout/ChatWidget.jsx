"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { WhatsAppIcon } from "@/components/shared/icons";
import { BotCharacter } from "@/components/shared/BotCharacter";
import { WHATSAPP_URL } from "@/data/content";

export function ChatWidget() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [botHover, setBotHover] = useState(false);

  const QUICK = [
    { label: "File my ITR", action: () => router.push("/contact") },
    { label: "GST registration", action: () => router.push("/services") },
    { label: "Talk to an advisor", action: () => router.push("/chat") },
  ];

  return (
    <div style={{ position: "fixed", bottom: 26, right: 26, zIndex: 90, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 14 }}>
      {open && (
        <div style={{ width: 270, background: "var(--white)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-lg)", border: "1px solid var(--ink-100)", overflow: "hidden", animation: "fade-in-up .25s var(--ease-standard)" }}>
          <div style={{ background: "var(--navy-900)", padding: "16px 18px", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ position: "relative", width: 38, height: 38, borderRadius: "50%", background: "var(--gold-500)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="var(--navy-950)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="8" width="16" height="11" rx="3" />
                <path d="M12 8V4" />
                <circle cx="12" cy="3" r="1.4" fill="var(--navy-950)" stroke="none" />
                <circle cx="9" cy="13.5" r="1.1" fill="var(--navy-950)" stroke="none" />
                <circle cx="15" cy="13.5" r="1.1" fill="var(--navy-950)" stroke="none" />
              </svg>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: 14, color: "var(--white)" }}>Filing Assistant</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--status-positive)" }}>● Online now</div>
            </div>
            <button onClick={() => setOpen(false)} style={{ marginLeft: "auto", background: "none", border: "none", color: "var(--navy-300)", cursor: "pointer", fontSize: 18, lineHeight: 1 }}>
              ×
            </button>
          </div>
          <div style={{ padding: "16px 16px 18px" }}>
            <div style={{ background: "var(--paper-alt)", borderRadius: "12px 12px 12px 4px", padding: "10px 14px", fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ink-700)", marginBottom: 14 }}>
              Hi! 👋 How can we help you today?
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {QUICK.map((q) => (
                <button
                  key={q.label}
                  onClick={() => {
                    q.action();
                    setOpen(false);
                  }}
                  style={{
                    textAlign: "left", fontFamily: "var(--font-body)", fontWeight: "var(--weight-medium)", fontSize: 13, padding: "10px 14px",
                    borderRadius: "var(--radius-md)", border: "1px solid var(--ink-100)", background: "var(--white)", color: "var(--navy-800)",
                    cursor: "pointer", transition: "all .15s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--navy-050)";
                    e.currentTarget.style.borderColor = "var(--gold-400)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--white)";
                    e.currentTarget.style.borderColor = "var(--ink-100)";
                  }}
                >
                  {q.label} →
                </button>
              ))}
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 14, fontFamily: "var(--font-body)",
                fontWeight: "var(--weight-semibold)", fontSize: 13, padding: "11px", borderRadius: "var(--radius-md)",
                background: "var(--whatsapp-green)", color: "var(--white)", textDecoration: "none",
              }}
            >
              <WhatsAppIcon size={17} color="currentColor" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        title="WhatsApp us"
        style={{
          position: "relative", width: 56, height: 56, borderRadius: "50%", background: "var(--whatsapp-green)",
          display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-lg)", textDecoration: "none",
        }}
      >
        <span style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "2px solid var(--whatsapp-green)", animation: "pulse-ring 2s infinite" }} />
        <WhatsAppIcon size={30} color="var(--white)" />
      </a>
      <button
        onClick={() => setOpen((o) => !o)}
        onMouseEnter={() => setBotHover(true)}
        onMouseLeave={() => setBotHover(false)}
        title="Chat with our bot"
        style={{
          position: "relative", width: 92, height: 120, padding: 0, background: "none", border: "none", cursor: "pointer",
          filter: "drop-shadow(0 12px 16px rgba(15,42,66,.28))", transition: "transform .2s", transform: botHover ? "scale(1.06)" : "none",
        }}
      >
        {!open && (
          <span style={{ position: "absolute", top: 12, right: 8, zIndex: 2, width: 20, height: 20, borderRadius: "50%", background: "var(--gold-500)", color: "var(--navy-950)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-sm)" }}>
            1
          </span>
        )}
        {!open && (
          <span style={{ position: "absolute", top: -26, right: 0, zIndex: 2, whiteSpace: "nowrap", background: "var(--navy-900)", color: "var(--white)", fontFamily: "var(--font-body)", fontSize: 11, fontWeight: "var(--weight-medium)", padding: "5px 11px", borderRadius: "var(--radius-pill)", boxShadow: "var(--shadow-md)" }}>
            Need help? 👋
          </span>
        )}
        <BotCharacter hovered={botHover} />
      </button>
    </div>
  );
}
