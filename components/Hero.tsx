"use client";
import MotionFade from "./MotionFade";

export default function Hero() {
  return (
    <section className="section-y scroll-mt-16 bg-gradient-to-br from-brand-100 via-brand-50 to-white">
      {/* ✅ Fondo degradado premium */}
      <div className="container grid gap-12 md:grid-cols-2 items-center">
        {/* Texto */}
        <MotionFade>
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-brand-900 text-center sm:text-left leading-tight">
              Acompañá a tu hijo adolescente con calma y claridad
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-700 text-center sm:text-left max-w-lg">
              Cursos online con herramientas simples y efectivas para comunicar mejor,
              motivar con confianza y poner límites claros.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center sm:justify-start">
              <a
                href="#talleres"
                className="btn btn-primary hover:scale-[1.05] transition-transform"
              >
                🚀 Ver talleres
              </a>
              <a
                href="#programa"
                className="btn btn-outline hover:scale-[1.05] transition-transform"
              >
                📘 Sobre el programa
              </a>
            </div>
          </div>
        </MotionFade>

        {/* Video */}
        <MotionFade delay={0.2}>
          <div className="video-wrapper card mx-auto shadow-lg rounded-2xl overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID_AQUI"
              title="Presentación de Valeria Merino"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </MotionFade>
      </div>
    </section>
  );
}
