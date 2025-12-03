import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

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
