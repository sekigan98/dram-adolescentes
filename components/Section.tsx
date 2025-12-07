import Container from "./Container";

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className,
}: SectionProps) {
  const titleId = id ? `${id}-title` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={`section-y ${id ? "scroll-mt-32" : ""} ${className ?? ""}`}
    >
      <Container>
        <header className="mb-10 text-center">
          <h2 id={titleId} className="text-blue-700 font-bold text-2xl">
            {title}
          </h2>
          {subtitle && (
            <p className="subtitle mt-2 max-w-prose mx-auto text-gray-600 text-lg">
              {subtitle}
            </p>
          )}
        </header>
        {children}
      </Container>
    </section>
  );
}
