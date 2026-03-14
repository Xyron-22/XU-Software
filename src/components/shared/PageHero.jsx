"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

/* ── Services: floating code symbols ── */
const SYM = [
  { t: "</>", x: "7%", y: "22%", d: 0 },
  { t: "{}", x: "83%", y: "18%", d: 1.4 },
  { t: "()", x: "16%", y: "68%", d: 0.7 },
  { t: "=>", x: "72%", y: "58%", d: 2.1 },
  { t: "#", x: "44%", y: "78%", d: 1.1 },
  { t: "@", x: "91%", y: "38%", d: 0.3 },
  { t: ";", x: "29%", y: "32%", d: 1.8 },
  { t: "const", x: "58%", y: "24%", d: 2.4 },
  { t: "&&", x: "4%", y: "52%", d: 0.9 },
  { t: "||", x: "53%", y: "53%", d: 0.5 },
  { t: "=>", x: "19%", y: "82%", d: 2.2 },
  { t: "</>", x: "68%", y: "78%", d: 1.6 },
];

function ServicesBg() {
  return (
    <>
      <div className="absolute inset-0 gradient-mesh opacity-40" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-125 h-75 rounded-full bg-primary/15 blur-[100px]" />
      </div>
      {SYM.map((s, i) => (
        <div
          key={i}
          aria-hidden="true"
          className="absolute font-mono font-bold select-none text-primary"
          style={{
            left: s.x,
            top: s.y,
            fontSize: i % 3 === 0 ? "1.5rem" : "1.1rem",
            opacity: 0.12,
            animation: `float ${4 + (i % 3)}s ease-in-out infinite`,
            animationDelay: `${s.d}s`,
            willChange: "transform",
          }}
        >
          {s.t}
        </div>
      ))}
    </>
  );
}

/* ── Portfolio: blurred mosaic thumbnails ── */
const MOSAIC_COLORS = [
  "from-blue-600/30 to-violet-600/30",
  "from-violet-600/30 to-pink-600/30",
  "from-cyan-600/30 to-blue-600/30",
  "from-emerald-600/30 to-cyan-600/30",
  "from-pink-600/30 to-red-600/30",
  "from-amber-600/30 to-orange-600/30",
];

function PortfolioBg() {
  return (
    <>
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-1 opacity-25 blur-sm scale-105">
        {MOSAIC_COLORS.map((c, i) => (
          <div key={i} className={`bg-linear-to-br ${c}`} />
        ))}
      </div>
      <div className="absolute inset-0 bg-[#020817]/80" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-125 h-75 rounded-full bg-secondary/15 blur-[110px]" />
      </div>
    </>
  );
}

/* ── About: floating dot particles ── */
const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  x: `${(i * 41 + 5) % 94}%`,
  y: `${(i * 29 + 8) % 88}%`,
  size: i % 4 === 0 ? 2 : 1,
  dur: 9 + (i % 6) * 1.5,
  del: (i * 0.35) % 5,
}));

function AboutBg() {
  return (
    <>
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-primary/15 blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-secondary/15 blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          aria-hidden="true"
          className="absolute rounded-full bg-white"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            animation: `float-up ${p.dur}s linear infinite`,
            animationDelay: `${p.del}s`,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </>
  );
}

/* ── Contact: shifting gradient + pulsing orb ── */
function ContactBg() {
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #020817, #1E0A3C, #020817)",
          backgroundSize: "400% 400%",
          animation: "bg-shift 9s ease infinite",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-105 h-105 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.28) 0%, transparent 70%)",
            animation: "pulse-glow 4s ease-in-out infinite",
            willChange: "transform, opacity",
          }}
        />
      </div>
    </>
  );
}

export default function PageHero({ title, breadcrumb, variant = "default" }) {
  return (
    <section className="pt-32 pb-24 relative overflow-hidden">
      {variant === "default" && (
        <div className="absolute inset-0 gradient-mesh opacity-60" />
      )}
      {variant === "services" && <ServicesBg />}
      {variant === "portfolio" && <PortfolioBg />}
      {variant === "about" && <AboutBg />}
      {variant === "contact" && <ContactBg />}

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-background to-transparent pointer-events-none z-10" />

      <div className="container mx-auto px-6 relative z-20">
        {breadcrumb && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-muted-foreground mb-6"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{breadcrumb}</span>
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text inline-block"
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
}
