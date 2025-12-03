import MotionFade from "./MotionFade";
import { HiGift, HiUser, HiCollection } from "react-icons/hi"; // 👈 íconos ilustrativos

const promos = [
  {
    title: "Pack 2 cursos + 1 sesión individual",
    desc: "Elegí dos cursos y sumá una sesión personalizada con Vale.",
    waLink:
      "https://wa.me/5492236861939?text=Hola%20Vale%2C%20quiero%20consultar%20por%20la%20promo%202%20cursos%20+%201%20sesión",
    icon: HiCollection,
  },
  {
    title: "Promo: si llevás 2 te regalo 1",
    desc: "El curso de regalo es uno de los que menos se venden y no se puede elegir.",
    waLink:
      "https://wa.me/5492236861939?text=Hola%20Vale%2C%20quiero%20consultar%20por%20la%20promo%20si%20llevás%202%20te%20regalás%201",
    icon: HiGift,
  },
  {
    title: "Sesión individual",
    desc: "Agendá una sesión personalizada para trabajar tus dudas específicas con Vale.",
    waLink:
      "https://wa.me/5492236861939?text=Hola%20Vale%2C%20quiero%20agendar%20una%20sesión%20individual",
    icon: HiUser,
  },
];

export default function Promos() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {promos.map((p, i) => {
        const Icon = p.icon;
        return (
          <MotionFade key={p.title} delay={i * 0.1}>
            <div className="card p-6 flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div>
                {/* Ícono */}
                <div className="flex justify-center sm:justify-start mb-4">
                  <Icon className="text-brand-700 text-3xl" />
                </div>
                {/* Título y descripción */}
                <h3>{p.title}</h3>
                <p className="subtitle mt-2">{p.desc}</p>
              </div>
              {/* CTA */}
              <a
                href={p.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-6 w-full"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </MotionFade>
        );
      })}
    </div>
  );
}
