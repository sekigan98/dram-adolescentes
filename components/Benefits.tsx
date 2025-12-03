import MotionFade from "./MotionFade";

const benefits = [
  {
    title: "Comunicación clara",
    desc: "Aprendé a escuchar y expresarte sin discusiones."
  },
  {
    title: "Motivación positiva",
    desc: "Descubrí cómo inspirar sin presionar."
  },
  {
    title: "Límites saludables",
    desc: "Poné reglas firmes pero con respeto."
  }
];

export default function Benefits() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {benefits.map((b, i) => (
        <MotionFade key={b.title} delay={i * 0.1}>
          <div className="card p-6 text-center sm:text-left">
            <h3 className="font-semibold text-brand-800">{b.title}</h3>
            <p className="mt-2 text-gray-600">{b.desc}</p>
          </div>
        </MotionFade>
      ))}
    </div>
  );
}
