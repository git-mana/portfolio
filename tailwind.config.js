/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'scale-opacity': 'transform, opacity',
      },
      fontFamily: {
      alegreya: ['"Alegreya Sans"', 'sans-serif'],},
      animation: {
        pingOnce: 'popup 0.5s ease-in-out',
      },
      keyframes: {
       
        popup: {
          '0%': { transform: 'scale(0.8)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
      },
    }
  },
  plugins: [],
}

