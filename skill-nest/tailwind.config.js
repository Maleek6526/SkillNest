/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
          colors: {
            'skillnest-blue': '#1E3A8A',
            'skillnest-gray': '#F1F5F9',
            'skillnest-dark': '#0F172A',
          },
          animation: {
            'slide-in-left': 'slideInLeft 0.5s ease-out',
            'slide-in-right': 'slideInRight 0.5s ease-out',
          },
          keyframes: {
            slideInLeft: {
              '0%': { transform: 'translateX(-100%)', opacity: '0' },
              '100%': { transform: 'translateX(0)', opacity: '1' },
            },
            slideInRight: {
              '0%': { transform: 'translateX(100%)', opacity: '0' },
              '100%': { transform: 'translateX(0)', opacity: '1' },
            },
          },
        },
  },
  plugins: [],
}