/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  content: [],
  theme: {
    extend: {
      colors: {
        primary: '#f59e1e',
      }
    },
  },
  plugins: [],
}

