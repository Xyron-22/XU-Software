"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { BLOG_POSTS, CATEGORY_COLORS } from "@/lib/blogData";
import { Clock, ArrowRight, Calendar } from "lucide-react";
import ScrollFadeIn from "@/components/shared/ScrollFadeIn";
import { NewsletterSignupFull } from "@/components/NewsletterSignup";

const FILTERS = ["All", "Development", "Design", "Cloud", "Business"];

function FeaturedPost({ post }) {
  return (
    <ScrollFadeIn>
      <Link href={`/blog/${post.slug}`}>
        <div className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 glow-card mb-16">
          <div className="md:flex">
            <div
              className={`md:w-2/5 h-56 md:h-auto bg-linear-to-br ${post.coverGradient} relative flex items-center justify-center shrink-0`}
            >
              <div className="absolute inset-0 dot-grid opacity-20" />
              <div className="text-6xl font-black text-white/8 select-none">
                {post.title.split(" ")[0].toUpperCase()}
              </div>
              <div className="absolute top-4 left-4">
                <span
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${CATEGORY_COLORS[post.category]}`}
                >
                  Featured · {post.category}
                </span>
              </div>
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center text-white text-xs font-bold">
                    {post.author.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">
                      {post.author.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {post.author.role}
                    </div>
                  </div>
                </div>
                <span className="flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </ScrollFadeIn>
  );
}

function BlogCard({ post, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300 glow-card h-full flex flex-col">
          <div
            className={`h-44 bg-linear-to-br ${post.coverGradient} relative flex items-center justify-center shrink-0`}
          >
            <div className="absolute inset-0 dot-grid opacity-20" />
            <div className="text-5xl font-black text-white/8 select-none">
              {post.title.split(" ")[0].toUpperCase()}
            </div>
            <div className="absolute top-3 left-3">
              <span
                className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${CATEGORY_COLORS[post.category]}`}
              >
                {post.category}
              </span>
            </div>
          </div>
          <div className="p-5 flex flex-col flex-1">
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
              <span>{post.date}</span>
            </div>
            <h3 className="font-bold text-base leading-snug mb-2 group-hover:text-primary transition-colors flex-1">
              {post.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-2 pt-3 border-t border-border mt-auto">
              <div className="w-7 h-7 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center text-white text-xs font-bold shrink-0">
                {post.author.initials}
              </div>
              <span className="text-xs text-muted-foreground">
                {post.author.name}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function BlogPage() {
  const [active, setActive] = useState("All");
  const featured = BLOG_POSTS.find((p) => p.featured);
  const rest = BLOG_POSTS.filter((p) => !p.featured);
  const filtered =
    active === "All" ? rest : rest.filter((p) => p.category === active);

  return (
    <div style={{ background: "#020817" }}>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-150 h-75 rounded-full bg-primary/12 blur-[110px]" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-[#020817] to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 block">
              Journal
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text inline-block mb-4">
              Insights & Resources
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mt-2">
              Engineering deep-dives, product strategy, and lessons from 150+
              shipped projects.
            </p>
          </motion.div>
        </div>
      </section>

      <NewsletterSignupFull />

      {/* Content */}
      <section className="pb-24" style={{ background: "#020817" }}>
        <div className="container mx-auto px-6">
          {featured && <FeaturedPost post={featured} />}

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === f
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "text-muted-foreground hover:text-foreground border border-border hover:border-primary/40"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((post, i) => (
                <BlogCard key={post.slug} post={post} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
