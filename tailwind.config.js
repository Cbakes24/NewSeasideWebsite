/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}']
  theme: {
    extend: {
      colors: {
        'peach': '#faaa86',
        'teal': '#4f878b',
        'sand': '#e3cea5',
        'orange': '#ee9550',
        'offwhite': '#fefcf2',
      },
      width: {
                '72': '18rem',
                '84': '21rem',
                '96': '24rem',
            },
    },
  },
  plugins: [],
};
