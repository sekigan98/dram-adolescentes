import MotionFade from "./MotionFade";
import { HiChatAlt2, HiSparkles, HiShieldCheck } from "react-icons/hi"; // 👈 íconos de Heroicons

const benefits = [
  {
    title: "Comunicación clara",
    desc: "Aprendé a escuchar y expresarte sin discusiones.",
    icon: HiChatAlt2,
  },
  {
    title: "Motivación positiva",
    desc: "Descubrí cómo inspirar sin presionar.",
    icon: HiSparkles,
  },
  {
    title: "Límites saludables",
    desc: "Poné reglas firmes pero con respeto.",
    icon: HiShieldCheck,
  },
];

export default function Benefits() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {benefits.map((b, i) => {
        const Icon = b.icon;
        return (
          <MotionFade key={b.title} delay={i * 0.1}>
            <div className="card p-6 text-center sm:text-left hover:shadow-lg transition-shadow">
              <div className="flex justify-center sm:justify-start mb-4">
                <Icon className="text-brand-700 text-3xl" />
              </div>
              <h3>{b.title}</h3>
              <p className="subtitle mt-2">{b.desc}</p>
            </div>
          </MotionFade>
        );
      })}
    </div>
  );
}
