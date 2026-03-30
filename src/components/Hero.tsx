"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
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
import ParticleField from "./ParticleField";

const stats = [
  { value: 5, suffix: "+", label: "Years Exp." },
  { value: 3, suffix: "", label: "Banks Served" },
  { value: 20, suffix: "+", label: "Technologies" },
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
  { icon: Github, href: "https://github.com/cihanicelliler", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/cihanicelliler", label: "LinkedIn" },
  { icon: Mail, href: "mailto:icellilercihan@gmail.com", label: "Email" },
  { icon: BookOpen, href: "https://medium.com/@cihanicelliler", label: "Medium" },
];

/* ─── Animated counting number ─── */
function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1200;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = target / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ─── Typing text effect ─── */
function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const timer = setInterval(() => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 40);
    return () => clearInterval(timer);
  }, [started, text]);

  return (
    <>
      {displayed}
      {displayed.length < text.length && (
        <span className="inline-block w-0.5 h-[1em] bg-cyan animate-blink align-text-bottom ml-0.5" />
      )}
    </>
  );
}

/* ─── 3D Tilt Card ─── */
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 200, damping: 25 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 25 });

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(-y * 12);
    rotateY.set(x * 12);
  };

  const onMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX: springX, rotateY: springY, perspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center hero-grid-bg overflow-hidden"
    >
      {/* Particle constellation */}
      <ParticleField />

      {/* Radial glow */}
      <div className="absolute inset-0 glow-accent pointer-events-none" />

      {/* Floating aurora orbs */}
      <motion.div
        className="absolute top-1/4 left-1/6 w-80 h-80 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)" }}
        animate={{ x: [0, 40, -30, 0], y: [0, -50, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/6 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)" }}
        animate={{ x: [0, -40, 30, 0], y: [0, 40, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-32 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Left — Profile Photo with 3D tilt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="shrink-0 flex flex-col items-center gap-4"
          >
            <TiltCard>
              <div className="relative">
                {/* Animated gradient ring */}
                <div
                  className="absolute -inset-1.5 rounded-2xl"
                  style={{
                    background: "conic-gradient(from 0deg, #00d4ff, #7c3aed, #f472b6, #00d4ff)",
                    animation: "border-rotate 4s linear infinite",
                    opacity: 0.4,
                    filter: "blur(4px)",
                  }}
                />
                {/* Pulse ring */}
                <div
                  className="absolute -inset-4 rounded-3xl border border-cyan/15"
                  style={{ animation: "pulse-ring 3s ease-in-out infinite" }}
                />
                {/* Photo container */}
                <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-cyan/10">
                  <Image
                    src="/images/profile.JPG"
                    alt="Cihan İçelliler"
                    fill
                    className="object-cover profile-mask"
                    priority
                  />
                  {/* Inner glow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
                </div>
              </div>
            </TiltCard>

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-mono"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-muted-foreground">Open to opportunities</span>
            </motion.div>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground/40">
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

            {/* Name — animated gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl font-heading font-extrabold tracking-tight leading-[1.1] mb-2"
            >
              Cihan{" "}
              <span className="gradient-text">
                İçelliler
              </span>
            </motion.h1>

            {/* Name meaning */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-1.5 mb-5"
              title="Cihan means 'world' in Persian and Turkish"
            >
              <Globe className="w-3.5 h-3.5 text-cyan/40" />
              <span className="text-xs font-mono text-muted-foreground/30 tracking-widest">
                cihan&nbsp;=&nbsp;world
              </span>
            </motion.div>

            {/* Description with typing effect */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-6"
            >
              Building the{" "}
              <span className="text-cyan font-semibold">
                <TypingText text="Self-Running Bank" delay={1200} />
              </span>{" "}
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
              {quickTech.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.04 }}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono glass text-muted-foreground hover:text-cyan hover:border-cyan/30 transition-all duration-300 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Stats row — animated counters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start divide-x divide-border/50 mb-8"
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`${i === 0 ? "pr-6" : "px-6"} text-center lg:text-left`}
                >
                  <p className="text-2xl font-heading font-extrabold gradient-text leading-none">
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTAs + social */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              {/* Primary CTA */}
              <a
                href="#projects"
                className="relative px-7 py-3 rounded-xl font-medium overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan to-violet opacity-90 group-hover:opacity-100 transition-opacity" />
                <span className="absolute inset-0 bg-gradient-to-r from-cyan to-violet opacity-0 group-hover:opacity-50 blur-xl transition-opacity" />
                <span className="relative z-10 text-white flex items-center gap-2">
                  View Projects
                  <ArrowDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-0.5 transition-transform" />
                </span>
              </a>
              {/* Secondary CTA */}
              <a
                href="#contact"
                className="group relative px-7 py-3 rounded-xl font-medium glass border-cyan/20 hover:border-cyan/50 text-foreground hover:text-cyan transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-cyan/[0.04] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute inset-0 bg-gradient-to-r from-cyan/0 via-cyan/5 to-cyan/0 opacity-0 group-hover:opacity-100 blur-lg transition-opacity" />
                <span className="relative z-10 flex items-center gap-2">
                  Get in Touch
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </span>
              </a>

              {/* Social icons */}
              <div className="flex items-center gap-2 ml-1">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group relative w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-cyan transition-all duration-300"
                  >
                    <Icon className="w-4 h-4 relative z-10" />
                    <div className="absolute inset-0 rounded-xl bg-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Currently building — spotlight card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 holo-card p-6 flex flex-col sm:flex-row sm:items-center gap-4"
        >
          <div className="flex items-center gap-2 shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan" />
            </span>
            <Zap className="w-4 h-4 text-cyan" />
            <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">
              Currently building
            </span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-border/50" />
          <div className="flex-1 min-w-0">
            <span className="font-heading font-semibold text-sm text-foreground">Lecta AI</span>
            <span className="text-muted-foreground text-sm">
              {" "}— AI-native banking ops platform powered by LangGraph agent
              orchestration, RAG pipelines &amp; event-driven microservices
            </span>
          </div>
          <a
            href="#projects"
            className="shrink-0 inline-flex items-center gap-1 text-xs font-mono text-cyan hover:text-cyan-foreground transition-colors group"
          >
            See details
            <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-14 flex justify-center"
        >
          <a
            href="#projects"
            className="inline-flex flex-col items-center gap-2 text-muted-foreground/40 hover:text-muted-foreground transition-colors"
          >
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase">scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
