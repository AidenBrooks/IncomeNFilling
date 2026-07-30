"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useBP } from "@/lib/useBP";
import { ServiceIcon } from "@/components/shared/icons";
import { HUB_CATEGORIES, GROUP_ACCENT, GROUP_TINT } from "@/data/categories";
import { saveSelection, clearSelection } from "@/lib/selectionStorage";

export function ServicePicker({ startCat, selected, setSelected, onClose }) {
  const router = useRouter();
  const [active, setActive] = useState(startCat);
  const [mounted, setMounted] = useState(false);
  const bp = useBP();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const id = requestAnimationFrame(() => setMounted(true));
    return () => {
      document.body.style.overflow = "";
      cancelAnimationFrame(id);
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const cat = HUB_CATEGORIES[active];
  const ac = GROUP_ACCENT[cat.group] || "var(--gold-500)";
  const toggle = (name) =>
    setSelected((s) => {
      const n = { ...s };
      if (n[name]) delete n[name];
      else n[name] = true;
      return n;
    });
  const catSel = (i) => HUB_CATEGORIES[i].services.filter((s) => selected[s]).length;
  const totalSel = Object.keys(selected).length;
  const allOn = cat.services.every((s) => selected[s]);
  const toggleAll = () =>
    setSelected((s) => {
      const n = { ...s };
      if (allOn) cat.services.forEach((x) => delete n[x]);
      else cat.services.forEach((x) => (n[x] = true));
      return n;
    });

  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(10,22,40,.55)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: bp.mobile ? 0 : "28px", opacity: mounted ? 1 : 0, transition: "opacity .25s" }}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: bp.mobile ? "100%" : "min(1040px,100%)", height: bp.mobile ? "100%" : "min(680px,92vh)", background: "var(--white)", borderRadius: bp.mobile ? 0 : "var(--radius-xl)", overflow: "hidden",
          display: "grid", gridTemplateColumns: bp.mobile ? "62px 1fr" : "270px 1fr", boxShadow: "0 40px 90px rgba(6,18,36,.5)", transform: mounted ? "scale(1)" : "scale(.95)",
          transition: "transform .28s var(--ease-standard)", fontFamily: "var(--font-body)",
        }}
      >
        <div style={{ background: "var(--navy-950)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <div style={{ padding: bp.mobile ? "14px 8px" : "22px 22px 16px", borderBottom: "1px solid rgba(255,255,255,.08)", display: bp.mobile ? "none" : "block" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--gold-400)", marginBottom: 6 }}>All Modules</div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-lg)", color: "var(--white)" }}>Pick your services</div>
          </div>
          <div style={{ flex: 1, overflowY: "auto", padding: bp.mobile ? "8px 6px" : "10px 12px" }}>
            {HUB_CATEGORIES.map((m, i) => {
              const on = i === active;
              const mac = GROUP_ACCENT[m.group] || "var(--gold-500)";
              const sc = catSel(i);
              return (
                <button
                  key={m.title}
                  onClick={() => setActive(i)}
                  title={m.title}
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: bp.mobile ? "center" : "flex-start", gap: 11, padding: bp.mobile ? "9px 4px" : "11px 12px", marginBottom: 4, borderRadius: "var(--radius-md)", border: "none", cursor: "pointer", textAlign: "left", background: on ? "rgba(255,255,255,.1)" : "transparent", transition: "background .18s", position: "relative" }}
                >
                  <span style={{ flexShrink: 0, width: 34, height: 34, borderRadius: "var(--radius-sm)", background: on ? mac : "rgba(255,255,255,.08)", color: "var(--white)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <ServiceIcon code={m.icon} size={18} />
                  </span>
                  {!bp.mobile && (
                    <span style={{ flex: 1, minWidth: 0, fontSize: 13, fontWeight: on ? "var(--weight-semibold)" : "var(--weight-medium)", color: on ? "var(--white)" : "var(--navy-300)", lineHeight: 1.25 }}>{m.title}</span>
                  )}
                  {sc > 0 && (
                    <span style={{ flexShrink: 0, fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: "var(--radius-pill)", background: "var(--status-positive)", color: "var(--white)", position: bp.mobile ? "absolute" : "static", top: bp.mobile ? 4 : "auto", right: bp.mobile ? 4 : "auto" }}>
                      {sc}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <div style={{ position: "relative", padding: "22px 26px", borderBottom: "1px solid var(--ink-100)", display: "flex", alignItems: "flex-start", gap: 14 }}>
            <span style={{ flexShrink: 0, width: 48, height: 48, borderRadius: "var(--radius-md)", background: `linear-gradient(135deg,${ac},var(--navy-950))`, color: "var(--white)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ServiceIcon code={cat.icon} size={24} />
            </span>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-xl)", color: "var(--navy-900)" }}>{cat.title}</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", color: "var(--ink-500)", marginTop: 2 }}>
                {cat.description} · <b style={{ color: ac }}>{cat.services.length} services</b>
              </div>
            </div>
            <button onClick={toggleAll} style={{ flexShrink: 0, fontFamily: "var(--font-body)", fontSize: 12, fontWeight: "var(--weight-semibold)", padding: "8px 14px", borderRadius: "var(--radius-pill)", border: "1px solid " + ac, background: allOn ? ac : "var(--white)", color: allOn ? "var(--white)" : ac, cursor: "pointer", whiteSpace: "nowrap" }}>
              {allOn ? "Deselect all" : "Select all"}
            </button>
            <button onClick={onClose} style={{ flexShrink: 0, width: 34, height: 34, borderRadius: "50%", border: "1px solid var(--ink-100)", background: "var(--white)", color: "var(--ink-500)", cursor: "pointer", fontSize: 18, lineHeight: 1 }}>×</button>
          </div>
          <div style={{ flex: 1, overflowY: "auto", padding: bp.mobile ? "16px" : "20px 26px", background: "var(--paper)" }}>
            <div style={{ display: "grid", gridTemplateColumns: bp.mobile ? "1fr" : "1fr 1fr", gap: 10 }}>
              {cat.services.map((s) => {
                const on = !!selected[s];
                return (
                  <button
                    key={s}
                    onClick={() => toggle(s)}
                    style={{ display: "flex", alignItems: "center", gap: 11, padding: "13px 15px", borderRadius: "var(--radius-md)", border: "1.5px solid " + (on ? ac : "var(--ink-100)"), background: on ? GROUP_TINT[cat.group] : "var(--white)", cursor: "pointer", textAlign: "left", transition: "all .18s" }}
                  >
                    <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: "var(--radius-sm)", border: "2px solid " + (on ? ac : "var(--ink-100)"), background: on ? ac : "var(--white)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--white)", fontSize: 13, transition: "all .18s" }}>
                      {on ? "✓" : ""}
                    </span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 13.5, fontWeight: "var(--weight-medium)", color: on ? "var(--navy-900)" : "var(--navy-800)" }}>{s}</span>
                  </button>
                );
              })}
            </div>
          </div>
          <div style={{ padding: "16px 26px", borderTop: "1px solid var(--ink-100)", background: "var(--white)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14, flexWrap: "wrap" }}>
            <div style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", color: "var(--ink-500)" }}>
              {totalSel > 0 ? (
                <span>
                  <b style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--navy-900)" }}>{totalSel}</b> service{totalSel > 1 ? "s" : ""} selected across modules
                </span>
              ) : (
                <span>Select the services you need — then request a quote.</span>
              )}
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              {totalSel > 0 && (
                <button
                  onClick={() => {
                    setSelected({});
                    clearSelection();
                  }}
                  style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: "var(--weight-semibold)", padding: "11px 18px", borderRadius: "var(--radius-pill)", border: "1px solid var(--ink-100)", background: "var(--white)", color: "var(--ink-500)", cursor: "pointer" }}
                >
                  Clear
                </button>
              )}
              <button
                onClick={() => {
                  saveSelection(selected);
                  onClose();
                  router.push("/services/apply");
                }}
                disabled={totalSel === 0}
                style={{ fontFamily: "var(--font-body)", fontWeight: "var(--weight-semibold)", fontSize: 13, padding: "11px 24px", borderRadius: "var(--radius-pill)", border: "none", background: totalSel ? "var(--gold-500)" : "var(--ink-100)", color: totalSel ? "var(--navy-950)" : "var(--ink-300)", cursor: totalSel ? "pointer" : "not-allowed", transition: "all .2s" }}
              >
                Request {totalSel || ""} selected →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
