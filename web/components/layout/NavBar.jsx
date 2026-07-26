"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ITEMS = [
  { k: "home", label: "Home", href: "/" },
  { k: "about", label: "About", href: "/#about" },
  { k: "services", label: "Services", href: "/services" },
  { k: "testimonials", label: "Testimonials", href: "/#testimonials" },
  { k: "chat", label: "Live Chat", href: "/chat" },
  { k: "contact", label: "Contact", href: "/contact" },
];

export function NavBar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [bookHover, setBookHover] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "sticky", top: 0, zIndex: 60, display: "grid", gridTemplateColumns: "auto 1fr auto",
        alignItems: "center", gap: 24, padding: "16px 32px",
        background: scrolled ? "rgba(255,255,255,.62)" : "var(--white)",
        backdropFilter: scrolled ? "saturate(180%) blur(18px)" : "none",
        WebkitBackdropFilter: scrolled ? "saturate(180%) blur(18px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,.55)" : "1px solid var(--ink-100)",
        boxShadow: scrolled ? "0 10px 34px rgba(11,31,58,.13)" : "none",
        fontFamily: "var(--font-body)", transition: "background .28s ease,box-shadow .28s ease,backdrop-filter .28s ease",
      }}
    >
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
        <Image src="/logo.jpg" alt="Income N Filing" width={36} height={36} style={{ borderRadius: "50%" }} />
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-base)", color: "var(--navy-900)", lineHeight: 1.2 }}>
            Income N <span style={{ color: "var(--gold-600)" }}>Filing</span>
          </div>
          <div style={{ fontSize: 10, color: "var(--ink-500)", lineHeight: 1.2 }}>Established 2017</div>
        </div>
      </Link>
      <div style={{ display: "flex", gap: 28, justifyContent: "center" }}>
        {ITEMS.map((it) => (
          <Link
            key={it.k}
            href={it.href}
            style={{
              fontSize: "var(--text-sm)", fontWeight: "var(--weight-medium)",
              color: active === it.k ? "var(--gold-600)" : "var(--navy-800)",
              textDecoration: "none", borderBottom: active === it.k ? "2px solid var(--gold-600)" : "2px solid transparent",
              paddingBottom: 4, lineHeight: 1.2,
            }}
          >
            {it.label}
          </Link>
        ))}
      </div>
      <Link
        href="/contact"
        onMouseEnter={() => setBookHover(true)}
        onMouseLeave={() => setBookHover(false)}
        style={{
          fontFamily: "var(--font-body)", fontWeight: "var(--weight-semibold)", fontSize: 13, padding: "11px 22px",
          borderRadius: "var(--radius-pill)", border: "none", background: "var(--gold-500)", color: "var(--navy-950)",
          cursor: "pointer", whiteSpace: "nowrap", textDecoration: "none", display: "inline-block",
          transform: bookHover ? "translateY(-2px)" : "none", boxShadow: bookHover ? "var(--shadow-md)" : "none", transition: "all .15s",
        }}
      >
        Book Free Consultation
      </Link>
    </nav>
  );
}
