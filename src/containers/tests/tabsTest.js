import react from "react";
import Theme, { ICONS_SVG } from "../../utils/theme";
import { makeStyles } from "@material-ui/core/styles";
import MetabIconButton from "../../components/atomic/buttons";
import FlexLayout from "../../components/atomic/flexLayout";
import { ICONS } from "../../utils/constants";
import { Divider } from "@material-ui/core";
import TabButton from "../../components/atomic/tabButton";

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

const TabsTest = (props) => {
  const classes = useStyles();
  return (
    <FlexLayout direction="column" className={classes.pinned}>
      <Divider light className={classes.divider} />
      <TabButton></TabButton>
      <TabButton></TabButton>
      <TabButton></TabButton>
      <TabButton></TabButton>
      <TabButton></TabButton>
      <TabButton></TabButton>
      <Divider light className={classes.divider} />
      <TabButton></TabButton>
      <TabButton></TabButton>
      <TabButton></TabButton>
      <TabButton></TabButton>
      <TabButton></TabButton>
      <TabButton></TabButton>
      {props.children}
    </FlexLayout>
  );
};

export default TabsTest;
