"use client";

import { useState, useEffect, useRef } from "react";
import ScrollFadeIn from "@/components/shared/ScrollFadeIn";

const STATS = [
  { value: "100%", label: "Code Ownership Yours" },
  { value: "End-to-End", label: "Build to Deployment" },
  { value: "Zero", label: "Middlemen or Handoffs" },
  { value: "Flexible", label: "Build-Only or Fully Managed" },
];

function TypewriterValue({ value }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    setDisplayed("");
    let i = 0;
    // Speed: total animation ~800ms regardless of text length
    const intervalMs = Math.max(40, 800 / value.length);

    const timer = setInterval(() => {
      i++;
      setDisplayed(value.slice(0, i));
      if (i >= value.length) clearInterval(timer);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [started, value]);

  return (
    <div ref={ref} className="shimmer-wrap inline-block">
      <span className="text-4xl md:text-5xl font-extrabold gradient-text">
        {displayed}
        {/* Blinking cursor while typing */}
        {displayed.length < value.length && (
          <span className="animate-pulse text-primary">|</span>
        )}
      </span>
    </div>
  );
}

export default function StatsBand() {
  return (
    <section
      className="py-20 relative dot-grid"
      style={{
        background: "#080D1A",
        boxShadow:
          "inset 0 1px 0 hsl(217 91% 60% / 0.2), inset 0 -1px 0 hsl(217 91% 60% / 0.15)",
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {STATS.map((stat, i) => (
            <ScrollFadeIn key={stat.label} delay={i * 0.1}>
              <TypewriterValue value={stat.value} />
              <div className="text-muted-foreground text-sm mt-2">
                {stat.label}
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
