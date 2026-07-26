export function Eyebrow({ children, light }) {
  return (
    <div
      style={{
        display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px",
        borderRadius: "var(--radius-pill)", background: light ? "rgba(255,255,255,.1)" : "var(--navy-050)",
        fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "var(--tracking-widest)", textTransform: "uppercase",
        color: light ? "var(--gold-400)" : "var(--navy-700)",
      }}
    >
      {children}
    </div>
  );
}

export function SectionHead({ eyebrow, title, sub, dark }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 48 }}>
      <Eyebrow light={dark}>{eyebrow}</Eyebrow>
      <h2
        style={{
          fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-3xl)",
          color: dark ? "var(--white)" : "var(--navy-900)", margin: "16px 0 0", letterSpacing: "var(--tracking-tight)",
        }}
      >
        {title}
      </h2>
      {sub && (
        <p style={{ fontFamily: "var(--font-body)", color: dark ? "var(--navy-300)" : "var(--ink-500)", margin: "10px auto 0", maxWidth: 520 }}>
          {sub}
        </p>
      )}
    </div>
  );
}
