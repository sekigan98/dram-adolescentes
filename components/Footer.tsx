import Container from "./Container";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contacto" className="mt-16 bg-white border-t border-gray-200">
      <Container className="py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div>
            <h4 className="font-semibold text-brand-800 text-lg">Adolescencia para Padres</h4>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              Cursos online en video para acompañar a tus hijos adolescentes con calma y claridad.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold text-lg">Contacto</h4>
            <a
              href="https://wa.me/5492236861939"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-sm text-gray-700 hover:text-brand-700"
            >
              <FaWhatsapp className="text-green-500 text-lg" />
              WhatsApp: +54 9 2236 86-1939
            </a>
          </div>

          {/* Redes */}
          <div>
            <h4 className="font-semibold text-lg">Redes</h4>
            <div className="mt-2 flex gap-4 text-gray-600 text-xl">
              <a
                href="https://web.facebook.com/valeria.merino.1"
                target="_blank"
                className="hover:text-blue-600"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/adolescenciaparapadres/"
                target="_blank"
                className="hover:text-pink-500"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@valemerino.ar"
                target="_blank"
                className="hover:text-black"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* Créditos */}
          <div>
            <h4 className="font-semibold text-lg">Landing</h4>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
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
        </div>
      </Container>
    </footer>
  );
}

