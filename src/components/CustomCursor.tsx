"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mx = 0, my = 0, rx = 0, ry = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mx + "px";
        dotRef.current.style.top = my + "px";
      }
    };

    const tick = () => {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.left = rx + "px";
        ringRef.current.style.top = ry + "px";
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed z-[9999] w-2 h-2 rounded-full bg-[#4AB8D8] pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{ top: 0, left: 0 }}
      />
      <div
        ref={ringRef}
        className="fixed z-[9998] w-9 h-9 rounded-full border border-[#4AB8D8]/60 pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{ top: 0, left: 0 }}
      />
    </>
  );
}
