"use client";

import { motion } from "framer-motion";
import { Server, Brain, Cloud, Layers } from "lucide-react";

const techCategories = [
  {
    category: "Backend",
    icon: Server,
    color: "#6db33f",
    items: [
      { name: "Java", color: "#f89820" },
      { name: "Spring Boot", color: "#6db33f" },
      { name: "PostgreSQL", color: "#336791" },
      { name: "REST APIs", color: "#61affe" },
      { name: "DDD", color: "#94a3b8" },
      { name: "gRPC", color: "#4285f4" },
    ],
  },
  {
    category: "AI / ML",
    icon: Brain,
    color: "#8b5cf6",
    items: [
      { name: "LangGraph", color: "#8b5cf6" },
      { name: "Python", color: "#3776ab" },
      { name: "FastAPI", color: "#009688" },
      { name: "PyTorch", color: "#ee4c2c" },
      { name: "RAG", color: "#a78bfa" },
      { name: "LLM Agents", color: "#c084fc" },
    ],
  },
  {
    category: "Infrastructure",
    icon: Cloud,
    color: "#06b6d4",
    items: [
      { name: "Kafka", color: "#3a3a3a" },
      { name: "Redis", color: "#dc382d" },
      { name: "MongoDB", color: "#47a248" },
      { name: "Docker", color: "#2496ed" },
      { name: "Kubernetes", color: "#326ce5" },
      { name: "Supabase", color: "#3ecf8e" },
    ],
  },
  {
    category: "Frontend",
    icon: Layers,
    color: "#60a5fa",
    items: [
      { name: "React", color: "#61dafb" },
      { name: "TypeScript", color: "#3178c6" },
      { name: "Next.js", color: "#94a3b8" },
      { name: "Tailwind CSS", color: "#06b6d4" },
    ],
  },
];

const stats = [
  { value: "5+", label: "Years Backend" },
  { value: "3+", label: "AI Systems Built" },
  { value: "22+", label: "Technologies" },
  { value: "4", label: "Engineering Domains" },
];

const allTech = techCategories.flatMap((cat) => cat.items);

function TechBadge({ name, color }: { name: string; color: string }) {
  return (
    <div className="group/badge flex items-center gap-2 px-5 py-2.5 rounded-full glass transition-all duration-300 whitespace-nowrap select-none hover:border-cyan/30 hover:shadow-[0_0_16px_rgba(6,182,212,0.12)]">
      <span
        className="w-2.5 h-2.5 rounded-full shrink-0 transition-shadow duration-300 group-hover/badge:shadow-[0_0_8px]"
        style={{ backgroundColor: color }}
      />
      <span className="text-sm font-medium text-foreground">{name}</span>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-sm font-mono text-cyan mb-2">{"// tech stack"}</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Tools &amp; Technologies
          </h2>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
              className="rounded-2xl glass p-5 text-center"
            >
              <p className="text-2xl md:text-3xl font-extrabold text-cyan">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1 tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Category cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
        >
          {techCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
              className="rounded-2xl glass p-5"
            >
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${cat.color}18`, border: `1px solid ${cat.color}30` }}
                >
                  <cat.icon className="w-4 h-4" style={{ color: cat.color }} />
                </div>
                <span className="font-semibold text-sm">{cat.category}</span>
                <span className="ml-auto text-xs font-mono text-muted-foreground/60">
                  {cat.items.length}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full bg-muted/50 text-muted-foreground"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    {item.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Row 1 */}
      <div className="relative mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee w-max gap-4">
          {[...allTech, ...allTech].map((tech, i) => (
            <TechBadge key={`r1-${tech.name}-${i}`} name={tech.name} color={tech.color} />
          ))}
        </div>
      </div>

      {/* Row 2 — reversed */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />
        <div
          className="flex animate-marquee w-max gap-4"
          style={{ animationDirection: "reverse", animationDuration: "35s" }}
        >
          {[...allTech.slice().reverse(), ...allTech.slice().reverse()].map((tech, i) => (
            <TechBadge key={`r2-${tech.name}-${i}`} name={tech.name} color={tech.color} />
          ))}
        </div>
      </div>

    </section>
  );
}
