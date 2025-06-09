import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import Categories from "./components/categories/Categories";
import MainBoard from "./components/main_board/MainBoard";
import Register from "./components/register/Register";
import { gamesData } from "./utils/data";

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
        <Route path="/register" element={<Register theme={theme} />} />
      </Routes>
    </Router>
  );
};

export default App;

