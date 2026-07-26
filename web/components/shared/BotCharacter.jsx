// Animated SVG "compliance bot" character used by the floating chat widget on the Home page.
export function BotCharacter({ hovered }) {
  const eyeCol = "#f6a94e";
  const eyeGlow = hovered ? "#ffd27a" : eyeCol;
  return (
    <svg viewBox="0 0 100 134" width="100%" height="100%" style={{ overflow: "visible", animation: "botbob 4s ease-in-out infinite" }}>
      <ellipse cx="50" cy="128" rx="30" ry="5" fill="rgba(15,42,66,.16)" />
      <rect x="24" y="118" width="24" height="13" rx="6" fill="#f3ddd0" />
      <rect x="52" y="118" width="24" height="13" rx="6" fill="#f3ddd0" />
      <rect x="30" y="96" width="15" height="26" rx="7" fill="#2a2d33" />
      <rect x="55" y="96" width="15" height="26" rx="7" fill="#2a2d33" />
      <g style={{ transformOrigin: "16px 66px", transformBox: "fill-box", animation: hovered ? "botarm 1.1s ease-in-out infinite" : "botarm 2.8s ease-in-out infinite" }}>
        <rect x="8" y="60" width="18" height="42" rx="9" fill="#7f8894" />
        <circle cx="17" cy="103" r="8" fill="#17191e" />
      </g>
      <g style={{ transformOrigin: "84px 66px", transformBox: "fill-box", animation: hovered ? "wave .8s ease-in-out infinite" : "wave 2.6s ease-in-out infinite" }}>
        <rect x="74" y="60" width="18" height="42" rx="9" fill="#7f8894" />
        <circle cx="83" cy="103" r="8" fill="#17191e" />
      </g>
      <path d="M22 104 q28 12 56 0 v-42 q0-20 -28 -20 t-28 20 z" fill="#8a929c" />
      <rect x="36" y="84" width="28" height="17" rx="8" fill="#79828d" />
      <path d="M24 66 q26 -30 52 0 q4 -34 -26 -34 t-26 34 z" fill="#8a929c" />
      <path d="M18 62 q32 -46 64 0 q6 -42 -32 -42 t-32 42 z" fill="#939ba5" />
      <rect x="28" y="20" width="44" height="46" rx="16" fill="#14171c" />
      <rect x="28" y="20" width="44" height="46" rx="16" fill="none" stroke="#2b2f37" strokeWidth="1.5" />
      <g style={{ transformOrigin: "50px 42px", transformBox: "fill-box", animation: "botblink 4.5s ease-in-out infinite" }}>
        <g style={{ animation: "boteye 2s ease-in-out infinite", filter: `drop-shadow(0 0 5px ${eyeGlow})` }}>
          <rect x="38" y="35" width="7" height="15" rx="3.5" fill={eyeGlow} />
          <rect x="55" y="35" width="7" height="15" rx="3.5" fill={eyeGlow} />
        </g>
      </g>
      <path d="M44 60 v11" stroke="#f2cdb8" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <path d="M53 60 v11" stroke="#f2cdb8" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <circle cx="44" cy="72" r="2" fill="#f2cdb8" />
      <circle cx="53" cy="72" r="2" fill="#f2cdb8" />
    </svg>
  );
}
