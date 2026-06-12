"use client";
import { useEffect, useRef } from "react";

type Props = {
  size?: "default" | "compact";
};

export default function SectionDivider({ size = "default" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-drawn");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -20px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const padding = size === "compact" ? "py-5 sm:py-8" : "py-10 sm:py-14";

  return (
    <div className={`section-divider px-6 lg:px-12 ${padding}`} aria-hidden="true">
      <div ref={ref} className="max-w-screen-xl mx-auto">
        <span className="section-divider-line block h-px bg-[#4AB8D8]" />
      </div>
    </div>
  );
}
