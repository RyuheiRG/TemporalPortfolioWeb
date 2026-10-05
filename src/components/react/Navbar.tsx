import { useState, useEffect, useRef } from "react";

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
      className="fixed top-0 left-0 right-0 z-50 bg-primary/95 border-b border-border backdrop-blur-md"
      aria-label="Navegación principal"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <a
          href="#inicio"
          className="inline-flex items-center"
          aria-label="Ir al inicio"
        >
          <img
            src="\src\assets\ryuhei-logo.png"
            alt="Logo de RyuheiRG"
            className="w-11 h-11 object-contain"
          />
        </a>

        <button
          ref={buttonRef}
          type="button"
          className="inline-grid w-11 h-11 place-content-center gap-1.5 border border-border rounded-sm hover:border-accent transition-colors duration-200 md:hidden"
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
          className={`absolute top-full left-0 right-0 flex flex-col gap-0 px-4 py-2 border-b border-border bg-primary md:static md:flex-row md:gap-8 md:px-0 md:py-0 md:border-0 md:bg-transparent ${isOpen ? "flex" : "hidden md:flex"}`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-3 text-fg-secondary hover:text-accent transition-colors duration-200 md:py-2 md:text-sm"
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
