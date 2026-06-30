import { Star } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";
import GlowCard from "../shared/GlowCard";

const REVIEWS = [
  {
    quote:
      "GreazeBook has significantly improved the way we manage our operations. Everything from inventory and sales to accounting is now connected in one place, making our daily workflow much more efficient.",
    name: "Xyron Uy",
    role: "Owner",
    company: "GreazeBook",
    initials: "XU",
  },
  {
    quote:
      "Everything we want and need was provided, even exceeded our expectations! The Design tool is very useful for our prospect clients and also helps us very much. We're grateful we worked with XU Software.",
    name: "Marc Nussbaum",
    role: "Owner",
    company: "M&E Construction & Renovations LLC",
    initials: "MN",
  },
  {
    quote:
      "I’m very happy with the website. The design looks great and everything works perfectly. Thank you Xy for being responsive and making the process easy.",
    name: "Christine Gonzales",
    role: "Founder & CEO",
    company: "GlobeX Solutions",
    initials: "CG",
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
