"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Code2, TestTube2, Rocket } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";
import ScrollFadeIn from "../shared/ScrollFadeIn";

const STEPS = [
  {
    icon: Search,
    title: "Discovery",
    desc: "We analyze your requirements, goals, and target audience to build a solid foundation.",
  },
  {
    icon: PenTool,
    title: "Design",
    desc: "Creating intuitive wireframes and visual designs that align with your brand.",
  },
  {
    icon: Code2,
    title: "Development",
    desc: "Building robust, scalable solutions using cutting-edge technologies.",
  },
  {
    icon: TestTube2,
    title: "Testing",
    desc: "Rigorous QA processes to ensure flawless performance across all platforms.",
  },
  {
    icon: Rocket,
    title: "Launch",
    desc: "Deploying your product and providing ongoing support and optimization.",
  },
];

export default function ProcessSection() {
  const [filled, setFilled] = useState(false);
  const lineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setFilled(true);
      },
      { threshold: 0.3 },
    );
    if (lineRef.current) observer.observe(lineRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-24 relative dot-grid"
      style={{ background: "#020817" }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          label="Process"
          title="How We Work"
          description="A proven methodology that delivers results on time, every time."
        />

        {/* Animated connecting line */}
        <div ref={lineRef} className="relative h-px mb-10 hidden md:block">
          <div className="absolute inset-0 bg-border" />
          <motion.div
            className="absolute top-0 left-0 h-full bg-linear-to-r from-primary via-secondary to-primary"
            initial={{ width: "0%" }}
            animate={{ width: filled ? "100%" : "0%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            style={{ willChange: "width" }}
          />
          {filled && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.5 }}
              className="absolute right-0 top-0 w-3 h-3 -translate-y-1/2 rounded-full bg-secondary"
              style={{ boxShadow: "0 0 12px hsl(258 90% 66% / 0.9)" }}
            />
          )}
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {STEPS.map((step, i) => (
            <ScrollFadeIn key={step.title} delay={i * 0.5}>
              <div className="text-center group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <div className="relative">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
