import {
  Globe,
  Smartphone,
  Cloud,
  Plug,
  Palette,
  ShieldCheck,
} from "lucide-react";
import SectionHeading from "../shared/SectionHeading";
import GlowCard from "../shared/GlowCard";

const SERVICES = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "Scalable web applications built with modern frameworks and best practices.",
    color: "text-blue-400",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Native and cross-platform mobile experiences for iOS and Android.",
    color: "text-violet-400",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Cloud infrastructure design, migration, and optimization on AWS/GCP/Azure.",
    color: "text-cyan-400",
  },
  {
    icon: Plug,
    title: "API Integration",
    desc: "Seamless third-party integrations and custom API development.",
    color: "text-emerald-400",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "User-centered design that converts visitors into loyal customers.",
    color: "text-pink-400",
  },
  {
    icon: ShieldCheck,
    title: "QA & Testing",
    desc: "Comprehensive testing strategies to ensure bulletproof quality.",
    color: "text-amber-400",
  },
];

export default function ServicesGrid() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "#0A0F1E" }}
    >
      {/* Blue orb top-right */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/15 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          label="Services"
          title="What We Do"
          description="End-to-end software development services tailored to your business needs."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <GlowCard key={s.title} delay={i * 0.08}>
              <div
                className={`w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center mb-5 ${s.color}`}
              >
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.desc}
              </p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
