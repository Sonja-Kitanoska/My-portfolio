"use client";
import React, { useEffect, useState } from "react";
import {
  ThemeContext,
  ThemeContextType,
  useThemeContext
} from "./ThemeContext";

type Props = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<ThemeContextType["theme"]>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);
  }, [theme]);

  const themeValue: ThemeContextType = {
    theme: theme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
