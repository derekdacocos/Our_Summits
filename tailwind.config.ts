import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        forest: "#24483c",
        moss: "#6f8c62",
        fern: "#a9bd78",
        ember: "#c76743",
        rosewood: "#7f4545",
        paper: "#f6f1e8",
        ink: "#26312d"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"]
      },
      boxShadow: {
        soft: "0 22px 70px rgba(37, 49, 45, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
