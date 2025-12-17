import React from "react";
import { useSite } from "../context/SiteContext";

export default function Header() {
  const { theme, toggleTheme, language, toggleLanguage } = useSite();

  return (
    <header className="flex justify-end items-center gap-4 py-8 relative z-10">
      
      <div 
        className="flex items-center gap-3 cursor-pointer select-none" 
        onClick={toggleTheme}
      >
        <div className={`w-14 h-7 rounded-full flex items-center p-1 transition-all duration-300 ${theme === 'light' ? 'bg-[#E92577]' : 'bg-gray-600'}`}>
            <div className={`w-5 h-5 bg-[#FFE86E] rounded-full shadow-md transform transition-transform duration-300 ${theme === 'dark' ? 'translate-x-0' : 'translate-x-7'}`}></div>
        </div>
        
        <span className="font-bold text-xs tracking-widest text-gray-500 dark:text-gray-300 uppercase">
            {theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}
        </span>
      </div>

      <div className="w-[1px] h-4 bg-gray-400"></div>

      <button 
        onClick={toggleLanguage} 
        className="font-bold text-xs tracking-widest uppercase"
      >
         {language === 'tr' ? (
            <>
                <span className="text-gray-500">SWITCH</span> <span className="text-gray-500">TO</span> <span className="text-[#E92577]">ENGLISH</span>
            </>
         ) : (
            <>
                <span className="text-[#E92577]">TÜRKÇE</span><span className="text-gray-500">'YE GEÇ</span>
            </>
         )}
      </button>

    </header>
  );
}