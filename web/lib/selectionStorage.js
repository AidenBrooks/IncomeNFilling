// Carries the picked-services selection from the Services Hub picker to the /services/apply
// intake page. sessionStorage only (not meant to be a shareable/bookmarkable URL).

const KEY = "inf_selected_services";

export function saveSelection(selectedMap) {
  try {
    sessionStorage.setItem(KEY, JSON.stringify(Object.keys(selectedMap)));
  } catch {
    // sessionStorage unavailable (e.g. private mode) — selection just won't carry over.
  }
}

export function loadSelection() {
  try {
    const raw = sessionStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function clearSelection() {
  try {
    sessionStorage.removeItem(KEY);
  } catch {
    // no-op
  }
}
