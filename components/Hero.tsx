"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="section-y pt-[120px] sm:pt-[160px] scroll-mt-[120px] sm:scroll-mt-[160px]">
  <div className="container grid gap-12 md:grid-cols-2 items-center">
    {/* Texto */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
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
    </motion.div>

    {/* Video */}
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="video-wrapper card mx-auto"
    >
      <iframe
        src="https://www.youtube.com/embed/VIDEO_ID_AQUI"
        title="Presentación de Valeria Merino"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full rounded-xl"
      />
    </motion.div>
  </div>
</section>
  );
}


