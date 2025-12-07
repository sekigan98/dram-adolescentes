import MotionFade from "./MotionFade";

const testimonials = [
  {
    name: "Laura",
    role: "Mamá de Jere (15 años)",
    text: `Llegué a Vale buscando herramientas porque el estudio de mi hijo era motivo de peleas constantes. Gracias al curso de técnicas de estudio y las sesiones, todo mejoró: de ocho materias bajas, terminó rindiendo dos y bien. Es el primer verano que pasamos tranquilos y podemos disfrutar en familia. Vale nos cambió la dinámica para bien. ¡Mil gracias!`,
    img: "/images/testimonial-laura.jpg",
  },
  {
    name: "Cecilia",
    role: "Mamá de Lucas (15 años, Tucumán)",
    text: `Gracias a Valeria y a las sesiones pude encontrar el camino para comunicarme con mi hijo. Cambié mis formas y el cambio también llegó en él. Hoy me siento acompañada y con herramientas, cuando antes me sentía perdida y mala madre. Vale me guió hasta este lugar y estoy muy agradecida.`,
    img: "/images/testimonial-cecilia.jpg",
  },
  {
    name: "Marcela",
    role: "Mamá de 2 adolescentes (New Jersey, EEUU)",
    text: `Me ayudó a reaccionar diferente ante las dificultades con mis adolescentes. Aprendí que dos minutos alcanzan para expresarme, a ser más tolerante cuando necesitan más tiempo para procesar, y a acompañarlos escuchando y haciendo preguntas abiertas. Con límites claros y consecuencias anticipadas, mi casa dejó de ser un campo de batalla. Las herramientas que adquirí con Vale hacen la diferencia en la vida de mis hijos y en la mía.`,
    img: "/images/testimonial-marcela.jpg", // 👉 agrega la foto si la tenés
  },
];

export default function Testimonials() {
  return (
    <div
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-start"
      aria-labelledby="testimonios-title"
    >
      {testimonials.map((t, i) => (
        <MotionFade key={t.name} delay={i * 0.1}>
          <figure className="card p-6 max-w-sm text-center flex flex-col justify-between hover:shadow-lg hover:scale-[1.02] transition-transform">
            <img
              src={t.img}
              alt={`Foto de ${t.name}, ${t.role}`}
              loading="lazy"
              className="mx-auto h-20 w-20 rounded-full object-cover ring-2 ring-brand-300 shadow-md"
            />
            <blockquote className="subtitle mt-4 italic text-gray-700 leading-relaxed whitespace-pre-line text-center">
              “{t.text}”
            </blockquote>
            <figcaption className="mt-3 text-blue-700 font-bold text-center">
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



