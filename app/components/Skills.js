"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "./Container";

gsap.registerPlugin(ScrollTrigger);

const groups = [
  {
    title: "Programming",
    level: 85,
    summary: "Core language fluency for full-stack product development.",
    items: ["Java", "JavaScript", "Python (Basics)", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Backend",
    level: 91,
    summary: "API-first architecture, services, and scalable application layers.",
    items: [
      "Spring Boot",
      "REST APIs",
      "Microservices",
      "Node.js",
      "Express.js",
      "React.js",
      "Next.js",
    ],
  },
  {
    title: "Databases & Tools",
    level: 88,
    summary: "Data modeling, query performance, and practical delivery tooling.",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Git",
      "GitHub",
      "Docker (Basics)",
      "Postman",
      "Splunk",
    ],
  },
  {
    title: "Performance & UI",
    level: 82,
    summary: "User-centric performance tuning and frontend optimization habits.",
    items: [
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
      "Core Web Vitals",
      "Lighthouse",
      "Lazy Loading",
      "Code Splitting",
      "Memoization",
    ],
  },
  {
    title: "AI Workflows",
    level: 79,
    summary: "Practical AI integration and assisted development workflows.",
    items: [
      "Prompt Engineering",
      "LLM Integration",
      "OpenAI APIs",
      "DeepSeek APIs",
      "RAG Basics",
      "AI-assisted Debugging",
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef();
  const cardRefs = useRef([]);
  const barRefs = useRef([]);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from("[data-skills-heading]", {
        y: 24,
        autoAlpha: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
        },
      });

      cardRefs.current.forEach((card, index) => {
        if (!card) {
          return;
        }

        gsap.fromTo(
          card,
          {
            y: 26,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.62,
            delay: Math.min(index * 0.06, 0.24),
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
            },
          }
        );
      });

      barRefs.current.forEach((bar) => {
        if (!bar) {
          return;
        }

        const level = bar.dataset.level || "0";

        gsap.to(bar, {
          width: `${level}%`,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="py-24">
      <Container>
        <div className="mb-12" data-skills-heading>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
            Technical Skills
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
            Tools and technologies from my current stack
          </h2>
        </div>

        <div ref={sectionRef} className="grid gap-5 md:grid-cols-2">
          {groups.map((group, index) => (
            <article
              key={group.title}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)]"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-[var(--foreground)]">
                  {group.title}
                </h3>
                <p className="rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
                  {group.level}%
                </p>
              </div>

              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {group.summary}
              </p>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-[var(--surface-strong)]">
                <div
                  ref={(element) => {
                    barRefs.current[index] = element;
                  }}
                  data-level={group.level}
                  className="h-full w-0 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)]"
                />
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-1 text-xs font-medium text-[var(--muted)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
