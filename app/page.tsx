"use client";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import WorkshopsGrid from "@/components/WorkshopsGrid";
import Promos from "@/components/Promos";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section
        id="talleres"
        title="Mis cursos"
        subtitle="Elegí el que mejor se adapte a vos"
        className="text-center"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          <WorkshopsGrid />
        </div>
      </Section>

      <Section
        id="promos"
        title="Promos y packs"
        subtitle="Aprovechá las ofertas especiales"
        className="text-center"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          <Promos />
        </div>
      </Section>

      <Section
        id="testimonios"
        title="Testimonios"
        subtitle="Lo que dicen otros padres"
        className="text-center"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          <Testimonials />
        </div>
      </Section>

      <FAQ className="text-center" />

      <Footer />
    </>
  );
}
