import Container from "./Container";

export default function Section({
  id,
  title,
  subtitle,
  children,
  className,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const titleId = id ? `${id}-title` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={`section-y ${id ? "scroll-mt-32" : ""} ${className ?? ""}`}
    >
      <Container>
        <header className="mb-10 text-center sm:text-left">
          <h2 id={titleId}>{title}</h2>
          {subtitle && (
            <p className="subtitle mt-2 max-w-prose mx-auto sm:mx-0">
              {subtitle}
            </p>
          )}
        </header>
        {children}
      </Container>
    </section>
  );
}
