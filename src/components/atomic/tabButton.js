import react from "react";
import Theme, { ICONS_SVG } from "../../utils/theme";
import { makeStyles } from "@material-ui/core/styles";
import MetabIconButton from "./button";
import FlexLayout from "../../components/atomic/flexLayout";
import { ICONS } from "../../utils/constants";
import screenshot from "../../assets/images/gmail_screenshot.png";

const useStyles = makeStyles((theme) => ({
  heading: { paddingLeft: Theme.SPACING(8) },
  icon: {
    width: Theme.SPACING(15),
    height: Theme.SPACING(15),
  },
  screenshot: {
    borderRadius: Theme.SPACING(10),
    width: Theme.SPACING(200),
    height: Theme.SPACING(150),
    marginTop: Theme.SPACING(8),
  },
}));

// TabButton creates a tab icon in the tab bar which has a popover, icon and
// TODO: a onclick function

const TabButton = (props) => {
  const classes = useStyles();
  const icon = ICONS[Math.round(Math.random() * 20)];
  return (
    <MetabIconButton
      showPopOver={true}
      iconSize="medium"
      iconURL={icon}
      popOverContent={
        <>
          <FlexLayout>
            <img src={icon} alt="Heading Text" className={classes.icon}></img>{" "}
            <span className={classes.heading}>Webpage Heading Name Text</span>
          </FlexLayout>
          <img
            src={screenshot}
            alt="Heading Text"
            className={classes.screenshot}></img>
        </>
      }
      paperCSS={{ marginLeft: Theme.SPACING(40) }}
      popOverOrientation="right"></MetabIconButton>
  );
};

export default TabButton;
