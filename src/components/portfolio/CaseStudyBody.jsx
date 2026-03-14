"use client";

import { motion } from "framer-motion";
import ScrollFadeIn from "@/components/shared/ScrollFadeIn";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const TECH_COLORS = {
  React: "#61DAFB",
  "Next.js": "#fff",
  "Node.js": "#68A063",
  Python: "#F7C948",
  AWS: "#FF9900",
  Flutter: "#54C5F8",
  PostgreSQL: "#336791",
  Docker: "#2496ED",
  TypeScript: "#3178C6",
  GraphQL: "#E535AB",
  Redis: "#FF4438",
  GCP: "#4285F4",
  WebRTC: "#60A5FA",
  FHIR: "#F87171",
};

const GALLERY_LABELS = [
  "Dashboard View",
  "Analytics Panel",
  "Mobile Responsive",
];
const GALLERY_GRADIENTS = [
  "from-blue-600/25 to-violet-600/25",
  "from-violet-600/25 to-pink-600/25",
  "from-cyan-600/25 to-blue-600/25",
];

function BrowserFrame({ label, gradient }) {
  return (
    <div
      className="rounded-xl overflow-hidden border border-border"
      style={{ boxShadow: "0 0 30px hsl(217 91% 60% / 0.1)" }}
    >
      <div className="flex items-center gap-1.5 px-3 py-2.5 bg-card border-b border-border">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <span className="ml-2 text-xs text-muted-foreground font-mono truncate">
          {label}
        </span>
      </div>
      <div
        className={`h-40 bg-linear-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}
      >
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="w-16 h-10 rounded-lg bg-white/5 border border-white/10" />
      </div>
    </div>
  );
}

export default function CaseStudyBody({ study }) {
  return (
    <div style={{ background: "#020817" }}>
      {/* Challenge & Solution */}
      <section className="py-20" style={{ background: "#080D1A" }}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <ScrollFadeIn>
              <div
                className="bg-card border border-border rounded-xl p-8 h-full"
                style={{ borderTop: "2px solid hsl(0 62% 40%)" }}
              >
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-5">
                  <span className="text-red-400 text-lg">⚡</span>
                </div>
                <h2 className="text-xl font-bold mb-4 text-foreground">
                  The Challenge
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {study.challenge}
                </p>
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn delay={0.1}>
              <div
                className="bg-card border border-border rounded-xl p-8 h-full"
                style={{ borderTop: "2px solid hsl(217 91% 60%)" }}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                  <span className="text-primary text-lg">✦</span>
                </div>
                <h2 className="text-xl font-bold mb-4 text-foreground">
                  Our Solution
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {study.solution}
                </p>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <ScrollFadeIn>
            <h2 className="text-2xl font-bold mb-7">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {study.tech.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-full text-sm font-semibold border"
                  style={{
                    color: TECH_COLORS[t] || "#94a3b8",
                    borderColor: `${TECH_COLORS[t] || "#94a3b8"}40`,
                    background: `${TECH_COLORS[t] || "#94a3b8"}12`,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Results */}
      <section className="py-20" style={{ background: "#080D1A" }}>
        <div className="container mx-auto px-6">
          <ScrollFadeIn>
            <h2 className="text-3xl font-bold mb-10 text-center">
              Results That Speak for Themselves
            </h2>
          </ScrollFadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {study.results.map((r, i) => (
              <ScrollFadeIn key={r.label} delay={i * 0.1}>
                <div
                  className="bg-card border border-border rounded-xl p-8 text-center transition-all duration-300 hover:border-primary/40"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 30px hsl(217 91% 60% / 0.15), inset 0 0 20px hsl(217 91% 60% / 0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div className="text-5xl md:text-6xl font-extrabold gradient-text mb-3">
                    {r.value}
                  </div>
                  <div className="text-muted-foreground text-sm font-medium">
                    {r.label}
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollFadeIn>
            <div className="bg-card border border-l-4 border-l-primary border-border rounded-xl p-10 relative overflow-hidden max-w-3xl mx-auto">
              <div
                aria-hidden="true"
                className="absolute top-0 left-4 font-serif text-primary select-none leading-none pointer-events-none"
                style={{ fontSize: "8rem", opacity: 0.06, lineHeight: 1 }}
              >
                "
              </div>
              <p className="text-lg md:text-xl italic text-muted-foreground leading-relaxed mb-8 relative z-10">
                "{study.testimonial.quote}"
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                  {study.testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold">{study.testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {study.testimonial.role}, {study.testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20" style={{ background: "#080D1A" }}>
        <div className="container mx-auto px-6">
          <ScrollFadeIn>
            <h2 className="text-2xl font-bold mb-8">Screenshots</h2>
          </ScrollFadeIn>
          <div className="grid md:grid-cols-3 gap-5">
            {GALLERY_LABELS.map((label, i) => (
              <ScrollFadeIn key={label} delay={i * 0.1}>
                <BrowserFrame label={label} gradient={GALLERY_GRADIENTS[i]} />
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-125 h-75 rounded-full bg-primary/10 blur-[100px]" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <ScrollFadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for <span className="gradient-text">Similar Results?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Let's build something remarkable together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/25"
                style={{
                  background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                }}
              >
                Start Your Project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-sm border border-[#3B82F6] text-[#3B82F6] transition-all hover:bg-[#3B82F6] hover:text-white active:scale-95"
              >
                View More Work
              </Link>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </div>
  );
}
