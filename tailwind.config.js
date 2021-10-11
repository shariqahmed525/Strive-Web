const colors = {
  theme: "#ff5757",
  "theme-medium": "#ee4c55",
  "theme-advance": "#ed3e3c",
  black: "#000",
  dark: "#0e0e0e",
};

// tailwind.config.js
module.exports = {
  purge: {
    enabled: true,
    preserveHtmlElements: false,
    layers: ["components", "pages", "lib", "utilities"],
    content: [
      "./components/**/*.js",
      "./pages/**/*.js",
      "./lib/**/*.js",
      "./src/**/*.html",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sl: "360px",
      xxs: "425px",
      xs: "540px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      ...colors,
    }),
    extend: {
      backgroundImage: {
        "home-banner": "url('/assets/images/home-banner.jpg')",
      },
      opacity: {
        15: "0.15",
        35: "0.35",
        65: "0.65",
      },
      colors: {
        ...colors,
      },
      width: {
        "45%": "45%",
      },
      margin: {
        "1/2": "50%",
      },
      height: {
        92: "28rem",
        80: "24rem",
        76: "20rem",
        18: "4.5rem",
        22: "5.5rem",
        120: "28rem",
        125: "30rem",
        132: "32rem",
        "full-10": "calc(100% - 2rem)",
        custom: "calc(100vh - 6rem)",
        "custom-2": "calc(100vh - 10rem)",
        "screen/2": "calc(100vh / 2)",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
        "screen/5": "calc(100vh / 5)",
        vh: "10vh",
        "vh-1.5": "15vh",
        "vh-2": "20vh",
        "vh-2.5": "25vh",
        "vh-3": "30vh",
        "vh-3.5": "35vh",
        "vh-4": "40vh",
        "vh-4.5": "45vh",
        "vh-5": "50vh",
        "vh-5.5": "55vh",
        "vh-6": "60vh",
        "vh-6.5": "65vh",
        "vh-7": "70vh",
        "vh-7.5": "75vh",
        "vh-8": "80vh",
        "vh-8.5": "85vh",
        "vh-9": "90vh",
        "vh-9.5": "95vh",
      },
      maxHeight: {
        500: "500px",
      },
      minHeight: {
        90: "90px",
        custom: "calc(100vh - 6rem)",
      },
    },
  },
  variants: {
    extend: {
      padding: ["hover"],
      height: ["hover"],
    },
  },
  plugins: [],
};
