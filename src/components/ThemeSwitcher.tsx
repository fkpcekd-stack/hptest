"use client";
import { useEffect, useState } from "react";

type ThemeKey = "v2" | "v3";

const THEMES: { key: ThemeKey; label: string; swatch: string; fg: string }[] = [
  { key: "v2", label: "変更2\nDark", swatch: "#0d0d0d", fg: "#4AB8D8" },
  { key: "v3", label: "変更3\nInk Navy", swatch: "#0B1B30", fg: "#4AB8D8" },
];

const STORAGE_KEY = "dk-theme";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<ThemeKey>("v2");
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    const saved: ThemeKey = raw === "v3" ? "v3" : "v2";
    setTheme(saved);
    applyTheme(saved);
    if (raw !== saved) localStorage.setItem(STORAGE_KEY, saved);
  }, []);

  const applyTheme = (t: ThemeKey) => {
    document.documentElement.setAttribute("data-theme", t);
  };

  const select = (t: ThemeKey) => {
    setTheme(t);
    localStorage.setItem(STORAGE_KEY, t);
    applyTheme(t);
  };

  return (
    <div
      className="fixed bottom-5 right-5 z-[9998] select-none"
      style={{ fontFamily: "var(--font-inter), sans-serif" }}
    >
      {open ? (
        <div
          className="bg-white text-[#0d0d0d] shadow-2xl rounded-lg border border-black/10 overflow-hidden"
          style={{ width: 220 }}
        >
          <div className="flex items-center justify-between px-3 py-2 border-b border-black/8">
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-black/55">
              Theme Preview
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="閉じる"
              className="text-black/40 hover:text-black text-sm leading-none"
            >
              ×
            </button>
          </div>
          <div className="p-2 grid grid-cols-2 gap-2">
            {THEMES.map((t) => {
              const active = theme === t.key;
              return (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => select(t.key)}
                  className="rounded border overflow-hidden text-left transition-all duration-150 hover:scale-[1.02]"
                  style={{
                    borderColor: active ? "#4AB8D8" : "rgba(0,0,0,0.1)",
                    boxShadow: active ? "0 0 0 2px rgba(74,184,216,0.25)" : "none",
                  }}
                >
                  <div
                    className="h-10 flex items-end justify-end px-2 py-1"
                    style={{ backgroundColor: t.swatch }}
                  >
                    <span
                      className="text-[8px] font-bold tracking-[0.15em]"
                      style={{ color: t.fg }}
                    >
                      CYAN
                    </span>
                  </div>
                  <div className="px-2 py-1.5 bg-white">
                    <p className="text-[10px] font-semibold leading-tight whitespace-pre-line text-[#0d0d0d]">
                      {t.label}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
          <div className="px-3 py-2 border-t border-black/8 bg-black/[0.02]">
            <p className="text-[9px] text-black/45 leading-relaxed">
              選択は保存され、サイト全体に反映されます。
            </p>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="bg-white text-[#0d0d0d] shadow-lg rounded-full border border-black/10 px-4 py-2 text-[10px] font-semibold tracking-[0.18em] uppercase hover:bg-[#0d0d0d] hover:text-white transition-colors duration-200"
        >
          Theme
        </button>
      )}
    </div>
  );
}
