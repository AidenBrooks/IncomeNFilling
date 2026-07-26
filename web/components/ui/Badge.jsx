const TONE = {
  positive: { c: "var(--status-positive)" },
  warning: { c: "var(--status-warning)" },
  critical: { c: "var(--status-critical)" },
  neutral: { c: "var(--status-neutral)" },
};

export function Badge({ status = "neutral", children, pulse = false }) {
  const t = TONE[status] || TONE.neutral;
  return (
    <span
      style={{
        display: "inline-flex", alignItems: "center", gap: 7, padding: "6px 12px",
        borderRadius: "var(--radius-pill)", background: "var(--paper-alt)",
        fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", fontWeight: "var(--weight-medium)",
        letterSpacing: "var(--tracking-wide)", textTransform: "uppercase", color: "var(--ink-700)",
      }}
    >
      <span style={{ width: 8, height: 8, borderRadius: "50%", background: t.c, animation: pulse ? "pulse-dot 2s infinite" : "none" }} />
      {children}
    </span>
  );
}
