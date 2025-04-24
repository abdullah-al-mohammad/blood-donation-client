/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['poppins', 'sans-serif'],
        rubik_storm: ["Rubik Storm", 'system-ui'],
        oswald: ["Oswald", 'sans-serif'],
      }
    },
  },
  plugins: [require('daisyui'),],
}

