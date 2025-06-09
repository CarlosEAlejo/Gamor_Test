import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ onThemeToggle }) => {

  const location = useLocation();

  // Para marcar el link activo
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
