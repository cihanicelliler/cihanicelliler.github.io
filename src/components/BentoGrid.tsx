"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const utilityProjects = [
  {
    title: "Distributed Systems",
    badge: "Enterprise",
    description:
      "Microservices architecture, DDD patterns, high-throughput data pipelines, and scalable backend design for millions of users.",
    tags: ["Java", "Spring Boot", "Kafka", "gRPC"],
  },
  {
    title: "Event-Driven Architecture",
    badge: "Real-time",
    description:
      "CQRS, event sourcing, real-time streaming pipelines, and asynchronous communication between distributed services.",
    tags: ["Kafka", "Redis", "RabbitMQ", "CQRS"],
  },
  {
    title: "Cloud & DevOps",
    badge: "Infrastructure",
    description:
      "Cloud-native deployments, CI/CD pipelines, container orchestration, and infrastructure automation for production systems.",
    tags: ["Docker", "K8s", "AWS", "GitHub Actions"],
  },
  {
    title: "AI Workflows & Agents",
    badge: "AI/ML",
    description:
      "Multi-agent orchestration with LangGraph, RAG pipelines for document intelligence, and autonomous reasoning chains.",
    tags: ["LangGraph", "RAG", "FastAPI", "LLM Agents"],
  },
];

export default function BentoGrid() {
  return (
    <section
      id="projects"
      style={{ backgroundColor: "#272729", padding: "80px 0" }}
    >
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 22px" }}>

        {/* Section header */}
        <motion.div {...fadeUp(0)} style={{ marginBottom: 48 }}>
          <p style={{ fontSize: 14, color: "#2997ff", letterSpacing: "-0.224px", marginBottom: 8 }}>
            Projects &amp; Expertise
          </p>
          <h2
            style={{
              fontSize: "clamp(34px, 4vw, 40px)",
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.4px",
              color: "#ffffff",
            }}
          >
            What I Build
          </h2>
          <p style={{ fontSize: 17, color: "#cccccc", marginTop: 8, maxWidth: 480, lineHeight: 1.47 }}>
            Production-grade systems powering real businesses — from AI-native banking platforms to event-driven microservices at scale.
          </p>
        </motion.div>

        {/* Featured card — Lecta AI */}
        <motion.div
          {...fadeUp(0.08)}
          style={{
            backgroundColor: "#2a2a2c",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 18,
            padding: "32px",
            marginBottom: 20,
          }}
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div style={{ flex: 1 }}>
              <div className="flex items-center gap-3 mb-4">
                <h3 style={{ fontSize: 28, fontWeight: 600, color: "#ffffff", letterSpacing: "-0.374px" }}>
                  Lecta AI
                </h3>
                <span
                  style={{
                    fontSize: 11,
                    color: "#2997ff",
                    border: "1px solid #2997ff",
                    borderRadius: 9999,
                    padding: "3px 10px",
                    letterSpacing: "-0.12px",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: "#2997ff", flexShrink: 0 }}
                  />
                  In Development
                </span>
              </div>

              <p style={{ fontSize: 12, color: "#2997ff", marginBottom: 12, letterSpacing: "-0.12px" }}>
                AI-Powered Document Intelligence
              </p>

              <p style={{ fontSize: 17, color: "#cccccc", lineHeight: 1.47, maxWidth: 560, marginBottom: 24 }}>
                Micro-SaaS platform leveraging LLM-powered agents for autonomous document processing. Built with LangGraph orchestration, RAG pipelines, and real-time streaming. Enables intelligent document understanding at scale with multi-agent workflows.
              </p>

              {/* Pipeline */}
              <div className="flex items-center flex-wrap gap-2 mb-6">
                {["Ingest", "Agent", "RAG", "Stream", "API"].map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <span
                      style={{
                        fontSize: 11,
                        color: "#2997ff",
                        border: "1px solid rgba(41,151,255,0.4)",
                        borderRadius: 6,
                        padding: "4px 10px",
                        backgroundColor: "rgba(41,151,255,0.08)",
                        letterSpacing: "-0.12px",
                      }}
                    >
                      {step}
                    </span>
                    {i < 4 && (
                      <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 12 }}>→</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {["LangGraph", "RAG", "FastAPI", "React", "Supabase", "LLM Agents", "Python", "WebSocket"].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 11,
                      color: "#cccccc",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: 6,
                      padding: "4px 10px",
                      backgroundColor: "rgba(255,255,255,0.04)",
                      letterSpacing: "-0.12px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex md:flex-col items-start gap-3 shrink-0">
              <a
                href="https://github.com/cihanicelliler"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5"
                style={{ fontSize: 12, color: "#cccccc", textDecoration: "none", transition: "color 200ms ease", letterSpacing: "-0.12px" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#cccccc"; }}
              >
                <Github size={14} />
                Source
              </a>
              <a
                href="#contact"
                className="flex items-center gap-1.5"
                style={{ fontSize: 12, color: "#2997ff", textDecoration: "none", transition: "opacity 200ms ease", letterSpacing: "-0.12px" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.7"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
              >
                <ExternalLink size={14} />
                Discuss
              </a>
            </div>
          </div>
        </motion.div>

        {/* Utility cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {utilityProjects.map((project, i) => (
            <motion.div
              key={project.title}
              {...fadeUp(0.08 + (i + 1) * 0.08)}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e0e0e0",
                borderRadius: 18,
                padding: 24,
              }}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h4 style={{ fontSize: 17, fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.374px" }}>
                  {project.title}
                </h4>
                <span
                  style={{
                    fontSize: 11,
                    color: "#6e6e73",
                    border: "1px solid #e0e0e0",
                    borderRadius: 9999,
                    padding: "2px 8px",
                    letterSpacing: "-0.12px",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  {project.badge}
                </span>
              </div>
              <p style={{ fontSize: 15, color: "#6e6e73", lineHeight: 1.47, marginBottom: 16 }}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 11,
                      color: "#6e6e73",
                      border: "1px solid #e0e0e0",
                      borderRadius: 6,
                      padding: "3px 8px",
                      backgroundColor: "#f5f5f7",
                      letterSpacing: "-0.12px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
