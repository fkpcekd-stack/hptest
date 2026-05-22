"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export type AnimStyle = "A" | "B" | "C" | "D" | "E";

const Ctx = createContext<{ style: AnimStyle; setStyle: (s: AnimStyle) => void }>({
  style: "A",
  setStyle: () => {},
});

export function AnimationProvider({ children }: { children: ReactNode }) {
  const [style, setStyle] = useState<AnimStyle>("A");
  return <Ctx.Provider value={{ style, setStyle }}>{children}</Ctx.Provider>;
}

export const useAnimStyle = () => useContext(Ctx);
