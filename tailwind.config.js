module.exports = {
  theme: {
    extend: {
      colors: {
        secondary: "#ff9933",
        primary: "#9933ff",
      },
    },
    linearGradientDirections: {
      // defaults to these values
      t: "to top",
      tr: "to top right",
      r: "to right",
      br: "to bottom right",
      b: "to bottom",
      bl: "to bottom left",
      l: "to left",
      tl: "to top left",
    },
    linearGradientColors: {
      primary: ["rgb(255, 81, 0)", "rgb(255, 174, 0)"],

      "red-green-blue": ["#f00", "#0f0", "#00f"],
      "black-white-with-stops": ["#000", "#000 45%", "#fff 55%", "#fff"],
    },
    repeatingLinearGradientDirections: (theme) =>
      theme("linearGradientDirections"), // defaults to this value
    repeatingLinearGradientColors: (theme) => theme("linearGradientColors"), // defaults to {}
    repeatingLinearGradientLengths: {
      // defaults to {}
      sm: "25px",
      md: "50px",
      lg: "100px",
    },
  },
  variants: {
    // all the following default to ['responsive']
    backgroundImage: ["responsive"], // this is for the "bg-none" utility
    linearGradients: ["responsive"],
    radialGradients: ["responsive"],
    conicGradients: ["responsive"],
    repeatingLinearGradients: ["responsive"],
    repeatingRadialGradients: ["responsive"],
    repeatingConicGradients: ["responsive"],
  },
  plugins: [require("tailwindcss-gradients")],
};
