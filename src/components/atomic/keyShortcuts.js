import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Theme from "../../utils/theme";

const useStyles = makeStyles((theme) => ({
  key: {
    width: "fit-content",
    height: "fit-content",
    padding: `${Theme.SPACING(2)} ${Theme.SPACING(4)} `,
    background: Theme.COLORS.metab.color_1,
    ...Theme.FONTS.cabin.subHeading,
    color: Theme.COLORS.shades.color_8,
    borderRadius: Theme.SPACING(4),
  },
}));

const KeyShortcuts = (props) => {
  const classes = useStyles();
  let keys = props.children.split("|");
  return keys.map((ele, i) => {
    return (
      <>
        <span className={classes.key}>{ele}</span>
        {ele[i + 1] ? <span> + </span> : ""}
      </>
    );
  });
};

export default KeyShortcuts;
