export const BLOG_POSTS = [
  {
    slug: "how-to-choose-tech-stack",
    title: "How to Choose the Right Tech Stack for Your Startup",
    category: "Development",
    readTime: "8 min read",
    date: "March 5, 2026",
    excerpt:
      "Choosing the wrong tech stack can sink a startup before it ever launches. Here's the framework we use to help founders make smart, future-proof technology decisions.",
    author: { name: "Alex Chen", role: "Lead Engineer", initials: "AC" },
    coverGradient: "from-blue-600/50 to-violet-600/50",
    featured: true,
    tags: ["Architecture", "Startups", "React", "Node.js"],
    toc: [
      "Why Your Tech Stack Matters More Than You Think",
      "The Five Criteria Framework",
      "Frontend: React vs Next.js vs Vue",
      "Backend: Node.js vs Python vs Go",
      "Database: SQL vs NoSQL",
      "Our Recommendation by Stage",
    ],
    body: [
      { type: "h2", text: "Why Your Tech Stack Matters More Than You Think" },
      {
        type: "p",
        text: "Every year, thousands of startups fail not because of bad ideas, but because of bad technical decisions made in the first 90 days. The tech stack you choose in week one will shape your hiring, your scalability, your development velocity, and ultimately your ability to raise money.",
      },
      {
        type: "p",
        text: "We've helped over 150 companies choose and implement their stacks. Here's what we've learned.",
      },
      { type: "h2", text: "The Five Criteria Framework" },
      {
        type: "p",
        text: "Before recommending any technology, we evaluate five dimensions: team familiarity, community size, scalability ceiling, hiring pool, and total cost of ownership. Any stack that scores poorly on two or more of these is a red flag.",
      },
      {
        type: "blockquote",
        text: "The best tech stack is almost never the most cutting-edge one. It's the one your team can ship with confidently, today.",
      },
      { type: "h2", text: "Frontend: React vs Next.js vs Vue" },
      {
        type: "p",
        text: "For most startups building consumer-facing products, we default to Next.js. It gives you SSR for SEO, a massive ecosystem, and a hiring pool that's only growing. Vue is a strong choice for teams coming from a backend-first culture. Svelte is technically impressive but the talent pool is still thin.",
      },
      {
        type: "list",
        items: [
          "React/Next.js: Best for teams prioritizing hiring and ecosystem",
          "Vue 3: Best for teams who find React's JSX cognitive overhead too high",
          "Svelte: Best for performance-critical tools where team expertise already exists",
        ],
      },
      { type: "h2", text: "Backend: Node.js vs Python vs Go" },
      {
        type: "p",
        text: "Node.js wins for most startups because of the unified JavaScript ecosystem and the availability of engineers. Python is our recommendation when the product has significant ML or data components. Go is the right choice when you're building infrastructure tools or need extreme concurrency.",
      },
      {
        type: "code",
        text: "// Node.js example: simple Express API\nconst express = require('express');\nconst app = express();\n\napp.get('/api/health', (req, res) => {\n  res.json({ status: 'ok', timestamp: Date.now() });\n});\n\napp.listen(3000);",
      },
      { type: "h2", text: "Our Recommendation by Stage" },
      {
        type: "p",
        text: "Pre-seed: Keep it boring. Next.js + Node.js + PostgreSQL on a single VPS. Don't over-engineer. Series A+: Start introducing microservices selectively where you have clear bounded contexts. Never migrate your entire monolith at once.",
      },
    ],
  },
  {
    slug: "5-signs-you-need-custom-software",
    title: "5 Signs Your Business Needs Custom Software",
    category: "Business",
    readTime: "6 min read",
    date: "February 28, 2026",
    excerpt:
      "Off-the-shelf solutions can only take you so far. Discover the five telltale signs that your business has outgrown generic software.",
    author: { name: "Maya Torres", role: "Business Analyst", initials: "MT" },
    coverGradient: "from-emerald-600/50 to-teal-600/50",
    featured: false,
    tags: ["Business", "Strategy", "Digital Transformation"],
    toc: [],
    body: [],
  },
  {
    slug: "complete-guide-cloud-migration-2025",
    title: "The Complete Guide to Cloud Migration in 2025",
    category: "Cloud",
    readTime: "12 min read",
    date: "February 20, 2026",
    excerpt:
      "Cloud migration is no longer optional for growing businesses. This comprehensive guide walks you through every step of a successful, zero-downtime migration.",
    author: { name: "James Park", role: "Cloud Architect", initials: "JP" },
    coverGradient: "from-cyan-600/50 to-sky-600/50",
    featured: false,
    tags: ["Cloud", "AWS", "DevOps", "Infrastructure"],
    toc: [],
    body: [],
  },
  {
    slug: "why-ux-design-is-underrated",
    title:
      "Why UI/UX Design is the Most Underrated Part of Software Development",
    category: "Design",
    readTime: "7 min read",
    date: "February 12, 2026",
    excerpt:
      "Most engineers treat design as an afterthought. Here's why the most successful products treat UX as a core engineering discipline — not a polish layer.",
    author: { name: "Sofia Reyes", role: "Design Lead", initials: "SR" },
    coverGradient: "from-pink-600/50 to-violet-600/50",
    featured: false,
    tags: ["Design", "UX", "Product"],
    toc: [],
    body: [],
  },
  {
    slug: "how-we-scaled-fintech-app",
    title: "How We Scaled a Fintech App to 1 Million Users",
    category: "Development",
    readTime: "10 min read",
    date: "February 5, 2026",
    excerpt:
      "A deep dive into the architectural decisions, database optimizations, and infrastructure choices that let us scale from 10,000 to 1,000,000 concurrent users.",
    author: { name: "Alex Chen", role: "Lead Engineer", initials: "AC" },
    coverGradient: "from-amber-600/50 to-orange-600/50",
    featured: false,
    tags: ["Scalability", "PostgreSQL", "Redis", "Performance"],
    toc: [],
    body: [],
  },
  {
    slug: "rest-vs-graphql",
    title: "REST vs GraphQL: Which Should You Choose?",
    category: "Development",
    readTime: "9 min read",
    date: "January 30, 2026",
    excerpt:
      "Both REST and GraphQL are powerful API paradigms — but they solve different problems. Here's our definitive guide to choosing the right one for your project.",
    author: { name: "James Park", role: "Cloud Architect", initials: "JP" },
    coverGradient: "from-violet-600/50 to-indigo-600/50",
    featured: false,
    tags: ["API", "GraphQL", "REST", "Architecture"],
    toc: [],
    body: [],
  },
];

export const CATEGORY_COLORS = {
  Development: "bg-blue-500/15 text-blue-400 border-blue-500/25",
  Business: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
  Cloud: "bg-cyan-500/15 text-cyan-400 border-cyan-500/25",
  Design: "bg-pink-500/15 text-pink-400 border-pink-500/25",
};
