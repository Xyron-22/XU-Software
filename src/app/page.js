import Script from "next/script";
import HeroSection from "@/components/home/HeroSection";
import LogoMarquee from "@/components/home/LogoMarquee";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyXUSoftware from "@/components/home/WhyXUSoftware";
import StatsBand from "@/components/home/StatsBand";
import ProcessSection from "@/components/home/ProcessSection";
import Testimonials from "@/components/home/Testimonials";
import FAQSection from "@/components/home/FAQSection";
import CtaBanner from "@/components/home/CtaBanner";

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does XU Software offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "XU Software offers web development, mobile app development, cloud solutions, API integration, UI/UX design, and QA & testing.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a custom software project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timelines vary depending on scope. A typical MVP takes 8–16 weeks, while larger enterprise projects may take 4–12 months.",
      },
    },
    {
      "@type": "Question",
      name: "What industries does XU Software work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work across fintech, healthcare, e-commerce, SaaS, logistics, and more — serving startups and Fortune 500 companies.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer post-launch support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer ongoing maintenance, monitoring, and support packages after launch to ensure your product stays healthy.",
      },
    },
    {
      "@type": "Question",
      name: "What is your tech stack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use React, Next.js, Node.js, Python, AWS, Flutter, PostgreSQL, Docker, TypeScript, and GraphQL, among others.",
      },
    },
    {
      "@type": "Question",
      name: "How do you handle project communication?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use agile sprints with weekly demos, Slack for daily comms, and detailed progress reports at every milestone.",
      },
    },
    {
      "@type": "Question",
      name: "Can you take over an existing codebase?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We regularly take over and improve legacy codebases, providing audits and incremental modernisation.",
      },
    },
    {
      "@type": "Question",
      name: "What is your pricing model?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer fixed-price projects for well-defined scopes, and time-and-materials for ongoing or evolving work.",
      },
    },
    {
      "@type": "Question",
      name: "Where is XU Software based?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our headquarters are in San Francisco, CA, with a distributed team working across multiple time zones.",
      },
    },
    {
      "@type": "Question",
      name: "Do you sign NDAs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We sign NDAs before any project discussions and take IP protection seriously.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Simply contact us via our website or book a free 30-minute consultation. We'll discuss your project and provide a no-obligation proposal.",
      },
    },
    {
      "@type": "Question",
      name: "How many projects has XU Software shipped?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We've shipped 150+ products to date, serving millions of users across the globe.",
      },
    },
  ],
};

export const metadata = {
  title: "Custom Software Development Company",
  description:
    "XU Software builds fast, scalable, and reliable custom software for startups and enterprises. Web apps, mobile apps, cloud, and more.",
};

export default function Home() {
  return (
    <main style={{ background: "#020817", minHeight: "100vh" }}>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <HeroSection />
      <LogoMarquee />
      <ServicesGrid />
      <WhyXUSoftware />
      <StatsBand />
      <ProcessSection />
      <Testimonials />
      <FAQSection />
      <CtaBanner />
    </main>
  );
}
