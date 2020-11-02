module.exports = {
  theme: {
    extend: {
      inset: {
        "4x": "5rem",
      },
      maxWidth: {
        outer: "1280px",
      },
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        primary: "var(--color-primary)",
        "inline-surface": "var(--color-inline-surface)",
        divider: "var(--color-divider)",
      },
      spacing: {
        sm: "24rem",
        ".5x": "0.5rem",
        "1x": "1rem",
        "2x": "2rem",
        "4x": "4rem",
      },
      fontFamily: {
        body: ["Roboto", "sans-serif"],
        display: ["Roboto", "sans-serif"],
      },
    },
    container: {
      center: true,
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: ["src/**/*.js", "src/**/*.css", "src/**/*.vue"],
  },
};
