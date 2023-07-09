/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        advanzBlue:"#10256D",
        advanzRed:'#950000'
      },
      fontFamily: {
        sans: ['"Noto Sans Thai"', 'sans-serif'],
      },
    },
  },
  plugins: [],
  
}
