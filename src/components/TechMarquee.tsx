"use client";

import { motion } from "framer-motion";

const techCategories = [
  {
    category: "Backend",
    color: "#6db33f",
    items: [
      { name: "Java", color: "#f89820" },
      { name: "Spring Boot", color: "#6db33f" },
      { name: "PostgreSQL", color: "#336791" },
      { name: "REST APIs", color: "#61affe" },
      { name: "DDD", color: "#e5e7eb" },
    ],
  },
  {
    category: "AI",
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
    color: "#06b6d4",
    items: [
      { name: "Kafka", color: "#231f20" },
      { name: "Redis", color: "#dc382d" },
      { name: "MongoDB", color: "#47a248" },
      { name: "Docker", color: "#2496ed" },
      { name: "Kubernetes", color: "#326ce5" },
      { name: "Supabase", color: "#3ecf8e" },
    ],
  },
];

const allTech = techCategories.flatMap((cat) => cat.items);

function TechBadge({ name, color }: { name: string; color: string }) {
  return (
    <div className="group/badge flex items-center gap-2 px-5 py-2.5 rounded-full glass transition-all duration-300 whitespace-nowrap select-none hover:border-cyan/30 hover:shadow-[0_0_16px_rgba(6,182,212,0.12)]">
      <span
        className="w-2.5 h-2.5 rounded-full flex-shrink-0 transition-shadow duration-300 group-hover/badge:shadow-[0_0_8px]"
        style={{ backgroundColor: color, boxShadow: undefined }}
      />
      <span className="text-sm font-medium text-foreground">{name}</span>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-mono text-cyan mb-2">
            {"// tech stack"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Tools &amp; Technologies
          </h2>
        </motion.div>
      </div>

      {/* Category tags */}
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-3"
        >
          {techCategories.map((cat) => (
            <div
              key={cat.category}
              className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm"
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: cat.color }}
              />
              <span className="font-medium text-muted-foreground">
                {cat.category}
              </span>
              <span className="text-xs text-muted-foreground/60">
                {cat.items.map((t) => t.name).join(", ")}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 1 */}
      <div className="relative mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee w-max gap-4">
          {[...allTech, ...allTech].map((tech, i) => (
            <TechBadge key={`${tech.name}-${i}`} name={tech.name} color={tech.color} />
          ))}
        </div>
      </div>

      {/* Row 2 - reversed */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div
          className="flex animate-marquee w-max gap-4"
          style={{ animationDirection: "reverse", animationDuration: "35s" }}
        >
          {[...allTech.slice().reverse(), ...allTech.slice().reverse()].map(
            (tech, i) => (
              <TechBadge key={`rev-${tech.name}-${i}`} name={tech.name} color={tech.color} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
