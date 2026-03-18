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
        display: ['Zodiak', 'Georgia', 'serif'],
        body: ['General Sans', 'system-ui', 'sans-serif'],
        sans: ['General Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Barbershop Color System
        charcoal: {
          DEFAULT: '#1a1a1a',
          light: '#2a2a2a',
          dark: '#0f0f0f',
        },
        copper: {
          DEFAULT: '#B87333',
          light: '#D4915A',
          dark: '#8B5A2B',
        },
        cream: {
          DEFAULT: '#F8F6F3',
          dark: '#EDE9E4',
        },
        // Legacy colors for compatibility
        black: '#1a1a1a',
        white: '#FFFFFF',
        grey: {
          100: '#F8F6F3',
          200: '#EDE9E4',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#2a2a2a',
          900: '#1a1a1a',
        },
        gold: '#B87333',
        'gold-light': '#D4915A',
        'gold-dark': '#8B5A2B',
      },
      boxShadow: {
        'sharp': '8px 8px 0 rgba(26, 26, 26, 0.1)',
        'sharp-copper': '8px 8px 0 rgba(184, 115, 51, 0.2)',
        'sharp-lg': '12px 12px 0 rgba(26, 26, 26, 0.1)',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
  plugins: [],
}
