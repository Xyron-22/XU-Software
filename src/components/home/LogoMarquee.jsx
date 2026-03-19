import ScrollFadeIn from "../shared/ScrollFadeIn";

const LOGOS = [
  "GlobeX Solutions Agency",
  "M&E Construction & Renovations LLC",
  "GreazeBook",
];

// Duplicate enough times to always fill the screen
const REPEATED = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

export default function LogoMarquee() {
  return (
    <ScrollFadeIn>
      <section
        className="py-16 border-y border-border/50 overflow-hidden relative"
        style={{ background: "#020817" }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-background to-transparent z-10" />

        {/* Single scrolling row — translateX(-50%) works when content is exactly 2x wide */}
        <div className="flex">
          <div className="flex shrink-0 marquee">
            {REPEATED.map((name, i) => (
              <div
                key={i}
                className="shrink-0 mx-10 text-muted-foreground/40 font-bold text-xl tracking-wider whitespace-nowrap"
              >
                {name}
              </div>
            ))}
          </div>
          <div className="flex shrink-0 marquee" aria-hidden="true">
            {REPEATED.map((name, i) => (
              <div
                key={i}
                className="shrink-0 mx-10 text-muted-foreground/40 font-bold text-xl tracking-wider whitespace-nowrap"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollFadeIn>
  );
}
