"use client";
import { useAnimStyle, AnimStyle } from "@/contexts/AnimationContext";

const OPTIONS: { key: AnimStyle; label: string; sub: string }[] = [
  { key: "A", label: "Organic",   sub: "有機的データ" },
  { key: "B", label: "Editorial", sub: "ミニマル"     },
  { key: "C", label: "Bold",      sub: "ボールド"     },
  { key: "D", label: "Neural",    sub: "ニューラル"   },
  { key: "E", label: "PolyHuman", sub: "人体ポリ"     },
];

export default function AnimationSwitcher() {
  const { style, setStyle } = useAnimStyle();
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-0.5 bg-white/95 backdrop-blur-sm border border-black/8 shadow-lg px-2 py-1.5">
      <span className="text-[9px] text-black/25 tracking-[0.2em] uppercase mr-2 select-none">STYLE</span>
      {OPTIONS.map(({ key, label, sub }) => (
        <button
          key={key}
          onClick={() => setStyle(key)}
          className={`flex flex-col items-center px-4 py-1 transition-all duration-200 leading-tight ${
            style === key
              ? "bg-[#4AB8D8] text-white"
              : "text-black/40 hover:text-black/65 hover:bg-black/4"
          }`}
        >
          <span className="text-xs font-medium">{label}</span>
          <span className={`text-[9px] ${style === key ? "opacity-80" : "opacity-55"}`}>{sub}</span>
        </button>
      ))}
    </div>
  );
}
