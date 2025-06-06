import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";

const App = () => {
  // theme state: "light" or "dark"
  const [theme, setTheme] = useState("light");

  // Apply theme to <html> root so CSS can target globally
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

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <Navbar onThemeToggle={toggleTheme} />
      <Login />
    </>
  );
};

export default App;
