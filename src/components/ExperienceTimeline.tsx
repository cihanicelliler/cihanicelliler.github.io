"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Building2, Truck, Cpu, Factory, TrendingUp } from "lucide-react";

const experiences = [
  {
    title: "AI Agent Engineer",
    org: "Yapı Kredi Technology",
    period: "2024 — Present",
    description:
      "Leading AI Agent orchestration using LangGraph for autonomous banking workflows. Architecting DDD-based microservices for next-gen digital banking infrastructure.",
    metric: "AI Agent Orchestration",
    metricDetail: "LangGraph + DDD Architecture",
    tags: ["LangGraph", "DDD", "Spring Boot", "Kafka", "AI Agents"],
    icon: Building2,
    color: "cyan",
  },
  {
    title: "Senior Backend Engineer",
    org: "Getir",
    period: "2023 — 2024",
    description:
      "Engineered high-scale distributed systems serving millions of users. Optimized event-driven pipelines that boosted user engagement by 30% through real-time personalization.",
    metric: "+30%",
    metricDetail: "User Engagement Increase",
    tags: ["Java", "Spring Boot", "Kafka", "Redis", "MongoDB"],
    icon: Truck,
    color: "violet",
  },
  {
    title: "AI & Software Engineer",
    org: "Pdmechanics",
    period: "2022 — 2023",
    description:
      "Built real-time AI-powered fault detection systems for industrial equipment. Integrated ML pipelines that delivered 25% efficiency improvement in predictive maintenance workflows.",
    metric: "+25%",
    metricDetail: "Efficiency Improvement",
    tags: ["Python", "FastAPI", "PyTorch", "Real-time AI", "ML Pipelines"],
    icon: Cpu,
    color: "pink",
  },
  {
    title: "Software Engineer",
    org: "Siemens",
    period: "2021 — 2022",
    description:
      "Developed innovative solutions for factory operations automation. Created monitoring and optimization tools that increased production productivity by 15% across manufacturing lines.",
    metric: "+15%",
    metricDetail: "Productivity Increase",
    tags: ["Java", "Spring", "React", "Docker", "IoT"],
    icon: Factory,
    color: "cyan",
  },
];

const companies = [
  { name: "Yapi Kredi Technology", logo: "/images/companies/yapi-kredi.png" },
  { name: "Getir", logo: "/images/companies/getir.png" },
  { name: "Pdmechanics", logo: "/images/companies/pdmechanics.png", imageClass: "h-9" },
  { name: "Siemens", logo: "/images/companies/siemens.png" },
  { name: "Turk Telekom", logo: "/images/companies/turk-telekom.png" },
  { name: "Microsoft", logo: "/images/companies/microsoft.png" },
];

const companyLogos: Record<string, string> = {
  "Yapı Kredi Technology": "/images/companies/yapi-kredi.png",
  Getir: "/images/companies/getir.png",
  Pdmechanics: "/images/companies/pdmechanics.png",
  Siemens: "/images/companies/siemens.png",
};

const companyLogoClassByName: Record<string, string> = {
  Pdmechanics: "h-9",
};

/* ─── Animated counter that counts up when in view ─── */
function AnimatedMetric({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const numericMatch = value.match(/(\d+)/);
    if (!numericMatch) {
      setDisplay(value);
      return;
    }
    const target = parseInt(numericMatch[1]);
    const prefix = value.slice(0, value.indexOf(numericMatch[1]));
    const suffix = value.slice(value.indexOf(numericMatch[1]) + numericMatch[1].length);
    let current = 0;
    const step = Math.max(1, Math.floor(target / 30));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setDisplay(`${prefix}${current}${suffix}`);
    }, 30);
    return () => clearInterval(interval);
  }, [isInView, value]);

  return <span ref={ref}>{display}</span>;
}

const colorMap: Record<string, string> = {
  cyan: "var(--cyan)",
  violet: "var(--violet)",
  pink: "var(--pink)",
};

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-cyan mb-2 flex items-center gap-2">
            <span className="inline-block w-8 h-px bg-gradient-to-r from-cyan to-transparent" />
            {"// professional journey"}
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
            Impact-Driven <span className="gradient-text">Career</span>
          </h2>
        </motion.div>

        {/* ─── Timeline ─── */}
        <div className="relative">
          {/* Vertical connector line — desktop */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/40 via-violet/30 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const companyLogo = companyLogos[exp.org];
              const accentColor = colorMap[exp.color];

              return (
                <motion.div
                  key={`${exp.org}-${exp.period}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: [0.16, 1, 0.3, 1] as const,
                  }}
                  className="relative md:pl-20"
                >
                  {/* Timeline dot — desktop only */}
                  <div className="hidden md:flex absolute left-[22px] top-8 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.2, type: "spring" }}
                      className="relative"
                    >
                      <div
                        className="w-[13px] h-[13px] rounded-full border-2"
                        style={{
                          borderColor: accentColor,
                          backgroundColor: "var(--background)",
                        }}
                      />
                      <div
                        className="absolute inset-0 rounded-full animate-ping"
                        style={{
                          backgroundColor: accentColor,
                          opacity: 0.2,
                          animationDuration: "3s",
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Card */}
                  <div className="group p-6 md:p-8 rounded-2xl glass glass-hover transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,212,255,0.06)]">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      {/* Icon + Period */}
                      <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-2">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                          style={{
                            backgroundColor: `color-mix(in srgb, ${accentColor} 10%, transparent)`,
                            border: `1px solid color-mix(in srgb, ${accentColor} 20%, transparent)`,
                          }}
                        >
                          <exp.icon className="w-5 h-5" style={{ color: accentColor }} />
                        </div>
                        <span className="text-xs font-mono text-muted-foreground/70 whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        {/* Title & Org */}
                        <h3 className="text-lg font-heading font-bold mb-1 group-hover:text-foreground transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-sm font-medium mb-2" style={{ color: accentColor }}>
                          {exp.org}
                        </p>

                        {/* Company logo */}
                        {companyLogo && (
                          <div className="mb-4 h-12 w-[176px] rounded-lg border border-slate-200/55 bg-slate-100/32 px-2 py-1.5 flex items-center justify-center backdrop-blur-sm">
                            <Image
                              src={companyLogo}
                              alt={`${exp.org} logo`}
                              width={156}
                              height={40}
                              className={`${companyLogoClassByName[exp.org] ?? "h-8"} w-auto object-contain`}
                            />
                          </div>
                        )}

                        {/* Description */}
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {exp.description}
                        </p>

                        {/* Metric badge with animated counter */}
                        <div className="flex items-center gap-2 mb-4 px-3 py-2 rounded-xl w-fit" style={{
                          backgroundColor: `color-mix(in srgb, ${accentColor} 6%, transparent)`,
                          border: `1px solid color-mix(in srgb, ${accentColor} 15%, transparent)`,
                        }}>
                          <TrendingUp className="w-4 h-4" style={{ color: accentColor }} />
                          <span className="text-sm font-bold" style={{ color: accentColor }}>
                            <AnimatedMetric value={exp.metric} />
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {exp.metricDetail}
                          </span>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.03] border border-border/50 text-muted-foreground hover:text-foreground hover:border-white/20 transition-all duration-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Companies & Programs marquee bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mt-16 rounded-2xl border border-border/60 bg-gradient-to-r from-slate-900/25 via-slate-800/20 to-slate-900/25 p-4 md:p-5 overflow-hidden"
        >
          <div className="absolute -top-24 left-1/3 h-48 w-48 rounded-full bg-cyan/10 blur-3xl pointer-events-none" />
          <div className="relative z-20 mb-3 px-1">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground/80">
              Companies & Programs
            </p>
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
          <div className="relative z-0 flex animate-marquee-slow marquee-hover-pause w-max gap-3">
            {[...companies, ...companies, ...companies].map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="h-14 w-[172px] rounded-xl border border-slate-200/50 bg-slate-100/24 px-3 py-2 flex items-center justify-center backdrop-blur-md shadow-[0_4px_14px_rgba(15,23,42,0.25)]"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={146}
                  height={48}
                  className={`${company.imageClass ?? "h-8"} w-auto object-contain`}
                />
              </div>
            ))}
          </div>
          <div className="relative z-0 mt-3 flex animate-marquee-slow-reverse marquee-hover-pause w-max gap-3">
            {[...companies, ...companies, ...companies].reverse().map((company, index) => (
              <div
                key={`${company.name}-reverse-${index}`}
                className="h-14 w-[172px] rounded-xl border border-slate-200/45 bg-slate-100/18 px-3 py-2 flex items-center justify-center backdrop-blur-md shadow-[0_4px_14px_rgba(15,23,42,0.2)]"
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} reverse`}
                  width={146}
                  height={48}
                  className={`${company.imageClass ?? "h-8"} w-auto object-contain`}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
