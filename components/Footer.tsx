import Container from "./Container";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contacto" className="mt-16 bg-white border-t border-gray-200">
      <Container className="py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold text-brand-800">Adolescencia para Padres</h4>
          <p className="mt-2 text-gray-600">
            Cursos online en video para acompañar a tus hijos adolescentes con calma y claridad.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Contacto</h4>
          <a
            href="https://wa.me/5492236861939"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-brand-700 mt-2"
          >
            <FaWhatsapp className="text-green-500" /> WhatsApp: +54 9 2236 86-1939
          </a>
        </div>
        <div>
          <h4 className="font-semibold">Redes</h4>
          <div className="mt-2 flex gap-4 text-2xl text-gray-600">
            <a href="https://web.facebook.com/valeria.merino.1" target="_blank" className="hover:text-blue-600"><FaFacebook /></a>
            <a href="https://www.instagram.com/adolescenciaparapadres/" target="_blank" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="https://www.tiktok.com/@valemerino.ar" target="_blank" className="hover:text-black"><FaTiktok /></a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold">Landing</h4>
          <p className="mt-2 text-sm text-gray-500">
            Diseñada por{" "}
            <a
              href="https://www.linkedin.com/in/tomasromeo/"
              target="_blank"
              className="text-brand-700 hover:underline"
            >
              Tomás Romeo
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
