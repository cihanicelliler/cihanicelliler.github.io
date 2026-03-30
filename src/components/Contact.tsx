"use client";

import { type FormEvent, useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Terminal, Mail, MapPin, Sparkles } from "lucide-react";

/* ─── Sequential typing line ─── */
function TypingLine({
  prefix,
  text,
  delay,
}: {
  prefix: string;
  text: string;
  delay: number;
}) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(false);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const startTimeout = setTimeout(() => {
      setShowCursor(true);
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, 25);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [isInView, text, delay]);

  return (
    <div ref={ref} className="flex items-start gap-1.5">
      <span className="text-cyan shrink-0">{prefix}</span>
      <span className="text-muted-foreground">
        {displayed}
        {showCursor && !done && (
          <span className="inline-block w-[6px] h-[14px] bg-cyan animate-blink ml-0.5 align-text-bottom" />
        )}
      </span>
    </div>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:icellilercihan@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-cyan mb-2 flex items-center gap-2">
            <span className="inline-block w-8 h-px bg-gradient-to-r from-cyan to-transparent" />
            {"// let's connect"}
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            Available for contract work, part-time roles, and exciting AI
            projects. Let&apos;s build something extraordinary together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Terminal */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden glass"
          >
            {/* Terminal chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60 bg-surface/40">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[10px] font-mono text-muted-foreground/60 ml-2">
                ~/contact — zsh
              </span>
            </div>

            {/* Terminal body */}
            <div className="p-6 font-mono text-sm space-y-4">
              <TypingLine prefix="$" text=' cat info.json' delay={200} />

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="pl-4 space-y-3"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-cyan flex-shrink-0" />
                  <span className="text-foreground/80">
                    icellilercihan@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-violet flex-shrink-0" />
                  <span className="text-foreground/80">
                    Kocaeli, Turkey
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Terminal className="w-4 h-4 text-pink flex-shrink-0" />
                  <span className="text-foreground/80">
                    Open to remote &amp; hybrid
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
              >
                <TypingLine prefix="$" text=' echo "Available for:"' delay={1400} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2.0 }}
                className="pl-4 space-y-1.5 text-muted-foreground"
              >
                {[
                  "Contract / Freelance",
                  "Part-time Engineering Roles",
                  "AI Consulting & Architecture",
                  "Open Source Collaboration",
                ].map((item, i) => (
                  <motion.p
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2.2 + i * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-cyan">→</span> {item}
                  </motion.p>
                ))}
              </motion.div>

              <div className="flex items-center pt-2">
                <span className="text-cyan">$</span>
                <span className="ml-1 w-[6px] h-[14px] bg-cyan animate-blink" />
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl glass p-6 md:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-surface/40 border border-border/60 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-cyan/30 focus:border-cyan/50 transition-all text-sm input-glow"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-surface/40 border border-border/60 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-cyan/30 focus:border-cyan/50 transition-all text-sm input-glow"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-surface/40 border border-border/60 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-cyan/30 focus:border-cyan/50 transition-all text-sm resize-none input-glow"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-white transition-all duration-300 relative overflow-hidden group"
                style={{
                  background: submitted
                    ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
                    : "linear-gradient(135deg, var(--cyan) 0%, var(--violet) 100%)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                {submitted ? (
                  <>
                    <Sparkles className="w-4 h-4" />
                    Opening Mail Client...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
