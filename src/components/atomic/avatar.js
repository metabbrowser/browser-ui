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
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

// TODO: Add badges and avatars.js(which will contain a list of MetabAvatar)
// and <AvatarGroup />(Material UI component)
// Documentation: https://material-ui.com/components/avatars/

const MetabAvatar = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  return (
    <>
      {props.type === "letter" ? (
        <Avatar className={classes.small} variant="square">
          H
        </Avatar> // classname - small | large, variant - square | rounded
      ) : (
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      )}
    </>
  );
};

export default MetabAvatar;
