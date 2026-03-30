"use client";

import { useEffect, useRef } from "react";

/**
 * Section-aware cursor glow:
 * Tracks mouse position + current section to shift glow color.
 */
const sectionColors: Record<string, string> = {
  hero: "0, 212, 255",       // cyan
  projects: "124, 58, 237",  // violet
  blog: "0, 212, 255",       // cyan
  experience: "244, 114, 182", // pink
  contact: "124, 58, 237",   // violet
};

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const colorRef = useRef("0, 212, 255");

  useEffect(() => {
    const root = document.documentElement;

    const onMove = ({ clientX, clientY }: MouseEvent) => {
      root.style.setProperty("--mouse-x", `${clientX}px`);
      root.style.setProperty("--mouse-y", `${clientY}px`);
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    // Detect which section is currently visible
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const newColor = sectionColors[id] || "0, 212, 255";
            if (newColor !== colorRef.current) {
              colorRef.current = newColor;
              if (glowRef.current) {
                glowRef.current.style.setProperty("--glow-color", newColor);
              }
            }
          }
        }
      },
      { threshold: 0.3 }
    );

    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("mousemove", onMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 select-none transition-colors duration-700"
      style={
        {
          "--glow-color": "0, 212, 255",
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(var(--glow-color), 0.04), transparent 60%)`,
        } as React.CSSProperties
      }
    />
  );
}
