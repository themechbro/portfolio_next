"use client";

import Container from "./Container";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef();

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    gsap.from(sectionRef.current, {
      y: 24,
      duration: 0.65,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 84%",
      },
    });
  }, []);

  return (
    <section id="contact" className="py-24">
      <Container>
        <div
          ref={sectionRef}
          className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)] md:p-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
            Contact
          </p>

          <div className="mt-4 grid gap-8 md:grid-cols-[1.6fr_1fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
                Let&apos;s build something that performs at scale
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-[var(--muted)]">
                Open to full-time roles and high-impact freelance projects in
                backend engineering, full-stack systems, and
                architecture-focused product work.
              </p>

              <a
                href="mailto:adrinpaul29@gmail.com"
                className="motion-button mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)]"
              >
                <Mail className="button-icon h-4 w-4" aria-hidden="true" />
                adrinpaul29@gmail.com
              </a>

              <a
                href="/resume/Adrin_Paul_resume_2yoe_.pdf"
                download
                className="motion-button ml-3 mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <Download className="button-icon h-4 w-4" aria-hidden="true" />
                Download Resume
              </a>
            </div>

            <div className="space-y-3">
              <a
                href="https://github.com/themechbro"
                target="_blank"
                rel="noopener noreferrer"
                className="motion-button flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <span className="inline-flex items-center gap-2">
                  <Github className="button-icon h-4 w-4" aria-hidden="true" />
                  GitHub
                </span>
                <ArrowUpRight className="button-icon h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="https://www.linkedin.com/in/adrintpaul/"
                target="_blank"
                rel="noopener noreferrer"
                className="motion-button flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <span className="inline-flex items-center gap-2">
                  <Linkedin className="button-icon h-4 w-4" aria-hidden="true" />
                  LinkedIn
                </span>
                <ArrowUpRight className="button-icon h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="https://leetcode.com/u/themechbro/"
                target="_blank"
                rel="noopener noreferrer"
                className="motion-button flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <span className="inline-flex items-center gap-2">
                  <Code2 className="button-icon h-4 w-4" aria-hidden="true" />
                  LeetCode
                </span>
                <ArrowUpRight className="button-icon h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
