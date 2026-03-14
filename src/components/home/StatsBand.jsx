"use client";

import { useState, useEffect, useRef } from "react";
import ScrollFadeIn from "../shared/ScrollFadeIn";

const STATS = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 8, suffix: "", label: "Years in Business" },
  { value: 40, suffix: "+", label: "Engineers" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

function AnimatedNumber({ target, suffix }) {
  const [count, setCount] = useState(0);
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
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else setCount(Math.floor(current));
    }, 2000 / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <div ref={ref} className="shimmer-wrap">
      <span className="text-5xl md:text-6xl font-extrabold gradient-text">
        {count}
        {suffix}
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
              <AnimatedNumber target={stat.value} suffix={stat.suffix} />
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
