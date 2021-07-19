import react from "react";
import Theme, { ICONS_SVG } from "../../utils/theme";
import MetabIconButton from "../atomic/button";
import FlexLayout from "../atomic/flexLayout";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  common: {
    borderRadius: `${Theme.SPACING(200)} ${Theme.SPACING(200)} 0 0`,
    textAlign: "center",
    cursor: "pointer",
    ...Theme.FONTS.cabin.subHeading.bold,
    margin: `${Theme.SPACING(10)} ${Theme.SPACING(10)} 0 ${Theme.SPACING(10)}`,
    padding: `${Theme.SPACING(2)} ${Theme.SPACING(100)}`,
  },
  previousTab: {
    background: Theme.COLORS.metab.color_2,
    color: Theme.COLORS.shades.color_8,
  },
  nextTab: {
    background: Theme.COLORS.metab.color_2,
    color: Theme.COLORS.shades.color_8,
  },
  allTabs: {
    flexGrow: 1,
    background: Theme.COLORS.shades.color_6,
    borderRadius: `${Theme.SPACING(100)} ${Theme.SPACING(100)} 0 0`,
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <FlexLayout width="90vw" justifyContent="space-between">
      {/* <MetabIconButton showPopOver={true} iconSize="medium">
        {ICONS_SVG.back}
      </MetabIconButton>
      <MetabIconButton showPopOver={true} iconSize="medium">
        {ICONS_SVG.next}
      </MetabIconButton> */}
      <div className={`${classes.common} ${classes.previousTab}`}>
        Previous Tab
      </div>
      <div className={`${classes.common} ${classes.allTabs}`}>All Tab</div>
      <div className={`${classes.common} ${classes.nextTab}`}>Next Tab</div>
    </FlexLayout>
  );
};

export default Footer;
