"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const SNIPPETS = [
  { text: "404: Not Found", x: "6%", y: "18%", d: 0 },
  { text: "return null;", x: "78%", y: "14%", d: 1.2 },
  { text: "throw new Error()", x: "12%", y: "62%", d: 0.6 },
  { text: "undefined", x: "72%", y: "55%", d: 2.0 },
  { text: "if (!page) {", x: "42%", y: "78%", d: 1.5 },
  { text: "// TODO: fix", x: "88%", y: "32%", d: 0.3 },
  { text: "catch (e) {}", x: "28%", y: "28%", d: 1.8 },
  { text: "null.map()", x: "60%", y: "20%", d: 2.3 },
  { text: "Stack Overflow", x: "3%", y: "42%", d: 0.9 },
  { text: "404", x: "52%", y: "48%", d: 0.5 },
];

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden font-inter"
      style={{ background: "#020817" }}
    >
      {/* Background snippets */}
      {SNIPPETS.map((s, i) => (
        <div
          key={i}
          aria-hidden="true"
          className="absolute font-mono text-primary select-none pointer-events-none"
          style={{
            left: s.x,
            top: s.y,
            fontSize: i % 4 === 0 ? "1.2rem" : "0.9rem",
            opacity: 0.08,
            animation: `float ${5 + (i % 3)}s ease-in-out infinite`,
            animationDelay: `${s.d}s`,
          }}
        >
          {s.text}
        </div>
      ))}

      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-[600px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="font-extrabold select-none"
            style={{
              fontSize: "clamp(6rem, 20vw, 12rem)",
              lineHeight: 1,
              background:
                "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            404
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-bold text-foreground mt-4 mb-3"
        >
          Looks like you're lost in the code
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground text-lg mb-10 max-w-md mx-auto"
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* Primary button */}
          <Link
            href="/"
            className="px-8 py-3 rounded-lg font-semibold text-white text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20"
            style={{ background: "linear-gradient(135deg, #3B82F6, #8B5CF6)" }}
          >
            Take Me Home
          </Link>

          {/* Ghost button */}
          <Link
            href="/contact"
            className="px-8 py-3 rounded-lg font-semibold text-sm border border-[#3B82F6] text-[#3B82F6] transition-all hover:bg-[#3B82F6] hover:text-white active:scale-95"
          >
            Contact Support
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
