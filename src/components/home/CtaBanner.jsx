"use client";

import { motion } from "framer-motion";
import GradientButton from "../shared/GradientButton";

const BEAMS = [
  { left: "-8%", delay: "0s", dur: "5s", opacity: 0.18 },
  { left: "30%", delay: "1.8s", dur: "6.5s", opacity: 0.12 },
  { left: "62%", delay: "3.5s", dur: "5.5s", opacity: 0.14 },
  { left: "88%", delay: "0.8s", dur: "7s", opacity: 0.09 },
];

export default function CtaBanner() {
  return (
    <section
      className="py-24 relative dot-grid overflow-hidden"
      style={{ background: "#0A0F1E" }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden min-h-100 flex items-center justify-center p-12 md:p-16 text-center"
        >
          {/* Diagonal beams */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            {BEAMS.map((b, i) => (
              <div
                key={i}
                className="absolute top-0 bottom-0 w-14 bg-linear-to-b from-primary/30 via-secondary/20 to-transparent"
                style={{
                  left: b.left,
                  opacity: b.opacity,
                  transform: "skewX(-20deg)",
                  animation: `diagonal-beam ${b.dur} linear infinite`,
                  animationDelay: b.delay,
                  willChange: "transform",
                }}
              />
            ))}
          </div>

          {/* Gradient bg */}
          <div className="absolute inset-0 bg-linear-to-r from-primary/10 via-secondary/15 to-primary/10" />

          {/* Spotlight behind headline */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            <div className="w-125 h-52 rounded-full bg-primary/10 blur-3xl" />
          </div>

          <div className="absolute inset-1 rounded-2xl bg-card/75 backdrop-blur-sm" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Ready to Build Something{" "}
              <span className="gradient-text">Great?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Let's turn your idea into a world-class product. Book a free
              consultation today.
            </p>
            <GradientButton to="Contact">
              Book a Free Consultation
            </GradientButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
