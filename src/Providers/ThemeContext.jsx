"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [darkMode, setDarkMode] = useState("light");

    useEffect(() => {
        const saved = window.localStorage.getItem("theme") || "light";
        setDarkMode(saved);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode === "dark");
        window.localStorage.setItem("theme", darkMode);
    }, [darkMode]);

    const toggleTheme = () =>
        setDarkMode((prev) => (prev === "dark" ? "light" : "dark"));

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
