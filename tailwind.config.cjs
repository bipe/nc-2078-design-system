/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 24,
      xl: 32,
      '2xl': 48,
      '3xl': 64
    },
    colors: {
      'gray-100': '#E1E1E6',
      'gray-600': '#7C7C8A',
      'gray-800': '#202024',

      'yellow-500': '#F3E600',

      'black': '#000000',
      'white': '#FFFFFF',
    },
    extend: {
      fontFamily: {
        sans: 'Rajdhani, sans-serif'
      },
    },
  },
  plugins: [],
}
 