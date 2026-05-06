"use client";

import { Github, Linkedin, Mail, BookOpen } from "lucide-react";

const socials = [
  { label: "GitHub", href: "https://github.com/cihanicelliler", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/cihanicelliler", icon: Linkedin },
  { label: "Email", href: "mailto:icellilercihan@gmail.com", icon: Mail },
  { label: "Medium", href: "https://medium.com/@cihanicelliler", icon: BookOpen },
];

const footerLinks = [
  {
    heading: "Navigation",
    links: [
      { label: "Home", href: "#home" },
      { label: "Projects", href: "#projects" },
      { label: "Blog", href: "#blog" },
      { label: "Experience", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "GitHub", href: "https://github.com/cihanicelliler" },
      { label: "LinkedIn", href: "https://linkedin.com/in/cihanicelliler" },
      { label: "Medium", href: "https://medium.com/@cihanicelliler" },
      { label: "Email", href: "mailto:icellilercihan@gmail.com" },
    ],
  },
  {
    heading: "Expertise",
    links: [
      { label: "AI Agent Systems", href: "#projects" },
      { label: "Distributed Systems", href: "#projects" },
      { label: "Event-Driven Architecture", href: "#projects" },
      { label: "LangGraph & RAG", href: "#projects" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#f5f5f7", borderTop: "1px solid #e0e0e0" }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "48px 22px 32px" }}>

        {/* Top row: wordmark + columns */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 mb-10">
          {/* Brand */}
          <div style={{ minWidth: 180 }}>
            <a
              href="#home"
              style={{ fontSize: 17, fontWeight: 400, color: "#1d1d1f", letterSpacing: "-0.374px", textDecoration: "none", lineHeight: 2.41, display: "block" }}
            >
              Cihan İçelliler
            </a>
            <p style={{ fontSize: 14, color: "#6e6e73", lineHeight: 1.47, letterSpacing: "-0.224px", maxWidth: 200 }}>
              Senior Software Engineer &amp; AI Agent Specialist
            </p>
            <div className="flex items-center gap-4 mt-4">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  style={{ color: "#6e6e73", transition: "color 200ms ease", display: "flex" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#0066cc"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#6e6e73"; }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 flex-1">
            {footerLinks.map((col) => (
              <div key={col.heading}>
                <p style={{ fontSize: 12, fontWeight: 600, color: "#1d1d1f", letterSpacing: "0.02em", textTransform: "uppercase", marginBottom: 12 }}>
                  {col.heading}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {col.links.map((link) => (
                    <li key={link.label} style={{ marginBottom: 8 }}>
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        style={{ fontSize: 14, color: "#6e6e73", textDecoration: "none", lineHeight: 1.47, transition: "color 200ms ease" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#1d1d1f"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#6e6e73"; }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid #e0e0e0", paddingTop: 20 }}
        >
          <p style={{ fontSize: 12, color: "#6e6e73", letterSpacing: "-0.12px" }}>
            Copyright &copy; {currentYear} Cihan İçelliler. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: "#86868b", letterSpacing: "-0.12px" }}>
            Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
