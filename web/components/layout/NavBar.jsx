"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon, CloseIcon } from "@/components/shared/icons";

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav
      style={{
        position: "sticky", top: 0, zIndex: 60, display: "grid", gridTemplateColumns: "auto 1fr auto",
        alignItems: "center", gap: 24, padding: "16px clamp(16px, 4vw, 32px)",
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
      <div className="nav-links" style={{ display: "flex", gap: 28, justifyContent: "center" }}>
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
      <div style={{ display: "flex", alignItems: "center", gap: 12, justifySelf: "end" }}>
        <Link
          href="/contact"
          className="nav-cta"
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
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          style={{
            alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: "var(--radius-md)",
            border: "1px solid var(--ink-100)", background: "var(--white)", color: "var(--navy-900)", cursor: "pointer",
          }}
        >
          {menuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
        </button>
      </div>
      {menuOpen && (
        <div
          style={{
            position: "absolute", top: "100%", left: 0, right: 0, background: "var(--white)",
            borderBottom: "1px solid var(--ink-100)", boxShadow: "var(--shadow-lg)",
            padding: "8px clamp(16px, 4vw, 32px) 20px", display: "flex", flexDirection: "column", gap: 2,
          }}
        >
          {ITEMS.map((it) => (
            <Link
              key={it.k}
              href={it.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "var(--text-base)", fontWeight: "var(--weight-medium)", padding: "13px 4px",
                color: active === it.k ? "var(--gold-600)" : "var(--navy-800)",
                textDecoration: "none", borderBottom: "1px solid var(--ink-100)",
              }}
            >
              {it.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "var(--font-body)", fontWeight: "var(--weight-semibold)", fontSize: 14, padding: "13px 22px",
              borderRadius: "var(--radius-pill)", border: "none", background: "var(--gold-500)", color: "var(--navy-950)",
              textDecoration: "none", textAlign: "center", marginTop: 14,
            }}
          >
            Book Free Consultation
          </Link>
        </div>
      )}
    </nav>
  );
}
