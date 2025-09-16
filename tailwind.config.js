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
        // Primary brand color (Navy Blue)
        primary: {
          DEFAULT: '#00008B', // Brand blue
          50: '#e6e6ff',
          100: '#ccccff',
          200: '#9999ff',
          300: '#6666ff',
          400: '#3333ff',
          500: '#0000ff',
          600: '#0000cc',
          700: '#000099',
          800: '#000066',
          900: '#000033',
        },
        // Secondary brand color (Gold)
        secondary: {
          DEFAULT: '#F7941D', // Brand gold
          50: '#fff9e6',
          100: '#fff2cc',
          200: '#ffe5b3',
          300: '#ffd98c',
          400: '#ffcc66',
          500: '#F7941D',
          600: '#e68a00',
          700: '#cc7a00',
          800: '#b36b00',
          900: '#995c00',
        },
        // Neutral colors
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        // Success, Warning, Error, and Info colors
        success: {
          DEFAULT: '#10B981',
          light: '#D1FAE5',
          dark: '#047857',
        },
        warning: {
          DEFAULT: '#F59E0B',
          light: '#FEF3C7',
          dark: '#D97706',
        },
        error: {
          DEFAULT: '#EF4444',
          light: '#FEE2E2',
          dark: '#DC2626',
        },
        info: {
          DEFAULT: '#3B82F6',
          light: '#DBEAFE',
          dark: '#1D4ED8',
        },
        // Legacy color references for backward compatibility
        gold: {
          DEFAULT: '#F7941D',
          50: '#fff9e6',
          100: '#fff2cc',
          200: '#ffe5b3',
          300: '#ffd98c',
          400: '#ffcc66',
          500: '#F7941D',
          600: '#e68a00',
          700: '#cc7a00',
          800: '#b36b00',
          900: '#995c00',
        },
        navy: {
          DEFAULT: '#0D2B4C',
          50: '#e6e8eb',
          100: '#b3b9c2',
          200: '#8f9aab',
          300: '#5c6b84',
          400: '#3d4f6d',
          500: '#0D2B4C',
          600: '#0c2745',
          700: '#091f37',
          800: '#07182b',
          900: '#051220',
        },
        teal: {
          DEFAULT: '#008B8B',
          50: '#e6f7f7',
          100: '#b3e6e6',
          200: '#80d4d4',
          300: '#4dc3c3',
          400: '#1ab2b2',
          500: '#008B8B',
          600: '#007373',
          700: '#005c5c',
          800: '#004545',
          900: '#002e2e',
        },
      },
      // Extend typography and other theme settings
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'brand': '0 4px 14px 0 rgba(13, 43, 76, 0.1)',
        'brand-lg': '0 10px 25px -5px rgba(13, 43, 76, 0.1), 0 10px 10px -5px rgba(13, 43, 76, 0.04)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
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