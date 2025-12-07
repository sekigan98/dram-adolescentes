import { workshops } from "@/app/talleres/data";
import WorkshopCard from "./WorkshopCard";

export default function WorkshopsGrid({ className }: { className?: string }) {
  return (
    <section
      aria-labelledby="talleres-title"
      className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-start ${className ?? ""}`}
    >
      {workshops.map((w) => (
        <WorkshopCard
          key={w.slug}
          slug={w.slug}
          title={w.title}
          short={w.short}
          waLink={w.waLink}
          contents={w.contents}
          icon={w.icon}
          recorded={w.recorded}
          highlight={w.highlight}
          className="max-w-md text-center min-h-[460px] flex flex-col justify-between"
        />
      ))}
    </section>
  );
}
