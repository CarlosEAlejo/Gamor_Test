import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

/**
 * Componente Register
 *
 * Representa un formulario de registro de usuario con validaciones básicas.
 * Sigue las pautas de diseño DEFAULT: limpio, elegante, con soporte para cambio
 * de tema claro y oscuro, y alta accesibilidad.
 *
 * Props:
 * - theme (string): representa el tema actual ("light" o "dark").
 *
 * Estado:
 * - formData: Objeto con datos del formulario (username, email, password, confirmPassword).
 * - errors: Objeto para almacenar mensajes de error por campo.
 * - submitError: Mensaje general de error al enviar el formulario.
 *
 * Funcionalidad:
 * - Valida campos al enviar el formulario mostrando errores específicos si los hay.
 * - Simula envío exitoso redirigiendo a la página de login ("/login").
 * - Sincroniza tema de la app agregando/clasificando clase en <html>.
 *
 * Accesibilidad:
 * - Usa atributos aria-invalid, aria-describedby y roles para notificaciones de error.
 * - Uso de etiquetas semánticas y formulario con noValidate.
 *
 * @returns JSX del formulario de registro.
 */
const Register = ({ theme }) => {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState({});
    const [submitError, setSubmitError] = useState("");
    const navigate = useNavigate();

    // Sincronizar tema global
    useEffect(() => {
        // Aplicar la clase para el tema activo en el elemento raíz <html>
        const root = document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
            root.classList.remove("light");
        } else {
            root.classList.add("light");
            root.classList.remove("dark");
        }
    }, [theme]);

    /**
   * Valida el formulario localmente.
   * Verifica que los campos se hayan completado adecuadamente
   * y que las contraseñas coincidan.
   *
   * @returns boolean indicando si el formulario es válido.
   */
    const validate = () => {
        const newErrors = {};

        if (!formData.username.trim()) {
            newErrors.username = "El nombre de usuario es obligatorio.";
        }
        if (!formData.email.includes("@")) {
            newErrors.email = "Por favor ingresa un correo válido.";
        }
        if (formData.password.length < 6) {
            newErrors.password = "La contraseña debe tener al menos 6 caracteres.";
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Las contraseñas no coinciden.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    /**
   * Maneja el cambio en los campos del formulario.
   * Actualiza el estado 'formData' correspondiente al campo modificado.
   *
   * @param {object} e - Evento del input.
   */
    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    /**
   * Envía el formulario validando los campos.
   * Si es válido simula un registro con alerta y redirige a login.
   * Si no, establece el mensaje de error general.
   *
   * @param {object} e - Evento submit del formulario.
   */
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitError("");
        if (validate()) {
            // Aquí se implementaría lógica real de registro
            alert("Registro exitoso! Redirigiendo al Login...");
            navigate("/");
        } else {
            setSubmitError("Por favor corrige los errores del formulario.");
        }
    };

    return (
        <main className="register-container" role="main" id="register">
            <section className="register-card" aria-label="Formulario de registro">
                <h1>Crear una cuenta</h1>
                <p className="description">
                    Completa los campos para registrarte y disfrutar de Gamor.
                </p>
                <form onSubmit={handleSubmit} noValidate className="register-form">
                    <label htmlFor="username">
                        Nombre de usuario
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            aria-invalid={!!errors.username}
                            aria-describedby={errors.username ? "username-error" : undefined}
                            autoComplete="username"
                            required
                        />
                        {errors.username && (
                            <span className="form-error" id="username-error" role="alert">
                                {errors.username}
                            </span>
                        )}
                    </label>

                    <label htmlFor="email">
                        Correo electrónico
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? "email-error" : undefined}
                            autoComplete="email"
                            required
                        />
                        {errors.email && (
                            <span className="form-error" id="email-error" role="alert">
                                {errors.email}
                            </span>
                        )}
                    </label>

                    <label htmlFor="password">
                        Contraseña
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            aria-invalid={!!errors.password}
                            aria-describedby={errors.password ? "password-error" : undefined}
                            autoComplete="new-password"
                            required
                        />
                        {errors.password && (
                            <span className="form-error" id="password-error" role="alert">
                                {errors.password}
                            </span>
                        )}
                    </label>

                    <label htmlFor="confirmPassword">
                        Confirmar contraseña
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            aria-invalid={!!errors.confirmPassword}
                            aria-describedby={
                                errors.confirmPassword ? "confirm-error" : undefined
                            }
                            autoComplete="new-password"
                            required
                        />
                        {errors.confirmPassword && (
                            <span
                                className="form-error"
                                id="confirm-error"
                                role="alert"
                            >
                                {errors.confirmPassword}
                            </span>
                        )}
                    </label>

                    {submitError && (
                        <div className="submit-error" role="alert">
                            {submitError}
                        </div>
                    )}

                    <button type="submit" className="register-submit-button">
                        Registrar cuenta
                    </button>
                </form>
            </section>
        </main>
    );
};

export default Register;
