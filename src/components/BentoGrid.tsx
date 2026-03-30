"use client";

import { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  Network,
  Radio,
  Workflow,
  ExternalLink,
  Github,
  ArrowUpRight,
  Cloud,
  Database,
} from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

/* ─── Spotlight card wrapper for cursor-tracking radial glow ─── */
function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <div ref={ref} onMouseMove={onMouseMove} className={className}>
      {children}
    </div>
  );
}

/* ─── Tech tag component ─── */
function TechTag({ label, color = "muted-foreground" }: { label: string; color?: string }) {
  return (
    <span
      className={`text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.03] border border-border/50 text-${color} hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 cursor-default`}
    >
      {label}
    </span>
  );
}

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
          <p className="text-sm font-mono text-cyan mb-2 flex items-center gap-2">
            <span className="inline-block w-8 h-px bg-gradient-to-r from-cyan to-transparent" />
            {"// projects & expertise"}
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
            What I{" "}
            <span className="gradient-text">Build</span>
          </h2>
          <p className="text-muted-foreground/60 mt-3 text-sm max-w-lg">
            Production-grade systems powering real businesses — from AI-native banking platforms to event-driven microservices at scale.
          </p>
        </motion.div>

        {/* Bento Grid — 3-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* ──── Lecta AI — Featured, holographic card (2 cols, 2 rows) ──── */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="md:col-span-2 lg:col-span-2 lg:row-span-2"
          >
            <SpotlightCard className="h-full">
              <div className="holo-card spotlight-card p-6 md:p-8 h-full group transition-all duration-500 hover:shadow-[0_0_60px_rgba(0,212,255,0.08)]">
                <div className="relative z-10 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan/20 to-cyan/5 border border-cyan/20 flex items-center justify-center">
                        <Bot className="w-5 h-5 text-cyan" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-heading font-bold">
                          Lecta AI
                        </h3>
                        <span className="text-[11px] font-mono text-cyan/70">AI-Powered Document Intelligence</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan/10 to-violet/10 text-cyan border border-cyan/20 flex items-center gap-1.5">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan" />
                      </span>
                      In Development
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Micro-SaaS platform leveraging LLM-powered agents for autonomous
                    document processing. Built with LangGraph orchestration, RAG
                    pipelines, and real-time streaming. Enables intelligent document
                    understanding at scale with multi-agent workflows.
                  </p>

                  {/* Architecture pipeline */}
                  <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-1">
                    {[
                      { label: "Ingest", color: "cyan" },
                      { label: "Agent", color: "violet" },
                      { label: "RAG", color: "pink" },
                      { label: "Stream", color: "cyan" },
                      { label: "API", color: "violet" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 shrink-0">
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.08 }}
                          className="text-[11px] font-mono px-3 py-1.5 rounded-lg border"
                          style={{
                            color: `var(--${item.color})`,
                            borderColor: `var(--${item.color})`,
                            borderWidth: '1px',
                            borderStyle: 'solid',
                            opacity: 0.7,
                            backgroundColor: `color-mix(in srgb, var(--${item.color}) 6%, transparent)`,
                          }}
                        >
                          {item.label}
                        </motion.span>
                        {i < 4 && (
                          <span className="text-muted-foreground/20 text-xs">→</span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {[
                      { label: "Architecture", value: "Multi-Agent", icon: "🏗️" },
                      { label: "Core", value: "RAG + Stream", icon: "⚡" },
                      { label: "Stack", value: "FastAPI + Supabase", icon: "🔧" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-xl border border-border/40 bg-white/[0.02] px-3 py-3 group/stat hover:border-cyan/20 transition-colors duration-300"
                      >
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground/50 flex items-center gap-1.5">
                          <span>{item.icon}</span>
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-foreground/90">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {["LangGraph", "RAG", "FastAPI", "React", "Supabase", "LLM Agents", "Python", "WebSocket"].map(
                      (tag) => (
                        <TechTag key={tag} label={tag} />
                      )
                    )}
                  </div>

                  {/* Footer — pushed to bottom */}
                  <div className="mt-auto pt-5 border-t border-border/30 flex flex-wrap items-center justify-between gap-3">
                    <p className="text-[11px] text-muted-foreground/40 font-mono">
                      Autonomous document intelligence • Production-ready
                    </p>
                    <div className="flex items-center gap-3">
                      <a
                        href="https://github.com/cihanicelliler"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors group/link"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Source
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </a>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan hover:text-cyan-foreground transition-colors group/link"
                      >
                        Discuss
                        <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* ──── Distributed Systems ──── */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <SpotlightCard className="h-full">
              <div className="spotlight-card group p-6 rounded-2xl glass glass-hover transition-all duration-300 h-full flex flex-col hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(124,58,237,0.08)]">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-violet/10 border border-violet/20 flex items-center justify-center">
                    <Network className="w-5 h-5 text-violet" />
                  </div>
                  <span className="text-[10px] font-mono text-violet/60 px-2 py-1 rounded-full border border-violet/15">
                    Enterprise
                  </span>
                </div>
                <h4 className="font-heading font-bold text-base mb-2">Distributed Systems</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  Microservices architecture, DDD patterns, high-throughput data
                  pipelines, and scalable backend design for millions of users.
                </p>
                <div className="pt-3 border-t border-border/30 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {["Java", "Spring Boot", "Kafka", "gRPC"].map((tag) => (
                      <TechTag key={tag} label={tag} />
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* ──── Event-Driven Architecture ──── */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <SpotlightCard className="h-full">
              <div className="spotlight-card group p-6 rounded-2xl glass glass-hover transition-all duration-300 h-full flex flex-col hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(16,185,129,0.08)]">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Radio className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400/60 px-2 py-1 rounded-full border border-emerald-500/15">
                    Real-time
                  </span>
                </div>
                <h4 className="font-heading font-bold text-base mb-2">Event-Driven Architecture</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  CQRS, event sourcing, real-time streaming pipelines, and
                  asynchronous communication between distributed services.
                </p>
                <div className="pt-3 border-t border-border/30 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {["Kafka", "Redis", "RabbitMQ", "CQRS"].map((tag) => (
                      <TechTag key={tag} label={tag} />
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* ──── Cloud & DevOps ──── */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <SpotlightCard className="h-full">
              <div className="spotlight-card group p-6 rounded-2xl glass glass-hover transition-all duration-300 h-full flex flex-col hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,212,255,0.08)]">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center">
                    <Cloud className="w-5 h-5 text-cyan" />
                  </div>
                  <span className="text-[10px] font-mono text-cyan/60 px-2 py-1 rounded-full border border-cyan/15">
                    Infrastructure
                  </span>
                </div>
                <h4 className="font-heading font-bold text-base mb-2">Cloud & DevOps</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  Cloud-native deployments, CI/CD pipelines, container orchestration,
                  and infrastructure automation for reliable production systems.
                </p>
                <div className="pt-3 border-t border-border/30 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {["Docker", "K8s", "AWS", "GitHub Actions"].map((tag) => (
                      <TechTag key={tag} label={tag} />
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* ──── Data Engineering ──── */}
          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <SpotlightCard className="h-full">
              <div className="spotlight-card group p-6 rounded-2xl glass glass-hover transition-all duration-300 h-full flex flex-col hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(244,114,182,0.08)]">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-pink/10 border border-pink/20 flex items-center justify-center">
                    <Database className="w-5 h-5 text-pink" />
                  </div>
                  <span className="text-[10px] font-mono text-pink/60 px-2 py-1 rounded-full border border-pink/15">
                    Data
                  </span>
                </div>
                <h4 className="font-heading font-bold text-base mb-2">Data Engineering</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  ETL pipelines, data modeling, vector databases, and analytics
                  infrastructure powering intelligent business decisions.
                </p>
                <div className="pt-3 border-t border-border/30 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {["PostgreSQL", "Supabase", "Pinecone", "dbt"].map((tag) => (
                      <TechTag key={tag} label={tag} />
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* ──── AI Workflows — full width bottom banner ──── */}
          <motion.div
            custom={5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="md:col-span-2 lg:col-span-3"
          >
            <SpotlightCard className="h-full">
              <div className="spotlight-card group p-6 md:p-8 rounded-2xl glass glass-hover transition-all duration-300 h-full hover:shadow-[0_0_50px_rgba(124,58,237,0.06)]">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet/15 to-pink/10 border border-violet/20 flex items-center justify-center">
                      <Workflow className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div className="md:hidden">
                      <h4 className="font-heading font-bold text-base">
                        AI Workflows & Agent Orchestration
                      </h4>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading font-bold text-base mb-2 hidden md:block">
                      AI Workflows & Agent Orchestration
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Multi-agent orchestration with LangGraph, RAG pipelines for
                      document intelligence, tool-use capabilities, and autonomous
                      reasoning chains. Building AI systems that operate independently
                      with human-level decision making.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {["LangGraph", "Python", "RAG", "LLM Agents", "Prompt Engineering", "FastAPI", "CrewAI", "Vector DB"].map(
                        (tag) => (
                          <TechTag key={tag} label={tag} color="accent-foreground" />
                        )
                      )}
                    </div>
                  </div>
                  <a
                    href="#contact"
                    className="shrink-0 inline-flex items-center gap-2 text-xs font-mono text-cyan hover:text-cyan-foreground transition-colors group/link px-4 py-2 rounded-lg glass border-cyan/15 hover:border-cyan/30"
                  >
                    Let&apos;s discuss
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
