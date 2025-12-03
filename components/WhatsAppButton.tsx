import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5492236861939?text=Hola%20Valeria%2C%20quiero%20consultar%20sobre%20los%20cursos%20online"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-transform duration-200 hover:scale-105 animate-bounce-slow"
      aria-label="Abrir WhatsApp"
    >
      <FaWhatsapp className="text-2xl" />
      <span className="hidden sm:inline font-medium">WhatsApp</span>
    </a>
  );
}
