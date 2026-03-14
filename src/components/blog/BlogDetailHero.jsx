"use client";

import { motion } from "framer-motion";
import { Clock, Calendar } from "lucide-react";
import { CATEGORY_COLORS } from "@/lib/blogData";

export default function BlogDetailHero({ post }) {
  return (
    <section className="pt-8 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-[#020817] to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span
            className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-full border mb-5 ${CATEGORY_COLORS[post.category]}`}
          >
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text inline-block leading-tight mb-5">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-5 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                {post.author.initials}
              </div>
              <div>
                <div className="text-sm font-semibold">{post.author.name}</div>
                <div className="text-xs text-muted-foreground">
                  {post.author.role}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Cover image browser frame */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-xl overflow-hidden"
          style={{
            boxShadow:
              "0 0 0 1px hsl(217 91% 60% / 0.25), 0 0 50px hsl(217 91% 60% / 0.12), 0 30px 60px -20px rgba(0,0,0,0.5)",
          }}
        >
          <div className="flex items-center gap-2 px-4 py-3 bg-card border-b border-border">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div
            className={`h-48 md:h-64 bg-linear-to-br ${post.coverGradient} flex items-center justify-center relative overflow-hidden`}
          >
            <div className="absolute inset-0 dot-grid opacity-20" />
            <div className="text-7xl md:text-8xl font-black text-white/6 select-none">
              {post.title.split(" ")[0].toUpperCase()}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
