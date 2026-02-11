/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#0f172a',
          light: '#f8fafc',
          accent: '#3b82f6', // Electric Blue
          secondary: '#8b5cf6', // Violet
        }
      }
    },
  },
  plugins: [],
}
