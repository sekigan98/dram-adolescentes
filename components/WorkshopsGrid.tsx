import { workshops } from "@/app/talleres/data";
import WorkshopCard from "./WorkshopCard";

export default function WorkshopsGrid({ className }: { className?: string }) {
  return (
    <section
      aria-labelledby="talleres-title"
      className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center sm:text-left ${className ?? ""}`}
    >
      {workshops.map((w) => (
        <WorkshopCard
          key={w.slug}
          slug={w.slug}
          title={w.title}
          short={w.short}
          waLink={w.waLink}
          contents={w.contents}   // 👈 bullets del curso
          icon={w.icon}           // 👈 ícono definido en data.ts
          recorded={w.recorded}   // 👈 badge opcional
          highlight={w.highlight} // 👈 destacar cursos clave
        />
      ))}
    </section>
  );
}
