/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E90FF',  //Dodger Blue
        secondary: '#FFFFFF', //White
        accent: '#FFD700',    //Goldenrod
        textPrimary: '#333333', //Dark Gray
        background: '#F5F5F5', //Light Gray
      },
    },
  },
  plugins: [],
}