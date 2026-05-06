import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <head>
        <meta name="theme-color" content="#ffffff" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
