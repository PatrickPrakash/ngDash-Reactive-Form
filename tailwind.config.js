module.exports = {
  // mode: "jit",
  content : [
    "./src/**/*.{html,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  darkMode : "media", // or 'media' or 'class'
  important : true,
  theme : {
    extend : {},
    fontFamily : {
      sans : [
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      body : [ "Inter", "sans-serif" ],
    },
  },

  variants : {
    extend : {},
  },

  plugins : [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("tw-elements/dist/plugin"),
  ],
};
