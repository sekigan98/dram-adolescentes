import MotionFade from "./MotionFade";

export default function WorkshopCard({
  slug,
  title,
  short,
  waLink,
  contents,
  icon: Icon,
  recorded,
  highlight,
}: {
  slug: string;
  title: string;
  short: string;
  waLink: string;
  contents: string[];
  icon: React.ElementType;
  recorded?: boolean;
  highlight?: boolean;
}) {
  return (
    <MotionFade>
      <div
        className={`card p-6 flex flex-col justify-between text-center sm:text-left hover:shadow-lg transition-shadow ${
          highlight ? "border-2 border-brand-700" : ""
        }`}
      >
        <div>
          {/* Ícono */}
          <div className="flex justify-center sm:justify-start mb-4">
            <Icon className="text-brand-700 text-3xl" />
          </div>

          {/* Título del curso */}
          <h3 className="font-semibold text-brand-800">{title}</h3>

          {/* Descripción corta */}
          <p className="mt-2 text-gray-600">{short}</p>

          {/* Bullets */}
          <ul className="mt-4 list-disc list-inside text-gray-600 space-y-1 text-left">
            {contents.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>

          {/* Badge opcional */}
          {recorded && (
            <span className="inline-block mt-3 text-xs font-medium text-green-700 bg-green-100 px-2 py-1 rounded">
              Curso grabado disponible
            </span>
          )}
        </div>

        {/* CTA */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-6 w-full py-2"
        >
          Consultar con Vale por WhatsApp
        </a>
      </div>
    </MotionFade>
  );
}
