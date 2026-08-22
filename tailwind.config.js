/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ghibli: {
          cream: '#FAF6EE',
          parchment: '#F2E8D5',
          card: '#FFFEFA',
          red: '#C9402A',
          'red-light': '#FDE8E4',
          'red-hover': '#AB301B',
          navy: '#1A2938',
          'navy-light': '#2C4156',
          gold: '#DF9B35',
          'gold-light': '#FEF3DF',
          green: '#457B59',
          'green-light': '#E8F3EB',
          brown: '#4A3427',
          'brown-light': '#8C6D58',
          border: '#E8DCB8',
          sky: '#EBF4FA',
          'sky-dark': '#CDE3F5',
        }
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['Quicksand', 'Nunito', 'sans-serif'],
        hand: ['"Patrick Hand"', 'cursive'],
        title: ['"Cinzel Decorative"', 'serif'],
      },
      boxShadow: {
        'ghibli-sm': '0 2px 8px rgba(74, 52, 39, 0.08)',
        'ghibli': '0 4px 18px rgba(74, 52, 39, 0.12), 0 1px 3px rgba(74, 52, 39, 0.06)',
        'ghibli-lg': '0 10px 30px rgba(74, 52, 39, 0.16), 0 3px 8px rgba(74, 52, 39, 0.08)',
        'ghibli-inner': 'inset 0 2px 4px rgba(74, 52, 39, 0.06)',
        'stamp': '0 3px 0 #9E2B18',
        'stamp-green': '0 3px 0 #2F5A3E',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1.5deg)' },
        },
        drift: {
          '0%': { transform: 'translateX(-10%)' },
          '100%': { transform: 'translateX(110%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        stampPress: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        drift: 'drift 45s linear infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'stamp-press': 'stampPress 0.2s ease-out',
      }
    },
  },
  plugins: [],
}
