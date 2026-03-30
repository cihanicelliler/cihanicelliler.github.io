"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

/* ─── Badge with tooltip-style hover ─── */
function TechBadge({
  name,
  color,
  category,
}: {
  name: string;
  color: string;
  category?: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group/badge relative flex items-center gap-2.5 px-5 py-2.5 rounded-full glass whitespace-nowrap select-none transition-all duration-300 hover:border-cyan/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="w-2.5 h-2.5 rounded-full shrink-0 transition-all duration-300"
        style={{
          backgroundColor: color,
          boxShadow: hovered ? `0 0 10px ${color}80` : "none",
        }}
      />
      <span className="text-sm font-medium text-foreground">{name}</span>

      {/* Tooltip */}
      <AnimatePresence>
        {hovered && category && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-surface border border-border text-[10px] font-mono text-muted-foreground whitespace-nowrap pointer-events-none z-20"
          >
            {category}
          </motion.div>
        )}
      </AnimatePresence>
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
          <p className="text-sm font-mono text-cyan mb-2 flex items-center gap-2">
            <span className="inline-block w-8 h-px bg-gradient-to-r from-cyan to-transparent" />
            {"// tech stack"}
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
            Tools &amp; <span className="gradient-text">Technologies</span>
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
              className="rounded-2xl glass p-5 text-center group hover:border-cyan/20 transition-all duration-300"
            >
              <p className="text-2xl md:text-3xl font-heading font-extrabold text-cyan group-hover:scale-110 transition-transform duration-300 inline-block">
                {stat.value}
              </p>
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
              className="rounded-2xl glass glass-hover p-5 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${cat.color}18`, border: `1px solid ${cat.color}30` }}
                >
                  <cat.icon className="w-4 h-4" style={{ color: cat.color }} />
                </div>
                <span className="font-heading font-semibold text-sm">{cat.category}</span>
                <span className="ml-auto text-xs font-mono text-muted-foreground/60">
                  {cat.items.length}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.03] border border-border/50 text-muted-foreground hover:text-foreground hover:border-white/20 transition-all duration-300"
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
          {[...allTech, ...allTech].map((tech, i) => {
            const category = techCategories.find((c) => c.items.some((t) => t.name === tech.name))?.category;
            return (
              <TechBadge key={`r1-${tech.name}-${i}`} name={tech.name} color={tech.color} category={category} />
            );
          })}
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
          {[...allTech.slice().reverse(), ...allTech.slice().reverse()].map((tech, i) => {
            const category = techCategories.find((c) => c.items.some((t) => t.name === tech.name))?.category;
            return (
              <TechBadge key={`r2-${tech.name}-${i}`} name={tech.name} color={tech.color} category={category} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
