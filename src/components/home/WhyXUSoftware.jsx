"use client";

import { Zap, Search, Lock, Shield, Check, Minus } from "lucide-react";
import { motion } from "framer-motion";
import ScrollFadeIn from "../shared/ScrollFadeIn";

const CARDS = [
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "From kickoff to launch in weeks, not months. Direct communication, agile execution, no middlemen.",
  },
  {
    icon: Search,
    title: "Transparent Process",
    desc: "Full visibility at every phase. You see the code, the progress, and the deployment in real time.",
  },
  {
    icon: Lock,
    title: "100% Code Ownership",
    desc: "You own every line of code from day one. No lock-in, no hidden clauses — the source code is always yours.",
  },
  {
    icon: Shield,
    title: "Flexible Engagement",
    desc: "Take the code and run, or have us manage hosting, deployment, domain, and infrastructure on a monthly retainer. Your choice.",
  },
];

const TABLE_ROWS = [
  {
    feature: "Communication",
    xu: "Direct with Developer",
    freelancer: "Inconsistent",
    agency: "Through Account Manager",
  },
  {
    feature: "Speed",
    xu: "Fast & Agile",
    freelancer: "Variable",
    agency: "Slow & Structured",
  },
  {
    feature: "Cost",
    xu: "Transparent & Fair",
    freelancer: "Variable",
    agency: "High Overhead",
  },
  {
    feature: "Quality",
    xu: "Senior-Level Only",
    freelancer: "Variable",
    agency: "Mixed Team Levels",
  },
  {
    feature: "Code Ownership",
    xu: "Always 100% Yours",
    freelancer: "Usually Full",
    agency: "Often Restricted",
  },
  {
    feature: "Hosting & Deploy",
    xu: "Self-Managed or We Handle",
    freelancer: "Rarely Included",
    agency: "Paid Add-On",
  },
  {
    feature: "Ongoing Management",
    xu: "Optional Retainer",
    freelancer: "Limited",
    agency: "Expensive Retainer",
  },
];

function CompareCell({ value, highlight }) {
  const positive = [
    "Direct with Developer",
    "Fast & Agile",
    "Transparent & Fair",
    "Senior-Level Only",
    "Always 100% Yours",
    "Self-Managed or We Handle",
    "Optional Retainer",
  ].includes(value);

  return (
    <td
      className={`px-4 py-4 text-sm text-center ${highlight ? "bg-primary/10" : ""}`}
    >
      <span
        className={
          highlight
            ? "text-foreground font-semibold"
            : positive
              ? "text-muted-foreground"
              : "text-muted-foreground/60"
        }
      >
        {value}
      </span>
    </td>
  );
}

export default function WhyXUSoftware() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "#020817" }}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-primary/8 blur-[120px]" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 rounded-full bg-secondary/8 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <ScrollFadeIn>
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 block">
              Why Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 inline-block relative">
              Why Choose XU Software
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-linear-to-r from-primary via-primary to-transparent rounded-full" />
            </h2>
            <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
              We don't just write code — we build products that drive real
              business outcomes.
            </p>
          </div>
        </ScrollFadeIn>

        {/* 4-column cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {CARDS.map((card, i) => (
            <ScrollFadeIn key={card.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group relative bg-card border border-border rounded-xl p-6 h-full overflow-hidden cursor-default transition-colors duration-300 hover:border-primary/40"
              >
                {/* Blue bottom border accent */}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />

                {/* Glow on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/3 transition-colors duration-300 rounded-xl" />

                <div className="relative z-10">
                  {/* Icon square with blue glow */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(217_91%_60%/0.3)] transition-all duration-300">
                    <card.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors duration-200">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            </ScrollFadeIn>
          ))}
        </div>

        {/* Comparison table */}
        <ScrollFadeIn delay={0.2}>
          <div className="rounded-2xl border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr
                    className="border-b border-border"
                    style={{ background: "#080D1A" }}
                  >
                    <th className="px-4 py-4 text-left text-sm font-semibold text-muted-foreground w-32">
                      Feature
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-bold text-primary bg-primary/10 w-1/4">
                      <span className="flex items-center justify-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                        XU Software
                      </span>
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-muted-foreground w-1/4">
                      Freelancer
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-muted-foreground w-1/4">
                      Large Agency
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {TABLE_ROWS.map((row, i) => (
                    <tr
                      key={row.feature}
                      className="border-b border-border/60 last:border-0 transition-colors hover:bg-white/2"
                      style={{
                        background:
                          i % 2 === 0
                            ? "transparent"
                            : "rgba(255,255,255,0.01)",
                      }}
                    >
                      <td className="px-4 py-4 text-sm font-medium text-foreground">
                        {row.feature}
                      </td>
                      <CompareCell value={row.xu} highlight />
                      <CompareCell value={row.freelancer} highlight={false} />
                      <CompareCell value={row.agency} highlight={false} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
