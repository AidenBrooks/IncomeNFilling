"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SocialIcon } from "@/components/shared/SocialIcon";
import { SOCIALS } from "@/components/shared/icons";
import { HOME_CATEGORIES } from "@/data/categories";
import { PHONE_DISPLAY, EMAIL } from "@/data/content";

const QUICK_LINKS = [
  ["Home", "/"],
  ["About", "/#about"],
  ["Services", "/services"],
  ["Live Chat", "/chat"],
  ["Contact", "/contact"],
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);
  const columns = [
    { title: "Quick Links", items: QUICK_LINKS },
    { title: "Services", items: HOME_CATEGORIES.map((c) => [c.title, "/services"]) },
  ];

  return (
    <footer style={{ background: "var(--navy-950)", color: "var(--white)", padding: "64px 32px 26px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -80, left: -40, width: 260, height: 260, borderRadius: "50%", background: "var(--gold-500)", opacity: 0.06 }} />
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr", gap: 40, paddingBottom: 40, borderBottom: "1px solid rgba(255,255,255,.1)" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <Image src="/logo.jpg" alt="Income N Filing" width={40} height={40} style={{ borderRadius: "50%" }} />
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-lg)", color: "var(--white)", lineHeight: 1.1 }}>
                  Income N <span style={{ color: "var(--gold-400)" }}>Filing</span>
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--navy-300)" }}>Established 2017</div>
              </div>
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--navy-300)", lineHeight: 1.6, maxWidth: 280, marginBottom: 18 }}>
              Simplifying compliance, empowering business — taxation, GST, incorporation and corporate law, handled end-to-end.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {SOCIALS.map((s) => (
                <SocialIcon key={s.label} d={s.d} label={s.label} />
              ))}
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "var(--tracking-widest)", textTransform: "uppercase", color: "var(--gold-400)", marginBottom: 16 }}>
                {col.title}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {col.items.map((it, i) => (
                  <Link
                    key={it[0] + i}
                    href={it[1]}
                    style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--navy-300)", textDecoration: "none", transition: "color .15s", width: "fit-content" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--navy-300)")}
                  >
                    {it[0]}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "var(--tracking-widest)", textTransform: "uppercase", color: "var(--gold-400)", marginBottom: 16 }}>
              Stay Updated
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--navy-300)", lineHeight: 1.5, marginBottom: 14 }}>
              Compliance deadlines &amp; tips in your inbox.
            </p>
            {ok ? (
              <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--status-positive)" }}>✓ Subscribed — thank you!</div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) setOk(true);
                }}
                style={{ display: "flex", gap: 8 }}
              >
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                  placeholder="Email address"
                  style={{
                    flex: 1, minWidth: 0, fontFamily: "var(--font-body)", fontSize: 13, padding: "10px 12px",
                    borderRadius: "var(--radius-md)", border: "1px solid rgba(255,255,255,.16)", background: "rgba(255,255,255,.05)",
                    color: "var(--white)", outline: "none",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    flexShrink: 0, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, width: 42,
                    borderRadius: "var(--radius-md)", border: "none", background: "var(--gold-500)", color: "var(--navy-950)", cursor: "pointer",
                  }}
                >
                  →
                </button>
              </form>
            )}
            <div style={{ marginTop: 18, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--navy-300)" }}>☎ {PHONE_DISPLAY}</div>
            <div style={{ marginTop: 6, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--navy-300)" }}>✉ {EMAIL}</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap", paddingTop: 22 }}>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--navy-300)" }}>
            © {new Date().getFullYear()} Income N Filing. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: 22 }}>
            {["Privacy Policy", "Terms of Service"].map((x) => (
              <a key={x} href="#" style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--navy-300)", textDecoration: "none" }}>
                {x}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
