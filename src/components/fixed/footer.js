import react from "react";
import { ICONS_SVG } from "../../utils/theme";
import MetabIconButton from "../atomic/buttons";
import FlexLayout from "../atomic/flexLayout";
const Footer = () => {
  return (
    <FlexLayout width="100vw">
      <MetabIconButton showPopOver={true} iconSize="medium">
        {ICONS_SVG.back}
      </MetabIconButton>
      <MetabIconButton showPopOver={true} iconSize="medium">
        {ICONS_SVG.next}
      </MetabIconButton>
    </FlexLayout>
  );
};

export default Footer;
