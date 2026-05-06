"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Calendar, Clock } from "lucide-react";
import Image from "next/image";

interface MediumPost {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: Record<string, unknown>;
  categories: string[];
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

function SkeletonCard() {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #e0e0e0",
        borderRadius: 18,
        overflow: "hidden",
      }}
    >
      <div style={{ height: 180, backgroundColor: "#f5f5f7" }} />
      <div style={{ padding: 24 }}>
        <div style={{ height: 12, width: "40%", backgroundColor: "#f5f5f7", borderRadius: 6, marginBottom: 12 }} />
        <div style={{ height: 20, width: "85%", backgroundColor: "#f5f5f7", borderRadius: 6, marginBottom: 8 }} />
        <div style={{ height: 20, width: "65%", backgroundColor: "#f5f5f7", borderRadius: 6, marginBottom: 16 }} />
        <div style={{ height: 14, width: "95%", backgroundColor: "#f5f5f7", borderRadius: 6, marginBottom: 6 }} />
        <div style={{ height: 14, width: "80%", backgroundColor: "#f5f5f7", borderRadius: 6 }} />
      </div>
    </div>
  );
}

export default function BlogPosts() {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@cihanicelliler"
        );
        const data = await response.json();
        if (data.status === "ok") {
          setPosts(data.items.slice(0, 6));
        } else {
          setError(true);
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

  const extractThumbnail = (description: string) => {
    const match = description.match(/<img[^>]+src="([^">]+)"/);
    return match ? match[1] : null;
  };

  const stripHtml = (html: string) =>
    html.replace(/<[^>]*>?/gm, "").substring(0, 140) + "…";

  const estimateReadTime = (content: string) => {
    const words = content.replace(/<[^>]*>?/gm, "").split(/\s+/).length;
    return Math.max(1, Math.round(words / 200));
  };

  return (
    <section
      id="blog"
      style={{ backgroundColor: "#ffffff", padding: "80px 0" }}
    >
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 22px" }}>

        {/* Section header */}
        <motion.div {...fadeUp(0)} style={{ marginBottom: 48 }}>
          <p style={{ fontSize: 14, color: "#6e6e73", letterSpacing: "-0.224px", marginBottom: 8 }}>
            Latest Thoughts &amp; Writing
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
            From the Blog
          </h2>
          <a
            href="https://medium.com/@cihanicelliler"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5"
            style={{ fontSize: 15, color: "#0066cc", textDecoration: "none", marginTop: 12, transition: "opacity 200ms ease" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.7"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
          >
            View all on Medium
            <ExternalLink size={13} />
          </a>
        </motion.div>

        {/* Loading state */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3].map((i) => <SkeletonCard key={i} />)}
          </div>
        )}

        {/* Error state */}
        {!loading && error && (
          <div
            style={{
              textAlign: "center",
              padding: "48px 24px",
              border: "1px solid #e0e0e0",
              borderRadius: 18,
              backgroundColor: "#f5f5f7",
            }}
          >
            <p style={{ fontSize: 17, color: "#6e6e73", marginBottom: 16 }}>
              Couldn&apos;t load posts right now.
            </p>
            <a
              href="https://medium.com/@cihanicelliler"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                backgroundColor: "#0066cc",
                color: "#ffffff",
                borderRadius: 9999,
                padding: "10px 20px",
                fontSize: 15,
                textDecoration: "none",
              }}
            >
              Visit Medium profile
              <ExternalLink size={13} />
            </a>
          </div>
        )}

        {/* Posts grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post, i) => {
              const thumbnail = post.thumbnail || extractThumbnail(post.description) || null;
              const readTime = estimateReadTime(post.content || post.description);

              return (
                <motion.a
                  key={post.guid}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...fadeUp(i * 0.07)}
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e0e0e0",
                    borderRadius: 18,
                    overflow: "hidden",
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                    transition: "border-color 200ms ease, box-shadow 200ms ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "#0066cc";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "#e0e0e0";
                  }}
                >
                  {/* Thumbnail */}
                  {thumbnail && (
                    <div style={{ height: 180, overflow: "hidden", backgroundColor: "#f5f5f7", borderRadius: "18px 18px 0 0", position: "relative", flexShrink: 0 }}>
                      <Image
                        src={thumbnail}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div style={{ padding: 24, flex: 1, display: "flex", flexDirection: "column" }}>
                    {/* Meta */}
                    <div className="flex items-center gap-3 mb-3" style={{ flexWrap: "wrap" }}>
                      <span
                        className="flex items-center gap-1"
                        style={{ fontSize: 11, color: "#86868b", letterSpacing: "-0.12px" }}
                      >
                        <Calendar size={11} />
                        {formatDate(post.pubDate)}
                      </span>
                      <span
                        className="flex items-center gap-1"
                        style={{ fontSize: 11, color: "#86868b", letterSpacing: "-0.12px" }}
                      >
                        <Clock size={11} />
                        {readTime} min read
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontSize: 17,
                        fontWeight: 600,
                        color: "#1d1d1f",
                        lineHeight: 1.35,
                        letterSpacing: "-0.374px",
                        marginBottom: 8,
                      }}
                    >
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p
                      style={{
                        fontSize: 14,
                        color: "#6e6e73",
                        lineHeight: 1.47,
                        letterSpacing: "-0.224px",
                        flex: 1,
                        marginBottom: 16,
                      }}
                    >
                      {stripHtml(post.description)}
                    </p>

                    {/* Tags */}
                    {post.categories?.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {post.categories.slice(0, 3).map((cat) => (
                          <span
                            key={cat}
                            style={{
                              fontSize: 11,
                              color: "#6e6e73",
                              border: "1px solid #e0e0e0",
                              borderRadius: 6,
                              padding: "2px 8px",
                              backgroundColor: "#f5f5f7",
                              letterSpacing: "-0.12px",
                            }}
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.a>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
