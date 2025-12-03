import MotionFade from "./MotionFade";

export default function WorkshopCard({
  slug,
  title,
  short,
  waLink
}: {
  slug: string;
  title: string;
  short: string;
  waLink: string;
}) {
  return (
    <MotionFade>
      <div className="card p-6 flex flex-col justify-between text-center sm:text-left">
        <div>
          <h3 className="font-semibold text-brand-800">{title}</h3>
          <p className="mt-2 text-gray-600">{short}</p>
        </div>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-4 w-full py-2"
        >
          Consultar por WhatsApp
        </a>
      </div>
    </MotionFade>
  );
}
