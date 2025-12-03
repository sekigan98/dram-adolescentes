import MotionFade from "./MotionFade";

const testimonials = [
  {
    name: "María",
    text: "Me ayudó a comunicarme mejor con mi hijo adolescente.",
    img: "/testimonial-1.jpg"
  },
  {
    name: "Carlos",
    text: "Aprendí a poner límites sin pelearme.",
    img: "/testimonial-2.jpg"
  },
  {
    name: "Lucía",
    text: "Los talleres me dieron herramientas prácticas para el día a día.",
    img: "/testimonial-3.jpg"
  }
];

export default function Testimonials() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((t, i) => (
        <MotionFade key={t.name} delay={i * 0.1}>
          <div className="card p-6 text-center">
            <img
              src={t.img}
              alt={t.name}
              className="mx-auto h-16 w-16 rounded-full object-cover"
            />
            <p className="mt-4 text-gray-600">“{t.text}”</p>
            <h4 className="mt-2 font-semibold text-brand-800">{t.name}</h4>
          </div>
        </MotionFade>
      ))}
    </div>
  );
}
