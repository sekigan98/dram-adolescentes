import MotionFade from "./MotionFade";

const faqs = [
  {
    title: "¿Qué pasa si no puedo asistir en vivo?",
    desc: "Recibís la grabación completa para verla cuando quieras.",
  },
  {
    title: "¿Cómo se accede a los cursos?",
    desc: "Por Zoom, con link enviado directamente por WhatsApp de Vale.",
  },
  {
    title: "¿Qué formas de pago aceptan?",
    desc: "Podés abonar mediante PayPal, Western Union o transferencia bancaria.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section-y scroll-mt-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2>Preguntas frecuentes</h2>
        <p className="subtitle mt-2 mb-10 max-w-prose mx-auto">
          Respondemos las dudas más comunes antes de inscribirte, para que te sientas seguro al elegir.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {faqs.map((f, i) => (
            <MotionFade key={f.title} delay={i * 0.1}>
              <div className="card p-6 text-center sm:text-left hover:shadow-lg transition-shadow">
                <h3>{f.title}</h3>
                <p className="mt-2 text-gray-600">{f.desc}</p>
              </div>
            </MotionFade>
          ))}
        </div
