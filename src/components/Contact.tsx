"use client";

import { type FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "icellilercihan@gmail.com", href: "mailto:icellilercihan@gmail.com" },
  { icon: MapPin, label: "Location", value: "Kocaeli, Turkey", href: null },
];

const availability = [
  "Contract / Freelance",
  "Part-time Engineering Roles",
  "AI Consulting & Architecture",
  "Open Source Collaboration",
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 20px",
  borderRadius: 9999,
  border: "1px solid #d2d2d7",
  fontSize: 17,
  color: "#1d1d1f",
  backgroundColor: "#ffffff",
  outline: "none",
  transition: "border-color 200ms ease",
  fontFamily: "inherit",
  letterSpacing: "-0.374px",
};

const inputFocusStyle: React.CSSProperties = {
  borderColor: "#0066cc",
};

function PillInput({
  id,
  name,
  type = "text",
  placeholder,
  required,
}: {
  id: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{ ...inputStyle, ...(focused ? inputFocusStyle : {}) }}
    />
  );
}

function PillTextarea({
  id,
  name,
  placeholder,
  rows = 5,
  required,
}: {
  id: string;
  name: string;
  placeholder: string;
  rows?: number;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      id={id}
      name={name}
      placeholder={placeholder}
      rows={rows}
      required={required}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        ...inputStyle,
        borderRadius: 18,
        resize: "none",
        ...(focused ? inputFocusStyle : {}),
      }}
    />
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
    <section
      id="contact"
      style={{ backgroundColor: "#ffffff", padding: "80px 0" }}
    >
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 22px" }}>

        {/* Section header */}
        <motion.div {...fadeUp(0)} style={{ marginBottom: 48 }}>
          <p style={{ fontSize: 14, color: "#6e6e73", letterSpacing: "-0.224px", marginBottom: 8 }}>
            Let's Connect
          </p>
          <h2
            style={{
              fontSize: "clamp(34px, 4vw, 40px)",
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.4px",
              color: "#1d1d1f",
            }}
          >
            Get in Touch
          </h2>
          <p style={{ fontSize: 17, color: "#6e6e73", marginTop: 8, maxWidth: 480, lineHeight: 1.47 }}>
            Available for contract work, part-time roles, and exciting AI projects. Let&apos;s build something extraordinary together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Info panel */}
          <motion.div {...fadeUp(0.08)}>
            <div style={{ marginBottom: 32 }}>
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3" style={{ marginBottom: 20 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      backgroundColor: "#f5f5f7",
                      border: "1px solid #e0e0e0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={16} color="#6e6e73" />
                  </div>
                  <div>
                    <p style={{ fontSize: 12, color: "#86868b", letterSpacing: "-0.12px", marginBottom: 2 }}>
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        style={{ fontSize: 17, color: "#0066cc", textDecoration: "none", transition: "opacity 200ms ease" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.7"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
                      >
                        {value}
                      </a>
                    ) : (
                      <p style={{ fontSize: 17, color: "#1d1d1f" }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                borderTop: "1px solid #e0e0e0",
                paddingTop: 24,
              }}
            >
              <p style={{ fontSize: 14, fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.224px", marginBottom: 12 }}>
                Available for
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {availability.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2"
                    style={{ fontSize: 15, color: "#6e6e73", marginBottom: 8 }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: "#0066cc",
                        flexShrink: 0,
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div {...fadeUp(0.16)}>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label htmlFor="name" style={{ display: "block", fontSize: 14, fontWeight: 400, color: "#1d1d1f", marginBottom: 8, letterSpacing: "-0.224px" }}>
                  Name
                </label>
                <PillInput id="name" name="name" placeholder="Your name" required />
              </div>

              <div>
                <label htmlFor="email" style={{ display: "block", fontSize: 14, fontWeight: 400, color: "#1d1d1f", marginBottom: 8, letterSpacing: "-0.224px" }}>
                  Email
                </label>
                <PillInput id="email" name="email" type="email" placeholder="your@email.com" required />
              </div>

              <div>
                <label htmlFor="message" style={{ display: "block", fontSize: 14, fontWeight: 400, color: "#1d1d1f", marginBottom: 8, letterSpacing: "-0.224px" }}>
                  Message
                </label>
                <PillTextarea id="message" name="message" placeholder="Tell me about your project..." rows={5} required />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2"
                style={{
                  width: "100%",
                  backgroundColor: submitted ? "#34c759" : "#0066cc",
                  color: "#ffffff",
                  borderRadius: 9999,
                  padding: "14px 22px",
                  fontSize: 17,
                  fontWeight: 400,
                  border: "none",
                  cursor: "pointer",
                  transition: "background 200ms ease, transform 150ms ease",
                  fontFamily: "inherit",
                  letterSpacing: "-0.374px",
                  marginTop: 4,
                }}
                onMouseEnter={(e) => {
                  if (!submitted) (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#0077ed";
                }}
                onMouseLeave={(e) => {
                  if (!submitted) (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#0066cc";
                }}
                onMouseDown={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(0.97)"; }}
                onMouseUp={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; }}
              >
                <Send size={16} />
                {submitted ? "Opening Mail Client..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
