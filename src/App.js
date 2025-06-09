import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import Categories from "./components/categories/Categories";
import MainBoard from "./components/main_board/MainBoard";

// Importar imágenes estáticas alojadas en la carpeta public o src/assets
// Ajusta las rutas según donde guardes las imágenes en tu proyecto
const gamesData = [
  { id: 1, name: "League of Legends", category: "Estrategia", image: process.env.PUBLIC_URL + "/images/estrategia.jpg" },
  { id: 2, name: "Fortnite", category: "Shooter", image: process.env.PUBLIC_URL + "/images/shooter.jpg" },
  { id: 3, name: "Minecraft", category: "Aventura", image: process.env.PUBLIC_URL + "/images/aventura.jpg" },
  { id: 4, name: "Fifa 2025", category: "Deportes", image: process.env.PUBLIC_URL + "/images/deportes.jpg" },
  { id: 5, name: "The Witcher 3", category: "Juegos de rol", image: process.env.PUBLIC_URL + "/images/rpg.jpg" },
  { id: 6, name: "GTA", category: "accion", image: process.env.PUBLIC_URL + "/images/accion.jpg" },
];

const App = () => {
  const [theme, setTheme] = useState("light");
  const [addedGames, setAddedGames] = useState([]);

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

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const handleAddGame = (game) => {
    setAddedGames((prev) => {
      if (!prev.find((g) => g.id === game.id)) {
        return [...prev, game];
      }
      return prev;
    });
  };

  const handleRemoveGame = (id) => {
    setAddedGames((prev) => prev.filter((g) => g.id !== id));
  };

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
      </Routes>
    </Router>
  );
};

export default App;

