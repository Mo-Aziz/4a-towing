/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: { sm: "340px", md: "540px", lg: "768px", xl: "1180px" },
      // animation: {
      //   move: "move 3s linear infinite",
      // },
      container: {
        center: true,
        padding: {
          DEFAULT: "0.75rem",
          md: "2rem",
          lg: "1rem",
          xl: ".5rem",
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    fontFamily: {
      Jost: ["Jost", "sans-serif"],
      Lobster: ["Lobster", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
