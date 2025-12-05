import Container from "./Container";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="mt-16 bg-gradient-to-br from-brand-50 via-white to-brand-100 border-t border-gray-200 scroll-mt-32"
    >
      <Container className="py-12">
        <div className="grid gap-10 text-center sm:text-left sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-lg font-semibold text-brand-800">Adolescencia para Padres</h4>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
              Cursos online en video para acompañar a tus hijos adolescentes con herramientas efectivas.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-brand-800">Contacto</h4>
            <a
              href="https://wa.me/5492236861939"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar a Vale por WhatsApp"
              className="mt-2 inline-flex items-center justify-center sm:justify-start gap-2 text-sm text-gray-700 hover:text-brand-700 transition-colors"
            >
              <FaWhatsapp className="text-green-500 text-lg" />
              Hablá con Vale por WhatsApp
            </a>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-brand-800">Redes</h4>
            <div className="mt-2 flex justify-center sm:justify-start gap-4 text-gray-600 text-xl">
              <a
                href="https://web.facebook.com/valeria.merino.1"
                target="_blank"
                className="hover:text-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/adolescenciaparapadres/"
                target="_blank"
                className="hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@valemerino.ar"
                target="_blank"
                className="hover:text-black transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-brand-800">Formas de pago</h4>
            <p className="mt-2 text-sm text-gray-600">
              Podés abonar mediante PayPal, Western Union o transferencia bancaria.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Adolescencia para Padres. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  );
}


