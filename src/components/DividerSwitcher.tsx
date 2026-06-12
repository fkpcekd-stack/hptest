"use client";
import { useEffect, useState } from "react";

type DividerKey = "line" | "triangle";

const VARIANTS: { key: DividerKey; label: string; preview: string }[] = [
  { key: "line", label: "現状 Simple Line", preview: "━━━━━━━━" },
  { key: "triangle", label: "横長三角 Triangle", preview: "▶━━━━━━" },
];

const STORAGE_KEY = "dk-divider";

export default function DividerSwitcher() {
  const [open, setOpen] = useState(true);
  const [variant, setVariant] = useState<DividerKey>("line");

  useEffect(() => {
    const saved = (localStorage.getItem(STORAGE_KEY) as DividerKey | null) ?? "line";
    setVariant(saved);
    apply(saved);
  }, []);

  const apply = (v: DividerKey) => {
    const root = document.documentElement;
    if (v === "line") root.removeAttribute("data-divider");
    else root.setAttribute("data-divider", v);
  };

  const select = (v: DividerKey) => {
    setVariant(v);
    localStorage.setItem(STORAGE_KEY, v);
    apply(v);
  };

  return (
    <div
      className="fixed bottom-5 left-5 z-[9998] select-none"
      style={{ fontFamily: "var(--font-inter), sans-serif" }}
    >
      {open ? (
        <div
          className="bg-white text-[#0d0d0d] shadow-2xl rounded-lg border border-black/10 overflow-hidden"
          style={{ width: 240 }}
        >
          <div className="flex items-center justify-between px-3 py-2 border-b border-black/8">
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-black/55">
              Divider Preview
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
          <div className="p-2 flex flex-col gap-1.5">
            {VARIANTS.map((v) => {
              const active = variant === v.key;
              return (
                <button
                  key={v.key}
                  type="button"
                  onClick={() => select(v.key)}
                  className="rounded border overflow-hidden text-left transition-all duration-150 hover:bg-black/[0.02] flex items-center gap-2 px-2 py-2"
                  style={{
                    borderColor: active ? "#4AB8D8" : "rgba(0,0,0,0.1)",
                    boxShadow: active
                      ? "0 0 0 2px rgba(74,184,216,0.25)"
                      : "none",
                  }}
                >
                  <span className="text-[9px] tracking-[0.05em] text-[#4AB8D8] font-mono shrink-0 w-16 whitespace-pre">
                    {v.preview}
                  </span>
                  <span className="text-[10px] font-semibold leading-tight text-[#0d0d0d]">
                    {v.label}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="px-3 py-2 border-t border-black/8 bg-black/[0.02]">
            <p className="text-[9px] text-black/45 leading-relaxed">
              選択は保存され、全 divider に反映されます。
            </p>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="bg-white text-[#0d0d0d] shadow-lg rounded-full border border-black/10 px-4 py-2 text-[10px] font-semibold tracking-[0.18em] uppercase hover:bg-[#0d0d0d] hover:text-white transition-colors duration-200"
        >
          Divider
        </button>
      )}
    </div>
  );
}
