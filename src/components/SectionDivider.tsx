"use client";
import { useEffect, useRef, useState } from "react";

type DividerVariant = "line" | "triangle";

type Props = {
  size?: "default" | "compact";
  index?: number;
};

export default function SectionDivider({ size = "default", index = 0 }: Props) {
  const direction = index % 2 === 0 ? "ltr" : "rtl";
  const ref = useRef<HTMLDivElement>(null);
  const [variant, setVariant] = useState<DividerVariant>("line");

  useEffect(() => {
    const read = () => {
      const v = document.documentElement.getAttribute("data-divider");
      setVariant(v === "triangle" ? "triangle" : "line");
    };
    read();
    const obs = new MutationObserver(read);
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-divider"],
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.remove("is-drawn");
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
  }, [variant]);

  const padding = size === "compact" ? "py-5 sm:py-8" : "py-10 sm:py-14";

  return (
    <div className={`section-divider px-6 lg:px-12 ${padding}`} aria-hidden="true">
      <div ref={ref} className="max-w-screen-xl mx-auto">
        {variant === "triangle" ? (
          <div className={`section-divider-triangle-wrap section-divider-triangle-wrap--${direction} w-full h-3 sm:h-4`}>
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
        ) : (
          <span className={`section-divider-line section-divider-line--${direction} block h-px bg-[#4AB8D8]`} />
        )}
      </div>
    </div>
  );
}
