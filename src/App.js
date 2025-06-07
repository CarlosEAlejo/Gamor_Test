import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import Categories from "./components/categories/Categories";
import MainBoard from "./components/main_board/MainBoard";

const categoriesData = [
  { id: 1, name: "Acción", icon: "accion" },
  { id: 2, name: "Aventura", icon: "aventura" },
  { id: 3, name: "Deportes", icon: "deportes" },
  { id: 4, name: "Estrategia", icon: "estrategia" },
  { id: 5, name: "Juegos de rol", icon: "RPG" },
  { id: 6, name: "Shooter", icon: "Shooter" },
];

const gamesData = [
  { id: 1, name: "League of Legends" },
  { id: 2, name: "Fortnite" },
  { id: 3, name: "Minecraft" },
  { id: 4, name: "Valorant" },
  { id: 5, name: "The Witcher 3" },
  { id: 6, name: "Among Us" },
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
              <Categories categories={categoriesData} />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;

