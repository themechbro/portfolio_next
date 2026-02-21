import "./globals.css";
import { GeistSans } from "geist/font/sans";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const siteTitle = "Adrin T Paul | Backend & Full-Stack Engineer";
const siteDescription =
  "Portfolio of Adrin T Paul, a Backend and Full-Stack Engineer building scalable systems with Node.js, Java, Next.js, PostgreSQL, Redis, and microservices.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Adrin T Paul",
  },
  description: siteDescription,
  keywords: [
    "Adrin T Paul",
    "Backend Engineer",
    "Full-Stack Developer",
    "Node.js",
    "Java",
    "Next.js",
    "PostgreSQL",
    "Spring Boot",
    "Microservices",
    "Portfolio",
  ],
  applicationName: "Adrin T Paul Portfolio",
  authors: [{ name: "Adrin T Paul", url: siteUrl }],
  creator: "Adrin T Paul",
  publisher: "Adrin T Paul",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Adrin T Paul Portfolio",
    title: siteTitle,
    description: siteDescription,
    locale: "en_US",
    images: [
      {
        url: "/projects/linkedup.png",
        width: 1200,
        height: 630,
        alt: "LinkedUp case study and portfolio highlight by Adrin T Paul",
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
      <body className={`${GeistSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
