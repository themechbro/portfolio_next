import Container from "./Container";

const education = [
  {
    institution: "Noida Institute of Engineering and Technology",
    detail:
      "Bachelor of Technology in Mechanical Engineering, CGPA: 7.3/10.0",
    period: "2017 - 2021",
  },
  {
    institution: "AcSIR (Academy of Scientific and Innovative Research)",
    detail:
      "Postgraduate Diploma in Precision Measurements and Quality Control, CGPA: 7.1/10.0",
    period: "2023 - 2024",
  },
];

const certifications = [
  "Web Developer Bootcamp (Udemy, Jan 2023)",
  "Google Cybersecurity Specialization (Coursera, Jun 2025)",
];

export default function Credentials() {
  return (
    <section id="credentials" className="py-24">
      <Container>
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
            Education & Certifications
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
            Academic and professional credentials
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)]">
            <h3 className="text-lg font-semibold text-[var(--foreground)]">
              Education
            </h3>

            <div className="mt-4 space-y-4">
              {education.map((item) => (
                <div key={item.institution} className="rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] p-4">
                  <p className="font-semibold text-[var(--foreground)]">
                    {item.institution}
                  </p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{item.detail}</p>
                  <p className="mt-1 text-sm font-medium text-[var(--muted-light)]">
                    {item.period}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)]">
            <h3 className="text-lg font-semibold text-[var(--foreground)]">
              Certifications
            </h3>

            <div className="mt-4 space-y-3">
              {certifications.map((item) => (
                <p
                  key={item}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-sm font-medium text-[var(--muted)]"
                >
                  {item}
                </p>
              ))}
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
