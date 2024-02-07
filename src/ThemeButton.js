import React, { useState } from "react";

export const ThemeButton = ({ toggle }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };
  return (
    <button onClick={toggle ? toggle : toggleTheme} data-testid="theme-button">
      {theme}
    </button>
  );
};
