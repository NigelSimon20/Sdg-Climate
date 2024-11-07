import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins-bold': ['Poppins Bold', 'sans-serif'],
        'poppins-medium': ['Poppins Medium', 'sans-serif'],
        'poppins-regular': ['Poppins Regular', 'sans-serif'],
        'poppins-light': ['Poppins Light', 'sans-serif'],
        'monserat-semibold': ['Monserat SemiBold', 'sans-serif'],
    },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
