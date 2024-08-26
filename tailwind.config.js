/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E90FF',  // Dodger Blue
        secondary: '#FFFFFF', // White
        accent: '#FFD700',    // Goldenrod
        textPrimary: '#333333', // Dark Gray
        background: '#F5F5F5', // Light Gray
      },
      animation: {
        'loop-scroll-left': 'loop-scroll-left 60s linear infinite',
        'loop-scroll-right': 'loop-scroll-right 60s linear infinite',
        'loop-scroll-left-md': 'loop-scroll-left 40s linear infinite',
        'loop-scroll-right-md': 'loop-scroll-right 40s linear infinite',
        'loop-scroll-left-sm': 'loop-scroll-left 80s linear infinite',
        'loop-scroll-right-sm': 'loop-scroll-right 80s linear infinite',
      },
      keyframes: {
        "loop-scroll-left": {
          "from": { transform: "translateX(0)" },
          "to": { transform: "translateX(-100%)" },
        },
        "loop-scroll-right": {
          "from": { transform: "translateX(-100%)" },
          "to": { transform: "translateX(0)" },
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ['responsive'],
    },
  },
  plugins: [],
}