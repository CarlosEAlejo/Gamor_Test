import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { validUser } from "../../utils/auth";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
          <a href="#register" aria-label="Ir a registro">
            Regístrate aquí
          </a>
        </p>
      </section>
    </main>
  );
};

export default Login;

