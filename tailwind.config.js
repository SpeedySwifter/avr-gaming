module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        headline: ['Oswald', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      colors: {
        avrblue: "#70ccff",
        avrneonblue: "#00f0ff",
      },
      animation: {
        pulseSlow: "pulseSlow 4s ease-in-out infinite",
      },
      keyframes: {
        pulseSlow: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
