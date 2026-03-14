"use client";

import { motion } from "framer-motion";

export default function GlowCard({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
      className={`bg-card border border-border rounded-xl p-6 glow-card ${className}`}
    >
      {children}
    </motion.div>
  );
}
