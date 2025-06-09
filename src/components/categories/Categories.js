import React from "react";
import "./Categories.css";

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

