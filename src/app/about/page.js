import React from "react";
import AboutPage from "@/pages/about/About";

export const metadata = {
  title: "About XU Software",
  description:
    "Founded in 2016, XU Software is a 40+ person team delivering world-class custom software to startups and Fortune 500 companies worldwide.",
};

const About = () => {
  return (
    <main style={{ background: "#020817", minHeight: "100vh" }}>
      <AboutPage />
    </main>
  );
};

export default About;
