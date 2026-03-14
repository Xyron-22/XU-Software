"use client";

import { Calendar } from "lucide-react";
import ScrollFadeIn from "../shared/ScrollFadeIn";

// Replace URL with your Calendly link.
// For inline embed, use the Calendly inline embed script instead of the link button.
const CALENDLY_URL = "https://calendly.com/xu-software";

const PILLS = [
  "✓ Free consultation",
  "✓ No commitment",
  "✓ Response within 24hrs",
];

export default function CalendlyBooking() {
  return (
    <ScrollFadeIn>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Book a Free <span className="gradient-text">30-Min Consultation</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          No sales pitch. Just an honest conversation about your project.
        </p>

        <div
          className="max-w-md mx-auto bg-card border border-border rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 mb-6"
          style={{ boxShadow: "0 0 40px hsl(217 91% 60% / 0.08)" }}
        >
          <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5">
            <Calendar className="w-7 h-7 text-primary" />
          </div>
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
            Powered by Calendly
          </div>
          <p className="text-muted-foreground text-sm mb-6">
            Pick a time that works for you. We'll send a calendar invite
            instantly.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:opacity-90 shadow-lg shadow-primary/25"
            style={{ background: "linear-gradient(135deg, #3B82F6, #8B5CF6)" }}
          >
            <Calendar className="w-4 h-4" />
            Schedule a Call →
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {PILLS.map((pill) => (
            <span
              key={pill}
              className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 border border-primary/20 text-primary"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>
    </ScrollFadeIn>
  );
}
