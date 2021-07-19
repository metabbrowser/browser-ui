import react from "react";
import { ICONS_SVG } from "../../utils/theme";
import MetabIconButton from "../atomic/button";
import FlexLayout from "../atomic/flexLayout";
const RightSideBar = () => {
  return (
    <FlexLayout direction="column">
      <MetabIconButton
        showPopOver={true}
        iconSize="medium"
        popOverContent={ICONS_SVG.back.popOverContent}
        popOverOrientation="left">
        {ICONS_SVG.camera}
      </MetabIconButton>
      <MetabIconButton
        showPopOver={true}
        iconSize="medium"
        popOverContent={ICONS_SVG.back.popOverContent}
        popOverOrientation="left">
        {ICONS_SVG.notes}
      </MetabIconButton>
      <MetabIconButton
        showPopOver={true}
        iconSize="medium"
        popOverContent={ICONS_SVG.back.popOverContent}
        popOverOrientation="left">
        {ICONS_SVG.snooze}
      </MetabIconButton>
      <MetabIconButton
        showPopOver={true}
        iconSize="medium"
        popOverContent={ICONS_SVG.back.popOverContent}
        popOverOrientation="left">
        {ICONS_SVG.darkMode}
      </MetabIconButton>
      <MetabIconButton
        showPopOver={true}
        iconSize="medium"
        popOverContent={ICONS_SVG.back.popOverContent}
        popOverOrientation="left">
        {ICONS_SVG.scribbble}
      </MetabIconButton>
      <MetabIconButton
        showPopOver={true}
        iconSize="medium"
        popOverContent={ICONS_SVG.back.popOverContent}
        popOverOrientation="left">
        {ICONS_SVG.focus}
      </MetabIconButton>
    </FlexLayout>
  );
};

export default RightSideBar;
