"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#blog", label: "Blog" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const handleMobileClick = useCallback((href: string) => {
    setMobileOpen(false);
    setActiveSection(href);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
        style={{
          height: 44,
          backgroundColor: "rgba(255,255,255,0.8)",
          backdropFilter: "saturate(180%) blur(20px)",
          WebkitBackdropFilter: "saturate(180%) blur(20px)",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.1)" : "1px solid transparent",
        }}
      >
        <div
          className="flex items-center justify-between h-full"
          style={{ maxWidth: 980, margin: "0 auto", padding: "0 22px" }}
        >
          {/* Logo — text wordmark */}
          <a
            href="#home"
            className="hover:opacity-70 transition-opacity duration-200"
            style={{ fontSize: 17, fontWeight: 400, color: "#1d1d1f", letterSpacing: "-0.28px", textDecoration: "none" }}
          >
            Cihan İçelliler
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center" style={{ gap: 28 }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize: 12,
                  fontWeight: 400,
                  letterSpacing: "-0.12px",
                  color: activeSection === link.href ? "#1d1d1f" : "#6e6e73",
                  textDecoration: "none",
                  transition: "color 200ms ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#1d1d1f"; }}
                onMouseLeave={(e) => { if (activeSection !== link.href) (e.currentTarget as HTMLAnchorElement).style.color = "#6e6e73"; }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/cihanicelliler"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: "-0.12px",
                color: "#6e6e73",
                textDecoration: "none",
                transition: "color 200ms ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#0066cc"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#6e6e73"; }}
            >
              GitHub
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            style={{ background: "none", border: "none", cursor: "pointer", color: "#1d1d1f", padding: 4, display: "flex", alignItems: "center" }}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" as const }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{
              backgroundColor: "rgba(255,255,255,0.96)",
              backdropFilter: "saturate(180%) blur(20px)",
              WebkitBackdropFilter: "saturate(180%) blur(20px)",
            }}
          >
            <nav className="flex flex-col items-center" style={{ gap: 36 }}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleMobileClick(link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: i * 0.05, ease: "easeOut" as const }}
                  style={{
                    fontSize: 28,
                    fontWeight: 600,
                    color: activeSection === link.href ? "#0066cc" : "#1d1d1f",
                    letterSpacing: "-0.4px",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="https://github.com/cihanicelliler"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.05, ease: "easeOut" as const }}
                style={{ fontSize: 17, color: "#0066cc", textDecoration: "none" }}
              >
                GitHub ↗
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
