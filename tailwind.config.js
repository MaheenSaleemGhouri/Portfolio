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
          primary:  '#0A0A0F',
          surface:  '#0F0F1A',
          elevated: '#161625',
        },
        accent: {
          purple: '#A78BFA',
          green:  '#34D399',
          orange: '#FB923C',
          blue:   '#60A5FA',
        },
        tx: {
          primary: '#FFFFFF',
          muted:   '#A0A0C0',
          faint:   '#6B6B8A',
          ghost:   '#3A3A55',
        },
        border: {
          default: '#1C1C28',
          purple:  '#A78BFA33',
          green:   '#34D39933',
        },
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
