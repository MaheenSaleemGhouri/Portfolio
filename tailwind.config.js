/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary:  '#0B0D0E',
          surface:  '#1A2024',
          elevated: '#111619',
          footer:   '#080A0B',
        },
        accent: {
          emerald: '#4ECCA3',
          gold:    '#E8C070',
        },
        tx: {
          primary: '#FFFFFF',
          body:    '#D0D8E0',
          muted:   '#8090A0',
        },
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        body:    ['Inter', 'sans-serif'],
        syne:    ['Syne', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
