import { Lightbulb, Shield, Eye } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import ScrollFadeIn from "@/components/shared/ScrollFadeIn";
import GlowCard from "@/components/shared/GlowCard";
import OnboardingTimeline from "../../components/about/OnboardingTimeline";

const VALUES = [
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We stay ahead of the curve, adopting emerging technologies to give our clients a competitive edge.",
    color: "text-yellow-400",
  },
  {
    icon: Shield,
    title: "Reliability",
    desc: "We deliver on our promises — on time, on budget, and with the quality you expect.",
    color: "text-blue-400",
  },
  {
    icon: Eye,
    title: "Transparency",
    desc: "Open communication, clear timelines, and honest reporting at every step of the process.",
    color: "text-emerald-400",
  },
];

const TEAM = [
  { name: "Alex Morgan", title: "CEO & Founder", initials: "AM" },
  { name: "Jordan Lee", title: "CTO", initials: "JL" },
  { name: "Priya Sharma", title: "Head of Design", initials: "PS" },
  { name: "Marcus Chen", title: "Lead Engineer", initials: "MC" },
  { name: "Sofia Rodriguez", title: "Project Manager", initials: "SR" },
  { name: "David Kim", title: "DevOps Lead", initials: "DK" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Us" breadcrumb="About" variant="about" />

      {/* Story section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollFadeIn>
              <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 block">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Building the Future, One Line of Code at a Time
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2016, XU Software started as a small team of
                  passionate engineers with a simple mission: to build software
                  that truly makes a difference.
                </p>
                <p>
                  Today, we're a 40+ person team working with startups and
                  Fortune 500 companies across the globe. From fintech to
                  healthcare, e-commerce to SaaS — we've shipped 150+ products
                  that serve millions of users.
                </p>
                <p>
                  Our approach combines deep technical expertise with a genuine
                  understanding of business goals. We don't just write code — we
                  solve problems.
                </p>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.2}>
              <div className="relative">
                <div className="aspect-4/3 rounded-2xl bg-linear-to-br from-primary/20 to-secondary/20 border border-border flex items-center justify-center overflow-hidden">
                  <div className="text-6xl font-bold text-white/5">
                    XU Software
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-primary/10 blur-3xl" />
                <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-secondary/10 blur-3xl" />
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="py-24 relative" style={{ background: "#080D1A" }}>
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Values"
            title="What Drives Us"
            description="The principles that guide every decision we make."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <GlowCard key={v.title} delay={i * 0.1}>
                <div
                  className={`w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center mb-5 ${v.color}`}
                >
                  <v.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {v.desc}
                </p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding timeline */}
      <OnboardingTimeline />

      {/* Team section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Team"
            title="Meet the People Behind XU Software"
            description="A talented team of engineers, designers, and strategists."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {TEAM.map((member, i) => (
              <GlowCard key={member.name} delay={i * 0.08}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {member.initials}
                  </div>
                  <h3 className="font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {member.title}
                  </p>

                  <a
                    href="#"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <svg
                      className="w-4 h-4 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                    </svg>
                  </a>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
