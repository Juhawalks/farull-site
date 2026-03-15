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
        background: "#FAF7F2",
        foreground: "#1A1916",
        primary: "#2D5A3D",
        accent: "#C8A26B",
        surface: "#E8E0D4",
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-outfit)", "sans-serif"],
      },
      borderRadius: {
        soft: "8px",
      },
    },
  },
  plugins: [],
};
export default config;
