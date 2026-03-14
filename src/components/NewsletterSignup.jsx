"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import ScrollFadeIn from "./shared/ScrollFadeIn";

const AVATARS = ["AC", "MT", "JP", "SR", "LC"];

export function NewsletterSignupFull() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <section
      className="py-20 dot-grid relative overflow-hidden"
      style={{ background: "#080D1A" }}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-125 h-62.5 rounded-full bg-primary/10 blur-[100px]" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <ScrollFadeIn className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Stay Ahead of the <span className="gradient-text">Curve</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Monthly insights on software dev and tech trends. No spam, ever.
          </p>

          {subscribed ? (
            <div className="flex items-center justify-center gap-3 text-emerald-400 text-lg font-medium py-4">
              <CheckCircle2 className="w-6 h-6" />
              You're in! 🎉 Check your inbox for a confirmation email.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 mb-6"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors whitespace-nowrap shadow-lg shadow-primary/25"
              >
                Subscribe →
              </button>
            </form>
          )}

          {!subscribed && (
            <div className="flex items-center justify-center gap-3">
              <div className="flex -space-x-2">
                {AVATARS.map((initials, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-background bg-linear-to-br from-primary to-secondary flex items-center justify-center text-[9px] font-bold text-white"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                Join 2,400+ developers and founders
              </span>
            </div>
          )}
        </ScrollFadeIn>
      </div>
    </section>
  );
}

export function NewsletterSignupCompact() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <div className="bg-card border border-primary/20 rounded-xl p-5 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-secondary/5 pointer-events-none" />
      <div className="relative z-10">
        <h4 className="font-semibold mb-1 text-sm">Stay Updated</h4>
        <p className="text-xs text-muted-foreground mb-4">
          Get the latest articles delivered to your inbox.
        </p>
        {subscribed ? (
          <div className="flex items-center gap-2 text-sm text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
            You're subscribed!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground rounded-lg py-2 text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Subscribe →
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
