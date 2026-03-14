import ScrollFadeIn from "../shared/ScrollFadeIn";

const LOGOS = [
  "Acme Corp",
  "TechFlow",
  "Quantum AI",
  "NovaSoft",
  "PixelWave",
  "DataSync",
  "CloudPeak",
  "ByteForge",
  "NetGrid",
  "CyberEdge",
  "Acme Corp",
  "TechFlow",
  "Quantum AI",
  "NovaSoft",
  "PixelWave",
  "DataSync",
  "CloudPeak",
  "ByteForge",
  "NetGrid",
  "CyberEdge",
];

export default function LogoMarquee() {
  return (
    <ScrollFadeIn>
      <section
        className="py-16 border-y border-border/50 overflow-hidden relative"
        style={{ background: "#020817" }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-background to-transparent z-10" />
        <div className="flex marquee">
          {LOGOS.map((name, i) => (
            <div
              key={i}
              className="shrink-0 mx-10 text-muted-foreground/40 font-bold text-xl tracking-wider whitespace-nowrap"
            >
              {name}
            </div>
          ))}
        </div>
      </section>
    </ScrollFadeIn>
  );
}
