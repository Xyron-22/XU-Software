"use client";

import {
  Globe,
  Smartphone,
  Cloud,
  Plug,
  Palette,
  ShieldCheck,
  Search,
  PenTool,
  Code2,
  TestTube2,
  Rocket,
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import GlowCard from "@/components/shared/GlowCard";
import ScrollFadeIn from "@/components/shared/ScrollFadeIn";

const SERVICES = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "Full-stack web applications built to scale with your business.",
    color: "text-blue-400",
    deliverables: [
      "Custom web application development",
      "Progressive Web Apps (PWAs)",
      "E-commerce platforms",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Beautiful, high-performance mobile experiences on any platform.",
    color: "text-violet-400",
    deliverables: [
      "iOS & Android native apps",
      "Cross-platform with Flutter/React Native",
      "App Store optimization & launch",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Reliable cloud infrastructure that scales with demand.",
    color: "text-cyan-400",
    deliverables: [
      "AWS / GCP / Azure architecture",
      "Serverless & microservices design",
      "CI/CD pipeline setup",
    ],
  },
  {
    icon: Plug,
    title: "API Integration",
    desc: "Connect your systems and automate workflows seamlessly.",
    color: "text-emerald-400",
    deliverables: [
      "RESTful & GraphQL API design",
      "Third-party service integration",
      "Webhook & event-driven systems",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Research-driven design that delights users and drives conversions.",
    color: "text-pink-400",
    deliverables: [
      "User research & personas",
      "Wireframing & prototyping",
      "Design systems & style guides",
    ],
  },
  {
    icon: ShieldCheck,
    title: "QA & Testing",
    desc: "Comprehensive quality assurance for bulletproof releases.",
    color: "text-amber-400",
    deliverables: [
      "Automated testing suites",
      "Performance & load testing",
      "Security audits & pen testing",
    ],
  },
];

const PROCESS_STEPS = [
  {
    icon: Search,
    title: "Discovery",
    desc: "Deep-dive into your business goals, technical requirements, and user needs to build a comprehensive roadmap.",
  },
  {
    icon: PenTool,
    title: "Design",
    desc: "Creating pixel-perfect wireframes, prototypes, and visual designs validated through user feedback loops.",
  },
  {
    icon: Code2,
    title: "Development",
    desc: "Agile sprints with weekly demos, clean code architecture, and continuous integration for rapid delivery.",
  },
  {
    icon: TestTube2,
    title: "Testing",
    desc: "Automated and manual QA, performance benchmarking, and cross-platform compatibility verification.",
  },
  {
    icon: Rocket,
    title: "Launch",
    desc: "Production deployment, monitoring setup, and post-launch support to ensure a smooth rollout.",
  },
];

const TECH_STACK = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "AWS",
  "Flutter",
  "PostgreSQL",
  "Docker",
  "TypeScript",
  "GraphQL",
];

const TECH_BRAND = {
  React: "#61DAFB",
  "Next.js": "#ffffff",
  "Node.js": "#68A063",
  Python: "#F7C948",
  AWS: "#FF9900",
  Flutter: "#54C5F8",
  PostgreSQL: "#336791",
  Docker: "#2496ED",
  TypeScript: "#3178C6",
  GraphQL: "#E535AB",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Our Services" breadcrumb="Services" variant="services" />

      {/* Services grid */}
      <section className="py-24" style={{ background: "#020817" }}>
        <div className="container mx-auto px-6">
          <SectionHeading
            label="What we offer"
            title="Full-Spectrum Development"
            description="Everything you need to build, launch, and scale your digital product."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map((s, i) => (
              <GlowCard key={s.title} delay={i * 0.08}>
                <div className="flex gap-5">
                  <div
                    className={`w-12 h-12 rounded-xl bg-card border border-border flex-shrink-0 flex items-center justify-center ${s.color}`}
                  >
                    <s.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {s.desc}
                    </p>
                    <ul className="space-y-2">
                      {s.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 relative" style={{ background: "#080D1A" }}>
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Process"
            title="Our Development Process"
            description="A transparent, step-by-step approach to building your product."
          />
          <div className="space-y-4">
            {PROCESS_STEPS.map((step, i) => (
              <ScrollFadeIn key={step.title} delay={i * 0.08}>
                <div className="flex gap-6 items-center bg-card border border-border rounded-xl p-6 glow-card group hover:border-primary/30 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex-shrink-0 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                        Step {i + 1}
                      </span>
                      <h3 className="font-semibold text-lg">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full border border-border text-muted-foreground/40 font-bold text-lg flex-shrink-0">
                    {i + 1}
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <TechStack />
    </>
  );
}

function TechStack() {
  return (
    <section
      className="py-24 relative dot-grid overflow-hidden"
      style={{ background: "#0A0F1E" }}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-secondary/10 blur-[100px]" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          label="Technology"
          title="Our Tech Stack"
          description="We use the best tools for the job — always."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {TECH_STACK.map((tech, i) => (
            <ScrollFadeIn key={tech} delay={i * 0.05}>
              <div
                className="bg-card border border-border rounded-xl p-5 text-center transition-all duration-200 cursor-default"
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 22px ${TECH_BRAND[tech]}66, inset 0 0 20px ${TECH_BRAND[tech]}15`;
                  e.currentTarget.style.borderColor = `${TECH_BRAND[tech]}55`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "";
                  e.currentTarget.style.borderColor = "";
                }}
              >
                <span className="text-sm font-semibold text-foreground">
                  {tech}
                </span>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
