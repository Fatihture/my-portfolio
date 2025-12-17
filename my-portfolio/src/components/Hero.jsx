import React from "react";
import { useSite } from "../context/SiteContext";

export default function Hero() {
  const { content } = useSite();
  const { greeting, intro, ctaHTML, socials, profileImage } = content.heroSection;

  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-10 py-12">

      {/* Yazılar */}
      <div className="flex-1 space-y-6">
        <h3 className="text-xl font-bold tracking-widest">
          {greeting}
        </h3>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
          {intro}
        </h1>
        
        {/* İkonlar */}
        <div className="flex gap-4 py-4">
          {socials.map((social, index) => (
            <a 
              key={index} 
              href={social.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 rounded shadow-sm hover:shadow-md transition-all hover:scale-105"
            >
              <img 
                src={social.logo} 
                alt={social.alt_text} 
                className="w-6 h-6 object-contain dark:invert" 
                onError={(e) => {e.target.style.display='none'}}
              />
            </a>
          ))}
        </div>

        <p 
          className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-xl"
          dangerouslySetInnerHTML={{ __html: ctaHTML }}
        />

      </div>

      {/* Profil Resmi */}
      <div className="flex-1 flex justify-center md:justify-end">
        
        <div className="relative z-0 inline-block">
            
            <div className="absolute -top-6 -left-6 w-full h-full bg-[#E92577] rounded-3xl"></div>

            <img 
              src={profileImage} 
              alt="Profile" 
              className="relative z-10 w-80 h-82 object-cover rounded-3xl shadow-2xl border-4 border-white dark:border-dark-card"
              onError={(e) => {e.target.src='https://via.placeholder.com/400'}} 
            />
        </div>

      </div>
    </section>
  );
}