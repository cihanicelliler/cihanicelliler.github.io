"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Brain } from "lucide-react";

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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
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

  const handleMobileClick = useCallback(
    (href: string) => {
      setMobileOpen(false);
      setActiveSection(href);
    },
    []
  );

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
    >
      {/* Floating pill nav */}
      <nav
        className={`relative flex items-center gap-1 px-2 py-2 rounded-2xl transition-all duration-500 ${
          scrolled
            ? "bg-background/70 backdrop-blur-2xl border border-border/60 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-background/30 backdrop-blur-md border border-transparent"
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 px-3 py-2 rounded-xl group mr-2"
        >
          <div className="relative">
            <Brain className="w-5 h-5 text-cyan group-hover:text-violet transition-colors duration-300" />
            <div className="absolute inset-0 w-5 h-5 bg-cyan/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="font-mono text-sm font-semibold tracking-tight hidden sm:inline">
            cihan<span className="gradient-text">.dev</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative px-3.5 py-2 text-sm rounded-xl transition-all duration-300 ${
                  activeSection === link.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {/* Active indicator background */}
                {activeSection === link.href && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute inset-0 bg-white/[0.06] rounded-xl border border-white/[0.08]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            </li>
          ))}
          <li className="ml-2">
            <a
              href="#contact"
              className="relative text-sm px-5 py-2 rounded-xl font-medium overflow-hidden group bg-white/[0.04] border border-cyan/30 hover:border-cyan/60 hover:bg-white/[0.07] hover:shadow-[0_0_20px_rgba(0,212,255,0.15)] transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan/5 to-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 text-cyan group-hover:text-white transition-colors duration-300">
                Get in Touch
              </span>
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden ml-2 p-2 rounded-xl text-foreground hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </nav>

      {/* Mobile menu — full screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id="mobile-menu"
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl flex items-center justify-center"
          >
            <ul className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                >
                  <a
                    href={link.href}
                    onClick={() => handleMobileClick(link.href)}
                    className={`text-2xl font-heading font-bold tracking-tight transition-colors ${
                      activeSection === link.href
                        ? "gradient-text"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.35 }}
              >
                <a
                  href="#contact"
                  onClick={() => handleMobileClick("#contact")}
                  className="relative px-8 py-3 rounded-xl text-lg font-medium overflow-hidden group bg-white/[0.04] border border-cyan/30 hover:border-cyan/60 hover:shadow-[0_0_24px_rgba(0,212,255,0.15)] transition-all duration-300"
                >
                  <span className="relative z-10 text-cyan">Get in Touch</span>
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
