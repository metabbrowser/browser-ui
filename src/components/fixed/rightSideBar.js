import react from "react";
import { ICONS_SVG } from "../../utils/theme";
import MetabIconButton from "../atomic/buttons";
import FlexLayout from "../atomic/flexLayout";
const RightSideBar = () => {
  return (
    <FlexLayout direction="column">
      <MetabIconButton showPopOver={true} iconSize="medium">
        {ICONS_SVG.back}
      </MetabIconButton>
      <MetabIconButton showPopOver={true} iconSize="medium">
        {ICONS_SVG.next}
      </MetabIconButton>
    </FlexLayout>
  );
};

export default RightSideBar;
