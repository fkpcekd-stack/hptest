"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

type Phase = "idle" | "enter" | "logo" | "exit";

export default function IntroAnimation() {
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    if (sessionStorage.getItem("introShown")) return;
    sessionStorage.setItem("introShown", "1");

    setPhase("enter");
    const t1 = setTimeout(() => setPhase("logo"),  200);
    const t2 = setTimeout(() => setPhase("exit"),  1400);
    const t3 = setTimeout(() => setPhase("idle"),  2100);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (phase === "idle") return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#0d0d0d] flex items-center justify-center pointer-events-none transition-opacity duration-700 ${
        phase === "exit" ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className={`transition-all duration-500 ${
          phase === "logo" || phase === "exit"
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-3"
        }`}
      >
        <Image
          src="/logo.png"
          alt="dkInc."
          width={160}
          height={40}
          className="h-10 w-auto brightness-0 invert"
        />
      </div>
    </div>
  );
}
