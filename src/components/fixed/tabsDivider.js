import react from "react";
import Theme from "../../utils/theme";
import Background from "../../assets/images/gmail_screenshot.png";
import { makeStyles } from "@material-ui/core/styles";
import TabsTest from "../../containers/tests/tabsTest";

const useStyles = makeStyles((theme) => ({
  container: {
    background: Theme.COLORS.shades.color_8,
    border: `${Theme.COLORS.shades.color_5} solid 1px `,
    borderRadius: Theme.SPACING(200),
    margin: `${Theme.SPACING(10)} ${Theme.SPACING(2)}`,
    height: "88vh",
    width: Theme.SPACING(50),
    overflowX: "hidden",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
      width: 0,
      background: "transparent",
    },
  },
}));
const TabsDivider = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div style={{ width: "100px" }}>
        <TabsTest></TabsTest>
        <TabsTest></TabsTest>
      </div>
    </div>
  );
};

export default TabsDivider;
