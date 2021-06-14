import react from "react";
import Header from "../../components/fixed/header";
import LeftSideBar from "../../components/fixed/leftSideBar";
import RightSideBar from "../../components/fixed/rightSideBar";
import Footer from "../../components/fixed/footer";
import SvgTest from "../tests/svgTest";
import Theme from "../../utils/theme";
import FlexLayout from "../../components/atomic/flexLayout";
import WebContent from "../../components/fixed/webContent";
import TabsDivider from "../../components/fixed/tabsDivider";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  webContents: {
    // background: Theme.COLORS.shades.color_8,
    border: `${Theme.COLORS.shades.color_5} solid 1px `,
    borderRadius: Theme.SPACING(20),
    // margin: `${Theme.SPACING(10)} ${Theme.SPACING(2)}`,
    height: "90vh",
    width: "93vw",
    ...Theme.COLORS.effects.medium_blur,
    overflowX: "scroll",
    overflowY: "hidden",
    "&::-webkit-scrollbar": {
      display: "none",
      width: 0,
      background: "transparent",
    },
  },
  fixedView: {
    background: Theme.COLORS.shades.color_7,
  },
}));

const FixedView = () => {
  const classes = useStyles();
  return (
    <FlexLayout
      className={classes.fixedView}
      flexDirection="column"
      alignContent="space-between"
      width="100vw"
      height="100vh"
    >
      <Header />
      {/* <SvgTest /> */}
      <FlexLayout
        width="100vw"
        justifyContent="space-between"
        alignItems="flex-start"
        style={{ flexGrow: 1 }}
      >
        <LeftSideBar style={{ flexGrow: 1 }} />
        <div className={classes.webContents} style={{ flexGrow: 1 }}>
          <FlexLayout width={1620 * 5 + 50}>
            <WebContent />
            <TabsDivider />
            <WebContent />
            <WebContent />
            <WebContent />
            <WebContent />
          </FlexLayout>
        </div>
        <RightSideBar style={{ flexGrow: 1 }} />
      </FlexLayout>
      <Footer />
      {/* <SvgTest /> */}
    </FlexLayout>
  );
};

export default FixedView;
