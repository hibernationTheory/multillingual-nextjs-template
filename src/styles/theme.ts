import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import merge from "lodash/merge";

const defaultMuiTheme = createMuiTheme();
const customTheme = merge({}, defaultMuiTheme, {
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

console.log(customTheme);

export const materialUITheme = createMuiTheme(customTheme);
export const styledComponentsTheme = customTheme;
