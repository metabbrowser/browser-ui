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
import { Chip } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";

const useStyles = makeStyles((theme) => ({
  button: {
    width: "fit-content",
    height: "fit-content",
  },
}));

// MetabChip contains logic for one chip
// TODO: Remove excessive import statements

const MetabChip = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  // TODO: onclick, clickable property, onDelete, Avatar(with img & letter)
  // Documentation: https://material-ui.com/components/chips/#chip

  return (
    <Chip
      size={props?.size ? props.size : "small"} // small or medium
      variant={props?.variant ? props.variant : "default"} // default or outlined
      label={props?.label ? props.label : "chip"}
      avatar={"wda"} // TODO: CustomAvatar <Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />
      onClick={handleClick}
      onDelete={handleDelete}
      deleteIcon={<DoneIcon />}
      icon={<DoneIcon />}
      href={props?.href ? props.href : "#chip"}
    />
  );
};

export default MetabChip;
