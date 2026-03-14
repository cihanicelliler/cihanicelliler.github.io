"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Network,
  Radio,
  Workflow,
} from "lucide-react";

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
          <p className="text-sm font-mono text-cyan mb-2">
            {"// projects & expertise"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            What I Build
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Lecta AI — Featured, spans 2 cols + 2 rows */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ y: -4, scale: 1.01 }}
            className="group md:col-span-2 lg:row-span-2 p-6 md:p-8 rounded-2xl glass glass-hover transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center">
                <Bot className="w-6 h-6 text-cyan" />
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan/10 text-cyan border border-cyan/20">
                Micro-SaaS
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Lecta AI
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Micro-SaaS platform leveraging LLM-powered agents for autonomous
              document processing. Built with LangGraph orchestration, RAG
              pipelines, and real-time streaming. Enables intelligent document
              understanding at scale with multi-agent workflows.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {[
                { label: "Architecture", value: "Multi-Agent" },
                { label: "Core", value: "RAG + Streaming" },
                { label: "Deployment", value: "FastAPI + Supabase" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-border bg-muted/30 px-3 py-3"
                >
                  <p className="text-[11px] uppercase tracking-wide text-muted-foreground/80">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-foreground">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {["LangGraph", "RAG", "FastAPI", "React", "Supabase", "LLM Agents"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-muted/50 text-muted-foreground"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
            <div className="mt-6 pt-6 border-t border-border/70 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-muted-foreground">
                Focus: autonomous document intelligence with production-ready APIs.
              </p>
              <a
                href="#contact"
                className="text-xs font-medium text-cyan hover:text-cyan-foreground transition-colors"
              >
                Discuss implementation -&gt;
              </a>
            </div>
          </motion.div>

          {/* Expertise: Distributed Systems */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ y: -4, scale: 1.02 }}
            className="group p-6 rounded-2xl glass glass-hover transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4">
              <Network className="w-5 h-5 text-indigo-400" />
            </div>
            <h4 className="font-bold text-base mb-2">Distributed Systems</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Microservices architecture, DDD patterns, high-throughput data
              pipelines, and scalable backend design for millions of users.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {["Java", "Spring Boot", "Kafka", "gRPC"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2 py-1 rounded-full bg-muted/50 text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Expertise: Event-Driven Architecture */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ y: -4, scale: 1.02 }}
            className="group p-6 rounded-2xl glass glass-hover transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
              <Radio className="w-5 h-5 text-emerald-400" />
            </div>
            <h4 className="font-bold text-base mb-2">Event-Driven Architecture</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              CQRS, event sourcing, real-time streaming pipelines, and
              asynchronous communication between distributed services.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {["Kafka", "Redis", "RabbitMQ", "CQRS"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2 py-1 rounded-full bg-muted/50 text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Expertise: AI Workflows */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ y: -4, scale: 1.02 }}
            className="group md:col-span-2 lg:col-span-3 p-6 md:p-8 rounded-2xl glass glass-hover transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                <Workflow className="w-5 h-5 text-violet-400" />
              </div>
              <div>
                <h4 className="font-bold text-base mb-2">AI Workflows &amp; Agent Orchestration</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Multi-agent orchestration with LangGraph, RAG pipelines for
                  document intelligence, tool-use capabilities, and autonomous
                  reasoning chains. Building AI systems that operate independently
                  with human-level decision making.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["LangGraph", "Python", "RAG", "LLM Agents", "Prompt Engineering", "FastAPI"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2 py-1 rounded-full bg-muted/50 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
