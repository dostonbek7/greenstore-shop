/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "450px",
      md: "768px",
      lg: "991px",
    },
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        Unna: ["Unna", "sans-serif"],
      },
      colors: {
        "light-green": "#5C9735",
        'darkness': "#141A0F",
        'gray':'#4D4F48',
        'cool-color':'#AAACA8',
        'snow-green':"#C6D8C0",
        'closed-shutter':'#26222F',
        'brequetty-gray':"#515151",
        
      },
    },
  },
  plugins: [],
};
