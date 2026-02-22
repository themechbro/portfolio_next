import "./globals.css";
import { GeistSans } from "geist/font/sans";
import Script from "next/script";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const siteTitle =
  "Adrin T Paul | Backend Engineer | Distributed Systems | Microservices | Redis | Spring Boot";
const siteDescription =
  "Adrin T Paul, a Backend and Full-Stack Engineer building scalable systems with Node.js, Java, Next.js, PostgreSQL, Redis, and microservices.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Adrin T Paul",
  },
  description: siteDescription,
  keywords: [
    "Backend Engineer India",
    "Distributed Systems Engineer",
    "Microservices Developer",
    "Redis Caching Engineer",
    "Spring Boot Backend Developer",
    "Node.js Backend Engineer",
    "PostgreSQL Developer",
    "Scalable System Design Engineer",
    "Adrin T Paul",
    "Adrin Paul",
    "Adrin",
  ],
  applicationName: "Adrin T Paul Portfolio",
  authors: [{ name: "Adrin T Paul", url: siteUrl }],
  creator: "Adrin T Paul",
  publisher: "Adrin T Paul",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: siteTitle,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/projects/linkedup.png`,
        width: 1200,
        height: 630,
        alt: "LinkedUp case study by Adrin T Paul",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/projects/linkedup.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Adrin T Paul",
              url: siteUrl,
              sameAs: [
                "https://www.linkedin.com/in/adrintpaul/",
                "https://github.com/themechbro",
              ],
              jobTitle: "Backend Engineer",
              worksFor: {
                "@type": "Organization",
                name: "CSIR",
              },
              knowsAbout: [
                "Distributed Systems",
                "Microservices",
                "Redis",
                "PostgreSQL",
                "Spring Boot",
                "Node.js",
              ],
            }),
          }}
        />
      </head>
      <body className={`${GeistSans.className} antialiased`}>{children}</body>
    </html>
  );
}
