"use client";
import { createContext, useContext } from "react";

export type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

export const ThemeContext = createContext({} as ThemeContextType);

export const useThemeContext = () => useContext(ThemeContext);
