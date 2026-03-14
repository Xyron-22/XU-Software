import { Star } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";
import GlowCard from "../shared/GlowCard";

const REVIEWS = [
  {
    quote:
      "XU Software transformed our vision into a production-ready product in just 3 months. Their attention to detail and technical expertise is unmatched.",
    name: "Sarah Chen",
    role: "CTO",
    company: "TechFlow",
    initials: "SC",
  },
  {
    quote:
      "Working with XU Software felt like having an elite engineering team in-house. They shipped faster than any agency we've worked with before.",
    name: "Marcus Rivera",
    role: "Founder",
    company: "NovaSoft",
    initials: "MR",
  },
  {
    quote:
      "The quality of code and design they deliver is enterprise-grade. Our platform handles 10x the traffic without breaking a sweat.",
    name: "Aisha Patel",
    role: "VP Engineering",
    company: "DataSync",
    initials: "AP",
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "#080D1A" }}
    >
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-secondary/10 blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          label="Testimonials"
          title="What Our Clients Say"
          description="Don't take our word for it — hear from the teams we've helped scale."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <GlowCard
              key={r.name}
              delay={i * 0.1}
              className="border-t-2 border-t-primary flex flex-col relative overflow-hidden"
            >
              {/* Large faded background quotation mark */}
              <div
                aria-hidden="true"
                className="absolute top-1 left-2 font-serif text-primary select-none leading-none pointer-events-none"
                style={{ fontSize: "6rem", opacity: 0.08, lineHeight: 1 }}
              >
                "
              </div>
              <div className="flex gap-1 mb-4 relative z-10">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed italic flex-1 mb-6 relative z-10">
                "{r.quote}"
              </p>
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center text-white text-sm font-bold">
                  {r.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {r.role}, {r.company}
                  </div>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
