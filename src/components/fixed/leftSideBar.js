import react from "react";
import Theme, { ICONS_SVG } from "../../utils/theme";
import { makeStyles } from "@material-ui/core/styles";
import MetabIconButton from "../atomic/buttons";
import FlexLayout from "../atomic/flexLayout";
import { ICONS } from "../../utils/constants";
import { Divider } from "@material-ui/core";
import TabsTest from "../../containers/tests/tabsTest";

const useStyles = makeStyles((theme) => ({
  pinned: {
    "& > div": {
      margin: `${Theme.SPACING(1)} ${Theme.SPACING(2)}`,
    },
  },
  divider: {
    width: Theme.SPACING(40),
    color: Theme.COLORS.metab.color_1,
  },
}));

const LeftSideBar = () => {
  const classes = useStyles();
  return <TabsTest />;
};

export default LeftSideBar;
