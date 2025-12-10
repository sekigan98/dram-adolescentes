import MotionFade from "./MotionFade";
import { HiGift, HiCollection } from "react-icons/hi";

const promos = [
  {
    title: "Promo: llevás 2 y te regalo 1", // 🥇 primero el más elegido
    desc: "Con la adquisición de 2 cursos te regalo uno completamente gratis.",
    waLink:
      "https://wa.me/5492236861939?text=Hola%20Vale%2C%20quiero%20consultar%20por%20la%20promo%20llevás%202%20y%20te%20regalo%201",
    icon: HiGift,
    badge: "Más elegido",
  },
  {
    title: "Pack 2 cursos + 1 sesión individual",
    desc: "Elegí dos cursos y sumá una sesión personalizada con Vale.",
    waLink:
      "https://wa.me/5492236861939?text=Hola%20Vale%2C%20quiero%20consultar%20por%20la%20promo%202%20cursos%20+%201%20sesión",
    icon: HiCollection,
  },
];

export default function Promos() {
  return (
    <section
      id="promos"
      aria-labelledby="promos-title"
      className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center items-start"
    >
      {promos.map((p, i) => {
        const Icon = p.icon;
        return (
          <MotionFade key={p.title} delay={i * 0.1}>
            <div className="card relative p-6 flex flex-col justify-between max-w-sm text-center hover:shadow-lg hover:scale-[1.02] transition-transform">
              {p.badge && (
                <span className="absolute top-2 right-2 bg-brand-100 text-brand-700 text-xs font-semibold px-2 py-1 rounded">
                  {p.badge}
                </span>
              )}
              <div>
                <div className="flex justify-center mb-4">
                  <Icon className="text-brand-700 text-3xl" aria-hidden="true" />
                </div>
                <h3 className="text-blue-700 font-bold text-lg">{p.title}</h3>
                <p className="mt-2 text-gray-600">{p.desc}</p>
              </div>
              <a
                href={p.waLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Consultar por WhatsApp sobre ${p.title}`}
                className="mt-6 inline-block bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-2 rounded shadow w-full text-center transition-colors"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </MotionFade>
        );
      })}
    </section>
  );
}
