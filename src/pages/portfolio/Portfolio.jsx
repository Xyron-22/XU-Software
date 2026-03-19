"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CASE_STUDY_LIST } from "@/lib/caseStudyData";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";

const FILTERS = ["All", "Web", "Mobile", "Cloud"];

const PROJECTS = CASE_STUDY_LIST;

function CardInner({ project }) {
  return (
    <>
      <div
        className={`h-64 bg-linear-to-br ${project.coverGradient} relative flex items-center justify-center`}
      >
        <div className="absolute inset-0 dot-grid opacity-20" />

        {/* Client logo or fallback initials */}
        {project.logo ? (
          <img
            src={project.logo}
            alt={`${project.client} logo`}
            className="h-64 w-full object-cover drop-shadow-lg"
          />
        ) : (
          <div className="text-4xl font-bold text-white/10">
            {project.client}
          </div>
        )}

        {project.slug && (
          <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
            <span className="flex items-center gap-1 text-sm font-medium text-primary underline">
              View Case Study <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        {/* Attribute chips */}
        {project.attributes && project.attributes.length > 0 && (
          <div className="flex flex-wrap gap-0.5">
            {project.attributes.map((attr) => (
              <div
                key={attr}
                className="flex items-center bg-background border border-border rounded-full px-2 py-1"
              >
                <span className="text-xs font-semibold text-muted-foreground">
                  {attr}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-2 mb-1 flex items-center gap-0.5">
          <span className="text-xs font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
            {project.techCategory}
          </span>
          <h3 className="font-semibold text-lg ">{project.client}</h3>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed">
          {project.desc}
        </p>
      </div>
    </>
  );
}

export default function PortfolioPage() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.techCategory === active);

  return (
    <>
      <PageHero title="Our Work" breadcrumb="Portfolio" variant="portfolio" />

      <section className="py-24" style={{ background: "#080D1A" }}>
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Portfolio"
            title="Projects We're Proud Of"
            description="A selection of work that showcases our expertise across industries."
          />

          {/* Filter tabs */}
          <div className="flex justify-center gap-2 mb-12">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === f
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "text-muted-foreground hover:text-foreground border border-border hover:border-primary/40"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.slug || project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2, delay: i * 0.04 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group bg-card border border-border rounded-xl overflow-hidden glow-card"
                >
                  {project.slug ? (
                    <Link href={`/portfolio/${project.slug}`} className="block">
                      <CardInner project={project} />
                    </Link>
                  ) : (
                    <CardInner project={project} />
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
