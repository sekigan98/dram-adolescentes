import Container from "./Container";

export default function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`section-y ${id ? "scroll-mt-32" : ""}`} // ✅ compensar navbar fijo
    >
      <Container>
        <div className="mb-10 text-center sm:text-left">
          <h2>{title}</h2>
          {subtitle && (
            <p className="subtitle mt-2 max-w-prose mx-auto sm:mx-0">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </Container>
    </section>
  );
}
