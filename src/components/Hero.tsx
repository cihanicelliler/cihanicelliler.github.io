"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Mail, BookOpen, MapPin } from "lucide-react";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "4", label: "Industries" },
  { value: "20+", label: "Technologies" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/cihanicelliler", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/cihanicelliler", label: "LinkedIn" },
  { icon: Mail, href: "mailto:icellilercihan@gmail.com", label: "Email" },
  { icon: BookOpen, href: "https://medium.com/@cihanicelliler", label: "Medium" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <section
      id="home"
      style={{ backgroundColor: "#ffffff", paddingTop: 120, paddingBottom: 80 }}
    >
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 22px" }}>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">

          {/* Photo column */}
          <motion.div
            {...fadeUp(0)}
            className="shrink-0 flex flex-col items-center gap-4"
          >
            <div
              className="relative rounded-[22px] overflow-hidden product-shadow"
              style={{ width: 240, height: 240 }}
            >
              <Image
                src="/images/profile.png"
                alt="Cihan İçelliler"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Available badge */}
            <div
              className="flex items-center gap-2"
              style={{ fontSize: 12, color: "#6e6e73", letterSpacing: "-0.12px" }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "#30d158", flexShrink: 0 }}
              />
              Open to opportunities
            </div>

            {/* Location */}
            <div
              className="flex items-center gap-1.5"
              style={{ fontSize: 12, color: "#86868b" }}
            >
              <MapPin size={12} />
              Istanbul, Turkey
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-1">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  style={{
                    color: "#6e6e73",
                    transition: "color 200ms ease",
                    display: "flex",
                    alignItems: "center",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#0066cc"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#6e6e73"; }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Content column */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 min-w-0 pt-2">

            {/* Label */}
            <motion.p
              {...fadeUp(0.08)}
              style={{ fontSize: 14, color: "#6e6e73", letterSpacing: "-0.224px", marginBottom: 12 }}
            >
              Senior Software Engineer &amp; AI Agent Specialist
            </motion.p>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.16)}
              style={{
                fontSize: "clamp(40px, 5.6vw, 56px)",
                fontWeight: 600,
                lineHeight: 1.07,
                letterSpacing: "-0.28px",
                color: "#1d1d1f",
                marginBottom: 16,
              }}
            >
              Building the<br />
              <span style={{ color: "#0066cc" }}>Self-Running Bank.</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              {...fadeUp(0.24)}
              style={{
                fontSize: 21,
                fontWeight: 400,
                lineHeight: 1.381,
                letterSpacing: "0.011em",
                color: "#6e6e73",
                maxWidth: 520,
                marginBottom: 32,
              }}
            >
              AI agents that orchestrate every banking process — from compliance to customer experience — autonomously.
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.32)}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10"
            >
              <a
                href="#projects"
                style={{
                  backgroundColor: "#0066cc",
                  color: "#ffffff",
                  borderRadius: 9999,
                  padding: "11px 22px",
                  fontSize: 17,
                  fontWeight: 400,
                  border: "none",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  transition: "background 200ms ease, transform 150ms ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#0077ed"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#0066cc"; }}
                onMouseDown={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = "scale(0.95)"; }}
                onMouseUp={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)"; }}
              >
                View Projects
              </a>
              <a
                href="#contact"
                style={{
                  backgroundColor: "transparent",
                  color: "#0066cc",
                  borderRadius: 9999,
                  padding: "10px 22px",
                  fontSize: 17,
                  fontWeight: 400,
                  border: "1px solid #0066cc",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  transition: "background 200ms ease, color 200ms ease, transform 150ms ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = "#0066cc";
                  el.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = "transparent";
                  el.style.color = "#0066cc";
                }}
                onMouseDown={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = "scale(0.95)"; }}
                onMouseUp={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)"; }}
              >
                Get in Touch
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              {...fadeUp(0.4)}
              className="flex items-center"
              style={{ gap: 0, borderTop: "1px solid #e0e0e0", paddingTop: 24, width: "100%", maxWidth: 440 }}
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  style={{
                    flex: 1,
                    textAlign: "center",
                    paddingLeft: i === 0 ? 0 : 16,
                    paddingRight: i === stats.length - 1 ? 0 : 16,
                    borderLeft: i > 0 ? "1px solid #e0e0e0" : "none",
                  }}
                >
                  <p style={{ fontSize: 28, fontWeight: 600, lineHeight: 1, color: "#1d1d1f", letterSpacing: "-0.4px" }}>
                    {stat.value}
                  </p>
                  <p style={{ fontSize: 12, color: "#6e6e73", marginTop: 4, letterSpacing: "-0.12px" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Currently Building card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.52, ease: "easeOut" as const }}
          className="mt-16 flex flex-col sm:flex-row sm:items-center gap-4"
          style={{
            border: "1px solid #e0e0e0",
            borderRadius: 18,
            padding: "20px 24px",
            backgroundColor: "#ffffff",
          }}
        >
          <div className="flex items-center gap-2 shrink-0">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#0066cc", flexShrink: 0 }}
            />
            <span style={{ fontSize: 12, color: "#86868b", letterSpacing: "-0.12px", whiteSpace: "nowrap" }}>
              Currently building
            </span>
          </div>
          <div className="hidden sm:block" style={{ width: 1, height: 20, backgroundColor: "#e0e0e0" }} />
          <div className="flex-1 min-w-0">
            <span style={{ fontSize: 15, fontWeight: 600, color: "#1d1d1f" }}>Lecta AI</span>
            <span style={{ fontSize: 15, color: "#6e6e73" }}>
              {" "}— AI-native document intelligence powered by LangGraph, RAG pipelines &amp; event-driven microservices
            </span>
          </div>
          <a
            href="#projects"
            style={{
              flexShrink: 0,
              fontSize: 12,
              color: "#0066cc",
              textDecoration: "none",
              letterSpacing: "-0.12px",
              transition: "opacity 200ms ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.7"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
          >
            See details →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
