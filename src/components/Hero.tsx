"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center hero-grid-bg overflow-hidden"
    >
      {/* Radial glow */}
      <div className="absolute inset-0 glow-accent pointer-events-none" />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan/10 rounded-full blur-3xl"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 30, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left — Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex-shrink-0"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden border-2 border-cyan/20 shadow-lg shadow-cyan/5">
              <Image
                src="/images/profile.JPG"
                alt="Cihan İçelliler"
                fill
                className="object-cover profile-mask"
                priority
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </div>
          </motion.div>

          {/* Right — Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <Sparkles className="w-4 h-4 text-cyan" />
              <span className="text-sm text-muted-foreground font-mono">
                Senior Software Engineer &amp; AI Agent Specialist
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4"
            >
              Cihan{" "}
              <span className="bg-gradient-to-r from-cyan via-indigo-400 to-accent-foreground bg-clip-text text-transparent">
                İçelliler
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-4"
            >
              Building the{" "}
              <span className="text-cyan font-semibold">Self-Running Bank</span>{" "}
              — where AI agents orchestrate every process, from compliance to
              customer experience, autonomously.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="text-sm text-muted-foreground/80 max-w-lg mb-8"
            >
              AI agent orchestration, distributed systems, and high-scale
              backends. From LangGraph to Spring Boot — engineering the future of
              autonomous intelligence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
            >
              <a
                href="#projects"
                className="px-8 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent/80 transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-card transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="#projects"
            className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-xs font-mono">scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
