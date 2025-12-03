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
    { href: "#faq", label: "Preguntas frecuentes" }, // 👈 nuevo
    { href: "#contacto", label: "Contacto" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur shadow-sm z-50">
      <div className="container-padding flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-brand-800">
          Adolescencia para Padres
        </Link>
        <button
          className="sm:hidden btn btn-outline px-3 py-1"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <ul className="hidden sm:flex gap-6 font-medium text-gray-700">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-brand-700">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {open && (
        <div className="sm:hidden bg-white border-t">
          <ul className="flex flex-col p-4 gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block py-2 hover:text-brand-700"
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
