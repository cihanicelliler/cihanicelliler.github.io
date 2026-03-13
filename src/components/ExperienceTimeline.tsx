"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work" as const,
    title: "AI Engineer & Software Architect",
    org: "Freelance / Lecta AI",
    period: "2024 — Present",
    description:
      "Designing and building LLM-powered autonomous agents using LangGraph and RAG. Developing Lecta AI as a Micro-SaaS product with real-time document intelligence.",
    tags: ["LangGraph", "RAG", "FastAPI", "React"],
  },
  {
    type: "work" as const,
    title: "Backend Engineer",
    org: "Enterprise Projects",
    period: "2022 — 2024",
    description:
      "Architected scalable microservices using Java/Spring Boot with Domain-Driven Design. Built event-driven systems handling high-throughput data pipelines.",
    tags: ["Java", "Spring Boot", "Kafka", "PostgreSQL"],
  },
  {
    type: "education" as const,
    title: "NLP & Machine Learning Research",
    org: "Academic Research",
    period: "2021 — 2023",
    description:
      "Conducted research in Natural Language Processing, focusing on transformer architectures, text classification, and sentiment analysis for Turkish language models.",
    tags: ["NLP", "Transformers", "Python", "PyTorch"],
  },
  {
    type: "work" as const,
    title: "Software Developer",
    org: "Various Projects",
    period: "2020 — 2022",
    description:
      "Built full-stack web applications, REST APIs, and contributed to open-source projects. Gained deep expertise in Java ecosystem and cloud-native development.",
    tags: ["Java", "Spring", "React", "Docker"],
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-accent-foreground mb-2">
            {"// experience & education"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Journey So Far
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.title}-${exp.period}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border border-border flex items-center justify-center">
                  {exp.type === "work" ? (
                    <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-accent-foreground" />
                  ) : (
                    <GraduationCap className="w-4 h-4 md:w-5 md:h-5 text-accent-foreground" />
                  )}
                </div>

                <div className="pt-1">
                  <span className="text-xs font-mono text-muted-foreground">
                    {exp.period}
                  </span>
                  <h3 className="text-lg font-bold mt-1">{exp.title}</h3>
                  <p className="text-sm text-accent-foreground font-medium">
                    {exp.org}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2 py-1 rounded-full bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
