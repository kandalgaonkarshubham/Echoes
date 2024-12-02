/** @type {import('tailwindcss').Config} */
module.exports = {
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
        primary: "#2f2d2d",
        secondary: "#3c3a3a",
        accent: {
          red: "#e2383e",
          green: "#a1b08e",
          yellow: "#f6ecc9",
          blue: "#cdeff1",
        }
      },
      fontFamily: {
        Syne: ["Syne", "sans-serif"],
        Arch: ["Architects Daughter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
