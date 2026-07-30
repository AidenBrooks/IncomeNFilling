"use client";
import { useEffect, useState } from "react";

// Mirrors the Claude Design source's useBP() exactly: mobile <640, tablet 640-1024,
// desktop >=1024, ltDesktop <1024. Components branch on these instead of CSS media queries.
export function useBP() {
  const [w, setW] = useState(1440);
  useEffect(() => {
    const on = () => setW(window.innerWidth);
    window.addEventListener("resize", on, { passive: true });
    on();
    return () => window.removeEventListener("resize", on);
  }, []);
  return { w, mobile: w < 640, tablet: w >= 640 && w < 1024, desktop: w >= 1024, ltDesktop: w < 1024 };
}
