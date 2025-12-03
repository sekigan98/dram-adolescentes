import MotionFade from "./MotionFade";

const testimonials = [
  {
    name: "María",
    text: "Me ayudó a comunicarme mejor con mi hijo adolescente.",
    img: "/testimonial-1.jpg",
  },
  {
    name: "Carlos",
    text: "Aprendí a poner límites sin pelearme.",
    img: "/testimonial-2.jpg",
  },
  {
    name: "Lucía",
    text: "Los talleres me dieron herramientas prácticas para el día a día.",
    img: "/testimonial-3.jpg",
  },
];

export default function Testimonials() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((t, i) => (
        <MotionFade key={t.name} delay={i * 0.1}>
          <div className="card p-6 text-center sm:text-left hover:shadow-lg transition-shadow">
            <img
              src={t.img}
              alt={t.name}
              className="mx-auto sm:mx-0 h-16 w-16 rounded-full object-cover ring-2 ring-brand-200"
            />
            <p className="subtitle mt-4 italic">“{t.text}”</p>
            <h4 className="mt-3 text-brand-700 font-semibold">{t.name}</h4>
          </div>
        </MotionFade>
      ))}
    </div>
  );
}
