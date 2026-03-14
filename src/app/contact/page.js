import ContactPage from "@/pages/contact/Contact";

export const metadata = {
  title: "Contact Us — Start Your Project",
  description:
    "Get in touch with XU Software. Tell us about your project and we'll get back to you within 24 hours. Free consultation available.",
};

export default function Contact() {
  return (
    <main style={{ background: "#020817", minHeight: "100vh" }}>
      <ContactPage />
    </main>
  );
}
