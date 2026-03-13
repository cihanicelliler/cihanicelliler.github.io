"use client";

import { motion } from "framer-motion";

const techStack = [
  { name: "Java", color: "#f89820" },
  { name: "Spring Boot", color: "#6db33f" },
  { name: "Python", color: "#3776ab" },
  { name: "FastAPI", color: "#009688" },
  { name: "LangGraph", color: "#8b5cf6" },
  { name: "React", color: "#61dafb" },
  { name: "Next.js", color: "#ffffff" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Supabase", color: "#3ecf8e" },
  { name: "Docker", color: "#2496ed" },
  { name: "Kubernetes", color: "#326ce5" },
  { name: "Kafka", color: "#231f20" },
  { name: "Redis", color: "#dc382d" },
  { name: "PyTorch", color: "#ee4c2c" },
  { name: "Tailwind CSS", color: "#38bdf8" },
];

function TechBadge({ name, color }: { name: string; color: string }) {
  return (
    <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card/50 backdrop-blur-sm whitespace-nowrap select-none">
      <span
        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
        style={{ backgroundColor: color }}
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
          <p className="text-sm font-mono text-accent-foreground mb-2">
            {"// tech stack"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Tools &amp; Technologies
          </h2>
        </motion.div>
      </div>

      {/* Row 1 */}
      <div className="relative mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee w-max gap-4">
          {[...techStack, ...techStack].map((tech, i) => (
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
          {[...techStack.slice().reverse(), ...techStack.slice().reverse()].map(
            (tech, i) => (
              <TechBadge key={`rev-${tech.name}-${i}`} name={tech.name} color={tech.color} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
