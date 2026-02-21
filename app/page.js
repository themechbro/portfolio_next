import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Credentials from "./components/Credentials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Adrin T Paul",
        url: siteUrl,
        jobTitle: "Backend and Full-Stack Engineer",
        worksFor: {
          "@type": "Organization",
          name: "CSIR India",
        },
        sameAs: [
          "https://github.com/themechbro",
          "https://www.linkedin.com/in/adrintpaul/",
          "https://leetcode.com/u/themechbro/",
        ],
        knowsAbout: [
          "Node.js",
          "Java",
          "Spring Boot",
          "Next.js",
          "PostgreSQL",
          "Redis",
          "Microservices",
          "System Design",
        ],
      },
      {
        "@type": "WebSite",
        name: "Adrin T Paul Portfolio",
        url: siteUrl,
        description:
          "Portfolio of Adrin T Paul featuring backend and full-stack projects, experience, and engineering case studies.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <ScrollProgress />
        <Navbar />
        <Hero />
        <Timeline />
        <Projects />
        <Skills />
        <Credentials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
