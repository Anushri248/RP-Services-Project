import { Container } from 'postcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#764ba2",
        secondary: "#667eea",
        brandWhite: "#f8fafc",
        darkBlue: "#171a67",
        glass: "rgba(255, 255, 255, 0.25)",
        glassDark: "rgba(16, 16, 16, 0.6)",
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "10rem",
        },
      },
    },
  },
  plugins: [],
} 