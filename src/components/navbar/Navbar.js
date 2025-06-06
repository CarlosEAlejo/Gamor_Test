import React from "react";
import "./Navbar.css";

const Navbar = ({ onThemeToggle }) => {
  return (
    <header
      className="navbar"
      role="banner"
      aria-label="Barra de navegación principal"
    >
      <div className="navbar-container">
        <div
          className="navbar-logo"
          tabIndex={-1}
          aria-label="Logo de Gamor"
          // avoid keyboard focus but accessible by screen readers
        >
          Gamor
        </div>
        <nav
          className="navbar-nav"
          role="navigation"
          aria-label="Menú principal"
        >
          <a href="#login" tabIndex={0}>
            Login
          </a>
          <a href="#register" tabIndex={0}>
            Registro
          </a>
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
