/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "#FFFFFF",
        text: "#101011",
        blue: "#AEE1FF", //blue
        purple: "#BAAEFF", // purple
        green: "#AEFFB6", // green
      },
      keyframes: {
        blue: {
          "0%": { top: "200px", right: "-50px", transform: "scale(1)" },
          "30%": { top: "150px", right: "0", transform: "scale(1.2)" },
          "60%": { top: "100px", right: "50px", transform: "scale(1.3)" },
          "100%": { top: "200px", right: "-50x", transform: "scale(1)" },
        },
        purple: {
          "0%": { top: "80px", right: "30px", transform: "scale(1.2)" },
          "30%": { top: "300px", right: "30px", transform: "scale(1)" },
          "60%": { top: "200px", right: "150px", transform: "scale(1)" },
          "100%": { top: "80px", right: "30px", transform: "scale(1.2)" },
        },
        green: {
          "0%": { top: "250px", right: "40px", transform: "scale(1)" },
          "30%": { top: "150px", right: "200px", transform: "scale(1.4)" },
          "60%": { top: "250px", right: "150px", transform: "scale(1)" },
          "100%": { top: "250px", right: "40px", transform: "scale(1)" },
        },
      },
      // animation: {
      //   blue: "blue 8s infinite ease",
      //   purple: "purple 8s infinite ease",
      //   green: "green 8s infinite linear",
      // },
    },
  },
  plugins: [],
};
