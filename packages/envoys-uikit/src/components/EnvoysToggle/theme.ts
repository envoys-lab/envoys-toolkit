import { darkColors, lightColors } from "../../theme/colors";
import { EnvoysToggleTheme } from "./types";

export const light: EnvoysToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleShadow: lightColors.textDisabled,
};

export const dark: EnvoysToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleShadow: darkColors.textDisabled,
};
