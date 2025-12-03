import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f7fafc",
          100: "#eef6f8",
          200: "#dbeaf0",
          300: "#bfd8e3",
          400: "#98bccd",
          500: "#6e9eb7",
          600: "#4e7f9c",
          700: "#3c647f",
          800: "#2f4e64",
          900: "#243c4e"
        }
      }
    }
  },
  plugins: []
};

export default config;
