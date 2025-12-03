import MotionFade from "./MotionFade";

const promos = [
  {
    title: "Pack 2 cursos + 1 sesión individual",
    desc: "Elegí dos cursos y sumá una sesión personalizada con Valeria.",
    waLink:
      "https://wa.me/5492236861939?text=Hola%20Valeria%2C%20quiero%20consultar%20por%20la%20promo%202%20cursos%20+%201%20sesión"
  },
  {
    title: "Promo 2 cursos + 1 de regalo",
    desc: "Comprá dos cursos y llevate un tercero totalmente gratis.",
    waLink:
      "https://wa.me/5492236861939?text=Hola%20Valeria%2C%20quiero%20consultar%20por%20la%20promo%202%20cursos%20+%201%20gratis"
  },
  {
    title: "Sesión individual",
    desc: "Agendá una sesión personalizada para trabajar tus dudas específicas.",
    waLink:
      "https://wa.me/5492236861939?text=Hola%20Valeria%2C%20quiero%20agendar%20una%20sesión%20individual"
  }
];

export default function Promos() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {promos.map((p, i) => (
        <MotionFade key={p.title} delay={i * 0.1}>
          <div className="card p-6 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-brand-800">{p.title}</h3>
              <p className="mt-2 text-gray-600">{p.desc}</p>
            </div>
            <a
              href={p.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-4 w-full py-2"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </MotionFade>
      ))}
    </div>
  );
}
