"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#programa", label: "Programa" },
    { href: "#talleres", label: "Talleres" },
    { href: "#promos", label: "Promos" },
    { href: "#testimonios", label: "Testimonios" },
    { href: "#faq", label: "Preguntas frecuentes" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur shadow-sm z-50">
      <div className="container flex items-center justify-between h-16">
        {/* Logo / Marca */}
        <Link href="/" className="font-bold text-brand-800 text-lg sm:text-xl">
          Adolescencia para Padres
        </Link>

        {/* Botón hamburguesa en mobile */}
        <button
          className="sm:hidden btn btn-outline px-3 py-1"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          ☰
        </button>

        {/* Links en desktop */}
        <ul className="hidden sm:flex gap-6 font-medium text-gray-700">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-brand-700 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Menú desplegable en mobile */}
      {open && (
        <div className="sm:hidden bg-white border-t shadow-md">
          <ul className="flex flex-col p-4 gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block py-2 font-medium text-gray-700 hover:text-brand-700 transition-colors"
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
