import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

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
      <body className="pt-16 bg-[var(--bg)] text-[var(--text)] antialiased leading-relaxed">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
