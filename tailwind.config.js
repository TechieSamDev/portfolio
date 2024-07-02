/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html, js,jsx,ts,tsx}', // Adjust the path to match your project structure
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0E162A',
        secondary: '#102144',
        accent: '#65D3CB',
      },
    },
  },
  plugins: [],
};
