import React from "react";
import Hero from "./components/Hero";
import { useSite } from "./context/SiteContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Header from "./components/Header";

function App() {
  const { theme, toggleTheme, language, toggleLanguage } = useSite();

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${theme === 'dark' ? 'bg-dark-bg text-white' : 'bg-[#F4F4F4] text-gray-900'}`}>
      <ToastContainer />

      <main className="container mx-auto px-6 md:px-12 max-w-7xl">
        <Header />
         <Hero />
         <Skills />
         <Profile />
         <Projects />
      </main>
    </div>
  );
}

export default App;