/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        advanzBlue:"#172554",
        advanzRed:'#950000',
        loadingbg:'#192842',
      },
      fontFamily: {
        sans: ['"Noto Sans Thai"', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar'),],
  
}
