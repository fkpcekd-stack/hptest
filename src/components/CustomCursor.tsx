"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const hoveredRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top  = e.clientY + "px";
      }
    };

    const setHover = (on: boolean) => {
      if (hoveredRef.current === on) return;
      hoveredRef.current = on;

      if (dotRef.current) {
        dotRef.current.style.width           = on ? "72px" : "8px";
        dotRef.current.style.height          = on ? "72px" : "8px";
        dotRef.current.style.backgroundColor = on ? "rgba(255,255,255,0.88)" : "#4AB8D8";
        dotRef.current.style.borderColor     = on ? "rgba(74,184,216,0.6)" : "transparent";
        dotRef.current.style.boxShadow       = on
          ? "0 0 0 1.5px rgba(255,255,255,0.5)"
          : "0 0 0 2px rgba(255,255,255,0.75), 0 0 0 3px rgba(0,0,0,0.06)";
      }
      if (textRef.current) {
        textRef.current.style.opacity   = on ? "1" : "0";
        textRef.current.style.transform = on ? "scale(1)" : "scale(0.5)";
      }
    };

    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button")) setHover(true);
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button")) setHover(false);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout",  onOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout",  onOut);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      style={{
        top: 0, left: 0,
        width: "8px", height: "8px",
        backgroundColor: "#4AB8D8",
        borderColor: "transparent",
        boxShadow: "0 0 0 2px rgba(255,255,255,0.75), 0 0 0 3px rgba(0,0,0,0.06)",
        transition: [
          "width 0.45s cubic-bezier(0.16,1,0.3,1)",
          "height 0.45s cubic-bezier(0.16,1,0.3,1)",
          "background-color 0.3s ease",
          "border-color 0.3s ease",
          "box-shadow 0.3s ease",
        ].join(", "),
      }}
      className="fixed z-[9999] rounded-full border pointer-events-none -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
    >
      <span
        ref={textRef}
        style={{
          opacity: 0,
          transform: "scale(0.5)",
          transition: "opacity 0.22s ease 0.1s, transform 0.22s ease 0.1s",
        }}
        className="text-[#0d0d0d] text-[9px] font-semibold tracking-[0.28em] uppercase select-none whitespace-nowrap"
      >
        VIEW
      </span>
    </div>
  );
}
