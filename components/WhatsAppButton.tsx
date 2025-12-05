import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  message?: string;
}

export default function WhatsAppButton({
  message = "Hola Vale, quiero consultar sobre los cursos online",
}: WhatsAppButtonProps) {
  const waLink = `https://wa.me/5492236861939?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      title="Abrir WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400"
      aria-label="Abrir WhatsApp"
    >
      <FaWhatsapp className="text-2xl" aria-hidden="true" />
      <span className="hidden sm:inline font-medium">WhatsApp</span>
    </a>
  );
}
 
