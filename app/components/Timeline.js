"use client";

import Container from "./Container";
import { timeline } from "../data/timeline";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
  const sectionRef = useRef();
  const progressLineRef = useRef();
  const itemRefs = useRef([]);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from("[data-timeline-heading]", {
        y: 24,
        autoAlpha: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
        },
      });

      if (progressLineRef.current) {
        gsap.fromTo(
          progressLineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "bottom 35%",
              scrub: true,
            },
          }
        );
      }

      itemRefs.current.forEach((item, index) => {
        if (!item) {
          return;
        }

        gsap.fromTo(
          item,
          {
            y: 36,
            x: index % 2 === 0 ? -26 : 26,
            autoAlpha: 0,
          },
          {
            y: 0,
            x: 0,
            autoAlpha: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 84%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="py-24">
      <Container>
        <div className="mb-12" data-timeline-heading>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
            Roles focused on scale, quality, and delivery
          </h2>
        </div>

        <div ref={sectionRef} className="relative">
          <div className="pointer-events-none absolute left-3 top-2 h-[calc(100%-0.5rem)] w-px bg-[var(--border)] md:left-1/2 md:-translate-x-1/2" />
          <div
            ref={progressLineRef}
            className="pointer-events-none absolute left-3 top-2 h-[calc(100%-0.5rem)] w-px origin-top scale-y-0 bg-gradient-to-b from-[var(--accent)] via-[var(--accent-light)] to-transparent md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={`${item.company}-${item.period}`}
                ref={(element) => {
                  itemRefs.current[index] = element;
                }}
                className={`relative pl-10 md:pl-0 ${
                  index % 2 === 0
                    ? "md:pr-[calc(50%+1.75rem)]"
                    : "md:pl-[calc(50%+1.75rem)]"
                }`}
              >
                <span className="absolute left-3 top-8 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-[var(--background)] bg-[var(--accent)] shadow-[0_0_0_6px_rgba(37,99,235,0.14)] md:left-1/2" />

                <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)] transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/40">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="inline-flex rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-1 text-xs font-semibold tracking-wide text-[var(--accent)]">
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

                  {item.outcomes?.length > 0 && (
                    <div className="mt-4 rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
                        Outcome Snapshot
                      </p>
                      <ul className="mt-2 space-y-1.5 text-sm text-[var(--muted)]">
                        {item.outcomes.map((outcome) => (
                          <li key={outcome}>- {outcome}</li>
                        ))}
                      </ul>
                    </div>
                  )}

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
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
