"use client";

import Container from "./Container";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#credentials", label: "Credentials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className="fixed top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--surface)] backdrop-blur-xl"
    >
      <Container className="flex items-center justify-between py-4">
        <a
          href="#about"
          className="text-lg font-semibold tracking-tight text-[var(--foreground)] md:text-xl"
        >
          <span className="text-[var(--accent)]">Adrin</span> Paul
        </a>

        <nav className="hidden gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-[var(--muted)] transition hover:bg-white/80 hover:text-[var(--foreground)] dark:hover:bg-slate-900"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <DarkModeToggle />
      </Container>
    </header>
  );
}
