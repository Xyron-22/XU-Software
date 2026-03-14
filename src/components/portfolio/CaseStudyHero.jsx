"use client";

import { motion } from "framer-motion";

const TECH_COLORS = {
  React: "#61DAFB",
  "Next.js": "#fff",
  "Node.js": "#68A063",
  Python: "#F7C948",
  AWS: "#FF9900",
  Flutter: "#54C5F8",
  PostgreSQL: "#336791",
  Docker: "#2496ED",
  TypeScript: "#3178C6",
  GraphQL: "#E535AB",
  Redis: "#FF4438",
  GCP: "#4285F4",
  WebRTC: "#333",
  FHIR: "#D55",
};

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
              https://app.{study.client.toLowerCase().replace(" ", "")}.com
            </div>
          </div>
          <div
            className={`h-72 md:h-96 bg-linear-to-br ${study.coverGradient} flex items-center justify-center relative overflow-hidden`}
          >
            <div className="absolute inset-0 dot-grid opacity-30" />
            <div className="text-7xl md:text-9xl font-black text-white/5 select-none">
              {study.title.split(" ")[0].toUpperCase()}
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div className="space-y-1">
                {[80, 60, 90].map((w, i) => (
                  <div
                    key={i}
                    className="h-2 rounded-full bg-white/10"
                    style={{ width: `${w}px` }}
                  />
                ))}
              </div>
              <div className="w-20 h-12 rounded-lg bg-white/5 border border-white/10" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
