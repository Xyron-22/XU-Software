"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ROUTES = {
  Home: "/",
  Services: "/services",
  Portfolio: "/portfolio",
  About: "/about",
  Contact: "/contact",
  Blog: "/blog",
};

export default function GradientButton({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  className = "",
  type,
}) {
  const base =
    "inline-flex items-center gap-2 font-semibold rounded-lg px-6 py-3 text-sm transition-all duration-200";
  const variants = {
    primary: `${base} bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25 hover:shadow-primary/40`,
    ghost: `${base} border border-border text-foreground hover:border-primary/50 hover:text-primary`,
  };

  const inner = (
    <motion.span
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${variants[variant]} ${className}`}
    >
      {children}
    </motion.span>
  );

  if (type === "submit") {
    return (
      <motion.button
        type="submit"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={`${variants[variant]} ${className} w-full justify-center`}
        onClick={onClick}
      >
        {children}
      </motion.button>
    );
  }

  // Support both "to" (page name) and "href" (direct path)
  const resolvedHref =
    href || (to ? (ROUTES[to] ?? `/${to.toLowerCase()}`) : "/");

  if (to || href) {
    return <Link href={resolvedHref}>{inner}</Link>;
  }

  return <button onClick={onClick}>{inner}</button>;
}
