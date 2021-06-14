import react from "react";
import Theme, { ICONS_SVG } from "../../utils/theme";
import MetabIconButton from "../atomic/buttons";
import FlexLayout from "../atomic/flexLayout";
import { ICONS } from "../../utils/constants";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    background: Theme.COLORS.shades.color_8,
    border: `${Theme.COLORS.shades.color_5} solid 1px `,
    borderRadius: Theme.SPACING(200),
    marginRight: Theme.SPACING(10),
  },
  search: {
    minWidth: "fit-content",
    maxWidth: Theme.SPACING(700),
    flexGrow: 1,
  },
  pageTools: {},
}));

const Header = () => {
  const classes = useStyles();
  return (
    <FlexLayout width="100%" flexWrap="no-wrap" justifyContent="flex-start">
      <FlexLayout className={classes.container} height={Theme.SPACING(40)}>
        <MetabIconButton
          showPopOver={true}
          iconSize="medium"
          popOverContent={ICONS_SVG.back.popOverContent}
        >
          {ICONS_SVG.back}
        </MetabIconButton>
        <MetabIconButton
          showPopOver={true}
          iconSize="medium"
          popOverContent={ICONS_SVG.back.popOverContent}
        >
          {ICONS_SVG.next}
        </MetabIconButton>
      </FlexLayout>
      <FlexLayout
        className={`${classes.container} ${classes.search}`}
        height={Theme.SPACING(40)}
        width="100%"
        justifyContent="space-between"
      >
        <FlexLayout>
          <MetabIconButton
            showPopOver={true}
            iconSize="medium"
            iconURL={ICONS[0]}
          />
          <p
            style={{
              ...Theme.FONTS.cabin.subHeading.regular,
              color: Theme.COLORS.shades.color_3,
              cursor: "pointer",
            }}
          >
            Inbox Gmail - 10892 unread
          </p>
        </FlexLayout>
        <FlexLayout>
          <MetabIconButton
            showPopOver={true}
            iconSize="medium"
            popOverContent={ICONS_SVG.back.popOverContent}
          >
            {ICONS_SVG.remove}
          </MetabIconButton>
          <MetabIconButton
            showPopOver={true}
            iconSize="medium"
            popOverContent={ICONS_SVG.back.popOverContent}
          >
            {ICONS_SVG.sidebar}
          </MetabIconButton>
          <MetabIconButton
            showPopOver={true}
            iconSize="medium"
            popOverContent={ICONS_SVG.back.popOverContent}
          >
            {ICONS_SVG.close}
          </MetabIconButton>
        </FlexLayout>
      </FlexLayout>
      <FlexLayout
        className={`${classes.container} ${classes.pageTools}`}
        height={Theme.SPACING(40)}
      >
        <MetabIconButton
          showPopOver={true}
          iconSize="medium"
          popOverContent={ICONS_SVG.back.popOverContent}
        >
          {ICONS_SVG.copy}
        </MetabIconButton>
        <MetabIconButton
          showPopOver={true}
          iconSize="medium"
          popOverContent={ICONS_SVG.back.popOverContent}
        >
          {ICONS_SVG.reload}
        </MetabIconButton>
        <MetabIconButton
          showPopOver={true}
          iconSize="medium"
          popOverContent={ICONS_SVG.back.popOverContent}
        >
          {ICONS_SVG.star}
        </MetabIconButton>
        <MetabIconButton showPopOver={true} iconSize="medium" popOverContent>
          {ICONS_SVG.info}
        </MetabIconButton>
      </FlexLayout>
    </FlexLayout>
  );
};

export default Header;
