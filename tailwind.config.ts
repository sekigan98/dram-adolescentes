import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}", // 👈 opcional si usás pages
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f9ff",
          100: "#e0ecff",
          200: "#b8d4ff",
          300: "#8fbaff",
          400: "#5f9eff",
          500: "#367fff",
          600: "#1d65e6",
          700: "#154db4",
          800: "#0f397f",
          900: "#08234a",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"], // 👈 tipografía global
      },
    },
  },
  darkMode: ["class", '[data-theme="dark"]'], // 👈 soporta toggle con class o atributo
  plugins: [],
};

export default config;
