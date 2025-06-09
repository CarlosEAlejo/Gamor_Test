import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

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
        const root = document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
            root.classList.remove("light");
        } else {
            root.classList.add("light");
            root.classList.remove("dark");
        }
    }, [theme]);

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

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

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
