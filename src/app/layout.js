import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/shared/BackToTop";
import ScrollProgressBar from "@/components/shared/ScrollProgressBar";
import CursorGlow from "@/components/shared/CursorGlow";
import CrispChat from "@/components/CrispChat";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
  title: {
    default: "XU Software — Custom Software Development Company",
    template: "%s | XU Software",
  },
  description:
    "XU Software builds fast, scalable, and reliable custom software for startups and enterprises. Web apps, mobile apps, cloud, and more.",
  keywords: [
    "software development",
    "custom software",
    "web development",
    "mobile app development",
    "XU Software",
  ],
  authors: [{ name: "XU Software" }],
  openGraph: {
    type: "website",
    siteName: "XU Software",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@xusoftware",
    creator: "@xusoftware",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-background text-foreground font-inter">
        <div className="noise-overlay" aria-hidden="true" />
        <ScrollProgressBar />
        <CursorGlow />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <CookieConsent />
        <CrispChat />
      </body>
    </html>
  );
}
