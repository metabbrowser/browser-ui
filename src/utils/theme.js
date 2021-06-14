import KeyShortcuts from "../components/atomic/keyShortcuts";
import KEY_SHORTCUTS from "./keyShortcuts";
import { ReactComponent as Back } from "../assets/icons/Back.svg";
import { ReactComponent as Camera } from "../assets/icons/Camera.svg";
import { ReactComponent as Close } from "../assets/icons/Close.svg";
import { ReactComponent as Copy } from "../assets/icons/Copy.svg";
import { ReactComponent as DarkMode } from "../assets/icons/DarkMode.svg";
import { ReactComponent as Drag } from "../assets/icons/Drag.svg";
import { ReactComponent as Focus } from "../assets/icons/Focus.svg";
import { ReactComponent as Info } from "../assets/icons/Info.svg";
import { ReactComponent as Next } from "../assets/icons/Next.svg";
import { ReactComponent as Notes } from "../assets/icons/Notes.svg";
import { ReactComponent as Reload } from "../assets/icons/Reload.svg";
import { ReactComponent as Remove } from "../assets/icons/Remove.svg";
import { ReactComponent as Scribbble } from "../assets/icons/Scribbble.svg";
import { ReactComponent as Sidebar } from "../assets/icons/Sidebar.svg";
import { ReactComponent as Snooze } from "../assets/icons/Snooze.svg";
import { ReactComponent as Star } from "../assets/icons/Star.svg";
import { ReactComponent as Video } from "../assets/icons/Video.svg";
// default theme

//TODO: Change it to Cabin

const common = {
  text: "C4C4C4",
  fontProperties: {
    color: "#C4C4C4",
    fontFamily: "Roboto",
    fontStyle: "normal",
    lineHeight: "152.02%",
    /* or 24px */
    // fontFeatureSettings: 'salt' on;
  },
};

let COLORS = {
  shades: {
    color_1: "#000000", // pure black
    color_2: "#342E2D", // black
    color_3: "#727272", // black-text
    color_4: "#9B9B9B", // grey
    color_5: "#E2E2E2", // lightgrey
    color_6: "#EEEDED", // faintgrey
    color_7: "#F8F9FA", // ghostwhite
    color_8: "#FFFFFF", // white
  },
  workspace: {
    color_1: "#222222", // black
    color_2: "#3778FF", // metab-bluw
    color_3: "#48B2FF", // sky-blue
    color_4: "#F6D00C", // green
    color_5: "#FBC400", // yellow
    color_6: "#FF602E", // red
  },
  metab: {
    color_1: "#3778FF", // primary
    color_2: "#48B2FF", // secondary
  },
  colors: {
    color_1: "#56D00C", // green
    color_2: "#EF243D", // red
    color_3: "#FF5C9C", // pink
    color_4: "#7B61FF", // violet
  },
  gradient: {
    gradient_1: `linear-gradient(90deg, #FF59F8 0%, #AE72FF 19.79%, #90E9ED 40.62%, #5CD167 61.98%, #FFEE00 82.53%)`, // rainbow
    gradient_2: `linear-gradient(180deg, #48B2FF 57.81%, #3778FF 96.87%)`, // blues
  },
  effects: {
    subtle_blue: {
      background: common.text,
      boxShadow: `0px 3px 7px rgba(0, 99, 216, 0.11)`,
    },
    bluish: {
      background: common.text,
      boxShadow: `0px 1px 4px rgba(0, 49, 152, 0.2), 0px 4px 5px rgba(0, 65, 125, 0.32), 0px 1px 25px rgba(55, 120, 255, 0.3)`,
    },
    big_blur: {
      background: common.text,
      boxShadow: `0px 11px 16px rgba(0, 0, 0, 0.32), 0px 11px 55px rgba(0, 0, 0, 0.3)`,
    },
    medium_blur: {
      background: common.text,
      boxShadow: `0px 11px 16px rgba(0, 0, 0, 0.12), 0px 1px 65px rgba(0, 0, 0, 0.21)`,
    },
  },
  icons: {
    color_1: "#56D00C", // black
  },
};
const FONTS = {
  cabin: {
    heading: {
      bold: {
        fontWeight: "bold",
        fontSize: "16px",
        ...common.fontProperties,
      },
      regular: {
        fontWeight: "normal",
        fontSize: "16px",
        ...common.fontProperties,
      },
    },
    subHeading: {
      bold: {
        fontWeight: "bold",
        fontSize: "14px",
        ...common.fontProperties,
      },
      regular: {
        fontWeight: "normal",
        fontSize: "14px",
        ...common.fontProperties,
      },
    },
    subText: {
      bold: {
        fontWeight: "bold",
        fontSize: "12px",
        ...common.fontProperties,
      },
      regular: {
        fontWeight: "normal",
        fontSize: "12px",
        ...common.fontProperties,
      },
    },
    small: {
      bold: {
        fontWeight: "bold",
        fontSize: "10px",
        ...common.fontProperties,
      },
      regular: {
        fontWeight: "normal",
        fontSize: "10px",
        ...common.fontProperties,
      },
      italic: {
        fontWeight: "normal",
        fontSize: "16px",
        ...common.fontProperties,
        fontStyle: "italic",
      },
    },
    ultraSmall: {
      bold: {
        fontWeight: "normal",
        fontSize: "9px",
        ...common.fontProperties,
      },
    },
  },
};
const SPACING = (spacing) => {
  return `${spacing}px`;
};

const Theme = {
  COLORS,
  FONTS,
  SPACING,
};
console.log("themes");

const changeColors = (color1, color2, color3, color4) => {
  return {
    "& > *": {
      fill: color1,
      stroke: color2,
    },
    "& path": {
      fill: color3,
      stroke: color4,
    },
  };
};

export let ICONS_SVG = {
  back: {
    svg: <Back />,
    name: "Back",
    css: changeColors(
      null,
      Theme.COLORS.icons.color_1,
      null,
      Theme.COLORS.icons.color_1
    ),
    popOverContent: <KeyShortcuts>{KEY_SHORTCUTS.back}</KeyShortcuts>,
  },
  camera: {
    svg: <Camera />,
    name: "Camera",
    css: changeColors(
      Theme.COLORS.icons.color_1,
      null,
      Theme.COLORS.icons.color_1,
      null
    ),
    popOverContent: <KeyShortcuts>{KEY_SHORTCUTS.screenshot}</KeyShortcuts>,
  },
  close: {
    svg: <Close />,
    name: "Close",
    css: changeColors(
      Theme.COLORS.icons.color_1,
      null,
      Theme.COLORS.icons.color_1,
      null
    ),
  },
  copy: {
    svg: <Copy />,
    name: "Copy",
    css: changeColors(
      Theme.COLORS.icons.color_1,
      null,
      Theme.COLORS.icons.color_1,
      null
    ),
  },
  darkMode: {
    svg: <DarkMode />,
    name: "Dark Mode",
    css: changeColors(
      Theme.COLORS.icons.color_1,
      null,
      Theme.COLORS.icons.color_1,
      null
    ),
  },
  drag: {
    svg: <Drag />,
    name: "Drag",
    css: changeColors(
      Theme.COLORS.icons.color_1,
      null,
      Theme.COLORS.icons.color_1,
      null
    ),
  },
  focus: {
    svg: <Focus />,
    name: "Focus",
    css: changeColors(
      Theme.COLORS.icons.color_1,
      null,
      Theme.COLORS.icons.color_1,
      null
    ),
  },
  info: {
    svg: <Info />,
    name: "Info",
    css: changeColors(
      Theme.COLORS.icons.color_1,
      null,
      Theme.COLORS.icons.color_1,
      null
    ),
  },
  next: {
    svg: <Next />,
    name: "Next",
    css: changeColors(
      null,
      Theme.COLORS.icons.color_1,
      null,
      Theme.COLORS.icons.color_1
    ),
  },
  notes: {
    svg: <Notes />,
    name: "Notes",
    css: changeColors(
      Theme.COLORS.icons.color_1,
      null,
      Theme.COLORS.icons.color_1,
      null
    ),
  },
  reload: {
    svg: <Reload />,
    name: "Reload",
    css: changeColors(
      null,
      null,
      Theme.COLORS.icons.color_1,
      Theme.COLORS.icons.color_1
    ),
  },
  remove: {
    svg: <Remove />,
    name: "Minimize",
    css: changeColors(null, null, Theme.COLORS.icons.color_1, null),
  },
  scribbble: {
    svg: <Scribbble />,
    name: "Scribbble",
    css: changeColors(
      null,
      Theme.COLORS.icons.color_1,
      null,
      Theme.COLORS.icons.color_1
    ),
  },
  sidebar: {
    svg: <Sidebar />,
    name: "Split Screen",
    css: changeColors(
      Theme.COLORS.icons.color_1,
      null,
      Theme.COLORS.icons.color_1,
      null
    ),
  },
  snooze: {
    svg: <Snooze />,
    name: "Snooze",
    css: changeColors(
      Theme.COLORS.icons.color_1,
      null,
      Theme.COLORS.icons.color_1,
      null
    ),
  },
  star: {
    svg: <Star />,
    name: "Bookmark",
    css: changeColors(
      Theme.COLORS.icons.color_1,
      null,
      Theme.COLORS.icons.color_1,
      null
    ),
  },
  video: {
    svg: <Video />,
    name: "Video Conference",
    css: changeColors(
      Theme.COLORS.icons.color_1,
      null,
      Theme.COLORS.icons.color_1,
      null
    ),
  },
};

export default Theme;
