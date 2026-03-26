"use client";

import { useEffect } from "react";

export function ThemeInit() {
  useEffect(() => {
    // Manual preference takes priority over OS setting
    const stored = localStorage.getItem("theme");
    if (stored) {
      document.documentElement.classList.toggle("dark", stored === "dark");
      return;
    }

    // Fall back to OS preference and keep it in sync
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const apply = () => document.documentElement.classList.toggle("dark", mq.matches);
    apply();

    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", apply);
      return () => mq.removeEventListener("change", apply);
    }
    // Safari < 14 fallback
    mq.addListener(apply);
    return () => mq.removeListener(apply);
  }, []);

  return null;
}
