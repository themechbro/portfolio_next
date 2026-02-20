"use client";

import Container from "./Container";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  ArrowRight,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/themechbro", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/adrintpaul/",
    icon: Linkedin,
  },
  { label: "Email", href: "mailto:adrinpaul29@gmail.com", icon: Mail },
  { label: "LeetCode", href: "https://leetcode.com/u/themechbro/", icon: Code2 },
];

export default function Hero() {
  const heroRef = useRef();

  useEffect(() => {
    if (!heroRef.current) {
      return;
    }

    gsap.from(heroRef.current.children, {
      y: 22,
      duration: 0.65,
      stagger: 0.1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section id="about" className="relative pt-36">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-14 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-800/25" />
        <div className="absolute right-0 top-16 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl dark:bg-cyan-800/20" />
      </div>

      <Container className="relative">
        <div ref={heroRef} className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-2xl text-[var(--accent)]">Hi, I&apos;m</p>
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/35 bg-emerald-500/10 px-4 py-1.5 text-sm font-semibold text-emerald-500">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Full Stack Developer @ CSIR India
            </p>
          </div>

          <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-[var(--foreground)] md:text-8xl">
            Adrin T Paul<span className="text-[var(--accent)]">.</span>
          </h1>

          <h2 className="mt-5 text-3xl font-semibold leading-tight text-[var(--muted)] md:text-5xl">
            I build systems that operate at scale.
          </h2>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-[var(--muted-light)]">
            Full-stack developer with 2+ years of experience building internal
            platforms and scalable backend systems using Next.js, Node.js,
            PostgreSQL, and Spring Boot microservices.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="motion-button inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-7 py-3.5 text-base font-semibold text-white transition hover:bg-[var(--accent-strong)]"
            >
              View My Work
              <ArrowRight className="button-icon h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href="/resume/Adrin_Paul_resume_2yoe_.pdf"
              download
              className="motion-button inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-7 py-3.5 text-base font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <Download className="button-icon h-4 w-4" aria-hidden="true" />
              Download Resume
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm font-semibold">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="motion-button inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <Icon className="button-icon h-4 w-4" aria-hidden="true" />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
