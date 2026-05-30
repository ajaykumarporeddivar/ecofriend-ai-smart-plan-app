/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'emerald-brand': '#047857', // A deeper, nature-inspired green
        'forest-accent': '#16A34A', // A vibrant, growth-oriented green
        'mint-light': '#D1FAE5',    // A soft, calming green
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}