"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import PageHero from "@/components/shared/PageHero";
import GradientButton from "@/components/shared/GradientButton";
import ScrollFadeIn from "@/components/shared/ScrollFadeIn";
import CalendlyBooking from "../../components/contact/CalendlyBooking";

const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: "hello@xusoftware.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
  { icon: MapPin, label: "Location", value: "San Francisco, CA" },
  { icon: Clock, label: "Hours", value: "Mon–Fri, 9AM–6PM PST" },
];

function SocialIcon({ name }) {
  const paths = {
    GitHub:
      "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
    LinkedIn:
      "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z",
    Twitter:
      "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  };
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d={paths[name]} />
    </svg>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const update = (field, value) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <>
      <PageHero
        title="Let's Work Together"
        breadcrumb="Contact"
        variant="contact"
      />

      <section className="py-24 dot-grid" style={{ background: "#080D1A" }}>
        <div className="container mx-auto px-6">
          <CalendlyBooking />

          <div className="grid lg:grid-cols-5 gap-16">
            {/* Left — contact info */}
            <ScrollFadeIn className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Have a project in mind? We'd love to hear about it. Reach out
                and let's discuss how we can help bring your vision to life.
              </p>

              <div className="space-y-6 mb-10">
                {CONTACT_INFO.map((info) => (
                  <div key={info.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">
                        {info.label}
                      </div>
                      <div className="font-medium text-sm">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  {[
                    { name: "GitHub", href: "https://github.com" },
                    { name: "LinkedIn", href: "https://linkedin.com" },
                    { name: "Twitter", href: "https://twitter.com" },
                  ].map(({ name, href }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                    >
                      <SocialIcon name={name} />
                    </a>
                  ))}
                </div>
              </div>
            </ScrollFadeIn>

            {/* Right — form */}
            <ScrollFadeIn delay={0.15} className="lg:col-span-3">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-card border border-border rounded-xl p-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      We'll get back to you within 24 hours. 🚀
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="bg-card border border-border rounded-xl p-8 space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={form.name}
                          onChange={(e) => update("name", e.target.value)}
                          required
                          className="bg-background border-border focus:ring-primary focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                          required
                          className="bg-background border-border focus:ring-primary focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          placeholder="Acme Inc."
                          value={form.company}
                          onChange={(e) => update("company", e.target.value)}
                          className="bg-background border-border focus:ring-primary focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range</Label>
                        <Select
                          value={form.budget}
                          onValueChange={(v) => update("budget", v)}
                        >
                          <SelectTrigger className="bg-background border-border">
                            <SelectValue placeholder="Select budget" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under5k">Under $5k</SelectItem>
                            <SelectItem value="5k-15k">$5k – $15k</SelectItem>
                            <SelectItem value="15k-50k">$15k – $50k</SelectItem>
                            <SelectItem value="50k+">$50k+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Description</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project, goals, and timeline..."
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        required
                        rows={5}
                        className="bg-background border-border focus:ring-primary focus:border-primary resize-none"
                      />
                    </div>

                    <GradientButton type="submit">
                      Send Message →
                    </GradientButton>
                  </motion.form>
                )}
              </AnimatePresence>
            </ScrollFadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
