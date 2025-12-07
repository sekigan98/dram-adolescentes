import MotionFade from "./MotionFade";

const faqs = [
  {
    title: "¿Los cursos son en vivo?",
    desc: "No, todos los cursos están grabados y disponibles para que los veas cuando quieras.",
  },
  {
    title: "¿Cómo se accede a los cursos?",
    desc: "Recibís acceso por WhatsApp de Vale, con link y materiales listos para usar.",
  },
  {
    title: "¿Qué formas de pago aceptan?",
    desc: "Podés abonar mediante PayPal, Western Union o transferencia bancaria.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="section-y scroll-mt-32 px-4 sm:px-6 lg:px-8 text-center"
    >
      <div className="max-w-4xl mx-auto">
        <h2 id="faq-title" className="text-blue-700 font-bold text-2xl">
          Preguntas frecuentes
        </h2>
        <p className="subtitle mt-2 mb-10 max-w-prose mx-auto text-gray-600 text-lg">
          Respondemos las dudas más comunes antes de inscribirte, para que te sientas seguro al elegir.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {faqs.map((f, i) => (
            <MotionFade key={f.title} delay={i * 0.1}>
              <article
                className="card p-6 text-center hover:shadow-lg transition-shadow max-w-sm"
                role="group"
                aria-labelledby={`faq-${i}-title`}
                aria-describedby={`faq-${i}-desc`}
              >
                <h3
                  id={`faq-${i}-title`}
                  className="font-semibold text-brand-800"
                >
                  {f.title}
                </h3>
                <p id={`faq-${i}-desc`} className="mt-2 text-gray-600">
                  {f.desc}
                </p>
              </article>
            </MotionFade>
          ))}
        </div>
      </div>
    </section>
  );
}

