import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import Categories from "./components/categories/Categories";
import MainBoard from "./components/main_board/MainBoard";
import Register from "./components/register/Register";
import { gamesData } from "./utils/data";

/**
 * Componente App
 *
 * Representa la aplicación principal que gestiona la navegación y el estado global.
 * Contiene el enrutamiento de la aplicación y el manejo del tema (claro/oscuro).
 *
 * Estado:
 * - theme: Almacena el tema actual de la aplicación ("light" o "dark").
 * - addedGames: Almacena la lista de juegos que el usuario ha agregado.
 *
 * Funcionalidad:
 * - Permite alternar entre temas claro y oscuro.
 * - Maneja la adición y eliminación de juegos en la lista de juegos agregados.
 * - Configura el enrutamiento para las diferentes páginas de la aplicación.
 *
 * @returns JSX de la aplicación con enrutamiento y componentes principales.
 */
const App = () => {
  const [theme, setTheme] = useState("light");
  const [addedGames, setAddedGames] = useState([]);

  useEffect(() => {
    // Aplica la clase correspondiente al tema en el elemento raíz <html>
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
   * Alterna entre el tema claro y oscuro.
   */
  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  /**
   * Maneja la adición de un juego a la lista de juegos agregados.
   * Evita duplicados en la lista.
   *
   * @param {object} game - Objeto del juego a agregar.
   */
  const handleAddGame = (game) => {
    setAddedGames((prev) => {
      if (!prev.find((g) => g.id === game.id)) {
        return [...prev, game];
      }
      return prev;
    });
  };

  /**
   * Maneja la eliminación de un juego de la lista de juegos agregados.
   *
   * @param {string} id - ID del juego a eliminar.
   */
  const handleRemoveGame = (id) => {
    setAddedGames((prev) => prev.filter((g) => g.id !== id));
  };

  // Crea un conjunto de IDs de juegos agregados para facilitar la búsqueda
  const addedGameIds = new Set(addedGames.map((g) => g.id));

  return (
    <Router>
      <Navbar onThemeToggle={toggleTheme} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainBoard
                games={gamesData}
                addedGameIds={addedGameIds}
                onAddGame={handleAddGame}
                onRemoveGame={handleRemoveGame}
              />
              <Categories categories={gamesData} />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register theme={theme} />} />
      </Routes>
    </Router>
  );
};

export default App;

