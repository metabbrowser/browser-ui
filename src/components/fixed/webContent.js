import react from "react";
import Theme from "../../utils/theme";
import Background from "../../assets/images/gmail_screenshot.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    // border: `${Theme.SPACING(3)} solid ${Theme.COLORS.shades.color_5}`,
    // background: Theme.COLORS.shades.color_8,
    borderRadius: Theme.SPACING(15),
    flexGrow: 1,
    height: "87vh",
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    ...Theme.COLORS.effects.medium_blur,
    margin: Theme.SPACING(8),
  },
}));

const WebContent = (props) => {
  const classes = useStyles();
  return <div className={classes.container}>{props.children}</div>;
};

export default WebContent;
