"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { workshops } from "@/data/workshops"; // importa tu array completo

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  const links = [
    { href: "#sesiones", label: "Sesiones individuales" },
    { href: "#talleres", label: "Cursos" }, // tendrá submenú
    { href: "#promos", label: "Promos y packs" },
    { href: "#testimonios", label: "Testimonios" },
    { href: "#faq", label: "Preguntas frecuentes" },
    { href: "#contacto", label: "Contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      let found = false;

      links.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const top = section.getBoundingClientRect().top + window.scrollY;
          const bottom = top + section.getBoundingClientRect().height;
          if (scrollPos >= top && scrollPos < bottom) {
            setActive(link.href);
            found = true;
          }
        }
      });

      if (!found) {
        const last = links[links.length - 1];
        setActive(last.href);
      }
    };

    const onScroll = () => setScrolled(window.scrollY > 10);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white/80 backdrop-blur z-50 transition-shadow ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Ir al inicio"
          className="font-bold text-brand-800 text-lg sm:text-xl"
        >
          Adolescencia para Padres
        </Link>

        {/* Botón hamburguesa en mobile */}
        <button
          className="sm:hidden btn btn-outline px-3 py-1"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          ☰
        </button>

        {/* Links en desktop */}
        <ul className="hidden sm:flex gap-6 font-medium text-gray-700">
          {links.map((l) => (
            <li key={l.href} className="relative">
              {l.label === "Cursos" ? (
                <div
                  className="cursor-pointer"
                  onMouseEnter={() => setCoursesOpen(true)}
                  onMouseLeave={() => setCoursesOpen(false)}
                  onClick={() => setCoursesOpen(!coursesOpen)}
                >
                  <a
                    href={l.href}
                    aria-current={active === l.href ? "page" : undefined}
                    aria-expanded={coursesOpen}
                    aria-controls="submenu-cursos"
                    className={`transition-colors pb-1 ${
                      active === l.href
                        ? "text-brand-700 font-semibold"
                        : "hover:text-brand-700"
                    }`}
                  >
                    {l.label}
                  </a>
                  {coursesOpen && (
                    <ul
                      id="submenu-cursos"
                      className="absolute left-0 mt-2 bg-white rounded shadow-md ring-1 ring-gray-200 w-64"
                    >
                      {workshops.map((w) => (
                        <li key={w.slug}>
                          <a
                            href={`#${w.slug}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-700"
                          >
                            {w.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <a
                  href={l.href}
                  aria-current={active === l.href ? "page" : undefined}
                  className={`transition-colors pb-1 ${
                    active === l.href
                      ? "text-brand-700 font-semibold after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-brand-700 after:rounded-full"

