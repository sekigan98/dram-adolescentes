import { workshops } from "@/app/talleres/data";
import WorkshopCard from "./WorkshopCard";

export default function WorkshopsGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center sm:text-left">
      {workshops.map((w) => (
        <WorkshopCard
          key={w.slug}
          slug={w.slug}
          title={w.title}
          short={w.short}
          waLink={w.waLink}
          contents={w.contents}   // 👈 ahora también pasamos los bullets
          icon={w.icon}           // 👈 y el ícono definido en data.ts
          recorded={w.recorded}   // 👈 opcional: si querés mostrar si está grabado
          highlight={w.highlight} // 👈 opcional: destacar cursos clave
        />
      ))}
    </div>
  );
}
