"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="section-y pt-24"> {/* pt-24 para compensar navbar fijo */}
      <div className="container grid md:grid-cols-2 gap-8 items-center max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-900">
            Cursos online para padres de adolescentes
          </h1>
          <p className="mt-4 text-lg text-gray-600">
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

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="video-wrapper card"
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

