import React from "react";
import { useSite } from "../context/SiteContext";

export default function Skills() {
  const { content } = useSite();
  const { title, skills } = content.skillsSection;

  return (
    <section className="py-14 relative">
      <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-2xl -z-10"></div>
      
      <div className="bg-white dark:bg-dark-card rounded-xl shadow-lg p-10 max-w-6xl mx-auto border border-gray-100 dark:border-gray-700 relative">
        
        {/* BAŞLIK */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">
          {title}
        </h2>
        
        {/* İKONLAR */}
        <div className="flex flex-wrap gap-12 justify-center">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center gap-4 group cursor-pointer">
              <div className="w-24 h-24 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-3 rounded-xl overflow-hidden">
                 <img 
                   src={skill.icon} 
                   alt={skill.name} 
                   className="w-full h-full object-cover rounded-md" 
                   onError={(e) => {e.target.src='https://via.placeholder.com/112'}} 
                 />
              </div>
              <span className="text-gray-600 dark:text-gray-300 font-medium uppercase text-lg tracking-wide text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}