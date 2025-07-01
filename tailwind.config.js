/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        arabic: ['Times New Roman', 'serif']
      },
      colors: {
        primary: '#328E6E',
        secondary: '#2a7a5e'
      }
    },
  },
  plugins: [],
};