import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cihan İçelliler | Senior Software Engineer & AI Agent Specialist",
  description:
    "Senior Software Engineer specializing in AI agent orchestration, distributed systems, and high-scale backends. Building the Self-Running Bank vision with LangGraph, DDD, and event-driven architecture.",
  keywords: [
    "Senior Software Engineer",
    "AI Agent Specialist",
    "LangGraph",
    "DDD",
    "Spring Boot",
    "Distributed Systems",
    "Event-Driven Architecture",
    "Lecta AI",
  ],
  authors: [{ name: "Cihan İçelliler" }],
  openGraph: {
    title: "Cihan İçelliler | Senior Software Engineer & AI Agent Specialist",
    description:
      "Architecting the Self-Running Bank — Senior Software Engineer specializing in AI agents, distributed systems, and high-scale backends.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
