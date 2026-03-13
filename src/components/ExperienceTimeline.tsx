"use client";

import { motion } from "framer-motion";
import { Building2, Truck, Cpu, Factory, TrendingUp } from "lucide-react";

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
    icon: Building2,
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
    icon: Truck,
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
    icon: Cpu,
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
    icon: Factory,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12 },
  }),
};

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-cyan mb-2">
            {"// professional experience"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Impact-Driven Career
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.org}-${exp.period}`}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group p-6 md:p-8 rounded-2xl glass glass-hover transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center">
                  <exp.icon className="w-5 h-5 text-cyan" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">
                  {exp.period}
                </span>
              </div>

              {/* Title & Org */}
              <h3 className="text-lg font-bold mb-1">{exp.title}</h3>
              <p className="text-sm text-cyan font-medium mb-3">
                {exp.org}
              </p>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {exp.description}
              </p>

              {/* Metric badge */}
              <div className="flex items-center gap-2 mb-4 px-3 py-2 rounded-lg bg-cyan/5 border border-cyan/10 w-fit">
                <TrendingUp className="w-4 h-4 text-cyan" />
                <span className="text-sm font-semibold text-cyan">
                  {exp.metric}
                </span>
                <span className="text-xs text-muted-foreground">
                  {exp.metricDetail}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2 py-1 rounded-full bg-muted/50 text-muted-foreground"
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
