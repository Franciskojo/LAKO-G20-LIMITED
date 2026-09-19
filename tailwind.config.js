/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          red: '#dc2626',
          darkRed: '#991b1b',
          dark: '#0a0d14',
          surface: '#111726',
          surfaceHover: '#182035',
          border: '#1f293d',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Cabinet Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-orange': '0 0 25px -5px rgba(249, 115, 22, 0.4)',
        'glow-red': '0 0 25px -5px rgba(220, 38, 38, 0.4)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at 50% 0%, rgba(249, 115, 22, 0.15) 0%, rgba(10, 13, 20, 0.95) 75%, #0a0d14 100%)',
        'subtle-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
