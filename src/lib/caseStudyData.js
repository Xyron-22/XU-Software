export const CASE_STUDIES = {
  "globex-solutions": {
    slug: "globex-solutions",
    title: "Digital Services Company Website",
    category: "Digital Services",
    client: "GlobeX Solutions",
    industry: "Digital Services",
    timeline: "3 Weeks",
    techCategory: "Web",
    desc: "A modern digital services website that drives more clients and keeping them connected to the business.",
    outcome:
      "Built a professional web presence for GlobeX Solutions that showcases their services, establishes credibility, and gives potential clients a direct way to connect and get in touch.",
    challenge:
      "GlobeX Solutions had no web presence and was relying entirely on word of mouth and manual outreach to acquire clients. They needed a professional website that clearly communicates their services and makes it easy for potential clients to reach them.",
    solution:
      "We designed and developed a modern, responsive website from scratch — featuring a clean services showcase, a contact form for direct client inquiries, and a professional brand identity that positions GlobeX Solutions as a credible digital services provider.",
    tech: ["React", "Next.js", "Tailwind CSS", "Node.js"],
    results: [
      { value: "3 Weeks", label: "Delivered On Time" },
      { value: "100%", label: "Mobile Responsive" },
      { value: "Live", label: "Deployed & Managed" },
    ],
    testimonial: {
      quote:
        "I’m very happy with the website. The design looks great and everything works perfectly. Thank you Xy for being responsive and making the process easy.",
      name: "Christine Gonzales",
      role: "Founder & CEO",
      company: "GlobeX Solutions",
      initials: "CG",
    },
    attributes: ["SEO-Optimized", "Responsive", "Secured", "Fast"],
    href: "https://www.globexagency.us",
    logo: "/images/client_logos/globexsolutions-logo.webp",
    screenshots: {
      desktop:
        "/images/client_project_screenshots/globex-solutions/desktop.PNG",
    },
    coverGradient: "from-blue-600/50 to-violet-600/50",
  },

  "me-construction-renovations-llc": {
    slug: "me-construction-renovations-llc",
    title:
      "Construction & Renovations Company Website And 3D Design Tool Interface",
    category: "Construction & Renovations",
    client: "M&E Construction & Renovations LLC",
    industry: "Construction & Renovations",
    timeline: "6 Weeks",
    techCategory: "Web",
    desc: "An interactive 3D bathroom design tool that lets customers visualize and configure their dream bathroom before buying — turning browsers into buyers.",
    outcome:
      "Transformed a static brochure website into a fully interactive design platform — giving customers the ability to visualize their own custom bathroom in 3D, driving deeper engagement and converting more potential clients into actual sales.",
    challenge:
      "M&E Construction had a simple brochure website that wasn't converting visitors into leads. Potential clients couldn't visualize the end result of a renovation, making it hard to commit to a purchase. They needed a way to engage customers earlier in the buying journey and turn interest into action.",
    solution:
      "We built a full web application featuring an interactive 3D bathroom design tool powered by Three.js — users enter a fully rendered 3D bathroom environment, browse the product catalog, and place real products directly into the scene to see exactly how their renovation will look. Designs are saved by email so users can return and continue later.",
    tech: ["React", "Three.js", "Node.js", "PostgreSQL"],
    results: [
      { value: "3D", label: "Interactive Bathroom Design Tool" },
      { value: "Higher", label: "Client Conversion Rate" },
      { value: "Self-Serve", label: "Campaign & Subscriber Management" },
    ],
    testimonial: {
      quote:
        "Our analysts went from spending entire weeks on reports to having live dashboards at their fingertips. XU Software fundamentally changed how we operate.",
      name: "Priya Nair",
      role: "Head of Data",
      company: "ClearBank",
      initials: "PN",
    },
    attributes: ["SEO-Optimized", "Responsive", "Secured", "Fast"],
    href: "https://home.meconstructionrenovations.com/en",
    logo: "/images/client_logos/me-construction-renovations-llc-logo.jpg",
    screenshots: {
      desktop:
        "/images/client_project_screenshots/me-construction-renovations-llc/desktop.PNG",
    },
    coverGradient: "from-emerald-600/50 to-cyan-600/50",
  },
};

export const CASE_STUDY_LIST = Object.values(CASE_STUDIES);
