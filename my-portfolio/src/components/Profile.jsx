import React from "react";
import { useSite } from "../context/SiteContext";

export default function Profile() {
  const { content } = useSite();
  const { title, basicInfoTitle, basicInfo, aboutMeTitle, aboutMeDesc } = content.profileSection;

  return (
    <section className="py-14 border-t border-gray-200 dark:border-gray-700">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-10 text-center md:text-center">
        {title}
      </h2>

      <div className="flex flex-col md:flex-row gap-12">
        
        {/* Temel Bilgiler Kartı */}
        <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto"></div>
        <div className="flex-1 bg-white dark:bg-dark-card p-8  rounded-2xl shadow-[12px_12px_25px_-5px_rgba(0,0,0,0.3)] dark:shadow-[12px_12px_25px_-5px_rgba(0,0,0,0.7)] relative overflow-hidden group">
          
          <h3 className="text-2xl font-bold text-brand-pink mb-6">
            {basicInfoTitle}
          </h3>
          
          <div className="space-y-4">
            {basicInfo.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                <span className="font-bold text-gray-900 dark:text-gray-100 min-w-[140px]">
                    {item.label}
                </span>
                <span className="text-gray-600 dark:text-gray-300 font-medium">
                    {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/*  Hakkımda Yazısı */}
        <div className="flex-1 space-y-6 flex flex-col justify-center">
          <div className="relative">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 relative z-10 inline-block">
                {aboutMeTitle}
              </h3>
              <div className="absolute bottom-1 left-0 w-full h-3 bg-blue-200 dark:bg-blue-900/50 -z-10 rounded"></div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            {aboutMeDesc}
          </p>
        </div>
      </div>
    </section>
  );
}