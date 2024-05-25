/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1140px' },
      lg: { max: '768px' },
      md: { max: '560px' },
      sm: { max: '380px' },
    },
  },
  plugins: [],
};
