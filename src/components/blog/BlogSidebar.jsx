"use client";

import Link from "next/link";
import { CATEGORY_COLORS } from "@/lib/blogData";
import { NewsletterSignupCompact } from "@/components/NewsletterSignup";

export default function BlogSidebar({ post, related }) {
  return (
    <div className="space-y-6 lg:sticky lg:top-28">
      {/* Author card */}
      <div className="bg-card border border-border rounded-xl p-5">
        <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
          About the Author
        </h4>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-11 h-11 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center text-white font-bold shrink-0">
            {post.author.initials}
          </div>
          <div>
            <div className="font-semibold text-sm">{post.author.name}</div>
            <div className="text-xs text-primary">{post.author.role}</div>
          </div>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Shipping software at XU Software since 2018. Writes about engineering,
          systems design, and startup strategy.
        </p>
      </div>

      {/* Table of contents */}
      {post.toc && post.toc.length > 0 && (
        <div className="bg-card border border-border rounded-xl p-5">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Contents
          </h4>
          <ol className="space-y-2">
            {post.toc.map((item, i) => (
              <li
                key={i}
                className="flex gap-2.5 text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors"
              >
                <span className="text-primary/60 font-mono text-xs mt-0.5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Newsletter */}
      <NewsletterSignupCompact />

      {/* Related posts */}
      {related.length > 0 && (
        <div className="bg-card border border-border rounded-xl p-5">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Related Posts
          </h4>
          <div className="space-y-4">
            {related.map((r) => (
              <Link key={r.slug} href={`/blog/${r.slug}`}>
                <div className="group flex gap-3 hover:bg-background rounded-lg p-2 -mx-2 transition-colors">
                  <div
                    className={`w-14 h-14 rounded-lg bg-linear-to-br ${r.coverGradient} shrink-0`}
                  />
                  <div className="flex-1 min-w-0">
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${CATEGORY_COLORS[r.category]}`}
                    >
                      {r.category}
                    </span>
                    <p className="text-xs font-medium mt-1 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {r.title}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
