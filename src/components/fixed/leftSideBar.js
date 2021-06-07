import react from "react";
import Theme, { ICONS_SVG } from "../../utils/theme";
import { makeStyles } from "@material-ui/core/styles";
import MetabIconButton from "../atomic/buttons";
import FlexLayout from "../atomic/flexLayout";
import { ICONS } from "../../utils/constants";
import { Divider } from "@material-ui/core";

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
  return (
    <FlexLayout direction="column" className={classes.pinned}>
      <Divider light className={classes.divider} />
      <MetabIconButton
        showPopOver={false}
        iconSize="medium"
        iconURL={ICONS[Math.round(Math.random() * 20)]}
      ></MetabIconButton>
      <MetabIconButton
        showPopOver={false}
        iconSize="medium"
        iconURL={ICONS[Math.round(Math.random() * 20)]}
      ></MetabIconButton>
      <MetabIconButton
        showPopOver={false}
        iconSize="medium"
        iconURL={ICONS[Math.round(Math.random() * 20)]}
      ></MetabIconButton>
      <MetabIconButton
        showPopOver={false}
        iconSize="medium"
        iconURL={ICONS[Math.round(Math.random() * 20)]}
      ></MetabIconButton>
      <MetabIconButton
        showPopOver={false}
        iconSize="medium"
        iconURL={ICONS[Math.round(Math.random() * 20)]}
      ></MetabIconButton>
      <MetabIconButton
        showPopOver={false}
        iconSize="medium"
        iconURL={ICONS[Math.round(Math.random() * 20)]}
      ></MetabIconButton>
      <Divider light className={classes.divider} />
      <MetabIconButton
        showPopOver={false}
        iconSize="medium"
        iconURL={ICONS[Math.round(Math.random() * 20)]}
      ></MetabIconButton>
      <MetabIconButton
        showPopOver={false}
        iconSize="medium"
        iconURL={ICONS[Math.round(Math.random() * 20)]}
      ></MetabIconButton>
      <MetabIconButton
        showPopOver={false}
        iconSize="medium"
        iconURL={ICONS[Math.round(Math.random() * 20)]}
      ></MetabIconButton>
      <MetabIconButton
        showPopOver={false}
        iconSize="medium"
        iconURL={ICONS[Math.round(Math.random() * 20)]}
      ></MetabIconButton>
      <MetabIconButton
        showPopOver={false}
        iconSize="medium"
        iconURL={ICONS[Math.round(Math.random() * 20)]}
      ></MetabIconButton>
      <MetabIconButton
        showPopOver={false}
        iconSize="medium"
        iconURL={ICONS[Math.round(Math.random() * 20)]}
      ></MetabIconButton>
    </FlexLayout>
  );
};

export default LeftSideBar;
