import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { ICONS } from "../../utils/constants";
import IconButton from "@material-ui/core/IconButton";
import PositionedPopper from "./popper";
import KeyShortcuts from "./keyShortcuts";
import KEY_SHORTCUTS from "../../utils/keyShortcuts";

// TODO: Take the dominant colour pallete from the icons using https://lokeshdhakar.com/projects/color-thief/
// TODO: Add props to customize the component - Popper, size, color, icon
// TODO: Create a icons file and add all custom icons constants

const useStyles = makeStyles((theme) => ({
  button: {
    width: "fit-content",
    height: "fit-content",
  },
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
          : handleMouseEnter("right")
      }
      onMouseLeave={handleMouseLeave()}
      title={props.title ? props.title : ""}
    >
      {props.showPopOver ? (
        <PositionedPopper open={open} anchorEl={anchorEl} placement={placement}>
          The content of the Popper <br />{" "}
          <KeyShortcuts>{KEY_SHORTCUTS.tab_switching}</KeyShortcuts>
        </PositionedPopper>
      ) : (
        <></>
      )}
      <IconButton size={props.iconSize ? props.iconSize : "small"}>
        {/* ICONS[Math.round(Math.random() * 20)] */}
        <img
          src={props.iconURL ? props.iconURL : ICONS[0]}
          alt={props.iconAltText ? props.iconAltText : "icon"}
          style={{ width: "30px", height: "30px" }}
        ></img>
        {/* <DeleteIcon fontSize="large" /> */}
      </IconButton>
    </div>
  );
};

export default MetabIconButton;
