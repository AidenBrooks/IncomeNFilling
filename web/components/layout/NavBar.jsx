"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useBP } from "@/lib/useBP";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const bp = useBP();
  const compact = bp.ltDesktop;
  const [prevCompact, setPrevCompact] = useState(compact);
  if (compact !== prevCompact) {
    setPrevCompact(compact);
    if (!compact) setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "sticky", top: 0, zIndex: 60, display: "grid", gridTemplateColumns: compact ? "1fr auto" : "auto 1fr auto",
        alignItems: "center", gap: compact ? 12 : 24, padding: compact ? "12px 18px" : "16px 32px",
        background: scrolled || menuOpen ? "rgba(255,255,255,.92)" : "var(--white)",
        backdropFilter: scrolled ? "saturate(180%) blur(18px)" : "none",
        WebkitBackdropFilter: scrolled ? "saturate(180%) blur(18px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,.55)" : "1px solid var(--ink-100)",
        boxShadow: scrolled ? "0 10px 34px rgba(11,31,58,.13)" : "none",
        fontFamily: "var(--font-body)", transition: "background .28s ease,box-shadow .28s ease,backdrop-filter .28s ease",
      }}
    >
      <Link href="/" onClick={() => setMenuOpen(false)} style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
        <Image src="/logo.jpg" alt="Income N Filing" width={36} height={36} style={{ borderRadius: "50%", flexShrink: 0 }} />
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-base)", color: "var(--navy-900)", lineHeight: 1.2, whiteSpace: "nowrap" }}>
            Income N <span style={{ color: "var(--gold-600)" }}>Filing</span>
          </div>
          <div style={{ fontSize: 10, color: "var(--ink-500)", lineHeight: 1.2 }}>Established 2017</div>
        </div>
      </Link>
      {!compact && (
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
      )}
      {!compact && (
        <Link
          href="/contact"
          onMouseEnter={() => setBookHover(true)}
          onMouseLeave={() => setBookHover(false)}
          style={{
            fontFamily: "var(--font-body)", fontWeight: "var(--weight-semibold)", fontSize: 13, padding: "11px 22px",
            borderRadius: "var(--radius-pill)", border: "none", background: "var(--gold-500)", color: "var(--navy-950)",
            cursor: "pointer", whiteSpace: "nowrap", textDecoration: "none", display: "inline-block", justifySelf: "end",
            transform: bookHover ? "translateY(-2px)" : "none", boxShadow: bookHover ? "var(--shadow-md)" : "none", transition: "all .15s",
          }}
        >
          Book Free Consultation
        </Link>
      )}
      {compact && (
        <button
          aria-label="Menu"
          onClick={() => setMenuOpen((o) => !o)}
          style={{
            width: 44, height: 44, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            gap: 5, borderRadius: "var(--radius-md)", border: "1px solid var(--ink-100)", background: "var(--white)",
            cursor: "pointer", padding: 0, justifySelf: "end",
          }}
        >
          <span style={{ width: 20, height: 2, borderRadius: 2, background: "var(--navy-900)", transition: "transform .25s", transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none" }} />
          <span style={{ width: 20, height: 2, borderRadius: 2, background: "var(--navy-900)", opacity: menuOpen ? 0 : 1, transition: "opacity .2s" }} />
          <span style={{ width: 20, height: 2, borderRadius: 2, background: "var(--navy-900)", transition: "transform .25s", transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none" }} />
        </button>
      )}
      {compact && menuOpen && (
        <div style={{ gridColumn: "1 / -1", display: "flex", flexDirection: "column", gap: 2, paddingTop: 10, marginTop: 4, borderTop: "1px solid var(--ink-100)" }}>
          {ITEMS.map((it) => (
            <Link
              key={it.k}
              href={it.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "var(--text-base)", fontWeight: "var(--weight-medium)",
                color: active === it.k ? "var(--gold-600)" : "var(--navy-800)",
                textDecoration: "none", padding: "12px 8px", borderRadius: "var(--radius-md)", lineHeight: 1.2,
              }}
            >
              {it.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: 8, fontFamily: "var(--font-body)", fontWeight: "var(--weight-semibold)", fontSize: 14, padding: "13px 22px",
              borderRadius: "var(--radius-pill)", border: "none", background: "var(--gold-500)", color: "var(--navy-950)",
              textDecoration: "none", textAlign: "center", cursor: "pointer",
            }}
          >
            Book Free Consultation
          </Link>
        </div>
      )}
    </nav>
  );
}
