"use client";
import { useEffect, useRef, useState } from "react";
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import atlas from "world-atlas/countries-110m.json";
import { PinIcon } from "@/components/shared/icons";
import { OFFICES, METROS } from "@/data/content";

function arc(a, b) {
  const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2;
  const dx = b[0] - a[0], dy = b[1] - a[1];
  const nx = -dy, ny = dx, len = Math.hypot(nx, ny) || 1;
  const k = 0.22;
  return "M" + a[0] + " " + a[1] + " Q" + (mx + (nx / len) * len * k) + " " + (my + (ny / len) * len * k) + " " + b[0] + " " + b[1];
}

export function OfficeMap({ contactChannels } = {}) {
  const wrap = useRef(null);
  const mapRef = useRef(null);
  const [geo, setGeo] = useState(null);
  const [sel, setSel] = useState(0);
  const [hoverMetro, setHoverMetro] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const draw = () => {
      const w = wrap.current ? wrap.current.clientWidth : 620;
      const h = 468;
      try {
        const countries = feature(atlas, atlas.objects.countries);
        const india = countries.features.find((f) => String(f.id) === "356");
        if (!india) throw new Error("india not found");
        const proj = geoMercator().fitExtent([[46, 46], [w - 46, h - 46]], india);
        const path = geoPath(proj);
        const others = countries.features.filter((f) => String(f.id) !== "356");
        const svg =
          '<svg viewBox="0 0 ' + w + " " + h + '" width="' + w + '" height="' + h + '" style="display:block"><g>' +
          others.map((f) => '<path d="' + (path(f) || "") + '" fill="rgba(15,42,66,0.04)" stroke="rgba(15,42,66,0.1)" stroke-width="0.5"/>').join("") +
          '</g><path d="' + (path(india) || "") + '" fill="rgba(239,168,46,0.16)" stroke="#EFA82E" stroke-width="1.4"/></svg>';
        if (mapRef.current) mapRef.current.innerHTML = svg;
        const offices = OFFICES.map((o) => {
          const p = proj(o.lnglat);
          return { ...o, x: p[0], y: p[1] };
        });
        const metros = METROS.map((m) => {
          const p = proj(m.lnglat);
          return { ...m, x: p[0], y: p[1] };
        });
        const src = offices[0];
        const arcs = metros.map((m) => arc([src.x, src.y], [m.x, m.y]));
        if (!cancelled) setGeo({ offices, metros, arcs });
      } catch {
        if (!cancelled) {
          const offices = OFFICES.map((o, i) => ({ ...o, x: w * (0.52 + i * 0.06), y: h * (0.42 + i * 0.12) }));
          setGeo({ offices, metros: [], arcs: [] });
        }
      }
    };
    draw();
    let raf = null;
    const onResize = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(draw);
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelled = true;
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const offices = geo ? geo.offices : [];
  const cur = offices[sel];
  const mapsHref = cur ? "https://www.google.com/maps/search/" + encodeURIComponent(cur.addr + ", " + cur.region) : "#";

  return (
    <div className="rsp-2col office-map-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 16, alignItems: "stretch", height: 470 }}>
      <div
        ref={wrap}
        style={{
          position: "relative", height: "100%", boxSizing: "border-box", borderRadius: "var(--radius-xl)", overflow: "hidden",
          background: "var(--white)", border: "1px solid var(--ink-100)",
          backgroundImage: "radial-gradient(var(--navy-050) 1.2px,transparent 1.2px)", backgroundSize: "24px 24px", boxShadow: "var(--shadow-md)",
        }}
      >
        <div ref={mapRef} style={{ position: "absolute", inset: 0 }} />
        {geo && (
          <svg style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 2 }} width="100%" height="100%">
            {geo.arcs.map((d, i) => (
              <g key={i}>
                <path d={d} fill="none" stroke="var(--navy-300)" strokeWidth="1" strokeDasharray="3 6" opacity="0.5" />
                <circle r="2.6" fill="var(--gold-500)">
                  <animateMotion dur={3.5 + i * 0.4 + "s"} repeatCount="indefinite" path={d} />
                </circle>
              </g>
            ))}
            {offices.length === 2 && (
              <line x1={offices[0].x} y1={offices[0].y} x2={offices[1].x} y2={offices[1].y} stroke="var(--gold-500)" strokeWidth="1.4" strokeDasharray="4 5" opacity="0.8" />
            )}
          </svg>
        )}
        {geo &&
          geo.metros.map((m, i) => (
            <div key={m.city} onMouseEnter={() => setHoverMetro(i)} onMouseLeave={() => setHoverMetro(null)} style={{ position: "absolute", left: m.x, top: m.y, transform: "translate(-50%,-50%)", zIndex: 3 }}>
              <span style={{ display: "block", width: 6, height: 6, borderRadius: "50%", background: "var(--navy-400)", cursor: "default" }} />
              <span style={{ position: "absolute", left: "50%", top: 11, transform: "translateX(-50%)", fontFamily: "var(--font-mono)", fontSize: 9, color: hoverMetro === i ? "var(--navy-900)" : "var(--ink-300)", whiteSpace: "nowrap", transition: "color .2s" }}>
                {m.city}
              </span>
            </div>
          ))}
        {offices.map((o, i) => (
          <div key={o.city} onClick={() => setSel(i)} style={{ position: "absolute", left: o.x, top: o.y, transform: "translate(-50%,-50%)", zIndex: sel === i ? 6 : 5, cursor: "pointer" }}>
            <span style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 18, height: 18, borderRadius: "50%", border: "2px solid var(--gold-500)", animation: "pulse-ring 2s infinite" }} />
            {sel === i && (
              <span
                style={{
                  position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 58, height: 58, borderRadius: "50%",
                  background: "conic-gradient(from 0deg,transparent,rgba(239,168,46,.5))", animation: "spin-slow 3s linear infinite",
                  WebkitMaskImage: "radial-gradient(circle,black 60%,transparent 61%)", maskImage: "radial-gradient(circle,black 60%,transparent 61%)",
                }}
              />
            )}
            <span
              style={{
                position: "relative", display: "flex", alignItems: "center", justifyContent: "center",
                width: sel === i ? 22 : 16, height: sel === i ? 22 : 16, borderRadius: "50%", background: "var(--gold-500)",
                border: "2px solid var(--white)", boxShadow: "var(--shadow-md)", transition: "all .2s", fontSize: 9, fontWeight: 700, color: "var(--navy-950)",
              }}
            >
              {sel === i ? "★" : ""}
            </span>
            <span
              style={{
                position: "absolute", left: "50%", top: sel === i ? 26 : 20, transform: "translateX(-50%)", fontFamily: "var(--font-display)",
                fontWeight: "var(--weight-semibold)", fontSize: 12, color: "var(--navy-900)", whiteSpace: "nowrap", background: "var(--white)",
                padding: "2px 8px", borderRadius: "var(--radius-pill)", boxShadow: "var(--shadow-sm)",
              }}
            >
              {o.city}
            </span>
          </div>
        ))}
        <div style={{ position: "absolute", left: 16, top: 16, zIndex: 7, display: "inline-flex", alignItems: "center", gap: 7, background: "var(--white)", borderRadius: "var(--radius-pill)", padding: "6px 13px", boxShadow: "var(--shadow-sm)" }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--status-positive)", animation: "pulse-dot 2s infinite" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--navy-800)", letterSpacing: ".04em" }}>Serving pan-India · 20+ metros</span>
        </div>
      </div>
      <div style={{ height: "100%", boxSizing: "border-box", borderRadius: "var(--radius-xl)", background: "var(--white)", border: "1px solid var(--ink-100)", display: "flex", flexDirection: "column", boxShadow: "var(--shadow-md)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "relative", padding: "20px 22px 18px", background: "linear-gradient(135deg,var(--gold-400),var(--gold-600))", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -30, right: -20, width: 120, height: 120, borderRadius: "50%", border: "18px solid rgba(255,255,255,.16)" }} />
          <span style={{ position: "absolute", right: 20, bottom: 16, opacity: 0.25 }}>
            <PinIcon size={22} color="var(--navy-950)" />
          </span>
          <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(15,42,66,.14)", borderRadius: "var(--radius-pill)", padding: "3px 10px", fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--navy-950)", fontWeight: "var(--weight-semibold)" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--navy-950)", animation: "pulse-dot 2s infinite" }} />
              Open now
            </span>
          </div>
          <div style={{ position: "relative", fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-2xl)", color: "var(--navy-950)", lineHeight: 1.1 }}>Visit or reach us</div>
          <div style={{ position: "relative", fontFamily: "var(--font-body)", fontSize: 12.5, color: "rgba(15,42,66,.7)", marginTop: 3 }}>2 home offices · delivery pan-India</div>
        </div>
        <div style={{ flex: 1, padding: "16px 18px", display: "flex", flexDirection: "column", gap: 10, overflowY: "auto" }}>
          {offices.map((o, i) => (
            <button
              key={o.city}
              onClick={() => setSel(i)}
              style={{
                textAlign: "left", position: "relative", overflow: "hidden", borderRadius: "var(--radius-lg)",
                border: "1.5px solid " + (sel === i ? "var(--gold-500)" : "var(--ink-100)"), background: sel === i ? "var(--navy-050)" : "var(--white)",
                boxShadow: sel === i ? "var(--shadow-sm)" : "none", padding: "13px 15px", cursor: "pointer", transition: "all .25s var(--ease-standard)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                <span style={{ position: "relative", width: 34, height: 34, flexShrink: 0, borderRadius: "50%", background: sel === i ? "var(--gold-500)" : "var(--navy-050)", display: "flex", alignItems: "center", justifyContent: "center", transition: "all .25s" }}>
                  <PinIcon size={16} color={sel === i ? "var(--navy-950)" : "var(--navy-500)"} />
                  {sel === i && <span style={{ position: "absolute", inset: -4, borderRadius: "50%", border: "2px solid var(--gold-400)", animation: "pulse-ring 2s infinite" }} />}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-base)", color: "var(--navy-900)" }}>{o.city}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--ink-300)" }}>{o.region}</div>
                </div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 16, color: sel === i ? "var(--gold-600)" : "var(--ink-300)", transform: sel === i ? "rotate(90deg)" : "none", transition: "transform .25s" }}>›</span>
              </div>
              <div style={{ overflow: "hidden", maxHeight: sel === i ? 130 : 0, opacity: sel === i ? 1 : 0, transition: "all .3s var(--ease-standard)" }}>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ink-500)", lineHeight: 1.5, margin: "12px 0 10px" }}>{o.addr}</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {!contactChannels && (
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--navy-700)", background: "var(--paper-alt)", padding: "6px 11px", borderRadius: "var(--radius-pill)" }}>
                      <span>☎</span>
                      {o.phone}
                    </span>
                  )}
                  <a href={mapsHref} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-body)", fontWeight: "var(--weight-semibold)", fontSize: 11, color: "var(--white)", background: "var(--navy-900)", padding: "6px 12px", borderRadius: "var(--radius-pill)", textDecoration: "none" }}>
                    Directions →
                  </a>
                </div>
              </div>
            </button>
          ))}
        </div>
        {contactChannels ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", borderTop: "1px solid var(--ink-100)" }}>
            {contactChannels.map((c, ci) => (
              <a
                key={c.key}
                href={c.href}
                target={c.key === "wa" ? "_blank" : undefined}
                rel="noreferrer"
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--navy-050)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--white)")}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 7, padding: "15px 6px", textDecoration: "none", borderLeft: ci ? "1px solid var(--ink-100)" : "none", background: "var(--white)", transition: "background .15s" }}
              >
                <span style={{ width: 36, height: 36, borderRadius: 11, background: c.accent, display: "flex", alignItems: "center", justifyContent: "center" }}>{c.icon}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--navy-800)", fontWeight: 600 }}>{c.footLabel || c.label}</span>
              </a>
            ))}
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", borderTop: "1px solid var(--ink-100)" }}>
            {[["2", "Offices"], ["20+", "Metros"], ["All", "States"]].map((s, si) => (
              <div key={s[1]} style={{ textAlign: "center", padding: "14px 0", borderLeft: si ? "1px solid var(--ink-100)" : "none" }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--text-xl)", color: "var(--navy-900)" }}>{s[0]}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--ink-300)" }}>{s[1]}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
