"use client";

import { type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Terminal, Mail, MapPin } from "lucide-react";

export default function Contact() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:icellilercihan@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
          <p className="text-sm font-mono text-cyan mb-2">
            {"// contact"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Get in Touch
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            Available for contract work, part-time roles, and exciting AI
            projects. Let&apos;s build something extraordinary together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Terminal-style contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl glass overflow-hidden"
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-muted-foreground ml-2">
                contact.sh
              </span>
            </div>

            {/* Terminal body */}
            <div className="p-6 font-mono text-sm space-y-4">
              <div>
                <span className="text-cyan">$</span>{" "}
                <span className="text-muted-foreground">cat</span> info.json
              </div>
              <div className="pl-4 space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-cyan flex-shrink-0" />
                  <span className="text-muted-foreground">
                    icellilercihan@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-cyan flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Kocaeli, Turkey
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Terminal className="w-4 h-4 text-cyan flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Open to remote &amp; hybrid
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <span className="text-cyan">$</span>{" "}
                <span className="text-muted-foreground">echo</span>{" "}
                &quot;Available for:&quot;
              </div>
              <div className="pl-4 space-y-1 text-muted-foreground">
                <p>→ Contract / Freelance</p>
                <p>→ Part-time Engineering Roles</p>
                <p>→ AI Consulting &amp; Architecture</p>
                <p>→ Open Source Collaboration</p>
              </div>

              <div className="flex items-center">
                <span className="text-cyan">$</span>
                <span className="ml-1 w-2 h-4 bg-cyan animate-blink" />
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
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
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
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan/30 focus:border-cyan/50 transition-all text-sm"
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
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan/30 focus:border-cyan/50 transition-all text-sm"
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
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan/30 focus:border-cyan/50 transition-all text-sm resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent/80 transition-colors"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
