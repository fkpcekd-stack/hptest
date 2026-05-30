"use client";
import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  distance?: number;
  duration?: number;
  threshold?: number;
}

export default function ParallaxNumber({
  children,
  className = "",
  distance = 120,
  duration = 1.2,
  threshold = 0.55,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = `translateY(${distance}px)`;
    el.style.transition = `opacity ${duration}s cubic-bezier(0.16,1,0.3,1), transform ${duration}s cubic-bezier(0.16,1,0.3,1)`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.unobserve(el);
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [distance, duration, threshold]);

  return (
    <div ref={ref} className={`pointer-events-none ${className}`} aria-hidden>
      {children}
    </div>
  );
}
