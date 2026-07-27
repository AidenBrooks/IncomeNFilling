// Carries the picked-services selection from the Services Hub (picker + floating bar)
// to the /services/apply wizard, and lets the Hub restore a prior in-progress selection
// on return. localStorage (not sessionStorage) so it survives across tabs/visits until
// the request is actually submitted or cleared.

const KEY = "inf_selection";

export function saveSelection(selectedMapOrNames) {
  const names = Array.isArray(selectedMapOrNames) ? selectedMapOrNames : Object.keys(selectedMapOrNames);
  try {
    if (names.length) localStorage.setItem(KEY, JSON.stringify(names));
    else localStorage.removeItem(KEY);
  } catch {
    // localStorage unavailable (e.g. private mode) — selection just won't carry over.
  }
}

export function loadSelection() {
  try {
    const raw = localStorage.getItem(KEY);
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

export function clearSelection() {
  try {
    localStorage.removeItem(KEY);
  } catch {
    // no-op
  }
}
