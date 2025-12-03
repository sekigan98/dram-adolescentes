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
          short={w.short}   // 👈 ahora cada curso tiene su descripción corta en data.ts
          waLink={w.waLink}
        />
      ))}
    </div>
  );
}
