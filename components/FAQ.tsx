import MotionFade from "./MotionFade";

const faqs = [
  { title: "¿Qué pasa si no puedo asistir en vivo?", desc: "Recibís la grabación completa." },
  { title: "¿Cómo se accede a los cursos?", desc: "Por Zoom, con link enviado por WhatsApp." },
  { title: "¿Qué formas de pago aceptan?", desc: "Solo se acepta transferencia bancaria." },
];

export default function FAQ() {
  return (
    <section id="faq" className="section-y scroll-mt-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-brand-800 mb-4">
          Preguntas frecuentes
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-10">
          Respondemos las dudas más comunes antes de inscribirte
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {faqs.map((f, i) => (
            <MotionFade key={f.title} delay={i * 0.1}>
              <div className="card p-6 text-center sm:text-left">
                <h3 className="font-semibold text-brand-800">{f.title}</h3>
                <p className="mt-2 text-gray-600">{f.desc}</p>
              </div>
            </MotionFade>
          ))}
        </div>
      </div>
    </section>
  );
}
