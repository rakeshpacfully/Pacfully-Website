import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ compact = false }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("pacfully-theme") || "dark";
    setTheme(saved);
    document.documentElement.classList.toggle("light", saved === "light");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("pacfully-theme", next);
    document.documentElement.classList.toggle("light", next === "light");
  };

  return (
    <button
      onClick={toggle}
      data-testid="theme-toggle"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={`relative inline-flex items-center justify-center rounded-full border border-white/15 hover:border-brand transition group ${compact ? "w-10 h-10" : "w-10 h-10"}`}
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-white group-hover:text-brand transition" />
      ) : (
        <Moon className="w-4 h-4 text-white group-hover:text-brand transition" />
      )}
    </button>
  );
}
