import ScrollFadeIn from "./ScrollFadeIn";

export default function SectionHeading({ label, title, description }) {
  return (
    <ScrollFadeIn className="text-center mb-16">
      {label && (
        <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 block">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </ScrollFadeIn>
  );
}
