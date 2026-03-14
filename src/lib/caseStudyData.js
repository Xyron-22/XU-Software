export const CASE_STUDIES = {
  "ecommerce-platform": {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    category: "Retail",
    client: "StyleMart",
    industry: "Retail",
    timeline: "6 months",
    outcome:
      "Transformed a brick-and-mortar retailer into a digital-first brand, driving 340% revenue growth in under a year.",
    challenge:
      "StyleMart's legacy website couldn't handle peak traffic, had poor mobile UX, and lacked real-time inventory sync — causing thousands of lost sales daily and mounting customer frustration.",
    solution:
      "We rebuilt the entire platform with a React storefront, Node.js microservices backend, real-time inventory sync via Redis, Stripe payments, and an auto-scaling AWS deployment that handles 10× peak load without breaking a sweat.",
    tech: [
      "React",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Stripe",
      "Redis",
      "TypeScript",
      "GraphQL",
    ],
    results: [
      { value: "340%", label: "Revenue Increase" },
      { value: "2.1M", label: "Monthly Visitors" },
      { value: "99.9%", label: "Uptime" },
    ],
    testimonial: {
      quote:
        "XU Software didn't just build us a website — they built us a competitive advantage. Our online sales now outperform our in-store revenue for the first time in company history.",
      name: "James Whitfield",
      role: "CEO",
      company: "StyleMart",
      initials: "JW",
    },
    coverGradient: "from-blue-600/50 to-violet-600/50",
  },
  "fintech-dashboard": {
    slug: "fintech-dashboard",
    title: "Fintech Dashboard",
    category: "Finance",
    client: "ClearBank",
    industry: "Finance",
    timeline: "4 months",
    outcome:
      "Delivered a real-time financial analytics platform that cut manual reporting time by 80% and unified 12 data sources.",
    challenge:
      "ClearBank's analysts were drowning in spreadsheets — spending 40+ hours per week manually compiling reports from 12 disparate data sources, with no real-time visibility and mounting compliance risk.",
    solution:
      "We built a GraphQL federation data pipeline, a high-performance React dashboard with live charts, role-based access control, automated PDF report generation, and deployed the entire stack on GCP with zero downtime CI/CD.",
    tech: [
      "React",
      "GraphQL",
      "Python",
      "PostgreSQL",
      "GCP",
      "Docker",
      "TypeScript",
      "Redis",
    ],
    results: [
      { value: "80%", label: "Time Saved on Reports" },
      { value: "12", label: "Data Sources Unified" },
      { value: "$2.4M", label: "Annual Cost Savings" },
    ],
    testimonial: {
      quote:
        "Our analysts went from spending entire weeks on reports to having live dashboards at their fingertips. XU Software fundamentally changed how we operate.",
      name: "Priya Nair",
      role: "Head of Data",
      company: "ClearBank",
      initials: "PN",
    },
    coverGradient: "from-emerald-600/50 to-cyan-600/50",
  },
  "healthcare-app": {
    slug: "healthcare-app",
    title: "Healthcare App",
    category: "Healthcare",
    client: "MedConnect",
    industry: "Healthcare",
    timeline: "8 months",
    outcome:
      "HIPAA-compliant telehealth platform now serving 50,000+ patients across 3 countries with a 4.9-star app store rating.",
    challenge:
      "MedConnect needed a secure, HIPAA-compliant telehealth platform with video consultations, specialist matching, and EHR integration — all while passing rigorous healthcare compliance audits across three regulatory jurisdictions.",
    solution:
      "We built a Flutter mobile app, React web portal, Node.js API with end-to-end encryption, WebRTC video consultations, HL7 FHIR integration for EHR compatibility, and navigated full HIPAA certification from architecture through deployment.",
    tech: [
      "Flutter",
      "React",
      "Node.js",
      "WebRTC",
      "PostgreSQL",
      "AWS",
      "Docker",
      "FHIR",
    ],
    results: [
      { value: "50K+", label: "Active Patients" },
      { value: "3", label: "Countries Served" },
      { value: "4.9★", label: "App Store Rating" },
    ],
    testimonial: {
      quote:
        "The level of technical expertise and compliance knowledge XU Software brought to this project was extraordinary. They delivered on schedule and passed every single audit.",
      name: "Dr. Olusegun Adeyemi",
      role: "CTO",
      company: "MedConnect",
      initials: "OA",
    },
    coverGradient: "from-pink-600/50 to-rose-600/50",
  },
};

export const CASE_STUDY_LIST = Object.values(CASE_STUDIES);
