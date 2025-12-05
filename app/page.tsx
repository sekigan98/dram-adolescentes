"use client";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import WorkshopsGrid from "@/components/WorkshopsGrid";
import Promos from "@/components/Promos";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer"; // 👈 agregado para cerrar el circuito

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section
        id="talleres"
        title="Mis talleres"
        subtitle="Elegí el que mejor se adapte a vos"
      >
        <WorkshopsGrid />
      </Section>

      <Section
        id="promos"
        title="Promos y packs"
        subtitle="Aprovechá las ofertas especiales"
      >
        <Promos />
      </Section>

      <Section
        id="testimonios"
        title="Testimonios"
        subtitle="Lo que dicen otros padres"
      >
        <Testimonials />
      </Section>

      <FAQ />

      <Footer /> {/* 👈 cierre con contacto, redes y formas de pago */}
    </>
  );
}


