import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F1A13",
        forest: "#0F2A1A",
        forestSoft: "#173A24",
        lime: "#B9E37D",
        limeDeep: "#8CBF47",
        leaf: "#2F7D3E",
        paper: "#F5F6EF",
        muted: "#566057",
        line: "#DCE0D0",
      },
      fontFamily: {
        display: ["var(--font-manrope)", "system-ui", "sans-serif"],
        sans: ["var(--font-public-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: { content: "72rem" },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: { rise: "rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards" },
    },
  },
  plugins: [],
};

export default config;
