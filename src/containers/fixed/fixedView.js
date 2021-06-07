import react from "react";
import Header from "../../components/fixed/header";
import LeftSideBar from "../../components/fixed/leftSideBar";
import RightSideBar from "../../components/fixed/rightSideBar";
import Footer from "../../components/fixed/footer";
import SvgTest from "../tests/svgTest";
import Theme from "../../utils/theme";
import FlexLayout from "../../components/atomic/flexLayout";
import Background from "../../assets/images/gmail_screenshot.png";
const FixedView = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: Theme.COLORS.shades.color_7,
      }}
    >
      <Header />
      {/* <SvgTest /> */}
      <FlexLayout
        width="100vw"
        height="89vh"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <LeftSideBar />
        <div
          style={{
            // border: `${Theme.SPACING(3)} solid ${Theme.COLORS.shades.color_5}`,
            // background: Theme.COLORS.shades.color_8,
            borderRadius: Theme.SPACING(15),
            flexGrow: 1,
            height: "88vh",
            backgroundImage: `url(${Background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            ...Theme.COLORS.effects.medium_blur,
          }}
        ></div>
        <RightSideBar />
      </FlexLayout>
      <Footer />
      {/* <SvgTest /> */}
    </div>
  );
};

export default FixedView;
