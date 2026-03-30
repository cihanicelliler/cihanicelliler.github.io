"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Calendar, Tag, ArrowRight } from "lucide-react";
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

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

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
      } catch (err) {
        console.error("Error fetching Medium posts:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const extractThumbnail = (description: string) => {
    const match = description.match(/<img[^>]+src="([^">]+)"/);
    return match ? match[1] : null;
  };

  const stripHtml = (html: string) => {
    return html.replace(/<[^>]*>?/gm, "").substring(0, 160) + "...";
  };

  const estimateReadTime = (content: string) => {
    const text = content.replace(/<[^>]*>?/gm, "");
    const words = text.split(/\s+/).length;
    return Math.max(1, Math.round(words / 200));
  };

  /* ─── Shimmer skeleton block ─── */
  const ShimmerSkeleton = () => (
    <div className="h-[400px] rounded-2xl glass overflow-hidden relative">
      <div className="h-48 w-full bg-white/[0.02]" />
      <div className="p-6 flex flex-col gap-4">
        <div className="h-4 w-1/4 bg-white/[0.04] rounded-md relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" style={{ animation: "shimmer 2s linear infinite", backgroundSize: "400% 100%" }} />
        </div>
        <div className="h-6 w-3/4 bg-white/[0.04] rounded-md relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" style={{ animation: "shimmer 2s linear infinite", backgroundSize: "400% 100%", animationDelay: "0.2s" }} />
        </div>
        <div className="h-4 w-full bg-white/[0.04] rounded-md relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" style={{ animation: "shimmer 2s linear infinite", backgroundSize: "400% 100%", animationDelay: "0.4s" }} />
        </div>
        <div className="h-4 w-5/6 bg-white/[0.04] rounded-md" />
        <div className="mt-auto h-4 w-1/3 bg-white/[0.04] rounded-md" />
      </div>
    </div>
  );

  return (
    <section id="blog" className="py-24 md:py-32">
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
            {"// latest thoughts & writing"}
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
            From the <span className="gradient-text">Blog</span>
          </h2>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <ShimmerSkeleton key={i} />
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12 glass rounded-2xl">
            <p className="text-muted-foreground mb-4">
              Oops! Couldn&apos;t load the posts right now.
            </p>
            <a
              href="https://medium.com/@cihanicelliler"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan hover:underline inline-flex items-center gap-2"
            >
              Visit my Medium profile <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => {
              const thumbnail = post.thumbnail || extractThumbnail(post.description) || "/images/banner.png";
              const readTime = estimateReadTime(post.content || post.description);
              const isFirst = i === 0;

              return (
                <motion.div
                  key={post.guid}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  className={`group flex flex-col rounded-2xl glass overflow-hidden transition-all duration-500 hover:border-cyan/20 hover:shadow-[0_0_40px_rgba(0,212,255,0.06)] ${
                    isFirst ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="relative h-48 w-full overflow-hidden bg-surface/30">
                    <Image
                      src={thumbnail}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-70" />
                    {/* Read time badge */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-background/60 backdrop-blur-md text-[10px] font-mono text-muted-foreground">
                      {readTime} min read
                    </div>
                  </div>

                  <div className="flex flex-col p-6 flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="w-3.5 h-3.5 text-cyan/50" />
                      <span className="text-xs font-mono text-muted-foreground/70">
                        {formatDate(post.pubDate)}
                      </span>
                    </div>

                    <h3 className="text-lg font-heading font-bold mb-3 line-clamp-2 group-hover:text-cyan transition-colors duration-300">
                      <a href={post.link} target="_blank" rel="noopener noreferrer">
                        {post.title}
                      </a>
                    </h3>

                    <p className="text-sm text-muted-foreground/80 leading-relaxed mb-6 line-clamp-3">
                      {stripHtml(post.description)}
                    </p>

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-5">
                        {post.categories.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-lg bg-cyan/5 text-cyan/60 border border-cyan/10"
                          >
                            <Tag className="w-2.5 h-2.5" />
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-cyan transition-colors group/link"
                      >
                        Read on Medium
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://medium.com/@cihanicelliler"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border/60 text-foreground font-medium hover:bg-white/[0.03] hover:border-white/20 transition-all duration-300 group"
          >
            View all articles
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
