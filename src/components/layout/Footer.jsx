"use client";

import Link from "next/link";
import Logo from "@/components/Logo";

const ROUTES = {
  Home: "/",
  Services: "/services",
  Portfolio: "/portfolio",
  About: "/about",
  Contact: "/contact",
  Blog: "/blog",
};

const COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "About Us", page: "About" },
      { label: "Our Work", page: "Portfolio" },
      { label: "Contact", page: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Development", page: "Services" },
      { label: "Mobile Apps", page: "Services" },
      { label: "Cloud Solutions", page: "Services" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "UI/UX Design", page: "Services" },
      { label: "API Integration", page: "Services" },
      { label: "QA & Testing", page: "Services" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "GitHub", external: "https://github.com" },
      { label: "LinkedIn", external: "https://linkedin.com" },
      { label: "Twitter", external: "https://twitter.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <Logo size="lg" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building exceptional software solutions for startups and
              enterprises worldwide.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-foreground text-sm mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={ROUTES[link.page] ?? "/"}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} XU Software. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { name: "GitHub", href: "https://github.com" },
              { name: "LinkedIn", href: "https://linkedin.com" },
              { name: "Twitter", href: "https://twitter.com" },
            ].map(({ name, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <SocialIcon name={name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }) {
  const paths = {
    GitHub:
      "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
    LinkedIn:
      "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z",
    Twitter:
      "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  };

  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d={paths[name]} />
    </svg>
  );
}
