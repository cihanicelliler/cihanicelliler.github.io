"use client";

import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const root = document.documentElement;
    const onMove = ({ clientX, clientY }: MouseEvent) => {
      root.style.setProperty("--mouse-x", `${clientX}px`);
      root.style.setProperty("--mouse-y", `${clientY}px`);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="glow-accent pointer-events-none fixed inset-0 z-50 select-none"
    />
  );
}
