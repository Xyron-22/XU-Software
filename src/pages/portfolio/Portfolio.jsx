"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";

const FILTERS = ["All", "Web", "Mobile", "Cloud"];

const PROJECTS = [
  {
    title: "E-Commerce Platform",
    client: "StyleMart",
    category: "Web",
    desc: "A full-stack retail platform driving 340% revenue growth in 6 months.",
    color: "from-blue-600/20 to-violet-600/20",
    slug: "ecommerce-platform",
  },
  {
    title: "Fintech Dashboard",
    client: "ClearBank",
    category: "Web",
    desc: "Real-time analytics platform that cut manual reporting time by 80%.",
    color: "from-emerald-600/20 to-cyan-600/20",
    slug: "fintech-dashboard",
  },
  {
    title: "Healthcare App",
    client: "MedConnect",
    category: "Mobile",
    desc: "HIPAA-compliant telehealth platform serving 50,000+ patients.",
    color: "from-pink-600/20 to-red-600/20",
    slug: "healthcare-app",
  },
  {
    title: "NovaPay Mobile",
    client: "NovaSoft",
    category: "Mobile",
    desc: "A fintech mobile app serving 500K+ users across iOS and Android.",
    color: "from-violet-600/20 to-pink-600/20",
    slug: null,
  },
  {
    title: "CloudSync Platform",
    client: "DataSync",
    category: "Cloud",
    desc: "Multi-tenant SaaS infrastructure handling 99.99% uptime.",
    color: "from-cyan-600/20 to-blue-600/20",
    slug: null,
  },
  {
    title: "NetGrid Infra",
    client: "NetGrid",
    category: "Cloud",
    desc: "Kubernetes-based infrastructure supporting 50+ microservices.",
    color: "from-amber-600/20 to-orange-600/20",
    slug: null,
  },
];

function CardInner({ project }) {
  return (
    <>
      <div
        className={`h-48 bg-linear-to-br ${project.color} relative flex items-center justify-center`}
      >
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="text-4xl font-bold text-white/10">
          {project.title.split(" ")[0]}
        </div>
        {project.slug && (
          <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
            <span className="flex items-center gap-1 text-sm font-medium text-primary">
              View Case Study <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
          {project.category}
        </span>
        <h3 className="font-semibold text-lg mt-3 mb-1">{project.client}</h3>
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
    active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

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
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
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
          </motion.div>
        </div>
      </section>
    </>
  );
}
