/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'brand-pink': '#E92577', 
        'dark-bg': '#171043',
        'dark-card': '#252128',
      }
    },
  },
  plugins: [],
  darkMode: 'class', 
}