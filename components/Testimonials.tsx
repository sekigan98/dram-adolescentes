import MotionFade from "./MotionFade";

const testimonials = [
  {
    name: "Laura",
    role: "Mamá de Jere (15 años)",
    text: `Llegué a Vale en busca de herramientas, porque el estudio de mi hijo era un tema de continuas peleas con él. 
    Gracias a su curso de técnicas de estudio y las sesiones, todo mejoró mucho. 
    De 8 materias bajas, terminó rindiendo 2 a fin de año y bien. 
    Es el primer verano que lo vamos a pasar tranquilos y vamos a poder irnos de vacaciones en familia. 
    Vale nos cambió la dinámica familiar para bien. ¡Mil gracias!`,
    img: "/images/testimonial-laura.jpg",
  },
  {
    name: "Cecilia",
    role: "Mamá de Lucas (15 años, Tucumán)",
    text: `Gracias a Valeria y a las sesiones que tuvimos pude encontrar el camino para comunicarme con mi hijo. 
    Cambié mis formas y el cambio también llegó en él. 
    Hoy puedo decir que Vale me guió hasta donde estoy hoy. 
    Estaba sin saber qué hacer y sintiéndome mala madre, era duro pero era lo que sentía. 
    Ahora me siento acompañada y con herramientas.`,
    img: "/images/testimonial-cecilia.jpg",
  },
  {
    name: "Marcela",
    role: "Mamá de 2 adolescentes (New Jersey, EEUU)",
    text: `Me ayudó a entender y reaccionar diferente ante las dificultades que se presentan con mis adolescentes. 
    Comprendí que 2 min son suficientes para expresarme. 
    Ser más tolerante cuando no están decididos porque les cuesta más tiempo procesar la información, comprender su agotamiento ya que es un complejo proceso el crecer. 
    Debo acompañar de lejos escuchando, haciendo preguntas abiertas para ayudarlos de manera más eficaz. 
    La paciencia la adquiero con voluntad, también poniendo límites claros y consecuencias anticipadas cortas en ese momento. 
    Mi casa, con todo aquello que aprendí, ya no es un campo de batalla ni un ring donde debe salir un ganador. 
    Mi accionar es más consciente de lo que necesitan ellos, trabajo todos los días en ese desafío. 
    Lo importante es que las herramientas adquiridas con Vale hacen la diferencia en la vida de mis hijos y en la mía.`,
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



