"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  const links = [
    { href: "#programa", label: "Programa" },
    { href: "#talleres", label: "Talleres" },
    { href: "#promos", label: "Promos" },
    { href: "#testimonios", label: "Testimonios" },
    { href: "#faq", label: "Preguntas frecuentes" },
    { href: "#contacto", label: "Contacto" },
  ];

  // Detecta la sección activa al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100; // offset para navbar fijo
      links.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const top = section.getBoundingClientRect().top + window.scrollY;
          const bottom = top + section.getBoundingClientRect().height;
          if (scrollPos >= top && scrollPos < bottom) {
            setActive(link.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur shadow-sm z-50">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-brand-800 text-lg sm:text-xl">
          Adolescencia para Padres
        </Link>

        {/* Botón hamburguesa */}
        <button
          className="sm:hidden btn btn-outline px-3 py-1"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          ☰
        </button>

        {/* Links desktop */}
        <ul className="hidden sm:flex gap-6 font-medium text-gray-700">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`transition-colors ${
                  active === l.href ? "text-brand-700 font-semibold" : "hover:text-brand-700"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Menú mobile */}
      {open && (
        <div className="sm:hidden bg-white border-t shadow-md">
          <ul className="flex flex-col p-4 gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`block py-2 transition-colors ${
                    active === l.href ? "text-brand-700 font-semibold" : "hover:text-brand-700"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
