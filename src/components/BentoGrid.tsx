"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Server,
  Cpu,
  Layers,
  Zap,
  Globe,
  ArrowUpRight,
} from "lucide-react";

const projects = [
  {
    title: "Lecta AI",
    description:
      "Micro-SaaS platform leveraging LLM-powered agents for autonomous document processing. Built with LangGraph orchestration, RAG pipelines, and real-time streaming.",
    tags: ["LangGraph", "RAG", "FastAPI", "React", "Supabase"],
    icon: Bot,
    featured: true,
    href: "#",
  },
  {
    title: "AI Agent Framework",
    description:
      "Custom autonomous agent framework with tool-use capabilities, memory management, and multi-step reasoning using LangGraph.",
    tags: ["Python", "LangGraph", "LLM", "Agents"],
    icon: Cpu,
    featured: false,
    href: "#",
  },
  {
    title: "Scalable Backend Platform",
    description:
      "Enterprise-grade microservices architecture with DDD patterns, event-driven communication, and high-throughput API design.",
    tags: ["Java", "Spring Boot", "Kafka", "PostgreSQL"],
    icon: Server,
    featured: false,
    href: "#",
  },
];

const skills = [
  {
    title: "AI Orchestration",
    description: "LangGraph, RAG, LLM Agents, Prompt Engineering",
    icon: Bot,
  },
  {
    title: "Backend Engineering",
    description: "Spring Boot, FastAPI, DDD, Microservices",
    icon: Layers,
  },
  {
    title: "Cloud & Infrastructure",
    description: "Docker, Kubernetes, Supabase, AWS",
    icon: Globe,
  },
  {
    title: "Performance & Scale",
    description: "Event-Driven Architecture, Caching, CI/CD",
    icon: Zap,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function BentoGrid() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-accent-foreground mb-2">
            {"// projects & expertise"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            What I Build
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Featured project - spans 2 cols */}
          {projects
            .filter((p) => p.featured)
            .map((project, i) => (
              <motion.a
                key={project.title}
                href={project.href}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="group md:col-span-2 p-6 md:p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-accent-foreground/30 transition-all duration-300 block"
              >
                <div className="flex items-start justify-between mb-4">
                  <project.icon className="w-8 h-8 text-accent-foreground" />
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}

          {/* Other projects */}
          {projects
            .filter((p) => !p.featured)
            .map((project, i) => (
              <motion.a
                key={project.title}
                href={project.href}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="group p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-accent-foreground/30 transition-all duration-300 block"
              >
                <div className="flex items-start justify-between mb-4">
                  <project.icon className="w-6 h-6 text-accent-foreground" />
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}

          {/* Skills cards */}
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              custom={i + 3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="p-5 rounded-2xl border border-border bg-card/30 hover:bg-card/60 transition-colors duration-300"
            >
              <skill.icon className="w-5 h-5 text-accent-foreground mb-3" />
              <h4 className="font-semibold text-sm mb-1">{skill.title}</h4>
              <p className="text-xs text-muted-foreground">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
