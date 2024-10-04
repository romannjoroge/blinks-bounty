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
        background: "var(--background)",
        foreground: "var(--foreground)",
        board_background_color: "#edc087",
        ludo_blue: "#046198",
        ludo_red: "#ed6101",
        ludo_yellow: "#faf10e",
        ludo_green: "#239734"
      },
    },
  },
  plugins: [],
};
export default config;
