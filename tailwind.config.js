/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // <-- make sure your paths include your files
  ],
  theme: {
    extend: {
      fontFamily: {
        hind: ['"Hind Madurai"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
