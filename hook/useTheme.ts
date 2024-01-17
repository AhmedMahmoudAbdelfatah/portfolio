"use client"

import { ThemeContext } from "@/context/ThemeProvider";
import { useContext, useEffect } from "react";


export const useTheme = () => {
  const context = useContext(ThemeContext);
  
  if (context === null) throw new Error("useTheme must be used within a ThemeProvider");

  useEffect(() => {
    if (context.theme === "dark") document.documentElement.classList.add("dark");
    if (context.theme === "light") document.documentElement.classList.remove("dark");
  }, [context.theme]);

  return context;
}