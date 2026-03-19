"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function CaseStudyHero({ study }) {
  return (
    <section className="pt-10 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-150 h-100 rounded-full bg-primary/15 blur-[120px]" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-[#020817] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-5">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary">
              {study.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text inline-block mb-5">
            {study.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            {study.outcome}
          </p>

          {/* Meta pills */}
          <div className="flex flex-wrap gap-3 mb-12">
            {[
              { label: "Client", value: study.client },
              { label: "Industry", value: study.industry },
              { label: "Timeline", value: study.timeline },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2"
              >
                <span className="text-xs text-muted-foreground">{label}:</span>
                <span className="text-sm font-semibold text-foreground">
                  {value}
                </span>
              </div>
            ))}

            {/* View Live pill — only shows if href exists */}
            {study.href && (
              <Link
                href={study.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 hover:bg-primary/20 hover:border-primary/50 transition-all duration-200 group"
              >
                <span className="text-xs text-muted-foreground">
                  View Live:
                </span>
                <span className="text-sm font-semibold text-primary group-hover:underline">
                  {study.href.replace("https://", "").replace("http://", "")}
                </span>
                <ExternalLink className="w-3 h-3 text-primary" />
              </Link>
            )}
          </div>
        </motion.div>

        {/* Browser mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-xl overflow-hidden"
          style={{
            boxShadow:
              "0 0 0 1px hsl(217 91% 60% / 0.3), 0 0 60px hsl(217 91% 60% / 0.15), 0 40px 80px -20px rgba(0,0,0,0.6)",
          }}
        >
          <div className="flex items-center gap-2 px-4 py-3 bg-card border-b border-border">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <div className="flex-1 mx-4 bg-background rounded-md px-3 py-1 text-xs text-muted-foreground font-mono">
              {study.href}
            </div>
          </div>
          <div className="h-full relative overflow-hidden">
            <img
              src={study.screenshots.desktop}
              alt={`${study.title} screenshot`}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#020817]/60 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
