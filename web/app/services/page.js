"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ServicePicker } from "@/components/services/ServicePicker";
import { SearchIcon } from "@/components/shared/icons";
import { HUB_CATEGORIES, GROUPS, GROUP_ACCENT } from "@/data/categories";
import { saveSelection, loadSelection, clearSelection } from "@/lib/selectionStorage";

export default function ServicesPage() {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [grp, setGrp] = useState("All");
  const [sort, setSort] = useState("recommended");
  const [focus, setFocus] = useState(false);
  const [picker, setPicker] = useState(null);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    const o = {};
    loadSelection().forEach((s) => {
      o[s] = true;
    });
    const id = requestAnimationFrame(() => setSelected(o));
    return () => cancelAnimationFrame(id);
  }, []);

  let filtered = HUB_CATEGORIES.filter(
    (c) =>
      (grp === "All" || c.group === grp) &&
      (c.title.toLowerCase().includes(q.toLowerCase()) ||
        c.description.toLowerCase().includes(q.toLowerCase()) ||
        c.group.toLowerCase().includes(q.toLowerCase()) ||
        c.services.some((s) => s.toLowerCase().includes(q.toLowerCase())))
  );
  if (sort === "most") filtered = [...filtered].sort((a, b) => b.count - a.count);
  if (sort === "az") filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
  const total = HUB_CATEGORIES.reduce((n, c) => n + c.count, 0);
  const shown = filtered.reduce((n, c) => n + c.count, 0);
  const chips = ["All", ...GROUPS];
  const suggestions = ["GST", "Income Tax", "Incorporation", "Accounting"];
  const catSelCount = (c) => c.services.filter((s) => selected[s]).length;
  const totalSel = Object.keys(selected).length;

  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <WhatsAppButton />
      <NavBar active="services" />
      <section className="services-hero-section" style={{ background: "linear-gradient(150deg,var(--navy-950) 40%,var(--navy-800,#1c3a5e))", padding: "66px 32px 120px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,.06) 1px,transparent 1px)", backgroundSize: "26px 26px", opacity: 0.6 }} />
        <div style={{ position: "absolute", top: -70, right: "6%", width: 280, height: 280, background: "var(--gold-500)", opacity: 0.16, borderRadius: 46, transform: "rotate(18deg)" }} />
        <div style={{ position: "absolute", bottom: -90, left: "-4%", width: 320, height: 320, borderRadius: "50%", border: "2px dashed rgba(255,255,255,.12)", animation: "spin-slow 50s linear infinite" }} />
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: "var(--radius-pill)", background: "rgba(255,255,255,.08)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "var(--tracking-widest)", textTransform: "uppercase", color: "var(--gold-400)", marginBottom: 20 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--status-positive)", animation: "pulse-dot 2s infinite" }} />
            Services Directory
          </div>
          <h1 className="services-hero-h1" style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-5xl)", color: "var(--white)", margin: "0 0 12px", letterSpacing: "var(--tracking-tight)", lineHeight: 1.08 }}>
            Find the right service
            <br />
            in <span style={{ color: "var(--gold-400)" }}>seconds</span>.
          </h1>
          <p style={{ fontFamily: "var(--font-body)", color: "var(--navy-300)", margin: "0 0 30px", maxWidth: 560, fontSize: "var(--text-lg)" }}>
            All <b style={{ color: "var(--white)" }}>{total} services</b> across <b style={{ color: "var(--white)" }}>{HUB_CATEGORIES.length} modules</b> — search, filter, and jump straight to what your business needs.
          </p>
          <div style={{ maxWidth: 660, position: "relative" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, background: "var(--white)", borderRadius: "var(--radius-pill)", padding: "8px 8px 8px 22px", boxShadow: focus ? "0 0 0 4px rgba(239,168,46,.35),var(--shadow-lg)" : "var(--shadow-lg)", transition: "box-shadow .25s" }}>
              <SearchIcon size={22} color="var(--ink-300)" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                placeholder="Search 94 services — try “GST refund” or “company registration”"
                style={{ flex: 1, minWidth: 0, border: "none", outline: "none", background: "none", fontFamily: "var(--font-body)", fontSize: "var(--text-base)", color: "var(--navy-900)" }}
              />
              {q && (
                <button onClick={() => setQ("")} style={{ flexShrink: 0, width: 32, height: 32, borderRadius: "50%", border: "none", background: "var(--paper-alt)", color: "var(--ink-500)", cursor: "pointer", fontSize: 15 }}>×</button>
              )}
              <span style={{ flexShrink: 0, fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700, color: "var(--navy-950)", background: "var(--gold-500)", borderRadius: "var(--radius-pill)", padding: "9px 16px" }}>{filtered.length} found</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 16, flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--navy-300)" }}>Popular:</span>
              {suggestions.map((s) => (
                <button key={s} onClick={() => setQ(s)} style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: "var(--weight-medium)", padding: "5px 13px", borderRadius: "var(--radius-pill)", border: "1px solid rgba(255,255,255,.22)", background: "rgba(255,255,255,.06)", color: "var(--white)", cursor: "pointer" }}>
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section style={{ padding: "0 var(--container-pad) 96px", maxWidth: "var(--container-max)", margin: "0 auto", marginTop: -64 }}>
        <div style={{ position: "sticky", top: 78, zIndex: 40, background: "var(--white)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-md)", border: "1px solid var(--ink-100)", padding: "14px 18px", marginBottom: 30, display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", flex: 1, minWidth: 0 }}>
            {chips.map((ch) => {
              const n = ch === "All" ? HUB_CATEGORIES.length : HUB_CATEGORIES.filter((c) => c.group === ch).length;
              const on = grp === ch;
              const ac = ch === "All" ? "var(--navy-900)" : GROUP_ACCENT[ch] || "var(--gold-500)";
              return (
                <button
                  key={ch}
                  onClick={() => setGrp(ch)}
                  style={{ display: "inline-flex", alignItems: "center", gap: 7, fontFamily: "var(--font-body)", fontSize: 13, fontWeight: "var(--weight-medium)", padding: "8px 14px", borderRadius: "var(--radius-pill)", border: "1px solid " + (on ? ac : "var(--ink-100)"), background: on ? ac : "var(--white)", color: on ? "var(--white)" : "var(--navy-800)", cursor: "pointer", transition: "all .2s" }}
                >
                  {ch}
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, padding: "1px 6px", borderRadius: "var(--radius-pill)", background: on ? "rgba(255,255,255,.2)" : "var(--paper-alt)", color: on ? "var(--white)" : "var(--ink-500)" }}>{n}</span>
                </button>
              );
            })}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--ink-300)" }}>Sort</span>
            <select value={sort} onChange={(e) => setSort(e.target.value)} style={{ fontFamily: "var(--font-body)", fontSize: 13, padding: "8px 12px", borderRadius: "var(--radius-md)", border: "1px solid var(--ink-100)", background: "var(--white)", color: "var(--navy-900)", cursor: "pointer", outline: "none" }}>
              <option value="recommended">Recommended</option>
              <option value="most">Most services</option>
              <option value="az">A – Z</option>
            </select>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20, flexWrap: "wrap", gap: 8 }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", color: "var(--ink-500)" }}>
            Showing <b style={{ color: "var(--navy-900)" }}>{filtered.length}</b> {grp === "All" ? "modules" : grp + " modules"}
            {q && (
              <span>
                {" "}
                for “<b style={{ color: "var(--navy-900)" }}>{q}</b>”
              </span>
            )}{" "}
            · <b style={{ color: "var(--navy-900)" }}>{shown}</b> services
          </span>
          {(grp !== "All" || q) && (
            <button
              onClick={() => {
                setGrp("All");
                setQ("");
              }}
              style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: "var(--weight-semibold)", color: "var(--gold-600)", background: "none", border: "none", cursor: "pointer" }}
            >
              Clear filters ×
            </button>
          )}
        </div>
        {filtered.length > 0 ? (
          <div className="rsp-cols-2" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
            {filtered.map((c, i) => (
              <ServiceCard key={c.title} c={c} i={i} selCount={catSelCount(c)} onClick={() => setPicker(HUB_CATEGORIES.indexOf(c))} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "70px 20px", background: "var(--white)", borderRadius: "var(--radius-xl)", border: "1px dashed var(--ink-100)" }}>
            <div style={{ width: 64, height: 64, margin: "0 auto 16px", borderRadius: "50%", background: "var(--paper-alt)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <SearchIcon size={28} color="var(--ink-300)" />
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-lg)", color: "var(--navy-900)", marginBottom: 6 }}>No services match your search</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", color: "var(--ink-500)", marginBottom: 18 }}>Try a different term or clear the filters.</div>
            <button
              onClick={() => {
                setGrp("All");
                setQ("");
              }}
              style={{ fontFamily: "var(--font-body)", fontWeight: "var(--weight-semibold)", fontSize: 13, padding: "11px 22px", borderRadius: "var(--radius-pill)", border: "none", background: "var(--gold-500)", color: "var(--navy-950)", cursor: "pointer" }}
            >
              Reset search
            </button>
          </div>
        )}
      </section>
      {totalSel > 0 && picker === null && (
        <div style={{ position: "fixed", bottom: 20, left: "50%", transform: "translateX(-50%)", zIndex: 85, display: "flex", alignItems: "center", gap: 12, background: "var(--navy-950)", color: "var(--white)", borderRadius: "var(--radius-pill)", padding: "12px 14px 12px 22px", boxShadow: "0 20px 50px rgba(6,18,36,.4)", fontFamily: "var(--font-body)", maxWidth: "calc(100vw - 32px)", flexWrap: "wrap", justifyContent: "center" }}>
          <span style={{ fontSize: 14 }}>
            <b style={{ fontFamily: "var(--font-display)", fontSize: 17 }}>{totalSel}</b> service{totalSel > 1 ? "s" : ""} selected
          </span>
          <button
            onClick={() => {
              saveSelection(selected);
              router.push("/services/apply");
            }}
            style={{ fontFamily: "var(--font-body)", fontWeight: "var(--weight-semibold)", fontSize: 13, padding: "10px 20px", borderRadius: "var(--radius-pill)", border: "none", background: "var(--gold-500)", color: "var(--navy-950)", cursor: "pointer" }}
          >
            Request quote →
          </button>
          <button
            onClick={() => {
              setSelected({});
              clearSelection();
            }}
            style={{ width: 30, height: 30, borderRadius: "50%", border: "1px solid rgba(255,255,255,.2)", background: "transparent", color: "var(--navy-300)", cursor: "pointer", fontSize: 16, lineHeight: 1 }}
          >
            ×
          </button>
        </div>
      )}
      {picker !== null && <ServicePicker startCat={picker} selected={selected} setSelected={setSelected} onClose={() => setPicker(null)} />}
      <Footer />
    </div>
  );
}
