"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollFadeIn from "@/components/shared/ScrollFadeIn";

const FAQ_LEFT = [
  {
    q: "How long does a typical project take?",
    a: "Simple websites and apps take 2–6 weeks. More complex platforms typically run 2–4 months. We provide a detailed timeline after the discovery call.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes, absolutely. We sign NDAs before any discovery call if requested — protecting your IP is our baseline, not an afterthought.",
  },
  {
    q: "Who owns the source code?",
    a: "You do — 100%, always, regardless of which engagement you choose. Full IP transfer is standard in every project.",
  },
  {
    q: "What technologies do you specialize in?",
    a: "React, Next.js, Node.js, Python, AWS, Flutter, PostgreSQL, Docker, TypeScript, GraphQL, and more.",
  },
  {
    q: "What engagement models do you offer?",
    a: "Two options: Build & Deliver — a one-time project fee where we build and hand over the full source code. Or Build & Manage — project fee plus a monthly retainer where we also handle hosting, deployment, domain, and infrastructure.",
  },
  {
    q: "Can you work with our existing codebase?",
    a: "Absolutely. We regularly audit and improve existing codebases — from refactoring legacy code to full modernisation.",
  },
];

const FAQ_RIGHT = [
  {
    q: "What does your development process look like?",
    a: "We work in agile sprints with regular client check-ins, continuous integration, and transparent progress updates throughout the project.",
  },
  {
    q: "What is included in the managed retainer?",
    a: "The monthly retainer covers hosting management, deployments, domain and DNS configuration, email domain setup, infrastructure monitoring, and ongoing updates and bug fixes.",
  },
  {
    q: "Can I start with Build & Deliver and switch to managed later?",
    a: "Yes. You can start with a one-time build and later opt into the managed retainer if you'd rather not handle the technical side yourself.",
  },
  {
    q: "What is your pricing range?",
    a: "Projects start from $1,500 depending on scope. Managed retainers are discussed after project completion based on your infrastructure needs.",
  },
  {
    q: "How do we communicate during the project?",
    a: "Direct communication throughout — no account managers or middlemen. You work directly with the developer via your preferred channel.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We work with clients remotely across different time zones and handle all collaboration asynchronously or via scheduled calls.",
  },
];

function FAQItem({ item }) {
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
      <div
        className={`flex items-start gap-4 px-5 py-4 relative ${
          open ? "border-l-2 border-primary" : "border-l-2 border-transparent"
        } transition-all duration-300`}
      >
        <div className="flex-1 min-w-0">
          <span className="font-semibold text-sm leading-snug text-foreground">
            {item.q}
          </span>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-primary shrink-0 mt-0.5 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
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
          <FAQItem item={item} />
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
