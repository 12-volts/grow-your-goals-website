import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          beige: {
            50: "#FDFBF7",
            100: "#F7F4EB",
            200: "#EFEAD8",
            300: "#DFD5B8",
            400: "#C6B38E",
            500: "#A98F65",
          },
          moss: {
            100: "#E8EFE9",
            200: "#C6D9C9",
            300: "#99B89E",
            400: "#74967A",
            500: "#527559",
            600: "#3B5541",
          },
          brown: {
            100: "#F5EFEB",
            200: "#E4D4CB",
            300: "#CBAEA0",
            400: "#A67F6B",
            500: "#845D49",
            600: "#604132",
            900: "#2B1A13",
          },
          gold: {
            100: "#FEF7E5",
            300: "#FAD88F",
            500: "#E5A93B",
            600: "#C08622",
          }
        }
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      }
    },
  },
  plugins: [],
};
export default config;
