import React from "react";
import "./Categories.css";

// Importar imágenes estáticas alojadas en la carpeta public o src/assets
// Ajusta las rutas según donde guardes las imágenes en tu proyecto

const categoryImages = {
  accion: process.env.PUBLIC_URL + "/images/accion.jpg",
  aventura: process.env.PUBLIC_URL + "/images/aventura.jpg",
  deportes: process.env.PUBLIC_URL + "/images/deportes.jpg",
  estrategia: process.env.PUBLIC_URL + "/images/estrategia.jpg",
  RPG: process.env.PUBLIC_URL + "/images/rpg.jpg",
  Shooter: process.env.PUBLIC_URL + "/images/shooter.jpg",
};

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
          {categories.map(({ id, name, icon }) => (
            <article
              key={id}
              className="category-card"
              tabIndex={0}
              aria-label={`Categoría ${name}`}
            >
              <img
                src={categoryImages[icon]}
                alt={`Imagen de la categoría ${name}`}
                className="category-image"
                loading="lazy"
                draggable={false}
              />
              <h3 className="category-name">{name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

