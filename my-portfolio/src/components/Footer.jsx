import React from "react";
import { useSite } from "../context/SiteContext";

export default function Footer() {
  const { content } = useSite();
  const { msg, links } = content.footerSection;

  return (
    <footer className="flex flex-col md:flex-row justify-center items-center gap-16 pt-24 pb-12 mt-10">
      
      {/* SOL TARAf*/}
      <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-gray-100 text-center md:text-right max-w-lg leading-tight">
        Let’s work 
        <span className="relative inline-block px-2 mx-1 z-10">
            together
            <div className="absolute left-0 bottom-1 w-full h-4 bg-blue-300/70 -z-10 rounded-sm"></div>
        </span> 
        on your next product.
      </h2>

      {/* SAĞ TARAF */}
      <nav className="flex flex-col gap-4 text-center md:text-left">
        {links.map((link, index) => {
             let colorClass = "text-gray-900 dark:text-gray-100";
             
             if(link.name === 'Github') colorClass = "text-blue-600 hover:text-blue-700";
             if(link.name === 'Personal Blog') colorClass = "text-gray-900 dark:text-white hover:text-gray-600";
             if(link.name === 'Linkedin') colorClass = "text-[#0077b5] hover:text-blue-400";
             if(link.name === 'Email') colorClass = "text-red-600 hover:text-red-700";
             
             return (
                <a 
                    key={index} 
                    href={link.url} 
                    className={`text-xl font-medium transition-colors ${colorClass}`}
                >
                  {link.name}
                </a>
             )
        })}
      </nav>
    </footer>
  );
}