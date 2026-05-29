"use client";
import { useEffect, useRef } from "react";

interface Props {
  lines: string[];
  className?: string;
  delay?: number;
  charDelay?: number;
}

export default function RevealChars({
  lines,
  className = "",
  delay = 0,
  charDelay = 35,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const chars = Array.from(el.querySelectorAll<HTMLElement>("[data-char]"));
    chars.forEach((c) => {
      c.style.opacity = "0";
      c.style.transform = "translateY(0.5em)";
      c.style.transition =
        "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          chars.forEach((c, i) => {
            setTimeout(() => {
              c.style.opacity = "1";
              c.style.transform = "translateY(0)";
            }, delay + i * charDelay);
          });
          observer.unobserve(el);
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, charDelay]);

  return (
    <span ref={ref} className={className}>
      {lines.map((line, li) => (
        <span key={li} className="block">
          {Array.from(line).map((ch, ci) => (
            <span key={ci} data-char className="inline-block">
              {ch}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}
