import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-heading",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-jetbrains",
});

const siteUrl = "https://cihanicelliler.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cihan İçelliler | Senior Software Engineer & AI Agent Specialist",
    template: "%s | Cihan İçelliler",
  },
  description:
    "Senior Software Engineer specializing in AI agent orchestration, distributed systems, and high-scale backends. Building the Self-Running Bank vision with LangGraph, DDD, and event-driven architecture.",
  keywords: [
    "Senior Software Engineer",
    "AI Agent Specialist",
    "LangGraph",
    "Domain-Driven Design",
    "Spring Boot",
    "Distributed Systems",
    "Event-Driven Architecture",
    "Lecta AI",
    "Self-Running Bank",
    "Kafka",
    "Kubernetes",
    "Java",
    "Python",
    "FastAPI",
    "RAG",
    "LLM Agents",
    "gRPC",
  ],
  authors: [{ name: "Cihan İçelliler", url: siteUrl }],
  creator: "Cihan İçelliler",
  openGraph: {
    title: "Cihan İçelliler | Senior Software Engineer & AI Agent Specialist",
    description:
      "Architecting the Self-Running Bank — Senior Software Engineer specializing in AI agents, distributed systems, and high-scale backends.",
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Cihan İçelliler",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cihan İçelliler | Senior Software Engineer & AI Agent Specialist",
    description:
      "Architecting the Self-Running Bank — Senior Software Engineer specializing in AI agents, distributed systems, and high-scale backends.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [{ url: "/favicon-earth-premium.svg", type: "image/svg+xml", sizes: "any" }],
    shortcut: [{ url: "/favicon-earth-premium.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon-earth-premium.svg", type: "image/svg+xml", sizes: "any" }],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Cihan İçelliler",
  url: siteUrl,
  jobTitle: "Senior Software Engineer & AI Agent Specialist",
  description:
    "Senior Software Engineer specializing in AI agent orchestration, distributed systems, and high-scale backends.",
  knowsAbout: [
    "AI Agent Orchestration",
    "Distributed Systems",
    "Java",
    "Spring Boot",
    "LangGraph",
    "Event-Driven Architecture",
    "Domain-Driven Design",
    "Kafka",
    "Kubernetes",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${inter.className}`}>
      <head>
        <meta name="theme-color" content="#050816" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="antialiased bg-background text-foreground">
        {/* Aurora ambient — animated floating gradient blobs */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 select-none overflow-hidden"
          style={{ zIndex: 0 }}
        >
          {/* Cyan aurora blob */}
          <div
            className="absolute rounded-full"
            style={{
              width: "50vw",
              height: "50vw",
              top: "-15%",
              left: "-10%",
              background: "radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)",
              filter: "blur(60px)",
              animation: "aurora 20s ease-in-out infinite",
            }}
          />
          {/* Violet aurora blob */}
          <div
            className="absolute rounded-full"
            style={{
              width: "45vw",
              height: "45vw",
              bottom: "-10%",
              right: "-5%",
              background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)",
              filter: "blur(60px)",
              animation: "aurora-reverse 25s ease-in-out infinite",
            }}
          />
          {/* Pink aurora blob */}
          <div
            className="absolute rounded-full"
            style={{
              width: "35vw",
              height: "35vw",
              top: "40%",
              left: "50%",
              transform: "translateX(-50%)",
              background: "radial-gradient(circle, rgba(244,114,182,0.04) 0%, transparent 70%)",
              filter: "blur(80px)",
              animation: "aurora 30s ease-in-out infinite",
              animationDelay: "-10s",
            }}
          />
        </div>
        {/* Interactive cursor glow */}
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
