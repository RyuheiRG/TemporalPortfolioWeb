import { useState, useEffect, useRef } from "react";
import logo from "@/assets/ryuhei-logo.png";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "#inicio", label: "Sobre mí" },
  { href: "#techStack", label: "Tech Stack" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#certificaciones", label: "Certificaciones" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    buttonRef.current?.focus();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <nav
      className="site-nav fixed left-0 right-0 top-0 z-50 border-b border-border backdrop-blur-xl"
      aria-label="Navegación principal"
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className="group inline-flex items-center gap-3"
          aria-label="RyuheiRG, ir al inicio"
        >
          <img
            src={logo.src}
            alt="Logo de RyuheiRG"
            className="h-9 w-9 object-contain transition-transform duration-200 group-hover:rotate-[-6deg]"
          />
          <span className="font-mono text-sm font-semibold tracking-wide">Ryuhei<span className="text-accent">RG</span></span>
        </a>

        <button
          ref={buttonRef}
          type="button"
          className="inline-grid h-11 w-11 place-content-center gap-1.5 border border-border transition-colors duration-200 hover:border-accent md:hidden"
          aria-expanded={isOpen}
          aria-controls="nav-links"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={toggleMenu}
        >
          <span
            className={`block h-0.5 w-5 bg-fg-primary transition-transform duration-200 ${isOpen ? "translate-y-1.5 rotate-45" : ""}`}
            aria-hidden="true"
          />
          <span
            className={`block h-0.5 w-5 bg-fg-primary transition-opacity duration-200 ${isOpen ? "opacity-0" : ""}`}
            aria-hidden="true"
          />
          <span
            className={`block h-0.5 w-5 bg-fg-primary transition-transform duration-200 ${isOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
            aria-hidden="true"
          />
        </button>

        <ul
          ref={menuRef}
          id="nav-links"
          className={`absolute left-0 right-0 top-full flex flex-col gap-0 border-b border-border bg-primary px-4 py-2 md:static md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:px-0 md:py-0 ${isOpen ? "flex" : "hidden md:flex"}`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-3 font-mono text-xs text-fg-secondary transition-colors duration-200 hover:text-accent md:py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
