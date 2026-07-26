import Image from "next/image";
import { TILES } from "@/components/chat/intentEngine";
import { WHATSAPP_URL } from "@/data/content";

export function Bubble({ m, onChip }) {
  const isUser = m.who === "user";
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: isUser ? "flex-end" : "flex-start", gap: 9, animation: "fade-in-up .32s var(--ease-standard) both", width: "100%" }}>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 9, maxWidth: "86%", flexDirection: isUser ? "row-reverse" : "row" }}>
        {!isUser && <Image src="/logo.jpg" alt="" width={30} height={30} style={{ flexShrink: 0, borderRadius: "50%", border: "1.5px solid var(--gold-500)", boxShadow: "0 2px 6px rgba(11,31,58,.12)" }} />}
        <div
          style={{
            position: "relative", background: isUser ? "linear-gradient(135deg,var(--navy-800),var(--navy-900))" : "var(--white)",
            borderRadius: isUser ? "16px 16px 4px 16px" : "16px 16px 16px 4px", padding: "11px 15px 8px",
            boxShadow: isUser ? "0 4px 14px rgba(11,31,58,.22)" : "0 2px 12px rgba(11,31,58,.08)", border: isUser ? "none" : "1px solid var(--ink-100)",
          }}
        >
          <div style={{ fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.5, color: isUser ? "rgba(255,255,255,.96)" : "var(--navy-900)" }}>{m.text}</div>
          {m.service && (
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", marginTop: 10, background: "linear-gradient(135deg,var(--navy-050),var(--white))", border: "1px solid var(--gold-200)", borderRadius: 12, padding: "11px 13px" }}>
              <span style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 10, background: "linear-gradient(135deg,var(--navy-900),var(--navy-700))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{m.service.emoji}</span>
              <span style={{ flex: 1, minWidth: 0 }}>
                <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--gold-600)" }}>Recommended for you</span>
                <span style={{ display: "block", fontFamily: "var(--font-body)", fontWeight: "var(--weight-semibold)", fontSize: 14, color: "var(--navy-900)" }}>{m.service.title}</span>
              </span>
              <span style={{ flexShrink: 0, color: "var(--gold-600)", fontSize: 20 }}>›</span>
            </a>
          )}
          <div style={{ textAlign: "right", marginTop: 3, fontFamily: "var(--font-body)", fontSize: 10, color: isUser ? "rgba(255,255,255,.55)" : "var(--ink-300)" }}>{m.t}</div>
        </div>
      </div>
      {m.tiles && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9, width: "100%", maxWidth: "92%", marginTop: 2 }}>
          {TILES.map((t) => (
            <button
              key={t.title}
              onClick={() => onChip(t.send)}
              onMouseEnter={(e) => {
                const c = e.currentTarget;
                c.style.transform = "translateY(-3px)";
                c.style.borderColor = "var(--gold-500)";
                c.style.boxShadow = "0 10px 24px rgba(11,31,58,.14)";
              }}
              onMouseLeave={(e) => {
                const c = e.currentTarget;
                c.style.transform = "none";
                c.style.borderColor = "var(--ink-100)";
                c.style.boxShadow = "0 2px 8px rgba(11,31,58,.06)";
              }}
              style={{ textAlign: "left", display: "flex", flexDirection: "column", gap: 6, padding: "13px 13px", borderRadius: 14, border: "1px solid var(--ink-100)", background: "var(--white)", cursor: "pointer", boxShadow: "0 2px 8px rgba(11,31,58,.06)", transition: "all .18s var(--ease-standard)" }}
            >
              <span style={{ width: 34, height: 34, borderRadius: 9, background: "linear-gradient(135deg,var(--navy-050),var(--gold-100))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{t.emoji}</span>
              <span style={{ fontFamily: "var(--font-body)", fontWeight: "var(--weight-semibold)", fontSize: 13, color: "var(--navy-900)", lineHeight: 1.25 }}>{t.title}</span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--ink-400)", lineHeight: 1.3 }}>{t.sub}</span>
            </button>
          ))}
        </div>
      )}
      {m.chips && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: isUser ? "flex-end" : "flex-start", maxWidth: "92%", paddingLeft: isUser ? 0 : 39 }}>
          {m.chips.map((ch) => {
            const isWA = /whatsapp|book|call/i.test(ch);
            if (isWA) {
              return (
                <a key={ch} href={WHATSAPP_URL} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-body)", fontSize: 13, fontWeight: "var(--weight-semibold)", padding: "9px 17px", borderRadius: "var(--radius-pill)", background: "var(--whatsapp-green)", color: "#fff", textDecoration: "none", boxShadow: "0 3px 10px rgba(37,211,102,.32)" }}>
                  {ch} ›
                </a>
              );
            }
            return (
              <button
                key={ch}
                onClick={() => onChip(ch)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--navy-900)";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.borderColor = "var(--navy-900)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--white)";
                  e.currentTarget.style.color = "var(--navy-800)";
                  e.currentTarget.style.borderColor = "var(--gold-300)";
                }}
                style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: "var(--weight-medium)", padding: "9px 17px", borderRadius: "var(--radius-pill)", border: "1.5px solid var(--gold-300)", background: "var(--white)", color: "var(--navy-800)", cursor: "pointer", transition: "all .18s" }}
              >
                {ch}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
