"use client";
import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  distance?: number;
  duration?: number;
}

export default function ParallaxNumber({
  children,
  className = "",
  distance = 120,
  duration = 1.2,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const card = el.offsetParent as HTMLElement | null;
    if (!card) return;

    let triggered = false;
    let raf = 0;

    const reveal = () => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    };

    const check = () => {
      if (triggered) return;
      const rect = card.getBoundingClientRect();
      const viewportH = window.innerHeight;

      const fullyVisibleFromBottom = rect.bottom <= viewportH && rect.top >= 0;
      const tallerThanViewportTopReached =
        rect.height > viewportH && rect.top <= 0;

      if (fullyVisibleFromBottom || tallerThanViewportTopReached) {
        triggered = true;
        reveal();
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(check);
    };

    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`pointer-events-none ${className}`}
      aria-hidden
      style={{
        opacity: 0,
        transform: `translateY(${distance}px)`,
        transition: `opacity ${duration}s cubic-bezier(0.16,1,0.3,1), transform ${duration}s cubic-bezier(0.16,1,0.3,1)`,
      }}
    >
      {children}
    </div>
  );
}
