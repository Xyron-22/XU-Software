import PortfolioPage from "@/pages/portfolio/Portfolio";

export const metadata = {
  title: "Our Work & Case Studies",
  description:
    "Explore XU Software's portfolio of 150+ shipped products — from fintech dashboards and healthcare apps to e-commerce platforms and cloud infrastructure.",
};

export default function Portfolio() {
  return (
    <main style={{ background: "#020817", minHeight: "100vh" }}>
      <PortfolioPage />
    </main>
  );
}
