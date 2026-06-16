/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1a1a2e",
          light: "#252545",
          dark: "#0f0f1a",
        },
        gold: {
          DEFAULT: "#c9a84c",
          light: "#e0c070",
          dark: "#a8872e",
        },
        cream: {
          DEFAULT: "#f8f7f4",
          dark: "#f0ede6",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      fontSize: {
        "display-xl": ["5rem", { lineHeight: "1.0", letterSpacing: "-0.02em" }],
        "display-lg": ["4rem", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        "display-md": ["3rem", { lineHeight: "1.1" }],
      },
      letterSpacing: {
        widest2: "0.25em",
        widest3: "0.3em",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [],
};
