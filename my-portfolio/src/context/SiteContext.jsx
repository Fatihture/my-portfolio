import React, { createContext, useContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { data } from "../mocks/data";

const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage("lang", "en"); // Varsayılan İngilizce
  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const content = data[language];

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "tr" : "en");
  };

  return (
    <SiteContext.Provider value={{ content, language, theme, toggleTheme, toggleLanguage }}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => useContext(SiteContext);