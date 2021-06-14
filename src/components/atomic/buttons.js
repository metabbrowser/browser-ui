import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { ICONS } from "../../utils/constants";
import IconButton from "@material-ui/core/IconButton";
import PositionedPopper from "./popper";
import KeyShortcuts from "./keyShortcuts";
import KEY_SHORTCUTS from "../../utils/keyShortcuts";
import Theme from "../../utils/theme";
import { ICONS_SVG } from "../../utils/theme";
import IconWrapper from "./iconWrapper";

// TODO: Take the dominant colour pallete from the icons using https://lokeshdhakar.com/projects/color-thief/
// TODO: Add props to customize the component - Popper, size, color, icon
// TODO: Create a icons file and add all custom icons constants

const useStyles = makeStyles((theme) => ({
  button: {
    width: "fit-content",
    height: "fit-content",
  },
  // svg: { ...ICONS_SVG.back.css },
}));

// FIXME: PROPS:
// -iconSize,
// popOverContent,
// -popOverOrientation,
// -showPopOver,
// -iconURL,
// -iconAltText,
// -title,
// extra sizes of icon

const MetabIconButton = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleMouseEnter = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
    setPlacement(newPlacement);
  };
  const handleMouseLeave = () => (event) => {
    setAnchorEl(null);
    setOpen(false);
    setPlacement();
  };

  return (
    <div
      className={classes.button}
      onMouseEnter={
        props.popOverOrientation
          ? handleMouseEnter(props.popOverOrientation)
          : handleMouseEnter("bottom")
      }
      onMouseLeave={handleMouseLeave()}
      title={props.title ? props.title : ""}
    >
      {props?.showPopOver && props?.popOverContent ? (
        <PositionedPopper
          open={open}
          anchorEl={anchorEl}
          placement={placement}
          paperCSS={props?.paperCSS}
        >
          {props?.popOverContent ? (
            <>
              {props?.children?.name ? (
                <>
                  {props?.children?.name} <br />
                </>
              ) : (
                ""
              )}
              {props?.popOverContent}
            </>
          ) : (
            ""
          )}
        </PositionedPopper>
      ) : (
        <></>
      )}
      <IconButton size={props.iconSize ? props.iconSize : "small"}>
        {props.iconURL ? (
          <img
            src={props.iconURL ? props.iconURL : ICONS[0]}
            alt={props.iconAltText ? props.iconAltText : "icon"}
            style={{ width: "15px", height: "15px" }}
          ></img>
        ) : (
          <IconWrapper css={props.children?.css}>
            {props.children?.svg}
          </IconWrapper>
        )}
        {/* <DeleteIcon fontSize="large" /> */}
      </IconButton>
    </div>
  );
};

export default MetabIconButton;
