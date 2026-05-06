"use client";

import { motion } from "framer-motion";
import { Server, Brain, Cloud, Layers } from "lucide-react";

const techCategories = [
  {
    category: "Backend",
    icon: Server,
    items: ["Java", "Spring Boot", "PostgreSQL", "REST APIs", "DDD", "gRPC"],
  },
  {
    category: "AI / ML",
    icon: Brain,
    items: ["LangGraph", "Python", "FastAPI", "PyTorch", "RAG", "LLM Agents"],
  },
  {
    category: "Infrastructure",
    icon: Cloud,
    items: ["Kafka", "Redis", "MongoDB", "Docker", "Kubernetes", "Supabase"],
  },
  {
    category: "Frontend",
    icon: Layers,
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
];

const allTech = techCategories.flatMap((cat) =>
  cat.items.map((name) => ({ name, category: cat.category }))
);

const stats = [
  { value: "5+", label: "Years Backend" },
  { value: "3+", label: "AI Systems" },
  { value: "22+", label: "Technologies" },
  { value: "4", label: "Engineering Domains" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export default function TechMarquee() {
  return (
    <section
      id="tech"
      style={{ backgroundColor: "#f5f5f7", padding: "80px 0", overflow: "hidden" }}
    >
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 22px" }}>

        {/* Section header */}
        <motion.div {...fadeUp(0)} style={{ marginBottom: 48 }}>
          <p style={{ fontSize: 14, color: "#6e6e73", letterSpacing: "-0.224px", marginBottom: 8 }}>
            Tech Stack
          </p>
          <h2
            style={{
              fontSize: "clamp(34px, 4vw, 40px)",
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.4px",
              color: "#1d1d1f",
            }}
          >
            Tools &amp; Technologies
          </h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          {...fadeUp(0.08)}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              {...fadeUp(0.08 + i * 0.06)}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e0e0e0",
                borderRadius: 18,
                padding: "20px 24px",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: 28, fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.4px" }}>
                {stat.value}
              </p>
              <p style={{ fontSize: 12, color: "#6e6e73", marginTop: 4, letterSpacing: "-0.12px" }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Category cards */}
        <motion.div
          {...fadeUp(0.16)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
        >
          {techCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.category}
                {...fadeUp(0.16 + i * 0.07)}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e0e0e0",
                  borderRadius: 18,
                  padding: 24,
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      backgroundColor: "#f5f5f7",
                      border: "1px solid #e0e0e0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={16} color="#6e6e73" />
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.224px" }}>
                    {cat.category}
                  </span>
                  <span style={{ marginLeft: "auto", fontSize: 12, color: "#86868b" }}>
                    {cat.items.length}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <span
                      key={item}
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
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Marquee row 1 */}
      <div className="relative mb-3 fade-edges overflow-hidden">
        <div className="flex w-max gap-3" style={{ animation: "marquee 35s linear infinite" }}>
          {[...allTech, ...allTech].map((tech, i) => (
            <div
              key={`r1-${tech.name}-${i}`}
              className="flex items-center gap-2 whitespace-nowrap"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e0e0e0",
                borderRadius: 9999,
                padding: "8px 16px",
                flexShrink: 0,
              }}
            >
              <span style={{ fontSize: 14, fontWeight: 400, color: "#1d1d1f", letterSpacing: "-0.224px" }}>
                {tech.name}
              </span>
              <span style={{ fontSize: 11, color: "#86868b", letterSpacing: "-0.12px" }}>
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee row 2 — reversed */}
      <div className="relative fade-edges overflow-hidden">
        <div
          className="flex w-max gap-3"
          style={{ animation: "marquee 35s linear infinite", animationDirection: "reverse" }}
        >
          {[...allTech.slice().reverse(), ...allTech.slice().reverse()].map((tech, i) => (
            <div
              key={`r2-${tech.name}-${i}`}
              className="flex items-center gap-2 whitespace-nowrap"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e0e0e0",
                borderRadius: 9999,
                padding: "8px 16px",
                flexShrink: 0,
              }}
            >
              <span style={{ fontSize: 14, fontWeight: 400, color: "#1d1d1f", letterSpacing: "-0.224px" }}>
                {tech.name}
              </span>
              <span style={{ fontSize: 11, color: "#86868b", letterSpacing: "-0.12px" }}>
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
