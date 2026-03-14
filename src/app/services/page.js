import ServicesPage from "@/pages/services/Serivces";

export const metadata = {
  title: "Software Development Services",
  description:
    "Full-spectrum software development services: web apps, mobile, cloud, API integration, UI/UX design, and QA. Built to scale.",
};

const Services = () => {
  return (
    <main style={{ background: "#020817", minHeight: "100vh" }}>
      <ServicesPage />
    </main>
  );
};

export default Services;
