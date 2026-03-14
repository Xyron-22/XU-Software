import { CASE_STUDIES } from "@/lib/caseStudyData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CaseStudyHero from "@/components/portfolio/CaseStudyHero";
import CaseStudyBody from "@/components/portfolio/CaseStudyBody";

export async function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const study = CASE_STUDIES[slug];
  if (!study) return {};
  return {
    title: study.title,
    description: study.outcome,
    openGraph: {
      title: `${study.title} — Case Study`,
      description: study.outcome,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;

  const study = CASE_STUDIES[slug];
  if (!study) notFound();

  return (
    <main style={{ background: "#020817", minHeight: "100vh" }}>
      <div className="container mx-auto px-6 pt-28 pb-4">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>
      </div>

      <CaseStudyHero study={study} />
      <CaseStudyBody study={study} />
    </main>
  );
}
