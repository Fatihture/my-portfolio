import React from "react";
import Hero from "./components/Hero";
import { useSite } from "./context/SiteContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Skills from "./components/Skills";
import Profile from "./components/Profile";

function App() {
  const { theme, toggleTheme, language, toggleLanguage } = useSite();

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${theme === 'dark' ? 'bg-dark-bg text-white' : 'bg-[#F4F4F4] text-gray-900'}`}>
      <ToastContainer />
      
      <header className="container mx-auto px-6 py-8 flex justify-end items-center gap-6 font-bold text-xs text-gray-500">
        <button onClick={toggleLanguage} className="hover:text-brand-pink transition uppercase tracking-widest">
           {language === 'tr' ? 'SWITCH TO ENGLISH' : 'TÜRKÇE\'YE GEÇ'}
        </button>
        <div className="flex items-center gap-2 cursor-pointer select-none border border-brand-pink/30 px-3 py-1 rounded-full" onClick={toggleTheme}>
           {theme === 'light' ? '🌙 DARK MODE' : '☀️ LIGHT MODE'}
        </div>
      </header>

      <main className="container mx-auto px-6 md:px-12 max-w-7xl">
         <Hero />
         <Skills />
         <Profile />
      </main>
    </div>
  );
}

export default App;