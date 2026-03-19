"use client";

import { motion } from "framer-motion";
import GradientButton from "../shared/GradientButton";

const CODE_LINES = [
  {
    indent: 0,
    tokens: [
      { text: "const", color: "text-purple-400" },
      { text: " app", color: "text-blue-300" },
      { text: " = ", color: "text-muted-foreground" },
      { text: "createServer", color: "text-yellow-300" },
      { text: "({", color: "text-muted-foreground" },
    ],
  },
  {
    indent: 1,
    tokens: [
      { text: "port", color: "text-blue-300" },
      { text: ": ", color: "text-muted-foreground" },
      { text: "3000", color: "text-green-400" },
      { text: ",", color: "text-muted-foreground" },
    ],
  },
  {
    indent: 1,
    tokens: [
      { text: "routes", color: "text-blue-300" },
      { text: ": ", color: "text-muted-foreground" },
      { text: "loadRoutes", color: "text-yellow-300" },
      { text: "(),", color: "text-muted-foreground" },
    ],
  },
  {
    indent: 1,
    tokens: [
      { text: "middleware", color: "text-blue-300" },
      { text: ": [", color: "text-muted-foreground" },
    ],
  },
  {
    indent: 2,
    tokens: [
      { text: "cors", color: "text-yellow-300" },
      { text: "(), ", color: "text-muted-foreground" },
      { text: "auth", color: "text-yellow-300" },
      { text: "()", color: "text-muted-foreground" },
    ],
  },
  { indent: 1, tokens: [{ text: "]", color: "text-muted-foreground" }] },
  { indent: 0, tokens: [{ text: "});", color: "text-muted-foreground" }] },
  { indent: 0, tokens: [] },
  {
    indent: 0,
    tokens: [
      { text: "app", color: "text-blue-300" },
      { text: ".", color: "text-muted-foreground" },
      { text: "listen", color: "text-yellow-300" },
      { text: "(() => {", color: "text-muted-foreground" },
    ],
  },
  {
    indent: 1,
    tokens: [
      { text: "console", color: "text-blue-300" },
      { text: ".", color: "text-muted-foreground" },
      { text: "log", color: "text-yellow-300" },
      { text: "(", color: "text-muted-foreground" },
      { text: "'🚀 Ready'", color: "text-green-400" },
      { text: ");", color: "text-muted-foreground" },
    ],
  },
  { indent: 0, tokens: [{ text: "});", color: "text-muted-foreground" }] },
];

const STATS = [
  { value: "100%", label: "Code Ownership Yours" },
  { value: "End-to-End", label: "Build to Deployment" },
  { value: "Zero", label: "Middlemen or Handoffs" },
];

export default function HeroSection() {
  return (
    <section
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
      style={{ background: "#020817" }}
    >
      <div className="absolute inset-0 gradient-mesh" />
      {/* Strong glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-125 h-125 rounded-full bg-primary/20 blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-100 h-100 rounded-full bg-secondary/20 blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 w-75 h-75 rounded-full bg-primary/15 blur-[80px] -translate-x-1/2 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-sm font-medium mb-8 shadow-lg shadow-primary/10"
            >
              <span>🚀</span>
              <span>Trusted by 100+ Companies</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] mb-6"
            >
              We Build Software{" "}
              <span className="gradient-text">That Scales</span>
              {/* name branding kept in navbar */}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-lg md:text-xl max-w-lg mb-8 leading-relaxed"
            >
              From idea to production — we craft high-performance applications
              for startups and enterprises that need to move fast.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <GradientButton to="Contact">Start a Project →</GradientButton>
              <GradientButton to="Portfolio" variant="ghost">
                See Our Work
              </GradientButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-8"
            >
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="animate-float">
              <div
                className="bg-card border border-primary/20 rounded-xl overflow-hidden shadow-2xl shadow-primary/20"
                style={{
                  boxShadow:
                    "0 0 60px hsl(217 91% 60% / 0.12), 0 0 120px hsl(258 90% 66% / 0.08), 0 25px 50px -12px rgba(0,0,0,0.5)",
                }}
              >
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs text-muted-foreground font-mono">
                    server.ts
                  </span>
                </div>
                <div className="p-5 font-mono text-sm leading-7">
                  {CODE_LINES.map((line, i) => (
                    <div
                      key={i}
                      style={{ paddingLeft: `${line.indent * 24}px` }}
                    >
                      {line.tokens.length === 0 ? (
                        <br />
                      ) : (
                        line.tokens.map((token, j) => (
                          <span key={j} className={token.color}>
                            {token.text}
                          </span>
                        ))
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
