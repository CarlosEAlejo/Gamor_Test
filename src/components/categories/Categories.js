import React from 'react';

const Categories = ({ categories }) => {
    return (
        <div>
            <h2>Categorías</h2>
            <ul>
                {categories.map(category => (
                    <li key={category.id}>{category.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
