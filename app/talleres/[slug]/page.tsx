import { workshops } from "../data";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import Breadcrumb from "@/components/Breadcrumb";
import MotionFade from "@/components/MotionFade";
import { FaBookOpen } from "react-icons/fa";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return workshops.map((w) => ({ slug: w.slug }));
}

export default function WorkshopPage({ params }: Params) {
  const w = workshops.find((x) => x.slug === params.slug);
  if (!w) return notFound();

  return (
    <Section title={w.title} subtitle="Información completa del taller">
      <Breadcrumb />

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Contenidos del taller */}
        <MotionFade>
          <div className="card p-5 lg:col-span-2">
            <h3 className="font-semibold text-brand-800">Contenidos</h3>
            <ul className="mt-3 space-y-2">
              {w.contents.map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <FaBookOpen className="text-brand-600" />
                  <span className="text-gray-700">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </MotionFade>

        {/* Aside con descripción y botón WhatsApp */}
        <MotionFade delay={0.1}>
          <aside className="card p-5 space-y-4">
            <p className="text-gray-700">
              {w.short} {w.recorded ? "Incluye acceso a la grabación." : ""}
            </p>
            <a
              href={w.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full py-3"
            >
              Consultar por WhatsApp
            </a>
            <a href="/" className="btn btn-outline w-full py-3">
              Volver
            </a>
          </aside>
        </MotionFade>
      </div>
    </Section>
  );
}
