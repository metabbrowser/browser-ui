import Theme from "./theme";
import { THEMES } from "./constants";

const SetTheme = (themeName) => {
  switch (themeName) {
    case THEMES.DARK:
      Theme.COLORS.black = "6987adv";
      break;
    default:
      Theme.COLORS.black = "9999";
  }
};

export default SetTheme;
