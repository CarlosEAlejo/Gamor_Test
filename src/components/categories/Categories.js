import React from "react";
import "./Categories.css";

/**
 * Componente Categories
 *
 * Representa una sección que muestra una lista de categorías de juegos.
 * Cada categoría se presenta como una tarjeta con una imagen y un nombre.
 *
 * Props:
 * - categories (Array): Lista de objetos que representan las categorías,
 *   cada uno con un id, nombre de categoría e imagen.
 *
 * Funcionalidad:
 * - Muestra las categorías en un diseño de cuadrícula.
 * - Cada tarjeta de categoría es accesible y puede ser enfocada.
 *
 * Accesibilidad:
 * - Usa atributos ARIA para mejorar la accesibilidad de la sección y las tarjetas.
 *
 * @returns JSX de la sección de categorías.
 */
const Categories = ({ categories }) => {
  return (
    <section
      className="categories-section"
      aria-labelledby="categories-heading"
    >
      <div className="categories-container">
        <h2 id="categories-heading" className="categories-header">
          Categorías
        </h2>
        <div className="categories-grid">
          {categories.map(({ id, category, image }) => (
            <article
              key={id}
              className="category-card"
              tabIndex={0}
              aria-label={`Categoría ${category}`}
            >
              <img
                src={image}
                alt={`Imagen de la categoría ${category}`}
                className="category-image"
                loading="lazy"
                draggable={false}
              />
              <h3 className="category-name">{category}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

