import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

/**
 * Componente Navbar
 *
 * Representa la barra de navegación principal de la aplicación.
 * Proporciona enlaces a las páginas de inicio de sesión y registro,
 * así como un botón para cambiar el tema de la aplicación.
 *
 * Props:
 * - onThemeToggle (function): Función que se ejecuta al hacer clic en el botón de cambio de tema.
 *
 * Funcionalidad:
 * - Utiliza el hook useLocation para determinar la ruta actual y marcar el enlace activo.
 * - Proporciona accesibilidad mediante roles y atributos ARIA.
 *
 * @returns JSX de la barra de navegación.
 */
const Navbar = ({ onThemeToggle }) => {

  const location = useLocation();

  // Función para marcar el enlace activo
  /**
   * Verifica si la ruta actual coincide con la ruta proporcionada.
   *
   * @param {string} path - Ruta a verificar.
   * @returns {boolean} - Verdadero si la ruta actual coincide, falso en caso contrario.
   */
  const isActive = (path) => location.pathname === path;

  return (
    <header
      className="navbar"
      role="banner"
      aria-label="Barra de navegación principal"
    >
      <div className="navbar-container">
        <Link
          to="/"
          className="navbar-logo"
        >
          Gamor
        </Link>
        <nav
          className="navbar-nav"
          role="navigation"
          aria-label="Menú principal"
        >
          <Link
            to="/login"
            className={isActive("/login") ? "active" : ""}
            aria-current={isActive("/login") ? "page" : undefined}
          >
            Login
          </Link>
          <Link
            to="/register"
            className={isActive("/register") ? "active" : ""}
            aria-current={isActive("/register") ? "page" : undefined}
          >
            Registro
          </Link>
          <button
            onClick={onThemeToggle}
            className="navbar-button"
            aria-label="Cambiar tema de sitio web"
          >
            Cambiar tema
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
