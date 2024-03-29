module.exports = {
  node:"jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {}
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
