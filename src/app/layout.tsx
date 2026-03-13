import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cihan İçelliler | AI Engineer & Software Architect",
  description:
    "AI Engineer specializing in autonomous agents, LangGraph, RAG systems, and scalable backends. Building Lecta AI and LLM-powered solutions.",
  keywords: [
    "AI Engineer",
    "Software Architect",
    "LangGraph",
    "RAG",
    "Spring Boot",
    "FastAPI",
    "NLP",
    "LLM",
    "Lecta AI",
  ],
  authors: [{ name: "Cihan İçelliler" }],
  openGraph: {
    title: "Cihan İçelliler | AI Engineer & Software Architect",
    description:
      "Architecting Autonomous Intelligence — AI Engineer specializing in LangGraph, RAG, and scalable backends.",
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
      <body
        className="antialiased bg-background text-foreground"
      >
        {children}
      </body>
    </html>
  );
}
