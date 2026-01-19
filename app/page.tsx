 "use client";
 import Hero from "@/components/Hero";
 import Section from "@/components/Section";
 import WorkshopsGrid from "@/components/WorkshopsGrid";
 import Promos from "@/components/Promos";
import CoachingProgram from "@/components/CoachingProgram";
 import Testimonials from "@/components/Testimonials";
 import FAQ from "@/components/FAQ";
 import Footer from "@/components/Footer";
 
 export default function HomePage() {
   return (
     <>
       {/* Hero principal */}
       <Hero />
 
       {/* Cursos */}
       <Section
         id="talleres"
         title="Mis cursos"
         subtitle="Elegí el que mejor se adapte a vos"
         className="text-center"
       >
         <WorkshopsGrid />
       </Section>
 
       {/* Promos */}
       <Section
         id="promos"
         title="Promos y packs"
         subtitle="Aprovechá las ofertas especiales"
         className="text-center"
       >
         <Promos />
       </Section>
 
      <Section
        id="coaching"
        title="Programa de coaching para padres"
        subtitle="8 semanas de acompañamiento para madres y padres de adolescentes"
      >
        <CoachingProgram />
      </Section>

       {/* Testimonios */}
       <Section
         id="testimonios"
         title="Testimonios"
         subtitle="Lo que dicen otros padres"
         className="text-center"
       >
         <Testimonials />
       </Section>
 
       {/* Preguntas frecuentes */}
       <FAQ />
     </>
   );
 }
