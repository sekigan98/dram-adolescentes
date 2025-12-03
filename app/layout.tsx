import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";

// 👉 Metadata global para SEO y previews
export const metadata: Metadata = {
  title: "Adolescencia para Padres – Talleres Online",
  description:
    "Cursos prácticos para acompañar a tu hijo adolescente: comunicación, límites, autoestima y más.",
  keywords: [
    "adolescentes",
    "padres",
    "comunicación",
    "límites",
    "autoestima",
    "talleres online",
  ],
  authors: [{ name: "Valeria" }],
  openGraph: {
    title: "Adolescencia para Padres – Talleres Online",
    description:
      "Aprendé herramientas prácticas para acompañar a tu hijo adolescente en temas clave.",
    url: "https://adolecencia-para-padres.vercel.app",
    siteName: "Adolescencia para Padres",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Adolescencia para Padres – Talleres Online",
    description:
      "Cursos prácticos para acompañar a tu hijo adolescente: comunicación, límites, autoestima y más.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}
        <WhatsAppButton /> {/* 👈 Botón flotante siempre visible */}
      </body>
    </html>
  );
}
