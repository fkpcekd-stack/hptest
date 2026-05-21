"use client";
import dynamic from "next/dynamic";

const HeroIllustration = dynamic(() => import("./HeroIllustration"), { ssr: false });

export default function HeroIllustrationLoader() {
  return <HeroIllustration />;
}
