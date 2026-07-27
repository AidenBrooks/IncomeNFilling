// Small line-art icon glyphs and the WhatsApp mark, shared across nav, footer, cards and chat widgets.

export function WhatsAppIcon({ size = 24, color = "var(--white)" }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.8 14.16c-.24.68-1.42 1.32-1.95 1.37-.5.05-.98.24-3.3-.69-2.78-1.1-4.55-3.94-4.69-4.13-.14-.19-1.13-1.5-1.13-2.86 0-1.36.71-2.03.96-2.31.24-.27.53-.34.71-.34h.51c.16.01.39-.06.6.46.24.58.82 2 .89 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.29-.12.57.17.28.75 1.24 1.61 2.01 1.11.99 2.05 1.3 2.33 1.44.28.14.45.12.61-.07.16-.19.7-.82.89-1.1.19-.28.37-.23.62-.14.25.09 1.61.76 1.89.9.28.14.46.21.53.32.07.11.07.65-.17 1.33z" />
    </svg>
  );
}

export function CallIcon({ size = 18, color = "currentColor" }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
      <path d="M6.6 10.8a15.6 15.6 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 013 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.3 1z" />
    </svg>
  );
}

export function EmailIcon({ size = 18, color = "currentColor" }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm8 7L4 6.5V8l8 4.5L20 8V6.5z" />
    </svg>
  );
}

export function PinIcon({ size = 16, color = "currentColor" }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
    </svg>
  );
}

export function SearchIcon({ size = 22, color = "var(--ink-300)" }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.2-3.2" />
    </svg>
  );
}

export function MenuIcon({ size = 22, color = "currentColor" }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function CloseIcon({ size = 22, color = "currentColor" }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
      <path d="M5 5l14 14M19 5L5 19" />
    </svg>
  );
}

export function CheckCircleIcon({ size = 88, color = "var(--gold-600)" }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

const SERVICE_ICON_PATHS = {
  INC: <g><path d="M4 21h16" /><path d="M6 21V6l6-3 6 3v15" /><path d="M9.5 9h1M13.5 9h1M9.5 13h1M13.5 13h1" /><path d="M10.5 21v-3h3v3" /></g>,
  GST: <g><circle cx="12" cy="12" r="8.5" /><path d="M8.5 15.5L15.5 8.5" /><circle cx="9.6" cy="9.6" r="1.3" /><circle cx="14.4" cy="14.4" r="1.3" /></g>,
  ITR: <g><path d="M7 3h7l4 4v13.5a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5V3.5A.5.5 0 017 3z" /><path d="M14 3v4h4" /><path d="M9 12h6M9 15h6M9 9h2" /></g>,
  ROC: <g><circle cx="12" cy="12" r="3" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" /></g>,
  IBC: <g><path d="M4 20h16" /><path d="M6 20V9l6-4 6 4v11" /><path d="M15 14l-6 4M9 14l6 4" /></g>,
  DOC: <g><path d="M7 3h7l4 4v14H6V4a1 1 0 011-1z" /><path d="M14 3v4h4" /><path d="M9 13l1.5 1.5L13 12" /><path d="M9 17h6" /></g>,
  AGR: <g><path d="M8 5h8v14a2 2 0 01-2 2H10a2 2 0 01-2-2z" /><path d="M11 3h2v2h-2z" /><path d="M10 10h4M10 13h4M10 16h2" /></g>,
  ACC: <g><rect x="5" y="4" width="14" height="16" rx="1.5" /><path d="M8 4v16" /><path d="M11 8h5M11 12h5M11 16h3" /></g>,
  LIC: <g><circle cx="12" cy="10" r="5" /><path d="M9.5 14l-1 7 3.5-2 3.5 2-1-7" /><path d="M10 10l1.4 1.4L14 8.8" /></g>,
  ADV: <g><path d="M12 3a6 6 0 016 6c0 4-3 5-3 8H9c0-3-3-4-3-8a6 6 0 016-6z" /><path d="M9 20h6M10 22h4" /></g>,
};

export function ServiceIcon({ code, size = 26 }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.9, strokeLinecap: "round", strokeLinejoin: "round" };
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...p}>
      {SERVICE_ICON_PATHS[code] || SERVICE_ICON_PATHS.DOC}
    </svg>
  );
}

const WHY_ICON_PATHS = {
  VER: <g><path d="M12 3l7 3v5c0 4.6-3.1 7.8-7 9-3.9-1.2-7-4.4-7-9V6z" /><path d="M9 12l2.2 2.2L15 10.4" /></g>,
  SEC: <g><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 018 0v3" /><path d="M12 15v2" /></g>,
  CMP: <g><path d="M7 3h7l4 4v13.5a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5V3.5A.5.5 0 017 3z" /><path d="M14 3v4h4" /><path d="M8.5 14l2 2 4-4" /></g>,
  YRS: <g><circle cx="12" cy="9" r="5" /><path d="M9.2 13.4L8 21l4-2.4L16 21l-1.2-7.6" /></g>,
  PAN: <g><rect x="6" y="4" width="12" height="17" rx="1" /><path d="M6 21h12" /><path d="M9.5 8h1M13.5 8h1M9.5 12h1M13.5 12h1" /><path d="M10.5 21v-3h3v3" /></g>,
  500: <g><circle cx="9" cy="9" r="3" /><path d="M4 20c0-3 2.2-5 5-5s5 2 5 5" /><path d="M15.5 7.5a3 3 0 010 5.5" /><path d="M16 15c2.4.3 4 2.3 4 5" /></g>,
};

export function WhyIcon({ code, size = 26 }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.9, strokeLinecap: "round", strokeLinejoin: "round" };
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...p}>
      {WHY_ICON_PATHS[code] || WHY_ICON_PATHS.VER}
    </svg>
  );
}

export const SOCIALS = [
  { label: "LinkedIn", d: <path d="M4.98 3.5A2.5 2.5 0 002.5 6a2.5 2.5 0 002.48 2.5A2.5 2.5 0 007.5 6a2.5 2.5 0 00-2.52-2.5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05 4 0 4.74 2.6 4.74 6V21h-4v-5.3c0-1.26-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21h-4z" /> },
  { label: "Facebook", d: <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z" /> },
  { label: "Instagram", d: <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 6.85A5.15 5.15 0 1017.15 12 5.15 5.15 0 0012 6.85zm0 8.5A3.35 3.35 0 1115.35 12 3.35 3.35 0 0112 15.35zm5.35-9.9a1.2 1.2 0 101.2 1.2 1.2 1.2 0 00-1.2-1.2z" /> },
  { label: "X", d: <path d="M17.53 3H20l-5.6 6.4L21 21h-5.1l-4-5.2-4.6 5.2H4.8l6-6.85L3.4 3h5.24l3.62 4.78zM16.6 19.5h1.4L7.5 4.4H6z" /> },
  { label: "YouTube", d: <path d="M21.6 7.2a2.5 2.5 0 00-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.83.43A2.5 2.5 0 002.4 7.2 26 26 0 002 12a26 26 0 00.4 4.8 2.5 2.5 0 001.77 1.77C5.75 19 12 19 12 19s6.25 0 7.83-.43a2.5 2.5 0 001.77-1.77A26 26 0 0022 12a26 26 0 00-.4-4.8zM10 15V9l5.2 3z" /> },
];
