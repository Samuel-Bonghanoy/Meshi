/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Tahoma, monospace',
      roboto: ['Roboto', 'sans-serif'],
      slab: ['Roboto Slab', 'serif'],
      rubik: ['Rubik', 'sans-serif'],
    },

    extend: {
      fontSize: {
        huge: ['80rem', { lineHeight: '1' }],
      },
      height: {
        screen: '100dvh',
      },
      colors: {
        midnight: '#0D1017',
      },
    },
  },
  plugins: [],
};
