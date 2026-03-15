/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-oswald)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        accent: ['var(--font-playfair)', 'serif'],
      },
      colors: {
        navy: '#1A1A2E',
        gold: '#C9A227',
        crimson: '#E94560',
        cream: '#F5F5F0',
      },
    },
  },
  plugins: [],
}
