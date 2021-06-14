// https://material-ui.com/components/popper/

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import Theme from "../../utils/theme";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: `${Theme.SPACING(8)} ${Theme.SPACING(8)}`,
    ...Theme.FONTS.cabin.small.bold,
    color: Theme.COLORS.shades.color_2,
  },
  paper: {
    background: Theme.COLORS.shades.color_8,
    borderRadius: Theme.SPACING(10),
    margin: Theme.SPACING(4),
    ...Theme.COLORS.effects.medium_blur,
  },
  popper: {
    cursor: "pointer",
  },
}));

export default function PositionedPopper(props) {
  const classes = useStyles();
  return (
    <Popper
      open={props.open}
      anchorEl={props.anchorEl}
      placement={props.placement}
      transition
      disablePortal={false}
      modifiers={{
        flip: {
          enabled: true,
        },
        preventOverflow: {
          enabled: true,
          boundariesElement: "scrollParent",
        },
        arrow: {
          enabled: true,
          // element: props.anchorEl,
        },
      }}
      className={classes.popper}
      style={{ ...props?.paperCSS }}
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Paper className={classes.paper}>
            <div className={classes.content}>{props.children}</div>
          </Paper>
        </Fade>
      )}
    </Popper>
  );
}

// Possible values.
//  top-start,
//  top,
//  top-end,
//  left-start,
//  left,
//  left-end,
//  right-start,
//  right,
//  right-end,
//  bottom-start,
//  bottom,
//  bottom-end
