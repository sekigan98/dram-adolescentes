import MotionFade from "./MotionFade";

const testimonials = [
  {
    name: "María",
    role: "Madre",
    text: "Me ayudó a comunicarme mejor con mi hijo adolescente.",
    img: "/images/testimonial-1.jpg",
  },
  {
    name: "Carlos",
    role: "Padre",
    text: "Aprendí a poner límites sin pelearme.",
    img: "/images/testimonial-2.jpg",
  },
  {
    name: "Lucía",
    role: "Madre",
    text: "Los cursos me dieron herramientas prácticas para el día a día.",
    img: "/images/testimonial-3.jpg",
  },
];

export default function Testimonials() {
  return (
    <div
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
      aria-labelledby="testimonios-title"
    >
      {testimonials.map((t, i) => (
        <MotionFade key={t.name} delay={i * 0.1}>
          <figure className="card p-6 text-center sm:text-left hover:shadow-lg hover:scale-[1.02] transition-transform">
            <img
              src={t.img}
              alt={`Foto de ${t.name}, ${t.role}`}
              loading="lazy"
              className="mx-auto sm:mx-0 h-20 w-20 rounded-full object-cover ring-2 ring-brand-300 shadow-md"
            />
            <blockquote className="subtitle mt-4 italic text-gray-700">“{t.text}”</blockquote>
            <figcaption className="mt-3 text-brand-700 font-semibold">
              {t.name}
              {t.role && (
                <span className="block text-sm text-gray-500 font-normal">{t.role}</span>
              )}
            </figcaption>
          </figure>
        </MotionFade>
      ))}
    </div>
  );
}
