import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { validUser } from "../../utils/auth";
import "./Login.css";

/**
 * Componente Login
 *
 * Representa el formulario de inicio de sesión para la aplicación.
 * Permite a los usuarios ingresar su correo electrónico y contraseña
 * para acceder a la plataforma de streaming de juegos.
 *
 * Estado:
 * - email: Almacena el correo electrónico ingresado por el usuario.
 * - password: Almacena la contraseña ingresada por el usuario.
 * - error: Almacena mensajes de error relacionados con la autenticación.
 *
 * Funcionalidad:
 * - Valida el correo electrónico y la contraseña antes de permitir el inicio de sesión.
 * - Redirige al usuario a la página principal si las credenciales son correctas.
 * - Muestra mensajes de error si las credenciales son incorrectas o si hay problemas de validación.
 *
 * Accesibilidad:
 * - Usa atributos ARIA para mejorar la accesibilidad del formulario.
 *
 * @returns JSX del formulario de inicio de sesión.
 */
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  /**
   * Maneja el envío del formulario de inicio de sesión.
   * Valida el correo electrónico y la contraseña, y redirige al usuario
   * si las credenciales son correctas.
   *
   * @param {object} e - Evento de envío del formulario.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email.includes("@")) {
      setError("Por favor ingresa un correo válido.");
      return;
    }
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    // Verificación de credenciales
    if (email === validUser.username && password === validUser.password) {
      navigate("/");
    } else {
      setError("Usuario o contraseña incorrectos.");
    }
  };

  return (
    <main className="login-container" role="main" id="login">
      <section
        className="login-card"
        aria-label="Formulario de inicio de sesión"
        tabIndex={-1}
      >
        <button
          type="button"
          onClick={() => navigate("/")}
          aria-label="Volver a la página principal"
          className="back-to-main-btn"
          title="Volver a Main"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            aria-hidden="true"
            focusable="false"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <h1>Bienvenido a Gamor</h1>
        <p className="description">
          Inicia sesión para acceder a tu plataforma de streaming de juegos
          favorita.
        </p>
        <form onSubmit={handleSubmit} className="login-form" noValidate>
          <label htmlFor="email">Correo electrónico</label>
          <input
            id="email"
            type="email"
            placeholder="tucorreo@ejemplo.com"
            aria-required="true"
            aria-describedby={error ? "email-error" : undefined}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
          />

          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            placeholder="contraseña"
            minLength={6}
            aria-required="true"
            aria-describedby={error ? "password-error" : undefined}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />

          {error && (
            <p id="email-error" className="login-error" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            aria-label="Iniciar sesión"
            className="login-submit-button"
          >
            Iniciar sesión
          </button>
        </form>
        <p className="register-link">
          ¿No tienes cuenta?{" "}
          <Link to="/register" >Regístrate aquí</Link>
        </p>
      </section>
    </main>
  );
};

export default Login;

