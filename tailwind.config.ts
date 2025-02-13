import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      container: {
        screens: {
          lg: "900px",
          xl: "1200px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
