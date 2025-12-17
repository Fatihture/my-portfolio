import React from "react";
import { useSite } from "../context/SiteContext";

export default function Projects() {
  const { content } = useSite();
  const { title, projects } = content.projectsSection;

  return (
    <section className="py-14">
      <div className="bg-white dark:bg-dark-card rounded-xl shadow-lg p-8 md:p-12 mx-auto border border-gray-100 dark:border-gray-700">
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">
          {title}
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#F4F4F4] dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
              
              {/* Proje Resmi */}
              <div className="h-64 overflow-hidden">
                  <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {e.target.src='https://via.placeholder.com/400x300'}}
                  />
              </div>

              {/* İçerik */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-brand-pink mb-4">
                      {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-4 py-1.5 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full text-xs font-bold shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Linkler */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a href={project.links.repo} className="text-gray-800 dark:text-gray-200 underline underline-offset-4 font-semibold hover:text-brand-pink transition">
                      Github
                  </a>
                  <a href={project.links.app} className="flex items-center gap-2 text-gray-800 dark:text-gray-200 underline underline-offset-4 font-semibold hover:text-brand-pink transition">
                      View Site <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}