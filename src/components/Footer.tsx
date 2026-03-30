"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, BookOpen } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/cihanicelliler",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/cihanicelliler",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:icellilercihan@gmail.com",
    icon: Mail,
  },
  {
    label: "Medium",
    href: "https://medium.com/@cihanicelliler",
    icon: BookOpen,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative">
      {/* Gradient divider */}
      <div className="section-divider mx-auto max-w-6xl" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Left */}
          <div className="text-center md:text-left space-y-1">
            <p className="font-heading font-semibold text-sm text-foreground/80">
              Cihan İçelliler
            </p>
            <p className="font-mono text-xs text-muted-foreground/60">
              &copy; {currentYear} — Built with Next.js &amp; crafted with care.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                aria-label={s.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.05 }}
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-xl border border-border/60 flex items-center justify-center text-muted-foreground/70 hover:text-cyan hover:border-cyan/30 hover:shadow-[0_0_16px_rgba(0,212,255,0.1)] transition-all duration-300"
              >
                <s.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-[10px] font-mono text-muted-foreground/30 tracking-widest uppercase">
            Designed &amp; engineered with ❤️ — Istanbul → World
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
