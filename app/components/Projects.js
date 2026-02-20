"use client";

import Container from "./Container";
import { projects } from "../data/projects";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef();

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    gsap.from(sectionRef.current.children, {
      y: 24,
      duration: 0.65,
      stagger: 0.14,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 82%",
      },
    });
  }, []);

  return (
    <section id="projects" className="py-24">
      <Container>
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
            Projects
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
            Featured work with measurable outcomes
          </h2>
        </div>

        <div ref={sectionRef} className="space-y-5">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)]"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-[var(--muted-light)]">
                    {project.period}
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                    {project.title}
                  </h3>
                </div>

                <a
                  href={project.link}
                  className="motion-button inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-2 text-sm font-semibold text-[var(--accent)] transition hover:border-[var(--accent)] hover:text-[var(--accent-strong)]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                  <ArrowUpRight className="button-icon h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              <p className="mt-4 rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-sm font-medium text-[var(--accent)]">
                {project.impact}
              </p>

              <p className="mt-4 max-w-3xl leading-relaxed text-[var(--muted)]">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-1 text-xs font-medium text-[var(--muted)]"
                  >
                    {tech}
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
