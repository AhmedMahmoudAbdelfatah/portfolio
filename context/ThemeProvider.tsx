"use client"
import { useLocalStorage } from '@/hook/useLocalStorage';
import { createContext } from 'react'

type ThemeType = "light" | "dark";

type ThemeContextType = {
  theme: ThemeType,
  toggleTheme: () => void,
}

type ThemeProviderPropsType = {
  children: React.ReactNode
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider = ({ children }: ThemeProviderPropsType) => {

  const [theme, setTheme] = useLocalStorage<ThemeType>("theme", () => {
    if (window?.matchMedia('(prefers-color-scheme: dark)')?.matches) return "dark";
    return "light";
  });

  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === "light") return "dark";
      return "light";
    });
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}

export default ThemeProvider