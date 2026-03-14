"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const STEPS = [
  {
    day: "Day 1",
    title: "Discovery Call",
    desc: "Free 30-minute consultation to understand your goals, challenges, and vision for the project.",
  },
  {
    day: "Day 2–3",
    title: "Proposal & Quote",
    desc: "Detailed scope, timeline, and transparent pricing delivered — no vague estimates, no surprises.",
  },
  {
    day: "Day 4",
    title: "Contract & Kickoff",
    desc: "Meet your dedicated PM and development team. Everything signed, aligned, and ready to go.",
  },
  {
    day: "Day 5",
    title: "Project Setup",
    desc: "Repo, project board, Slack channel, and dev environment fully configured and handed over.",
  },
  {
    day: "Week 2",
    title: "First Sprint Begins",
    desc: "Design mockups and first working features delivered for your review and feedback.",
  },
  {
    day: "Ongoing",
    title: "Weekly Updates",
    desc: "Every Friday: progress report, live demo, and next sprint plan so you're always in the loop.",
  },
];

function TimelineItem({ step, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="relative grid grid-cols-[1fr_auto_1fr] gap-x-6 items-start"
    >
      {/* Left content (desktop only) */}
      <div
        className={`hidden md:block ${isLeft ? "" : "opacity-0 pointer-events-none"}`}
      >
        {isLeft && (
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="rounded-xl border border-border p-5 text-right ml-auto"
            style={{ background: "#0F172A" }}
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-1 block">
              {step.day}
            </span>
            <h3 className="font-bold text-base text-foreground mb-1">
              {step.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        )}
      </div>

      {/* Center line + numbered dot */}
      <div className="flex flex-col items-center gap-0 relative">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center z-10 shrink-0 shadow-[0_0_16px_hsl(217_91%_60%/0.35)]"
        >
          <span className="text-primary font-bold text-sm">{index + 1}</span>
        </motion.div>
        {index < STEPS.length - 1 && (
          <div className="w-0.5 flex-1 min-h-15 bg-linear-to-b from-primary/40 to-border/40" />
        )}
      </div>

      {/* Right content (desktop right side + all mobile) */}
      <div
        className={`${isLeft ? "hidden md:block opacity-0 pointer-events-none" : ""}`}
      >
        {!isLeft && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="rounded-xl border border-border p-5"
            style={{ background: "#0F172A" }}
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-1 block">
              {step.day}
            </span>
            <h3 className="font-bold text-base text-foreground mb-1">
              {step.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        )}
      </div>

      {/* Mobile layout — always show on right */}
      <div
        className="md:hidden col-span-full pl-4 -mt-10 mb-2"
        style={{ gridColumn: "3" }}
      >
        {/* handled below separately */}
      </div>
    </div>
  );
}

function TimelineItemMobile({ step, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="flex gap-4 items-start">
      <div className="flex flex-col items-center gap-0">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="w-9 h-9 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center z-10 shrink-0 shadow-[0_0_14px_hsl(217_91%_60%/0.3)]"
        >
          <span className="text-primary font-bold text-xs">{index + 1}</span>
        </motion.div>
        {index < STEPS.length - 1 && (
          <div className="w-0.5 min-h-14 flex-1 bg-linear-to-b from-primary/40 to-border/40" />
        )}
      </div>
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="rounded-xl border border-border p-4 flex-1 mb-2"
        style={{ background: "#0F172A" }}
      >
        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-0.5 block">
          {step.day}
        </span>
        <h3 className="font-bold text-sm text-foreground mb-1">{step.title}</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {step.desc}
        </p>
      </motion.div>
    </div>
  );
}

export default function OnboardingTimeline() {
  return (
    <section className="py-24" style={{ background: "#020817" }}>
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 block">
            Onboarding
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            From First Call to First Commit
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here's exactly what happens when you reach out to XU Software.
          </p>
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden md:flex flex-col gap-0 max-w-4xl mx-auto">
          {STEPS.map((step, i) => (
            <TimelineItem key={step.title} step={step} index={i} />
          ))}
        </div>

        {/* Mobile timeline */}
        <div className="flex md:hidden flex-col max-w-lg mx-auto">
          {STEPS.map((step, i) => (
            <TimelineItemMobile key={step.title} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
