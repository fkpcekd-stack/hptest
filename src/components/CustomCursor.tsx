"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const rafRef  = useRef<number>(0);
  const hoveredRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mx = 0, my = 0, rx = 0, ry = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mx + "px";
        dotRef.current.style.top  = my + "px";
      }
    };

    const setHover = (on: boolean) => {
      if (hoveredRef.current === on) return;
      hoveredRef.current = on;

      if (dotRef.current) {
        dotRef.current.style.opacity = on ? "0" : "1";
      }
      if (ringRef.current) {
        ringRef.current.style.width           = on ? "76px" : "36px";
        ringRef.current.style.height          = on ? "76px" : "36px";
        ringRef.current.style.backgroundColor = on ? "rgba(74,184,216,0.08)" : "transparent";
        ringRef.current.style.borderColor     = on ? "rgba(74,184,216,0.9)" : "rgba(74,184,216,0.5)";
      }
      if (textRef.current) {
        textRef.current.style.opacity   = on ? "1" : "0";
        textRef.current.style.transform = on ? "scale(1)" : "scale(0.6)";
      }
    };

    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button")) setHover(true);
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button")) setHover(false);
    };

    const tick = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = rx + "px";
        ringRef.current.style.top  = ry + "px";
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout",  onOut);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout",  onOut);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* ドット：リンク上で消える */}
      <div
        ref={dotRef}
        style={{
          top: 0, left: 0,
          transition: "opacity 0.25s ease",
        }}
        className="fixed z-[9999] w-2 h-2 rounded-full bg-[#4AB8D8] pointer-events-none -translate-x-1/2 -translate-y-1/2"
      />

      {/* リング：ホバー時に拡大して VIEW テキストを表示 */}
      <div
        ref={ringRef}
        style={{
          top: 0, left: 0,
          width: "36px", height: "36px",
          borderColor: "rgba(74,184,216,0.5)",
          transition: [
            "width 0.45s cubic-bezier(0.16,1,0.3,1)",
            "height 0.45s cubic-bezier(0.16,1,0.3,1)",
            "background-color 0.3s ease",
            "border-color 0.3s ease",
          ].join(", "),
        }}
        className="fixed z-[9998] rounded-full border pointer-events-none -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
      >
        <span
          ref={textRef}
          style={{
            opacity: 0,
            transform: "scale(0.6)",
            transition: "opacity 0.25s ease 0.08s, transform 0.25s ease 0.08s",
          }}
          className="text-[#4AB8D8] text-[9px] font-semibold tracking-[0.28em] uppercase select-none"
        >
          VIEW
        </span>
      </div>
    </>
  );
}
