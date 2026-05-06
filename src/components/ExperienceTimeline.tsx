"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "AI Agent Engineer",
    org: "Yapı Kredi Technology",
    period: "2024 — Present",
    description:
      "Leading AI Agent orchestration using LangGraph for autonomous banking workflows. Architecting DDD-based microservices for next-gen digital banking infrastructure.",
    metric: "AI Agent Orchestration",
    metricDetail: "LangGraph + DDD Architecture",
    tags: ["LangGraph", "DDD", "Spring Boot", "Kafka", "AI Agents"],
    logo: "/images/companies/yapi-kredi.png",
  },
  {
    title: "Senior Backend Engineer",
    org: "Getir",
    period: "2023 — 2024",
    description:
      "Engineered high-scale distributed systems serving millions of users. Optimized event-driven pipelines that boosted user engagement by 30% through real-time personalization.",
    metric: "+30%",
    metricDetail: "User Engagement Increase",
    tags: ["Java", "Spring Boot", "Kafka", "Redis", "MongoDB"],
    logo: "/images/companies/getir.png",
  },
  {
    title: "AI & Software Engineer",
    org: "Pdmechanics",
    period: "2022 — 2023",
    description:
      "Built real-time AI-powered fault detection systems for industrial equipment. Integrated ML pipelines that delivered 25% efficiency improvement in predictive maintenance workflows.",
    metric: "+25%",
    metricDetail: "Efficiency Improvement",
    tags: ["Python", "FastAPI", "PyTorch", "Real-time AI", "ML Pipelines"],
    logo: "/images/companies/pdmechanics.png",
    logoClass: "h-10",
  },
  {
    title: "Software Engineer",
    org: "Siemens",
    period: "2021 — 2022",
    description:
      "Developed innovative solutions for factory operations automation. Created monitoring and optimization tools that increased production productivity by 15% across manufacturing lines.",
    metric: "+15%",
    metricDetail: "Productivity Increase",
    tags: ["Java", "Spring", "React", "Docker", "IoT"],
    logo: "/images/companies/siemens.png",
  },
];

const companies = [
  { name: "Yapi Kredi Technology", logo: "/images/companies/yapi-kredi.png" },
  { name: "Getir", logo: "/images/companies/getir.png" },
  { name: "Pdmechanics", logo: "/images/companies/pdmechanics.png", cls: "h-9" },
  { name: "Siemens", logo: "/images/companies/siemens.png" },
  { name: "Turk Telekom", logo: "/images/companies/turk-telekom.png" },
  { name: "Microsoft", logo: "/images/companies/microsoft.png" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      style={{ backgroundColor: "#272729", padding: "80px 0" }}
    >
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 22px" }}>

        {/* Section header */}
        <motion.div {...fadeUp(0)} style={{ marginBottom: 48 }}>
          <p style={{ fontSize: 14, color: "#2997ff", letterSpacing: "-0.224px", marginBottom: 8 }}>
            Professional Journey
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
            Impact-Driven Career
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.org}-${exp.period}`}
              {...fadeUp(0.08 + i * 0.1)}
              style={{
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 18,
                padding: "28px 32px",
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                {/* Left metadata */}
                <div className="shrink-0" style={{ minWidth: 160 }}>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", letterSpacing: "-0.12px", marginBottom: 8 }}>
                    {exp.period}
                  </p>
                  {exp.logo && (
                    <div
                      style={{
                        height: 44,
                        width: 160,
                        borderRadius: 10,
                        border: "1px solid rgba(255,255,255,0.12)",
                        backgroundColor: "rgba(255,255,255,0.06)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "6px 12px",
                      }}
                    >
                      <Image
                        src={exp.logo}
                        alt={`${exp.org} logo`}
                        width={136}
                        height={36}
                        className={`${exp.logoClass ?? "h-7"} w-auto object-contain`}
                      />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: "#ffffff", letterSpacing: "-0.374px", marginBottom: 4 }}>
                    {exp.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "#2997ff", letterSpacing: "-0.224px", marginBottom: 12 }}>
                    {exp.org}
                  </p>
                  <p style={{ fontSize: 17, color: "#cccccc", lineHeight: 1.47, marginBottom: 16 }}>
                    {exp.description}
                  </p>

                  {/* Metric badge */}
                  <div
                    className="inline-flex items-center gap-2 mb-4"
                    style={{
                      border: "1px solid rgba(41,151,255,0.25)",
                      borderRadius: 8,
                      padding: "6px 12px",
                      backgroundColor: "rgba(41,151,255,0.08)",
                    }}
                  >
                    <span style={{ fontSize: 15, fontWeight: 600, color: "#2997ff" }}>
                      {exp.metric}
                    </span>
                    <span style={{ fontSize: 12, color: "#cccccc", letterSpacing: "-0.12px" }}>
                      {exp.metricDetail}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: 11,
                          color: "#cccccc",
                          border: "1px solid rgba(255,255,255,0.12)",
                          borderRadius: 6,
                          padding: "3px 8px",
                          backgroundColor: "rgba(255,255,255,0.04)",
                          letterSpacing: "-0.12px",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Companies marquee */}
        <motion.div
          {...fadeUp(0.2)}
          style={{ marginTop: 48 }}
        >
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
            Companies &amp; Programs
          </p>
          <div className="relative overflow-hidden fade-edges">
            <div className="flex w-max gap-4" style={{ animation: "marquee 45s linear infinite" }}>
              {[...companies, ...companies, ...companies].map((company, idx) => (
                <div
                  key={`${company.name}-${idx}`}
                  style={{
                    height: 52,
                    width: 164,
                    borderRadius: 12,
                    border: "1px solid rgba(255,255,255,0.1)",
                    backgroundColor: "rgba(255,255,255,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8px 12px",
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={140}
                    height={36}
                    className={`${company.cls ?? "h-7"} w-auto object-contain`}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
