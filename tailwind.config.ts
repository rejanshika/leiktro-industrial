import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF5E14",
          "orange-dark": "#E04805",
          "orange-light": "#FF7A38",
          "orange-glow": "rgba(255, 94, 20, 0.15)",
          black: "#0A0A0A",
          "black-surface": "#07090D",
          "black-card": "#111622",
          "black-card-border": "rgba(255, 255, 255, 0.08)",
          white: "#FFFFFF",
          "bg-light": "#F8F9FB",
          "surface-light": "#FFFFFF",
          "border-light": "#E5E7EB",
          "text-muted": "#556070",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
