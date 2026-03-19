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

export const metadata = {
  title: "XU Software",
  description:
    "XU Software builds fast, scalable, and reliable custom software for startups and enterprises. Web apps, mobile apps, cloud, and more.",
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does a typical project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Simple websites and apps take 2–6 weeks. More complex platforms typically run 2–4 months. We provide a detailed timeline after the discovery call.",
      },
    },
    {
      "@type": "Question",
      name: "Do you sign NDAs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, absolutely. We sign NDAs before any discovery call if requested — protecting your IP is our baseline, not an afterthought.",
      },
    },
    {
      "@type": "Question",
      name: "Who owns the source code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You do — 100%, always, regardless of which engagement you choose. Full IP transfer is standard in every project.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies do you specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "React, Next.js, Node.js, Python, AWS, Flutter, PostgreSQL, Docker, TypeScript, GraphQL, and more.",
      },
    },
    {
      "@type": "Question",
      name: "What engagement models do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Two options: Build & Deliver — a one-time project fee where we build and hand over the full source code. Or Build & Manage — project fee plus a monthly retainer where we also handle hosting, deployment, domain, and infrastructure.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work with our existing codebase?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We regularly audit and improve existing codebases — from refactoring legacy code to full modernisation.",
      },
    },
    {
      "@type": "Question",
      name: "What does your development process look like?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work in agile sprints with regular client check-ins, continuous integration, and transparent progress updates throughout the project.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in the managed retainer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The monthly retainer covers hosting management, deployments, domain and DNS configuration, email domain setup, infrastructure monitoring, and ongoing updates and bug fixes.",
      },
    },
    {
      "@type": "Question",
      name: "Can I start with Build & Deliver and switch to managed later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can start with a one-time build and later opt into the managed retainer if you'd rather not handle the technical side yourself.",
      },
    },
    {
      "@type": "Question",
      name: "What is your pricing range?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Projects start from $1,500 depending on scope. Managed retainers are discussed after project completion based on your infrastructure needs.",
      },
    },
    {
      "@type": "Question",
      name: "How do we communicate during the project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Direct communication throughout — no account managers or middlemen. You work directly with the developer via your preferred channel.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with international clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work with clients remotely across different time zones and handle all collaboration asynchronously or via scheduled calls.",
      },
    },
  ],
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
