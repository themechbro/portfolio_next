"use client";

import Container from "./Container";
import { timeline } from "../data/timeline";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
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
    <section id="experience" className="py-24">
      <Container>
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
            Roles focused on scale, quality, and delivery
          </h2>
        </div>

        <div ref={sectionRef} className="space-y-5">
          {timeline.map((item) => (
            <article
              key={`${item.company}-${item.period}`}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)]"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold tracking-wide text-blue-700 dark:bg-sky-950/70 dark:text-sky-300">
                    {item.period}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-[var(--foreground)]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[var(--muted)]">
                    {item.company}
                  </p>
                </div>

                <p className="rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
                  {item.impact}
                </p>
              </div>

              <p className="mt-4 max-w-3xl leading-relaxed text-[var(--muted)]">
                {item.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
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
