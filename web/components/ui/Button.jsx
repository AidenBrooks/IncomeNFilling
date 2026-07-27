"use client";
import { useState } from "react";

const PALETTE = {
  primary: { bg: "var(--gold-500)", color: "var(--navy-900)", border: "transparent", hoverBg: "var(--gold-400)" },
  secondary: { bg: "transparent", color: "var(--white)", border: "var(--border-inverse)", hoverBg: "rgba(255,255,255,.08)" },
  ghost: { bg: "transparent", color: "var(--navy-800)", border: "var(--ink-100)", hoverBg: "var(--gold-500)", hoverColor: "var(--navy-900)", hoverBorder: "var(--gold-500)" },
};

export function Button({ children, variant = "primary", size = "md", icon, disabled, onClick, type = "button", fullWidth }) {
  const [hover, setHover] = useState(false);
  if (variant === "command") return <CommandButton onClick={onClick} disabled={disabled}>{children}</CommandButton>;
  const p = PALETTE[variant] || PALETTE.primary;
  const pad = size === "sm" ? "9px 16px" : "13px 24px";
  const fs = size === "sm" ? "var(--text-sm)" : "var(--text-base)";
  const isHover = hover && !disabled;
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
        padding: pad, fontFamily: "var(--font-body)", fontWeight: "var(--weight-semibold)", fontSize: fs,
        borderRadius: "var(--radius-pill)", border: `1px solid ${isHover ? (p.hoverBorder || p.border) : p.border}`,
        background: isHover ? p.hoverBg : p.bg, color: isHover ? (p.hoverColor || p.color) : p.color,
        cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1,
        width: fullWidth ? "100%" : "auto",
        transition: "background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)",
      }}
    >
      {icon}
      {children}
    </button>
  );
}

export function CommandButton({ children, onClick, disabled, href }) {
  const [hover, setHover] = useState(false);
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      type={href ? undefined : "button"}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", fontWeight: "var(--weight-medium)",
        background: "var(--navy-950)", color: hover ? "var(--status-positive)" : "var(--gold-500)",
        border: `1px solid ${hover ? "var(--status-positive)" : "var(--ink-700)"}`,
        borderRadius: "var(--radius-sm)", padding: "10px 18px",
        cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1,
        textDecoration: "none", display: "inline-block",
        transition: "all var(--duration-fast) var(--ease-standard)",
      }}
    >
      [&nbsp;{children}&nbsp;]
    </Tag>
  );
}
