"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollFadeIn from "../shared/ScrollFadeIn";

const FAQ_LEFT = [
  {
    q: "How long does a typical project take?",
    a: "Simple apps take 4–8 weeks; complex platforms typically run 3–6 months. We provide detailed timelines during the discovery phase.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes, absolutely. We sign NDAs before any discovery call if requested — protecting your IP is our baseline, not an afterthought.",
  },
  {
    q: "Who owns the source code?",
    a: "You do — 100%, from the very first line of code. Full IP transfer is standard in every engagement.",
  },
  {
    q: "What technologies do you specialize in?",
    a: "React, Next.js, Node.js, Python, AWS, Flutter, PostgreSQL, Docker, TypeScript, GraphQL, and more.",
  },
  {
    q: "Do you offer fixed-price projects?",
    a: "Yes. We offer fixed-price for well-defined scopes, plus time & materials and dedicated team models for evolving projects.",
  },
  {
    q: "Can you work with our existing codebase?",
    a: "Absolutely. We regularly audit and improve existing codebases — from refactoring to full modernisation.",
  },
];

const FAQ_RIGHT = [
  {
    q: "What does your development process look like?",
    a: "We work in agile 2-week sprints with weekly client demos, a dedicated PM, and continuous integration throughout.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes — monthly maintenance retainers and bug fix packages are available to keep your product healthy post-launch.",
  },
  {
    q: "How do we communicate during the project?",
    a: "Slack for daily comms, weekly video calls, a dedicated PM, and detailed progress reports at every milestone.",
  },
  {
    q: "What is your pricing range?",
    a: "Projects start from $5,000. Most engagements range between $15,000 and $50,000 depending on scope and complexity.",
  },
  {
    q: "Can you help with design as well?",
    a: "Yes — our in-house UI/UX team works alongside developers from day one to deliver polished, user-tested products.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We have clients across the US, Europe, Asia, and Australia, and we operate comfortably across time zones.",
  },
];

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`rounded-xl border transition-all duration-300 overflow-hidden cursor-pointer ${
        open
          ? "border-primary/40 bg-card"
          : "border-border bg-card hover:border-primary/20"
      }`}
      onClick={() => setOpen((v) => !v)}
    >
      {/* Left border accent when open */}
      <div
        className={`flex items-start gap-4 px-5 py-4 relative ${open ? "border-l-2 border-primary" : "border-l-2 border-transparent"} transition-all duration-300`}
      >
        <div className="flex-1 min-w-0">
          <span className="font-semibold text-sm leading-snug text-foreground">
            {item.q}
          </span>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-primary shrink-0 mt-0.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed border-l-2 border-primary">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQColumn({ items, delayBase }) {
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <ScrollFadeIn key={item.q} delay={delayBase + i * 0.05}>
          <FAQItem item={item} index={i} />
        </ScrollFadeIn>
      ))}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section className="py-24 relative" style={{ background: "#080D1A" }}>
      <div className="container mx-auto px-6">
        <ScrollFadeIn>
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 block">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to know before starting your project with us.
            </p>
          </div>
        </ScrollFadeIn>

        <div className="grid lg:grid-cols-2 gap-5 max-w-5xl mx-auto">
          <FAQColumn items={FAQ_LEFT} delayBase={0} />
          <FAQColumn items={FAQ_RIGHT} delayBase={0.05} />
        </div>
      </div>
    </section>
  );
}
