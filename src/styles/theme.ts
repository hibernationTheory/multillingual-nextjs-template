import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
export const materialUITheme = createMuiTheme({
  palette: {
    primary: {
      main: "#ec407a",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});

export const styledComponentsTheme = {
  colors: {
    black: "#111",
    white: "#fff",
    text: "#676767",
  },
  fontSizes: {
    0: "4rem",
    1: "3rem",
    2: "2.5rem",
    3: "2rem",
    4: "1.5rem",
    5: "1.25rem",
    6: "1rem",
    7: "0.875rem",
    8: "0.75rem",
  },
  breakpoints: ["576px", "992px", "1200px"],
  space: [
    0,
    4,
    8,
    12,
    16,
    20,
    24,
    28,
    32,
    36,
    40,
    44,
    48,
    52,
    56,
    60,
    64,
    68,
    72,
    76,
    80,
    100,
    120,
    140,
    160,
    180,
    200,
  ],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  fonts: {
    heading: "'Muli', sans-serif",
    body: "'Roboto', sans-serif",
  },
  lineHeights: {
    solid: 1,
    title: 1.33,
    copy: 1.66,
  },
};
