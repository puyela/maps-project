/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Ensure Tailwind scans all relevant files for classes
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')], // Include DaisyUI plugin
}
