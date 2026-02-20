import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-12">
      <Container className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-[var(--muted)]">
          (c) {new Date().getFullYear()} Adrin Paul. All rights reserved.
        </div>
        <div className="text-sm text-[var(--muted-light)]">
          Built with Next.js and Tailwind CSS.
        </div>
      </Container>
    </footer>
  );
}
