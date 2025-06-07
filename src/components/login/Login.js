import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email.includes("@")) {
      setError("Por favor ingresa un email válido.");
      return;
    }
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    alert("Login exitoso!");
    // Aquí puedes agregar la lógica real de autenticación.
  };

  return (
    <main className="login-container" role="main" id="login">
      <section
        className="login-card"
        aria-label="Formulario de inicio de sesión"
        tabIndex={-1}
      >
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
          />

          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            placeholder="********"
            minLength={6}
            aria-required="true"
            aria-describedby={error ? "password-error" : undefined}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <p id="email-error" className="login-error" role="alert">
              {error}
            </p>
          )}

          <button type="submit" aria-label="Iniciar sesión">
            Iniciar sesión
          </button>
        </form>
        <p className="register-link">
          ¿No tienes cuenta?{" "}
          <a href="/register" aria-label="Ir a registro">
            Regístrate aquí
          </a>
        </p>
      </section>
    </main>
  );
};

export default Login;
