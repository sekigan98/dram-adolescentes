import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Benefits from "@/components/Benefits";
import WorkshopsGrid from "@/components/WorkshopsGrid";
import Promos from "@/components/Promos";   // 👈 IMPORTAR PROMOS
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />

      <Section
        id="programa"
        title="Sobre el programa"
        subtitle="Herramientas prácticas para padres de adolescentes"
      >
        <Benefits />
      </Section>

      <Section
        id="talleres"
        title="Nuestros talleres"
        subtitle="Elegí el que mejor se adapte a vos"
      >
        <WorkshopsGrid />
      </Section>

      <Section
        id="promos"
        title="Promos y sesiones"
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
      <Footer />
    </>
  );
}
