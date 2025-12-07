"use client";
import MotionFade from "./MotionFade";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="section-y scroll-mt-16 hero-gradient"
    >
      <div className="container grid gap-12 md:grid-cols-2 items-center">
        {/* Texto */}
        <MotionFade>
          <div className="text-center">
            <h1
              id="hero-title"
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-brand-900 leading-tight"
            >
              Acompañá a tu hijo adolescente con herramientas efectivas
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-lg mx-auto">
              Con mis <strong>cursos online para padres</strong> y sesiones individuales vas a aprender
              herramientas para dejar de padecer la adolescencia de tu hijo y empezar a disfrutarla.
              Comprobado personalmente con mis 4 hijos y las cientos de familias que acompañé.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a
                href="#talleres"
                aria-label="Ver cursos disponibles"
                className="btn btn-primary hover:scale-[1.05] transition-transform"
              >
                🎓 Quiero cursos
              </a>
              <a
                href="https://wa.me/5492236861939?text=Hola%20Vale%2C%20me%20interesa%20una%20sesión%20individual%20para%20transformar%20mi%20vínculo%20con%20mi%20hijo.%20¿Me%20contás%20más?"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Consultar sesiones individuales por WhatsApp"
                className="btn-emotional hover:scale-[1.05] transition-transform"
              >
                ❤️ Quiero sesiones
              </a>
            </div>
          </div>
        </MotionFade>

        {/* Video propio */}
        <MotionFade delay={0.2}>
          <div className="video-wrapper card mx-auto shadow-lg rounded-2xl overflow-hidden max-w-lg">
            <video
              src="/videos/hero.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              controls
              poster="/videos/hero-poster.jpg"
              aria-label="Video introductorio de Adolescencia para Padres"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </MotionFade>
      </div>
    </section>
  );
}


