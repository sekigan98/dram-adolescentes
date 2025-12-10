import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Script from "next/script"; // 👈 agregado para el Pixel

export const metadata: Metadata = {
  title: "Adolescencia para Padres – Talleres Online",
  description:
    "Herramientas prácticas y cercanas para acompañar a tu hijo adolescente con confianza y claridad.",
  keywords: [
    "adolescentes",
    "padres",
    "comunicación",
    "límites",
    "autoestima",
    "talleres online",
  ],
  authors: [{ name: "Vale Merino" }],
  alternates: {
    canonical: "https://adolescencia-para-padres.vercel.app",
  },
  openGraph: {
    title: "Adolescencia para Padres – Talleres Online",
    description:
      "Aprendé herramientas prácticas para acompañar a tu hijo adolescente en temas clave.",
    url: "https://adolescencia-para-padres.vercel.app",
    siteName: "Adolescencia para Padres",
    type: "website",
    images: [
      {
        url: "https://adolescencia-para-padres.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adolescencia para Padres – Talleres Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adolescencia para Padres – Talleres Online",
    description:
      "Cursos prácticos para acompañar a tu hijo adolescente: comunicación, límites, autoestima y más.",
    images: ["https://adolescencia-para-padres.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" dir="ltr">
      <body className="bg-[var(--bg)] text-[var(--text)] antialiased leading-relaxed">
        {/* Navbar fijo arriba */}
        <Navbar />

        {/* Contenido principal */}
        <main className="pt-16">{children}</main>

        {/* Footer */}
        <Footer />

        {/* Botón flotante de WhatsApp */}
        <WhatsAppButton />

        {/* Meta Pixel (listo para activar) */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'TU_PIXEL_ID'); 
            fbq('track', 'PageView');
          `}
        </Script>
      </body>
    </html>
  );
}
