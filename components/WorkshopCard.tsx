"use client";
import MotionFade from "./MotionFade";
import { FaWhatsapp } from "react-icons/fa";
import { ElementType } from "react";

interface WorkshopCardProps {
  slug: string;
  title: string;
  short: string;
  waLink: string;
  contents: string[];
  icon: ElementType;
  recorded?: boolean;
  highlight?: boolean;
  className?: string;
}

export default function WorkshopCard({
  slug,
  title,
  short,
  waLink,
  contents,
  icon: Icon,
  recorded,
  highlight,
  className,
}: WorkshopCardProps) {
  const titleId = `${slug}-title`;
  const descId = `${slug}-desc`;

  return (
    <MotionFade>
      <article
        id={slug}
        aria-labelledby={titleId}
        aria-describedby={descId}
        className={`card relative p-6 flex flex-col justify-between max-w-sm text-center hover:shadow-lg hover:scale-[1.02] transition-transform ${
          highlight ? "border-2 border-brand-700" : ""
        } ${className ?? ""}`}
      >
        {highlight && (
          <span className="absolute top-2 right-2 bg-brand-100 text-brand-700 text-xs font-semibold px-2 py-1 rounded">
            Destacado
          </span>
        )}

        <div>
          <div className="flex justify-center mb-4">
            <Icon className="text-brand-700 text-3xl" aria-hidden="true" />
          </div>

          <header>
            <h3 id={titleId} className="text-blue-700 font-bold text-lg">
              {title}
            </h3>
          </header>

          <p id={descId} className="mt-2 text-gray-600">
            {short}
          </p>

          <ul className="mt-4 list-disc list-inside text-gray-600 space-y-1 text-left">
            {contents.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>

          {recorded && (
            <span className="inline-block mt-3 text-xs font-medium text-green-700 bg-green-100 px-2 py-1 rounded">
              Curso grabado disponible
            </span>
          )}
        </div>

        <footer className="mt-6">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Consultar por WhatsApp sobre ${title}`}
            className="inline-flex items-center justify-center gap-2 w-full rounded bg-green-500 px-3 py-2 text-white text-sm font-medium shadow-md hover:bg-green-600 transition-all"
          >
            <FaWhatsapp className="text-lg text-white" aria-hidden="true" />
            Consultar por WhatsApp
          </a>
        </footer>
      </article>
    </MotionFade>
  );
}
