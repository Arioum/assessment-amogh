/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      sm: { min: '260px', max: '449px' },
      md: { min: '450px', max: '639px' },
      lg: { min: '640px', max: '767px' },
      xl: { min: '768px', max: '1023px' },
    },
  },
  plugins: [],
};
