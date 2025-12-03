import Container from "./Container";

export default function Section({
  id,
  title,
  subtitle,
  children
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
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-brand-900">{title}</h2>
          {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
        </div>
        {children}
      </Container>
    </section>
  );
}
