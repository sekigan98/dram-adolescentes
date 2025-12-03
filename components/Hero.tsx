"use client";
import MotionFade from "./MotionFade"; // Usamos tu componente corregido con y: 8

export default function Hero() {
  return (
    <section className="section-y scroll-mt-[120px] sm:scroll-mt-[160px]">
      <div className="container">
        {/* Espaciador visual solo en mobile */}
        <div className="h-[120px] sm:h-[160px]" />

        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Texto */}
          <MotionFade>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-brand-900 text-center sm:text-left">
                Cursos online para padres de adolescentes
              </h1>
              <p className="mt-4 text-base sm:text-lg text-gray-600 text-center sm:text-left">
                Valeria Merino te comparte herramientas simples y efectivas para comunicar mejor,
                motivar con calma y poner límites claros.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 justify-center sm:justify-start">
                <a href="#talleres" className="btn btn-primary">
                  Ver talleres
                </a>
                <a href="#programa" className="btn btn-outline">
                  Sobre el programa
                </a>
              </div>
            </div>
          </MotionFade>

          {/* Video */}
          <MotionFade delay={0.2}>
            <div className="video-wrapper card mx-auto">
              <iframe
                src="https://www.youtube.com/embed/VIDEO_ID_AQUI"
                title="Presentación de Valeria Merino"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-xl"
              />
            </div>
          </MotionFade>
        </div>
      </div>
    </section>
  );
}
