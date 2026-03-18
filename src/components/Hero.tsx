"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Sparkles,
  Github,
  Linkedin,
  Mail,
  BookOpen,
  MapPin,
  Zap,
  ExternalLink,
  Globe,
} from "lucide-react";
import Image from "next/image";

const stats = [
  { value: "5+", label: "Years Exp." },
  { value: "3", label: "Banks Served" },
  { value: "20+", label: "Technologies" },
];

const quickTech = [
  "Java",
  "LangGraph",
  "Spring Boot",
  "Kafka",
  "Kubernetes",
  "gRPC",
  "RAG",
  "DDD",
];

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/cihanicelliler",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/cihanicelliler",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:icellilercihan@gmail.com",
    label: "Email",
  },
  {
    icon: BookOpen,
    href: "https://medium.com/@cihanicelliler",
    label: "Medium",
  },
];

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
        animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"
        animate={{ x: [0, -30, 20, 0], y: [0, 30, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-2/3 left-2/3 w-48 h-48 bg-accent/5 rounded-full blur-3xl"
        animate={{ x: [0, 20, -10, 0], y: [0, -20, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-28 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left — Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="shrink-0 flex flex-col items-center gap-3"
          >
            {/* Photo with animated glow ring */}
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl border border-cyan/25 animate-pulse" />
              <div className="absolute -inset-3 rounded-3xl bg-cyan/5 blur-md" />
              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-cyan/20 shadow-xl shadow-cyan/10">
                <Image
                  src="/images/profile.JPG"
                  alt="Cihan İçelliler"
                  fill
                  className="object-cover profile-mask"
                  priority
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
              </div>
            </div>

            {/* Status */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-muted-foreground">Open to opportunities</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground/50">
              <MapPin className="w-3 h-3" />
              <span>Istanbul, Turkey</span>
            </div>
          </motion.div>

          {/* Right — Content */}
          <div className="text-center lg:text-left flex-1 min-w-0">
            {/* Badge */}
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

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-2"
            >
              Cihan{" "}
              <span className="bg-linear-to-r from-cyan via-indigo-400 to-accent-foreground bg-clip-text text-transparent">
                İçelliler
              </span>
            </motion.h1>

            {/* Name meaning — Cihan = world in Persian/Turkish */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="inline-flex items-center gap-1.5 mb-4"
              title="Cihan means 'world' in Persian and Turkish"
            >
              <Globe className="w-3.5 h-3.5 text-cyan/50" />
              <span className="text-xs font-mono text-muted-foreground/40 tracking-widest">
                cihan&nbsp;=&nbsp;world
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-6"
            >
              Building the{" "}
              <span className="text-cyan font-semibold">Self-Running Bank</span>{" "}
              — where AI agents orchestrate every process, from compliance to
              customer experience, autonomously.
            </motion.p>

            {/* Quick tech chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6"
            >
              {quickTech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-mono glass text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start divide-x divide-border mb-8"
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`${i === 0 ? "pr-6" : "px-6"} text-center lg:text-left`}
                >
                  <p className="text-2xl font-extrabold text-cyan leading-none">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTAs + social icons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <a
                href="#projects"
                className="px-7 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent/80 transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-7 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-card transition-colors"
              >
                Get in Touch
              </a>

              {/* Social icons */}
              <div className="flex items-center gap-2">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-cyan hover:border-cyan/30 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Currently building strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-14 glass rounded-2xl px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-4"
        >
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            <Zap className="w-4 h-4 text-cyan" />
            <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">
              Currently building
            </span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-border" />
          <div className="flex-1 min-w-0">
            <span className="font-semibold text-sm text-foreground">Lecta AI</span>
            <span className="text-muted-foreground text-sm">
              {" "}— AI-native banking ops platform powered by LangGraph agent
              orchestration, RAG pipelines &amp; event-driven microservices
            </span>
          </div>
          <a
            href="#projects"
            className="shrink-0 inline-flex items-center gap-1 text-xs font-mono text-cyan hover:underline"
          >
            See details
            <ExternalLink className="w-3 h-3" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-12 flex justify-center"
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
