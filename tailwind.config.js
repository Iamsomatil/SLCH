/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand colors - direct color references
        gold: '#F7941D',
        navy: '#0D2B4C',
        
        // Color scales for consistency
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        // Additional brand colors with scales
        gold: {
          DEFAULT: '#F7941D',
          50: '#fdf8e3',
          100: '#fce4b4',
          200: '#f9d794',
          300: '#f7c67d',
          400: '#f5b85c',
          500: '#F7941D',
          600: '#f68c0a',
          700: '#f57a07',
          800: '#f45c04',
          900: '#f33d02',
        },
        navy: {
          DEFAULT: '#0D2B4C',
          50: '#e5e9f2',
          100: '#d1d9e6',
          200: '#b8c5e4',
          300: '#9fb3e1',
          400: '#8499d7',
          500: '#0D2B4C',
          600: '#0a2a4a',
          700: '#082a43',
          800: '#062b3c',
          900: '#042a33',
        },
        teal: '#008B8B',
        slate: '#4A5568',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'gradient-shift': 'gradient-shift 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.6s ease-out forwards',
      },
      ringWidth: {
        DEFAULT: '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-gradient': {
          background: 'linear-gradient(90deg, #0ea5e9 0%, #0d9488 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.glass': {
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(10px)',
          '-webkit-backdrop-filter': 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};