import BlogPage from "@/pages/blog/Blog";

export const metadata = {
  title: "Insights & Resources",
  description:
    "Engineering deep-dives, product strategy, and lessons from 150+ shipped projects. The XU Software blog.",
};

export default function Blog() {
  return (
    <main style={{ background: "#020817", minHeight: "100vh" }}>
      <BlogPage />
    </main>
  );
}
