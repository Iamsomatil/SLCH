/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette
        gold: '#F7941D', // mapped to brand orange for continuity with existing class usage
        navy: '#0D2B4C', // updated to brand navy
        brand: {
          navy: '#0D2B4C',
          orange: '#F7941D',
          'navy-900': '#0A223C',
          'navy-700': '#12365F',
          'orange-700': '#D97812',
          'gray-50': '#F7F9FC',
          'gray-500': '#6B7280',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      boxShadow: {
        soft: '0 10px 25px rgba(13,43,76,0.08)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
      },
    },
  },
  plugins: [],
};