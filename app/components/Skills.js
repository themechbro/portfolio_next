import Container from "./Container";

const groups = [
  {
    title: "Programming",
    items: ["Java", "JavaScript", "Python (Basics)", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Backend",
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
  return (
    <section id="skills" className="py-24">
      <Container>
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
            Technical Skills
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
            Tools and technologies from my current stack
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {groups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)]"
            >
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
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
