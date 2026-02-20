"use client";

import { useEffect, useState } from "react";
import { Moon, SunMedium } from "lucide-react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    return storedTheme === "dark" || (!storedTheme && prefersDark);
  });

  useEffect(() => {
    // Clear legacy inline styles from the previous GSAP-based theme toggle.
    document.body.style.removeProperty("background-color");
    document.body.style.removeProperty("color");
    document.body.style.removeProperty("transition");

    const root = document.documentElement;
    root.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const ThemeIcon = dark ? SunMedium : Moon;

  return (
    <button
      onClick={() => setDark(!dark)}
      className="motion-button inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--foreground)] shadow-sm transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
      aria-label="Toggle theme"
    >
      <ThemeIcon className="button-icon h-4 w-4" aria-hidden="true" />
      {dark ? "Light mode" : "Dark mode"}
    </button>
  );
}
