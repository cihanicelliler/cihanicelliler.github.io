"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12 },
  }),
};

const companies = [
  {
    name: "Yapi Kredi Technology",
    logo: "/images/companies/yapi-kredi.png",
  },
  {
    name: "Getir",
    logo: "/images/companies/getir.png",
  },
  {
    name: "Pdmechanics",
    logo: "/images/companies/pdmechanics.png",
    imageClass: "h-9",
  },
  {
    name: "Siemens",
    logo: "/images/companies/siemens.png",
  },
  {
    name: "Turk Telekom",
    logo: "/images/companies/turk-telekom.png",
  },
  {
    name: "Microsoft",
    logo: "/images/companies/microsoft.png",
  },
];

const companyLogos: Record<string, string> = {
  "Yapı Kredi Technology": "/images/companies/yapi-kredi.png",
  Getir: "/images/companies/getir.png",
  Pdmechanics: "/images/companies/pdmechanics.png",
  Siemens: "/images/companies/siemens.png",
  "Turk Telekom": "/images/companies/turk-telekom.png",
  Microsoft: "/images/companies/microsoft.png",
};

const companyLogoClassByName: Record<string, string> = {
  Pdmechanics: "h-9",
};

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-cyan mb-2">
            {"// professional experience"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Impact-Driven Career
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, i) => {
            const companyLogo = companyLogos[exp.org];

            return (
              <motion.div
                key={`${exp.org}-${exp.period}`}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group p-6 md:p-8 rounded-2xl glass glass-hover transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center">
                    <exp.icon className="w-5 h-5 text-cyan" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">
                    {exp.period}
                  </span>
                </div>

                {/* Title & Org */}
                <h3 className="text-lg font-bold mb-1">{exp.title}</h3>
                <p className="text-sm text-cyan font-medium mb-2">
                  {exp.org}
                </p>
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

                {/* Metric badge */}
                <div className="flex items-center gap-2 mb-4 px-3 py-2 rounded-lg bg-cyan/5 border border-cyan/10 w-fit">
                  <TrendingUp className="w-4 h-4 text-cyan" />
                  <span className="text-sm font-semibold text-cyan">
                    {exp.metric}
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
                      className="text-xs font-mono px-2 py-1 rounded-full bg-muted/50 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mt-12 rounded-2xl border border-border/60 bg-gradient-to-r from-slate-900/25 via-slate-800/20 to-slate-900/25 p-4 md:p-5 overflow-hidden"
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
