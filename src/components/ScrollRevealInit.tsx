"use client";
import { useEffect } from "react";

export default function ScrollRevealInit() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    elements.forEach((el) => {
      const dir = el.dataset.reveal ?? "up";
      const dist = parseInt(el.dataset.distance ?? "28");
      const duration = el.dataset.duration ?? "0.8s";
      el.style.opacity = "0";
      el.style.transition = `opacity ${duration} cubic-bezier(0.16,1,0.3,1), transform ${duration} cubic-bezier(0.16,1,0.3,1)`;
      if (dir === "up")    el.style.transform = `translateY(${dist}px)`;
      if (dir === "left")  el.style.transform = `translateX(-${dist}px)`;
      if (dir === "right") el.style.transform = `translateX(${dist}px)`;
      if (dir === "fade")  el.style.transform = "none";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = parseInt(el.dataset.delay ?? "0");
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "none";
          }, delay);
          observer.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
