"use client";
import { useEffect, useRef } from "react";

type Props = {
  size?: "default" | "compact";
  index?: number;
};

export default function SectionDivider({ size = "default", index = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const direction = index % 2 === 0 ? "ltr" : "rtl";

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
        <div
          className={`section-divider-triangle-wrap section-divider-triangle-wrap--${direction} w-full h-3 sm:h-4`}
        >
          <svg
            className="w-full h-full block"
            viewBox="0 0 100 6"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon
              points={direction === "ltr" ? "0,0 0,6 100,3" : "100,0 100,6 0,3"}
              fill="#4AB8D8"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
